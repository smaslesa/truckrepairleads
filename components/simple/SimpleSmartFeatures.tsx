'use client'

import React from 'react'
import { Zap, Check, ArrowLeftRight, Phone, Star, ArrowRight } from 'lucide-react'

const SimpleSmartFeatures = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header - Vercel style minimal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            Features that actually get leads
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Not just a pretty website. Real tools that make customers choose you.
          </p>
        </div>

        {/* Feature Cards Grid - Vercel style with borders */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* VIN Decoder Feature */}
          <div className="group relative">
            <div className="p-8 h-full border border-gray-200 rounded-2xl hover:border-gray-300 transition-all">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                VIN Instant Lookup
              </h3>
              <p className="text-gray-600 mb-6">
                Customer enters VIN, instantly sees year, make, model. You capture their contact info automatically.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Vehicle details auto-populate</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Captures name, phone, email</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Works on mobile</span>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="text-2xl font-semibold text-gray-900">3.2x</div>
                <div className="text-sm text-gray-600">more quote requests</div>
              </div>
            </div>
          </div>

          {/* Before/After Gallery */}
          <div className="group relative">
            <div className="p-8 h-full border border-gray-200 rounded-2xl hover:border-gray-300 transition-all">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <ArrowLeftRight className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Before/After Slider
              </h3>
              <p className="text-gray-600 mb-6">
                Interactive gallery shows your work. Customers drag to reveal transformations. Pure engagement.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Swipe on mobile</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Categorized by damage</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Your actual work</span>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="text-2xl font-semibold text-gray-900">47 sec</div>
                <div className="text-sm text-gray-600">average view time</div>
              </div>
            </div>
          </div>

          {/* SMS Updates */}
          <div className="group relative">
            <div className="p-8 h-full border border-gray-200 rounded-2xl hover:border-gray-300 transition-all">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Text-First Contact
              </h3>
              <p className="text-gray-600 mb-6">
                Customers prefer texting. Forms go straight to SMS. You reply from your phone. Simple.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Direct to your phone</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Photo uploads for damage</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>2-way conversation</span>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="text-2xl font-semibold text-gray-900">89%</div>
                <div className="text-sm text-gray-600">response rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* How We Get You Leads - Process Flow */}
        <div className="border border-gray-200 rounded-2xl p-10 bg-gray-50/50">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            How we get you more leads
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-white border border-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="font-semibold text-gray-900 text-lg">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Amazing Website</h4>
              <p className="text-sm text-gray-600 mb-4">
                Professional design that builds trust instantly
              </p>
              <div className="p-4 bg-white rounded-xl border border-gray-200 text-sm">
                <div className="w-full h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-xs text-gray-500">Modern Design</span>
                </div>
                <div className="text-gray-700 font-medium">Premium Look & Feel</div>
                <div className="text-gray-500 text-xs">Mobile optimized</div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-white border border-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="font-semibold text-gray-900 text-lg">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">High Google Rankings</h4>
              <p className="text-sm text-gray-600 mb-4">
                Customers find you first when searching
              </p>
              <div className="p-4 bg-white rounded-xl border border-gray-200 text-sm space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-900 font-medium">Auto Body Shop Near Me</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-900 font-medium">Collision Repair Las Vegas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-900 font-medium">Car Dent Repair</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-white border border-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="font-semibold text-gray-900 text-lg">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Easy to Convert</h4>
              <p className="text-sm text-gray-600 mb-4">
                Smart features turn visitors into customers
              </p>
              <div className="p-4 bg-green-50 rounded-xl border border-green-200 text-sm">
                <div className="font-semibold text-green-900 mb-2">Conversion Tools:</div>
                <div className="text-gray-700 text-xs space-y-1">
                  <div>• Instant quote forms</div>
                  <div>• Before/after galleries</div>
                  <div>• One-click calling</div>
                  <div>• Text messaging</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <div className="inline-flex items-center space-x-2 text-sm bg-white px-4 py-2 rounded-full border border-gray-200">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-gray-700">Our shops average 3x more leads than competitors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SimpleSmartFeatures