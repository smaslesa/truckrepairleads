import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Google Ads for Truck Repair Shops | Truck Repair PPC Management | TruckRepairLeads",
  description: "Expert Google Ads management for truck repair shops. Get more truck repair leads with targeted PPC campaigns. Average 400% ROI. Free Google Ads audit & strategy call.",
  keywords: "Google Ads for truck repair shops, truck repair PPC, truck repair Google Ads, truck repair shop advertising, truck repair lead generation, truck repair center PPC, truck Google Ads management",
  openGraph: {
    title: "Google Ads for Truck Repair Shops | Truck Repair PPC Management",
    description: "Expert Google Ads management for truck repair shops. Get more truck repair leads with targeted PPC campaigns. Average 400% ROI.",
    type: "website",
    url: "https://truckrepairleads.com/google-ads",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads for Truck Repair Shops | Truck Repair PPC Management",
    description: "Expert Google Ads management for truck repair shops. Get more truck repair leads with targeted campaigns.",
  },
  alternates: {
    canonical: "https://truckrepairleads.com/google-ads",
  },
}

export default function GoogleAdsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
