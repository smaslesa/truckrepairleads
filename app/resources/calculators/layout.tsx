import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Truck Repair Shop Business Calculators | ROI, Lead Value & Profit Calculators | Know Your Numbers',
  description: 'Make data-driven decisions with FREE business calculators for truck repair shops. Calculate marketing ROI, lead value, repair estimates & profit margins. Interactive tools that help you grow smarter.',
  keywords: 'truck repair shop calculators, truck repair ROI calculator, truck repair shop profit calculator, lead value calculator, truck repair business calculators, truck repair pricing calculator, truck repair shop marketing ROI, truck repair shop profit margins, repair estimate calculator, collision business metrics',
  openGraph: {
    title: 'Free Truck Repair Shop Business Calculators | ROI & Profit Tools',
    description: 'Make data-driven decisions with FREE business calculators. Calculate ROI, lead value, estimates & profit margins.',
    type: 'website',
    url: 'https://truckrepairleads.com/resources/calculators',
    images: ['/images/calculators-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Truck Repair Shop Business Calculators',
    description: 'Make data-driven decisions with FREE business calculators for truck repair shops.',
  },
  alternates: {
    canonical: 'https://truckrepairleads.com/resources/calculators',
  },
}

export default function CalculatorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

