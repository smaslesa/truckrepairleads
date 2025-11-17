import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Truck Repair Shop Business Guides | Complete How-To Manuals | Grow Your Truck Repair Business',
  description: 'Master your truck repair shop with FREE comprehensive guides. Business growth, customer acquisition, operations, marketing & more. Step-by-step manuals written by industry experts. Download instantly.',
  keywords: 'truck repair shop business guides, truck repair business manual, truck repair shop operations guide, truck repair marketing guide, truck repair center business plan, truck repair shop management guide, auto repair business guide, truck repair training manual, truck repair shop success guide',
  openGraph: {
    title: 'Free Truck Repair Shop Business Guides | Complete How-To Manuals',
    description: 'Master your truck repair shop with FREE comprehensive guides. Step-by-step manuals by industry experts.',
    type: 'website',
    url: 'https://truckrepairleads.com/resources/guides',
    images: ['/images/guides-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Truck Repair Shop Business Guides',
    description: 'Master your truck repair shop with FREE comprehensive how-to guides.',
  },
  alternates: {
    canonical: 'https://truckrepairleads.com/resources/guides',
  },
}

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

