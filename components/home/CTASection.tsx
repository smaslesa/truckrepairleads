'use client'

import React, { useLayoutEffect, useRef, useState } from 'react'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { trackPhoneClick, trackCTAClick } from '@/lib/analytics'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

interface KillerCTAProps {
  onModalOpen: () => void
}

const KillerCTA: React.FC<KillerCTAProps> = ({ onModalOpen }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  // Optimized Cloudinary URL with all performance parameters
  const cloudinaryVideoUrl = "https://res.cloudinary.com/ddyiobiae/video/upload/f_auto,q_auto:eco,c_limit,w_1920,br_3m/v1755891336/shutterstock_3785694253_bxgqe3.mp4"
  
  // Poster image for faster initial load
  const cloudinaryPosterUrl = "https://res.cloudinary.com/ddyiobiae/video/upload/f_auto,q_auto:eco,c_limit,w_1920,so_2/v1755891336/shutterstock_3785694253_bxgqe3.jpg"

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {
      
      // Main reveal animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      })

      // Background fade in - faster
      tl.fromTo('.cta-bg', {
        opacity: 0
      }, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      })

      // Main text reveal - much faster
      .fromTo('.headline-word', {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power3.out"
      }, "-=0.3")

      // Subtitle - faster
      .fromTo('.subtitle-reveal', {
        opacity: 0,
        y: 15
      }, {
        opacity: 1,
        y: 0,
        duration: 0.3
      }, "-=0.2")

      // Guarantee points - faster
      .fromTo('.guarantee-point', {
        x: -10,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 0.25,
        stagger: 0.05
      }, "-=0.1")

      // CTA buttons - faster
      .fromTo('.cta-button', {
        scale: 0.95,
        opacity: 0
      }, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        stagger: 0.05,
        ease: "back.out(1.3)"
      }, "-=0.1")

      // Continuous pulse on main CTA
      gsap.to('.pulse-border', {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: "power2.out"
      })

      // Text shimmer
      gsap.to('.shimmer-cta', {
        backgroundPosition: '200% center',
        duration: 3,
        ease: "none",
        repeat: -1
      })

      // Video parallax effect
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        })
      }

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const guarantees = [
    "First leads in 48 hours",
    "Zero contracts required",
    "100% performance based"
  ]

  return (
    <>
      <style jsx>{`
        .shimmer-cta {
          background: linear-gradient(
            90deg,
            #ffffff 0%,
            #ef4444 25%,
            #ffffff 50%,
            #ef4444 75%,
            #ffffff 100%
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 30px rgba(239, 68, 68, 0.5));
        }

        .text-luxury-final {
          background: linear-gradient(180deg, #ffffff 0%, #999999 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .glass-final {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .red-glow-intense {
          box-shadow: 
            0 0 40px rgba(239, 68, 68, 0.8),
            0 0 80px rgba(239, 68, 68, 0.5),
            0 0 120px rgba(239, 68, 68, 0.3),
            inset 0 0 30px rgba(239, 68, 68, 0.2);
        }

        .border-glow {
          position: relative;
          background: linear-gradient(45deg, #ef4444, #dc2626, #ef4444);
          padding: 2px;
          border-radius: 0.75rem;
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .final-vignette {
          background: radial-gradient(
            ellipse at center,
            transparent 0%,
            rgba(0, 0, 0, 0.6) 100%
          );
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="relative min-h-[80vh] bg-black flex items-center overflow-hidden"
      >
        {/* Optimized Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover scale-110"
          autoPlay
          muted
          loop
          playsInline
          poster={cloudinaryPosterUrl}
          preload="metadata"
          style={{ filter: 'brightness(0.6) contrast(1.2) saturate(1.3)' }}
        >
          <source src={cloudinaryVideoUrl} type="video/mp4" />
          {/* WebM fallback for better compression */}
          <source 
            src="https://res.cloudinary.com/ddyiobiae/video/upload/f_webm,q_auto:eco,c_limit,w_1920,br_3m/v1755891336/shutterstock_3785694253_bxgqe3.webm" 
            type="video/webm" 
          />
        </video>

        {/* Background Overlays */}
        <div className="cta-bg absolute inset-0">
          {/* Dark overlay for text readability - reduced opacity */}
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Red gradient overlay - more transparent */}
          <div className="absolute inset-0 bg-gradient-to-t from-red-950/20 via-transparent to-black/40" />
          
          {/* Animated orb - more subtle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[150px] animate-pulse" />
          
          {/* Vignette */}
          <div className="final-vignette absolute inset-0 pointer-events-none" />
        </div>

        {/* Content */}
        <div ref={contentRef} className="relative z-10 container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Main Headline */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-thin uppercase tracking-wider leading-tight mb-8">
              <span className="headline-word block text-luxury-final">Ready to</span>
              <span className="headline-word block shimmer-cta text-6xl md:text-7xl lg:text-8xl">Dominate?</span>
            </h2>

            {/* Subtitle */}
            <p className="subtitle-reveal text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 font-light">
              Your competition won't know what hit them. 
              <span className="text-white font-normal"> Take your territory now.</span>
            </p>

            {/* Guarantee Points */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {guarantees.map((point, index) => (
                <div key={index} className="guarantee-point flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-white text-sm uppercase tracking-wider">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              
              {/* Primary CTA */}
              <div className="cta-button relative">
                <div className="pulse-border absolute inset-0 border-2 border-blue-500 rounded-xl pointer-events-none" />
                <button
                  onClick={() => {
                    trackCTAClick('Free Demo', 'homepage_cta_section', 'primary')
                    onModalOpen()
                  }}
                  onMouseEnter={() => setHoveredButton('primary')}
                  onMouseLeave={() => setHoveredButton(null)}
                  className="border-glow group"
                >
                  <div className={`bg-blue-600/90 backdrop-blur-sm rounded-[0.65rem] px-10 py-6 flex items-center gap-4 transition-all duration-300 ${
                    hoveredButton === 'primary' ? 'bg-blue-700/90' : ''
                  }`}>
                    <span className="text-white text-lg font-medium tracking-wide uppercase">
                      Free Demo
                    </span>
                    <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform" />
                  </div>
                </button>
              </div>

              {/* Secondary CTA */}
              <a
                href="tel:702-900-0265"
                onClick={() => trackPhoneClick('homepage_cta_section')}
                className="cta-button glass-final rounded-xl px-10 py-6 flex items-center gap-3 hover:bg-white/5 transition-all duration-300 group"
                onMouseEnter={() => setHoveredButton('secondary')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <Phone className="w-5 h-5 text-blue-500" />
                <span className="text-white text-lg font-light">
                  (702) 900-0265
                </span>
              </a>
            </div>

          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </section>
    </>
  )
}

export default KillerCTA