import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Privacy Policy | TruckRepairLeads Truck Repair Shop Marketing",
  description: "Privacy Policy for TruckRepairLeads truck repair shop marketing services, website design, SEO, and Google Ads management. Your data protection and privacy matter to us.",
  keywords: "privacy policy, data protection, truck repair marketing privacy, truck repair website privacy",
  openGraph: {
    title: "Privacy Policy | TruckRepairLeads Truck Repair Shop Marketing",
    description: "Privacy Policy for TruckRepairLeads truck repair shop marketing services. Your data protection and privacy matter to us.",
    type: "website",
    url: "https://truckrepairleads.com/privacy",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | TruckRepairLeads",
    description: "Privacy Policy for TruckRepairLeads truck repair shop marketing services.",
  },
  alternates: {
    canonical: "https://truckrepairleads.com/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-black text-navy mb-8">Privacy Policy</h1>
          <p className="text-lg text-gunmetal mb-12">
            Last updated: August 17, 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">1. Information We Collect</h2>
              <p className="text-gunmetal leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-8 text-gunmetal space-y-2 mb-4">
                <li>Fill out contact forms or request estimates</li>
                <li>Submit photos of vehicle damage</li>
                <li>Provide vehicle information (year, make, model)</li>
                <li>Share contact details (name, phone, email)</li>
                <li>Describe collision damage or repair needs</li>
              </ul>
              <p className="text-gunmetal leading-relaxed">
                This information is used solely to connect you with qualified truck repair professionals and provide accurate estimates.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">2. Analytics and Tracking</h2>
              <p className="text-gunmetal leading-relaxed mb-4">
                To improve our website and services, we use the following tracking technologies:
              </p>
              
              <div className="bg-blue/5 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold text-navy mb-4">Google Analytics</h3>
                <p className="text-gunmetal leading-relaxed mb-2">
                  We use Google Analytics to understand how visitors interact with our website. This includes:
                </p>
                <ul className="list-disc pl-6 text-gunmetal space-y-1">
                  <li>Pages visited and time spent</li>
                  <li>Geographic location (city/state level)</li>
                  <li>Device and browser information</li>
                  <li>Traffic sources and referrals</li>
                </ul>
              </div>

              <div className="bg-red/5 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold text-navy mb-4">Google Search Console</h3>
                <p className="text-gunmetal leading-relaxed">
                  We use Google Search Console to monitor our website&apos;s performance in search results and identify technical issues.
                </p>
              </div>

              <div className="bg-gold/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-navy mb-4">Marketing Tags and Pixels</h3>
                <p className="text-gunmetal leading-relaxed mb-2">
                  We may use marketing tags and pixels from platforms like:
                </p>
                <ul className="list-disc pl-6 text-gunmetal space-y-1">
                  <li>Google Ads for conversion tracking</li>
                  <li>Facebook Pixel for audience insights</li>
                  <li>Other advertising platforms to measure campaign effectiveness</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">3. How We Use Your Information</h2>
              <p className="text-gunmetal leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-8 text-gunmetal space-y-2">
                <li>Provide truck repair estimates and connect you with qualified shops</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website functionality and user experience</li>
                <li>Send you relevant information about truck repair services</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">4. Information Sharing</h2>
              <p className="text-gunmetal leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-8 text-gunmetal space-y-2 mb-4">
                <li><strong>Truck Repair Shops:</strong> To provide you with estimates and services</li>
                <li><strong>Service Providers:</strong> Third-party companies that help us operate our website</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
              <p className="text-gunmetal leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">5. Data Security</h2>
              <p className="text-gunmetal leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">6. Data Retention and Deletion</h2>
              <p className="text-gunmetal leading-relaxed mb-4">
                We retain your personal information only as long as necessary to provide our services and comply with legal obligations.
              </p>
              <div className="bg-green/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-navy mb-4">Your Right to Deletion</h3>
                <p className="text-gunmetal leading-relaxed mb-2">
                  You have the right to request deletion of your personal information. We will delete your data when:
                </p>
                <ul className="list-disc pl-6 text-gunmetal space-y-1">
                  <li>You request deletion via email to hello@truckrepairleads.com</li>
                  <li>The information is no longer needed for our services</li>
                  <li>After 2 years of inactivity (automatic deletion)</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">7. Cookies and Tracking</h2>
              <p className="text-gunmetal leading-relaxed mb-4">
                Our website uses cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-8 text-gunmetal space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and advertisements</li>
                <li>Measure the effectiveness of our marketing campaigns</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">8. Third-Party Services</h2>
              <p className="text-gunmetal leading-relaxed mb-4">
                Our website integrates with third-party services that have their own privacy policies:
              </p>
              <ul className="list-disc pl-8 text-gunmetal space-y-2">
                <li><strong>Google Analytics:</strong> <a href="https://policies.google.com/privacy" className="text-blue hover:text-red">Google Privacy Policy</a></li>
                <li><strong>Google Ads:</strong> <a href="https://policies.google.com/technologies/ads" className="text-blue hover:text-red">Google Ads Privacy</a></li>
                <li><strong>Vercel (Hosting):</strong> <a href="https://vercel.com/legal/privacy-policy" className="text-blue hover:text-red">Vercel Privacy Policy</a></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">9. Your Rights</h2>
              <p className="text-gunmetal leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-8 text-gunmetal space-y-2">
                <li>Access the personal information we have about you</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Restrict processing of your information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">10. Children&apos;s Privacy</h2>
              <p className="text-gunmetal leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">11. Changes to This Policy</h2>
              <p className="text-gunmetal leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">12. Contact Us</h2>
              <p className="text-gunmetal leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or want to exercise your rights, please contact us:
              </p>
              <div className="bg-navy/5 p-8 rounded-xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-3">General Inquiries</h3>
                    <p className="text-gunmetal">
                      <strong>Email:</strong> hello@truckrepairleads.com
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-3">Data Deletion Requests</h3>
                    <p className="text-gunmetal">
                      <strong>Email:</strong> hello@truckrepairleads.com<br/>
                      <strong>Subject:</strong> &quot;Data Deletion Request&quot;
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
