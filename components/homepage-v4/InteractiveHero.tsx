'use client'

import React, { useState } from 'react'
import { ArrowRight, Search, MapPin, TrendingUp, Zap } from 'lucide-react'
import LeadModal from '@/components/shared/LeadModal'

const InteractiveHero = () => {
  const [city, setCity] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Mock data - in production, this would be dynamic
  const marketData: { [key: string]: { searches: number; competitors: number; opportunity: string } } = {
    'default': { searches: 2840, competitors: 8, opportunity: '$34,000' },
    'las vegas': { searches: 8100, competitors: 23, opportunity: '$97,000' },
    'phoenix': { searches: 6600, competitors: 19, opportunity: '$79,000' },
    'denver': { searches: 4400, competitors: 12, opportunity: '$53,000' },
    'seattle': { searches: 5200, competitors: 16, opportunity: '$62,000' }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (city.trim()) {
      setShowResults(true)
    }
  }

  const cityLower = city.toLowerCase()
  const data = marketData[cityLower] || marketData['default']

  return (
    <>
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 min-h-[85vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full">

          {!showResults ? (
            /* Initial State - Input Focus */
            <div className="max-w-4xl mx-auto text-center">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>See your market opportunity</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.05]">
                Be the <span className="text-blue-600">first shop</span>
                <span className="block mt-2">customers call in your city</span>
              </h1>

              {/* Subhead */}
              <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                Enter your city below to see how many customers are searching for truck repair shops right now.
              </p>

              {/* City Input - The Hero */}
              <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-12">
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2">
                    <MapPin className="w-6 h-6 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter your city (e.g., Las Vegas, Phoenix...)"
                    className="w-full pl-14 pr-4 py-5 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all shadow-lg"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!city.trim()}
                  className="mt-4 w-full bg-blue-600 text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <span>Show My Market Opportunity</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              {/* Trust Line */}
              <p className="text-sm text-gray-500">
                Join <span className="font-semibold text-gray-900">2,200+ truck repair shops</span> dominating their local markets
              </p>
            </div>

          ) : (
            /* Results State - Market Opportunity Revealed */
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left: Results */}
              <div>
                <button
                  onClick={() => setShowResults(false)}
                  className="text-blue-600 hover:text-blue-700 font-semibold mb-6 flex items-center gap-2 text-sm"
                >
                  ← Try another city
                </button>

                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Your opportunity in
                  <span className="block text-blue-600 mt-1 capitalize">{city}</span>
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                  Here's what we found for truck repair shops in your area:
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">

                  {/* Monthly Searches */}
                  <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2 text-blue-600 mb-2">
                      <Search className="w-5 h-5" />
                      <span className="text-sm font-semibold">MONTHLY SEARCHES</span>
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-1">
                      {data.searches.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">
                      People searching for truck repair shops
                    </div>
                  </div>

                  {/* Competitors */}
                  <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2 text-purple-600 mb-2">
                      <Zap className="w-5 h-5" />
                      <span className="text-sm font-semibold">COMPETITORS</span>
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-1">
                      {data.competitors}
                    </div>
                    <div className="text-sm text-gray-600">
                      Shops advertising actively
                    </div>
                  </div>

                  {/* Monthly Opportunity */}
                  <div className="col-span-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 border-2 border-blue-600 shadow-lg">
                    <div className="flex items-center gap-2 text-blue-100 mb-2">
                      <TrendingUp className="w-5 h-5" />
                      <span className="text-sm font-semibold">ESTIMATED OPPORTUNITY</span>
                    </div>
                    <div className="text-5xl font-bold text-white mb-1">
                      {data.opportunity}<span className="text-2xl">/mo</span>
                    </div>
                    <div className="text-sm text-blue-100">
                      Potential monthly revenue from Google traffic
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-gray-900 text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Claim This Opportunity</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-sm text-gray-500 text-center mt-4">
                  See exactly how we'll put you at #1 in your market
                </p>
              </div>

              {/* Right: Animated Search Results */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden">

                  {/* Search Bar */}
                  <div className="bg-gray-50 border-b border-gray-200 p-4">
                    <div className="flex items-center bg-white rounded-full border border-gray-300 px-4 py-3 shadow-sm">
                      <Search className="w-5 h-5 text-gray-500 mr-3" />
                      <span className="text-gray-700 font-medium text-sm">
                        truck repair shop near me
                      </span>
                    </div>
                  </div>

                  {/* Results List */}
                  <div className="p-6 space-y-4">

                    {/* Your Shop - #1 with animation */}
                    <div className="relative bg-blue-50 border-2 border-blue-500 rounded-xl p-5 transform animate-[slideDown_0.5s_ease-out]">
                      <div className="absolute -top-3 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                        SPONSORED
                      </div>
                      <div className="flex items-start gap-4 mt-2">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-md">
                          1
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 text-lg mb-1">Your Shop Name</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex text-yellow-400">★★★★★</div>
                            <span className="text-sm text-gray-600 font-semibold">4.9</span>
                          </div>
                          <div className="flex gap-2">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-semibold">
                              Call Now
                            </button>
                            <button className="border border-gray-300 px-4 py-2 rounded-lg text-xs font-semibold">
                              Directions
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Competitors - Faded */}
                    <div className="border border-gray-200 rounded-lg p-4 opacity-40 animate-[fadeIn_0.5s_ease-out_0.3s_both]">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm">2</div>
                        <div>
                          <h3 className="font-medium text-gray-700 text-sm">Competitor Shop</h3>
                          <p className="text-xs text-gray-500">★★★★☆ 4.2</p>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4 opacity-30 animate-[fadeIn_0.5s_ease-out_0.5s_both]">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm">3</div>
                        <div>
                          <h3 className="font-medium text-gray-700 text-sm">Another Body Shop</h3>
                          <p className="text-xs text-gray-500">★★★☆☆ 3.8</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Badge */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                    <div className="text-center text-white">
                      <div className="text-2xl font-bold mb-1">You're #1</div>
                      <div className="text-sm text-blue-100">When customers search in {city}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.4;
          }
        }
      `}</style>

      {/* Lead Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="interactive-hero"
        title="Claim Your Market Opportunity"
        subtitle={`Let's show you how to dominate truck repair shop searches in ${city}`}
      />
    </>
  )
}

export default InteractiveHero
