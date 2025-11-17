'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone } from 'lucide-react'
import { useModal } from '@/contexts/ModalContext'
import { gsap } from 'gsap'
import { trackPhoneClick } from '@/lib/analytics'
import { usePathname } from 'next/navigation'

const FloatingPhone = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [showPulse, setShowPulse] = useState(false)
  const { isAnyModalOpen } = useModal()
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const pathname = usePathname()
  
  // Hide on shop directory pages
  const shouldHide = pathname?.startsWith('/shops')

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setShowPulse(true)
      setTimeout(() => setShowPulse(false), 2000)
    }, 20000)

    const initialTimeout = setTimeout(() => {
      setShowPulse(true)
      setTimeout(() => setShowPulse(false), 2000)
    }, 5000)

    return () => {
      clearInterval(pulseInterval)
      clearTimeout(initialTimeout)
    }
  }, [])

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseEnter = () => {
      gsap.to(button, { scale: 1.05, duration: 0.3 })
    }

    const handleMouseLeave = () => {
      gsap.to(button, { scale: 1, x: 0, y: 0, duration: 0.3 })
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      
      gsap.to(button, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.3
      })
    }

    button.addEventListener('mouseenter', handleMouseEnter)
    button.addEventListener('mouseleave', handleMouseLeave)
    button.addEventListener('mousemove', handleMouseMove)

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter)
      button.removeEventListener('mouseleave', handleMouseLeave)
      button.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <style jsx>{`
        @keyframes subtle-pulse {
          0%, 100% {
            opacity: 0;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.8);
          }
        }

        .pulse-ring {
          animation: subtle-pulse 2s ease-out;
        }

        .luxury-shadow {
          box-shadow: 
            0 10px 40px -10px rgba(17, 24, 39, 0.5),
            0 0 60px -20px rgba(17, 24, 39, 0.3),
            0 4px 6px -1px rgba(0, 0, 0, 0.3);
        }

        .luxury-shadow-hover {
          box-shadow: 
            0 20px 50px -10px rgba(17, 24, 39, 0.6),
            0 0 80px -20px rgba(17, 24, 39, 0.4),
            0 10px 10px -5px rgba(0, 0, 0, 0.3);
        }

        .text-shimmer-phone {
          background: linear-gradient(
            90deg,
            #ffffff 0%,
            #6b7280 50%,
            #ffffff 100%
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .glass-effect {
          background: rgba(17, 24, 39, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>

      <AnimatePresence>
        {!isAnyModalOpen && !shouldHide && (
          <motion.div
            className="fixed bottom-8 right-8 z-50"
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 180 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 0.5
            }}
          >
            {showPulse && (
              <>
                <div className="absolute inset-0 rounded-lg bg-gray-600/20 pulse-ring pointer-events-none" />
                <div 
                  className="absolute inset-0 rounded-lg bg-gray-600/10 pulse-ring pointer-events-none" 
                  style={{ animationDelay: '0.3s' }}
                />
              </>
            )}

            <motion.a
              ref={buttonRef}
              href="tel:702-900-0265"
              className={`
                relative group flex items-center gap-3 
                glass-effect text-white 
                rounded-lg px-8 py-4
                transition-all duration-300
                ${isHovered ? 'luxury-shadow-hover bg-blue-700' : 'luxury-shadow bg-blue-600'}
                font-medium tracking-wide uppercase text-sm
              `}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => trackPhoneClick('floating_phone_button')}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className={`w-5 h-5 ${isHovered ? 'animate-pulse' : ''}`} />

              <span className="hidden sm:block">
                {isHovered ? (
                  <span className="text-shimmer-phone">Call Now</span>
                ) : (
                  '(702) 900-0265'
                )}
              </span>

              <span className="sm:hidden sr-only">(702) 900-0265</span>

              {isHovered && (
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              )}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default FloatingPhone