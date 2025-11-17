import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://truckrepairleads.com'

  return {
    rules: [
      // Allow all bots to crawl everything
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/private/',
          '/_next/',
          '/api/',
        ],
      },
      // Special rules for Googlebot
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1,
      },
      // Allow Google's image crawler
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      // Allow Google's mobile crawler
      {
        userAgent: 'Googlebot-Mobile',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
