import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Truck Repair Shop Competitor Analysis Tools | Know Your Competition | SWOT Analysis Templates',
  description: 'Dominate your market with FREE competitor analysis tools for truck repair shops. Pricing analysis, marketing intelligence, SWOT templates & more. Know your competition better than they know themselves.',
  keywords: 'truck repair shop competitor analysis, truck repair market analysis, truck repair shop competitive intelligence, truck repair pricing analysis, truck repair competitor research, truck repair shop SWOT analysis, truck repair market research, competitive analysis tools, truck repair shop market positioning',
  openGraph: {
    title: 'Free Truck Repair Shop Competitor Analysis Tools | Market Intelligence',
    description: 'Dominate your market with FREE competitor analysis tools. Pricing analysis, marketing intelligence & SWOT templates.',
    type: 'website',
    url: 'https://truckrepairleads.com/resources/competitor-analysis',
    images: ['/images/competitor-analysis-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Truck Repair Shop Competitor Analysis Tools',
    description: 'Dominate your market with FREE competitor analysis tools.',
  },
  alternates: {
    canonical: 'https://truckrepairleads.com/resources/competitor-analysis',
  },
}

export default function CompetitorAnalysisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}





