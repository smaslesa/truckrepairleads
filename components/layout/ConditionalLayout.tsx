'use client'

import { usePathname } from 'next/navigation'
import ClayNavigation from '@/components/simple/SimpleNavbar'
import Footer from './Footer'

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <>
      <ClayNavigation />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}