'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Loader2, ArrowRight, CheckCircle, Phone, Mail, Building, User } from 'lucide-react'
import { useModal } from '@/contexts/ModalContext'
import { trackFormSubmission, trackModalOpen, trackModalClose, getAttribution, getFirstTouchAttribution } from '@/lib/analytics'

interface LeadModalProps {
  isOpen: boolean
  onClose: () => void
  source?: string
  title?: string
  subtitle?: string
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  shop: string
}

export default function LeadModal({
  isOpen,
  onClose,
  source = 'general',
  title = "Get Your Demo",
  subtitle = "See how we help truck repair shops dominate their local market"
}: LeadModalProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    shop: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [focusedField, setFocusedField] = useState<string | null>(null)
  
  const modalRef = useRef<HTMLDivElement>(null)
  const { setIsAnyModalOpen } = useModal()
  const modalOpenTimeRef = useRef<number>(0)

  useEffect(() => {
    setIsAnyModalOpen(isOpen)

    // Track modal open/close
    if (isOpen) {
      modalOpenTimeRef.current = Date.now()
      trackModalOpen('lead_form', source)
    } else if (modalOpenTimeRef.current > 0) {
      const timeOpen = Date.now() - modalOpenTimeRef.current
      trackModalClose('lead_form', timeOpen)
      modalOpenTimeRef.current = 0
    }
  }, [isOpen, setIsAnyModalOpen, source])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    if (isOpen) document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen && isSubmitted) {
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          shop: ''
        })
        setErrors({})
      }, 300)
    }
  }, [isOpen, isSubmitted])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.firstName.trim()) newErrors.firstName = 'Required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Required'
    if (!formData.shop.trim()) newErrors.shop = 'Required'
    if (!formData.email.trim()) newErrors.email = 'Required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email'
    if (!formData.phone.trim()) newErrors.phone = 'Required'
    else if (formData.phone.replace(/\D/g, '').length < 10) newErrors.phone = 'Invalid phone'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Get attribution data
      const attribution = getAttribution()
      const firstTouch = getFirstTouchAttribution()

      const submissionData = {
        ...formData,
        source,
        timestamp: new Date().toISOString(),
        // Include attribution data
        attribution: {
          current: attribution,
          first_touch: firstTouch,
        },
      }

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData)
      })

      if (!response.ok) throw new Error('Failed to submit')

      // Track successful submission
      trackFormSubmission('lead_form', source, true)
      setIsSubmitted(true)

    } catch (error) {
      console.error('Error:', error)
      // Track failed submission
      trackFormSubmission('lead_form', source, false)
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    
    if (name === 'phone') {
      const cleaned = value.replace(/\D/g, '')
      let formatted = cleaned
      if (cleaned.length >= 6) {
        formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`
      } else if (cleaned.length >= 3) {
        formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`
      }
      setFormData(prev => ({ ...prev, [name]: formatted }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998]"
          />
          
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="relative w-full max-w-xl pointer-events-auto"
            >
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 opacity-50" />
                
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-black/5 hover:bg-black/10 transition-all group"
                >
                  <X className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </button>

                <div className="relative z-10 p-8 lg:p-10">
                  {!isSubmitted ? (
                    <>
                      <div className="text-center mb-10">
                        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-3 tracking-tight">
                          {title}
                        </h2>
                        <p className="text-gray-600 text-lg font-light">
                          {subtitle}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('firstName')}
                              onBlur={() => setFocusedField(null)}
                              placeholder="First Name"
                              className={`w-full pl-11 pr-4 py-4 bg-gray-50 border-2 ${
                                errors.firstName ? 'border-red-300 bg-red-50' : 
                                focusedField === 'firstName' ? 'border-gray-400 bg-white' : 
                                'border-gray-200 hover:border-gray-300'
                              } rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none transition-all font-light`}
                            />
                          </div>
                          <div className="relative">
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('lastName')}
                              onBlur={() => setFocusedField(null)}
                              placeholder="Last Name"
                              className={`w-full px-4 py-4 bg-gray-50 border-2 ${
                                errors.lastName ? 'border-red-300 bg-red-50' : 
                                focusedField === 'lastName' ? 'border-gray-400 bg-white' : 
                                'border-gray-200 hover:border-gray-300'
                              } rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none transition-all font-light`}
                            />
                          </div>
                        </div>

                        <div className="relative">
                          <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            name="shop"
                            value={formData.shop}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('shop')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Shop Name"
                            className={`w-full pl-11 pr-4 py-4 bg-gray-50 border-2 ${
                              errors.shop ? 'border-red-300 bg-red-50' : 
                              focusedField === 'shop' ? 'border-gray-400 bg-white' : 
                              'border-gray-200 hover:border-gray-300'
                            } rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none transition-all font-light`}
                          />
                        </div>

                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Email Address"
                            className={`w-full pl-11 pr-4 py-4 bg-gray-50 border-2 ${
                              errors.email ? 'border-red-300 bg-red-50' : 
                              focusedField === 'email' ? 'border-gray-400 bg-white' : 
                              'border-gray-200 hover:border-gray-300'
                            } rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none transition-all font-light`}
                          />
                        </div>

                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('phone')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="(555) 123-4567"
                            className={`w-full pl-11 pr-4 py-4 bg-gray-50 border-2 ${
                              errors.phone ? 'border-red-300 bg-red-50' : 
                              focusedField === 'phone' ? 'border-gray-400 bg-white' : 
                              'border-gray-200 hover:border-gray-300'
                            } rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none transition-all font-light`}
                          />
                        </div>

                        <button
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                          className={`relative w-full py-5 rounded-xl font-medium text-lg transition-all flex items-center justify-center gap-3 overflow-hidden group ${
                            isSubmitting
                              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                              : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                          }`}
                        >
                          {!isSubmitting && (
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                          )}
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Processing...
                            </>
                          ) : (
                            <>
                              GET STARTED
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>

                        <p className="text-center text-gray-400 text-xs font-light tracking-wide uppercase">
                          No contracts • Cancel anytime
                        </p>
                      </div>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", delay: 0.1, stiffness: 200 }}
                        className="inline-flex p-6 rounded-full bg-gradient-to-br from-green-50 to-green-100 mb-8"
                      >
                        <CheckCircle className="w-16 h-16 text-green-600" strokeWidth={1.5} />
                      </motion.div>
                      
                      <h3 className="text-4xl font-light text-gray-900 mb-4">
                        Perfect! We'll be in touch
                      </h3>
                      
                      <p className="text-xl text-gray-600 mb-8 font-light">
                        Get ready to transform<br />
                        <span className="text-2xl text-gray-900 font-medium">
                          {formData.shop}
                        </span>
                      </p>

                      <button
                        onClick={onClose}
                        className="px-10 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-all"
                      >
                        CLOSE
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}