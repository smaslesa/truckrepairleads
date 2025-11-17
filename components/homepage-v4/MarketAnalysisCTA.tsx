'use client'

import React, { useState } from 'react'
import { ArrowRight, TrendingUp, Search, Sparkles, Mail, User, Building2 } from 'lucide-react'

const MarketAnalysisCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    shopName: '',
    phone: '',
    website: '' // Honeypot field
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot check - if this hidden field is filled, it's likely a bot
    if (formData.website) {
      console.log('Bot detected - honeypot triggered')
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', shopName: '', phone: '', website: '' })
      }, 5000)
      return
    }

    // Basic validation to prevent obvious spam
    const namePattern = /^[a-zA-Z\s'-]{2,50}$/
    const shopPattern = /^[a-zA-Z0-9\s'&.-]{2,100}$/
    const phonePattern = /^[\d\s()+-]{10,20}$/

    if (!namePattern.test(formData.name.trim())) {
      alert('Please enter a valid name (letters only, 2-50 characters)')
      return
    }

    if (!shopPattern.test(formData.shopName.trim())) {
      alert('Please enter a valid shop name')
      return
    }

    if (formData.phone && !phonePattern.test(formData.phone.replace(/\s/g, ''))) {
      alert('Please enter a valid phone number')
      return
    }

    try {
      // Send the form data to the API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          shop: formData.shopName,
          email: formData.email,
          phone: formData.phone,
          message: 'Request for free market analysis',
          source: 'homepage-market-analysis',
          timestamp: new Date().toISOString(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form')
      }

      console.log('Form submitted successfully:', data)
      setSubmitted(true)

      // Reset after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', shopName: '', phone: '' })
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your request. Please try again or contact us directly.')
    }
  }

  return (
    <section id="analysis" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700 scroll-mt-20">
      <div className="max-w-5xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Value Prop */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              <span>Free Market Analysis</span>
            </div>

            <h2 className="text-4xl font-bold mb-6 leading-tight">
              See exactly how many customers are searching for truck breakdown repair in your area
            </h2>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              We'll analyze your local market and show you:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 backdrop-blur rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Search className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Monthly search volume</div>
                  <div className="text-blue-100 text-sm">How many people are searching for truck repair shops</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 backdrop-blur rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Competitor analysis</div>
                  <div className="text-blue-100 text-sm">Who's advertising and where you can rank</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 backdrop-blur rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">AI-optimized campaigns</div>
                  <div className="text-blue-100 text-sm">Smart ad copy, keywords, and bidding tailored to your market</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Form */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">

              {!submitted ? (
                <>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Get Your Free Analysis
                    </h3>
                    <p className="text-gray-600">
                      No cost, no commitment. See your opportunity.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Smith"
                          className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@yourbodyshop.com"
                          className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Shop Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Shop Name
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={formData.shopName}
                          onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                          placeholder="Your Body Shop Name"
                          className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone (Optional) */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number <span className="text-gray-400 font-normal">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(702) 555-0123"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                      <span>Get My Free Analysis</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      We'll email you a detailed report within 24 hours
                    </p>
                  </form>
                </>
              ) : (
                /* Success State */
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Analysis on the way!
                  </h3>
                  <p className="text-gray-600">
                    We'll email your market analysis within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarketAnalysisCTA
