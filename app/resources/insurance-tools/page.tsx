'use client'

import React from 'react'
import { Shield, FileText, Calculator, Phone, DollarSign, AlertTriangle } from 'lucide-react'

const InsuranceToolsPage = () => {
  const tools = [
    {
      title: 'DRP Application Template',
      description: 'Complete application package for Direct Repair Programs',
      icon: <Shield className="w-6 h-6" />,
      features: [
        'Company capability statement',
        'Equipment inventory list',
        'Certification documentation',
        'Reference template'
      ],

      badge: 'Most Downloaded'
    },
    {
      title: 'Supplement Documentation Guide',
      description: 'Get supplements approved on first submission',
      icon: <FileText className="w-6 h-6" />,
      features: [
        'Photo requirements checklist',
        'Written documentation templates',
        'Common denial reasons',
        'Appeals process guide'
      ],

    },
    {
      title: 'Insurance Negotiation Scripts',
      description: 'Word-for-word scripts that get results',
      icon: <Phone className="w-6 h-6" />,
      features: [
        'Initial contact scripts',
        'Objection responses',
        'Escalation phrases',
        'Email templates'
      ],
      downloads: 4123,
      badge: 'Staff Favorite'
    },
    {
      title: 'Total Loss Calculator',
      description: 'Know if vehicle meets threshold before adjuster',
      icon: <Calculator className="w-6 h-6" />,
      features: [
        'State-by-state thresholds',
        'ACV calculation formula',
        'Salvage value estimator',
        'Documentation checklist'
      ],

    },
    {
      title: 'Parts Price Matrix',
      description: 'Document OEM vs aftermarket differences',
      icon: <DollarSign className="w-6 h-6" />,
      features: [
        'Price comparison spreadsheet',
        'Quality difference documentation',
        'Warranty comparison chart',
        'Insurance rebuttal templates'
      ],
      downloads: 2341
    },
    {
      title: 'Fraud Prevention Toolkit',
      description: 'Protect your shop from insurance fraud',
      icon: <AlertTriangle className="w-6 h-6" />,
      features: [
        'Red flag checklist',
        'Documentation requirements',
        'Reporting procedures',
        'Legal protection forms'
      ],
      downloads: 987,
      badge: 'New'
    }
  ]

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-6 border-b">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            INSURANCE MASTERY TOOLS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stop Leaving Money on the Table
            <span className="block text-blue-600">Master Insurance Claims</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to work effectively with insurance companies. Get approvals faster, maximize payouts, protect your shop.
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                      {tool.icon}
                    </div>
                    {tool.badge && (
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                        {tool.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.title}</h3>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  <ul className="space-y-2 mb-6">
                    {tool.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">

                    <div className="bg-gray-100 text-gray-600 px-4 py-2 rounded font-medium">
                      Coming Soon
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Insurance Company Contact Directory
          </h2>
          <p className="text-gray-600 mb-8">
            Direct phone numbers and emails for supplements departments at 50+ major insurance companies. Updated monthly.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Access Complete Directory (Free)
          </button>
        </div>
      </section>
    </>
  )
}

export default InsuranceToolsPage
