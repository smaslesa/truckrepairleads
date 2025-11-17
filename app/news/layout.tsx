import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Truck Repair Shop News & Industry Insights | Latest Trends & Strategies | BodyShop Leads',
  description: 'Stay ahead with the latest truck repair shop news, industry trends, and proven strategies. Expert insights on digital marketing, business growth, and truck repair industry updates.',
  keywords: 'truck repair shop news, truck repair industry trends, truck repair shop business strategies, truck repair marketing insights, truck repair center news, truck repair shop industry updates, auto repair business tips, truck repair trends 2024',
  openGraph: {
    title: 'Truck Repair Shop News & Industry Insights | BodyShop Leads',
    description: 'Latest truck repair shop news, industry trends, and proven strategies from successful truck repair businesses.',
    type: 'website',
    url: 'https://truckrepairleads.com/news',
    images: ['/images/news-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Truck Repair Shop News & Industry Insights',
    description: 'Latest trends and strategies for truck repair businesses.',
  },
  alternates: {
    canonical: 'https://truckrepairleads.com/news',
  },
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
