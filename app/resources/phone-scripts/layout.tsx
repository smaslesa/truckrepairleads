import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Truck Repair Shop Phone Scripts | Convert More Calls to Appointments | 67% Average Conversion',
  description: 'Convert more calls with proven phone scripts for truck repair shops. FREE word-for-word scripts for estimates, follow-ups, objections & appointments. 67% average conversion rate. Download instantly.',
  keywords: 'truck repair shop phone scripts, truck repair phone scripts, truck repair shop sales scripts, truck repair customer service scripts, phone sales training, truck repair phone calls, truck repair shop appointment booking, truck repair objection handling, phone conversion scripts',
  openGraph: {
    title: 'Free Truck Repair Shop Phone Scripts | Convert More Calls',
    description: 'Convert more calls with proven phone scripts. FREE word-for-word scripts with 67% conversion rate.',
    type: 'website',
    url: 'https://truckrepairleads.com/resources/phone-scripts',
    images: ['/images/phone-scripts-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Truck Repair Shop Phone Scripts',
    description: 'Convert more calls with proven phone scripts for truck repair shops.',
  },
  alternates: {
    canonical: 'https://truckrepairleads.com/resources/phone-scripts',
  },
}

export default function PhoneScriptsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}







