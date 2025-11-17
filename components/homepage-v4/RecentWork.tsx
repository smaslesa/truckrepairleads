'use client'

import React from 'react'
import { ExternalLink, Zap, Shield, Globe } from 'lucide-react'
import Image from 'next/image'

const RecentWork = () => {
  const sites = [
    {
      name: "The Local Body Shop",
      location: "Coeur d'Alene, ID",
      url: "https://www.thelocalbodyshop.com/",
      screenshot: "https://res.cloudinary.com/ddyiobiae/image/upload/v1762122415/Screenshot_2025-11-02_at_2.26.10_PM_uqiwnr.png"
    },
    {
      name: "City Side Auto Body",
      location: "Clinton, MD",
      url: "https://www.city-side.com/",
      screenshot: "https://res.cloudinary.com/ddyiobiae/image/upload/v1762122413/Screenshot_2025-11-02_at_2.25.57_PM_nesuvd.png"
    },
    {
      name: "Advance Auto Body",
      location: "Santa Fe Springs, CA",
      url: "https://www.advanceautobodysfs.com/",
      screenshot: "https://res.cloudinary.com/ddyiobiae/image/upload/v1762122414/Screenshot_2025-11-02_at_2.25.44_PM_wjomji.png"
    }
  ]

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            <span>Our Recent Launches</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Powering Body Shops Across America
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium websites that give your truck repair shop the credibility to win customers and the visibility to dominate local search. Professional design that converts browsers into booked jobs.
          </p>
        </div>

        {/* Sites Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {sites.map((site, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">

                {/* Screenshot */}
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Image
                    src={site.screenshot}
                    alt={`${site.name} website`}
                    fill
                    className="object-cover object-top"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-xl hover:bg-gray-50 transition-colors"
                      >
                        <span>View Live Site</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-xl mb-1">
                    {site.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{site.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Benefits */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Blazing Fast</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Built on global edge infrastructure for instant page loads worldwide. Your customers never wait.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Enterprise Security</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              SSL encryption, DDoS protection, and automatic security updates. Your site is always protected.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">99.9% Uptime</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Hosted on premium infrastructure with automatic scaling. Your site stays online when customers need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentWork
