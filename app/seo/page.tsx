'use client'

import React, { useState } from 'react'
import { TrendingUp, ArrowRight } from 'lucide-react'
import ClayNavigation from '@/components/simple/SimpleNavbar'
import LeadModal from '@/components/shared/LeadModal'

export default function SEOPage() {
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
                <span>Local SEO</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.05] tracking-tight">
                Rank higher without paying for clicks
              </h1>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                Build organic rankings that bring free traffic forever. While your competitors pay for every click, you own the top spots on Google.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all inline-flex items-center gap-3 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
                >
                  <span>Start Ranking</span>
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

            {/* Timeline Visual */}
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl border border-gray-200 p-8 md:p-12">

                <div className="text-center mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Honest timeline</h2>
                  <p className="text-gray-600">SEO takes time. Here's what to actually expect.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">

                  <div className="relative">
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <div className="text-4xl font-bold text-blue-600 mb-3">Month 1-2</div>
                      <h3 className="font-bold text-gray-900 mb-2">Foundation</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Google Business optimization, technical fixes, content strategy. Building the groundwork for long-term results.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <div className="text-4xl font-bold text-blue-600 mb-3">Month 3-4</div>
                      <h3 className="font-bold text-gray-900 mb-2">Movement</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Start ranking for longer keywords. More map pack appearances. Traffic increases, but not explosive yet.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <div className="text-4xl font-bold text-blue-600 mb-3">Month 5-6</div>
                      <h3 className="font-bold text-gray-900 mb-2">Results</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Page 1 for main keywords. Consistent organic traffic. Leads coming in without paying per click.
                      </p>
                    </div>
                  </div>

                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <p className="text-center text-sm text-gray-700">
                    <span className="font-semibold text-gray-900">Reality check:</span> Anyone promising page 1 in 30 days is lying. Real SEO takes 3-6 months minimum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why SEO Matters */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">

            <div className="text-center mb-20">
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Why invest in SEO
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Build an asset that keeps working while you sleep.
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
                      Stop paying for every click
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Google Ads cost $15-30 per click in truck repair. Organic rankings are free. Once you rank, you get traffic without paying Google. The math adds up fast.
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
                      Build long-term equity
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      SEO compounds over time. Rankings improve, authority builds, traffic grows. Six months from now, you'll have an asset worth thousands per month in free traffic. Ads stop the moment you stop paying.
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
                      Higher trust signals
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Customers trust organic results more than ads. Ranking naturally makes you look established and authoritative. You're not just paying to be seen—you earned it.
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
                      Capture every search
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      We target 20-30 pages covering services, brands, neighborhoods, and cities. "Tesla truck repair shop near me," "insurance approved truck repair," "Honda certified body work"—your shop shows up for everything.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">

            <div className="text-center mb-20">
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                What we actually do
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                No magic. No tricks. Just proven SEO that works.
              </p>
            </div>

            <div className="space-y-12">

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Optimize your Google Business Profile</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Most shops have incomplete profiles. We fill every field, add service categories, upload photos weekly, respond to reviews, and post updates. This alone can double your map pack visibility.
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Build location and service pages</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Create dedicated pages for every area you serve and every service you offer. "Auto body repair in [neighborhood]," "Tesla truck repair center," "insurance claims specialist"—real content that ranks.
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Earn quality backlinks</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Partner with local businesses, sponsor community events, get featured in local news. Real relationships that turn into links Google trusts. No shady link farms or black hat tactics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Track and report progress</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Monthly ranking reports for all target keywords. See exactly where you rank, how traffic is growing, and which pages are bringing in leads. Full transparency on what's working.
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
              Ready to own your rankings?
            </h2>

            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Stop renting visibility from Google. Build an asset that brings free traffic forever.
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
              <div>✓ Real results in 3-6 months</div>
              <div>✓ Month-to-month</div>
              <div>✓ Cancel anytime</div>
            </div>
          </div>
        </section>

      </main>

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="seo-page"
        title="Start Your SEO Strategy"
        subtitle="Build long-term organic rankings"
      />
    </>
  )
}
