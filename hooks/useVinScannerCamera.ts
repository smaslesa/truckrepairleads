import { useState, useCallback, useRef, useEffect } from 'react';

interface UseVinScannerCameraProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  constraints?: MediaStreamConstraints;
}

interface UseVinScannerCameraReturn {
  isCameraActive: boolean;
  cameraError: string | null;
  isFlashOn: boolean;
  startCamera: () => Promise<void>;
  stopCameraStream: () => void;
  toggleFlashlight: () => void;
  showFlashButton: boolean;
}

// Detect if mobile device
const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
    || (typeof window !== 'undefined' && window.innerWidth < 768);
};

// Get optimal camera constraints for VIN scanning
const getOptimalConstraints = (): MediaStreamConstraints => {
  const baseConstraints: MediaStreamConstraints = {
    audio: false,
    video: {
      facingMode: { ideal: 'environment' },
      width: { ideal: 1920, max: 2560 },
      height: { ideal: 1080, max: 1440 }
    }
  };

  // Add advanced constraints if supported
  if (typeof navigator !== 'undefined' && navigator.mediaDevices?.getSupportedConstraints) {
    const supported = navigator.mediaDevices.getSupportedConstraints() as any;
    const videoConstraints = baseConstraints.video as MediaTrackConstraints;
    
    // Focus mode for better close-up shots
    if (supported.focusMode) {
      (videoConstraints as any).focusMode = { ideal: 'continuous' };
    }
    
    // Exposure settings
    if (supported.exposureMode) {
      (videoConstraints as any).exposureMode = { ideal: 'continuous' };
    }
    
    // White balance
    if (supported.whiteBalanceMode) {
      (videoConstraints as any).whiteBalanceMode = { ideal: 'continuous' };
    }
    
    // Mobile-specific optimizations
    if (isMobileDevice()) {
      const advanced: any[] = [{
        ...(supported.focusDistance && { focusDistance: 0.1 }),
        ...(supported.zoom && { zoom: 1.2 }),
        ...(supported.iso && { iso: 100 }),
        ...(supported.sharpness && { sharpness: 1.5 }),
        ...(supported.contrast && { contrast: 1.2 })
      }];
      
      (videoConstraints as any).advanced = advanced;
    }
  }
  
  return baseConstraints;
};

export const useVinScannerCamera = ({ 
  videoRef,
  constraints: customConstraints
}: UseVinScannerCameraProps): UseVinScannerCameraReturn => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [isFlashOn, setIsFlashOn] = useState(false);
  const [showFlashButton, setShowFlashButton] = useState(false);
  
  const streamRef = useRef<MediaStream | null>(null);
  const flashTrackRef = useRef<MediaStreamTrack | null>(null);
  const videoTrackRef = useRef<MediaStreamTrack | null>(null);
  const isMountedRef = useRef(true);
  const startPromiseRef = useRef<Promise<void> | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
    };
  }, []);

  const stopCameraStream = useCallback(() => {
    console.log('[useVinScannerCamera] Stopping camera stream...');
    
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => {
        track.stop();
        console.log(`[useVinScannerCamera] Stopped track: ${track.kind}`);
      });
      streamRef.current = null;
    }
    
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    
    setIsCameraActive(false);
    setIsFlashOn(false);
    setCameraError(null);
    setShowFlashButton(false);
    flashTrackRef.current = null;
    videoTrackRef.current = null;
    startPromiseRef.current = null;
    
    console.log('[useVinScannerCamera] Camera stream stopped.');
  }, [videoRef]);

  const startCamera = useCallback(async () => {
    // If already starting, return the existing promise
    if (startPromiseRef.current) {
      return startPromiseRef.current;
    }

    // Create the start promise
    startPromiseRef.current = (async () => {
      console.log('[useVinScannerCamera] Starting camera...');
      
      // Clean up any existing stream
      stopCameraStream();
      
      setCameraError(null);

      try {
        // Check if getUserMedia is available
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          throw new Error('Camera access not supported by this browser');
        }

        // Use custom constraints or optimal defaults
        const constraints = customConstraints || getOptimalConstraints();
        console.log('[useVinScannerCamera] Using constraints:', constraints);

        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        
        // Check if component is still mounted
        if (!isMountedRef.current) {
          stream.getTracks().forEach(track => track.stop());
          return;
        }

        streamRef.current = stream;

        // Get video track and check capabilities
        const videoTrack = stream.getVideoTracks()[0];
        if (videoTrack) {
          videoTrackRef.current = videoTrack;
          
          const capabilities = videoTrack.getCapabilities?.() as any;
          const settings = videoTrack.getSettings?.() as any;
          
          console.log('[useVinScannerCamera] Track capabilities:', capabilities);
          console.log('[useVinScannerCamera] Track settings:', settings);
          
          // Check for torch capability
          if (capabilities?.torch) {
            setShowFlashButton(true);
            flashTrackRef.current = videoTrack;
            console.log('[useVinScannerCamera] Flash/torch capability detected.');
          }
          
          // Apply initial constraints if supported
          if (videoTrack.applyConstraints) {
            try {
              const trackConstraints: MediaTrackConstraints = {};
              
              // Set focus mode if available
              if (capabilities?.focusMode && capabilities.focusMode.includes('continuous')) {
                (trackConstraints as any).focusMode = 'continuous';
              }
              
              // Set exposure mode if available
              if (capabilities?.exposureMode && capabilities.exposureMode.includes('continuous')) {
                (trackConstraints as any).exposureMode = 'continuous';
              }
              
              if (Object.keys(trackConstraints).length > 0) {
                await videoTrack.applyConstraints(trackConstraints);
                console.log('[useVinScannerCamera] Applied track constraints:', trackConstraints);
              }
            } catch (error) {
              console.warn('[useVinScannerCamera] Could not apply track constraints:', error);
            }
          }
        }

        if (videoRef.current && isMountedRef.current) {
          videoRef.current.srcObject = stream;
          
          // Set video attributes for better mobile performance
          videoRef.current.setAttribute('playsinline', 'true');
          videoRef.current.setAttribute('webkit-playsinline', 'true');
          videoRef.current.muted = true;
          
          // Wait for video to be ready
          await new Promise<void>((resolve, reject) => {
            const video = videoRef.current;
            if (!video) {
              reject(new Error('Video element not found'));
              return;
            }

            let resolved = false;
            let timeoutId: NodeJS.Timeout;

            const cleanup = () => {
              if (timeoutId) clearTimeout(timeoutId);
              video.removeEventListener('loadedmetadata', onLoadedMetadata);
              video.removeEventListener('error', onError);
              video.removeEventListener('playing', onPlaying);
            };

            const resolveIfNotResolved = () => {
              if (!resolved) {
                resolved = true;
                cleanup();
                if (isMountedRef.current) {
                  setIsCameraActive(true);
                }
                resolve();
              }
            };

            const onLoadedMetadata = () => {
              console.log('[useVinScannerCamera] Video metadata loaded.');
              console.log(`[useVinScannerCamera] Video dimensions: ${video.videoWidth}x${video.videoHeight}`);
              
              // Try to play
              video.play()
                .then(() => {
                  console.log('[useVinScannerCamera] Video playback started.');
                  resolveIfNotResolved();
                })
                .catch(err => {
                  console.error('[useVinScannerCamera] Error playing video:', err);
                  resolveIfNotResolved();
                });
            };

            const onPlaying = () => {
              console.log('[useVinScannerCamera] Video is playing.');
              resolveIfNotResolved();
            };

            const onError = (e: Event) => {
              console.error('[useVinScannerCamera] Video error:', e);
              cleanup();
              reject(new Error('Video loading error'));
            };

            // Add event listeners
            video.addEventListener('loadedmetadata', onLoadedMetadata);
            video.addEventListener('error', onError);
            video.addEventListener('playing', onPlaying);

            // Force load
            video.load();

            // Set a reasonable timeout
            timeoutId = setTimeout(() => {
              if (video.videoWidth > 0 && video.videoHeight > 0) {
                console.log('[useVinScannerCamera] Video dimensions available, considering ready');
                resolveIfNotResolved();
              } else {
                console.warn('[useVinScannerCamera] Timeout waiting for video, but continuing anyway...');
                resolveIfNotResolved();
              }
            }, 5000);

            // Check if video is already ready
            if (video.readyState >= 2) {
              onLoadedMetadata();
            }
          });
        }
      } catch (error: any) {
        console.error('[useVinScannerCamera] Error starting camera:', error);
        
        // Provide user-friendly error messages
        let errorMessage = 'Failed to start camera';
        if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
          errorMessage = 'Camera permission denied. Please allow camera access.';
        } else if (error.name === 'NotFoundError' || error.name === 'DevicesNotFoundError') {
          errorMessage = 'No camera found on this device.';
        } else if (error.name === 'NotReadableError' || error.name === 'TrackStartError') {
          errorMessage = 'Camera is already in use by another application.';
        } else if (error.name === 'OverconstrainedError' || error.name === 'ConstraintNotSatisfiedError') {
          errorMessage = 'Camera does not support the requested settings.';
        }
        
        if (isMountedRef.current) {
          setCameraError(errorMessage);
        }
        throw error;
      }
    })();

    try {
      await startPromiseRef.current;
    } finally {
      startPromiseRef.current = null;
    }
  }, [stopCameraStream, videoRef, customConstraints]);

  const toggleFlashlight = useCallback(async () => {
    if (!flashTrackRef.current) {
      console.warn('[useVinScannerCamera] No flash track available');
      return;
    }

    try {
      const newFlashState = !isFlashOn;
      await flashTrackRef.current.applyConstraints({
        // @ts-ignore - TypeScript doesn't know about torch
        advanced: [{ torch: newFlashState }]
      });
      setIsFlashOn(newFlashState);
      console.log(`[useVinScannerCamera] Flash turned ${newFlashState ? 'on' : 'off'}.`);
    } catch (error) {
      console.error('[useVinScannerCamera] Error toggling flash:', error);
      setCameraError('Failed to toggle flash');
    }
  }, [isFlashOn]);

  return {
    isCameraActive,
    cameraError,
    isFlashOn,
    startCamera,
    stopCameraStream,
    toggleFlashlight,
    showFlashButton
  };
};
