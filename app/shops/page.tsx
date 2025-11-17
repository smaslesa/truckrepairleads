import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, Wrench, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Truck Repair Shops Directory - Coming Soon | Truck Repair Leads',
  description: 'Find the best truck repair shops across the United States. Comprehensive directory coming soon with reviews, ratings, and contact information.',
};

export default function ShopsDirectoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Clock Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full mb-8">
            <Clock className="w-12 h-12 text-blue-400 animate-pulse" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 mb-8">
            <span className="text-blue-200 text-sm font-medium">Nationwide Truck Repair Directory</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Coming Soon
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Truck Repair Shops Directory
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            We're building the most comprehensive directory of truck repair shops across the United States.
            Check back soon for verified listings, reviews, and instant connections.
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <MapPin className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Nationwide Coverage</h3>
              <p className="text-blue-200 text-sm">All 50 states with detailed shop information</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <Wrench className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Verified Listings</h3>
              <p className="text-blue-200 text-sm">Accurate contact info and real reviews</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <TrendingUp className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Market Insights</h3>
              <p className="text-blue-200 text-sm">Shop specialties and certifications</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Back to Home
            </Link>
            <Link
              href="/google-ads"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-xl font-semibold text-lg transition-colors"
            >
              Learn About Marketing
            </Link>
          </div>

          {/* Shop Owner CTA */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Are You a Truck Shop Owner?</h3>
            <p className="text-blue-100 mb-6">
              Get your shop ready to be featured. Start building your online presence today.
            </p>
            <Link
              href="/websites"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Your Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
