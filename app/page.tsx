import { Metadata } from 'next'
import CleanDominanceHero from '@/components/homepage-v4/CleanDominanceHero'
import WebsiteDemoSection from '@/components/homepage-v4/WebsiteDemoSection'
import MarketAnalysisCTA from '@/components/homepage-v4/MarketAnalysisCTA'
import VisualFeatures from '@/components/homepage-v2/VisualFeatures'
import WhyUs from '@/components/homepage-v2/WhyUs'
import FinalCTAV2 from '@/components/homepage-v2/FinalCTAV2'

export const metadata: Metadata = {
  title: 'Truck Repair Shop Marketing Platform | Websites, Google Ads & Local SEO',
  description: 'Be the first truck repair shop customers call in your city. See your market opportunity and dominate local search.',
}

export default function Home() {
  return (
    <>
      <CleanDominanceHero />
      <WebsiteDemoSection />
      <MarketAnalysisCTA />
      <VisualFeatures />
      <WhyUs />
      <FinalCTAV2 />
    </>
  )
}
