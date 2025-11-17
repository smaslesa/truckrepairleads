import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Globe, Star, Clock, DollarSign, Shield, Wrench } from 'lucide-react';
import { db, Shop } from '@/lib/db';
import { WESTERN_STATES } from '@/lib/scraper/google-places';

interface PageProps {
  params: Promise<{
    state: string;
    city: string;
  }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state, city } = await params;
  const cityName = city.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const stateInfo = WESTERN_STATES[state.toUpperCase() as keyof typeof WESTERN_STATES];
  const stateName = stateInfo?.name || state.toUpperCase();
  
  return {
    title: `Best Truck Repair Shops in ${cityName}, ${state.toUpperCase()} | Truck Repair Directory`,
    description: `Find top-rated truck repair shops and truck repair specialists in ${cityName}, ${stateName}. Compare ratings, reviews, services, and get free quotes from certified shops.`,
    keywords: `truck repair shop ${cityName}, truck repair ${cityName}, car dent repair ${cityName}, paint shop ${cityName}, frame straightening ${cityName}`,
    openGraph: {
      title: `Truck Repair Shops in ${cityName}, ${state.toUpperCase()}`,
      description: `Directory of ${cityName}'s best truck repair shops. Insurance approved, certified technicians, free estimates.`,
      type: 'website',
    },
  };
}

// Generate static params for all cities
export async function generateStaticParams() {
  const params = [];
  
  for (const [stateCode, stateInfo] of Object.entries(WESTERN_STATES)) {
    for (const city of stateInfo.cities) {
      params.push({
        state: stateCode.toLowerCase(),
        city: city.toLowerCase().replace(/\s+/g, '-').replace(/'/g, ''),
      });
    }
  }
  
  return params;
}

export default async function CityShopsPage({ params }: PageProps) {
  const { state, city } = await params;
  
  // Convert URL slug back to city name
  const cityName = city.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const stateUpper = state.toUpperCase();
  const stateInfo = WESTERN_STATES[stateUpper as keyof typeof WESTERN_STATES];
  const stateName = stateInfo?.name || stateUpper;
  
  // Fetch shops from database
  let shops: Shop[] = [];
  try {
    shops = await db.getShopsByCity(cityName, stateUpper);
  } catch (error) {
    console.error('Error fetching shops:', error);
    // Continue with empty array if database not configured
  }
  
  // Calculate statistics
  const shopsWithRatings = shops.filter(shop => shop.rating && shop.rating > 0);
  const avgRating = shopsWithRatings.length > 0 
    ? (shopsWithRatings.reduce((sum, shop) => sum + (shop.rating || 0), 0) / shopsWithRatings.length).toFixed(1)
    : '0';
  const shopsWithWebsite = shops.filter(shop => shop.has_website).length;
  const percentWithWebsite = shops.length > 0 
    ? Math.round((shopsWithWebsite / shops.length) * 100)
    : 0;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Truck Repair Shops in {cityName}, {stateUpper}
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find trusted truck repair specialists in your area
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-8">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-3xl font-bold">{shops.length}</div>
                <div className="text-sm text-blue-100">Truck Repair Shops</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-3xl font-bold flex items-center justify-center gap-1">
                  {avgRating} <Star className="w-5 h-5" />
                </div>
                <div className="text-sm text-blue-100">Avg Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-3xl font-bold">{percentWithWebsite}%</div>
                <div className="text-sm text-blue-100">Have Websites</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-blue-100">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Shops List */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                {shops.length} Truck Repair Shops
              </h2>
              <select className="border rounded-lg px-4 py-2 text-sm">
                <option>Sort by Rating</option>
                <option>Sort by Reviews</option>
                <option>Sort by Distance</option>
              </select>
            </div>
            
            {shops.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <p className="text-gray-500 mb-4">No shops found in this area yet.</p>
                <p className="text-sm text-gray-400">
                  We're actively adding more shops. Check back soon!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {shops.map((shop, index) => (
                  <Link
                    key={shop.id}
                    href={`/shops/${state}/${city}/${shop.slug}`}
                    className="block bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {index + 1}. {shop.name}
                        </h3>
                        {shop.rating && (
                          <div className="flex items-center gap-2 text-sm">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="ml-1 font-medium">{shop.rating}</span>
                            </div>
                            <span className="text-gray-400">
                              ({shop.review_count} reviews)
                            </span>
                          </div>
                        )}
                      </div>
                      {!shop.has_website && (
                        <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                          No Website
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      {shop.address && (
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-0.5 text-gray-400" />
                          <span>{shop.address}</span>
                        </div>
                      )}
                      {shop.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span>{shop.phone}</span>
                        </div>
                      )}
                      {shop.website && (
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-gray-400" />
                          <span className="text-blue-600 hover:underline">
                            Visit Website
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {shop.services && shop.services.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {shop.services.slice(0, 4).map(service => (
                          <span
                            key={service}
                            className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                          >
                            {service}
                          </span>
                        ))}
                        {shop.services.length > 4 && (
                          <span className="text-xs text-gray-400">
                            +{shop.services.length - 4} more
                          </span>
                        )}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                {cityName} Truck Repair Market
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Shops</span>
                  <span className="font-medium">{shops.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Average Rating</span>
                  <span className="font-medium">{avgRating} ⭐</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">With Websites</span>
                  <span className="font-medium">{percentWithWebsite}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Need Marketing</span>
                  <span className="font-medium text-red-600">
                    {shops.length - shopsWithWebsite} shops
                  </span>
                </div>
              </div>
            </div>
            
            {/* Services Offered */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Common Services
              </h3>
              <div className="space-y-2">
                {[
                  { icon: Wrench, label: 'Truck Repair' },
                  { icon: Shield, label: 'Insurance Claims' },
                  { icon: DollarSign, label: 'Free Estimates' },
                  { icon: Clock, label: 'Quick Turnaround' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-sm">
                    <Icon className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-600">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA for Shop Owners */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 text-white">
              <h3 className="font-semibold mb-2">Own a Truck Repair Shop?</h3>
              <p className="text-sm text-blue-100 mb-4">
                Get more customers with a professional website and digital marketing.
              </p>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-600 text-center py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Get Your Free Website Audit
              </Link>
            </div>
            
            {/* Nearby Cities */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Nearby Cities
              </h3>
              <div className="space-y-2">
                {stateInfo?.cities
                  .filter(c => c !== cityName)
                  .slice(0, 5)
                  .map(nearbyCity => (
                    <Link
                      key={nearbyCity}
                      href={`/shops/${state}/${nearbyCity.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block text-sm text-blue-600 hover:underline"
                    >
                      {nearbyCity} Truck Repair Shops →
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* SEO Content */}
        <div className="mt-16 prose max-w-none">
          <h2>Finding the Best Truck Repair Shop in {cityName}</h2>
          <p>
            When your vehicle needs truck repair in {cityName}, {stateName}, choosing the right truck repair shop 
            is crucial for quality repairs and fair pricing. Our directory helps you compare {shops.length} collision 
            repair specialists in the {cityName} area.
          </p>
          
          <h3>Services Offered by {cityName} Truck Repair Shops</h3>
          <ul>
            <li>Collision and accident repair</li>
            <li>Paintless dent removal (PDR)</li>
            <li>Auto painting and refinishing</li>
            <li>Frame straightening and alignment</li>
            <li>Insurance claim assistance</li>
            <li>Windshield and glass replacement</li>
          </ul>
          
          <h3>How to Choose a Truck Repair Shop</h3>
            <p>
              Look for shops with high ratings, proper certifications (I-CAR, ASE), and insurance partnerships. 
              {shopsWithRatings.length > 0 
                ? `The average rating for truck repair shops in ${cityName} is ${avgRating} stars, with ${percentWithWebsite}% maintaining professional websites for easy communication and estimates.`
                : `${percentWithWebsite}% of truck repair shops in ${cityName} maintain professional websites for easy communication and estimates.`
              }
            </p>
        </div>
      </div>
    </div>
  );
}
