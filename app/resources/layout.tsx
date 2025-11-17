import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Truck Repair Shop Marketing Resources | 500+ Templates, Tools & Calculators | No Email Required',
  description: 'The ultimate FREE resource library for truck repair shops. 500+ marketing templates, ROI calculators, insurance tools, phone scripts, slogans & proven strategies. Download instantly - no email required. Boost your truck repair shop revenue today.',
  keywords: 'truck repair shop marketing, truck repair marketing, truck repair shop resources, free truck repair marketing, truck repair center marketing, truck repair shop slogans, truck repair calculators, truck repair tools, truck repair shop templates, truck repair phone scripts, collision marketing ideas, truck repair shop success stories, truck repair insurance tools, truck repair guides',
  openGraph: {
    title: 'Free Truck Repair Shop Marketing Resources | 500+ Tools & Templates',
    description: 'Download 500+ FREE marketing tools for truck repair shops instantly. No email required. Templates, calculators, scripts & strategies that work.',
    type: 'website',
    url: 'https://truckrepairleads.com/resources',
    images: ['/images/resources-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Truck Repair Shop Marketing Resources | 500+ Tools',
    description: 'Download 500+ FREE marketing tools for truck repair shops instantly. No email required.',
  },
  alternates: {
    canonical: 'https://truckrepairleads.com/resources',
  },
}

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {children}
    </div>
  )
}
