'use client'

import React from 'react'

const TrustBanner = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Powering Body Shops Across America
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-1">12+</div>
            <div className="text-sm text-gray-600">States Covered</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-1">705</div>
            <div className="text-sm text-gray-600">Total 5-Star Reviews</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-1">3x</div>
            <div className="text-sm text-gray-600">Faster Load Times</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-1">200</div>
            <div className="text-sm text-gray-600">Keywords Per Campaign</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustBanner
