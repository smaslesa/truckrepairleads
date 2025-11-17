import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Truck Repair Shop Marketing Ideas | 100+ Proven Campaigns That Convert | Copy & Paste Ready',
  description: 'Steal our best marketing ideas for truck repair shops! 100+ proven campaigns with templates, scripts & strategies. Social media, email, seasonal promotions & more. Copy-paste ready - download FREE.',
  keywords: 'truck repair shop marketing ideas, truck repair marketing campaigns, truck repair shop promotional ideas, truck repair marketing strategies, truck repair center marketing, truck repair shop advertising ideas, auto repair marketing, truck repair promotions, truck repair shop social media marketing, truck repair email marketing',
  openGraph: {
    title: 'Free Truck Repair Shop Marketing Ideas | 100+ Proven Campaigns',
    description: '100+ proven marketing campaigns with templates & strategies. Copy-paste ready for truck repair shops.',
    type: 'website',
    url: 'https://truckrepairleads.com/resources/marketing-ideas',
    images: ['/images/marketing-ideas-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Truck Repair Shop Marketing Ideas',
    description: '100+ proven marketing campaigns for truck repair shops. Copy-paste ready.',
  },
  alternates: {
    canonical: 'https://truckrepairleads.com/resources/marketing-ideas',
  },
}

export default function MarketingIdeasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

