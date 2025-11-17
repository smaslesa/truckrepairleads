import { NextRequest, NextResponse } from 'next/server';
import { scrapeCity, scrapeState, WESTERN_STATES } from '@/lib/scraper/google-places';

// Admin password for protection (set in environment)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'collision2024';

export async function POST(request: NextRequest) {
  try {
    const { password, action, state, city } = await request.json();
    
    // Check admin password
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // Check if Google Maps API key is configured
    if (!process.env.GOOGLE_MAPS_API_KEY) {
      return NextResponse.json(
        { error: 'Google Maps API key not configured' },
        { status: 500 }
      );
    }
    
    // Handle different scraping actions
    switch (action) {
      case 'scrape_city': {
        if (!city || !state) {
          return NextResponse.json(
            { error: 'City and state are required' },
            { status: 400 }
          );
        }
        
        const shops = await scrapeCity(city, state);
        return NextResponse.json({
          success: true,
          city,
          state,
          shopsFound: shops.length,
          shops: shops.slice(0, 10) // Return first 10 as preview
        });
      }
      
      case 'scrape_state': {
        if (!state) {
          return NextResponse.json(
            { error: 'State is required' },
            { status: 400 }
          );
        }
        
        if (!WESTERN_STATES[state as keyof typeof WESTERN_STATES]) {
          return NextResponse.json(
            { error: `Invalid state. Valid states: ${Object.keys(WESTERN_STATES).join(', ')}` },
            { status: 400 }
          );
        }
        
        // Run in background for large scrapes
        scrapeState(state).then(count => {
          console.log(`Background scrape completed for ${state}: ${count} shops`);
        }).catch(error => {
          console.error(`Background scrape failed for ${state}:`, error);
        });
        
        return NextResponse.json({
          success: true,
          message: `Started scraping ${state} in background. Check logs for progress.`,
          state
        });
      }
      
      case 'test': {
        // Test with Las Vegas only
        const shops = await scrapeCity('Las Vegas', 'NV');
        return NextResponse.json({
          success: true,
          message: 'Test scrape completed',
          city: 'Las Vegas',
          state: 'NV',
          shopsFound: shops.length,
          shops: shops.slice(0, 5)
        });
      }
      
      default:
        return NextResponse.json(
          { error: 'Invalid action. Use: scrape_city, scrape_state, or test' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Scraping error:', error);
    return NextResponse.json(
      { error: 'Scraping failed', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// GET endpoint to check scraping status
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const password = searchParams.get('password');
  
  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
  
  return NextResponse.json({
    status: 'ready',
    states: Object.keys(WESTERN_STATES),
    totalCities: Object.values(WESTERN_STATES).reduce((sum, state) => sum + state.cities.length, 0),
    apiKeyConfigured: !!process.env.GOOGLE_MAPS_API_KEY,
    databaseConfigured: !!process.env.DATABASE_URL
  });
}
