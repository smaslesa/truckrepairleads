'use client'

import React, { useState } from 'react'
import { ArrowRight, Search, MapPin, Phone } from 'lucide-react'
import LeadModal from '@/components/shared/LeadModal'

const CleanDominanceHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>

        <div className="relative max-w-7xl mx-auto">

          {/* Content - Centered Above Card */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50/80 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-100/50">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-900/80">The all-in-one marketing platform for truck repair shops</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.05] tracking-tight">
              Be the <span className="text-blue-600">first shop on Google</span> when trucks break down
            </h1>

            {/* Subhead */}
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Premium websites, Google Ads, and Local SEO that put you at #1 when customers search.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all inline-flex items-center gap-3 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
              >
                <span>Get a Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#analysis"
                className="text-gray-700 hover:text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-gray-50"
              >
                See your opportunity
              </a>
            </div>
          </div>

          {/* Google Search Card - Instagram Style */}
          <div className="relative flex items-center justify-center">

            <div className="relative w-full max-w-6xl">

              {/* Main Card - Instagram aesthetic */}
              <div className="relative bg-white rounded-2xl lg:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">

                {/* Google Search Bar */}
                <div className="px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8 pb-4 lg:pb-6 bg-white border-b border-gray-100">
                  <div className="flex items-center gap-3 lg:gap-4 bg-white border border-gray-300 rounded-full px-4 lg:px-6 py-3 lg:py-4 shadow-sm">
                    <Search className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 flex-shrink-0" />
                    <span className="text-sm lg:text-lg text-gray-700">truck repair shop near me</span>
                  </div>
                </div>

                {/* Search Results */}
                <div className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8 bg-gradient-to-b from-gray-50/50 to-white">

                  {/* Your Shop - #1 Result - Expanded Instagram Style */}
                  <div className="relative bg-white rounded-2xl lg:rounded-3xl shadow-xl border border-gray-200 overflow-hidden mb-4 lg:mb-6">

                    {/* Hero Image / Map Preview */}
                    <div className="relative h-40 sm:h-48 lg:h-56 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 border-b border-gray-100">
                      {/* Truck pattern background */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18 18.5a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 01-1.5 1.5 1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 01-1.5 1.5 1.5 1.5 0 01-1.5-1.5H6v-11h12l4 4v7h-2.5a1.5 1.5 0 01-1.5 1.5zm-1.5-3a1.5 1.5 0 011.5 1.5h2v-5.5l-3-3H7.5v9h1a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5 1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5zM4 4h10v2H4V4z"/>
                          </svg>
                        </div>
                      </div>
                      {/* Subtle tire tracks pattern */}
                      <div className="absolute inset-0 opacity-5" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.3) 20px, rgba(255,255,255,0.3) 40px)`
                      }}></div>

                      {/* SPONSORED + #1 Badge Combined */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <div className="bg-blue-600 text-white text-xs lg:text-sm font-bold px-3 lg:px-4 py-1.5 rounded-full shadow-lg">
                          SPONSORED
                        </div>
                        <div className="bg-white border-2 border-blue-600 text-blue-600 text-xs lg:text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
                          #1 RESULT
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5 lg:p-6">

                      {/* Shop Name & Rating */}
                      <div className="mb-4">
                        <h3 className="font-bold text-gray-900 text-xl sm:text-2xl lg:text-3xl mb-2 leading-tight">Your Shop Name</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex text-yellow-500 text-base sm:text-lg lg:text-xl">
                            ★★★★★
                          </div>
                          <span className="text-base sm:text-lg lg:text-xl text-gray-900 font-semibold">4.9</span>
                          <span className="text-base sm:text-lg lg:text-xl text-gray-500">(127 reviews)</span>
                        </div>

                        {/* Category & Hours */}
                        <div className="flex flex-wrap items-center gap-2 text-sm lg:text-base text-gray-600 mb-3">
                          <span className="font-medium">Truck Repair Shop</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-green-600 font-semibold">Open now</span>
                          <span className="text-gray-400">•</span>
                          <span>Closes 6PM</span>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-2 text-sm lg:text-base text-gray-600 mb-4">
                          <MapPin className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 mt-0.5" />
                          <div>
                            <div>1234 Main Street</div>
                            <div className="text-gray-500">0.8 mi away</div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <button className="bg-blue-600 text-white px-4 lg:px-6 py-3 lg:py-4 rounded-xl text-sm lg:text-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:bg-blue-700 transition-colors">
                          <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
                          <span>Call</span>
                        </button>
                        <button className="bg-gray-100 text-gray-900 px-4 lg:px-6 py-3 lg:py-4 rounded-xl text-sm lg:text-lg font-semibold hover:bg-gray-200 transition-colors">
                          Directions
                        </button>
                      </div>

                      {/* Quick Info Pills */}
                      <div className="flex flex-wrap gap-2">
                        <div className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium">
                          Free estimates
                        </div>
                        <div className="bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium">
                          Fleet service
                        </div>
                        <div className="bg-orange-50 text-orange-700 px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium">
                          24/7 emergency
                        </div>
                        <div className="bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium">
                          Diesel & gas
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Competitor Results - Compact */}
                  <div className="space-y-3 lg:space-y-4">
                    <div className="bg-white border border-gray-200 rounded-xl lg:rounded-2xl p-3 lg:p-4 opacity-30">
                      <div className="flex items-center gap-3 lg:gap-4">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-400 rounded-lg lg:rounded-xl flex items-center justify-center text-white text-base lg:text-lg font-bold flex-shrink-0">2</div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-700 text-sm lg:text-base mb-0.5 leading-tight truncate">Competitor Shop</h3>
                          <p className="text-xs lg:text-sm text-gray-500">★★★★☆ 4.2 • 2.1 mi</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl lg:rounded-2xl p-3 lg:p-4 opacity-20">
                      <div className="flex items-center gap-3 lg:gap-4">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-400 rounded-lg lg:rounded-xl flex items-center justify-center text-white text-base lg:text-lg font-bold flex-shrink-0">3</div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-700 text-sm lg:text-base mb-0.5 leading-tight truncate">Another Body Shop</h3>
                          <p className="text-xs lg:text-sm text-gray-500">★★★☆☆ 3.8 • 3.5 mi</p>
                        </div>
                      </div>
                    </div>
                  </div>

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
        source="clean-dominance-hero"
        title="Get Your Demo"
        subtitle="See how we help truck repair shops dominate local search"
      />
    </>
  )
}

export default CleanDominanceHero
