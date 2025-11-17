'use client'

import React, { useState, useRef } from 'react'
import { Play, Pause, ArrowRight, CheckCircle2 } from 'lucide-react'
import LeadModal from '@/components/shared/LeadModal'

const HeroSection = () => {
  const [videoPlaying, setVideoPlaying] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setVideoPlaying(!videoPlaying)
    }
  }

  return (
    <>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Hero Content */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            {/* Outcome-Driven Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6 leading-[1.1]">
              Get More Collision Repairs
              <span className="block text-gray-900 mt-2">From Local Customers</span>
            </h1>

            {/* Supporting Subhead */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              The complete digital system for truck repair shops: Premium websites, hyper-local Google Ads,
              and deep SEO—built exclusively for truck breakdown repair.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all flex items-center space-x-2 group shadow-lg"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#client-examples"
                className="text-gray-700 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors border border-gray-300 hover:border-gray-400"
              >
                See Live Examples
              </a>
            </div>

            {/* Trust Signal */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Trusted by shops in 12 states</span>
              </div>
              <span className="hidden sm:inline text-gray-300">•</span>
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★★★★★</span>
                <span className="font-medium text-gray-900">4.9 average</span>
                <span>across client sites</span>
              </div>
            </div>
          </div>

          {/* Visual Product Proof - Website Demo */}
          <div className="relative max-w-5xl mx-auto">
            {/* Browser mockup */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-500 font-medium">YourBodyShop.com</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500 font-medium">Live Demo</span>
                </div>
              </div>

              <div className="relative aspect-video bg-gray-900">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  poster="https://res.cloudinary.com/ddyiobiae/video/upload/so_0/v1756320375/American_Demo_pzslgf.jpg"
                  preload="metadata"
                >
                  <source src="https://res.cloudinary.com/ddyiobiae/video/upload/v1756320375/American_Demo_pzslgf.mov" type="video/quicktime" />
                  <source src="https://res.cloudinary.com/ddyiobiae/video/upload/f_mp4,q_auto:eco,c_limit,w_1920/v1756320375/American_Demo_pzslgf.mp4" type="video/mp4" />
                  <source src="https://res.cloudinary.com/ddyiobiae/video/upload/f_webm,q_auto:eco,c_limit,w_1920/v1756320375/American_Demo_pzslgf.webm" type="video/webm" />
                </video>

                {/* Play button overlay */}
                <button
                  onClick={toggleVideo}
                  className="absolute top-4 left-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all"
                  aria-label={videoPlaying ? 'Pause video' : 'Play video'}
                >
                  {videoPlaying ?
                    <Pause className="w-4 h-4 text-white" /> :
                    <Play className="w-4 h-4 text-white ml-0.5" />
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="hero-book-demo"
        title="Book Your Demo"
        subtitle="See how we help truck repair shops dominate their local market"
      />
    </>
  )
}

export default HeroSection
