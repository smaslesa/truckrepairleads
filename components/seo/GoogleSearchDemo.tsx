'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GoogleSearchDemo = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [currentResult, setCurrentResult] = useState(0)
  const searchText = "truck repair shop near me"
  
  // Type animation
  useEffect(() => {
    let timeout: NodeJS.Timeout
    
    if (searchQuery.length < searchText.length) {
      timeout = setTimeout(() => {
        setSearchQuery(searchText.slice(0, searchQuery.length + 1))
      }, 100)
    } else if (!showResults) {
      timeout = setTimeout(() => {
        setShowResults(true)
      }, 500)
    }
    
    return () => clearTimeout(timeout)
  }, [searchQuery, showResults])
  
  // Show results one by one
  useEffect(() => {
    if (showResults && currentResult < 3) {
      const timeout = setTimeout(() => {
        setCurrentResult(prev => prev + 1)
      }, 800)
      return () => clearTimeout(timeout)
    }
  }, [showResults, currentResult])
  
  // Reset animation after showing all results
  useEffect(() => {
    if (currentResult === 3) {
      const timeout = setTimeout(() => {
        setSearchQuery('')
        setShowResults(false)
        setCurrentResult(0)
      }, 4000) // Show complete results for 4 seconds
      return () => clearTimeout(timeout)
    }
  }, [currentResult])

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Watch How Customers Find You</h2>
          <p className="text-xl text-gray-600">
            Thousands of truck repair searches happen in your market every month.<br />
            <span className="font-bold text-red-600">Your competitors are getting them all.</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Google Search Bar */}
          <motion.div 
            className="bg-white rounded-full shadow-xl p-6 mb-8 border-2 border-gray-200"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="flex items-center gap-4">
              <svg className="w-10 h-10" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <input 
                className="flex-1 text-xl outline-none"
                value={searchQuery}
                readOnly
                placeholder="Search Google"
              />
              {searchQuery.length === searchText.length && (
                <motion.button
                  className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  Search
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Search Results */}
          <div className="min-h-[500px]">
            <AnimatePresence mode="sync">
              {showResults && (
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
              {/* Ads Section */}
              {currentResult >= 1 && (
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="bg-white rounded-lg p-6 border-l-4 border-yellow-400 shadow-lg"
                >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded font-bold">AD</span>
                      <span className="text-sm text-gray-500">Premier Collision Center</span>
                    </div>
                    <h3 className="text-blue-700 text-xl hover:underline cursor-pointer">
                      Professional Truck Repair Repair - Insurance Approved
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Expert truck repair. Free estimates, quality work...
                    </p>
                  </div>
                  <div className="text-right">
                    <motion.div 
                      className="text-2xl font-bold text-red-600"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity, type: "tween" }}
                    >
                      -$7
                    </motion.div>
                    <div className="text-xs text-gray-500">per click</div>
                  </div>
                </div>
                <div className="mt-3 text-xs text-red-600 font-semibold">
                  💰 They pay $5-8 every time someone clicks this
                </div>
                </motion.div>
              )}

              {/* Your Client - #1 Organic */}
              {currentResult >= 2 && (
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="relative bg-white rounded-lg p-6 border-2 border-green-500 shadow-xl"
                >
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-r-lg font-bold">
                  YOUR CLIENT
                </div>
                <div className="ml-8">
                  <h3 className="text-blue-700 text-xl hover:underline cursor-pointer font-semibold">
                    Mike's Truck Repair Shop - 5 Star Truck Repair Near You
                  </h3>
                  <div className="flex items-center gap-4 my-2">
                    <div className="flex text-yellow-400">
                      {'★★★★★'.split('').map((star, i) => (
                        <motion.span
                          key={i}
                                                  initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.1 + i * 0.1 }}
                        >
                          {star}
                        </motion.span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">4.9 (247 reviews)</span>
                  </div>
                  <p className="text-gray-600">
                    Professional truck repair with lifetime warranty. Free estimates, insurance approved...
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex gap-4 text-sm">
                      <button className="text-blue-700 hover:underline">Directions</button>
                      <button className="text-blue-700 hover:underline">Call</button>
                      <button className="text-blue-700 hover:underline">Website</button>
                    </div>
                    <motion.div 
                      className="text-green-600 font-bold"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, type: "tween" }}
                    >
                      FREE Traffic! $0/click
                    </motion.div>
                  </div>
                </div>
                </motion.div>
              )}

              {/* Competitor */}
              {currentResult >= 3 && (
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="bg-gray-100 rounded-lg p-6 opacity-60"
                >
                  <h3 className="text-blue-700 text-lg">Some Other Truck Repair Shop</h3>
                  <p className="text-gray-600 text-sm">Another shop that gets barely any clicks...</p>
                  <div className="text-xs text-gray-500 mt-2">
                    Gets 5% of clicks • Page 2 of Google
                  </div>
                </motion.div>
              )}

              {/* Stats */}
              {currentResult === 3 && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-blue-600 text-white rounded-lg p-6 text-center"
                >
                  <div className="text-2xl font-bold mb-4">The Choice:</div>
                  <div className="space-y-2 text-lg">
                    <p>• <span className="text-red-300">Stay invisible</span> = 0 new customers</p>
                    <p>• <span className="text-yellow-300">Pay for ads</span> = $1,500/month minimum</p>
                    <p>• <span className="text-green-300">Rank organically</span> = FREE customers forever</p>
                  </div>
                </motion.div>
              )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Loading State */}
            {!showResults && (
              <div className="flex items-center justify-center h-[400px]">
                <div className="text-gray-400 text-lg">
                  {searchQuery.length === 0 ? 'Customer searches for local truck repair shop...' : 'Searching...'}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoogleSearchDemo
