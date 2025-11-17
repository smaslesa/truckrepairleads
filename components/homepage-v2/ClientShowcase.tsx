'use client'

import React from 'react'
import { ExternalLink, Star, MapPin } from 'lucide-react'
import Image from 'next/image'

const ClientShowcase = () => {
  const clients = [
    {
      name: "City Side Auto Body",
      location: "Silver Spring, Maryland",
      rating: 4.9,
      reviews: 588,
      url: "https://www.city-side.com/",
      image: "https://res.cloudinary.com/ddyiobiae/image/upload/f_auto,q_auto:best,c_fill,w_800,h_500,g_north/v1738555000/city-side-screenshot.jpg",
      fallbackColor: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      name: "The Local Body Shop",
      location: "Coeur d'Alene, Idaho",
      rating: 5.0,
      reviews: 45,
      url: "https://www.thelocalbodyshop.com/",
      image: "https://res.cloudinary.com/ddyiobiae/image/upload/f_auto,q_auto:best,c_fill,w_800,h_500,g_north/v1738555000/local-body-shop-screenshot.jpg",
      fallbackColor: "bg-gradient-to-br from-green-500 to-green-700"
    },
    {
      name: "Advance Auto Body",
      location: "Norwalk, California",
      rating: 4.3,
      reviews: 72,
      url: "https://www.advanceautobodysfs.com/",
      image: "https://res.cloudinary.com/ddyiobiae/image/upload/f_auto,q_auto:best,c_fill,w_800,h_500,g_north/v1738555000/advance-auto-screenshot.jpg",
      fallbackColor: "bg-gradient-to-br from-red-500 to-red-700"
    }
  ]

  return (
    <section id="client-examples" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Body Shops We've Built
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real shops. Real results. See the quality of our work—every site is live and generating leads right now.
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              {/* Screenshot Preview */}
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[16/10] overflow-hidden bg-gray-100"
              >
                <div className={`w-full h-full ${client.fallbackColor} flex items-center justify-center`}>
                  <div className="text-white text-center p-6">
                    <div className="text-6xl font-bold opacity-20 mb-2">{client.name.charAt(0)}</div>
                    <div className="text-sm opacity-75">Click to view live site</div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                    <div className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg">
                      <span>View Live Site</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </a>

              {/* Client Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {client.name}
                </h3>

                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{client.location}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(client.rating)
                            ? 'text-yellow-500 fill-yellow-500'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-bold text-gray-900">{client.rating}</span>
                  <span className="text-sm text-gray-500">({client.reviews} reviews)</span>
                </div>

                {/* CTA Button */}
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group/link"
                >
                  <span>Visit Site</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="text-gray-700">
              <span className="font-bold text-gray-900">705 total 5-star reviews</span> across all client sites
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientShowcase
