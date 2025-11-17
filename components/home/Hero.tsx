'use client'

import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { ArrowRight, Phone, ChevronDown, Truck } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { trackPhoneClick, trackCTAClick } from '@/lib/analytics'
import LeadModal from '@/components/shared/LeadModal'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

const TruckRepairHero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const component = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Fade in when ready
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useLayoutEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return

    // Create GSAP context for cleanup
    const ctx = gsap.context(() => {
      
      // Set initial states to prevent flash
      gsap.set(['.headline-word', '.subline', '.cta-button', '.trust-signal', '.scroll-indicator'], {
        opacity: 0
      })
      
      // Create main timeline
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 0.75  // Reduced from 1 to 0.75 (25% faster)
        },
        delay: 0.15  // Reduced from 0.2 to 0.15 for faster start
      })
      
      // Animate headline
      tl.fromTo('.headline-word', {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        stagger: 0.15,  // Reduced from 0.2 to 0.15 (25% faster)
        duration: 0.6,   // Reduced from 0.8 to 0.6 (25% faster)
        ease: "back.out(1.7)"
      })
      
      // Animate subline
      .fromTo('.subline', {
        y: 30,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.45  // Reduced from 0.6 to 0.45 (25% faster)
      }, "-=0.3")
      
      // Animate buttons
      .fromTo('.cta-button', {
        scale: 0.9,
        opacity: 0
      }, {
        scale: 1,
        opacity: 1,
        stagger: 0.075,  // Reduced from 0.1 to 0.075 (25% faster)
        duration: 0.375,  // Reduced from 0.5 to 0.375 (25% faster)
        clearProps: "scale"
      }, "-=0.2")
      
      // Animate trust signals
      .fromTo('.trust-signal', {
        y: 20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        stagger: 0.04,  // Reduced from 0.05 to 0.04 (20% faster)
        duration: 0.3    // Reduced from 0.4 to 0.3 (25% faster)
      }, "-=0.15")
      
      // Animate scroll indicator
      .fromTo('.scroll-indicator', {
        y: 20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.3  // Reduced from 0.4 to 0.3 (25% faster)
      })

      // Add shimmer effect
      gsap.to('.text-shimmer', {
        backgroundPosition: '200% center',
        duration: 3,
        ease: "none",
        repeat: -1,
      })

      // Video parallax effect
      gsap.to(videoRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: component.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      })

      // Magnetic button effect
      const buttons = component.current?.querySelectorAll('.magnetic-btn')
      
      if (buttons) {
        buttons.forEach(btn => {
          btn.addEventListener('mouseenter', () => {
            gsap.to(btn, { scale: 1.05, duration: 0.3 })
          })
          
          btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { scale: 1, x: 0, y: 0, duration: 0.3 })
          })
          
          btn.addEventListener('mousemove', (e: Event) => {
            const mouseEvent = e as MouseEvent
            const rect = btn.getBoundingClientRect()
            const x = mouseEvent.clientX - rect.left - rect.width / 2
            const y = mouseEvent.clientY - rect.top - rect.height / 2
            
            gsap.to(btn, {
              x: x * 0.3,
              y: y * 0.3,
              duration: 0.3
            })
          })
        })
      }

    }, component)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <style jsx>{`
        .text-shimmer {
          background: linear-gradient(
            90deg,
            #3b82f6 0%,
            #ffffff 25%,
            #3b82f6 50%,
            #ffffff 75%,
            #3b82f6 100%
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.3));
        }

        .vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at center,
            transparent 0%,
            transparent 40%,
            rgba(0, 0, 0, 0.4) 100%
          );
          pointer-events: none;
          z-index: 2;
        }

        .headline-gradient {
          background: linear-gradient(180deg, #ffffff 0%, #999999 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .noise-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.02;
          z-index: 1;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E");
          mix-blend-mode: overlay;
        }
      `}</style>

      <section 
        ref={component}
        className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-black transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover scale-110"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/truck-repair-hero.jpg"
          style={{ filter: 'brightness(0.7)' }}
        >
          <source src="/videos/truck-repair-hero.mp4" type="video/mp4" />
        </video>

        {/* Vignette Effect */}
        <div className="vignette" />

        {/* Noise Overlay */}
        <div className="noise-overlay" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            
            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-wider text-white mb-8 uppercase leading-none">
              <span className="headline-word headline-gradient block">Marketing</span>
              <span className="headline-word text-shimmer block">Dominance</span>
            </h1>
            
            {/* Subline */}
            <p className="subline text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-light tracking-wide">
              Digital marketing for truck repair shops. Get more leads, more customers, more revenue.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button
                onClick={() => {
                  trackCTAClick('GET MORE TRUCK REPAIR LEADS', 'homepage_hero', 'primary')
                  setIsModalOpen(true)
                }}
                className="cta-button magnetic-btn group bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-lg text-lg font-medium tracking-wide flex items-center justify-center gap-3"
              >
                GET MORE TRUCK REPAIR LEADS
                <Truck className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:702-900-0265"
                onClick={() => trackPhoneClick('homepage_hero')}
                className="cta-button magnetic-btn border-2 border-white/80 text-white hover:bg-white hover:text-black px-10 py-5 rounded-lg text-lg font-medium tracking-wide flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                (702) 900-0265
              </a>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-8 text-white/60 text-sm uppercase tracking-wider">
              <span className="trust-signal flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                More Leads
              </span>
              <span className="trust-signal flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Proven ROI
              </span>
              <span className="trust-signal flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Truck Shop Experts
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => {
            document.querySelector('#car-showcase')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </div>
        </button>
      </section>

      {/* Lead Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="homepage-hero"
        title="Get More Truck Repair Leads"
        subtitle="See how we help truck shops dominate local search"
      />
    </>
  )
}

export default TruckRepairHero