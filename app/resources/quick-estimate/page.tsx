'use client'

import React, { useState } from 'react'
import { Calculator, Car, DollarSign, Clock, Wrench, Zap } from 'lucide-react'
import QuickEstimator from '@/components/resources/QuickEstimator'

const QuickEstimatePage = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-green-50 to-white py-16 px-6 border-b">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            INSTANT ESTIMATES
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quick Repair Estimator
            <span className="block text-green-600">30-Second Estimates</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Instant estimates for common truck repairs. Perfect for phone quotes, walk-ins, and initial assessments.
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <QuickEstimator />
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Common Repair Estimates
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-6 h-6 text-green-600" />
                <h3 className="font-semibold text-gray-900">Bumper Repairs</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Minor scuff/scratch</span>
                  <span className="font-medium">$300-500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Crack repair</span>
                  <span className="font-medium">$400-700</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Full repaint</span>
                  <span className="font-medium">$800-1,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Replace + paint</span>
                  <span className="font-medium">$1,500-2,500</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Dent Repair</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Small PDR</span>
                  <span className="font-medium">$150-300</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Medium PDR</span>
                  <span className="font-medium">$300-600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Large dent + paint</span>
                  <span className="font-medium">$800-1,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Panel replacement</span>
                  <span className="font-medium">$1,200-2,000</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-red-600" />
                <h3 className="font-semibold text-gray-900">Paint Work</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Touch-up</span>
                  <span className="font-medium">$200-400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Single panel</span>
                  <span className="font-medium">$600-1,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Multiple panels</span>
                  <span className="font-medium">$1,500-3,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Full vehicle</span>
                  <span className="font-medium">$3,500-8,000</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-purple-600" />
                <h3 className="font-semibold text-gray-900">Glass Replacement</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Windshield</span>
                  <span className="font-medium">$300-800</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Side window</span>
                  <span className="font-medium">$150-400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rear window</span>
                  <span className="font-medium">$200-600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunroof glass</span>
                  <span className="font-medium">$800-1,500</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
                <h3 className="font-semibold text-gray-900">Timing Estimates</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Minor repair</span>
                  <span className="font-medium">1-2 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Moderate damage</span>
                  <span className="font-medium">3-5 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Major collision</span>
                  <span className="font-medium">1-2 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Frame damage</span>
                  <span className="font-medium">2-4 weeks</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-6 h-6 text-indigo-600" />
                <h3 className="font-semibold text-gray-900">Additional Services</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Rental car/day</span>
                  <span className="font-medium">$35-60</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Towing service</span>
                  <span className="font-medium">$100-200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Storage/day</span>
                  <span className="font-medium">$25-50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Detail package</span>
                  <span className="font-medium">$150-300</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Download Pricing Guide
          </h2>
          <p className="text-gray-600 mb-8">
            Complete pricing guide with labor rates, parts markup, and regional adjustments for accurate estimates.
          </p>
          <div className="bg-gray-100 text-gray-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2">
            <Calculator className="w-5 h-5" />
            Guide Coming Soon
          </div>
        </div>
      </section>
    </>
  )
}

export default QuickEstimatePage
