'use client'

import React, { useState } from 'react'
import { DollarSign, TrendingUp } from 'lucide-react'

const LeadValueCalculator = () => {
  const [monthlyLeads, setMonthlyLeads] = useState('')
  const [conversionRate, setConversionRate] = useState('25')
  const [avgJobValue, setAvgJobValue] = useState('')
  const [repeatRate, setRepeatRate] = useState('15')
  const [referralRate, setReferralRate] = useState('10')
  const [results, setResults] = useState<{
    leadValue: number
    convertedCustomers: number
    immediateRevenue: number
    repeatRevenue: number
    referralRevenue: number
    totalRevenue: number
    yearlyLeads: number
    yearlyRevenue: number
  } | null>(null)

  const calculateLeadValue = () => {
    const leads = parseInt(monthlyLeads) || 0
    const conversion = parseFloat(conversionRate) / 100
    const jobValue = parseFloat(avgJobValue) || 0
    const repeat = parseFloat(repeatRate) / 100
    const referral = parseFloat(referralRate) / 100

    const convertedCustomers = leads * conversion
    const immediateRevenue = convertedCustomers * jobValue
    const repeatRevenue = convertedCustomers * repeat * jobValue
    const referralCustomers = convertedCustomers * referral
    const referralRevenue = referralCustomers * jobValue

    const totalRevenue = immediateRevenue + repeatRevenue + referralRevenue
    const leadValue = totalRevenue / leads

    const yearlyLeads = leads * 12
    const yearlyRevenue = totalRevenue * 12

    setResults({
      leadValue,
      convertedCustomers,
      immediateRevenue,
      repeatRevenue,
      referralRevenue,
      totalRevenue,
      yearlyLeads,
      yearlyRevenue
    })
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 border-b">
        <div className="flex items-center gap-3">
          <DollarSign className="w-6 h-6 text-green-600" />
          <h2 className="text-2xl font-bold text-gray-900">Lead Value Calculator</h2>
        </div>
        <p className="text-gray-600 mt-2">Calculate the true lifetime value of each lead</p>
      </div>

      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Leads
              </label>
              <input
                type="number"
                placeholder="50"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={monthlyLeads}
                onChange={(e) => setMonthlyLeads(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Conversion Rate (%)
              </label>
              <input
                type="number"
                placeholder="25"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={conversionRate}
                onChange={(e) => setConversionRate(e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">% of leads that become customers</p>
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
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Repeat Customer Rate (%)
              </label>
              <input
                type="number"
                placeholder="15"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={repeatRate}
                onChange={(e) => setRepeatRate(e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">% who return for future work</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Referral Rate (%)
              </label>
              <input
                type="number"
                placeholder="10"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={referralRate}
                onChange={(e) => setReferralRate(e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">% who refer new customers</p>
            </div>

            <button
              onClick={calculateLeadValue}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <DollarSign className="w-5 h-5" />
              Calculate Lead Value
            </button>
          </div>

          {results && (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Lead Value Breakdown</h3>
              </div>

              <div className="space-y-4">
                <div className="text-center p-4 bg-green-100 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600">
                    ${results.leadValue.toFixed(0)}
                  </div>
                  <div className="text-sm text-green-700 font-medium">
                    Value Per Lead
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Converted Customers:</span>
                    <span className="font-semibold">
                      {results.convertedCustomers.toFixed(1)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Immediate Revenue:</span>
                    <span className="font-semibold text-green-600">
                      ${results.immediateRevenue.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Repeat Revenue:</span>
                    <span className="font-semibold text-blue-600">
                      ${results.repeatRevenue.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Referral Revenue:</span>
                    <span className="font-semibold text-purple-600">
                      ${results.referralRevenue.toLocaleString()}
                    </span>
                  </div>

                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">Monthly Total:</span>
                      <span className="font-bold text-lg text-green-600">
                        ${results.totalRevenue.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 mt-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">
                      Yearly Projections
                    </div>
                    <div className="mt-2 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Leads:</span>
                        <span className="font-semibold">{results.yearlyLeads.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Revenue:</span>
                        <span className="font-bold text-green-600">
                          ${results.yearlyRevenue.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  💡 <strong>Tip:</strong> Use this value to determine your maximum cost per lead for profitable marketing.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LeadValueCalculator
