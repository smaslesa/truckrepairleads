'use client'

import React, { useState } from 'react'
import { RefreshCw, Copy, Sparkles } from 'lucide-react'

const SloganGenerator = () => {
  const [shopName, setShopName] = useState('')
  const [city, setCity] = useState('')
  const [style, setStyle] = useState('professional')
  const [generatedSlogans, setGeneratedSlogans] = useState<string[]>([])
  const [copied, setCopied] = useState<number | null>(null)

  const templates = {
    professional: [
      `${shopName || '[Shop Name]'} - Excellence in truck repair`,
      `Trust ${shopName || '[Shop Name]'} for quality repairs`,
      `${shopName || '[Shop Name]'}: Where quality meets service`,
      `Your ${city || '[City]'} truck repair experts`,
      `${shopName || '[Shop Name]'} - Restoring confidence since 1985`
    ],
    funny: [
      `${shopName || '[Shop Name]'} - We'll straighten you out!`,
      `Making ${city || '[City]'} cars un-dent-iable`,
      `${shopName || '[Shop Name]'}: Turning oops into excellence`,
      `We fix what ${city || '[City]'} traffic breaks`,
      `${shopName || '[Shop Name]'} - Your car's happy place`
    ],
    trustworthy: [
      `${city || '[City]'}'s most trusted truck repair center`,
      `${shopName || '[Shop Name]'} - Family owned, community trusted`,
      `Neighbors trust ${shopName || '[Shop Name]'}`,
      `${shopName || '[Shop Name]'}: Integrity in every repair`,
      `Serving ${city || '[City]'} with pride for 30 years`
    ],
    speed: [
      `${shopName || '[Shop Name]'} - Fast repairs, lasting quality`,
      `Get back on ${city || '[City]'} roads faster`,
      `${shopName || '[Shop Name]'}: In today, out tomorrow`,
      `Quick turnaround at ${shopName || '[Shop Name]'}`,
      `${city || '[City]'}'s fastest truck repair`
    ]
  }

  const generateSlogans = () => {
    const selectedTemplates = templates[style as keyof typeof templates]
    setGeneratedSlogans(selectedTemplates)
  }

  const copySlogan = (slogan: string, index: number) => {
    navigator.clipboard.writeText(slogan)
    setCopied(index)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-8 border border-red-200">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Sparkles className="w-4 h-4" />
          AI SLOGAN GENERATOR
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Create Custom Slogans
        </h2>
        <p className="text-gray-600">
          Generate personalized slogans for your shop in seconds
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Shop Name
          </label>
          <input
            type="text"
            placeholder="e.g., Mike's Collision Center"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City/Location
          </label>
          <input
            type="text"
            placeholder="e.g., Las Vegas"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Style
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Object.keys(templates).map((styleOption) => (
            <button
              key={styleOption}
              onClick={() => setStyle(styleOption)}
              className={`p-3 rounded-lg font-medium text-sm transition-all ${
                style === styleOption
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {styleOption.charAt(0).toUpperCase() + styleOption.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center mb-8">
        <button
          onClick={generateSlogans}
          className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center gap-2"
        >
          <RefreshCw className="w-5 h-5" />
          Generate Slogans
        </button>
      </div>

      {generatedSlogans.length > 0 && (
        <div className="border-t pt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Your Generated Slogans
          </h3>
          <div className="space-y-3">
            {generatedSlogans.map((slogan, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-between group hover:border-red-300 transition-colors"
              >
                <span className="text-gray-800 font-medium">
                  "{slogan}"
                </span>
                <button
                  onClick={() => copySlogan(slogan, index)}
                  className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                >
                  {copied === index ? (
                    <span className="text-green-600 text-sm font-medium">✓</span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SloganGenerator
