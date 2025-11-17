import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Truck Repair Shop Slogans | 500+ Catchy Taglines + AI Generator | Perfect for Marketing',
  description: 'Get the perfect slogan for your truck repair shop! 500+ proven slogans plus AI generator for custom taglines. Funny, professional, trust-based options. Boost your marketing instantly - download FREE.',
  keywords: 'truck repair shop slogans, truck repair slogans, truck repair shop taglines, truck repair marketing slogans, truck repair center slogans, truck repair shop catchphrases, auto repair slogans, truck repair taglines, truck repair shop advertising slogans, truck repair shop mottos, truck repair catchphrases',
  openGraph: {
    title: 'Free Truck Repair Shop Slogans | 500+ Taglines + AI Generator',
    description: '500+ proven slogans plus AI generator for custom taglines. Perfect for truck repair shop marketing.',
    type: 'website',
    url: 'https://truckrepairleads.com/resources/slogans',
    images: ['/images/slogans-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Truck Repair Shop Slogans | 500+ Taglines',
    description: '500+ proven slogans plus AI generator for your truck repair shop marketing.',
  },
  alternates: {
    canonical: 'https://truckrepairleads.com/resources/slogans',
  },
}

export default function SlogansLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

