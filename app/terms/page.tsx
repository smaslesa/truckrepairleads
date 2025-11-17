import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Terms of Service | TruckRepairLeads Truck Repair Shop Marketing",
  description: "Terms of Service for TruckRepairLeads truck repair shop marketing services, website design, SEO, and Google Ads management. Read our service terms and conditions.",
  keywords: "terms of service, service agreement, truck repair marketing terms, truck repair website terms",
  openGraph: {
    title: "Terms of Service | TruckRepairLeads Truck Repair Shop Marketing",
    description: "Terms of Service for TruckRepairLeads truck repair shop marketing services. Read our service terms and conditions.",
    type: "website",
    url: "https://truckrepairleads.com/terms",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | TruckRepairLeads",
    description: "Terms of Service for TruckRepairLeads truck repair shop marketing services.",
  },
  alternates: {
    canonical: "https://truckrepairleads.com/terms",
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-black text-navy mb-8">Terms of Service</h1>
          <p className="text-lg text-gunmetal mb-12">
            Last updated: August 17, 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">1. Agreement to Terms</h2>
              <p className="text-gunmetal leading-relaxed mb-4">
                By accessing and using Truck Repair Shop Leads (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <p className="text-gunmetal leading-relaxed">
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">2. Use License</h2>
              <p className="text-gunmetal leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on Truck Repair Shop Leads&apos; website for personal, non-commercial transitory viewing only.
              </p>
              <p className="text-gunmetal leading-relaxed mb-4">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc pl-8 text-gunmetal space-y-2">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">3. Website Services</h2>
              <p className="text-gunmetal leading-relaxed mb-4">
                Truck Repair Shop Leads provides truck repair website templates and lead generation services. We offer:
              </p>
              <ul className="list-disc pl-8 text-gunmetal space-y-2">
                <li>Premium website templates for truck repair businesses</li>
                <li>Lead capture and management tools</li>
                <li>Instant estimate calculators</li>
                <li>Customer communication systems</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">4. User Data and Submissions</h2>
              <p className="text-gunmetal leading-relaxed mb-4">
                When you submit information through our forms, including but not limited to:
              </p>
              <ul className="list-disc pl-8 text-gunmetal space-y-2 mb-4">
                <li>Contact information (name, phone, email)</li>
                <li>Vehicle information</li>
                <li>Damage photos and descriptions</li>
                <li>Insurance details</li>
              </ul>
              <p className="text-gunmetal leading-relaxed mb-4">
                You grant us permission to use this information to provide our services, including connecting you with truck repair professionals.
              </p>
              <p className="text-gunmetal leading-relaxed">
                We will delete your personal information upon request or after a reasonable period as outlined in our Privacy Policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">5. Disclaimer</h2>
              <p className="text-gunmetal leading-relaxed mb-4">
                The materials on Truck Repair Shop Leads&apos; website are provided on an &apos;as is&apos; basis. Truck Repair Shop Leads makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">6. Limitations</h2>
              <p className="text-gunmetal leading-relaxed">
                In no event shall Truck Repair Shop Leads or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Truck Repair Shop Leads&apos; website, even if Truck Repair Shop Leads or a Truck Repair Shop Leads authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">7. Accuracy of Materials</h2>
              <p className="text-gunmetal leading-relaxed">
                The materials appearing on Truck Repair Shop Leads&apos; website could include technical, typographical, or photographic errors. Truck Repair Shop Leads does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">8. Links</h2>
              <p className="text-gunmetal leading-relaxed">
                Truck Repair Shop Leads has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Truck Repair Shop Leads of the site.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">9. Modifications</h2>
              <p className="text-gunmetal leading-relaxed">
                Truck Repair Shop Leads may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">10. Contact Information</h2>
              <p className="text-gunmetal leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-off-white p-6 rounded-xl mt-4">
                <p className="text-navy font-semibold">Email: hello@truckrepairleads.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
