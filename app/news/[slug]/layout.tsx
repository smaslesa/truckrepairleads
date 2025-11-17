import type { Metadata } from 'next'

// This would typically come from a CMS or database
const getBlogPostMetadata = (slug: string) => {
  const posts = {
    '2024-auto-body-shop-trends': {
      title: '2024 Truck Repair Shop Trends: What\'s Driving Success | Industry Analysis | BodyShop Leads',
      description: 'Discover the 5 key trends driving truck repair shop success in 2024. Industry analysis based on truck repair data, digital transformation insights, and proven business strategies.',
      keywords: '2024 truck repair shop trends, truck repair industry trends, truck repair shop business success, truck repair digital transformation, truck repair industry analysis, truck repair shop growth strategies 2024',
      url: 'https://truckrepairleads.com/news/2024-auto-body-shop-trends'
    },
    'google-my-business-auto-body-shops-guide': {
      title: 'Google My Business for Truck Repair Shops: Complete 2024 Optimization Guide | Local SEO',
      description: 'Complete Google My Business optimization guide for truck repair shops. Proven strategies to improve local search rankings, get more reviews, and attract customers in 2024.',
      keywords: 'Google My Business truck repair shop, GMB optimization truck repair, local SEO truck repair shop, Google My Business guide truck repair, truck repair local search, truck repair shop Google optimization',
      url: 'https://truckrepairleads.com/news/google-my-business-auto-body-shops-guide'
    },
    'fast-websites-body-shops-data': {
      title: 'Why Fast Websites Matter for Truck Repair Shops: Performance Data Analysis | Website Speed',
      description: 'Real data on how website speed affects truck repair shop lead generation. Analysis of 500+ truck repair websites shows sites under 2 seconds get significantly more conversions.',
      keywords: 'fast websites truck repair shops, website speed truck repair, truck repair shop website performance, truck repair site optimization, truck repair website speed, mobile website truck repair shops',
      url: 'https://truckrepairleads.com/news/fast-websites-body-shops-data'
    }
  }
  
  return posts[slug as keyof typeof posts]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const metadata = getBlogPostMetadata(slug)
  
  if (!metadata) {
    return {
      title: 'Article Not Found | BodyShop Leads',
      description: 'The requested article could not be found.'
    }
  }
  
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'article',
      url: metadata.url,
      images: ['/images/blog-og.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
    },
    alternates: {
      canonical: metadata.url,
    },
  }
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
