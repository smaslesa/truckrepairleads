'use client'

import React from 'react'
import { Star, TrendingUp, Users, DollarSign } from 'lucide-react'

const SuccessStoriesPage = () => {
  const stories = [
    {
      shop: "Mike's Collision Center",
      location: "Phoenix, AZ",
      challenge: "Only 5-10 leads per month from word-of-mouth",
      solution: "Implemented our digital marketing system",
      results: {
        leads: "47 leads/month",
        revenue: "+$127,000/month",
        roi: "412% ROI"
      },
      quote: "We went from struggling to fill our bays to having a 2-week waiting list. The marketing system paid for itself in the first week."
    },
    {
      shop: "Premier Truck Repair",
      location: "Dallas, TX",
      challenge: "Losing customers to competitors with better online presence",
      solution: "New website + Google Ads + SEO package",
      results: {
        leads: "62 leads/month",
        revenue: "+$195,000/month",
        roi: "387% ROI"
      },
      quote: "Our new website converts visitors like crazy. We're now the highest-rated shop in Dallas with over 200 5-star reviews."
    },
    {
      shop: "Vegas Collision Experts",
      location: "Las Vegas, NV",
      challenge: "High competition, low margins on insurance work",
      solution: "Focused on customer-pay and luxury vehicles",
      results: {
        leads: "35 high-value leads/month",
        revenue: "+$215,000/month",
        roi: "523% ROI"
      },
      quote: "By targeting luxury car owners, our average repair value went from $2,500 to $6,800. Game changer."
    }
  ]

  return (
    <>
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 px-6 border-b">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            PROVEN RESULTS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Shops, Real Results
            <span className="block text-red-600">See What's Possible</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These truck repair shops transformed their business with the right marketing strategy. 
            Your success story could be next.
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12">
            {stories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{story.shop}</h3>
                    <p className="text-gray-600 mb-6">{story.location}</p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-red-600 mb-2">THE CHALLENGE</h4>
                        <p className="text-gray-700">{story.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-red-600 mb-2">THE SOLUTION</h4>
                        <p className="text-gray-700">{story.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-red-600 mb-2">THE RESULTS</h4>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center p-3 bg-gray-50 rounded">
                            <div className="text-2xl font-bold text-gray-900">{story.results.leads}</div>
                            <div className="text-xs text-gray-600">New Leads</div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded">
                            <div className="text-2xl font-bold text-green-600">{story.results.revenue}</div>
                            <div className="text-xs text-gray-600">Revenue</div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded">
                            <div className="text-2xl font-bold text-red-600">{story.results.roi}</div>
                            <div className="text-xs text-gray-600">Return</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 flex items-center">
                    <div>
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="text-lg text-gray-800 italic mb-4">
                        "{story.quote}"
                      </blockquote>
                      <div className="font-semibold text-gray-900">
                        Owner, {story.shop}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default SuccessStoriesPage

