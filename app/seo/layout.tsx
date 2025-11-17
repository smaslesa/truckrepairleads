import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Truck Repair Shop SEO | Truck Repair SEO Services | Dominate Google | TruckRepairLeads",
  description: "Professional SEO for truck repair shops. Rank #1 on Google for 'truck repair shop near me' and truck repair searches. Proven results, more customers. Free SEO audit included.",
  keywords: "truck repair shop SEO, truck repair SEO, truck repair shop Google ranking, truck repair marketing, local SEO for truck repair shops, truck repair center SEO, truck SEO services, truck repair shop lead generation",
  openGraph: {
    title: "Truck Repair Shop SEO | Truck Repair SEO Services | Dominate Google",
    description: "Professional SEO for truck repair shops. Rank #1 on Google for 'truck repair shop near me' and truck repair searches. Proven results, more customers.",
    type: "website",
    url: "https://truckrepairleads.com/seo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Truck Repair Shop SEO | Truck Repair SEO Services | Dominate Google",
    description: "Professional SEO for truck repair shops. Rank #1 on Google for truck repair searches. Proven results.",
  },
  alternates: {
    canonical: "https://truckrepairleads.com/seo",
  },
}

export default function SEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
