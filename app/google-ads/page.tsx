'use client'

import React, { useState } from 'react'
import { Search, Phone, ArrowRight } from 'lucide-react'
import ClayNavigation from '@/components/simple/SimpleNavbar'
import LeadModal from '@/components/shared/LeadModal'

export default function GoogleAdsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <ClayNavigation />

      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                <span>Google Ads Management</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.05] tracking-tight">
                Be the first shop customers find
              </h1>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                When someone searches for truck repair, your shop appears at the top. Every click is a local customer ready to book. No wasted budget, just qualified leads.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all inline-flex items-center gap-3 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
                >
                  <span>Start Getting Leads</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="tel:7029000265"
                  className="text-gray-700 hover:text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-gray-50"
                >
                  Call (702) 900-0265
                </a>
              </div>
            </div>

            {/* Google Search Visual */}
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">

                {/* Search Bar */}
                <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                  <div className="flex items-center bg-white rounded-full border-2 border-gray-300 px-5 py-3 shadow-sm">
                    <Search className="w-5 h-5 text-gray-400 mr-3" />
                    <span className="text-gray-700 font-medium">truck repair shop near me</span>
                  </div>
                </div>

                {/* Search Results */}
                <div className="px-6 py-8 bg-gradient-to-b from-gray-50/50 to-white">

                  {/* Your Ad - #1 Spot */}
                  <div className="relative bg-blue-50 border-2 border-blue-600 rounded-xl p-6 shadow-lg mb-6">
                    <div className="absolute -top-3 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      SPONSORED
                    </div>
                    <h3 className="text-blue-600 text-2xl font-bold mt-2 mb-2">Your Shop Name - Expert Truck Repair</h3>
                    <p className="text-sm text-gray-600 mb-3">Expert truck repair • Free estimates • Insurance approved • 4.9★ rating</p>
                    <div className="flex items-center gap-4 text-sm text-gray-700">
                      <div className="inline-flex items-center gap-2">
                        <Phone className="w-4 h-4 text-blue-600" />
                        <span className="font-semibold">Click to call</span>
                      </div>
                      <span>•</span>
                      <span>0.8 mi away</span>
                    </div>
                  </div>

                  {/* Competitor Results - Faded */}
                  <div className="space-y-4 opacity-40">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="text-blue-700 text-lg font-medium">Competitor Truck Repair</h3>
                      <p className="text-sm text-gray-600 mt-1">Auto body repair and painting services...</p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="text-blue-700 text-lg font-medium">Another Collision Center</h3>
                      <p className="text-sm text-gray-600 mt-1">Professional truck repair services...</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Google Ads */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">

            <div className="text-center mb-20">
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Why Google Ads works for truck repair shops
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Most truck repairs happen within 48 hours of the accident. Be there when customers are ready to book.
              </p>
            </div>

            <div className="space-y-16">

              {/* Benefit 1 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="text-6xl font-bold text-blue-600/10">01</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Instant visibility
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      SEO takes months. Google Ads works immediately. Your shop appears at the top of search results within 24 hours. Start getting calls this week, not next quarter.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200"></div>

              {/* Benefit 2 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="text-6xl font-bold text-blue-600/10">02</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Only pay for local customers
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Hyper-local targeting means your ads only show to people within your service area. No wasted clicks from the wrong city. Every dollar goes toward reaching real potential customers near your shop.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200"></div>

              {/* Benefit 3 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="text-6xl font-bold text-blue-600/10">03</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Track every lead
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Call tracking shows exactly which keywords drive phone calls. Form submissions tracked back to specific ads. You know exactly what you're paying per lead, per customer, per dollar of revenue.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200"></div>

              {/* Benefit 4 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="text-6xl font-bold text-blue-600/10">04</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Collision repair expertise
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      We know "insurance approved" converts better than "quality service." We bid higher on "Tesla repair" than "paint touch-up." 200+ collision-specific keywords optimized from years of data across truck repair shops nationwide.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">

            <div className="text-center mb-20">
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                How we manage your ads
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                You focus on repairs. We handle everything else.
              </p>
            </div>

            <div className="space-y-12">

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Campaign setup</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      We build your Google Ads account from scratch. 200+ targeted keywords, location targeting within your service radius, ad copy tested across hundreds of shops. Everything optimized before spending a dollar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Weekly optimization</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      We adjust bids, test new ad copy, add negative keywords, and refine targeting every single week. Your campaigns get smarter and more efficient over time, not set-and-forget.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Monthly reporting</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Clear reports showing calls, clicks, conversions, and cost per lead. No confusing jargon—just honest numbers about what's working and what we're improving.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to dominate Google?
            </h2>

            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Professional Google Ads management for truck repair shops. Start getting calls within 48 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all flex items-center space-x-2 shadow-xl"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="tel:7029000265"
                className="bg-blue-500 text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-blue-400 transition-all border-2 border-blue-400"
              >
                Call (702) 900-0265
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white text-sm">
              <div>✓ Expert management</div>
              <div>✓ Call tracking included</div>
              <div>✓ Month-to-month</div>
            </div>
          </div>
        </section>

      </main>

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="google-ads-page"
        title="Start Your Google Ads Campaign"
        subtitle="Professional management for truck repair shops"
      />
    </>
  )
}
