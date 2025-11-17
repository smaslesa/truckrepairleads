import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Truck Repair Shop Templates | Professional Estimates, Contracts & Forms | Download Instantly',
  description: 'Download 50+ professional truck repair shop templates FREE. Estimate forms, contracts, email templates, invoices & more. All insurance-approved and legally reviewed. No email required.',
  keywords: 'truck repair shop templates, truck repair forms, estimate templates, repair authorization forms, truck repair shop contracts, insurance forms, truck repair invoices, truck repair paperwork, truck repair shop email templates, repair shop documents',
  openGraph: {
    title: 'Free Truck Repair Shop Templates | Professional Forms & Contracts',
    description: '50+ FREE professional templates for truck repair shops. Estimates, contracts, forms & more. Download instantly.',
    type: 'website',
    url: 'https://truckrepairleads.com/resources/templates',
    images: ['/images/templates-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Truck Repair Shop Templates | Professional Forms',
    description: '50+ FREE professional templates for truck repair shops. Download instantly.',
  },
  alternates: {
    canonical: 'https://truckrepairleads.com/resources/templates',
  },
}

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
