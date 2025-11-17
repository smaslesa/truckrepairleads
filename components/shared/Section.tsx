'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'gray' | 'primary' | 'gradient'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | 'full'
  id?: string
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  background = 'white',
  padding = 'lg',
  maxWidth = '6xl',
  id,
}) => {
  const backgrounds = {
    white: 'bg-background',
    gray: 'bg-background-secondary',
    primary: 'bg-primary-500',
    gradient: 'bg-gradient-to-br from-primary-50 via-white to-secondary-50',
  }

  const paddings = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20',
    xl: 'py-32',
  }

  const maxWidths = {
    sm: 'max-w-sm',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-5xl',
    '2xl': 'max-w-6xl',
    '4xl': 'max-w-7xl',
    '6xl': 'max-w-7xl',
    full: 'max-w-full',
  }

  return (
    <section 
      id={id}
      className={cn(
        backgrounds[background],
        paddings[padding],
        'relative overflow-hidden',
        className
      )}
    >
      <div className={cn(
        'container mx-auto px-4 sm:px-6 lg:px-8',
        maxWidths[maxWidth]
      )}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

export default Section
