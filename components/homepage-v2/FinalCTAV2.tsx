'use client'

import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import LeadModal from '@/components/shared/LeadModal'

const FinalCTAV2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to fill your bays?
          </h2>

          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Most truck repair shops in your area aren't advertising. Be the one they find first.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all flex items-center space-x-2 shadow-xl"
            >
              <span>Get a Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:7029000265"
              className="bg-blue-500 text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-blue-400 transition-all border-2 border-blue-400"
            >
              Call (702) 900-0265
            </a>
          </div>

          {/* Simple Guarantees */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white text-sm">
            <div>✓ Live in 1 week</div>
            <div>✓ Month-to-month</div>
            <div>✓ Cancel anytime</div>
          </div>
        </div>
      </section>

      {/* Lead Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="final-cta-v2"
        title="Get Your Demo"
        subtitle="See how we help truck repair shops dominate their local market"
      />
    </>
  )
}

export default FinalCTAV2
