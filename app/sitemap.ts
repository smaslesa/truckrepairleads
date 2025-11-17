import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog-data'
import { sql } from '@/lib/db'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://truckrepairleads.com'
  const currentDate = new Date().toISOString().split('T')[0] // YYYY-MM-DD format

  // Get dynamic routes from database
  const states = ['CA', 'TX', 'FL', 'NV'] // Available states
  const dynamicRoutes: MetadataRoute.Sitemap = []

  try {
    // Add state pages
    for (const state of states) {
      dynamicRoutes.push({
        url: `${baseUrl}/shops/${state.toLowerCase()}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.9,
      })

      // Get cities for each state
      const cities = await sql`
        SELECT DISTINCT city, state 
        FROM shops 
        WHERE state = ${state}
        ORDER BY city
      `

      // Add city pages
      for (const city of cities) {
        const citySlug = city.city.toLowerCase().replace(/\s+/g, '-')
        dynamicRoutes.push({
          url: `${baseUrl}/shops/${state.toLowerCase()}/${citySlug}`,
          lastModified: currentDate,
          changeFrequency: 'weekly',
          priority: 0.8,
        })

        // Get ALL shops for each city (no limit - include everything!)
        const shops = await sql`
          SELECT slug FROM shops 
          WHERE LOWER(city) = LOWER(${city.city}) AND state = ${state}
          ORDER BY rating DESC NULLS LAST, review_count DESC
        `

        // Add individual shop pages
        for (const shop of shops) {
          dynamicRoutes.push({
            url: `${baseUrl}/shops/${state.toLowerCase()}/${citySlug}/${shop.slug}`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
          })
        }
      }
    }
  } catch (error) {
    console.error('Error generating dynamic sitemap routes:', error)
  }

  // Get blog posts
  const blogPosts = getAllPosts()
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map(post => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    // Homepage - Highest Priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    
    // Main Service Pages - High Priority (Revenue Generators)
    {
      url: `${baseUrl}/websites`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/seo`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/google-ads`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/vin-decoder`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Shop Directory - High Priority
    {
      url: `${baseUrl}/shops`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // Content Pages
    {
      url: `${baseUrl}/news`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    
    // Free Resources - SEO Traffic Drivers
    {
      url: `${baseUrl}/resources`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/slogans`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resources/marketing-ideas`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resources/calculators`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resources/guides`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resources/success-stories`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resources/templates`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resources/print-materials`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resources/insurance-tools`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resources/phone-scripts`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resources/reviews`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resources/competitor-analysis`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resources/quick-estimate`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resources/campaigns`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    
    // Demo Templates - Showcase Work
    {
      url: `${baseUrl}/luxury`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/american`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/modern`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    
    // Legal Pages - Lower Priority but Still Important
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },

    // Dynamic Routes - States, Cities, and Shops
    ...dynamicRoutes,

    // Blog/News Articles
    ...blogRoutes,
  ]
}
