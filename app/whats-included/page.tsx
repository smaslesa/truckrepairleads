'use client'

import React, { useState } from 'react'
import { 
  Check, 
  Globe, 
  Search, 
  Smartphone, 
  BarChart, 
  Camera, 
  MessageCircle,
  FileText,
  Shield,
  Clock,
  Zap,
  Star,
  Phone,
  ArrowRight,
  Play
} from 'lucide-react'
import LeadModal from '@/components/shared/LeadModal'

export default function WhatsIncludedPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Professional Website Design & Development",
      description: "Custom-built truck repair website optimized for conversions",
      details: [
        "Mobile-responsive design that looks perfect on all devices",
        "Fast-loading pages",
        "Professional branding and color scheme",
        "Contact forms and call-to-action buttons",
        "Before/after photo galleries",
        "Service pages and about section"
      ]
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Complete SEO Optimization",
      description: "Get found on Google for truck repair searches in your area",
      details: [
        "Local SEO setup for your city and surrounding areas",
        "Google My Business optimization",
        "On-page SEO for all service pages",
        "Meta titles, descriptions, and structured data",
        "Local keyword targeting",
        "Google Maps integration"
      ]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Advanced Lead Capture System",
      description: "Turn website visitors into paying customers",
      details: [
        "VIN decoder tool for instant vehicle information",
        "Smart contact forms with auto-follow-up",
        "Text message integration",
        "Estimate request forms",
        "Click-to-call buttons",
        "Live chat widget (optional)"
      ]
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Image & Video Hosting on Cloudinary",
      description: "Professional media management and optimization",
      details: [
        "Unlimited photo storage and hosting",
        "Automatic image compression and optimization",
        "Photo & Video hosting for before/after demonstrations",
        "Fast global CDN delivery",
        "Automatic format conversion (WebP, etc.)"
      ]
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Analytics & Performance Tracking",
      description: "Know exactly how your website is performing",
      details: [
        "Google Analytics 4 setup",
        "Conversion tracking for leads and calls",
        "Monthly performance reports",
        "Traffic source analysis",
        "User behavior insights",
        "ROI measurement tools"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Website Hosting & Security",
      description: "Fast, secure, and reliable website hosting",
      details: [
        "Premium hosting on Vercel platform",
        "SSL certificate included",
        "99.9% uptime guarantee",
        "Automatic backups",
        "Security monitoring",
        "DDoS protection"
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Content Creation & Copywriting",
      description: "Professional content that converts visitors to customers",
      details: [
        "Service page content written for your shop",
        "About page highlighting your expertise",
        "SEO-optimized blog posts",
        "Call-to-action copy that converts",
        "Local area content",
        "Industry-specific messaging"
      ]
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Review Management Integration",
      description: "Build trust with customer reviews and testimonials",
      details: [
        "Google Reviews integration",
        "Review request automation",
        "Testimonial display sections",
        "Star rating displays"
      ]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Setup & Launch",
      description: "Your website goes live fast - not next month",
      details: [
        "Domain setup and configuration",
        "Content migration if needed",
        "Testing across all devices",
        "Search engine submission",
        "Training on how to use your new site",
        "Go-live support and monitoring"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Ongoing Support & Maintenance",
      description: "Continuous improvements and support for your website",
      details: [
        "Monthly website maintenance and updates",
        "Technical support and troubleshooting",
        "Performance optimization and monitoring",
        "Search engine ranking improvements",
        "Lead tracking and reporting",
        "Integration with your existing business tools",
        "Design refreshes and visual updates",
        "Technology upgrades and security patches"
      ]
    }
  ]


  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-gray-900 tracking-tight mb-6">
                Everything included
                <span className="block text-blue-600">for just $500/month</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Your complete digital presence solution. Professional website, SEO, lead capture, 
                hosting, and ongoing support - all in one simple monthly package.
              </p>

              {/* Pricing Card */}
              <div className="inline-block bg-white rounded-2xl border-2 border-gray-900 p-8 shadow-lg mb-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-gray-900 mb-2">$500</div>
                  <div className="text-gray-600 mb-4">per month</div>
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                    <span>✓ No contracts</span>
                    <span>✓ Cancel anytime</span>
                    <span>✓ No setup fees</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all shadow-lg"
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a 
                  href="tel:7029000265"
                  className="inline-flex items-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold border-2 border-gray-300 hover:bg-gray-50 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call (702) 900-0265
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Everything Your Shop Needs to Succeed Online
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                No hidden fees, no surprise costs. Here's exactly what you get with your monthly service.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <div className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>



      </main>

      {/* Lead Modal */}
      <LeadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="whats-included-page"
        title="Get Your Website Started"
        subtitle="Complete lead system for truck repair shops"
      />
    </>
  )
}
