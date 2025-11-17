'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, Zap, Volume2, VolumeX, Sparkles } from 'lucide-react'

interface TemplateShowcaseProps {
  onModalOpen?: () => void
}

const TemplateShowcase: React.FC<TemplateShowcaseProps> = ({ onModalOpen }) => {
  const [isMuted, setIsMuted] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const deviceRef = useRef<HTMLDivElement>(null)
  const floatWrapperRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const featuresRef = useRef<(HTMLDivElement | null)[]>([])
  const glowRef = useRef<HTMLDivElement>(null)
  
  // Mouse position stored in refs to avoid re-renders
  const mouseX = useRef(0.5)
  const mouseY = useRef(0.5)
  const currentX = useRef(0.5)
  const currentY = useRef(0.5)
  const rafId = useRef<number | null>(null)
  const hasMouseMoved = useRef(false)
  
  // 5-second loop
  const videoUrl = 'https://res.cloudinary.com/ddyiobiae/video/upload/so_0,eo_5,q_auto:best,w_1920,f_auto/v1756320375/American_Demo_pzslgf.mp4'

  // Optimized mouse tracking
  useEffect(() => {
    let isMouseInViewport = false
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.current = (e.clientX - rect.left) / rect.width
      mouseY.current = (e.clientY - rect.top) / rect.height
      isMouseInViewport = true
      hasMouseMoved.current = true
    }
    
    const handleMouseLeave = () => {
      isMouseInViewport = false
    }
    
    const handleMouseEnter = () => {
      isMouseInViewport = true
    }
    
    const updateTransforms = () => {
      // Only update if mouse has moved at least once
      if (isMouseInViewport && hasMouseMoved.current) {
        // Ultra-smooth interpolation
        const easing = 0.08
        currentX.current += (mouseX.current - currentX.current) * easing
        currentY.current += (mouseY.current - currentY.current) * easing
        
        // Main device transform - only rotation, no translation conflicts
        if (deviceRef.current) {
          const rotateX = (currentY.current - 0.5) * -20
          const rotateY = (currentX.current - 0.5) * 30
          const translateZ = isHovering ? 120 : 50
          
          deviceRef.current.style.transform = `
            perspective(1200px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg) 
            translateZ(${translateZ}px)
            scale(${isHovering ? 1.08 : 1.02})
          `
        }
        
        // Move glow effect with mouse
        if (glowRef.current) {
          const glowX = (currentX.current - 0.5) * 100
          const glowY = (currentY.current - 0.5) * 50
          glowRef.current.style.transform = `translate(${glowX}px, ${glowY}px) scale(${isHovering ? 1.2 : 1})`
        }
        
        // Parallax for title
        if (titleRef.current) {
          const titleX = (currentX.current - 0.5) * -20
          const titleY = (currentY.current - 0.5) * -10
          titleRef.current.style.transform = `translate(${titleX}px, ${titleY}px)`
        }
        
        // Opposite parallax for subtitle
        if (subtitleRef.current) {
          const subtitleX = (currentX.current - 0.5) * 15
          const subtitleY = (currentY.current - 0.5) * 8
          subtitleRef.current.style.transform = `translate(${subtitleX}px, ${subtitleY}px)`
        }
        
        // Features parallax
        featuresRef.current.forEach((feature, index) => {
          if (feature) {
            const featureX = (currentX.current - 0.5) * (10 + index * 5)
            const featureY = (currentY.current - 0.5) * (5 + index * 2)
            feature.style.transform = `translate(${featureX}px, ${featureY}px)`
          }
        })
      } else if (!hasMouseMoved.current && deviceRef.current) {
        // Set initial centered state before any mouse movement
        deviceRef.current.style.transform = `
          perspective(1200px) 
          rotateX(0deg) 
          rotateY(0deg) 
          translateZ(50px)
          scale(1.02)
        `
      }
      
      rafId.current = requestAnimationFrame(updateTransforms)
    }
    
    updateTransforms()
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [isHovering])

  // GSAP animations
  useEffect(() => {
    const initGSAP = async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      
      gsap.registerPlugin(ScrollTrigger)

      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current, floatWrapperRef.current], {
        opacity: 0
      })

      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out"
        }
      })

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.8,
        ease: "power3.out",
        stagger: 0.1
      })
      .to(subtitleRef.current, {
        opacity: 0.6,
        y: 0,
        duration: 1.4,
        ease: "power2.out"
      }, "-=1.2")
      .to(floatWrapperRef.current, {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out"
      }, "-=1")

      // Floating animation for wrapper only - not the device itself
      if (floatWrapperRef.current) {
        gsap.to(floatWrapperRef.current, {
          y: -20,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        })
      }

      // Rotating glow
      const rotatingGlow = document.querySelector('.rotating-glow')
      if (rotatingGlow) {
        gsap.to(rotatingGlow, {
          rotate: 360,
          duration: 20,
          repeat: -1,
          ease: "none"
        })
      }

      // Features animation
      featuresRef.current.forEach((feature, index) => {
        if (feature) {
          gsap.fromTo(feature,
            {
              opacity: 0,
              y: 30
            },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: feature,
                start: "top 85%",
                toggleActions: "play none none reverse"
              },
              delay: index * 0.15
            }
          )
        }
      })

      // Video play trigger
      if (videoRef.current) {
        ScrollTrigger.create({
          trigger: videoRef.current,
          start: "top 80%",
          onEnter: () => {
            if (videoRef.current) {
              videoRef.current.play()
            }
          }
        })
      }
    }

    initGSAP()

    // Cleanup
    return () => {
      const cleanup = async () => {
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
      cleanup()
    }
  }, [])

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600;700;900&display=swap');

        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .blink {
          animation: blink 2s ease-in-out infinite;
        }

        .text-shimmer {
          background: linear-gradient(
            90deg,
            #ef4444 0%,
            #ffffff 50%,
            #ef4444 100%
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }

        .luxury-device {
          transform-style: preserve-3d;
          will-change: transform;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .glass-morphism {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.02)
          );
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .text-luxury {
          font-family: 'Inter', sans-serif;
          font-weight: 900;
          letter-spacing: -0.04em;
        }

        .text-elegant {
          font-family: 'Inter', sans-serif;
          font-weight: 200;
          letter-spacing: 0.08em;
        }

        @keyframes subtle-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }

        .pulse-dot {
          animation: subtle-pulse 3s ease-in-out infinite;
        }

        .premium-button {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .premium-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }

        .premium-button:hover::before {
          left: 100%;
        }

        .premium-button:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 
            0 30px 60px rgba(239, 68, 68, 0.4),
            0 0 80px rgba(239, 68, 68, 0.3);
        }

        .dynamic-glow {
          will-change: transform;
          pointer-events: none;
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animated-gradient {
          background: linear-gradient(45deg, #ef4444, #dc2626, #ef4444, #dc2626);
          background-size: 300% 300%;
          animation: gradient-shift 8s ease infinite;
        }

        .parallax-layer {
          will-change: transform;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .no-transition {
          transition: none !important;
        }

        video {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }
      `}</style>

      <section ref={containerRef} className="relative min-h-screen bg-black overflow-visible py-12 md:py-20">
        {/* Multi-layer gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-red-950/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-900/5 to-transparent" />
        </div>

        {/* Main content */}
        <div className="relative z-10">
          {/* Header with parallax - Smaller on mobile */}
          <div className="text-center mb-8 sm:mb-12 md:mb-20 px-4 md:px-6">
            <h2 ref={titleRef} className="parallax-layer no-transition text-luxury text-3xl sm:text-5xl md:text-7xl lg:text-9xl text-white mb-2 sm:mb-3 md:mb-6" style={{ opacity: 0 }}>
              FASTER THAN A
              <span className="text-red-500 blink"> BLINK</span>
            </h2>
            <p ref={subtitleRef} className="parallax-layer no-transition text-elegant text-xs sm:text-base md:text-xl lg:text-2xl text-white/60 uppercase tracking-wider md:tracking-widest" style={{ opacity: 0 }}>
              Get a truck breakdown website that means business
            </p>
          </div>

          {/* 3D Device Display - Less padding on mobile */}
          <div 
            ref={floatWrapperRef}
            className="relative mb-12 md:mb-24 px-2 sm:px-4 md:px-8"
            style={{ 
              opacity: 0,
              maxWidth: '1400px',
              margin: '0 auto'
            }}
          >
            <div 
              ref={deviceRef} 
              className="relative no-transition luxury-device" 
              style={{ 
                transformStyle: 'preserve-3d', 
                perspective: '1200px'
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Dynamic glow that moves with mouse */}
              <div 
                ref={glowRef}
                className="dynamic-glow absolute -inset-20 no-transition"
                style={{ zIndex: -1 }}
              >
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-[120px]" />
                <div className="rotating-glow absolute inset-10 bg-gradient-to-r from-red-500/10 to-transparent rounded-full blur-[80px]" />
              </div>

              {/* Device container */}
              <div className="rounded-2xl" style={{ transformStyle: 'preserve-3d' }}>
                {/* Glass effect */}
                <div className="glass-morphism rounded-xl md:rounded-2xl shadow-2xl">
                  {/* Browser Header - Responsive - Minimal on mobile */}
                  <div className="flex items-center justify-between px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 relative">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="flex gap-1 sm:gap-1.5 md:gap-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-red-500/30 rounded-full pulse-dot hover:bg-red-500/50 transition-colors" />
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-white/20 rounded-full pulse-dot hover:bg-white/40 transition-colors" style={{ animationDelay: '0.5s' }} />
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-white/20 rounded-full pulse-dot hover:bg-white/40 transition-colors" style={{ animationDelay: '1s' }} />
                      </div>
                    </div>
                    <div className="flex-1 mx-2 sm:mx-4 md:mx-8 max-w-full">
                      <div className="glass-morphism rounded-md md:rounded-lg px-2 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 text-white/30 text-[10px] sm:text-xs md:text-sm text-center text-elegant uppercase tracking-wider md:tracking-widest hover:text-white/50 transition-colors truncate">
                        <span className="hidden sm:inline">americanmuscletruck breakdown.com</span>
                        <span className="sm:hidden">amtruck breakdown.com</span>
                      </div>
                    </div>
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-red-500/30 hover:text-red-500/50 transition-colors flex-shrink-0" />
                  </div>

                  {/* Video - Taller on mobile, fills container */}
                  <div className="relative rounded-b-xl md:rounded-b-2xl overflow-hidden">
                    <video 
                      ref={videoRef}
                      className="w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-video rounded-b-xl md:rounded-b-2xl object-cover"
                      style={{ 
                        objectPosition: 'center center'
                      }}
                      autoPlay 
                      muted={isMuted}
                      loop
                      playsInline
                    >
                      <source src={videoUrl} type="video/mp4" />
                    </video>
                    
                    {/* Inner glow effect */}
                    <div 
                      className="absolute inset-0 rounded-b-xl md:rounded-b-2xl pointer-events-none"
                      style={{
                        boxShadow: 'inset 0 0 100px rgba(239, 68, 68, 0.1)',
                      }}
                    />
                  </div>
                </div>

                {/* Shadow layers */}
                <div className="absolute -inset-4 bg-gradient-to-b from-transparent via-red-500/10 to-red-500/20 rounded-2xl blur-2xl -z-10" />
                <div className="absolute -inset-8 bg-red-500/10 rounded-2xl blur-3xl -z-20" />
              </div>

              {/* Depth shadow */}
              <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[150%] h-64 bg-gradient-to-t from-red-500/20 to-transparent rounded-full blur-[150px]" />
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20 max-w-5xl mx-auto px-4 md:px-6">
            <div ref={(el) => { 
              if (el) featuresRef.current[0] = el; 
            }} className="parallax-layer no-transition text-center group">
              <div className="text-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 mb-2 md:mb-3 group-hover:text-shimmer transition-all duration-500 transform group-hover:scale-110">
                BEAUTIFUL
              </div>
              <p className="text-elegant text-white/50 text-xs sm:text-sm uppercase tracking-wider">
                Modern design that commands attention
              </p>
            </div>
            <div ref={(el) => { 
              if (el) featuresRef.current[1] = el; 
            }} className="parallax-layer no-transition text-center group">
              <div className="text-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 mb-2 md:mb-3 group-hover:text-shimmer transition-all duration-500 transform group-hover:scale-110">
                FAST
              </div>
              <p className="text-elegant text-white/50 text-xs sm:text-sm uppercase tracking-wider">
                Optimized performance that converts
              </p>
            </div>
            <div ref={(el) => { 
              if (el) featuresRef.current[2] = el; 
            }} className="parallax-layer no-transition text-center group">
              <div className="text-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 mb-2 md:mb-3 group-hover:text-shimmer transition-all duration-500 transform group-hover:scale-110">
                EFFECTIVE
              </div>
              <p className="text-elegant text-white/50 text-xs sm:text-sm uppercase tracking-wider">
                Built to turn visitors into customers
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center px-4 md:px-6">
            <a
              href="/american"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button animated-gradient group inline-flex items-center gap-2 md:gap-4 text-white px-6 sm:px-10 md:px-14 py-4 sm:py-5 md:py-7 rounded-lg md:rounded-xl text-sm sm:text-base md:text-xl font-bold text-luxury uppercase tracking-wider shadow-2xl"
              onClick={onModalOpen}
            >
              <Zap className="w-5 h-5 md:w-7 md:h-7 group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline">Experience It</span>
              <span className="sm:hidden">View Demo</span>
              <span className="hidden sm:inline">Live</span>
              <ArrowRight className="w-4 h-4 md:w-6 md:h-6 group-hover:translate-x-3 transition-transform duration-300" />
            </a>
            
            <p className="text-elegant text-white/30 text-xs sm:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em] mt-4 md:mt-6">
              See the full demo in action
            </p>
            
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="mt-6 md:mt-10 text-white/20 hover:text-white/40 transition-all duration-300 inline-flex items-center gap-2 text-elegant group"
            >
              {isMuted ? <VolumeX className="w-4 h-4 group-hover:scale-110 transition-transform" /> : <Volume2 className="w-4 h-4 group-hover:scale-110 transition-transform" />}
              <span className="text-xs uppercase tracking-widest">{isMuted ? 'Sound Off' : 'Sound On'}</span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default TemplateShowcase