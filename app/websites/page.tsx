'use client'

import React, { useState } from 'react'
import { ArrowRight, Clock, Shield, Smartphone, Star, TrendingUp, Users, Wrench, CheckCircle2, Zap, Globe } from 'lucide-react'
import ClayNavigation from '@/components/simple/SimpleNavbar'
import LeadModal from '@/components/shared/LeadModal'

export default function WebsitesPage() {
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
                <span>Professional Websites</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.05] tracking-tight">
                The website your shop deserves
              </h1>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                Premium websites that give your truck repair shop the credibility to win customers and the visibility
                to dominate local search. Professional design that converts browsers into booked jobs.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all inline-flex items-center gap-3 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
                >
                  <span>Get Your Website</span>
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

            {/* Browser Mockup */}
            <div className="relative max-w-6xl mx-auto mb-20">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Browser Chrome */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-sm text-gray-500 font-medium bg-gray-100 px-4 py-1.5 rounded-lg">YourTruckShop.com</div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-500 font-medium">Live & Fast</span>
                  </div>
                </div>

                {/* Website Preview */}
                <div className="relative bg-gradient-to-br from-blue-50 to-slate-50 p-8 sm:p-12 lg:p-16">

                  {/* Hero Section Mockup */}
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 sm:p-12 mb-8 relative overflow-hidden">
                    {/* Truck silhouette background */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10">
                      <svg className="w-64 h-64 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 18.5a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 01-1.5 1.5 1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 01-1.5 1.5 1.5 1.5 0 01-1.5-1.5H6v-11h12l4 4v7h-2.5a1.5 1.5 0 01-1.5 1.5zm-1.5-3a1.5 1.5 0 011.5 1.5h2v-5.5l-3-3H7.5v9h1a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5 1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5z"/>
                      </svg>
                    </div>

                    <div className="relative z-10">
                      <div className="inline-block bg-blue-500/20 backdrop-blur-sm text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        24/7 EMERGENCY SERVICE
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Expert Truck Repair <br/>You Can Trust
                      </h3>
                      <p className="text-blue-100 text-lg mb-6 max-w-xl">
                        Fleet service, diesel & gas repairs, 24/7 emergency roadside assistance
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center">
                          Free Estimate
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold text-center border border-white/20">
                          Call Now
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                        <Star className="w-5 h-5 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Customer Reviews</h4>
                      <p className="text-xs text-gray-600">Build trust instantly</p>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                        <Smartphone className="w-5 h-5 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Mobile Optimized</h4>
                      <p className="text-xs text-gray-600">Perfect on any device</p>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                        <Clock className="w-5 h-5 text-orange-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Online Booking</h4>
                      <p className="text-xs text-gray-600">Book jobs 24/7</p>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                        <TrendingUp className="w-5 h-5 text-purple-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">SEO Optimized</h4>
                      <p className="text-xs text-gray-600">Rank higher on Google</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Your Truck Shop Needs This */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl border border-gray-200">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Why Your Truck Repair Shop Needs a Professional Website
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  In 2025, your website is the first impression for 89% of new customers. Make it count.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Win More Customers</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Truck owners research online before choosing a shop. A professional website makes them choose YOU
                      over competitors with outdated sites or no online presence.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Build Instant Credibility</h4>
                    <p className="text-gray-600 leading-relaxed">
                      A premium website signals professionalism and expertise. Show customers you're serious about your
                      business and capable of handling their expensive trucks.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Rank Higher on Google</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Google prioritizes fast, mobile-friendly websites with great user experience. Our sites are
                      built to rank—getting you found when customers search "truck repair near me."
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Wrench className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Convert Visitors to Jobs</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Every element is designed for one goal: getting customers to call or book. Clear CTAs,
                      prominent phone numbers, and online booking turn browsers into booked jobs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Excellence */}
              <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Lightning Fast</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Built on global edge infrastructure. Your customers never wait, and Google rewards speed.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Enterprise Security</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    SSL encryption, DDoS protection, automatic updates. Your site stays protected 24/7.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Always Online</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    99.9% uptime guarantee. Your site stays live when customers need you most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready for your new website?
            </h2>

            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Professional design, lightning-fast performance, and features built for truck repair shops. Live in 1 week.
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
              <div>✓ Live in 1 week</div>
              <div>✓ Month-to-month</div>
              <div>✓ Cancel anytime</div>
            </div>
          </div>
        </section>

      </main>

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="websites-page"
        title="Get Your Professional Website"
        subtitle="Premium design built for truck repair shops"
      />
    </>
  )
}
