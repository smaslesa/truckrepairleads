'use client'

import { useState, useEffect } from 'react'
import { X, ArrowRight, Sparkles } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { trackCTAClick, track } from '@/lib/analytics'

const DemoBanner = () => {
  const [isVisible, setIsVisible] = useState(true)
  const pathname = usePathname()
  
  // Only show on template pages
  const showBanner = (pathname === '/american' || pathname === '/luxury') && isVisible

  if (!showBanner) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          <Sparkles className="w-5 h-5 hidden sm:block" />
          <span className="text-xs sm:text-sm font-medium">
            You're viewing a demo • This can be your truck breakdown shop's website
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => {
              trackCTAClick('Get Started', 'demo_banner', 'primary')
              track('demo_page_interaction', {
                action: 'banner_cta_click',
                demo_type: pathname?.replace('/', ''),
                category: 'engagement',
              })
              window.location.href = '/'
            }}
            className="bg-white text-red-600 px-3 sm:px-4 py-1.5 rounded text-xs sm:text-sm font-bold hover:bg-gray-100 transition-all flex items-center gap-1 sm:gap-2"
          >
            Get Started
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
          <button
            onClick={() => {
              track('demo_page_interaction', {
                action: 'banner_closed',
                demo_type: pathname?.replace('/', ''),
                category: 'engagement',
              })
              setIsVisible(false)
            }}
            className="text-white/80 hover:text-white p-1"
            aria-label="Close banner"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default DemoBanner