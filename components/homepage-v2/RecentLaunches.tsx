'use client'

import React from 'react'
import { ExternalLink, MapPin, Star } from 'lucide-react'

const RecentLaunches = () => {
  const launches = [
    {
      name: "City Side Auto Body",
      location: "Silver Spring, MD",
      url: "https://www.city-side.com/",
      rating: "4.9",
      reviews: "588",
      screenshot: "https://res.cloudinary.com/ddyiobiae/image/upload/f_auto,q_auto:good,c_fill,w_1200,h_750,g_north/v1738555000/city-side-site.jpg"
    },
    {
      name: "The Local Body Shop",
      location: "Coeur d'Alene, ID",
      url: "https://www.thelocalbodyshop.com/",
      rating: "5.0",
      reviews: "45",
      screenshot: "https://res.cloudinary.com/ddyiobiae/image/upload/f_auto,q_auto:good,c_fill,w_1200,h_750,g_north/v1738555000/local-body-shop-site.jpg"
    },
    {
      name: "Advance Auto Body",
      location: "Norwalk, CA",
      url: "https://www.advanceautobodysfs.com/",
      rating: "4.3",
      reviews: "72",
      screenshot: "https://res.cloudinary.com/ddyiobiae/image/upload/f_auto,q_auto:good,c_fill,w_1200,h_750,g_north/v1738555000/advance-auto-site.jpg"
    }
  ]

  return (
    <section id="examples" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Recent Launches
          </h2>
          <p className="text-xl text-gray-600">
            Live truck repair shop websites generating leads right now
          </p>
        </div>

        {/* Launches Grid */}
        <div className="space-y-16">
          {launches.map((launch, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              {/* Browser Mockup */}
              <div className="flex-1 w-full">
                <a
                  href={launch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 transition-transform group-hover:scale-[1.02] duration-300">
                    {/* Browser Chrome */}
                    <div className="bg-gray-100 px-4 py-2.5 border-b border-gray-300 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-600 font-medium max-w-md">
                        {launch.url.replace('https://www.', '').replace('/', '')}
                      </div>
                    </div>

                    {/* Screenshot - Using solid background as placeholder */}
                    <div className="aspect-[16/10] bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden">
                      {/* Placeholder design */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="text-6xl font-bold text-gray-200 mb-4">{launch.name.charAt(0)}</div>
                          <div className="text-gray-400 font-medium">{launch.name}</div>
                          <div className="mt-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-sm font-medium">View Live Site</span>
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Info */}
              <div className="flex-1 lg:max-w-md">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  {launch.name}
                </h3>

                <div className="flex items-center gap-2 text-gray-600 mb-6">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">{launch.location}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200 inline-flex">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold text-gray-900 text-xl">{launch.rating}</span>
                  <span className="text-gray-600">({launch.reviews} reviews)</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>VIN decoder with mobile scanning</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Interactive before/after gallery</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>One-click calling & text-to-quote</span>
                  </li>
                </ul>

                <a
                  href={launch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group/link"
                >
                  <span>Visit Live Site</span>
                  <ExternalLink className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentLaunches
