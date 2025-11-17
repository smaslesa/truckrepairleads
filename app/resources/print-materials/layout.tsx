import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Truck Repair Shop Print Materials | Business Cards, Flyers & Brochures | Professional Templates',
  description: 'Download FREE print-ready materials for your truck repair shop. Business cards, flyers, brochures, door hangers & more. Professional designs that convert. Print locally or online.',
  keywords: 'truck repair shop print materials, truck repair business cards, truck repair shop flyers, truck repair brochures, truck repair center marketing materials, truck repair shop door hangers, auto repair print templates, truck repair promotional materials, truck repair shop advertising materials',
  openGraph: {
    title: 'Free Truck Repair Shop Print Materials | Professional Templates',
    description: 'Download FREE print-ready materials. Business cards, flyers, brochures & more for truck repair shops.',
    type: 'website',
    url: 'https://truckrepairleads.com/resources/print-materials',
    images: ['/images/print-materials-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Truck Repair Shop Print Materials',
    description: 'Download FREE print-ready materials for your truck repair shop.',
  },
  alternates: {
    canonical: 'https://truckrepairleads.com/resources/print-materials',
  },
}

export default function PrintMaterialsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

