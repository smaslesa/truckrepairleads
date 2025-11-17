import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Truck Repair Shop Review Management | Get More 5-Star Reviews | Response Templates',
  description: 'Get more 5-star reviews for your truck repair shop with FREE review management tools. Request templates, response scripts, automation guides & damage control strategies. Download instantly.',
  keywords: 'truck repair shop reviews, truck repair reviews, Google My Business reviews, truck repair shop reputation management, truck repair review templates, truck repair customer reviews, review response templates, truck repair shop review automation, truck repair online reputation',
  openGraph: {
    title: 'Free Truck Repair Shop Review Management | Get More 5-Star Reviews',
    description: 'Get more 5-star reviews with FREE review management tools. Templates, scripts & automation guides.',
    type: 'website',
    url: 'https://truckrepairleads.com/resources/reviews',
    images: ['/images/reviews-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Truck Repair Shop Review Management',
    description: 'Get more 5-star reviews with FREE review management tools.',
  },
  alternates: {
    canonical: 'https://truckrepairleads.com/resources/reviews',
  },
}

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}







