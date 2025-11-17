import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ResourceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  badge?: string
  stats?: string
  items: string[]
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  icon,
  href,
  badge,
  stats,
  items
}) => {
  return (
    <Link href={href} className="block group h-full">
      <div className="h-full bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-red-100 text-red-600 rounded-lg">
            {icon}
          </div>
          {badge && (
            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
              {badge}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-3">
          {description}
        </p>
        
        {stats && (
          <div className="text-sm font-medium text-red-600 mb-3">
            {stats}
          </div>
        )}
        
        <div className="space-y-2 mb-4 flex-1">
          {items.slice(0, 4).map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              {item}
            </div>
          ))}
        </div>
        
        <div className="flex items-center gap-2 text-red-600 font-medium pt-4 border-t">
          Explore {title}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}

export default ResourceCard

