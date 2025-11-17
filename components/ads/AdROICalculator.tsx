'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, Phone, Car } from 'lucide-react'

const AdROICalculator = () => {
  const [adBudget, setAdBudget] = useState(2000)
  const [costPerClick] = useState(48)
  const clicks = Math.floor(adBudget / costPerClick)
  const leads = Math.floor(clicks * 0.25) // 25% conversion rate
  const customers = Math.floor(leads * 0.4) // 40% close rate
  const revenue = customers * 2500 // $2,500 average ticket
  const roi = Math.round((revenue / adBudget - 1) * 100)

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">See Your ROI in Real-Time</h2>
          <p className="text-xl text-gray-600">Adjust your budget and watch the numbers</p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Calculator */}
          <div className="space-y-8">
            <div>
              <label className="block text-lg font-semibold mb-4">
                Monthly Ad Budget: ${adBudget.toLocaleString()}
              </label>
              <input
                type="range"
                min="1000"
                max="10000"
                step="500"
                value={adBudget}
                onChange={(e) => setAdBudget(Number(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((adBudget - 1000) / 9000) * 100}%, #e5e7eb ${((adBudget - 1000) / 9000) * 100}%, #e5e7eb 100%)`
                }}
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>$1,000</span>
                <span>$10,000</span>
              </div>
            </div>

            {/* Flow Chart */}
            <div className="space-y-4">
              <motion.div 
                className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-blue-600"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-600">Your Investment</div>
                    <motion.div 
                      className="text-3xl font-bold text-blue-600"
                      key={adBudget}
                                          initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, type: "tween" }}
                    >
                      ${adBudget.toLocaleString()}
                    </motion.div>
                  </div>
                  <div className="text-4xl">💰</div>
                </div>
              </motion.div>

              <div className="text-center text-2xl text-gray-400">↓</div>

              <motion.div 
                className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-yellow-500"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-600">Website Visits</div>
                    <motion.div 
                      className="text-3xl font-bold text-yellow-600"
                      key={clicks}
                                          initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, type: "tween" }}
                    >
                      {clicks}
                    </motion.div>
                    <div className="text-xs text-gray-500">@ ${costPerClick}/click</div>
                  </div>
                  <div className="text-4xl">👆</div>
                </div>
              </motion.div>

              <div className="text-center text-2xl text-gray-400">↓</div>

              <motion.div 
                className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-orange-500"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-600">Qualified Leads</div>
                    <motion.div 
                      className="text-3xl font-bold text-orange-600"
                      key={leads}
                                          initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, type: "tween" }}
                    >
                      {leads}
                    </motion.div>
                    <div className="text-xs text-gray-500">25% conversion rate</div>
                  </div>
                  <Phone className="w-10 h-10 text-orange-500" />
                </div>
              </motion.div>

              <div className="text-center text-2xl text-gray-400">↓</div>

              <motion.div 
                className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-green-500"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-600">New Customers</div>
                    <motion.div 
                      className="text-3xl font-bold text-green-600"
                      key={customers}
                                          initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, type: "tween" }}
                    >
                      {customers}
                    </motion.div>
                    <div className="text-xs text-gray-500">40% close rate</div>
                  </div>
                  <Car className="w-10 h-10 text-green-500" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Revenue */}
          <div>
            <motion.div 
              className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-12 text-center shadow-2xl"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, type: "tween" }}
            >
              <div className="text-2xl mb-4">Monthly Revenue Generated</div>
              <motion.div 
                className="text-6xl font-bold mb-8"
                key={revenue}
                initial={{ scale: 1.1, color: "#fbbf24" }}
                animate={{ scale: 1, color: "#ffffff" }}
                transition={{ duration: 0.5, type: "tween" }}
              >
                ${revenue.toLocaleString()}
              </motion.div>
              <div className="space-y-4 text-left bg-white/10 rounded-xl p-6">
                <div className="flex justify-between">
                  <span>Revenue:</span>
                  <span className="font-bold">${revenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Ad Spend:</span>
                  <span className="font-bold">-${adBudget.toLocaleString()}</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-xl">
                  <span>Net Profit:</span>
                  <motion.span 
                    className="font-bold"
                    key={revenue - adBudget}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, type: "tween" }}
                  >
                    ${(revenue - adBudget).toLocaleString()}
                  </motion.span>
                </div>
                <div className="text-center pt-4">
                  <motion.div 
                    className="text-4xl font-bold"
                    key={roi}
                    initial={{ scale: 1.2, color: "#fbbf24" }}
                    animate={{ scale: 1, color: "#ffffff" }}
                    transition={{ duration: 0.5, type: "tween" }}
                  >
                    {roi}% ROI
                  </motion.div>
                  <div className="text-sm opacity-90">Return on Investment</div>
                </div>
              </div>
            </motion.div>

            <motion.button
              className="w-full mt-8 bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Getting This ROI →
            </motion.button>

            {/* Competitor Comparison */}
            <div className="mt-8 bg-red-50 border-2 border-red-200 rounded-xl p-6">
              <h4 className="font-bold text-red-700 mb-4">Your Competitors Are Wasting:</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-red-600">❌ Generic ads (2% click rate)</span>
                  <span className="font-bold text-red-600">-$1,200/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-600">❌ Bad landing pages (1% conversion)</span>
                  <span className="font-bold text-red-600">-$1,800/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-600">❌ No tracking or optimization</span>
                  <span className="font-bold text-red-600">-$2,000/mo</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold text-lg">
                  <span className="text-red-700">Total Waste:</span>
                  <span className="text-red-700">-$5,000/mo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">${costPerClick}</div>
            <p className="text-gray-600">Average cost per click</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600">25%</div>
            <p className="text-gray-600">Our conversion rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">40%</div>
            <p className="text-gray-600">Lead to customer rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">$2,500</div>
            <p className="text-gray-600">Average repair value</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdROICalculator
