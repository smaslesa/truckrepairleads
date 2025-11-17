'use client'

import React from 'react'
import { Target, Zap, Code, MapPin, Camera, Shield, X, Check } from 'lucide-react'

const Differentiation = () => {
  const features = [
    {
      icon: Code,
      title: "VIN decoder with barcode scanning",
      description: "Mobile-friendly VIN scanning captures vehicle info instantly"
    },
    {
      icon: Target,
      title: "200 truck breakdown-specific keywords",
      description: "Hyper-targeted Google Ads that only reach real truck breakdown customers"
    },
    {
      icon: MapPin,
      title: "5-10 mile hyper-local targeting",
      description: "Your ads only show to people actually near your shop"
    },
    {
      icon: Shield,
      title: "20-30 SEO pages per site",
      description: "Services, OEM brands, and local area pages—not just a basic 5-page template"
    },
    {
      icon: Camera,
      title: "Interactive before/after galleries",
      description: "Showcase your actual work with engaging drag-to-compare sliders"
    },
    {
      icon: Zap,
      title: "Next.js performance",
      description: "Lightning-fast load times (3x faster than typical truck repair shop sites)"
    }
  ]

  const comparison = [
    {
      feature: "Industry Focus",
      template: "Any business",
      generic: "50+ industries",
      us: "Body shops only"
    },
    {
      feature: "Website Tech",
      template: "Old WordPress",
      generic: "Basic templates",
      us: "Modern Next.js"
    },
    {
      feature: "VIN Decoder",
      template: false,
      generic: false,
      us: true
    },
    {
      feature: "Google Ads Keywords",
      template: "None",
      generic: "50-100 generic",
      us: "200 truck breakdown-specific"
    },
    {
      feature: "Negative Keywords",
      template: "None",
      generic: "Basic",
      us: "200 refined"
    },
    {
      feature: "Geo-Targeting",
      template: "City/state",
      generic: "City/state",
      us: "5-10 mile radius"
    },
    {
      feature: "SEO Pages",
      template: "5 pages",
      generic: "5-10 pages",
      us: "20-30 pages"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm mb-6">
            OUR COMPETITIVE ADVANTAGE
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Built Exclusively For Body Shops
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Not for dentists, lawyers, or restaurants. Every feature, every keyword,
            every page—designed for truck breakdown repair.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 rounded-lg p-2.5 flex-shrink-0">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
            <h3 className="text-2xl font-bold text-white text-center">
              How We Compare
            </h3>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 bg-gray-50">Feature</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-500 bg-gray-50">Template Sites</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-500 bg-gray-50">Generic Agencies</th>
                  <th className="text-center py-4 px-6 font-semibold text-blue-600 bg-blue-50">Us</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-gray-600 text-sm">
                      {typeof row.template === 'boolean' ? (
                        row.template ? (
                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        row.template
                      )}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-600 text-sm">
                      {typeof row.generic === 'boolean' ? (
                        row.generic ? (
                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        row.generic
                      )}
                    </td>
                    <td className="py-4 px-6 text-center font-semibold text-blue-600 text-sm bg-blue-50/50">
                      {typeof row.us === 'boolean' ? (
                        row.us ? (
                          <Check className="w-5 h-5 text-blue-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        row.us
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden p-6 space-y-4">
            {comparison.map((row, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-900 mb-3">{row.feature}</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Template Sites:</span>
                    <span className="font-medium text-gray-700">
                      {typeof row.template === 'boolean' ? (
                        row.template ? <Check className="w-4 h-4 text-green-600" /> : <X className="w-4 h-4 text-gray-300" />
                      ) : (
                        row.template
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Generic Agencies:</span>
                    <span className="font-medium text-gray-700">
                      {typeof row.generic === 'boolean' ? (
                        row.generic ? <Check className="w-4 h-4 text-green-600" /> : <X className="w-4 h-4 text-gray-300" />
                      ) : (
                        row.generic
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                    <span className="text-blue-600 font-semibold">Us:</span>
                    <span className="font-bold text-blue-600">
                      {typeof row.us === 'boolean' ? (
                        row.us ? <Check className="w-5 h-5 text-blue-600" /> : <X className="w-5 h-5 text-gray-300" />
                      ) : (
                        row.us
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 italic">
            "Generic marketing doesn't work for specialized businesses. We only do truck repair shops, and we're really good at it."
          </p>
        </div>
      </div>
    </section>
  )
}

export default Differentiation
