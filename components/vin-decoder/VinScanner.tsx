'use client';

import React, { 
  useState, 
  useCallback, 
  useEffect, 
  useRef,
} from 'react';
import { useVinScannerCamera } from '@/hooks/useVinScannerCamera';
import { 
  X, Zap, ZapOff, AlertTriangle, 
  CheckCircle, Camera, Activity
} from 'lucide-react';

interface VinScannerProps {
  isOpen: boolean;
  onClose: () => void;
  onVinExtracted: (vin: string) => void;
  autoCloseOnSuccess?: boolean;
  closeDelay?: number;
}

// Scanner configuration
const SCAN_CONFIG = {
  LOW_QUALITY_INTERVAL: 300,    // ms between low quality scans
  HIGH_QUALITY_INTERVAL: 1000,  // ms between high quality scans
  MAX_QUEUE_SIZE: 2,            // max parallel scans
  SCAN_TIMEOUT: 5000,           // API timeout
};

interface ScanMetrics {
  fps: number;
  scansPerSecond: number;
  queueSize: number;
  totalScans: number;
  successRate: number;
}

const VinScanner: React.FC<VinScannerProps> = ({ 
  isOpen, 
  onClose, 
  onVinExtracted,
  autoCloseOnSuccess = true,
  closeDelay = 1500
}) => {
  // Core states
  const [processedVin, setProcessedVin] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Scanner states
  const [isScanning, setIsScanning] = useState(false);
  const [scanStatus, setScanStatus] = useState('Initializing camera...');
  const [scanMetrics, setScanMetrics] = useState<ScanMetrics>({
    fps: 0,
    scansPerSecond: 0,
    queueSize: 0,
    totalScans: 0,
    successRate: 0,
  });
  
  // UI states
  const [showDebugPanel, setShowDebugPanel] = useState(false);
  
  // Refs
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Performance refs
  const animationFrameRef = useRef<number>(0);
  const lastLowQualityScanRef = useRef<number>(0);
  const lastHighQualityScanRef = useRef<number>(0);
  const activeScanCountRef = useRef<number>(0);
  const scanSuccessCountRef = useRef<number>(0);
  const isMountedRef = useRef<boolean>(true);
  const scannerActiveRef = useRef<boolean>(false);
  
  // FPS tracking
  const fpsFramesRef = useRef<number>(0);
  const fpsLastTimeRef = useRef<number>(performance.now());

  const { 
    isCameraActive, 
    isFlashOn, 
    startCamera, 
    stopCameraStream, 
    toggleFlashlight,
    showFlashButton
  } = useVinScannerCamera({ videoRef });

  // Lifecycle
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // Optimized frame capture
  const captureFrame = useCallback((quality: 'low' | 'medium' | 'high' = 'medium'): Promise<Blob | null> => {
    return new Promise((resolve) => {
      if (!videoRef.current || !canvasRef.current) {
        resolve(null);
        return;
      }
      
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      if (video.readyState !== 4 || video.videoWidth === 0) {
        resolve(null);
        return;
      }
      
      const ctx = canvas.getContext('2d', { 
        alpha: false,
        desynchronized: true,
        willReadFrequently: true 
      });
      
      if (!ctx) {
        resolve(null);
        return;
      }

      const presets = {
        'low': { width: 640, height: 160, quality: 0.7 },
        'medium': { width: 960, height: 240, quality: 0.8 },
        'high': { width: 1280, height: 320, quality: 0.9 }
      };

      const preset = presets[quality];
      
      // Calculate crop region
      const sourceAspect = video.videoWidth / video.videoHeight;
      const targetAspect = preset.width / preset.height;
      
      let sx = 0, sy = 0, sw = video.videoWidth, sh = video.videoHeight;
      
      if (sourceAspect > targetAspect) {
        sw = video.videoHeight * targetAspect;
        sx = (video.videoWidth - sw) / 2;
      } else {
        sh = video.videoWidth / targetAspect;
        sy = (video.videoHeight - sh) / 2;
      }
      
      canvas.width = preset.width;
      canvas.height = preset.height;
      
      try {
        ctx.drawImage(video, sx, sy, sw, sh, 0, 0, preset.width, preset.height);
        
        canvas.toBlob(
          (blob) => resolve(blob),
          'image/jpeg',
          preset.quality
        );
      } catch (error) {
        console.error('Capture error:', error);
        resolve(null);
      }
    });
  }, []);

  // API call
  const scanImage = useCallback(async (blob: Blob, quality: string): Promise<{ vin?: string; error?: string }> => {
    if (activeScanCountRef.current >= SCAN_CONFIG.MAX_QUEUE_SIZE) {
      return { error: 'Queue full' };
    }
    
    activeScanCountRef.current++;
    
    const formData = new FormData();
    formData.append('file', blob, 'scan.jpg');
    formData.append('quality_hint', quality);
    
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), SCAN_CONFIG.SCAN_TIMEOUT);
      
      const response = await fetch('/api/vin-scan', {
        method: 'POST',
        body: formData,
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.vin) {
        scanSuccessCountRef.current++;
        return { vin: result.vin };
      }
      
      return { error: result.error || 'No VIN detected' };
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        return { error: 'Timeout' };
      }
      return { error: error instanceof Error ? error.message : 'Unknown error' };
    } finally {
      activeScanCountRef.current--;
    }
  }, []);

  // Handle successful VIN detection
  const handleVinDetected = useCallback((vin: string) => {
    if (processedVin) return;
    
    console.log('VIN DETECTED:', vin);
    setProcessedVin(vin);
    setScanStatus(`VIN Found: ${vin}`);
    stopScanning();
    
    onVinExtracted(vin);
    
    if (autoCloseOnSuccess) {
      setTimeout(() => {
        if (isMountedRef.current) {
          handleClose();
        }
      }, closeDelay);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [processedVin, onVinExtracted, autoCloseOnSuccess, closeDelay]);

  // Stop scanning
  const stopScanning = useCallback(() => {
    console.log('Stopping VIN scanner...');
    scannerActiveRef.current = false;
    setIsScanning(false);
    setScanStatus('Scanner stopped');
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = 0;
    }
  }, []);

  // Clean close
  const handleClose = useCallback(() => {
    stopScanning();
    stopCameraStream();
    setProcessedVin(null);
    setServerError(null);
    onClose();
  }, [stopScanning, stopCameraStream, onClose]);

  // Main scanning loop
  const scanLoop = useCallback(async () => {
    if (!scannerActiveRef.current || !isCameraActive || !isMountedRef.current) {
      return;
    }
    
    const now = performance.now();
    
    // Update FPS
    fpsFramesRef.current++;
    if (now - fpsLastTimeRef.current >= 1000) {
      const fps = Math.round((fpsFramesRef.current * 1000) / (now - fpsLastTimeRef.current));
      fpsFramesRef.current = 0;
      fpsLastTimeRef.current = now;
      
      setScanMetrics(prev => ({
        ...prev,
        fps,
        queueSize: activeScanCountRef.current,
        successRate: prev.totalScans > 0 ? (scanSuccessCountRef.current / prev.totalScans) * 100 : 0
      }));
    }
    
    // Scanning strategy
    const shouldScanLow = now - lastLowQualityScanRef.current >= SCAN_CONFIG.LOW_QUALITY_INTERVAL;
    const shouldScanHigh = now - lastHighQualityScanRef.current >= SCAN_CONFIG.HIGH_QUALITY_INTERVAL;
    
    if (shouldScanLow && activeScanCountRef.current < SCAN_CONFIG.MAX_QUEUE_SIZE) {
      lastLowQualityScanRef.current = now;
      
      const blob = await captureFrame('low');
      if (blob) {
        setScanStatus('Scanning...');
        setScanMetrics(prev => ({ ...prev, totalScans: prev.totalScans + 1 }));
        
        scanImage(blob, 'low').then(result => {
          if (!isMountedRef.current) return;
          
          if (result.vin) {
            handleVinDetected(result.vin);
          }
        });
      }
    }
    
    if (shouldScanHigh && activeScanCountRef.current < SCAN_CONFIG.MAX_QUEUE_SIZE) {
      lastHighQualityScanRef.current = now;
      
      const blob = await captureFrame('medium');
      if (blob) {
        setScanMetrics(prev => ({ ...prev, totalScans: prev.totalScans + 1 }));
        
        scanImage(blob, 'medium').then(result => {
          if (!isMountedRef.current) return;
          
          if (result.vin) {
            handleVinDetected(result.vin);
          }
        });
      }
    }
    
    if (scannerActiveRef.current) {
      animationFrameRef.current = requestAnimationFrame(scanLoop);
    }
  }, [isCameraActive, captureFrame, scanImage, handleVinDetected]);

  // Start scanning
  const startScanning = useCallback(() => {
    if (scannerActiveRef.current || !isCameraActive) return;
    
    console.log('Starting VIN scanner...');
    scannerActiveRef.current = true;
    setIsScanning(true);
    setScanStatus('Scanner active');
    
    setScanMetrics({
      fps: 0,
      scansPerSecond: 0,
      queueSize: 0,
      totalScans: 0,
      successRate: 0,
    });
    
    lastLowQualityScanRef.current = 0;
    lastHighQualityScanRef.current = 0;
    activeScanCountRef.current = 0;
    scanSuccessCountRef.current = 0;
    
    scanLoop();
  }, [isCameraActive, scanLoop]);

  // Manual capture
  const captureManual = useCallback(async () => {
    stopScanning();
    setServerError(null);
    setScanStatus('Capturing high quality image...');
    
    const blob = await captureFrame('high');
    if (!blob) {
      setServerError('Failed to capture image');
      return;
    }
    
    setIsLoading(true);
    const result = await scanImage(blob, 'high');
    setIsLoading(false);
    
    if (result.vin) {
      handleVinDetected(result.vin);
    } else {
      setServerError(result.error || 'No VIN detected');
    }
  }, [captureFrame, scanImage, handleVinDetected, stopScanning]);

  // Initialize camera
  useEffect(() => {
    if (!isOpen) return;
    
    let mounted = true;
    
    const init = async () => {
      try {
        setScanStatus('Starting camera...');
        await startCamera();
        if (mounted) {
          setScanStatus('Camera ready');
        }
      } catch (error) {
        console.error('Camera error:', error);
        if (mounted) {
          setServerError('Failed to start camera');
          setScanStatus('Camera error');
        }
      }
    };
    
    init();
    
    return () => {
      mounted = false;
    };
  }, [isOpen, startCamera]);

  // Auto-start scanning
  useEffect(() => {
    if (isCameraActive && !isScanning && !processedVin && isOpen) {
      const timer = setTimeout(() => {
        if (isMountedRef.current && isCameraActive && !scannerActiveRef.current) {
          startScanning();
        }
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [isCameraActive, isScanning, processedVin, isOpen, startScanning]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopScanning();
    };
  }, [stopScanning]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      {/* Debug Panel */}
      {showDebugPanel && (
        <div className="absolute top-16 left-4 right-4 bg-black/90 backdrop-blur-md rounded-lg p-3 text-white font-mono text-xs z-50 border border-white/20">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <div>Status: {scanStatus}</div>
              <div>FPS: {scanMetrics.fps} | Queue: {scanMetrics.queueSize}/{SCAN_CONFIG.MAX_QUEUE_SIZE}</div>
              <div>Scans: {scanMetrics.totalScans} | Success: {scanMetrics.successRate.toFixed(1)}%</div>
            </div>
            <button
              onClick={() => setShowDebugPanel(false)}
              className="p-1 hover:bg-white/10 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 p-4 flex justify-between items-start">
        <button
          onClick={handleClose}
          className="p-2 text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-lg"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex gap-2">
          {/* Debug toggle */}
          <button
            onClick={() => setShowDebugPanel(!showDebugPanel)}
            className="p-2 text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-lg"
          >
            <Activity className="w-6 h-6" />
          </button>

          {/* Manual Capture */}
          <button
            onClick={captureManual}
            disabled={!isCameraActive || isLoading}
            className="p-2 text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-lg disabled:opacity-50"
          >
            <Camera className="w-6 h-6" />
          </button>

          {/* Flash */}
          {showFlashButton && (
            <button
              onClick={toggleFlashlight}
              disabled={!isCameraActive}
              className="p-2 text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-lg disabled:opacity-50"
            >
              {isFlashOn ? <ZapOff className="w-6 h-6" /> : <Zap className="w-6 h-6" />}
            </button>
          )}
        </div>
      </div>

      {/* Camera View */}
      <div className="flex-1 relative overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        />
        <canvas ref={canvasRef} className="hidden" />

        {/* Scanning UI */}
        {isCameraActive && (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/40" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[90%] max-w-xl h-32">
                <div className={`absolute inset-0 transition-all duration-300 ${
                  isScanning 
                    ? 'border-2 border-green-500 shadow-lg shadow-green-500/50' 
                    : 'border-2 border-white/50'
                } rounded-lg`}>
                  
                  {/* Animated corners */}
                  {isScanning && (
                    <>
                      <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-green-400 rounded-tl animate-pulse" />
                      <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-green-400 rounded-tr animate-pulse" />
                      <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-green-400 rounded-bl animate-pulse" />
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-green-400 rounded-br animate-pulse" />
                    </>
                  )}
                  
                  {/* Scan line */}
                  {isScanning && (
                    <div className="absolute inset-x-0 h-full overflow-hidden">
                      <div 
                        className="h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-scan"
                      />
                    </div>
                  )}
                </div>
                
                {/* Status */}
                <div className="absolute -bottom-12 left-0 right-0 text-center">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm ${
                    isScanning ? 'bg-green-500/20' : 'bg-white/10'
                  }`}>
                    {isScanning ? (
                      <>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-white text-sm font-medium">{scanStatus}</span>
                      </>
                    ) : (
                      <span className="text-white/70 text-sm">{scanStatus}</span>
                    )}
                  </div>
                </div>
                
                {/* Instructions */}
                <div className="absolute -top-10 left-0 right-0 text-center">
                  <span className="text-white/70 text-xs bg-black/50 px-3 py-1 rounded-full">
                    Position VIN barcode within frame
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {serverError && !processedVin && (
          <div className="absolute bottom-24 left-4 right-4 bg-red-500/90 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center gap-3 text-white">
              <AlertTriangle className="w-5 h-5" />
              <p className="text-sm font-medium">{serverError}</p>
            </div>
          </div>
        )}

        {/* Success Message */}
        {processedVin && (
          <div className="absolute bottom-24 left-4 right-4 bg-green-500/90 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center gap-3 text-white mb-2">
              <CheckCircle className="w-6 h-6" />
              <p className="font-semibold">VIN Detected!</p>
            </div>
            <p className="text-white font-mono text-lg pl-9">{processedVin}</p>
          </div>
        )}
      </div>

      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center">
            <div className="w-12 h-12 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <p className="text-white mt-3 text-sm">Processing image...</p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(3200%); }
        }
        
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default VinScanner;
