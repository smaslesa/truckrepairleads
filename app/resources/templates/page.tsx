'use client'

import React, { useState } from 'react'
import { FileText, Download, Eye, Copy, Briefcase, Mail, FileSpreadsheet } from 'lucide-react'

const TemplatesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('estimates')

  const templateCategories = {
    estimates: {
      title: 'Estimate Templates',
      icon: <FileSpreadsheet className="w-5 h-5" />,
      templates: [
        {
          name: 'Insurance Estimate Template',
          format: 'Excel',
          description: 'Professional estimate format accepted by all major insurers'
        },
        {
          name: 'Quick Estimate Form',
          format: 'PDF',
          description: 'Simple 1-page estimate for minor repairs'
        },
        {
          name: 'Supplement Request Template',
          format: 'Word',
          description: 'Get supplements approved faster'
        }
      ]
    },
    emails: {
      title: 'Email Templates',
      icon: <Mail className="w-5 h-5" />,
      templates: [
        {
          name: 'Estimate Follow-up Sequence',
          format: 'Text',
          description: '5-email sequence to convert estimates'
        },
        {
          name: 'Insurance Approval Request',
          format: 'Text',
          description: 'Professional insurance correspondence'
        },
        {
          name: 'Customer Thank You Series',
          format: 'Text',
          description: 'Build loyalty and get reviews'
        }
      ]
    },
    contracts: {
      title: 'Forms & Contracts',
      icon: <Briefcase className="w-5 h-5" />,
      templates: [
        {
          name: 'Repair Authorization Form',
          format: 'PDF',
          description: 'Legal repair authorization with terms'
        },
        {
          name: 'Storage Agreement',
          format: 'Word',
          description: 'Protect yourself from storage disputes'
        },
        {
          name: 'Direct Repair Agreement',
          format: 'Word',
          description: 'DRP contract template'
        }
      ]
    }
  }

  const currentTemplates = templateCategories[selectedCategory as keyof typeof templateCategories]

  return (
    <>
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 px-6 border-b">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Templates
            <span className="block text-red-600">Ready to Use Today</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Save hours with proven templates for estimates, emails, and business forms. All templates are legally reviewed and insurance-approved.
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
            {Object.entries(templateCategories).map(([key, category]) => (
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentTemplates.templates.map((template, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded font-medium">
                      {template.format}
                    </span>

                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {template.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {template.description}
                  </p>
                  <button className="w-full bg-gray-400 text-white py-2 rounded font-medium cursor-not-allowed flex items-center justify-center gap-2">
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

export default TemplatesPage
