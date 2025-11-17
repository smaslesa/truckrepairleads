// Advanced SEO Schema.org structured data for truck repair shops

export const generateLocalBusinessSchema = (businessName: string = "TruckRepairLeads") => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://truckrepairleads.com/#business",
  "name": businessName,
  "description": "Digital marketing agency specializing in truck repair shop and truck repair marketing. We help truck repair shops dominate Google search results and generate high-quality leads.",
  "url": "https://truckrepairleads.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://truckrepairleads.com/logo.png",
    "width": 300,
    "height": 100
  },
  "image": "https://truckrepairleads.com/og-image.jpg",
  "telephone": "+1-702-900-0265",
  "email": "info@truckrepairleads.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.1699,
    "longitude": -115.1398
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 39.8283,
      "longitude": -98.5795
    },
    "geoRadius": "2500000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Truck Repair Shop Marketing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Truck Repair Shop SEO",
          "description": "Search engine optimization specifically for truck repair shops and truck repair businesses"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Google Ads for Truck Repair Shops",
          "description": "Targeted Google advertising campaigns for truck repair and truck repair shops"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Truck Repair Shop Website Design",
          "description": "Professional website design and development for truck repair businesses"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Mike Johnson"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "TruckRepairLeads transformed our truck repair center. We went from 3-4 cars per week to 15-20 cars consistently. Their Google Ads and SEO work is incredible."
    }
  ],
  "sameAs": [
    "https://www.facebook.com/truckrepairleads",
    "https://www.linkedin.com/company/truckrepairleads",
    "https://twitter.com/truckrepairleads"
  ]
})

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://truckrepairleads.com/#website",
  "url": "https://truckrepairleads.com",
  "name": "TruckRepairLeads",
  "description": "Digital marketing for truck repair shops - SEO, Google Ads, and websites that convert",
  "publisher": {
    "@id": "https://truckrepairleads.com/#business"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://truckrepairleads.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
})

export const generateServiceSchema = (serviceName: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "url": url,
  "provider": {
    "@id": "https://truckrepairleads.com/#business"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": serviceName,
    "itemListElement": [
      {
        "@type": "Offer",
        "description": description,
        "price": "Contact for pricing",
        "priceCurrency": "USD"
      }
    ]
  }
})
