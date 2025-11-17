import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  MapPin, 
  Phone, 
  Globe, 
  Star, 
  Clock, 
  Shield,
  CheckCircle,
  Navigation,
  Mail,
  DollarSign,
  Users,
  Award
} from 'lucide-react';
import { db } from '@/lib/db';

interface PageProps {
  params: Promise<{
    state: string;
    city: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state, city, slug } = await params;
  
  try {
    const shop = await db.getShopBySlug(slug);
    
    if (!shop) {
      return {
        title: 'Shop Not Found - TruckRepairLeads',
        description: 'The requested truck repair shop could not be found.'
      };
    }
    
    const stateUpper = state.toUpperCase();
    const cityName = city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    
    return {
      title: `${shop.name} - Truck Repair in ${cityName}, ${stateUpper}`,
      description: `${shop.name} offers professional truck repair and truck repair services in ${cityName}, ${stateUpper}. ${shop.rating ? `Rated ${shop.rating} stars.` : ''} ${shop.phone ? `Call ${shop.phone} for a free estimate.` : ''}`,
      openGraph: {
        title: `${shop.name} - ${cityName} Truck Repair`,
        description: `Professional truck repair and truck repair services in ${cityName}, ${stateUpper}`,
        type: 'website',
        images: []
      }
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Truck Repair Shop - TruckRepairLeads',
      description: 'Find professional truck repair services near you.'
    };
  }
}

export default async function ShopDetailPage({ params }: PageProps) {
  const { state, city, slug } = await params;
  
  let shop;
  try {
    shop = await db.getShopBySlug(slug);
  } catch (error) {
    console.error('Error fetching shop:', error);
    notFound();
  }
  
  if (!shop) {
    notFound();
  }
  
  const stateUpper = state.toUpperCase();
  const cityName = city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const stateName = {
    'nv': 'Nevada',
    'ca': 'California',
    'az': 'Arizona',
    'wa': 'Washington',
    'or': 'Oregon',
    'ut': 'Utah',
    'id': 'Idaho',
    'hi': 'Hawaii',
    'ak': 'Alaska'
  }[state] || state.toUpperCase();
  
  // Parse opening hours
  const openingHours = (shop.hours_json as Record<string, { open: string; close: string } | string>) || {};
  const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href={`/shops/${state}`} className="text-gray-500 hover:text-gray-700">{stateName}</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href={`/shops/${state}/${city}`} className="text-gray-500 hover:text-gray-700">{cityName}</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">{shop.name}</span>
          </nav>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">{shop.name}</h1>
              
              {shop.rating && (
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(shop.rating || 0) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-lg">
                    {shop.rating} ({shop.review_count || 0} reviews)
                  </span>
                </div>
              )}
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>{shop.address}</span>
                </div>
                
                {shop.phone && (
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                    <a href={`tel:${shop.phone}`} className="hover:underline">
                      {shop.phone}
                    </a>
                  </div>
                )}
                
                {shop.website && (
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 mr-2 flex-shrink-0" />
                    <a 
                      href={shop.website} 
                      target="_blank" 
                      rel="nofollow noopener noreferrer"
                      className="hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
              
              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                {shop.phone && (
                  <a
                    href={`tel:${shop.phone}`}
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </a>
                )}
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(shop.address || '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors inline-flex items-center"
                >
                  <Navigation className="h-5 w-5 mr-2" />
                  Get Directions
                </a>
              </div>
            </div>
            
            {/* Map or Image */}
            <div className="rounded-lg overflow-hidden h-64 lg:h-auto">
              <div className="bg-gray-200 h-full flex items-center justify-center">
                <MapPin className="h-16 w-16 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section - Coming Soon */}
            
            {/* Services */}
            {shop.services && shop.services.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-4">Services Offered</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {(shop.services as string[]).map((service, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Reviews */}
            {/* Reviews temporarily disabled
            {shop.reviews && shop.reviews.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
                <div className="space-y-4">
                  {(shop.reviews as Array<{ author_name: string; rating: number; text: string; time: number }>).slice(0, 5).map((review, index) => (
                    <div key={index} className="border-b pb-4 last:border-0">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">
                          {review.author_name}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm">{review.text}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(review.time * 1000).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )} */}
          </div>
          
          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Business Hours */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Business Hours
              </h3>
              <div className="space-y-2">
                {daysOfWeek.map(day => {
                  const hours = openingHours[day];
                  const hasHours = hours && typeof hours === 'object' && 'open' in hours && 'close' in hours;
                  return (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="capitalize text-gray-600">{day}</span>
                      <span className="text-gray-900">
                        {hasHours && typeof hours === 'object' ? `${hours.open} - ${hours.close}` : 'Closed'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Business Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold mb-4">Business Information</h3>
              <div className="space-y-3">
                {shop.price_level && (
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-700">
                      {'$'.repeat(shop.price_level)} Price Range
                    </span>
                  </div>
                )}
                
                {/* Wheelchair accessibility info - coming soon */}
                
                {/* Business verification - coming soon */}
              </div>
            </div>
            
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Need Truck Repair?</h3>
              <p className="text-sm mb-4 opacity-90">
                Get your website listed in our directory and attract more customers.
              </p>
              <Link
                href="/"
                className="block w-full bg-white text-blue-600 text-center py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Shops */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">
            Other Truck Repair Shops in {cityName}
          </h2>
          <div className="text-center">
            <Link
              href={`/shops/${state}/${city}`}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All {cityName} Shops
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
