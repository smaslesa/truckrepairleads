'use client'

import React, { useState } from 'react'
import { Calculator, TrendingUp, DollarSign } from 'lucide-react'
import { trackToolUsage } from '@/lib/analytics'

const ROICalculator = () => {
  const [investment, setInvestment] = useState('')
  const [newLeads, setNewLeads] = useState('')
  const [avgJobValue, setAvgJobValue] = useState('')
  const [conversionRate, setConversionRate] = useState('25')
  const [results, setResults] = useState<{
    monthlyRevenue: number
    roi: number
    convertedJobs: number
    yearlyRevenue: number
    yearlyProfit: number
    paybackDays: number
  } | null>(null)

  const calculateROI = () => {
    const monthlyInvestment = parseFloat(investment) || 0
    const monthlyLeads = parseInt(newLeads) || 0
    const averageJob = parseFloat(avgJobValue) || 0
    const conversion = parseFloat(conversionRate) / 100

    const convertedJobs = monthlyLeads * conversion
    const monthlyRevenue = convertedJobs * averageJob
    const roi = ((monthlyRevenue - monthlyInvestment) / monthlyInvestment) * 100
    const yearlyRevenue = monthlyRevenue * 12
    const yearlyInvestment = monthlyInvestment * 12
    const yearlyProfit = yearlyRevenue - yearlyInvestment

    setResults({
      monthlyRevenue,
      roi,
      convertedJobs,
      yearlyRevenue,
      yearlyProfit,
      paybackDays: monthlyInvestment > 0 ? (monthlyInvestment / (monthlyRevenue / 30)) : 0
    })

    // Track calculator usage
    trackToolUsage('roi_calculator', 'calculated', true)
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b">
        <div className="flex items-center gap-3">
          <Calculator className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Marketing ROI Calculator</h2>
        </div>
        <p className="text-gray-600 mt-2">Calculate your return on marketing investment</p>
      </div>

      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Marketing Investment
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  placeholder="3000"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={investment}
                  onChange={(e) => setInvestment(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Leads Per Month
              </label>
              <input
                type="number"
                placeholder="50"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={newLeads}
                onChange={(e) => setNewLeads(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Average Job Value
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  placeholder="2500"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Conversion Rate (%)
              </label>
              <input
                type="number"
                placeholder="25"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={conversionRate}
                onChange={(e) => setConversionRate(e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">Industry average: 20-30%</p>
            </div>

            <button
              onClick={calculateROI}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              Calculate ROI
            </button>
          </div>

          {results && (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold text-gray-900">Your Results</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monthly Revenue:</span>
                  <span className="font-semibold text-green-600">
                    ${results.monthlyRevenue.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Converted Jobs:</span>
                  <span className="font-semibold">
                    {results.convertedJobs.toFixed(1)} jobs
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">ROI:</span>
                  <span className={`font-bold text-xl ${results.roi > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {results.roi.toFixed(0)}%
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Payback Period:</span>
                  <span className="font-semibold">
                    {results.paybackDays.toFixed(0)} days
                  </span>
                </div>

                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Yearly Revenue:</span>
                    <span className="font-bold text-lg text-green-600">
                      ${results.yearlyRevenue.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Yearly Profit:</span>
                    <span className="font-bold text-lg text-green-600">
                      ${results.yearlyProfit.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {results.roi > 300 && (
                <div className="mt-4 p-3 bg-green-100 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800 font-medium">
                    🎉 Excellent ROI! This marketing investment should be a priority.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ROICalculator
