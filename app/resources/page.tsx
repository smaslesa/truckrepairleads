'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  FileText, Calculator, Lightbulb, BookOpen, Download,
  TrendingUp, Zap, Target, Trophy, Shield, Phone,
  Star, BarChart, Camera, Calendar, DollarSign,
  Users, FileCheck, Megaphone, Search
} from 'lucide-react'
import ResourceCard from '@/components/resources/ResourceCard'

const ResourcesHub = () => {
  const [searchTerm, setSearchTerm] = useState('')
  
  const resources = [
    {
      title: 'Slogan Generator',
      description: '500+ slogans plus AI generator for custom taglines',
      icon: <Lightbulb className="w-6 h-6" />,
      href: '/resources/slogans',
      badge: 'Most Popular',
      items: ['Funny Slogans', 'Trust-Based', 'Professional', 'Custom Generator']
    },
    {
      title: 'Marketing Campaigns',
      description: 'Copy-paste campaigns that actually convert',
      icon: <Target className="w-6 h-6" />,
      href: '/resources/marketing-ideas',
      badge: 'Updated Weekly',
      items: ['Social Media', 'Email Sequences', 'Seasonal Promotions', 'Grand Opening']
    },
    {
      title: 'ROI Calculators',
      description: 'Know your numbers, grow your business',
      icon: <Calculator className="w-6 h-6" />,
      href: '/resources/calculators',
      badge: 'Interactive',
      items: ['Marketing ROI', 'Lead Value', 'Pricing Calculator', 'Profit Margins']
    },
    {
      title: 'Insurance Tools',
      description: 'DRP applications, negotiation scripts, supplements',
      icon: <Shield className="w-6 h-6" />,
      href: '/resources/insurance-tools',
      badge: 'Game Changer',
      items: ['DRP Templates', 'Negotiation Scripts', 'Supplement Guide', 'Adjuster Contacts']
    },
    {
      title: 'Phone Scripts',
      description: 'Convert more calls into appointments',
      icon: <Phone className="w-6 h-6" />,
      href: '/resources/phone-scripts',
      badge: 'Word-for-Word',
      items: ['First Call', 'Follow-ups', 'Objections', 'Voicemail Templates']
    },
    {
      title: 'Review Management',
      description: 'Get more 5-star reviews and handle bad ones',
      icon: <Star className="w-6 h-6" />,
      href: '/resources/reviews',
      badge: 'Essential',
      items: ['Response Templates', 'Review Requests', 'Damage Control', 'Platform Guide']
    },
    {
      title: 'Print Materials',
      description: 'Business cards, brochures, postcards, door hangers',
      icon: <FileText className="w-6 h-6" />,
      href: '/resources/print-materials',
      badge: 'Print-Ready',
      items: ['Business Cards', 'Brochures', 'Postcards', 'Estimate Forms']
    },
    {
      title: 'Competitor Analysis',
      description: 'See exactly what your competition is doing',
      icon: <Search className="w-6 h-6" />,
      href: '/resources/competitor-analysis',
      badge: 'Eye-Opening',
      items: ['Pricing Analysis', 'Service Comparison', 'Marketing Audit', 'SWOT Template']
    },
    {
      title: 'Quick Estimator',
      description: 'Instant estimates for common repairs',
      icon: <DollarSign className="w-6 h-6" />,
      href: '/resources/quick-estimate',
      badge: 'Time Saver',
      items: ['Bumper Repairs', 'Paint Jobs', 'Dent Removal', 'Full Collision']
    },
    {
      title: 'Campaign Calendar',
      description: '12 months of ready-to-run promotions',
      icon: <Calendar className="w-6 h-6" />,
      href: '/resources/campaigns',
      badge: 'Full Year',
      items: ['Monthly Themes', 'Holiday Promos', 'Seasonal Offers', 'Social Posts']
    },
    {
      title: 'Industry Guides',
      description: 'State laws, compliance, best practices',
      icon: <BookOpen className="w-6 h-6" />,
      href: '/resources/guides',
      badge: 'Comprehensive',
      items: ['State Requirements', 'EPA Compliance', 'Safety Protocols', 'Certification']
    },
    {
      title: 'Success Stories',
      description: 'Real shops, real results, real numbers',
      icon: <Trophy className="w-6 h-6" />,
      href: '/resources/success-stories',
      badge: 'Proven',
      items: ['Case Studies', 'Before/After', 'Revenue Growth', 'Strategy Breakdowns']
    }
  ]

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.items.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
  )



  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-gray-50 py-20 px-6 border-b overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600 rounded-full" />
          <div className="absolute top-20 right-20 w-60 h-60 bg-red-400 rounded-full" />
          <div className="absolute bottom-10 left-1/3 w-32 h-32 bg-red-500 rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Trust Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4" />
              100% FREE • NO EMAIL REQUIRED • INSTANT ACCESS
            </div>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              The Ultimate Truck Repair Shop
              <span className="block text-red-600 mt-2">Resource Library</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Everything you need to dominate your market. 500+ tools, templates, 
              calculators, and guides. Actually free. No tricks.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources... (e.g. 'slogans', 'insurance', 'calculator')"
                  className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {searchTerm && (
            <div className="mb-8 text-gray-600">
              Found {filteredResources.length} resources matching "{searchTerm}"
            </div>
          )}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.title} {...resource} />
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">No resources found. Try a different search term.</p>
            </div>
          )}
        </div>
      </section>



      {/* Bottom CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for 50+ Leads Per Month?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            These resources will help you grow. But if you want done-for-you marketing 
            that fills your bays, let's talk.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            See Our Done-For-You Services
          </Link>
        </div>
      </section>
    </>
  )
}

export default ResourcesHub

