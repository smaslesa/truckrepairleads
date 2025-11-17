'use client'

import React, { useState } from 'react'
import { ArrowRight, Search, MapPin, Star, Phone } from 'lucide-react'
import LeadModal from '@/components/shared/LeadModal'

const GoogleDominanceHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: Content */}
            <div className="lg:pr-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>The all-in-one marketing platform for truck repair shops</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1]">
                Be the <span className="text-blue-600">first shop</span> customers call
                <span className="block mt-2">when truck breakdown happens</span>
              </h1>

              {/* Subhead */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Premium websites, Google Ads, and Local SEO that put you first when truck breakdown happens.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all inline-flex items-center space-x-2 shadow-lg"
                >
                  <span>Get a Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="#work"
                  className="text-gray-700 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  See our work
                </a>
              </div>
            </div>

            {/* Right: Floating Google Result Card */}
            <div className="relative flex items-center justify-center min-h-[500px]">

              {/* Background blur circles for depth */}
              <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>

              {/* Main Card - Floating */}
              <div className="relative">
                {/* Floating Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg z-10 flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>SPONSORED</span>
                </div>

                {/* The Card */}
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-200 p-8 max-w-md hover:shadow-3xl transition-shadow duration-300">

                  {/* Shop Info */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-lg">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Shop Name</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex text-yellow-400 text-lg">
                          ★★★★★
                        </div>
                        <span className="text-sm text-gray-600 font-semibold">4.9</span>
                        <span className="text-sm text-gray-500">(127 reviews)</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">Auto Body Shop • 0.8 mi away</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Info */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500 mb-1">Status</div>
                        <div className="text-green-700 font-semibold flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          Open now
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-500 mb-1">Closes</div>
                        <div className="text-gray-900 font-semibold">6:00 PM</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </button>
                    <button className="bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                      Get Directions
                    </button>
                  </div>
                </div>

                {/* Floating stat badge */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl border border-gray-200 p-4">
                  <div className="text-3xl font-bold text-blue-600 mb-1">70%</div>
                  <div className="text-xs text-gray-600">Click top result</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="google-dominance-hero"
        title="Get Your Demo"
        subtitle="See how we help truck repair shops dominate local search"
      />
    </>
  )
}

export default GoogleDominanceHero
