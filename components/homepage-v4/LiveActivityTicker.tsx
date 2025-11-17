'use client'

import React from 'react'
import { TrendingUp, MapPin } from 'lucide-react'

const LiveActivityTicker = () => {
  const activities = [
    { shop: "Precision Auto Body", city: "Phoenix, AZ", metric: "34 calls this week", time: "2m ago" },
    { shop: "Elite Collision Center", city: "Denver, CO", metric: "28 estimates sent", time: "5m ago" },
    { shop: "City Side Auto Body", city: "Silver Spring, MD", metric: "Ranked #1 for 3 keywords", time: "8m ago" },
    { shop: "Premier Body Shop", city: "Seattle, WA", metric: "41 calls this week", time: "12m ago" },
    { shop: "The Local Body Shop", city: "Coeur d'Alene, ID", metric: "95% booking rate", time: "15m ago" },
    { shop: "Advance Auto Body", city: "Norwalk, CA", metric: "18 Google Ads clicks today", time: "18m ago" },
  ]

  // Duplicate for seamless loop
  const doubledActivities = [...activities, ...activities]

  return (
    <section className="py-6 bg-gray-50 border-y border-gray-200 overflow-hidden">
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

        {/* Scrolling content */}
        <div className="flex animate-scroll">
          {doubledActivities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-2 bg-white rounded-lg border border-gray-200 shadow-sm mx-2 whitespace-nowrap flex-shrink-0"
            >
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <div className="text-sm">
                <span className="font-semibold text-gray-900">{activity.shop}</span>
                <span className="text-gray-400 mx-2">•</span>
                <span className="text-gray-600">{activity.metric}</span>
                <span className="text-gray-400 mx-2">•</span>
                <span className="text-gray-500 text-xs">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default LiveActivityTicker
