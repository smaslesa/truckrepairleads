import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Truck Repair Shop Insurance Tools | DRP Applications, Negotiation Scripts & Supplement Guide',
  description: 'Master insurance claims with FREE tools for truck repair shops. DRP applications, negotiation scripts, supplement documentation & more. Stop leaving money on the table. Download instantly.',
  keywords: 'truck repair shop insurance tools, DRP application templates, truck repair insurance, supplement documentation, insurance negotiation scripts, truck repair shop insurance claims, truck repair DRP programs, truck repair insurance guide, insurance claim tools, truck repair shop insurance forms',
  openGraph: {
    title: 'Free Truck Repair Shop Insurance Tools | DRP Applications & Scripts',
    description: 'Master insurance claims with FREE tools. DRP applications, negotiation scripts, supplement guide & more.',
    type: 'website',
    url: 'https://truckrepairleads.com/resources/insurance-tools',
    images: ['/images/insurance-tools-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Truck Repair Shop Insurance Tools',
    description: 'Master insurance claims with FREE tools for truck repair shops.',
  },
  alternates: {
    canonical: 'https://truckrepairleads.com/resources/insurance-tools',
  },
}

export default function InsuranceToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}







