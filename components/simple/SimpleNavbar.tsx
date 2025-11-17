'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import LeadModal from '@/components/shared/LeadModal'

const ClayNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-xl leading-none flex items-baseline">
                <span className="text-blue-600 font-bold tracking-[0.1em]">TRUCKREPAIR</span>
                <span className="text-gray-400 font-light ml-1 tracking-[0.15em]">LEADS</span>
              </Link>
              
              {/* Desktop Nav - Clay style minimal */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/websites" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                  Websites
                </Link>
                <Link href="/google-ads" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                  Google Ads
                </Link>
                <Link href="/seo" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                  SEO
                </Link>
                <Link href="/vin-decoder" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                  VIN Decoder
                </Link>
                <Link href="/shops" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                  Shop Directory
                </Link>
              </div>
            </div>
            
            {/* Right side */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="tel:7029000265" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                (702) 900-0265
              </a>
              
              {/* Demo Button - Tesla Tech Blue */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-sm"
              >
                Demo
              </button>
            </div>

            {/* Mobile menu */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-6 space-y-4">
              <Link href="/websites" className="block text-gray-600 hover:text-gray-900">
                Websites
              </Link>
              <Link href="/google-ads" className="block text-gray-600 hover:text-gray-900">
                Google Ads
              </Link>
              <Link href="/seo" className="block text-gray-600 hover:text-gray-900">
                SEO
              </Link>
              <Link href="/vin-decoder" className="block text-gray-600 hover:text-gray-900">
                VIN Decoder
              </Link>
              <Link href="/shops" className="block text-gray-600 hover:text-gray-900">
                Shop Directory
              </Link>
              <a href="tel:7029000265" className="block text-gray-600 hover:text-gray-900">
                (702) 900-0265
              </a>
              {/* Mobile Demo Button */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  setIsModalOpen(true)
                }}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all"
              >
                Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Lead Modal */}
      <LeadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="navigation-cta"
        title="Get Your Demo"
        subtitle="Professional websites that generate real leads"
      />
    </>
  )
}

export default ClayNavigation