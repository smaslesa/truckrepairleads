'use client'

import React, { useState } from 'react'
import { ArrowRight, CheckCircle2, Clock, Calendar, Shield } from 'lucide-react'
import LeadModal from '@/components/shared/LeadModal'

const FinalCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const benefits = [
    {
      icon: Clock,
      text: "Live in 2 weeks"
    },
    {
      icon: Shield,
      text: "Month-to-month, no long-term contracts"
    },
    {
      icon: Calendar,
      text: "Cancel anytime"
    }
  ]

  const included = [
    "Custom Next.js website with VIN decoder",
    "Interactive before/after galleries",
    "Hyper-local Google Ads setup",
    "20-30 SEO-optimized pages",
    "Local listings & citation building",
    "Phone call tracking",
    "Monthly performance reports",
    "Unlimited website updates"
  ]

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-5xl mx-auto">

          {/* Main Content */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready To Dominate Your
              <span className="block">Local Market?</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Most truck repair shops in your area aren't advertising. While they wait for referrals,
              you can own every "truck repair near me" search.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all flex items-center space-x-2 group shadow-xl"
              >
                <span>Book Your Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:7029000265"
                className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 transition-all border-2 border-blue-400"
              >
                Call (702) 900-0265
              </a>
            </div>

            {/* Risk Reversals */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-blue-200" />
                    <span className="font-medium">{benefit.text}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* What's Included */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              The Complete System Includes:
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {included.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Pricing Note */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold text-gray-900">Google Ads:</span> Minimum $500/month ad spend (separate from our management fee)
                </p>
                <p className="text-sm text-gray-500">
                  Custom pricing based on your market and goals. Book a demo to get your quote.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Signal at Bottom */}
          <div className="mt-8 text-center">
            <p className="text-blue-100">
              <span className="font-semibold text-white">Join truck repair shops in 12 states</span> who are filling their bays with our system
            </p>
          </div>
        </div>
      </section>

      {/* Lead Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="final-cta-demo"
        title="Book Your Demo"
        subtitle="See exactly how we'll help you dominate your local market"
      />
    </>
  )
}

export default FinalCTA
