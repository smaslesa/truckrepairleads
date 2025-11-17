'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const DeviceShowcase = () => {
  const [activeDevice, setActiveDevice] = useState('mobile')
  
  const devices = {
    mobile: { 
      width: 375, 
      height: 667, 
      traffic: '73%', 
      icon: '📱',
      name: 'Mobile',
      description: 'Most of your customers'
    },
    tablet: { 
      width: 768, 
      height: 900, 
      traffic: '15%', 
      icon: '📲',
      name: 'Tablet',
      description: 'iPad users'
    },
    desktop: { 
      width: 1200, 
      height: 700, 
      traffic: '12%', 
      icon: '💻',
      name: 'Desktop',
      description: 'Office searches'
    }
  }

  const currentDevice = devices[activeDevice as keyof typeof devices]

  return (
    <div className="space-y-12">
      {/* Device Selector */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
        {Object.entries(devices).map(([key, device]) => (
          <motion.button
            key={key}
            onClick={() => setActiveDevice(key)}
            className={`px-6 py-4 rounded-xl font-bold transition-all text-base border-2 ${
              activeDevice === key 
                ? 'bg-white text-black border-amber-400 shadow-2xl shadow-amber-400/20' 
                : 'bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-md'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{device.icon}</span>
              <div className="text-left">
                <div className="font-bold">{device.name}</div>
                <div className="text-xs opacity-70">{device.traffic} of traffic</div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Device Preview */}
      <div className="flex justify-center px-4">
        <motion.div
          className="relative"
          animate={{
            width: Math.min(currentDevice.width * 0.8, 400),
            height: Math.min(currentDevice.height * 0.8, 600),
          }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
          {/* Device Frame */}
          <div className="relative w-full h-full">
            {/* Mobile Frame */}
            {activeDevice === 'mobile' && (
              <div className="relative w-full h-full bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                  {/* Content */}
                  <iframe 
                    src="/american" 
                    className="w-full h-full border-0 scale-50 origin-top-left"
                    style={{ 
                      width: '200%', 
                      height: '200%',
                      transform: 'scale(0.5)',
                      transformOrigin: 'top left'
                    }}
                    title="Mobile Preview"
                  />
                </div>
              </div>
            )}

            {/* Tablet Frame */}
            {activeDevice === 'tablet' && (
              <div className="relative w-full h-full bg-black rounded-[2rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                  <iframe 
                    src="/american" 
                    className="w-full h-full border-0 scale-75 origin-top-left"
                    style={{ 
                      width: '133%', 
                      height: '133%',
                      transform: 'scale(0.75)',
                      transformOrigin: 'top left'
                    }}
                    title="Tablet Preview"
                  />
                </div>
              </div>
            )}

            {/* Desktop Frame */}
            {activeDevice === 'desktop' && (
              <div className="relative w-full h-full">
                {/* Monitor Frame */}
                <div className="bg-gray-800 rounded-t-lg p-1 shadow-2xl">
                  <div className="bg-white rounded-t-lg overflow-hidden" style={{ height: currentDevice.height * 0.8 - 40 }}>
                    <iframe 
                      src="/american" 
                      className="w-full h-full border-0"
                      title="Desktop Preview"
                    />
                  </div>
                </div>
                {/* Monitor Stand */}
                <div className="w-20 h-8 bg-gray-700 mx-auto rounded-b-lg"></div>
                <div className="w-32 h-3 bg-gray-800 mx-auto rounded-full"></div>
              </div>
            )}
          </div>

          {/* Traffic Indicator */}
          <motion.div
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-black px-6 py-3 rounded-full shadow-2xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold">{currentDevice.traffic}</div>
              <div className="text-xs font-semibold">{currentDevice.description}</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Device Stats */}
      <motion.div 
        className="max-w-4xl mx-auto mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Why Mobile-First Design Matters
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">73%</div>
              <div className="text-white font-semibold mb-1">Mobile Traffic</div>
              <div className="text-gray-300 text-sm">Your customers search on phones</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">2.1sec</div>
              <div className="text-white font-semibold mb-1">Decision Time</div>
              <div className="text-gray-300 text-sm">To trust your business</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">85%</div>
              <div className="text-white font-semibold mb-1">Leave Immediately</div>
              <div className="text-gray-300 text-sm">If site doesn't work on mobile</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default DeviceShowcase