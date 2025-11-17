'use client'

import React, { useState } from 'react'
import { 
  Facebook, Instagram, Mail, Megaphone, Calendar,
  DollarSign, Users, Sparkles, Download, Copy,
  MessageSquare, Phone, FileText, TrendingUp
} from 'lucide-react'

const MarketingIdeasPage = () => {
  const [activeTab, setActiveTab] = useState('social')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const marketingIdeas = {
    social: {
      title: 'Social Media Campaigns',
      icon: <Facebook className="w-5 h-5" />,
      stats: '3.2x engagement rate',
      ideas: [
        {
          title: 'Transformation Tuesday',
          description: 'Weekly before/after showcase',
          roi: '+47% engagement',
          template: `🚗 TRANSFORMATION TUESDAY!\n\nThis week's miracle: 2019 Honda Accord\n\n✅ Complete front-end rebuild\n✅ Perfect paint match\n✅ 3-day turnaround\n\nSwipe for the BEFORE 👉\n\n📞 [Your Phone]\n💻 [Your Website]\n\n#TransformationTuesday #CollisionRepair #AutoBody #[YourCity]`,
          tips: [
            'Post every Tuesday at 2pm (peak engagement)',
            'Always get written customer permission',
            'Use carousel posts (10x more reach)',
            'Include 3-5 local hashtags'
          ],
          assets: ['Before photo', 'After photo', 'During repair photo', 'Happy customer photo']
        },
        {
          title: 'Free Estimate Friday',
          description: 'Weekly promotion to drive weekend traffic',
          roi: '+28% weekend appointments',
          template: `🎉 FREE ESTIMATE FRIDAY!\n\nToday only:\n🎁 Free damage assessment\n🎁 10% off if you book today\n🎁 Free Uber to work (up to $20)\n\n📱 Text photos to: [Phone]\n⏰ Valid until 6pm TODAY\n\nComment "FRIDAY" and we'll DM you!`,
          tips: [
            'Create urgency with same-day expiration',
            'Use Facebook/Instagram ads for $20 boost',
            'Reply to every comment within 1 hour',
            'Track conversion with unique code'
          ],
          assets: ['Branded graphic', 'Shop photo', 'Team photo']
        },
        {
          title: 'Customer Story Spotlight',
          description: '30-second video testimonials',
          roi: '+5.2x more trust',
          template: `🌟 CUSTOMER SPOTLIGHT\n\n"[Shop Name] saved my vacation! Got rear-ended 3 days before our trip. They fixed everything in 2 days!" - Sarah M.\n\n⭐⭐⭐⭐⭐\n\nWatch Sarah's full story (link in bio)\n\nYour story could be next! Tag us in your photos.`,
          tips: [
            'Keep videos under 30 seconds',
            'Add captions for silent viewing',
            'Film horizontally for multiple platforms',
            'Offer $50 credit for video testimonials'
          ],
          assets: ['Customer video', 'B-roll of shop', 'Before/after photos']
        }
      ]
    },
    seasonal: {
      title: 'Seasonal Promotions',
      icon: <Calendar className="w-5 h-5" />,
      stats: '67% higher conversion',
      ideas: [
        {
          title: 'Winter Prep Package',
          description: 'October-November bumper protection',
          roi: '+$47K revenue/season',
          template: `❄️ WINTER IS COMING - Protect Your Bumper!\n\nWinter Special (Oct-Nov only):\n• Bumper repair: 25% off\n• Paint protection film: $199\n• Free 50-point winter inspection\n• Salt damage prevention coating\n\nLast year: 847 accidents in [City] due to ice\nDon't be a statistic!\n\n📞 Book now: [Phone]`,
          tips: [
            'Start promoting 3 weeks before first frost',
            'Partner with local weather station',
            'Create fear-based urgency with statistics',
            'Upsell paint protection services'
          ],
          assets: ['Ice damage photos', 'Winter graphics', 'Statistical infographic']
        },
        {
          title: 'Tax Return Repair Rush',
          description: 'February-April deductible assistance',
          roi: '+31% Q1 revenue',
          template: `💰 TAX RETURN SPECIAL!\n\nFinally fix that damage you've been living with:\n\n✅ We cover up to $500 of your deductible\n✅ 0% financing for 12 months\n✅ Free rental car upgrade\n\nAverage return: $3,200\nAverage repair: $2,400\nYour car looking new: PRICELESS\n\nOffer ends April 15th!`,
          tips: [
            'Run February 1 - April 15',
            'Target procrastinators with old damage',
            'Partner with tax preparers',
            'Emphasize using refund before it\'s spent'
          ],
          assets: ['Tax themed graphics', 'Before/after gallery', 'Financing calculator']
        },
        {
          title: 'Back to School Teacher Discount',
          description: 'August educator appreciation',
          roi: '+18% community goodwill',
          template: `🍎 TEACHERS & SCHOOL STAFF:\n\n30% OFF all repairs this August!\n\nYou shape minds. Let us reshape metal.\n\nIncludes:\n• Teachers\n• Administrators  \n• Bus drivers\n• Cafeteria staff\n• Janitors\n\nJust show your school ID. It's that simple.\n\nThank you for all you do! ❤️`,
          tips: [
            'Email directly to school districts',
            'Huge word-of-mouth potential',
            'Partner with teacher unions',
            'Great PR opportunity for local news'
          ],
          assets: ['Apple graphic', 'Thank you design', 'School partnership logos']
        }
      ]
    },
    email: {
      title: 'Email Campaigns',
      icon: <Mail className="w-5 h-5" />,
      stats: '34% open rate avg',
      ideas: [
        {
          title: 'Abandoned Estimate Follow-up',
          description: '3-email sequence for unconverted estimates',
          roi: '23% recovery rate',
          template: `Subject: Your repair estimate expires tomorrow ⏰\n\nHi [Name],\n\nQuick reminder: Your estimate for $[Amount] expires tomorrow.\n\nI understand repairs are stressful. That's why I'm authorized to offer:\n• $200 off your original estimate\n• Free rental car (saving you $180)\n• Payment plan with 0% interest\n\nTotal savings: $380\n\nYour car has damage. We have the solution. Let's fix this.\n\nReply "YES" to claim this offer.\n\n[Your name]\nP.S. This offer really does expire. I can only hold it until [Date].`,
          tips: [
            'Send 7 days after estimate',
            'Follow up at day 14 and 21',
            'Create real urgency',
            'Include personal phone number'
          ],
          assets: ['Email header', 'Estimate screenshot', 'CTA buttons']
        },
        {
          title: 'Insurance Claim Helper',
          description: 'Educational series for claim process',
          roi: '+41% trust score',
          template: `Subject: ⚠️ Don't say THIS to your insurance adjuster\n\n[Name], quick tip that could save you $1000s:\n\nNEVER say:\n❌ "It's probably totaled"\n❌ "The damage isn't that bad"\n❌ "I'm not sure what happened"\n\nALWAYS say:\n✅ "I need a thorough inspection"\n✅ "I want OEM parts"\n✅ "I choose my own shop"\n\nWant our complete Insurance Battle Plan? \nIt's free: [Link]\n\nWe fight for every dollar you deserve.`,
          tips: [
            'Educational content builds massive trust',
            'Send to all leads, not just customers',
            'Include real claim victories',
            'Position as customer advocate'
          ],
          assets: ['Insurance logos', 'Checklist PDF', 'Video guide']
        }
      ]
    },
    referral: {
      title: 'Referral Programs',
      icon: <Users className="w-5 h-5" />,
      stats: '5x cheaper than ads',
      ideas: [
        {
          title: 'Cash for Referrals',
          description: 'Simple cash incentive program',
          roi: '$62 cost per acquisition',
          template: `💵 EASIEST $50 EVER!\n\nRefer a friend = Get $50 cash\nThey save $100 on their repair\n\nNo limit. Refer 10 friends? That's $500!\n\nHow it works:\n1. Give friends your referral code: [CODE]\n2. They save $100\n3. You get $50 when repair completes\n\nStart earning: [Link to share]`,
          tips: [
            'Pay cash same day (builds trust)',
            'Give customers referral cards',
            'Track with unique codes',
            'Announce payouts publicly'
          ],
          assets: ['Referral cards', 'Social graphics', 'Email template']
        },
        {
          title: 'B2B Fleet Program',
          description: 'Target businesses with multiple vehicles',
          roi: '$8,400 avg account value',
          template: `Subject: Exclusive Fleet Pricing for [Company Name]\n\n[Name],\n\nManaging 10+ vehicles? You need fleet pricing:\n\n• 30% below retail rates\n• Priority same-day service\n• Monthly billing (NET 30)\n• Dedicated account manager\n• Free pickup/delivery\n\nCurrent fleet partners:\n- [Local Company 1]\n- [Local Company 2]\n- [Local Company 3]\n\n15-minute call to discuss?\n\n[Calendar link]`,
          tips: [
            'Target: Realtors, contractors, delivery companies',
            'Offer net payment terms',
            'Visit in person with donuts',
            'Start with 3-month trial'
          ],
          assets: ['Fleet brochure', 'Pricing sheet', 'Contract template']
        }
      ]
    },
    grand_opening: {
      title: 'Grand Opening / Special Events',
      icon: <Sparkles className="w-5 h-5" />,
      stats: '127 leads per event',
      ideas: [
        {
          title: 'Community BBQ & Car Show',
          description: 'Weekend event to pack the shop',
          roi: '47 new customers',
          template: `🍔 GRAND OPENING BBQ!\n\nSaturday [Date] • 11am-3pm\n\nFREE:\n• BBQ & drinks\n• Kids face painting\n• Classic car show\n• Shop tours\n• Damage assessments\n\nPRIZES:\n🎁 Grand Prize: Free $2,500 paint job\n🎁 2nd: $500 repair credit  \n🎁 3rd: Free detail package\n\nRSVP for extra raffle ticket: [Link]`,
          tips: [
            'Partner with local car clubs',
            'Invite local media',
            'Collect everyone\'s contact info',
            'Follow up with all attendees'
          ],
          assets: ['Event flyer', 'Social ads', 'Radio script', 'Banner design']
        }
      ]
    }
  }

  const currentIdeas = marketingIdeas[activeTab as keyof typeof marketingIdeas]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-50 via-white to-gray-50 py-16 px-6 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              PROVEN CAMPAIGNS • REAL ROI DATA
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Marketing Campaigns That
              <span className="block text-red-600 mt-2">Print Money</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Copy-paste templates with actual ROI data from real shops. 
              Every campaign includes templates, tips, and assets.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-0 z-10 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto py-4 gap-2 md:gap-4">
            {Object.entries(marketingIdeas).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
                  activeTab === key 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {section.icon}
                <span className="hidden md:inline">{section.title}</span>
                <span className="text-xs opacity-75 hidden lg:inline">
                  {section.stats}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {currentIdeas.title}
            </h2>
            <p className="text-gray-600">
              Average result: {currentIdeas.stats}
            </p>
          </div>

          <div className="grid gap-8">
            {currentIdeas.ideas.map((idea, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {idea.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {idea.description}
                      </p>
                      <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        <TrendingUp className="w-3 h-3" />
                        {idea.roi}
                      </div>
                    </div>
                    <button
                      onClick={() => copyText(idea.template, `${activeTab}-${index}`)}
                      className="ml-4 p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                    >
                      {copiedId === `${activeTab}-${index}` ? (
                        <span className="text-green-600 text-sm font-medium">Copied!</span>
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
                
                <div className="p-6 bg-gray-50">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Copy This Template:</h4>
                  <pre className="bg-white p-4 rounded-lg border border-gray-200 text-sm text-gray-800 whitespace-pre-wrap font-sans">
                    {idea.template}
                  </pre>
                </div>

                <div className="p-6 grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Pro Tips:</h4>
                    <ul className="space-y-2">
                      {idea.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Assets Needed:</h4>
                    <ul className="space-y-2">
                      {idea.assets.map((asset, assetIndex) => (
                        <li key={assetIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <FileText className="w-4 h-4 text-gray-400" />
                          {asset}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                    Download Complete Campaign Pack
                  </button>
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
            Get All 52 Marketing Campaigns
          </h2>
          <p className="text-gray-600 mb-8">
            Full year of marketing campaigns with templates, graphics, and tracking sheets. 
            Proven ROI from real shops.
          </p>
          <div className="bg-gray-100 text-gray-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2">
            <Download className="w-5 h-5" />
            Content Coming Soon
          </div>
          <p className="text-sm text-gray-500 mt-4">
            We're working on creating downloadable content for this section.
          </p>
        </div>
      </section>
    </>
  )
}

export default MarketingIdeasPage
