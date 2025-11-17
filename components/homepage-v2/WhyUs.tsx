'use client'

import React from 'react'

const WhyUs = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            We only succeed when you do
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your shop's growth is our entire focus. Here's what that means for you.
          </p>
        </div>

        {/* Clean Vertical List */}
        <div className="space-y-16">

          {/* Item 1 */}
          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="text-6xl font-bold text-blue-600/10">01</div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Premium marketing service
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  No templates. No cutting corners. Every website, every Google Ad, every piece of content is crafted specifically for truck repair shops. You get enterprise-level marketing that actually understands truck breakdown repair.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Item 2 */}
          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="text-6xl font-bold text-blue-600/10">02</div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Fast results on Google
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Most shops see calls within the first week. Our hyper-local Google Ads campaigns are built on 200+ truck breakdown-specific keywords, fine-tuned over years. No learning curve at your expense.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Item 3 */}
          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="text-6xl font-bold text-blue-600/10">03</div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Beautiful websites that convert
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Built on modern Next.js technology—the same framework powering Netflix and Nike. Lightning-fast load times, mobile-first design, and features like VIN decoding that set you apart from every other shop.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Item 4 */}
          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="text-6xl font-bold text-blue-600/10">04</div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Top-level customer service
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  You have direct access to our team. No ticket systems, no offshore support. Weekly performance reports, call tracking analytics, and honest conversations about what's working and what's not.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyUs
