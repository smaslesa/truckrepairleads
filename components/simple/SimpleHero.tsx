'use client'

import React, { useState, useRef, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { Play, Pause, ArrowRight, Zap, ArrowLeftRight, Sparkles, FileText, Phone, Check } from 'lucide-react'
import LeadModal from '@/components/shared/LeadModal'

const ClayHero = () => {
  const [videoPlaying, setVideoPlaying] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const dragStartX = useRef<number>(0)
  const startPosition = useRef<number>(50)
  
  // Text animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const testimonialSection = document.querySelector('.animated-text')
      if (testimonialSection) {
        const rect = testimonialSection.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const elementTop = rect.top
        
        // Start animation when element is 70% visible
        if (elementTop < windowHeight * 0.7) {
          document.querySelectorAll('.animated-text').forEach(el => {
            el.classList.add('filled')
          })
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  // Mouse handlers for desktop
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    setHasInteracted(true)
    dragStartX.current = e.clientX
    startPosition.current = sliderPosition
  }, [sliderPosition])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return
    e.preventDefault()
    
    const rect = sliderRef.current.getBoundingClientRect()
    const deltaX = e.clientX - dragStartX.current
    const percentChange = (deltaX / rect.width) * 100
    const newPosition = Math.max(0, Math.min(100, startPosition.current + percentChange))
    setSliderPosition(newPosition)
  }, [isDragging])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Touch handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setHasInteracted(true)
    const touch = e.touches[0]
    dragStartX.current = touch.clientX
    startPosition.current = sliderPosition
  }, [sliderPosition])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!sliderRef.current) return
    e.preventDefault()
    
    const touch = e.touches[0]
    const rect = sliderRef.current.getBoundingClientRect()
    const deltaX = touch.clientX - dragStartX.current
    const percentChange = (deltaX / rect.width) * 100
    const newPosition = Math.max(0, Math.min(100, startPosition.current + percentChange))
    setSliderPosition(newPosition)
  }, [])

  // Sample transformation
  const transformation = {
    title: "Total Front-End Reconstruction",
    duration: "72 Hours",
    value: "$15,750",
    before: "https://res.cloudinary.com/ddyiobiae/image/upload/f_auto,q_auto:best,c_limit,w_1920/v1756099041/first-wrecked-car_kliht3.jpg",
    after: "https://res.cloudinary.com/ddyiobiae/image/upload/f_auto,q_auto:best,c_limit,w_1920/v1756099847/first-fixed-car_mm2odl.jpg"
  }

  return (
    <>
      <style jsx>{`
        .slider-handle {
          cursor: ew-resize;
          touch-action: none;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
        }
        .no-select {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}</style>

      {/* HERO - Motive Style Product Focus */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Centered content */}
          <div className="text-center mb-16">
            {/* Motive-style messaging */}
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-gray-900 tracking-tight mb-8 leading-none">
              Get More Cars
              <span className="block text-gray-500">in Your Shop.</span>
            </h1>
            
            {/* Subhead - Motive style */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-600 mb-12 leading-tight">
              Smarter
              <span className="text-gray-900"> and </span>
              <span className="text-blue-600">faster</span>
              <span className="block text-gray-900 mt-2">truck repair shop websites.</span>
            </h2>
            
            
            {/* Clean CTAs - Motive style */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center space-x-2 group shadow-lg"
              >
                <span>Schedule a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="https://www.advanceautobodysfs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 px-8 py-4 rounded-lg font-medium transition-colors border border-gray-200 hover:border-gray-300"
              >
                View Live Site
              </a>
            </div>
          </div>

          {/* Website Showcase - Show Your Actual Product */}
          <div className="relative">
            {/* Browser mockup showing your American demo */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 max-w-5xl mx-auto">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-500">AmericanMuscleCollision.com</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500">Live Demo</span>
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

      {/* TESTIMONIAL SECTION - Motive Style with Animation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8">
            <span className="text-gray-300">"</span>
            <span className="animated-text text-gray-300" data-text="The websites that actually">The websites that actually</span>
            <span className="block animated-text text-gray-300 mt-2" data-text="fill your bays.">fill your bays.</span>
            <span className="text-gray-300">"</span>
          </blockquote>
        </div>
      </section>

      <style jsx>{`
        .animated-text {
          background: linear-gradient(90deg, #1f2937 0%, #1f2937 var(--progress, 0%), #d1d5db var(--progress, 0%), #d1d5db 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: --progress 0.3s ease;
        }
        
        .animated-text.filled {
          --progress: 100%;
        }
        
        @supports not (background-clip: text) {
          .animated-text {
            color: #1f2937;
          }
        }
      `}</style>

      {/* BEFORE/AFTER SHOWCASE - Interactive Demo */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span>See it in action</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Try the before/after slider yourself
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This is exactly what your customers will experience on your new website
            </p>
          </div>

          {/* Before/After Slider */}
          <div className="max-w-4xl mx-auto">
            <div 
              ref={sliderRef}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden no-select shadow-xl border border-gray-200"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Bottom Layer) */}
              <div className="absolute inset-0">
                <img 
                  src={transformation.after} 
                  alt="After repair"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>

              {/* Before Image (Top Layer with Clip) */}
              <div 
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img 
                  src={transformation.before} 
                  alt="Before repair"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>

              {/* Slider Line and Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white slider-handle shadow-xl"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-gray-200">
                  <ArrowLeftRight className="w-5 h-5 text-gray-700" />
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4">
                <div className={`bg-black/70 backdrop-blur px-3 py-2 rounded-lg ${sliderPosition > 80 ? 'opacity-100' : 'opacity-60'} transition-opacity`}>
                  <span className="text-white text-xs md:text-sm font-semibold uppercase tracking-wider">Before</span>
                </div>
              </div>
              
              <div className="absolute top-4 right-4">
                <div className={`bg-black/70 backdrop-blur px-3 py-2 rounded-lg ${sliderPosition < 20 ? 'opacity-100' : 'opacity-60'} transition-opacity`}>
                  <span className="text-white text-xs md:text-sm font-semibold uppercase tracking-wider">After</span>
                </div>
              </div>

              {/* Helper text */}
              {!hasInteracted && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur px-4 py-2 rounded-full animate-pulse">
                  <span className="text-white text-xs flex items-center gap-2">
                    <ArrowLeftRight className="w-4 h-4" />
                    Drag to compare
                  </span>
                </div>
              )}
            </div>

            {/* Info below slider */}
            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{transformation.title}</h3>
              <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                <span>Completed in {transformation.duration}</span>
                <span>•</span>
                <span>Repair value: {transformation.value}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Modal */}
      <LeadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="hero-get-started"
        title="Get Your Demo"
        subtitle="Professional websites that generate real leads"
      />
    </>
  )
}

export default ClayHero