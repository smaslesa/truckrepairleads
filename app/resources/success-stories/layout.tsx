import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Truck Repair Shop Success Stories | Real Case Studies & Results | See What\'s Possible',
  description: 'Get inspired by real truck repair shop success stories. See how shops increased revenue 40-300% with proven strategies. Before/after case studies, growth metrics & actionable takeaways.',
  keywords: 'truck repair shop success stories, truck repair case studies, truck repair shop growth stories, truck repair business success, truck repair center success stories, truck repair shop transformation, auto repair success cases, truck repair business growth, truck repair shop revenue increase',
  openGraph: {
    title: 'Truck Repair Shop Success Stories | Real Case Studies & Results',
    description: 'Get inspired by real success stories. See how shops increased revenue 40-300% with proven strategies.',
    type: 'website',
    url: 'https://truckrepairleads.com/resources/success-stories',
    images: ['/images/success-stories-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Truck Repair Shop Success Stories',
    description: 'Get inspired by real truck repair shop success stories and case studies.',
  },
  alternates: {
    canonical: 'https://truckrepairleads.com/resources/success-stories',
  },
}

export default function SuccessStoriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

