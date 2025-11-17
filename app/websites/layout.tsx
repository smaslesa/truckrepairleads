import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Truck Repair Shop Website Design | Premium Websites That Convert | TruckRepairLeads",
  description: "Professional truck repair shop websites that convert visitors into customers. Mobile-optimized, SEO-ready truck repair websites with proven lead generation features. See live demos.",
  keywords: "truck repair shop website design, truck repair websites, truck repair shop web design, truck website development, truck repair marketing websites, truck repair center web design, truck repair shop online presence",
  openGraph: {
    title: "Truck Repair Shop Website Design | Premium Websites That Convert",
    description: "Professional truck repair shop websites that convert visitors into customers. Mobile-optimized, SEO-ready designs with proven results.",
    type: "website",
    url: "https://truckrepairleads.com/websites",
  },
  twitter: {
    card: "summary_large_image",
    title: "Truck Repair Shop Website Design | Premium Websites That Convert",
    description: "Professional truck repair shop websites that convert visitors into customers. Mobile-optimized, SEO-ready designs.",
  },
  alternates: {
    canonical: "https://truckrepairleads.com/websites",
  },
}

export default function WebsitesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
