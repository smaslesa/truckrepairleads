'use client'

import React, { useState } from 'react'
import { Calculator, TrendingUp, DollarSign, Users, Target, Zap } from 'lucide-react'
import ROICalculator from '@/components/resources/ROICalculator'
import LeadValueCalculator from '@/components/resources/LeadValueCalculator'
import QuickEstimator from '@/components/resources/QuickEstimator'

const CalculatorsPage = () => {
  const [activeCalculator, setActiveCalculator] = useState('roi')

  const calculators = {
    roi: {
      title: 'Marketing ROI Calculator',
      description: 'Calculate your return on marketing investment',
      icon: <TrendingUp className="w-6 h-6" />,
      component: <ROICalculator />
    },
    leadValue: {
      title: 'Lead Value Calculator',
      description: 'Find out what each lead is worth to your shop',
      icon: <DollarSign className="w-6 h-6" />,
      component: <LeadValueCalculator />
    },
    quickEstimate: {
      title: 'Quick Repair Estimator',
      description: 'Instant estimates for common repairs',
      icon: <Calculator className="w-6 h-6" />,
      component: <QuickEstimator />
    }
  }

  return (
    <>
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 px-6 border-b">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            BUSINESS CALCULATORS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Know Your Numbers,
            <span className="block text-red-600">Grow Your Business</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Free calculators to understand your shop's profitability and make data-driven decisions.
          </p>
        </div>
      </section>

      <section className="py-8 px-6 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {Object.entries(calculators).map(([key, calc]) => (
              <button
                key={key}
                onClick={() => setActiveCalculator(key)}
                className={`p-6 rounded-xl border-2 transition-all text-left ${
                  activeCalculator === key
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${
                    activeCalculator === key ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {calc.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{calc.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{calc.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {calculators[activeCalculator as keyof typeof calculators].component}
        </div>
      </section>
    </>
  )
}

export default CalculatorsPage

