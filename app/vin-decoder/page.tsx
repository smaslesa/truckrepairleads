'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import VinScanner from '@/components/vin-decoder/VinScanner';
import VinDecoderForm from '@/components/vin-decoder/VinDecoderForm';
import VehicleDetails from '@/components/vin-decoder/VehicleDetails';
import { Car, ScanLine, Info } from 'lucide-react';

interface DecodedVehicleData {
  vin: string;
  year?: number;
  make?: string;
  model?: string;
  trim?: string;
  bodyStyle?: string;
  engine?: string;
  drivetrain?: string;
  extColor?: string;
  intColor?: string;
  [key: string]: string | number | null | undefined;
}

export default function VinDecoderPage() {
  const [decodedData, setDecodedData] = useState<DecodedVehicleData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  const handleVinDecode = async (vin: string) => {
    setIsLoading(true);
    setError(null);
    setDecodedData(null);

    try {
      const response = await fetch(`/api/vin/decode/${vin}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to decode VIN');
      }

      setDecodedData({ vin, ...data });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90" />
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
        
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Car className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              VIN Decoder Tool
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Instantly decode any vehicle identification number to get detailed information about make, model, year, and specifications
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => setIsScannerOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ScanLine className="w-5 h-5" />
              Scan VIN Barcode
            </button>
            <a
              href="#manual-entry"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Info className="w-5 h-5" />
              Enter VIN Manually
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section id="manual-entry" className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <VinDecoderForm
              onDecode={handleVinDecode}
              isLoading={isLoading}
              onScanClick={() => setIsScannerOpen(true)}
            />
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {isLoading && (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" />
                <p className="text-gray-600">Decoding VIN...</p>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-red-800 font-semibold mb-2">Error</h3>
                <p className="text-red-600">{error}</p>
              </div>
            )}

            {decodedData && !isLoading && (
              <VehicleDetails data={decodedData} />
            )}

            {!decodedData && !isLoading && !error && (
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-gray-700 font-semibold mb-2">No Vehicle Data</h3>
                <p className="text-gray-500">
                  Enter a VIN or scan a barcode to see vehicle details
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Add This Tool to Your Truck Repair Website</h2>
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <p className="mb-4">
              <strong>Transform your website into a powerful lead generation machine</strong> by integrating our VIN decoder directly on your truck repair site. 
              Give your customers the ability to instantly decode their vehicle information before submitting an estimate request.
            </p>
            <div className="bg-white rounded-lg p-6 my-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">How It Works on Your Site:</h3>
              <ol className="space-y-3 list-decimal list-inside">
                <li>Customer enters or scans their VIN on your website</li>
                <li>Vehicle details are instantly decoded and displayed</li>
                <li>Information automatically populates your estimate form</li>
                <li>Complete vehicle data is sent with the lead submission</li>
                <li>You receive accurate, detailed leads ready for estimates</li>
              </ol>
            </div>
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">Benefits for Your Shop:</h4>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>✓ Higher quality leads with complete vehicle data</li>
                  <li>✓ Faster estimate preparation</li>
                  <li>✓ Reduced back-and-forth with customers</li>
                  <li>✓ Professional, modern website experience</li>
                  <li>✓ Increased conversion rates</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">Benefits for Your Customers:</h4>
                <ul className="space-y-2 text-sm text-purple-800">
                  <li>✓ Quick and easy VIN entry</li>
                  <li>✓ Mobile barcode scanning</li>
                  <li>✓ Instant vehicle verification</li>
                  <li>✓ No manual form filling</li>
                  <li>✓ Accurate estimate requests</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-blue-600 text-white rounded-lg p-6 text-center">
            <p className="text-lg font-semibold mb-2">
              Want to add this VIN decoder to your truck repair website?
            </p>
            <p className="text-blue-100 mb-4">
              Contact us to integrate this powerful tool and start receiving better quality leads
            </p>
            <a 
              href="tel:7029000265" 
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Call (702) 900-0265
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Use Our VIN Decoder?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ScanLine className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Mobile Scanner</h3>
              <p className="text-gray-600 text-sm">
                Scan VIN barcodes directly from your mobile device camera
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Info className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Detailed Info</h3>
              <p className="text-gray-600 text-sm">
                Get comprehensive vehicle specifications and details instantly
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Car className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Accurate Data</h3>
              <p className="text-gray-600 text-sm">
                Powered by Market Check API for reliable vehicle information
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIN Scanner Modal */}
      <VinScanner
        isOpen={isScannerOpen}
        onClose={() => setIsScannerOpen(false)}
        onVinExtracted={(vin) => {
          setIsScannerOpen(false);
          handleVinDecode(vin);
        }}
      />
    </div>
  );
}
