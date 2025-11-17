'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
  loading?: boolean
  icon?: React.ReactNode
  href?: string
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  loading = false, 
  icon, 
  href,
  onClick,
  disabled,
  type = 'button'
}) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-3 font-semibold 
      transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden
      transform-gpu
    `

    const variants = {
      primary: `
        bg-gradient-to-r from-primary-500 to-primary-600 text-white 
        shadow-large hover:shadow-extra-large hover:shadow-glow
        hover:from-primary-600 hover:to-primary-700
        focus:ring-primary-500 hover:scale-105 active:scale-95
        border-0
      `,
      secondary: `
        bg-gradient-to-r from-secondary-500 to-secondary-600 text-white 
        shadow-large hover:shadow-extra-large hover:shadow-glow-secondary
        hover:from-secondary-600 hover:to-secondary-700
        focus:ring-secondary-500 hover:scale-105 active:scale-95
        border-0
      `,
      ghost: `
        bg-white/80 backdrop-blur-xl border border-white/20 text-neutral-900
        hover:bg-white/90 hover:shadow-medium
        focus:ring-primary-500 hover:scale-105 active:scale-95
        shadow-soft
      `,
      outline: `
        bg-transparent hover:bg-primary-50 text-primary-500 
        border-2 border-primary-500 hover:bg-primary-500 hover:text-white
        focus:ring-primary-500 hover:scale-105 active:scale-95
        hover:shadow-medium
      `,
    }

    const sizes = {
      sm: 'px-6 py-3 text-sm rounded-xl',
      md: 'px-8 py-4 text-base rounded-2xl',
      lg: 'px-10 py-5 text-lg rounded-2xl',
      xl: 'px-12 py-6 text-xl rounded-3xl',
    }

    const ButtonComponent = (
      <motion.button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          loading && 'cursor-wait',
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
        disabled={disabled || loading}
        onClick={onClick}
        type={type}
      >
        {loading && (
          <motion.div
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        )}
        {icon && !loading && icon}
        {children}
      </motion.button>
    )

    if (href) {
      return (
        <a href={href} className="inline-block">
          {ButtonComponent}
        </a>
      )
    }

    return ButtonComponent
  }

export default Button
