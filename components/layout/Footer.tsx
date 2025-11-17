'use client'

import React, { useState } from 'react'
import { Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import LeadModal from '@/components/shared/LeadModal'

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  return (
    <footer className="bg-black text-neutral-300 py-20">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl leading-none mb-6 flex items-baseline">
              <span className="text-blue-600 font-bold tracking-[0.1em]">BODYSHOP</span>
              <span className="text-gray-400 font-light ml-1 tracking-[0.15em]">LEADS</span>
            </div>

            <p className="text-neutral-400 font-light leading-relaxed text-base tracking-wide mb-6">
              Premium digital solutions for truck repair professionals.
            </p>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-normal tracking-[0.05em] transition-all duration-300 uppercase text-sm"
            >
              DEMO
            </button>
          </div>

          {/* Services Navigation */}
          <div>
            <h3 className="text-white font-medium mb-4 tracking-wide">SERVICES</h3>
            <div className="space-y-3">
              <Link href="/websites" className="block text-neutral-400 hover:text-white transition-colors duration-300 font-light text-sm">
                Website Design
              </Link>
              <Link href="/seo" className="block text-neutral-400 hover:text-white transition-colors duration-300 font-light text-sm">
                SEO Services
              </Link>
              <Link href="/google-ads" className="block text-neutral-400 hover:text-white transition-colors duration-300 font-light text-sm">
                Google Ads
              </Link>
              <Link href="/vin-decoder" className="block text-neutral-400 hover:text-white transition-colors duration-300 font-light text-sm">
                VIN Decoder
              </Link>
              <Link href="/shops" className="block text-neutral-400 hover:text-white transition-colors duration-300 font-light text-sm">
                Shop Directory
              </Link>
            </div>
          </div>

          {/* Resources Navigation */}
          <div>
            <h3 className="text-white font-medium mb-4 tracking-wide flex items-center gap-2">
              RESOURCES
              <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full font-medium">FREE</span>
            </h3>
            <div className="space-y-3">
              <Link href="/resources/slogans" className="block text-neutral-400 hover:text-white transition-colors duration-300 font-light text-sm">
                500+ Slogans
              </Link>
              <Link href="/resources/marketing-ideas" className="block text-neutral-400 hover:text-white transition-colors duration-300 font-light text-sm">
                Marketing Campaigns
              </Link>
              <Link href="/resources/calculators" className="block text-neutral-400 hover:text-white transition-colors duration-300 font-light text-sm">
                ROI Calculators
              </Link>
              <Link href="/resources/phone-scripts" className="block text-neutral-400 hover:text-white transition-colors duration-300 font-light text-sm">
                Phone Scripts
              </Link>
              <Link href="/resources/insurance-tools" className="block text-neutral-400 hover:text-white transition-colors duration-300 font-light text-sm">
                Insurance Tools
              </Link>
              <Link href="/resources" className="block text-gray-400 hover:text-gray-300 transition-colors duration-300 font-medium text-sm">
                View All Resources →
              </Link>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-4 tracking-wide">CONTACT</h3>
            <div className="space-y-4">
              {/* Phone */}
              <a 
                href="tel:702-900-0265" 
                className="flex items-center gap-3 text-white hover:text-gray-400 transition-colors duration-300 font-light"
              >
                <Phone className="w-4 h-4" />
                (702) 900-0265
              </a>
              
              <p className="text-xs text-neutral-500 font-light">
                Call or text anytime
              </p>
              
              {/* Email */}
              <a 
                href="mailto:hello@truckrepairleads.com"
                className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-300 font-light text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="text-neutral-500 font-light tracking-wide text-sm">
            © 2025 TruckRepairLeads. All rights reserved.
          </div>
          <div className="flex gap-8 mt-6 md:mt-0">
            <Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors duration-300 font-light tracking-wide text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-neutral-400 hover:text-white transition-colors duration-300 font-light tracking-wide text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      
      <LeadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="footer-cta"
        title="Get Started Today"
        subtitle="Professional websites that generate real leads"
      />
    </footer>
  )
}

export default Footer