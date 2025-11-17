'use client';

import { useState } from 'react';
import { ScanLine, Search, Info } from 'lucide-react';
import { trackToolUsage } from '@/lib/analytics';

interface VinDecoderFormProps {
  onDecode: (vin: string) => void;
  isLoading: boolean;
  onScanClick: () => void;
}

export default function VinDecoderForm({ onDecode, isLoading, onScanClick }: VinDecoderFormProps) {
  const [vinInput, setVinInput] = useState('');
  const [vinError, setVinError] = useState<string | null>(null);

  const validateVin = (vin: string): boolean => {
    // Basic VIN validation
    const cleanVin = vin.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, '');
    
    if (cleanVin.length !== 17) {
      setVinError('VIN must be exactly 17 characters');
      return false;
    }

    // Check for invalid characters (I, O, Q are not used in VINs)
    if (/[IOQ]/i.test(cleanVin)) {
      setVinError('VIN contains invalid characters (I, O, or Q)');
      return false;
    }

    setVinError(null);
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const cleanVin = vinInput.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, '');

    if (validateVin(cleanVin)) {
      trackToolUsage('vin_decoder', 'decode_submitted', true);
      onDecode(cleanVin);
    } else {
      trackToolUsage('vin_decoder', 'decode_failed_validation', false);
    }
  };

  const handleVinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setVinInput(value);
    
    // Clear error when user starts typing
    if (vinError) {
      setVinError(null);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Decode Vehicle Information</h2>
        <p className="text-gray-600">
          Enter a 17-character VIN or use the scanner to decode vehicle details
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="vin" className="block text-sm font-medium text-gray-700 mb-2">
            Vehicle Identification Number (VIN)
          </label>
          <div className="relative">
            <input
              type="text"
              id="vin"
              value={vinInput}
              onChange={handleVinChange}
              placeholder="Enter 17-character VIN"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                vinError ? 'border-red-300' : 'border-gray-300'
              }`}
              maxLength={17}
              disabled={isLoading}
              autoComplete="off"
              spellCheck={false}
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <span className="text-sm text-gray-500">
                {vinInput.length}/17
              </span>
            </div>
          </div>
          {vinError && (
            <p className="mt-2 text-sm text-red-600">{vinError}</p>
          )}
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={isLoading || vinInput.length === 0}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                Decoding...
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                Decode VIN
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              trackToolUsage('vin_decoder', 'scan_clicked', true);
              onScanClick();
            }}
            disabled={isLoading}
            className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors inline-flex items-center gap-2"
          >
            <ScanLine className="w-5 h-5" />
            <span className="hidden sm:inline">Scan</span>
          </button>
        </div>
      </form>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-800">
            <p className="font-semibold mb-1">Where to find the VIN?</p>
            <ul className="space-y-1 text-blue-700">
              <li>• Driver's side dashboard (visible through windshield)</li>
              <li>• Driver's door jamb sticker</li>
              <li>• Vehicle registration or insurance documents</li>
              <li>• Engine block or frame near the windshield washer fluid container</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          VIN decoder powered by Market Check API
        </p>
      </div>
    </div>
  );
}
