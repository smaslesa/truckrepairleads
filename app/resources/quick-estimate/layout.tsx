import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Truck Repair Shop Quick Repair Estimator | Instant Estimates in 30 Seconds | Truck Repair Calculator',
  description: 'Get instant truck repair estimates with our FREE quick estimator. 30-second estimates for bumpers, dents, paint work & more. Perfect for phone quotes and walk-ins. No email required.',
  keywords: 'truck repair shop estimator, truck repair calculator, truck repair shop estimate tool, truck repair repair costs, quick estimate calculator, truck repair pricing, truck repair shop quote tool, truck repair cost estimator, repair estimate calculator, collision damage estimator',
  openGraph: {
    title: 'Free Truck Repair Shop Quick Repair Estimator | 30-Second Estimates',
    description: 'Get instant truck repair estimates with our FREE quick estimator. Perfect for phone quotes and walk-ins.',
    type: 'website',
    url: 'https://truckrepairleads.com/resources/quick-estimate',
    images: ['/images/quick-estimate-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Truck Repair Shop Quick Repair Estimator',
    description: 'Get instant truck repair estimates in 30 seconds.',
  },
  alternates: {
    canonical: 'https://truckrepairleads.com/resources/quick-estimate',
  },
}

export default function QuickEstimateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}