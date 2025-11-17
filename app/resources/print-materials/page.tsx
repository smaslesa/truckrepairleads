'use client'

import React, { useState } from 'react'
import { FileText, Download, CreditCard, Mail, Layout, Home, Megaphone, Car, FileSpreadsheet, Printer } from 'lucide-react'

const PrintMaterialsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('essentials')

  const materials = {
    essentials: {
      title: 'Business Essentials',
      icon: <CreditCard className="w-5 h-5" />,
      items: [
        {
          title: 'Business Card Templates',
          description: '20 professional designs ready to print',
          formats: ['Photoshop', 'Canva', 'PDF']
        },
        {
          title: 'Letterhead & Envelopes',
          description: 'Matching stationery set',
          formats: ['Word', 'InDesign', 'PDF']
        },
        {
          title: 'Estimate Forms',
          description: 'Professional paperwork templates',
          formats: ['Excel', 'Word', 'PDF']
        },
        {
          title: 'Invoice Templates',
          description: 'Get paid faster with pro invoices',
          formats: ['Excel', 'QuickBooks', 'PDF']
        }
      ]
    },
    marketing: {
      title: 'Marketing Materials',
      icon: <Megaphone className="w-5 h-5" />,
      items: [
        {
          title: 'Tri-Fold Brochures',
          description: 'Showcase services professionally',
          formats: ['InDesign', 'Canva', 'Publisher']
        },
        {
          title: 'Postcards - Seasonal',
          description: '12 seasonal campaign postcards',
          formats: ['Photoshop', 'Canva']
        },
        {
          title: 'Door Hangers',
          description: 'Storm damage and seasonal',
          formats: ['PDF', 'Publisher']
        },
        {
          title: 'Flyers & Handouts',
          description: 'Event and promotional flyers',
          formats: ['Canva', 'Word', 'PDF']
        }
      ]
    },
    signage: {
      title: 'Signs & Banners',
      icon: <Layout className="w-5 h-5" />,
      items: [
        {
          title: 'Vinyl Banner Designs',
          description: 'Shop front and event banners',
          formats: ['Illustrator', 'PDF']
        },
        {
          title: 'Yard Signs',
          description: '"We\'re Open" and promotional',
          formats: ['PDF', 'Canva']
        },
        {
          title: 'Car Magnets',
          description: 'Turn vehicles into billboards',
          formats: ['Illustrator', 'Canva']
        },
        {
          title: 'Window Clings',
          description: 'Hours, services, promotions',
          formats: ['PDF', 'Publisher']
        }
      ]
    }
  }

  const currentMaterials = materials[selectedCategory as keyof typeof materials]

  return (
    <>
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 px-6 border-b">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Printer className="w-4 h-4" />
            PRINT-READY TEMPLATES
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Print Materials
            <span className="block text-red-600">Download & Print Today</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Business cards, brochures, postcards, and more. All templates professionally designed and print-ready.
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
            {Object.entries(materials).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
                  selectedCategory === key
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                {category.title}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {currentMaterials.items.map((item, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.formats.map((format) => (
                    <span key={format} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {format}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-end">
                  <button className="bg-red-600 text-white px-4 py-2 rounded font-medium hover:bg-red-700 transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Coming Soon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default PrintMaterialsPage
