'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const WebsiteComparison = () => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX: number) => {
    const container = document.getElementById('comparison-container')
    if (container) {
      const rect = container.getBoundingClientRect()
      const x = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
      setSliderPosition(x)
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Your Competition's Website vs. Yours</h2>
          <p className="text-lg sm:text-xl text-gray-600">
            <span className="hidden sm:inline">Drag the slider to see the difference</span>
            <span className="sm:hidden">Swipe to compare</span>
          </p>
        </motion.div>

        <div 
          id="comparison-container"
          className="relative max-w-6xl mx-auto h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize touch-pan-x"
          onMouseMove={(e) => isDragging && handleMove(e.clientX)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchMove={(e) => isDragging && handleMove(e.touches[0].clientX)}
          onTouchEnd={() => setIsDragging(false)}
        >
          {/* Bad Website (Left) */}
          <div className="absolute inset-0 bg-gray-100">
            <div className="p-4 sm:p-6 lg:p-8">
              {/* Error Banner */}
              <div className="bg-red-500 text-white p-2 sm:p-3 text-center mb-4 flex items-center justify-center gap-2">
                <span>⚠️</span>
                <span className="text-xs sm:text-sm font-bold">
                  <span className="hidden sm:inline">NOT MOBILE RESPONSIVE • 8 SECOND LOAD TIME • BUILT IN 2003</span>
                  <span className="sm:hidden">NOT MOBILE READY • SLOW</span>
                </span>
              </div>
              
              {/* Broken Layout */}
              <div className="space-y-4">
                <div className="h-20 bg-gray-300 animate-pulse rounded" />
                <div className="text-center">
                  <div className="inline-block">
                    <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-4xl animate-spin">
                      🚧
                    </div>
                  </div>
                  <p className="mt-4 font-mono text-blue-800 text-lg sm:text-xl">
                    Welcome to Bob's Truck Repair Shop!
                  </p>
                  <p className="text-red-600 text-sm mt-2 blink">
                    *** UNDER CONSTRUCTION ***
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-32 bg-gray-300 rounded animate-pulse" />
                  <div className="h-32 bg-gray-400 rounded" />
                  <div className="h-32 bg-gray-300 rounded animate-pulse" />
                </div>
                <div className="text-center text-xs text-gray-500 mt-4 sm:mt-8">
                  <span className="hidden sm:inline">Best viewed in Internet Explorer 6 | Webmaster: Bob's nephew (2003)</span>
                  <span className="sm:hidden">Built in 2003</span>
                </div>
              </div>
            </div>
          </div>

          {/* Good Website (Right) */}
          <motion.div 
            className="absolute inset-0 bg-white"
            style={{ 
              clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` 
            }}
          >
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 h-full text-white">
              {/* Success Banner */}
              <div className="bg-green-500 text-white p-3 text-center flex items-center justify-center gap-2">
                <span>✓</span>
                <span className="text-sm font-bold">LOADS IN 1.2 SECONDS • MOBILE PERFECT • CONVERTS 12% OF VISITORS</span>
              </div>
              
              {/* Modern Layout */}
              <div className="p-8 space-y-6">
                <div className="text-center space-y-4">
                  <h1 className="text-5xl font-bold">
                    Get Your Repair Estimate in 30 Seconds
                  </h1>
                  <p className="text-xl opacity-90">
                    Text us photos for an instant quote
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-6 mt-8">
                  <motion.div 
                    className="bg-white/10 backdrop-blur rounded-xl p-6 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl mb-3">📱</div>
                    <h3 className="font-bold">Text Photos</h3>
                    <p className="text-sm opacity-80">Send damage photos</p>
                  </motion.div>
                  <motion.div 
                    className="bg-white/10 backdrop-blur rounded-xl p-6 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl mb-3">⚡</div>
                    <h3 className="font-bold">Instant Quote</h3>
                    <p className="text-sm opacity-80">Get estimate in minutes</p>
                  </motion.div>
                  <motion.div 
                    className="bg-white/10 backdrop-blur rounded-xl p-6 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl mb-3">📅</div>
                    <h3 className="font-bold">Book Online</h3>
                    <p className="text-sm opacity-80">Schedule your repair</p>
                  </motion.div>
                </div>
                
                <motion.button
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-6 rounded-xl text-2xl font-bold shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get My Free Estimate Now →
                </motion.button>
                
                <div className="flex justify-center gap-8 text-sm">
                  <div>✓ Insurance Approved</div>
                  <div>✓ Lifetime Warranty</div>
                  <div>✓ Same Day Service</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-xl"
            style={{ left: `${sliderPosition}%` }}
          >
            <button
              className="absolute top-1/2 -translate-y-1/2 -left-8 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
            >
              <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </button>
          </div>

          {/* Labels */}
          <div className="absolute top-8 left-8 bg-red-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
            THEIR WEBSITE
          </div>
          <div className="absolute top-8 right-8 bg-green-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
            YOUR NEW WEBSITE
          </div>
        </div>

        {/* Stats Below */}
        <div className="grid grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600">0-2</div>
            <p className="text-gray-600">Customers per month from their site</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600">30-50</div>
            <p className="text-gray-600">Customers per month from your new site</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebsiteComparison
