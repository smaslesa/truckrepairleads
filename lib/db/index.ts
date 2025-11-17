import { neon } from '@neondatabase/serverless';

// Get the database URL from environment variables
const getDatabaseUrl = () => {
  const url = process.env.DATABASE_URL;
  if (!url && process.env.NODE_ENV === 'production') {
    throw new Error('DATABASE_URL is not set');
  }
  // Return a dummy URL for development if not set
  return url || 'postgresql://dummy:dummy@localhost/dummy';
};

// Create the SQL query function
export const sql = neon(getDatabaseUrl());

// Types for our database tables
export interface Shop {
  id: number;
  google_place_id: string;
  name: string;
  slug: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  latitude?: number;
  longitude?: number;
  phone?: string;
  website?: string;
  email?: string;
  rating?: number;
  review_count?: number;
  price_level?: number;
  hours_json?: Record<string, unknown>;
  services?: string[];
  certifications?: string[];
  insurance_partners?: string[];
  has_website?: boolean;
  website_quality_score?: number;
  runs_google_ads?: boolean;
  social_media_presence?: Record<string, unknown>;
  created_at?: Date;
  updated_at?: Date;
  last_scraped?: Date;
  data_source?: string;
}

export interface City {
  id: number;
  city: string;
  state: string;
  slug: string;
  population?: number;
  shop_count?: number;
  avg_rating?: number;
  metro_area?: string;
  created_at?: Date;
}

// Helper functions for common queries
export const db = {
  // Get all shops in a city
  async getShopsByCity(city: string, state: string): Promise<Shop[]> {
    const result = await sql`
      SELECT * FROM shops 
      WHERE LOWER(city) = LOWER(${city}) 
      AND state = ${state}
      ORDER BY rating DESC NULLS LAST, review_count DESC
    `;
    return result as Shop[];
  },

  // Get a single shop by slug
  async getShopBySlug(slug: string): Promise<Shop | null> {
    const result = await sql`
      SELECT * FROM shops 
      WHERE slug = ${slug}
      LIMIT 1
    `;
    return result[0] as Shop || null;
  },

  // Get shops without websites (leads)
  async getShopsWithoutWebsites(state?: string): Promise<Shop[]> {
    if (state) {
      const result = await sql`
        SELECT * FROM shops 
        WHERE has_website = false 
        AND state = ${state}
        ORDER BY review_count DESC
      `;
      return result as Shop[];
    }
    const result = await sql`
      SELECT * FROM shops 
      WHERE has_website = false 
      ORDER BY review_count DESC
    `;
    return result as Shop[];
  },

  // Get cities with shop counts
  async getCitiesWithShops(state?: string): Promise<City[]> {
    if (state) {
      const result = await sql`
        SELECT c.*, 
               COUNT(s.id) as shop_count,
               AVG(s.rating) as avg_rating
        FROM cities c
        LEFT JOIN shops s ON LOWER(s.city) = LOWER(c.city) AND s.state = c.state
        WHERE c.state = ${state}
        GROUP BY c.id
        ORDER BY c.population DESC
      `;
      return result as City[];
    }
    const result = await sql`
      SELECT c.*, 
             COUNT(s.id) as shop_count,
             AVG(s.rating) as avg_rating
      FROM cities c
      LEFT JOIN shops s ON LOWER(s.city) = LOWER(c.city) AND s.state = c.state
      GROUP BY c.id
      ORDER BY c.population DESC
    `;
    return result as City[];
  },

  // Insert or update a shop
  async upsertShop(shop: Partial<Shop>): Promise<Shop> {
    const result = await sql`
      INSERT INTO shops (
        google_place_id, name, slug, address, city, state, zip,
        latitude, longitude, phone, website, email, rating, review_count,
        price_level, hours_json, services, certifications, insurance_partners,
        has_website, website_quality_score, runs_google_ads, social_media_presence,
        last_scraped, data_source
      ) VALUES (
        ${shop.google_place_id}, ${shop.name}, ${shop.slug}, ${shop.address},
        ${shop.city}, ${shop.state}, ${shop.zip}, ${shop.latitude},
        ${shop.longitude}, ${shop.phone}, ${shop.website}, ${shop.email},
        ${shop.rating}, ${shop.review_count}, ${shop.price_level},
        ${shop.hours_json}, ${shop.services}, ${shop.certifications},
        ${shop.insurance_partners}, ${shop.has_website}, ${shop.website_quality_score},
        ${shop.runs_google_ads}, ${shop.social_media_presence},
        CURRENT_TIMESTAMP, ${shop.data_source || 'google_places'}
      )
      ON CONFLICT (google_place_id) 
      DO UPDATE SET
        name = EXCLUDED.name,
        address = EXCLUDED.address,
        phone = EXCLUDED.phone,
        website = EXCLUDED.website,
        rating = EXCLUDED.rating,
        review_count = EXCLUDED.review_count,
        hours_json = EXCLUDED.hours_json,
        has_website = EXCLUDED.has_website,
        last_scraped = CURRENT_TIMESTAMP,
        updated_at = CURRENT_TIMESTAMP
      RETURNING *
    `;
    return result[0] as Shop;
  },

  // Track lead interaction
  async trackInteraction(shopId: number, type: string, metadata?: Record<string, unknown>): Promise<void> {
    await sql`
      INSERT INTO lead_interactions (
        shop_id, interaction_type, user_ip, user_agent, referrer
      ) VALUES (
        ${shopId}, ${type}, ${metadata?.ip}, ${metadata?.userAgent}, ${metadata?.referrer}
      )
    `;
  }
};
