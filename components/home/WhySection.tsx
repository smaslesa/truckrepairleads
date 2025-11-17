'use client'

import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { ArrowRight, Sparkles, Zap, TrendingUp, DollarSign } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

interface LuxuryPromiseProps {
  onModalOpen: () => void
}

const LuxuryPromise: React.FC<LuxuryPromiseProps> = ({ onModalOpen }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {
      
      // Main content reveal timeline
      const contentTl = gsap.timeline({
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      })

      // Dramatic text reveal
      contentTl.fromTo('.power-word', {
        y: 200,
        opacity: 0,
        rotationX: -90
      }, {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out"
      })

      // Promise text fade in
      .fromTo('.promise-text', {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2
      }, "-=0.6")

      // Video container entrance
      .fromTo('.video-showcase', {
        scale: 0.8,
        opacity: 0
      }, {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.4")

      // Counter animations - removed since we're not displaying them
      
      // CTA entrance
      contentTl.fromTo('.luxury-cta', {
        scale: 0.9,
        opacity: 0
      }, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.4)"
      }, "-=0.3")

      // CTA entrance
      .fromTo('.luxury-cta', {
        scale: 0.9,
        opacity: 0
      }, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.4)"
      }, "-=0.3")

      // Continuous shimmer effect on text
      gsap.to('.shimmer-text', {
        backgroundPosition: '200% center',
        duration: 3,
        ease: "none",
        repeat: -1,
      })

      // Floating particles effect
      gsap.to('.floating-particle', {
        y: -100,
        opacity: 0,
        duration: 3,
        stagger: {
          each: 0.2,
          repeat: -1
        },
        ease: "power1.out"
      })

    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <>
      <style jsx>{`
        .shimmer-text {
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

        .text-luxury-gradient {
          background: linear-gradient(180deg, #ffffff 0%, #999999 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .glass-luxury {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .red-glow {
          box-shadow: 
            0 0 30px rgba(239, 68, 68, 0.5),
            0 0 60px rgba(239, 68, 68, 0.3),
            0 0 90px rgba(239, 68, 68, 0.1);
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .pulse-animation {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .video-border {
          background: linear-gradient(45deg, #ef4444, #dc2626, #ef4444);
          padding: 2px;
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="relative min-h-screen bg-black overflow-hidden flex items-center"
      >
        {/* Base gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-red-950/20 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div ref={contentRef} className="relative z-10 container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Bold Promise */}
            <div>
              <div className="mb-12">
                {/* Power statement */}
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-thin uppercase tracking-wider leading-none">
                  <span className="power-word text-luxury-gradient block">More</span>
                  <span className="power-word shimmer-text block">Leads</span>
                  <span className="power-word text-luxury-gradient block">Faster</span>
                </h2>
              </div>

              {/* Promise text */}
              <div className="space-y-6 mb-12">
                <p className="promise-text text-xl md:text-2xl text-white/80 font-light">
                  We don't just generate leads. We engineer a 
                  <span className="text-red-500 font-normal"> complete transformation </span>
                  of your digital presence.
                </p>
                
                <p className="promise-text text-lg text-white/60 font-light leading-relaxed">
                  Your shop becomes the obvious choice. Premium positioning. 
                  Magnetic attraction. Unstoppable growth.
                </p>
              </div>

              {/* CTA */}
              <button 
                onClick={onModalOpen}
                className="luxury-cta group glass-luxury px-10 py-6 rounded-lg flex items-center gap-4 hover:bg-blue-600/20 transition-all duration-300"
              >
                <Sparkles className="w-6 h-6 text-blue-500" />
                <span className="text-white text-lg font-light tracking-wide">
                  CLAIM YOUR TERRITORY
                </span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            {/* Right: Video Showcase */}
            <div className="video-showcase relative">
              {/* Video container with glass border */}
              <div className="video-border rounded-2xl overflow-hidden">
                <div className="relative bg-black rounded-2xl overflow-hidden">
                  <video 
                    ref={videoRef}
                    className="w-full h-full object-cover opacity-80"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    poster="/video-poster.jpg"
                  >
                    <source src="https://res.cloudinary.com/ddyiobiae/video/upload/v1756374769/Generating_Automotive_Repair_Video_ggtib7.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Overlay gradient for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />
                  
                  {/* Bottom accent - same as before */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-red-500 rounded-full pulse-animation" />
                      <p className="text-white/40 text-sm uppercase tracking-widest">
                        Guaranteed Performance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />
            </div>

          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </section>
    </>
  )
}

export default LuxuryPromise