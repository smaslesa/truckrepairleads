'use client'

import React from 'react'
import { Check, ArrowRight, Phone } from 'lucide-react'

const SimplePricing = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            Simple, honest pricing
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need. Nothing you don't.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-white rounded-2xl border-2 border-gray-900 p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Complete Lead System</h3>
            <div className="text-gray-600">Everything you need to capture more leads</div>
          </div>

          {/* What's Included */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium text-gray-900">Professional Website</div>
                <div className="text-sm text-gray-600">Fast, beautiful, mobile-optimized</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium text-gray-900">Lead Capture System</div>
                <div className="text-sm text-gray-600">VIN decoder, forms, text messaging</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium text-gray-900">Before/After Gallery</div>
                <div className="text-sm text-gray-600">Interactive slider showcasing your work</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium text-gray-900">Google Optimization</div>
                <div className="text-sm text-gray-600">SEO, Maps, Reviews integration</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium text-gray-900">48-Hour Setup</div>
                <div className="text-sm text-gray-600">Live this week, not next month</div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-3">
            <button className="w-full bg-gray-900 text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full bg-white text-gray-700 py-4 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call (800) 532-3701
            </button>
          </div>

          {/* Trust elements */}
          <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-gray-200 text-sm text-gray-600">
            <span>✓ No contracts</span>
            <span>✓ Cancel anytime</span>
            <span>✓ No setup fees</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SimplePricing