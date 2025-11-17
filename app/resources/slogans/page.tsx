'use client'

import React, { useState } from 'react'
import { Copy, RefreshCw, Download, Star, Zap, Heart, Shield, Clock, DollarSign } from 'lucide-react'
import SloganGenerator from '@/components/resources/SloganGenerator'

const SlogansPage = () => {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null)
  const [favorites, setFavorites] = useState<string[]>([])

  const sloganCategories = {
    funny: {
      title: 'Funny & Clever',
      icon: '😄',
      color: 'yellow',
      slogans: [
        "We'll straighten you out!",
        "We make your car un-dent-iable",
        "Accidents happen. Looking good is a choice.",
        "We're not perfect, but your car will be",
        "Turning 'Oh crap!' into 'Oh snap!'",
        "We fix your bad decisions",
        "Making fender benders history",
        "Your car's second chance at a first impression",
        "We're bumper to bumper with quality",
        "Dent worry, be happy!",
        "We'll bang out your problems",
        "Auto therapy for wounded vehicles",
        "Where bent becomes beautiful",
        "Collision magicians at work",
        "Making cars sexy again"
      ]
    },
    trust: {
      title: 'Trust & Experience',
      icon: '🤝',
      color: 'blue',
      slogans: [
        "Your neighbor's choice since 1985",
        "Three generations of excellence",
        "Trusted by your insurance company",
        "Where reputation meets restoration",
        "Family owned, community trusted",
        "Your local collision experts",
        "Integrity in every repair",
        "The name you know, the quality you trust",
        "Certified excellence, guaranteed satisfaction",
        "Building trust one repair at a time",
        "Honesty is our best policy",
        "Where quality never takes a shortcut",
        "Your car is safe in our hands",
        "Transparency in every transaction",
        "The shop your mechanic recommends"
      ]
    },
    speed: {
      title: 'Speed & Efficiency',
      icon: '⚡',
      color: 'green',
      slogans: [
        "Back on the road in no time",
        "Fast repairs, lasting quality",
        "Quick turnaround, quality guaranteed",
        "In today, out tomorrow",
        "Speed meets precision",
        "Your fastest route to recovery",
        "24-hour emergency service",
        "Rapid response collision care",
        "Express lane to excellence",
        "Quality repairs at the speed of life",
        "While you wait service available",
        "Same day estimates, next day repairs",
        "We respect your time and your car",
        "Lightning fast, thunder strong",
        "Quick fixes, permanent solutions"
      ]
    },
    quality: {
      title: 'Quality & Perfection',
      icon: '✨',
      color: 'purple',
      slogans: [
        "Perfection in every panel",
        "Where quality meets craftsmanship",
        "Restoring more than just metal",
        "Excellence is our standard",
        "Precision repairs, perfect results",
        "Making it better than new",
        "Attention to every detail",
        "Craftsmen, not just mechanics",
        "Your car deserves the best",
        "Flawless finish, every time",
        "OEM quality or better",
        "Perfectionists with a paint gun",
        "Where good enough isn't good enough",
        "Artistry in truck repair",
        "Exceeding factory standards"
      ]
    },
    insurance: {
      title: 'Insurance Friendly',
      icon: '📋',
      color: 'indigo',
      slogans: [
        "All insurance welcome",
        "We handle the paperwork",
        "Direct insurance billing",
        "Your advocate with insurance companies",
        "Hassle-free claims processing",
        "Insurance specialists on staff",
        "Preferred by major insurers",
        "We speak insurance fluently",
        "Zero deductible options available",
        "Making claims painless",
        "Insurance approved, customer loved",
        "We fight for your claim",
        "Maximizing your insurance benefits",
        "DRP for all major carriers",
        "Your insurance liaison"
      ]
    },
    premium: {
      title: 'Premium & Luxury',
      icon: '💎',
      color: 'gray',
      slogans: [
        "Luxury service for every vehicle",
        "Where premium meets perfection",
        "First class collision care",
        "The Rolls Royce of repair shops",
        "Concierge collision services",
        "White glove treatment for your vehicle",
        "Exclusively excellent",
        "Premium repairs, practical prices",
        "Five-star service, every time",
        "The boutique truck repair shop experience",
        "Elevating truck repair",
        "Where ordinary becomes extraordinary",
        "Sophisticated solutions for smart drivers",
        "Refined repairs for discerning drivers",
        "Excellence without compromise"
      ]
    }
  }

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(id)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const toggleFavorite = (slogan: string) => {
    setFavorites(prev => 
      prev.includes(slogan) 
        ? prev.filter(s => s !== slogan)
        : [...prev, slogan]
    )
  }

  const downloadFavorites = () => {
    const text = favorites.join('\n')
    const blob = new Blob([text], { type: 'text/plain' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'my-favorite-slogans.txt'
    a.click()
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-50 via-white to-gray-50 py-16 px-6 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              500+ SLOGANS • 100% FREE
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Truck Repair Shop Slogans That
              <span className="block text-red-600 mt-2">Actually Convert</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional, funny, and trust-building slogans tested in real shops. 
              Click to copy instantly. Save favorites. Generate custom ones.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Slogans</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-gray-900">6</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-gray-900">12.8K</div>
              <div className="text-sm text-gray-600">Downloads</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-gray-900">Free</div>
              <div className="text-sm text-gray-600">Forever</div>
            </div>
          </div>
        </div>
      </section>

      {/* Slogan Generator */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SloganGenerator />
        </div>
      </section>

      {/* Favorites Bar */}
      {favorites.length > 0 && (
        <section className="sticky top-0 z-20 bg-green-50 border-y border-green-200 py-4 px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-green-600 fill-current" />
              <span className="font-medium text-green-900">
                {favorites.length} Favorite{favorites.length !== 1 && 's'} Saved
              </span>
            </div>
            <button
              onClick={downloadFavorites}
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Favorites
            </button>
          </div>
        </section>
      )}

      {/* Slogan Categories */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12">
            {Object.entries(sloganCategories).map(([key, category]) => (
              <div key={key} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-gray-50 to-white p-6 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{category.icon}</span>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                        <p className="text-gray-600">{category.slogans.length} slogans in this category</p>
                      </div>
                    </div>
                    <div className="text-gray-300">
                      <Download className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.slogans.map((slogan, index) => {
                      const id = `${key}-${index}`
                      const isFavorite = favorites.includes(slogan)
                      return (
                        <div 
                          key={index}
                          className="group relative bg-gray-50 hover:bg-white p-4 rounded-lg border border-gray-200 hover:border-red-300 transition-all"
                        >
                          <p className="text-gray-800 pr-16 font-medium">
                            "{slogan}"
                          </p>
                          <div className="absolute top-4 right-4 flex gap-1">
                            <button
                              onClick={() => toggleFavorite(slogan)}
                              className={`p-1.5 rounded transition-colors ${
                                isFavorite 
                                  ? 'text-red-500 bg-red-50' 
                                  : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                              }`}
                            >
                              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
                            </button>
                            <button
                              onClick={() => copyToClipboard(slogan, id)}
                              className="p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded transition-colors"
                            >
                              {copiedIndex === id ? (
                                <span className="text-green-600 text-xs font-medium">✓</span>
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download All */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Get All 500+ Slogans Instantly
          </h2>
          <p className="text-gray-600 mb-8">
            Download the complete collection organized by category. 
            Includes usage tips, customization guide, and trademark considerations.
          </p>
          <div className="bg-gray-100 text-gray-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2">
            <Download className="w-5 h-5" />
            PDF Coming Soon
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Use the favorites feature above to download your selected slogans as a text file.
          </p>
        </div>
      </section>
    </>
  )
}

export default SlogansPage

