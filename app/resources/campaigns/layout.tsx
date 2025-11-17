import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Truck Repair Shop Marketing Calendar | 52 Weeks of Campaign Ideas | Year-Round Promotions',
  description: 'Never run out of marketing ideas with our FREE 52-week campaign calendar for truck repair shops. Ready-to-run promotions, seasonal campaigns & proven templates. Download instantly, no email required.',
  keywords: 'truck repair shop marketing calendar, truck repair marketing campaigns, truck repair shop promotional calendar, truck repair seasonal promotions, truck repair marketing ideas, truck repair shop campaign templates, truck repair marketing schedule, year-round marketing campaigns, truck repair shop promotion ideas',
  openGraph: {
    title: 'Free Truck Repair Shop Marketing Calendar | 52 Weeks of Campaigns',
    description: 'Never run out of marketing ideas with our FREE 52-week campaign calendar. Ready-to-run promotions & templates.',
    type: 'website',
    url: 'https://truckrepairleads.com/resources/campaigns',
    images: ['/images/campaigns-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Truck Repair Shop Marketing Calendar',
    description: 'Never run out of marketing ideas with our FREE 52-week campaign calendar.',
  },
  alternates: {
    canonical: 'https://truckrepairleads.com/resources/campaigns',
  },
}

export default function CampaignsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}







