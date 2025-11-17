'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'glass' | 'floating' | 'bordered'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  hover?: boolean
  onClick?: () => void
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  padding = 'lg',
  hover = true,
  onClick,
}) => {
  const baseStyles = `
    rounded-2xl transition-all duration-300
  `

  const variants = {
    default: `
      bg-white shadow-card
    `,
    glass: `
      bg-white/80 backdrop-blur-lg border border-white/20 shadow-soft
    `,
    floating: `
      bg-white shadow-card hover:shadow-card-hover transform hover:-translate-y-2
    `,
    bordered: `
      bg-white border-2 border-border hover:border-primary-200 shadow-soft
    `,
  }

  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12',
  }

  const hoverEffects = hover ? {
    whileHover: { 
      y: -8,
      transition: { type: "spring" as const, stiffness: 300, damping: 20 }
    },
    whileTap: { scale: 0.98 }
  } : {}

  return (
    <motion.div
      className={cn(
        baseStyles,
        variants[variant],
        paddings[padding],
        onClick && 'cursor-pointer',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={onClick}
      {...hoverEffects}
    >
      {children}
    </motion.div>
  )
}

export default Card
