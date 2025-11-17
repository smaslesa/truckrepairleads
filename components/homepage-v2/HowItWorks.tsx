'use client'

import React from 'react'
import { Search, Globe, PhoneCall, ArrowRight } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
      title: "Get Found First",
      description: "Hyper-local Google Ads (5-10 mile radius) + deep local SEO puts you at the top when customers search.",
      features: [
        "200 truck breakdown-specific keywords",
        "5-10 mile geo-targeting",
        "20-30 SEO-optimized pages",
        "Google Maps optimization"
      ]
    },
    {
      icon: Globe,
      iconColor: "text-green-600",
      iconBg: "bg-green-50",
      title: "Build Instant Trust",
      description: "Premium websites with VIN decoder, before/after galleries, and mobile-first design that converts visitors.",
      features: [
        "VIN decoder with barcode scanning",
        "Interactive before/after sliders",
        "Lightning-fast Next.js tech",
        "Mobile-optimized (80% of traffic)"
      ]
    },
    {
      icon: PhoneCall,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50",
      title: "Capture More Leads",
      description: "Text-to-book, one-click calling, and conversion-optimized forms turn traffic into estimates.",
      features: [
        "One-click calling",
        "Text message capture",
        "Easy quote forms",
        "Phone call tracking"
      ]
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How We Fill Your Bays
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three integrated systems working together to dominate your local market.
          </p>
        </div>

        {/* System Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="relative"
              >
                {/* Arrow between cards on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-4 z-10">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}

                {/* Card */}
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-300 transition-all h-full">
                  {/* Icon */}
                  <div className={`w-14 h-14 ${step.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${step.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className={`w-1.5 h-1.5 ${step.iconColor.replace('text-', 'bg-')} rounded-full mt-1.5 flex-shrink-0`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* The System Diagram */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why The Complete System Works Better
          </h3>

          <div className="max-w-3xl mx-auto">
            {/* Flow */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap">
                  Google Ads
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <div className="text-gray-700">Immediate traffic to your site</div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap">
                  Premium Website
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <div className="text-gray-700">Converts visitors with VIN decoder, galleries, easy booking</div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap">
                  Local SEO
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <div className="text-gray-700">Builds long-term organic traffic</div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap">
                  Reviews & Citations
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <div className="text-gray-700">Increases trust and rankings</div>
              </div>

              {/* Result */}
              <div className="pt-4 border-t-2 border-blue-600 mt-6">
                <div className="bg-blue-600 text-white px-6 py-4 rounded-xl font-bold text-lg text-center">
                  = MORE CALLS → MORE ESTIMATES → MORE CARS IN YOUR BAYS
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <p className="text-center text-gray-600 mt-8 italic">
            Most truck repair shops try one thing at a time and wonder why it doesn't work. Our system works together.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
