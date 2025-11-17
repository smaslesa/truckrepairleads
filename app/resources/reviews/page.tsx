'use client'

import React, { useState } from 'react'
import { Star, MessageSquare, Mail, Share2, Shield, TrendingUp } from 'lucide-react'

const ReviewsPage = () => {
  const [activeTab, setActiveTab] = useState('requests')

  const reviewTools = {
    requests: {
      title: 'Review Request Templates',
      icon: <Star className="w-5 h-5" />,
      tools: [
        {
          title: 'Post-Repair Email Sequence',
          description: '3-email follow-up to get reviews',
          stats: '73% review rate',
          preview: 'Hi [Name], your [Vehicle] repair is complete! We hope you\'re thrilled with the results...'
        },
        {
          title: 'Text Message Templates',
          description: 'Simple SMS review requests',
          stats: '45% response rate',
          preview: 'Hi [Name]! Thanks for choosing us. Quick favor - could you leave a review? [Link]'
        },
        {
          title: 'Review Card Handouts',
          description: 'Physical cards with QR codes',
          stats: '23% scan rate',
          preview: 'Print-ready cards with direct links to review platforms'
        }
      ]
    },
    responses: {
      title: 'Review Response Templates',
      icon: <MessageSquare className="w-5 h-5" />,
      tools: [
        {
          title: '5-Star Response Templates',
          description: 'Professional thank you responses',
          stats: '15 templates',
          preview: 'Thank you [Name]! We\'re thrilled you had a great experience...'
        },
        {
          title: '1-3 Star Damage Control',
          description: 'Turn negatives into positives',
          stats: '67% recovery rate',
          preview: 'We sincerely apologize for not meeting expectations. We\'d love to make this right...'
        },
        {
          title: 'Generic Issue Responses',
          description: 'Common complaint templates',
          stats: '12 scenarios',
          preview: 'Templates for pricing, timing, communication issues'
        }
      ]
    },
    automation: {
      title: 'Review Automation',
      icon: <Share2 className="w-5 h-5" />,
      tools: [
        {
          title: 'Google My Business Setup',
          description: 'Complete optimization guide',
          stats: '47% more reviews',
          preview: 'Step-by-step guide to dominate local search'
        },
        {
          title: 'Multi-Platform Strategy',
          description: 'Google, Yelp, Facebook coordination',
          stats: '8 platforms',
          preview: 'Coordinate reviews across all major platforms'
        },
        {
          title: 'Review Monitoring Alerts',
          description: 'Get notified instantly',
          stats: '24/7 monitoring',
          preview: 'Never miss a review - respond within hours'
        }
      ]
    }
  }

  const currentTools = reviewTools[activeTab as keyof typeof reviewTools]

  return (
    <>
      <section className="bg-gradient-to-br from-yellow-50 to-white py-16 px-6 border-b">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            REVIEW MASTERY SYSTEM
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get More 5-Star Reviews
            <span className="block text-yellow-600">Handle Bad Ones Like a Pro</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete review management system. Get more positive reviews, respond professionally to all feedback, and protect your reputation.
          </p>
        </div>
      </section>

      <section className="sticky top-0 z-10 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto py-4 gap-2">
            {Object.entries(reviewTools).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
                  activeTab === key
                    ? 'bg-yellow-600 text-white'
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
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.title}</h3>
                <p className="text-gray-600 mb-3">{tool.description}</p>
                <div className="text-sm font-medium text-yellow-600 mb-4">
                  {tool.stats}
                </div>
                <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 mb-4 italic">
                  "{tool.preview}"
                </div>
                <button className="w-full bg-yellow-600 text-white py-2 rounded font-medium hover:bg-yellow-700 transition-colors">
                  Download Template
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-yellow-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Review Response Examples
            </h2>
            <p className="text-gray-600">
              See how to respond to different types of reviews professionally
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">5-Star Review Response</span>
              </div>
              <p className="text-gray-800 mb-3">
                "Amazing work! My car looks better than new. The team was professional and kept me updated throughout the process."
              </p>
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Your Response:</strong> "Thank you so much, Sarah! We're thrilled you're happy with your vehicle. Comments like yours make our day and remind us why we love what we do. We appreciate you trusting us with your repair!"
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(2)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gray-300" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">2-Star Review Response</span>
              </div>
              <p className="text-gray-800 mb-3">
                "Repair took longer than promised and communication was poor. Had to call multiple times for updates."
              </p>
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Your Response:</strong> "We sincerely apologize for the delays and poor communication, Mike. This doesn't reflect our usual standards. I'd love to discuss this directly and see how we can make it right. Please call me at [phone] - we value your feedback and want to improve."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ReviewsPage
