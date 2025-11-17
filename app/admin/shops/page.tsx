'use client';

import { useState } from 'react';
import { Database, MapPin, Users, DollarSign, AlertCircle } from 'lucide-react';
import { WESTERN_STATES } from '@/lib/scraper/google-places';

export default function AdminShopsPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<{
    success?: boolean;
    message?: string;
    error?: string;
    details?: string;
    state?: string;
    city?: string;
    shopCount?: number;
    shopsFound?: number;
    apiKeyConfigured?: boolean;
    databaseConfigured?: boolean;
    states?: string[];
    totalCities?: number;
    status?: {
      totalShops?: number;
      uniqueCities?: number;
      statesWithData?: number;
      shopsWithWebsites?: number;
    };
    shops?: Array<{
      name: string;
      address: string;
      phone?: string;
      rating?: number;
      website?: string;
      has_website?: boolean;
    }>;
  } | null>(null);
  const [selectedState, setSelectedState] = useState('NV');
  const [selectedCity, setSelectedCity] = useState('Las Vegas');
  
  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple client-side check (real auth happens on API)
    if (password) {
      setIsAuthenticated(true);
    }
  };
  
  const handleScrape = async (action: string) => {
    setLoading(true);
    setResults(null);
    
    try {
      const response = await fetch('/api/admin/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          password,
          action,
          state: selectedState,
          city: selectedCity
        })
      });
      
      const data = await response.json();
      setResults(data);
    } catch {
      setResults({ error: 'Failed to connect to API' });
    } finally {
      setLoading(false);
    }
  };
  
  const checkStatus = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/scrape?password=${password}`);
      const data = await response.json();
      setResults(data);
    } catch {
      setResults({ error: 'Failed to check status' });
    } finally {
      setLoading(false);
    }
  };
  
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Access</h1>
          <form onSubmit={handleAuth}>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg mb-4"
              autoFocus
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Collision Shops Data Management
          </h1>
          
          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600">Western States</p>
                  <p className="text-2xl font-bold">9</p>
                </div>
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-600">Target Cities</p>
                  <p className="text-2xl font-bold">90+</p>
                </div>
                <Database className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-600">Est. Shops</p>
                  <p className="text-2xl font-bold">6,250</p>
                </div>
                <Users className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-orange-600">API Cost</p>
                  <p className="text-2xl font-bold">~$106</p>
                </div>
                <DollarSign className="w-8 h-8 text-orange-600" />
              </div>
            </div>
          </div>
          
          {/* Control Panel */}
          <div className="border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Scraping Controls</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select State
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  {Object.entries(WESTERN_STATES).map(([code, info]) => (
                    <option key={code} value={code}>
                      {info.name} ({code})
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select City
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  {WESTERN_STATES[selectedState as keyof typeof WESTERN_STATES]?.cities.map(city => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleScrape('test')}
                disabled={loading}
                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 disabled:opacity-50"
              >
                {loading ? 'Processing...' : 'Test (Las Vegas Only)'}
              </button>
              
              <button
                onClick={() => handleScrape('scrape_city')}
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? 'Scraping...' : `Scrape ${selectedCity}`}
              </button>
              
              <button
                onClick={() => handleScrape('scrape_state')}
                disabled={loading}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
              >
                {loading ? 'Starting...' : `Scrape All ${selectedState}`}
              </button>
              
              <button
                onClick={checkStatus}
                disabled={loading}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50"
              >
                {loading ? 'Checking...' : 'Check Status'}
              </button>
            </div>
          </div>
          
          {/* Results */}
          {results && (
            <div className="border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Results</h2>
              
              {results.error ? (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-red-600">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">Error</span>
                  </div>
                  <p className="mt-2 text-sm text-red-600">{results.error}</p>
                  {results.details && (
                    <p className="mt-1 text-xs text-red-500">{results.details}</p>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  {results.success && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-600 font-medium">✓ {results.message || 'Operation successful'}</p>
                    </div>
                  )}
                  
                  {results.shopsFound !== undefined && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-600 font-medium">
                        Found {results.shopsFound} shops in {results.city}, {results.state}
                      </p>
                    </div>
                  )}
                  
                  {results.shops && results.shops.length > 0 && (
                    <div>
                      <h3 className="font-medium mb-2">Sample Shops:</h3>
                      <div className="space-y-2">
                        {results.shops.map((shop, index) => (
                          <div key={index} className="bg-gray-50 rounded p-3">
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="font-medium">{shop.name}</p>
                                <p className="text-sm text-gray-600">{shop.address}</p>
                                {shop.phone && (
                                  <p className="text-sm text-gray-600">📞 {shop.phone}</p>
                                )}
                              </div>
                              <div className="text-right">
                                {shop.rating && (
                                  <p className="text-sm">⭐ {shop.rating}</p>
                                )}
                                {shop.has_website !== undefined && (
                                  <p className="text-xs">
                                    {shop.has_website ? '✓ Has website' : '✗ No website'}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {results.status && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-medium mb-2">System Status:</h3>
                      <div className="space-y-1 text-sm">
                        <p>API Key: {results.apiKeyConfigured ? '✓ Configured' : '✗ Not configured'}</p>
                        <p>Database: {results.databaseConfigured ? '✓ Connected' : '✗ Not connected'}</p>
                        <p>States Available: {results.states?.join(', ')}</p>
                        <p>Total Cities: {results.totalCities}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          
          {/* Instructions */}
          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Setup Instructions:</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800">
              <li>Add your Google Maps API key to .env.local: GOOGLE_MAPS_API_KEY=your_key</li>
              <li>Add your Neon database URL to .env.local: DATABASE_URL=your_neon_url</li>
              <li>Set admin password: ADMIN_PASSWORD=your_secure_password</li>
              <li>Start with "Test" to verify everything works (scrapes Las Vegas only)</li>
              <li>Then scrape individual cities or entire states</li>
              <li>Monitor progress in the terminal/logs</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
