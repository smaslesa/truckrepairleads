'use client'

import React, { useState } from 'react'
import { Calendar, Download, TrendingUp, Target, Megaphone, Gift, Zap, Star } from 'lucide-react'

const CampaignsPage = () => {
  const [selectedMonth, setSelectedMonth] = useState('january')

  const campaigns = {
    january: {
      theme: 'New Year, New Car',
      campaigns: [
        {
          title: 'Resolution Repair',
          description: 'Finally fix that damage you\'ve been ignoring',
          dates: 'Jan 1-31',
          roi: '+34% bookings',
          hook: 'New Year, Fresh Start, Perfect Car'
        },
        {
          title: 'Insurance Deductible Relief',
          description: 'We pay half your deductible in January',
          dates: 'Jan 15-31',
          roi: '+67% conversions',
          hook: 'Cut Your Deductible in Half!'
        }
      ]
    },
    february: {
      theme: 'Love Your Car Month',
      campaigns: [
        {
          title: 'Valentine\'s Car Care',
          description: 'Show your car some love with professional repair',
          dates: 'Feb 1-14',
          roi: '+23% female customers',
          hook: 'Love Your Car Like You Love Your Valentine'
        },
        {
          title: 'Tax Refund Repair Rush',
          description: 'Use your refund for repairs',
          dates: 'Feb 15-28',
          roi: '+89% revenue',
          hook: 'Refund = Repair Time!'
        }
      ]
    },
    march: {
      theme: 'Spring Cleaning',
      campaigns: [
        {
          title: 'Spring Prep Special',
          description: 'Get ready for spring driving season',
          dates: 'Mar 1-31',
          roi: '+45% bookings',
          hook: 'Spring Into Action - Fix Your Car!'
        },
        {
          title: 'March Madness Pricing',
          description: 'Bracket-style progressive discounts',
          dates: 'Mar 15-31',
          roi: '+78% engagement',
          hook: 'The Only March Madness That Saves Money'
        }
      ]
    },
    april: {
      theme: 'April Showers Prep',
      campaigns: [
        {
          title: 'Rain Ready Repairs',
          description: 'Fix rust and water damage before it spreads',
          dates: 'Apr 1-30',
          roi: '+56% rust repairs',
          hook: 'Don\'t Let April Showers Ruin Your Car'
        },
        {
          title: 'Spring Break Recovery',
          description: 'Post-vacation damage repair',
          dates: 'Apr 15-30',
          roi: '+34% road trip damage',
          hook: 'We Fix Spring Break Mistakes'
        }
      ]
    },
    may: {
      theme: 'Graduation & Mother\'s Day',
      campaigns: [
        {
          title: 'Grad Gift Repairs',
          description: 'Fix mom\'s car as a Mother\'s Day gift',
          dates: 'May 1-15',
          roi: '+67% gift certificates',
          hook: 'The Gift That Keeps On Driving'
        },
        {
          title: 'Summer Prep Package',
          description: 'Get ready for summer road trips',
          dates: 'May 15-31',
          roi: '+43% package deals',
          hook: 'Summer-Ready in 7 Days'
        }
      ]
    },
    june: {
      theme: 'Wedding & Graduation Season',
      campaigns: [
        {
          title: 'Wedding Car Perfection',
          description: 'Perfect car for your perfect day',
          dates: 'Jun 1-30',
          roi: '+89% luxury repairs',
          hook: 'Perfect Day Deserves Perfect Car'
        },
        {
          title: 'Father\'s Day Fix',
          description: 'Let dad\'s car look as good as he does',
          dates: 'Jun 15-30',
          roi: '+56% male customers',
          hook: 'Dad\'s Car, Dad\'s Pride'
        }
      ]
    },
    july: {
      theme: 'Independence & Vacation',
      campaigns: [
        {
          title: 'Independence From Car Problems',
          description: '4th of July freedom from vehicle issues',
          dates: 'Jul 1-7',
          roi: '+78% patriotic appeal',
          hook: 'Declare Independence From Car Problems!'
        },
        {
          title: 'Road Trip SOS',
          description: 'Emergency vacation vehicle prep',
          dates: 'Jul 8-31',
          roi: '+45% rush jobs',
          hook: 'Vacation Saved in 24 Hours'
        }
      ]
    },
    august: {
      theme: 'Back to School',
      campaigns: [
        {
          title: 'Student Car Safety',
          description: 'Safe, reliable cars for college students',
          dates: 'Aug 1-31',
          roi: '+67% parent bookings',
          hook: 'Safe Car = Peace of Mind'
        },
        {
          title: 'Teacher Appreciation',
          description: 'Special rates for educators',
          dates: 'Aug 15-31',
          roi: '+34% teacher discounts',
          hook: 'We Appreciate Our Teachers'
        }
      ]
    },
    september: {
      theme: 'Fall Preparation',
      campaigns: [
        {
          title: 'Fall Weather Prep',
          description: 'Prepare for changing weather conditions',
          dates: 'Sep 1-30',
          roi: '+56% seasonal prep',
          hook: 'Fall-Ready in 3 Days'
        },
        {
          title: 'Homecoming Special',
          description: 'Look good for homecoming events',
          dates: 'Sep 15-30',
          roi: '+43% young adults',
          hook: 'Homecoming Worthy'
        }
      ]
    },
    october: {
      theme: 'Halloween & Harvest',
      campaigns: [
        {
          title: 'Spooky Good Deals',
          description: 'Halloween-themed repair promotions',
          dates: 'Oct 1-31',
          roi: '+78% social engagement',
          hook: 'Scary Good Prices!'
        },
        {
          title: 'Winter Prep Warning',
          description: 'Last chance before winter weather',
          dates: 'Oct 15-31',
          roi: '+89% urgency bookings',
          hook: 'Last Call Before Winter!'
        }
      ]
    },
    november: {
      theme: 'Thanksgiving & Gratitude',
      campaigns: [
        {
          title: 'Thankful for Safe Travel',
          description: 'Thanksgiving road trip preparation',
          dates: 'Nov 1-25',
          roi: '+67% family travel',
          hook: 'Thankful for Safe Journeys'
        },
        {
          title: 'Black Friday Car Deals',
          description: 'Biggest savings of the year',
          dates: 'Nov 26-30',
          roi: '+156% weekend bookings',
          hook: 'Black Friday = Green Savings'
        }
      ]
    },
    december: {
      theme: 'Holiday & Year-End',
      campaigns: [
        {
          title: 'Holiday Travel Ready',
          description: 'Perfect car for holiday visits',
          dates: 'Dec 1-20',
          roi: '+78% holiday prep',
          hook: 'Holiday Ready, Family Proud'
        },
        {
          title: 'Year-End Tax Write-Off',
          description: 'Business vehicle repairs before year-end',
          dates: 'Dec 15-31',
          roi: '+89% business customers',
          hook: 'Tax Write-Off Time!'
        }
      ]
    }
  }

  const months = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'
  ]

  const currentCampaigns = campaigns[selectedMonth as keyof typeof campaigns]

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-6 border-b">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            52-WEEK CAMPAIGN CALENDAR
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Year-Round Marketing Calendar
            <span className="block text-blue-600">Never Run Out of Campaign Ideas</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            52 weeks of ready-to-run marketing campaigns. Each month includes themed promotions, proven copy, and real ROI data.
          </p>
        </div>
      </section>

      <section className="py-8 px-6 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
            {months.map((month) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                className={`p-3 text-sm font-medium rounded-lg transition-all ${
                  selectedMonth === month
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {month.charAt(0).toUpperCase() + month.slice(1, 3)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {selectedMonth.charAt(0).toUpperCase() + selectedMonth.slice(1)} Campaigns
            </h2>
            <p className="text-gray-600 text-lg">
              Theme: {currentCampaigns.theme}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {currentCampaigns.campaigns.map((campaign, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{campaign.title}</h3>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
                      {campaign.dates}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{campaign.description}</p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Megaphone className="w-4 h-4 text-blue-600" />
                      <span className="font-medium text-blue-900">Campaign Hook:</span>
                    </div>
                    <p className="text-blue-800 font-medium">"{campaign.hook}"</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-green-600 font-medium">{campaign.roi}</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition-colors">
                      Download Campaign
                    </button>
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
              What's Included in Each Campaign
            </h2>
            <p className="text-gray-600">
              Everything you need to run successful campaigns month after month
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <Target className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Marketing Copy</h3>
              <p className="text-sm text-gray-600">Proven headlines, email subject lines, and social media posts</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <Zap className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Graphics & Assets</h3>
              <p className="text-sm text-gray-600">Professional graphics, social media templates, and print materials</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <Gift className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Promotion Ideas</h3>
              <p className="text-sm text-gray-600">Discount structures, packages, and special offers that convert</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <Star className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Success Metrics</h3>
              <p className="text-sm text-gray-600">ROI data from real shops and tracking templates</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Download Complete Marketing Calendar
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            All 52 campaigns with copy, graphics, and tracking sheets. Never wonder what to promote again.
          </p>
          <div className="bg-blue-100 text-blue-700 px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2">
            <Download className="w-5 h-5" />
            Content Coming Soon
          </div>
          <p className="text-sm text-blue-200 mt-4">
            We're working on creating downloadable campaign materials.
          </p>
        </div>
      </section>
    </>
  )
}

export default CampaignsPage
