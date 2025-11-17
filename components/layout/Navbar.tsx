'use client'

import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { trackPhoneClick, trackCTAClick, trackNavigation } from '@/lib/analytics'
import LeadModal from '@/components/shared/LeadModal'

// Register GSAP plugins properly for Next.js
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const TruckRepairNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isOverDark, setIsOverDark] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Refs for GSAP targeting
  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const navLinksRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLAnchorElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const mobileToggleRef = useRef<HTMLButtonElement>(null)
  
  // GSAP context and timeline refs
  const ctx = useRef<gsap.Context | null>(null)
  const entranceTl = useRef<gsap.core.Timeline | null>(null)
  const magneticElements = useRef<HTMLElement[]>([])

  const navLinks = [
    { href: '/strategy', label: 'STRATEGY' },
    { href: '/performance', label: 'PERFORMANCE' },
    { href: '/results', label: 'RESULTS' },
    { href: '/websites', label: 'WEBSITES' },
    { href: '/vin-decoder', label: 'VIN DECODER' },
    { href: '/shops', label: 'SHOP DIRECTORY' },
    { href: '/resources', label: 'RESOURCES', badge: 'FREE' },
    { href: '/contact', label: 'CONTACT' },
  ]

  // GSAP Best Practice: Use useLayoutEffect for DOM manipulation
  useLayoutEffect(() => {
    // Create GSAP context for cleanup
    ctx.current = gsap.context(() => {
      // Set initial states with GSAP (better than CSS)
      gsap.set([logoRef.current, navLinksRef.current?.children, ctaRef.current?.children, phoneRef.current], {
        y: -30,
        opacity: 0
      })

      // Create entrance timeline with proper easing
      entranceTl.current = gsap.timeline({ 
        delay: 0.2,
        defaults: { ease: "power3.out" }
      })

      // Entrance animations - 25% faster
      entranceTl.current
        .to(logoRef.current, {
          duration: 0.75,
          y: 0,
          opacity: 1
        })
        .to(navLinksRef.current?.children || [], {
          duration: 0.6,
          y: 0,
          opacity: 1,
          stagger: 0.075
        }, "-=0.4")
        .to([phoneRef.current, ...Array.from(ctaRef.current?.children || [])], {
          duration: 0.45,
          y: 0,
          opacity: 1,
          stagger: 0.1
        }, "-=0.3")

      // Setup scroll-triggered background change
      ScrollTrigger.create({
        trigger: "body",
        start: "50px top",
        onUpdate: (self) => {
          setIsScrolled(self.progress > 0)
        }
      })

      // Setup magnetic buttons
      setupMagneticElements()

    }, navRef)

    return () => {
      // GSAP Best Practice: Proper cleanup
      ctx.current?.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Magnetic button setup following GSAP best practices
  const setupMagneticElements = () => {
    const buttons = navRef.current?.querySelectorAll('.magnetic-btn') as NodeListOf<HTMLElement>
    
    buttons?.forEach((btn) => {
      magneticElements.current.push(btn)
      
      // Mouse enter - activate magnetic field
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
          duration: 0.3,
          scale: 1.05,
          ease: "power2.out"
        })
      })

      // Mouse move - magnetic attraction
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        
        gsap.to(btn, {
          duration: 0.4,
          x: x * 0.3,
          y: y * 0.3,
          ease: "power2.out"
        })
      })

      // Mouse leave - reset position
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          duration: 0.6,
          x: 0,
          y: 0,
          scale: 1,
          ease: "elastic.out(1, 0.5)"
        })
      })
    })
  }

  // Mobile menu toggle with GSAP
  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen
    setIsMobileMenuOpen(newState)
    
    if (newState) {
      // Open animation
      gsap.set(mobileMenuRef.current, { display: 'block', height: 0, opacity: 0 })
      gsap.to(mobileMenuRef.current, {
        duration: 0.45,
        height: 'auto',
        opacity: 1,
        ease: "power3.out"
      })
      
      // Stagger mobile menu items
      gsap.from(mobileMenuRef.current?.querySelectorAll('.mobile-nav-item') || [], {
        duration: 0.4,
        y: 30,
        opacity: 0,
        stagger: 0.075,
        delay: 0.15,
        ease: "power2.out"
      })
    } else {
      // Close animation
      gsap.to(mobileMenuRef.current, {
        duration: 0.3,
        height: 0,
        opacity: 0,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(mobileMenuRef.current, { display: 'none' })
        }
      })
    }
  }

  // Background detection for dark/light mode
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      
      // Simple dark/light detection - can be enhanced
      if (scrollY > 200) {
        setIsOverDark(false)
      } else {
        setIsOverDark(true)
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Main Navigation */}
      <header 
        ref={navRef}
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-neutral-200/30 shadow-2xl shadow-black/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="container">
          <div className="flex justify-between items-center py-8">
            
            {/* Logo - Ferrari-inspired spacing */}
            <Link href="/" className="block">
              <div 
                ref={logoRef}
                className="text-xl sm:text-2xl leading-none transition-colors duration-300 flex items-baseline"
                style={{ 
                  fontFamily: "'SF Pro Display', 'Helvetica Neue', system-ui, sans-serif"
                }}
              >
                <span className="text-blue-600 font-bold tracking-[0.1em]">BODYSHOP</span>
                <span className="text-gray-400 font-light ml-1 tracking-[0.15em]">LEADS</span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <div ref={navLinksRef} className="flex items-center space-x-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => trackNavigation(link.href, 'navbar_desktop')}
                    className={`magnetic-btn ${
                      isOverDark ? 'text-white/80 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
                    } font-light tracking-[0.1em] text-sm transition-all duration-300 relative group py-2 flex items-center gap-2`}
                  >
                    {link.label}
                    {link.badge && (
                      <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                        {link.badge}
                      </span>
                    )}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-600 transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </div>
            </nav>
            
            {/* Right Side Actions */}
            <div className="flex items-center space-x-8">
              
              {/* Phone Number */}
              <a
                ref={phoneRef}
                href="tel:702-900-0265"
                onClick={() => trackPhoneClick('navbar_desktop')}
                className={`magnetic-btn hidden md:flex items-center space-x-3 ${
                  isOverDark ? 'text-white/70 hover:text-red-500' : 'text-neutral-500 hover:text-red-600'
                } transition-colors duration-300 font-light tracking-wide`}
              >
                <Phone className="w-4 h-4" />
                <span className="font-normal">(702) 900-0265</span>
              </a>
              
              <div ref={ctaRef} className="flex items-center space-x-4">
                {/* Demo Button - Motive Style */}
                <button
                  onClick={() => {
                    trackCTAClick('Demo', 'navbar_desktop', 'primary')
                    setIsModalOpen(true)
                  }}
                  className="magnetic-btn bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-sm"
                >
                  Demo
                </button>
                
                {/* Mobile Menu Toggle */}
                <button 
                  ref={mobileToggleRef}
                  className={`lg:hidden magnetic-btn p-3 rounded-lg ${
                    isOverDark ? 'hover:bg-white/10' : 'hover:bg-neutral-100'
                  } transition-colors duration-300`}
                  onClick={toggleMobileMenu}
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? (
                    <X className={`w-5 h-5 ${isOverDark ? 'text-white' : 'text-neutral-600'}`} />
                  ) : (
                    <Menu className={`w-5 h-5 ${isOverDark ? 'text-white' : 'text-neutral-600'}`} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-neutral-200/50 overflow-hidden"
          style={{ display: 'none' }}
        >
          <div className="container py-12 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="mobile-nav-item flex items-center justify-between text-neutral-700 hover:text-neutral-900 font-light tracking-[0.1em] text-sm py-4 px-6 rounded-lg hover:bg-neutral-50 transition-all duration-300"
                onClick={() => {
                  trackNavigation(link.href, 'navbar_mobile')
                  setIsMobileMenuOpen(false)
                }}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
            
            {/* Mobile Phone */}
            <a
              href="tel:702-900-0265"
              onClick={() => trackPhoneClick('navbar_mobile')}
              className="mobile-nav-item flex items-center space-x-4 text-neutral-600 hover:text-red-600 font-normal py-4 px-6 rounded-lg hover:bg-neutral-50 transition-colors duration-300 text-base tracking-wide mt-8"
            >
              <Phone className="w-5 h-5" />
              <span>(702) 900-0265</span>
            </a>

            {/* Mobile Demo Button */}
            <button
              onClick={() => {
                trackCTAClick('Demo', 'navbar_mobile', 'primary')
                setIsModalOpen(true)
                setIsMobileMenuOpen(false)
              }}
              className="mobile-nav-item w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-medium transition-all duration-300 mt-4"
            >
              Demo
            </button>
          </div>
        </div>
      </header>

      {/* Lead Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="navbar"
        title="Get Your Free Consultation"
        subtitle="See how we help truck shops dominate local search"
      />
    </>
  )
}

export default TruckRepairNavbar