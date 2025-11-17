import { Client } from '@googlemaps/google-maps-services-js';
import { db, Shop } from '../db';

const client = new Client({});

// Western states configuration
export const WESTERN_STATES = {
  NV: { name: 'Nevada', cities: ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas', 'Sparks', 'Carson City', 'Fernley', 'Elko', 'Mesquite', 'Boulder City'] },
  CA: { name: 'California', cities: ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno', 'Sacramento', 'Long Beach', 'Oakland', 'Bakersfield', 'Anaheim', 'Santa Ana', 'Riverside', 'Stockton', 'Irvine', 'Chula Vista', 'Fremont', 'San Bernardino', 'Modesto', 'Fontana', 'Oxnard', 'Santa Clarita', 'Moreno Valley', 'Huntington Beach', 'Glendale', 'Santa Rosa', 'Elk Grove', 'Ontario', 'Oceanside', 'Rancho Cucamonga', 'Lancaster', 'Garden Grove', 'Corona', 'Palmdale', 'Salinas', 'Hayward', 'Sunnyvale', 'Pomona', 'Escondido', 'Roseville', 'Torrance', 'Fullerton', 'Visalia', 'Orange', 'Pasadena', 'Victorville', 'Concord', 'Santa Clara', 'Thousand Oaks', 'Simi Valley', 'Vallejo', 'Clovis', 'Fairfield', 'Richmond', 'Antioch', 'Carlsbad', 'Downey', 'Costa Mesa', 'Murrieta', 'Ventura', 'Temecula', 'Santa Maria', 'West Covina', 'El Monte', 'Inglewood', 'Burbank', 'El Cajon', 'San Mateo', 'Daly City', 'Rialto', 'Norwalk'] },
  TX: { name: 'Texas', cities: ['Houston', 'San Antonio', 'Dallas', 'Austin', 'Fort Worth', 'El Paso', 'Arlington', 'Corpus Christi', 'Plano', 'Lubbock', 'Laredo', 'Irving', 'Garland', 'Frisco', 'McKinney', 'Grand Prairie', 'Amarillo', 'Brownsville', 'Killeen', 'Pasadena', 'Mesquite', 'McAllen', 'Waco', 'Carrollton', 'Denton', 'Midland', 'Abilene', 'Beaumont', 'Round Rock', 'The Woodlands', 'Richardson', 'Lewisville', 'Tyler', 'College Station', 'Wichita Falls', 'Allen', 'San Angelo', 'Edinburg', 'Sugar Land', 'Mission', 'Conroe', 'Bryan', 'New Braunfels', 'Pharr', 'Longview', 'Baytown', 'League City', 'Missouri City', 'Temple', 'Flower Mound'] },
  AZ: { name: 'Arizona', cities: ['Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Scottsdale', 'Glendale', 'Gilbert', 'Tempe', 'Peoria', 'Surprise'] },
  WA: { name: 'Washington', cities: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue', 'Kent', 'Everett', 'Renton', 'Federal Way', 'Yakima'] },
  OR: { name: 'Oregon', cities: ['Portland', 'Eugene', 'Salem', 'Gresham', 'Hillsboro', 'Beaverton', 'Bend', 'Medford', 'Springfield', 'Corvallis'] },
  UT: { name: 'Utah', cities: ['Salt Lake City', 'West Valley City', 'West Jordan', 'Provo', 'Sandy', 'Orem', 'Ogden', 'St. George', 'Layton', 'South Jordan'] },
  ID: { name: 'Idaho', cities: ['Boise', 'Meridian', 'Nampa', 'Idaho Falls', 'Pocatello', 'Caldwell', 'Coeur d\'Alene', 'Twin Falls', 'Lewiston', 'Post Falls'] },
  HI: { name: 'Hawaii', cities: ['Honolulu', 'Pearl City', 'Hilo', 'Kailua', 'Waipahu', 'Kaneohe', 'Mililani', 'Kahului', 'Kihei', 'Lihue'] },
  AK: { name: 'Alaska', cities: ['Anchorage', 'Fairbanks', 'Juneau', 'Sitka', 'Ketchikan', 'Wasilla', 'Kenai', 'Kodiak', 'Bethel', 'Palmer'] }
};

// Search terms for collision shops - expanded for better coverage
const SEARCH_TERMS = [
  'truck repair shop',
  'truck repair',
  'truck repair center',
  'truck repair repair',
  'paintless dent repair',
  'auto paint shop',
  'frame straightening',
  'insurance approved truck repair shop',
  'car body repair',
  'vehicle truck repair',
  'auto collision',
  'body and paint',
  'dent repair',
  'bumper repair',
  'accident repair'
];

// Generate slug from shop name and city
function generateSlug(name: string, city: string, state: string): string {
  const combined = `${name}-${city}-${state}`.toLowerCase();
  return combined
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Parse Google opening hours to our format
interface OpeningHours {
  [key: string]: string | { open: string; close: string };
}

interface Period {
  open?: { day: number; time: string };
  close?: { day: number; time: string };
}

function parseOpeningHours(periods: Period[], weekdayText?: string[]): OpeningHours | null {
  if (!periods && !weekdayText) return null;
  
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const hours: OpeningHours = {};
  
  // Try to parse from periods first (more structured)
  if (periods && periods.length > 0) {
    // Initialize all days as closed
    days.forEach(day => {
      hours[day] = 'Closed';
    });
    
    periods.forEach(period => {
      if (period.open) {
        const dayName = days[period.open.day];
        if (dayName) {
          const openTime = period.open.time ? 
            `${period.open.time.slice(0, 2)}:${period.open.time.slice(2)}` : null;
          const closeTime = period.close?.time ? 
            `${period.close.time.slice(0, 2)}:${period.close.time.slice(2)}` : null;
          
          hours[dayName] = {
            open: openTime,
            close: closeTime
          };
        }
      }
    });
  } else if (weekdayText && weekdayText.length > 0) {
    // Fallback to parsing weekday_text if periods not available
    // weekday_text format: ["Monday: 8:00 AM – 5:00 PM", "Tuesday: Closed", ...]
    days.forEach(day => {
      hours[day] = { open: null, close: null };
    });
  }
  
  return hours;
}

// Extract services from Google types
function extractServices(types: string[]): string[] {
  const serviceMap: { [key: string]: string } = {
    'car_repair': 'General Auto Repair',
    'car_dealer': 'Dealership Services',
    'car_wash': 'Car Wash',
    'store': 'Parts & Supplies',
    'point_of_interest': 'Truck Repair',
  };
  
  const services = types
    .map(type => serviceMap[type])
    .filter(Boolean);
  
  // Add default collision services
  services.push(
    'Truck Repair',
    'Truck Repair Repair',
    'Paint Services',
    'Dent Removal',
    'Frame Straightening',
    'Insurance Claims'
  );
  
  return [...new Set(services)];
}

// Test database connection before scraping
async function testDatabaseConnection(): Promise<boolean> {
  try {
    const testShop = {
      google_place_id: 'test_connection_' + Date.now(),
      name: 'Test Connection Shop',
      slug: 'test-connection-shop',
      city: 'Test',
      state: 'TEST'
    };
    
    // Try to insert and immediately delete a test record
    await db.upsertShop(testShop);
    await sql`DELETE FROM shops WHERE google_place_id = ${testShop.google_place_id}`;
    return true;
  } catch (error) {
    console.error('❌ DATABASE CONNECTION TEST FAILED:', error.message);
    return false;
  }
}

// Scrape shops for a specific city
export async function scrapeCity(city: string, state: string): Promise<Shop[]> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    throw new Error('GOOGLE_MAPS_API_KEY is required');
  }

  // Test database connection BEFORE making any API calls
  console.log(`🔍 Testing database connection before scraping ${city}, ${state}...`);
  const dbConnected = await testDatabaseConnection();
  if (!dbConnected) {
    throw new Error(`❌ DATABASE CONNECTION FAILED - STOPPING TO PROTECT API BUDGET. Fix database connection before scraping.`);
  }
  console.log(`✅ Database connection verified`);

  console.log(`🔍 Scraping ${city}, ${state}...`);
  
  const allShops = new Map<string, Shop>();
  
  // Search with different terms to get comprehensive results
  for (const searchTerm of SEARCH_TERMS) {
    try {
      let pageToken: string | undefined = undefined;
      let pageCount = 0;
      const maxPages = 3; // Google allows max 3 pages (60 results per search term)
      
      do {
        // Text search for shops
        const searchResponse = await client.textSearch({
          params: {
            query: `${searchTerm} in ${city}, ${state}`,
            key: apiKey,
            pagetoken: pageToken,
          },
        });
        
        const places = searchResponse.data.results || [];
        console.log(`  Found ${places.length} results for "${searchTerm}" (page ${pageCount + 1})`);
        
        // Get detailed information for each place
        for (const place of places) {
          if (allShops.has(place.place_id)) continue; // Skip duplicates
          
          try {
            // Get full details
            const detailsResponse = await client.placeDetails({
              params: {
                place_id: place.place_id,
                fields: 'name,formatted_address,formatted_phone_number,website,rating,user_ratings_total,opening_hours,geometry,business_status',
                key: apiKey,
              },
            });
            
            const details = detailsResponse.data.result;
            
            // Skip if closed permanently
            if (details.business_status === 'CLOSED_PERMANENTLY') continue;
            
            // Parse address components
            const addressParts = details.formatted_address?.split(',') || [];
            const zipMatch = addressParts[addressParts.length - 2]?.match(/\d{5}/);
            
            const shop: Shop = {
              id: 0, // Will be assigned by database
              google_place_id: place.place_id,
              name: details.name || '',
              slug: generateSlug(details.name || '', city, state),
              address: details.formatted_address,
              city: city,
              state: state,
              zip: zipMatch ? zipMatch[0] : undefined,
              latitude: details.geometry?.location?.lat,
              longitude: details.geometry?.location?.lng,
              phone: details.formatted_phone_number,
              website: details.website,
              email: undefined, // Will need to extract from website later
              rating: details.rating,
              review_count: details.user_ratings_total,
              price_level: details.price_level,
              hours_json: parseOpeningHours(
                details.opening_hours?.periods,
                details.opening_hours?.weekday_text
              ),
              opening_hours: details.opening_hours,
              formatted_address: details.formatted_address,
              maps_url: details.url,
              vicinity: details.vicinity,
              services: extractServices(details.types || []),
              certifications: [], // Will enhance later
              insurance_partners: [], // Will extract from reviews/website
              has_website: !!details.website,
              website_quality_score: undefined, // Will analyze later
              runs_google_ads: false, // Will check later
              social_media_presence: {}, // Will enhance later
              photos: undefined, // Photos would require separate API call
              reviews: undefined, // Reviews would require separate API call
              data_source: 'google_places'
            };
            
            allShops.set(place.place_id, shop);
            
            // Small delay to respect rate limits
            await new Promise(resolve => setTimeout(resolve, 100));
            
          } catch (error) {
            console.error(`  Error fetching details for ${place.name}:`, error);
          }
        }
      
      // Get next page token and wait before next request
      pageToken = searchResponse.data.next_page_token;
      pageCount++;
      
      if (pageToken && pageCount < maxPages) {
        // Google requires a short delay before using next_page_token
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
    } while (pageToken && pageCount < maxPages);
      
      // Delay between search terms
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.error(`  Error searching "${searchTerm}":`, error);
    }
  }
  
  console.log(`✅ Found ${allShops.size} unique shops in ${city}, ${state}`);
  
  // Save to database with fail-fast protection
  const savedShops: Shop[] = [];
  let consecutiveFailures = 0;
  const maxFailures = 3; // Stop after 3 consecutive database failures
  
  for (const shop of allShops.values()) {
    try {
      const saved = await db.upsertShop(shop);
      savedShops.push(saved);
      consecutiveFailures = 0; // Reset failure count on success
    } catch (error) {
      consecutiveFailures++;
      console.error(`  Error saving shop ${shop.name}:`, error.message);
      
      if (consecutiveFailures >= maxFailures) {
        console.error(`\n❌ CRITICAL: ${maxFailures} consecutive database failures detected!`);
        console.error(`❌ STOPPING SCRAPE TO PROTECT API BUDGET`);
        console.error(`❌ Fix database connection before continuing`);
        throw new Error(`Database connection failed ${maxFailures} times - stopping to prevent API budget waste`);
      }
    }
  }
  
  return savedShops;
}

// Scrape all cities in a state
export async function scrapeState(stateCode: string): Promise<number> {
  const state = WESTERN_STATES[stateCode as keyof typeof WESTERN_STATES];
  if (!state) {
    throw new Error(`Invalid state code: ${stateCode}`);
  }
  
  console.log(`\n🏁 Starting scrape for ${state.name} (${stateCode})`);
  console.log(`  Cities to scrape: ${state.cities.length}`);
  
  let totalShops = 0;
  
  for (const city of state.cities) {
    const shops = await scrapeCity(city, stateCode);
    totalShops += shops.length;
    
    // Longer delay between cities
    await new Promise(resolve => setTimeout(resolve, 5000));
  }
  
  console.log(`\n✅ Completed ${state.name}: ${totalShops} total shops`);
  return totalShops;
}

// Scrape all western states
export async function scrapeAllWesternStates(): Promise<void> {
  console.log('🚀 Starting Western US collision shop scraping...');
  console.log(`  States: ${Object.keys(WESTERN_STATES).join(', ')}`);
  
  const results: { [key: string]: number } = {};
  
  for (const stateCode of Object.keys(WESTERN_STATES)) {
    try {
      const count = await scrapeState(stateCode);
      results[stateCode] = count;
      
      // Delay between states
      await new Promise(resolve => setTimeout(resolve, 10000));
    } catch (error) {
      console.error(`Error scraping ${stateCode}:`, error);
      results[stateCode] = 0;
    }
  }
  
  console.log('\n📊 Final Results:');
  let grandTotal = 0;
  for (const [state, count] of Object.entries(results)) {
    console.log(`  ${state}: ${count} shops`);
    grandTotal += count;
  }
  console.log(`  TOTAL: ${grandTotal} shops`);
}

// Analyze website quality (can be enhanced later)
export async function analyzeWebsiteQuality(url: string): Promise<number> {
  // Basic scoring for now
  let score = 50; // Base score
  
  if (url.includes('https')) score += 10;
  if (!url.includes('wix') && !url.includes('weebly')) score += 10;
  if (url.includes('.com')) score += 5;
  
  // TODO: Add actual website analysis
  // - Check for mobile responsiveness
  // - Check for SSL
  // - Check for contact forms
  // - Check for online booking
  // - Check page speed
  
  return Math.min(score, 100);
}
