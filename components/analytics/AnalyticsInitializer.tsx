'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { initializeTracking, captureSourceAttribution, trackPageView } from '@/lib/analytics'

function AnalyticsInitializerInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Initialize tracking on mount
  useEffect(() => {
    initializeTracking()
  }, [])

  // Track page views on route changes
  useEffect(() => {
    if (pathname) {
      // Capture any new UTM parameters
      captureSourceAttribution()

      // Track the page view
      trackPageView(pathname, document.title)
    }
  }, [pathname, searchParams])

  return null
}

export default function AnalyticsInitializer() {
  return (
    <Suspense fallback={null}>
      <AnalyticsInitializerInner />
    </Suspense>
  )
}
