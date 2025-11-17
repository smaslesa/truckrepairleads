'use client'

import React, { useState } from 'react'
import LeadModal from '@/components/shared/LeadModal'

const SimpleFinalCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join hundreds of shops getting more customers online.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all"
            >
              Get Started →
            </button>
            <span className="text-gray-600">
              Questions? Call <a href="tel:7029000265" className="font-semibold text-gray-900 hover:underline">(702) 900-0265</a>
            </span>
          </div>
        </div>
      </section>

      {/* Lead Modal */}
      <LeadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="final-cta-section"
        title="Get Started Today"
        subtitle="Professional websites that generate real leads"
      />
    </>
  )
}

export default SimpleFinalCTA