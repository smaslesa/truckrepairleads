import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Building2, Star, TrendingUp, Phone, Clock, Navigation, Search, Filter, ChevronRight, Award, Users } from 'lucide-react';
import { db, sql } from '@/lib/db';

interface PageProps {
  params: Promise<{
    state: string;
  }>;
}

const STATE_NAMES: Record<string, string> = {
  'ca': 'California',
  'tx': 'Texas', 
  'fl': 'Florida',
  'nv': 'Nevada',
  'az': 'Arizona',
  'wa': 'Washington',
  'or': 'Oregon',
  'ut': 'Utah',
  'id': 'Idaho',
  'hi': 'Hawaii',
  'ak': 'Alaska'
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state } = await params;
  const stateName = STATE_NAMES[state] || state.toUpperCase();
  
  return {
    title: `Truck Repair Shops in ${stateName} - Find Truck Repair Near You | Truck Repair Shop Leads`,
    description: `Browse truck repair shops across ${stateName}. Find trusted truck repair shops, read reviews, and get quotes for your vehicle repair needs.`,
    openGraph: {
      title: `${stateName} Truck Repair Shops Directory`,
      description: `Complete directory of truck repair shops in ${stateName}`,
      type: 'website',
    }
  };
}

export default async function StatePage({ params }: PageProps) {
  const { state } = await params;
  const stateName = STATE_NAMES[state] || state.toUpperCase();
  
  // Get all cities from database for this state
  const citiesResult = await sql`
    SELECT DISTINCT city, state, COUNT(id) as shop_count 
    FROM shops 
    WHERE LOWER(state) = LOWER(${state})
    GROUP BY city, state 
    ORDER BY shop_count DESC, city
  `;
  
  // Also get cities with no shops yet from the cities table
  const allCitiesResult = await sql`
    SELECT city, state 
    FROM cities 
    WHERE LOWER(state) = LOWER(${state})
    ORDER BY city
  `;
  
  // Create a map of cities with shop counts
  const cityShopMap = new Map();
  citiesResult.forEach(row => {
    cityShopMap.set(row.city.toLowerCase(), row.shop_count);
  });
  
  // Combine all cities (with and without shops)
  const allCities = new Set<string>();
  allCitiesResult.forEach(row => {
    allCities.add(row.city);
  });
  citiesResult.forEach(row => {
    allCities.add(row.city);
  });
  
  // Get shop counts and stats for each city
  const cityStats = await Promise.all(
    Array.from(allCities).map(async (cityName: string) => {
      try {
        const citySlug = cityName.toLowerCase().replace(/\s+/g, '-');
        const shops = await db.getShopsByCity(cityName, state.toUpperCase());
        
        // Calculate accurate average rating (only from shops that have ratings)
        const shopsWithRatings = shops.filter(s => s.rating && s.rating > 0);
        const avgRating = shopsWithRatings.length > 0 
          ? shopsWithRatings.reduce((sum, shop) => sum + (shop.rating || 0), 0) / shopsWithRatings.length
          : 0;
        
        // Calculate total reviews
        const totalReviews = shops.reduce((sum, shop) => sum + (shop.review_count || 0), 0);
        
        return {
          slug: citySlug,
          name: cityName,
          shopCount: shops.length,
          avgRating: avgRating > 0 ? avgRating.toFixed(1) : null,
          totalReviews,
          topRatedShop: shops.sort((a, b) => (b.rating || 0) - (a.rating || 0))[0]
        };
      } catch (error) {
        console.error(`Error fetching ${cityName}:`, error);
        const citySlug = cityName.toLowerCase().replace(/\s+/g, '-');
        return {
          slug: citySlug,
          name: cityName,
          shopCount: 0,
          avgRating: null,
          totalReviews: 0,
          topRatedShop: null
        };
      }
    })
  );
  
  // Calculate state totals
  const totalShops = cityStats.reduce((sum, city) => sum + city.shopCount, 0);
  const totalReviews = cityStats.reduce((sum, city) => sum + city.totalReviews, 0);
  const citiesWithShops = cityStats.filter(city => city.shopCount > 0).length;
  const topCities = cityStats
    .filter(city => city.shopCount > 0)
    .sort((a, b) => b.shopCount - a.shopCount)
    .slice(0, 6);
  
  // Calculate accurate state average rating
  const allShopsResult = await sql`
    SELECT rating 
    FROM shops 
    WHERE LOWER(state) = LOWER(${state}) AND rating > 0
  `;
  const stateAvgRating = allShopsResult.length > 0
    ? (allShopsResult.reduce((sum, row) => sum + row.rating, 0) / allShopsResult.length).toFixed(1)
    : null;
  
  // Sort cities: with shops first (by shop count), then without shops (alphabetically)
  const citiesWithShopsSorted = cityStats
    .filter(city => city.shopCount > 0)
    .sort((a, b) => b.shopCount - a.shopCount);
  
  const citiesWithoutShopsSorted = cityStats
    .filter(city => city.shopCount === 0)
    .sort((a, b) => a.name.localeCompare(b.name));
  
  return (
    <div className="min-h-screen bg-white">
      {/* Modern Hero Section with Gradient */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-blue-200 mb-8">
              <Link href="/shops" className="hover:text-white transition-colors">Directory</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">{stateName}</span>
            </nav>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Truck Repair Shops in
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    {stateName}
                  </span>
                </h1>
                
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Browse {totalShops.toLocaleString()} verified truck repair centers across {citiesWithShops} cities. 
                  Find the perfect shop for your repair needs.
                </p>
                
                {/* Search Bar */}
                <div className="relative mb-8">
                  <input
                    type="text"
                    placeholder={`Search shops in ${stateName}...`}
                    className="w-full px-6 py-4 pl-12 pr-32 text-lg rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-400/50 focus:border-blue-400 transition-all"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-200" />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <Building2 className="w-8 h-8 text-blue-300 mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{totalShops.toLocaleString()}</div>
                  <div className="text-blue-200 text-sm">Total Shops</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <MapPin className="w-8 h-8 text-green-300 mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{citiesWithShops}</div>
                  <div className="text-blue-200 text-sm">Cities Covered</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <Star className="w-8 h-8 text-yellow-300 mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stateAvgRating || 'N/A'}</div>
                  <div className="text-blue-200 text-sm">Average Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <Users className="w-8 h-8 text-purple-300 mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{totalReviews.toLocaleString()}</div>
                  <div className="text-blue-200 text-sm">Total Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Cities Section */}
      {topCities.length > 0 && (
        <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Popular Cities</h2>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                Most Shops
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topCities.map((city, index) => (
                <Link
                  key={city.slug}
                  href={`/shops/${state}/${city.slug}`}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-xl"
                >
                  {/* Rank badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                    {index + 1}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {city.name}
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          Shops
                        </span>
                        <span className="font-bold text-gray-900">{city.shopCount}</span>
                      </div>
                      
                      {city.avgRating && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 flex items-center gap-2">
                            <Star className="w-4 h-4" />
                            Rating
                          </span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="font-bold text-gray-900">{city.avgRating}</span>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          Reviews
                        </span>
                        <span className="font-bold text-gray-900">{city.totalReviews.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    {city.topRatedShop && (
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-xs text-gray-500 mb-1">Top Rated Shop</p>
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {city.topRatedShop.name}
                        </p>
                      </div>
                    )}
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* All Cities Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Cities in {stateName}</h2>
            <p className="text-lg text-gray-600">
              Select a city to browse local truck repair shops and truck repair centers
            </p>
          </div>
          
          {/* Cities with shops */}
          {citiesWithShopsSorted.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <h3 className="text-xl font-semibold text-gray-900">Cities with Active Shops</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {citiesWithShopsSorted.map(city => (
                  <Link
                    key={city.slug}
                    href={`/shops/${state}/${city.slug}`}
                    className="group p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {city.name}
                      </h4>
                      <Navigation className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-600">
                        <span className="font-semibold text-gray-900">{city.shopCount}</span> shops
                      </span>
                      {city.avgRating && (
                        <span className="flex items-center gap-1 text-gray-600">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          <span className="font-semibold text-gray-900">{city.avgRating}</span>
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* Cities without shops */}
          {citiesWithoutShopsSorted.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <h3 className="text-xl font-semibold text-gray-900">Additional Cities</h3>
                <span className="text-sm text-gray-500">(Data collection in progress)</span>
              </div>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {citiesWithoutShopsSorted.map(city => (
                  <Link
                    key={city.slug}
                    href={`/shops/${state}/${city.slug}`}
                    className="p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors"
                  >
                    <h4 className="text-sm font-medium text-gray-700">
                      {city.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">Coming soon</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Shops in {stateName}?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our directory features only verified, quality truck repair centers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Shops</h3>
              <p className="text-gray-600">Many shops hold certifications from major manufacturers and insurance companies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Turnaround</h3>
              <p className="text-gray-600">Find shops with fast service times and efficient repair processes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Direct Contact</h3>
              <p className="text-gray-600">Connect directly with shops for quotes and appointment scheduling</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Own a Truck Repair Shop in {stateName}?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get listed in our directory and reach thousands of customers looking for truck repair
          </p>
          <Link
            href="/websites"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Get Your Shop Listed
          </Link>
        </div>
      </div>
    </div>
  );
}