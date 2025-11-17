'use client'

import React, { useLayoutEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

interface MarketDominationProps {
  onModalOpen: () => void
}

const MarketDomination: React.FC<MarketDominationProps> = ({ onModalOpen }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {
      
      // Clean reveal - 50% faster
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      })

      // Fade in background - 50% faster
      tl.fromTo('.section-bg', {
        opacity: 0
      }, {
        opacity: 1,
        duration: 0.75,  // Was 1.5
        ease: "power2.out"
      })

      // Text reveal - 50% faster
      .fromTo('.reveal-text', {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.6,   // Was 1.2
        stagger: 0.075,  // Was 0.15
        ease: "power3.out"
      }, "-=0.5")  // Was -1

      // Stats fade in - 50% faster
      .fromTo('.stat-block', {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.4,   // Was 0.8
        stagger: 0.05,   // Was 0.1
        ease: "power2.out"
      }, "-=0.25")  // Was -0.5

      // CTA reveal - 50% faster
      .fromTo('.cta-reveal', {
        opacity: 0,
        scale: 0.95
      }, {
        opacity: 1,
        scale: 1,
        duration: 0.3,   // Was 0.6
        ease: "power2.out"
      }, "-=0.15")  // Was -0.3

      // Subtle parallax
      gsap.to('.parallax-element', {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const stats = [
    { number: "<2s", label: "PAGE LOAD SPEED", subtext: "Lightning fast experience" },
    { number: "500%", label: "VISIBILITY INCREASE", subtext: "Across all search terms" },
    { number: "50+", label: "KEYWORDS DOMINATED", subtext: "First page takeover" }
  ]

  return (
    <>
      <style jsx>{`
        .luxury-gradient-text {
          background: linear-gradient(180deg, #ffffff 0%, #808080 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .red-accent {
          color: #ef4444;
          filter: drop-shadow(0 0 20px rgba(239, 68, 68, 0.3));
        }

        .subtle-glass {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .hover-glow {
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-glow:hover {
          background: rgba(239, 68, 68, 0.05);
          border-color: rgba(239, 68, 68, 0.2);
          transform: translateY(-2px);
        }

        @keyframes subtle-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .subtle-pulse {
          animation: subtle-pulse 4s ease-in-out infinite;
        }

        .clean-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.5), transparent);
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="relative min-h-screen bg-black flex items-center overflow-hidden"
      >
        {/* Clean background */}
        <div className="section-bg absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-950" />
          
          {/* Subtle gradient orbs */}
          <div className="parallax-element absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px] subtle-pulse" />
          <div className="parallax-element absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-red-950/10 rounded-full blur-[120px] subtle-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Content */}
        <div ref={contentRef} className="relative z-10 container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Main Message */}
            <div className="mb-20">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-thin uppercase tracking-wider leading-none mb-8">
                <span className="reveal-text block luxury-gradient-text">They Google</span>
                <span className="reveal-text block">
                  <span className="red-accent font-extralight">You Win</span>
                </span>
              </h2>
              
              <p className="reveal-text text-xl md:text-2xl text-white/60 max-w-2xl font-light leading-relaxed">
                Every search. Every click. Every call. We've engineered the system 
                so when anyone needs truck repair, they find you.
              </p>
            </div>

            {/* Stats Grid - Minimal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-block subtle-glass rounded-lg p-8 hover-glow cursor-pointer"
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className={`text-5xl md:text-6xl font-bold mb-4 transition-colors duration-300 ${
                    hoveredStat === index ? 'red-accent' : 'text-white'
                  }`}>
                    {stat.number}
                  </div>
                  <div className="text-xs uppercase tracking-[0.3em] text-white/80 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-white/40 font-light">
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>

            {/* Clean line separator */}
            <div className="clean-line mb-20" />

            {/* Bottom CTA Section */}
            <div className="text-center">
              <p className="reveal-text text-2xl md:text-3xl text-white/80 font-light mb-12 max-w-3xl mx-auto">
                Your competitors are still buying billboards. 
                <span className="text-white font-normal"> You'll own the internet.</span>
              </p>
              
              <button 
                onClick={onModalOpen}
                className="cta-reveal group inline-flex items-center gap-4 text-white text-lg font-light tracking-wide hover:text-red-400 transition-all duration-300"
              >
                <span className="uppercase">Lock Down Your Market</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default MarketDomination