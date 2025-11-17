'use client'

import React, { useState } from 'react'
import { Search, BarChart, DollarSign, Users, TrendingUp, Eye, Target, Zap } from 'lucide-react'

const CompetitorAnalysisPage = () => {
  const [activeTab, setActiveTab] = useState('pricing')

  const analysisTools = {
    pricing: {
      title: 'Pricing Analysis',
      icon: <DollarSign className="w-5 h-5" />,
      tools: [
        {
          title: 'Labor Rate Comparison',
          description: 'Track competitors\' hourly rates',
          features: ['15 common repairs tracked', 'Monthly rate updates', 'Geographic averages', 'Premium vs discount positioning'],

        },
        {
          title: 'Service Menu Audit',
          description: 'What services do competitors offer?',
          features: ['Complete service lists', 'Specialty services identified', 'Package deal analysis', 'Upsell opportunity gaps'],

        },
        {
          title: 'Insurance Rate Sheets',
          description: 'Compare insurance reimbursement rates',
          features: ['DRP rate comparisons', 'Non-DRP negotiations', 'Paint & materials markup', 'Sublet service rates'],

        }
      ]
    },
    marketing: {
      title: 'Marketing Intelligence',
      icon: <Target className="w-5 h-5" />,
      tools: [
        {
          title: 'Google Ads Spy Tool',
          description: 'See exactly what competitors are advertising',
          features: ['Ad copy analysis', 'Keyword targeting', 'Landing page screenshots', 'Budget estimates'],
          downloads: 4123
        },
        {
          title: 'Social Media Audit',
          description: 'Track competitor social activity',
          features: ['Post frequency analysis', 'Engagement rates', 'Content themes', 'Promotional strategies'],
          downloads: 1654
        },
        {
          title: 'Website Analysis Report',
          description: 'Comprehensive competitor website review',
          features: ['SEO keyword rankings', 'Page load speeds', 'Conversion elements', 'Review management'],
          downloads: 2987
        }
      ]
    },
    operations: {
      title: 'Operations Analysis',
      icon: <BarChart className="w-5 h-5" />,
      tools: [
        {
          title: 'Facility Comparison',
          description: 'Size, equipment, and capacity analysis',
          features: ['Square footage estimates', 'Bay count tracking', 'Equipment inventory', 'Technology adoption'],
          downloads: 1432
        },
        {
          title: 'Staffing Analysis',
          description: 'Competitor team size and structure',
          features: ['Employee count estimates', 'Certification tracking', 'Turnover indicators', 'Hiring patterns'],
          downloads: 987
        },
        {
          title: 'Customer Service Mystery Shop',
          description: 'Evaluate competitor customer experience',
          features: ['Phone script evaluation', 'Estimate process review', 'Facility cleanliness', 'Communication quality'],
          downloads: 2156
        }
      ]
    }
  }

  const currentTools = analysisTools[activeTab as keyof typeof analysisTools]

  return (
    <>
      <section className="bg-gradient-to-br from-purple-50 to-white py-16 px-6 border-b">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Search className="w-4 h-4" />
            COMPETITIVE INTELLIGENCE
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Know Your Competition
            <span className="block text-purple-600">Better Than They Know Themselves</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete competitive analysis tools. Track pricing, marketing strategies, and operations. Find gaps and opportunities to dominate your market.
          </p>
        </div>
      </section>

      <section className="sticky top-0 z-10 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto py-4 gap-2">
            {Object.entries(analysisTools).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
                  activeTab === key
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {section.icon}
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentTools.tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.title}</h3>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  <ul className="space-y-2 mb-6">
                    {tool.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
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

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              SWOT Analysis Template
            </h2>
            <p className="text-gray-600">
              Complete framework to analyze Strengths, Weaknesses, Opportunities, and Threats
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold text-green-800">Strengths</h3>
              </div>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• What do you do better than competitors?</li>
                <li>• What unique certifications do you have?</li>
                <li>• What's your competitive advantage?</li>
                <li>• What do customers praise most?</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-5 h-5 text-red-600" />
                <h3 className="font-semibold text-red-800">Weaknesses</h3>
              </div>
              <ul className="space-y-2 text-sm text-red-700">
                <li>• What do competitors do better?</li>
                <li>• What resources do you lack?</li>
                <li>• What customer complaints are common?</li>
                <li>• Where do you lose to competitors?</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-blue-800">Opportunities</h3>
              </div>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• What services don't competitors offer?</li>
                <li>• What market trends can you capitalize on?</li>
                <li>• What customer needs are unmet?</li>
                <li>• What partnerships could you form?</li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-orange-600" />
                <h3 className="font-semibold text-orange-800">Threats</h3>
              </div>
              <ul className="space-y-2 text-sm text-orange-700">
                <li>• What new competitors are entering?</li>
                <li>• What technology could disrupt you?</li>
                <li>• What economic factors affect you?</li>
                <li>• What regulations could impact you?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Complete Competitive Analysis Package
          </h2>
          <p className="text-gray-600 mb-8">
            All tools, templates, and frameworks to thoroughly analyze your competition and identify opportunities.
          </p>
          <div className="bg-gray-100 text-gray-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2">
            <Search className="w-5 h-5" />
            Content Coming Soon
          </div>
        </div>
      </section>
    </>
  )
}

export default CompetitorAnalysisPage
