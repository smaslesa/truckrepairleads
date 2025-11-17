'use client'

import React, { useState, useRef } from 'react'
import { Play, Pause, ArrowRight } from 'lucide-react'
import LeadModal from '@/components/shared/LeadModal'

const HeroSectionV2 = () => {
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
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">

          {/* Hero Content */}
          <div className="max-w-5xl mx-auto text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 text-sm bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6 font-medium">
              <span>Trusted by 2,200+ truck repair shops</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6 leading-[1.1]">
              Fill your bays with the
              <span className="block text-gray-900">all-in-one platform</span>
            </h1>

            {/* Subhead - Simpler */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Premium websites, Google Ads, and Local SEO—built exclusively for truck breakdown repair shops.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all flex items-center space-x-2 shadow-lg"
              >
                <span>Get a Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="#examples"
                className="text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                See How It Works
              </a>
            </div>

            {/* Simple Trust Line */}
            <div className="text-gray-600">
              <span className="font-semibold text-gray-900">★★★★★ 4.9</span> average across client sites
            </div>
          </div>

          {/* Visual Product Demo */}
          <div className="relative max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              {/* Browser Chrome */}
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">yourshop.com</div>
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
        source="hero-v2-demo"
        title="Get Your Demo"
        subtitle="See how we help truck repair shops fill their bays"
      />
    </>
  )
}

export default HeroSectionV2
