'use client'

import React from 'react'
import { Search, MousePointerClick, Phone } from 'lucide-react'

const VisualFeatures = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            From search to booked job in 60 seconds
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how a customer finds you, clicks your site, and books their repair—all in one seamless journey.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative max-w-5xl mx-auto">

          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 -translate-x-1/2"></div>

          {/* Step 1: They Search */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Content */}
              <div className="lg:text-right relative z-10">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Search className="w-4 h-4" />
                  <span>Step 1</span>
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  They search
                </h3>
                <p className="text-lg text-gray-600 max-w-md lg:ml-auto">
                  A customer has a truck breakdown. They pull out their phone and search for help nearby.
                </p>
              </div>

              {/* Visual */}
              <div className="lg:order-2 relative z-10">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center bg-white rounded-full border-2 border-gray-300 px-5 py-3 shadow-sm">
                      <Search className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-gray-700 font-medium">truck repair shop near me</span>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <div className="relative bg-blue-50 border-2 border-blue-600 rounded-xl p-5 shadow-lg">
                      <div className="absolute -top-3 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        SPONSORED
                      </div>
                      <h4 className="text-blue-600 text-lg font-bold mt-2">Your Shop Name</h4>
                      <p className="text-sm text-gray-600 mt-2">Expert truck breakdown repair • Free estimates • 4.9★ rating</p>
                      <div className="mt-3 inline-flex items-center gap-2 text-sm text-gray-700">
                        <Phone className="w-4 h-4 text-blue-600" />
                        <span className="font-semibold">Click to call</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step Number Circle */}
              <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: They Click */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Content */}
              <div className="lg:order-2 order-1 relative z-10">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <MousePointerClick className="w-4 h-4" />
                  <span>Step 2</span>
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  They click
                </h3>
                <p className="text-lg text-gray-600 max-w-md">
                  Beautiful, fast websites that make booking effortless. Every detail designed to turn clicks into customers.
                </p>
              </div>

              {/* Visual */}
              <div className="lg:order-1 order-2 relative z-10">
                <div className="relative mx-auto max-w-xs">
                  {/* Phone Frame */}
                  <div className="bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                    <div className="bg-white rounded-[2rem] overflow-hidden" style={{ aspectRatio: '9/19' }}>
                      <div className="h-full flex flex-col bg-white">

                        {/* Instagram-style Hero Image */}
                        <div className="relative h-48 bg-gradient-to-br from-blue-100 via-gray-50 to-blue-50">
                          {/* Subtle overlay pattern */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-2">
                                <span className="text-2xl">🚗</span>
                              </div>
                              <div className="text-xs font-semibold text-gray-600">Before & After Gallery</div>
                            </div>
                          </div>
                        </div>

                        {/* Content Card */}
                        <div className="p-4 flex-1 flex flex-col">

                          {/* Shop Name & Rating */}
                          <div className="mb-4">
                            <h4 className="text-lg font-bold text-gray-900 mb-1">Your Shop Name</h4>
                            <div className="flex items-center gap-1 text-sm">
                              <span className="text-yellow-500">★★★★★</span>
                              <span className="text-gray-900 font-semibold ml-1">4.9</span>
                              <span className="text-gray-500">(127)</span>
                            </div>
                          </div>

                          {/* Quick Info Pills */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-[10px] font-medium">Free estimates</span>
                            <span className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-[10px] font-medium">Insurance approved</span>
                            <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded-full text-[10px] font-medium">Same-day</span>
                          </div>

                          {/* CTA Button */}
                          <button className="w-full bg-blue-600 text-white py-3 rounded-xl text-sm font-bold shadow-lg mb-2">
                            Get Free Estimate
                          </button>

                          {/* Contact Grid */}
                          <div className="grid grid-cols-2 gap-2">
                            <button className="bg-blue-50 text-blue-700 py-2.5 rounded-xl text-xs font-semibold border border-blue-200 flex items-center justify-center gap-1">
                              <Phone className="w-3 h-3" />
                              <span>Call</span>
                            </button>
                            <button className="bg-blue-50 text-blue-700 py-2.5 rounded-xl text-xs font-semibold border border-blue-200">
                              Directions
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -left-4 top-24 bg-white rounded-xl shadow-xl px-4 py-3 border border-gray-200">
                    <div className="text-xs text-gray-500 mb-1">Load time</div>
                    <div className="text-2xl font-bold text-blue-600">0.8s</div>
                  </div>
                </div>
              </div>

              {/* Step Number Circle */}
              <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: They Book */}
          <div className="relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Content */}
              <div className="lg:text-right relative z-10">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Phone className="w-4 h-4" />
                  <span>Step 3</span>
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  They book
                </h3>
                <p className="text-lg text-gray-600 max-w-md lg:ml-auto">
                  One click and they're calling your shop. The entire journey—from search to booked appointment—takes less than 60 seconds.
                </p>
              </div>

              {/* Visual */}
              <div className="lg:order-2 relative z-10">
                <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-12 border border-gray-200 shadow-xl">

                  {/* Animated Phone Icon */}
                  <div className="relative mx-auto w-32 h-32 mb-8">
                    <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20"></div>
                    <div className="relative bg-blue-600 rounded-full w-32 h-32 flex items-center justify-center shadow-2xl">
                      <Phone className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  {/* Calling Status */}
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-2">Incoming Call</div>
                    <div className="text-lg text-gray-600 mb-6">New customer ready to book</div>

                    {/* Call Details */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200 inline-block">
                      <div className="text-sm text-gray-500 mb-1">Source</div>
                      <div className="text-base font-bold text-blue-600 mb-3">Google Ads - "truck repair near me"</div>
                      <div className="text-sm text-gray-500 mb-1">Time on site</div>
                      <div className="text-base font-semibold text-gray-900">42 seconds</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step Number Circle */}
              <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default VisualFeatures
