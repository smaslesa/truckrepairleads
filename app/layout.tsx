import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ConditionalLayout from "@/components/layout/ConditionalLayout";
import { ModalProvider } from "@/contexts/ModalContext";
import { Analytics } from "@vercel/analytics/next";
import AnalyticsInitializer from "@/components/analytics/AnalyticsInitializer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://truckrepairleads.com'),
  title: "Truck Repair Leads - #1 Digital Marketing for Truck Repair Shops | Dominate Google",
  description: "Transform your truck repair shop into the market leader. We help truck shops dominate Google, outrank competitors, and fill every bay with high-value fleet and commercial work. Proven ROI in 30 days.",
  keywords: "truck repair shop marketing, truck shop SEO, truck repair Google Ads, truck repair leads, commercial truck marketing, truck shop website design, truck repair shop growth, fleet service leads, truck repair marketing, truck shop advertising",
  authors: [{ name: "TruckRepairLeads" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Truck Repair Leads - #1 Digital Marketing for Truck Repair Shops",
    description: "Transform your truck repair shop into the market leader. Dominate Google, outrank competitors, and fill every bay with high-value work.",
    type: "website",
    locale: "en_US",
    siteName: "TruckRepairLeads",
    url: "https://truckrepairleads.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "TruckRepairLeads - #1 Digital Marketing for Truck Repair Shops",
    description: "Transform your truck repair shop into the market leader. Dominate Google and fill every bay with high-value work.",
    creator: "@truckrepairleads",
  },
  alternates: {
    canonical: "https://truckrepairleads.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TruckRepairLeads",
              "description": "Digital marketing agency specializing in truck repair shop and commercial vehicle service marketing",
              "url": "https://truckrepairleads.com",
              "logo": "https://truckrepairleads.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-702-900-0265",
                "contactType": "sales",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Las Vegas",
                "addressRegion": "NV",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://www.linkedin.com/company/truckrepairleads",
                "https://www.facebook.com/truckrepairleads"
              ],
              "offers": {
                "@type": "Offer",
                "description": "Digital marketing services for truck repair shops",
                "category": "Marketing Services"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17488562277"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17488562277');
          `}
        </Script>

        {/* Google Ads Phone Call Conversion - Forwarding Number */}
        <Script id="google-phone-conversion" strategy="afterInteractive">
          {`
            gtag('config', 'AW-17488562277/kD_qCLbHrbMbEOWQmZNB', {
              'phone_conversion_number': '(702) 900-0265'
            });
          `}
        </Script>
        
        <AnalyticsInitializer />
        <ModalProvider>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </ModalProvider>
        <Analytics />
      </body>
    </html>
  );
}
