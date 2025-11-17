'use client'

import React from 'react'
import Link from 'next/link'
import { BookOpen, FileText, Shield, Map, Car, Wrench, Download, ChevronRight } from 'lucide-react'

const GuidesPage = () => {
  const guides = [
    {
      category: 'State Requirements',
      icon: <Map className="w-6 h-6" />,
      guides: [
        { title: 'California Truck Repair Shop Requirements', pages: 47, badge: 'Popular' },
        { title: 'Texas Truck Repair Laws', pages: 38 },
        { title: 'Florida Truck Repair Regulations', pages: 41 },
        { title: 'Nevada Licensing Guide', pages: 29, badge: 'Local' }
      ]
    },
    {
      category: 'Insurance & DRP',
      icon: <Shield className="w-6 h-6" />,
      guides: [
        { title: 'Direct Repair Program Complete Guide', pages: 67, badge: 'Comprehensive' },
        { title: 'Insurance Negotiation Mastery', pages: 43 },
        { title: 'Supplement Documentation Bible', pages: 31 }
      ]
    },
    {
      category: 'Modern Technology',
      icon: <Car className="w-6 h-6" />,
      guides: [
        { title: 'ADAS Calibration Requirements', pages: 52, badge: 'Essential' },
        { title: 'Electric Vehicle Repair Certification', pages: 48 },
        { title: 'Aluminum Repair Procedures', pages: 39 }
      ]
    },
    {
      category: 'Business Operations',
      icon: <Wrench className="w-6 h-6" />,
      guides: [
        { title: 'Google My Business Domination', pages: 28, badge: 'Popular' },
        { title: 'Cycle Time Reduction Strategies', pages: 34 },
        { title: 'Customer Service Excellence', pages: 41 }
      ]
    }
  ]

  return (
    <>
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 px-6 border-b">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            COMPREHENSIVE GUIDES
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Know
            <span className="block text-red-600">To Dominate Your Market</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            200+ pages of guides covering state regulations, insurance processes, 
            and modern repair technologies. All free. No email required.
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12">
            {guides.map((category) => (
              <div key={category.category}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-red-100 text-red-600 rounded-lg">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {category.guides.map((guide) => (
                    <div 
                      key={guide.title}
                      className="group bg-white p-6 rounded-lg border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors flex-1">
                          {guide.title}
                        </h3>
                        {guide.badge && (
                          <span className="ml-3 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                            {guide.badge}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span>{guide.pages} pages</span>
                        {guide.badge && (
                          <>
                            <span>•</span>
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">{guide.badge}</span>
                          </>
                        )}
                      </div>
                      
                      <div className="w-full bg-gray-100 text-gray-600 py-2 rounded font-medium flex items-center justify-center gap-2">
                        <Download className="w-4 h-4" />
                        Coming Soon
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default GuidesPage

