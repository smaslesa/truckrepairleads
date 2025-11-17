'use client'

import React, { useLayoutEffect, useRef } from 'react'
import { MapPin, Zap, Shield, TrendingUp } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

interface AboutProps {
  videoSrc?: string // Optional video path - can override default Cloudinary video
}

const About: React.FC<AboutProps> = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {
      
      // Enhanced video parallax with zoom
      if (videoRef.current) {
        gsap.fromTo(videoRef.current, 
          {
            scale: 1.1,
            yPercent: 0
          },
          {
            scale: 1.3,
            yPercent: -25,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          }
        )
        
        // Dynamic overlay opacity based on scroll
        gsap.fromTo(overlayRef.current, 
          {
            opacity: 0.2
          },
          {
            opacity: 0.6,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        )
      }
      
      // Main reveal timeline - keeping it fast as you like
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      })

      // Location badge animation
      tl.fromTo('.location-badge', {
        scale: 0,
        opacity: 0
      }, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "back.out(1.4)"
      })

      // Headline reveal
      .fromTo('.about-headline', {
        y: 40,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=0.2")

      // Description paragraphs
      .fromTo('.about-text', {
        y: 20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.08
      }, "-=0.3")

      // Expertise cards with rotation
      .fromTo('.expertise-card', {
        scale: 0.9,
        opacity: 0,
        rotationY: -15
      }, {
        scale: 1,
        opacity: 1,
        rotationY: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out"
      }, "-=0.2")

      // Continuous shimmer on Vegas text - slower for less distraction
      gsap.to('.vegas-shimmer', {
        backgroundPosition: '200% center',
        duration: 6,
        ease: "none",
        repeat: -1
      })

      // Pulse glow on expertise icons
      document.querySelectorAll('.icon-glow').forEach((icon, index) => {
        gsap.to(icon, {
          boxShadow: '0 0 30px rgba(239, 68, 68, 0.8)',
          duration: 2,
          repeat: -1,
          yoyo: true,
          delay: index * 0.3,
          ease: "power1.inOut"
        })
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const expertisePoints = [
    {
      icon: Zap,
      title: "INSTANT IMPACT",
      description: "Websites so fast they make your competition look frozen in time",
      featured: false
    },
    {
      icon: Shield,
      title: "PROVEN SYSTEMS",
      description: "Battle-tested strategies refined across hundreds of truck breakdown shops nationwide",
      featured: true
    },
    {
      icon: TrendingUp,
      title: "MEASURABLE RESULTS",
      description: "Real growth tracked with enterprise analytics and transparent reporting",
      featured: false
    }
  ]

  // Optimized Cloudinary URL with all performance parameters
  const cloudinaryVideoUrl = "https://res.cloudinary.com/ddyiobiae/video/upload/f_auto,q_auto:eco,c_limit,w_1920,br_3m/v1755891071/shutterstock_1042235128_r8casg.mp4"
  
  // Poster image for faster initial load
  const cloudinaryPosterUrl = "https://res.cloudinary.com/ddyiobiae/video/upload/f_auto,q_auto:eco,c_limit,w_1920,so_2/v1755891071/shutterstock_1042235128_r8casg.jpg"

  return (
    <>
      <style jsx>{`
        .vegas-shimmer {
          background: linear-gradient(
            90deg,
            #ef4444 0%,
            #dc2626 25%,
            #ef4444 50%,
            #dc2626 75%,
            #ef4444 100%
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 25px rgba(239, 68, 68, 0.4));
        }

        .text-gradient-silver {
          background: linear-gradient(180deg, #ffffff 0%, #a0a0a0 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .glass-about {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .expertise-glass {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .expertise-glass:hover {
          background: rgba(239, 68, 68, 0.05);
          border-color: rgba(239, 68, 68, 0.2);
          transform: translateY(-4px) scale(1.02);
        }

        .expertise-glass.featured {
          background: rgba(239, 68, 68, 0.03);
          border: 1px solid rgba(239, 68, 68, 0.15);
          transform: scale(1.05);
        }

        .expertise-glass.featured:hover {
          transform: translateY(-4px) scale(1.07);
        }

        .vignette-heavy {
          background: radial-gradient(
            ellipse at center,
            transparent 0%,
            rgba(0, 0, 0, 0.3) 40%,
            rgba(0, 0, 0, 0.8) 100%
          );
        }

        .location-glow {
          box-shadow: 
            0 0 20px rgba(239, 68, 68, 0.5),
            inset 0 0 20px rgba(239, 68, 68, 0.1);
        }

        .icon-glow {
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.4);
          transition: all 0.3s ease;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="relative min-h-screen bg-black overflow-hidden flex items-center py-20"
      >
        {/* Enhanced Video Background with Scale */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={cloudinaryPosterUrl}
          preload="metadata"
          style={{ 
            filter: 'brightness(0.5) contrast(1.1) saturate(1.2)',
            transformOrigin: 'center center'
          }}
        >
          <source src={cloudinaryVideoUrl} type="video/mp4" />
          <source 
            src="https://res.cloudinary.com/ddyiobiae/video/upload/f_webm,q_auto:eco,c_limit,w_1920,br_3m/v1755891071/shutterstock_1042235128_r8casg.webm" 
            type="video/webm" 
          />
        </video>

        {/* Heavy vignette for video */}
        <div className="vignette-heavy absolute inset-0 pointer-events-none" />

        {/* Dynamic overlay */}
        <div ref={overlayRef} className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div ref={contentRef} className="relative z-10 container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Location Badge - Fixed */}
            <div className="location-badge flex justify-center mb-12">
              <div className="glass-about location-glow rounded-full px-6 py-3 inline-flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span className="text-sm font-medium tracking-wider text-white/80 uppercase">
                  Las Vegas • Entertainment Capital
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-thin uppercase tracking-wider leading-tight mb-6">
                <span className="about-headline block text-gradient-silver">Where</span>
                <span className="about-headline block vegas-shimmer text-6xl md:text-7xl lg:text-8xl">Vegas Magic</span>
                <span className="about-headline block text-gradient-silver">Meets Your Shop</span>
              </h2>
            </div>

            {/* Description - Tech & Entertainment Focus */}
            <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
              <p className="about-text text-xl md:text-2xl text-white/80 font-light leading-relaxed">
                From the entertainment capital, we bring 
                <span className="text-white font-normal"> world-class production </span>
                and bleeding-edge technology to transform your digital presence.
              </p>
              
              <p className="about-text text-lg text-white/60 font-light leading-relaxed">
                Vegas runs on spectacle, precision, and flawless execution 24/7. 
                We bring that same relentless perfection to every website, every campaign, 
                every customer interaction.
              </p>
            </div>

            {/* Expertise Cards - Enhanced */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {expertisePoints.map((point, index) => (
                <div
                  key={index}
                  className={`expertise-card expertise-glass rounded-2xl p-8 text-center ${
                    point.featured ? 'featured' : ''
                  }`}
                >
                  <div className="inline-block mb-6">
                    <div className={`icon-glow w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-red-600 to-red-500 p-3 ${
                      point.featured ? 'float-animation' : ''
                    }`}>
                      <point.icon className="w-full h-full text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <h3 className="text-sm font-medium text-red-500 uppercase tracking-[0.2em] mb-3">
                    {point.title}
                  </h3>
                  
                  <p className="text-white/50 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Statement with CTA */}
            <div className="text-center">
              <p className="text-2xl md:text-3xl text-white/80 font-light mb-8">
                We're not another marketing agency.
                <span className="block text-white font-normal mt-2">
                  We're your technology partner.
                </span>
              </p>
              
              <button className="glass-about px-8 py-4 text-red-500 hover:text-white hover:bg-red-500/20 transition-all duration-300 uppercase tracking-wider font-light">
                See Our Technology →
              </button>
            </div>

          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </section>
    </>
  )
}

export default About