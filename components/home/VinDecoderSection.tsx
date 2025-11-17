'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ScanLine, Car, Zap, Shield, TrendingUp, ChevronRight, Smartphone, Globe } from 'lucide-react';
import LeadModal from '@/components/shared/LeadModal';

export default function VinDecoderSection() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: <ScanLine className="w-6 h-6" />,
      title: "Instant VIN Scanning",
      description: "Mobile barcode scanner captures VINs instantly"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Complete Vehicle Data",
      description: "Get make, model, year, trim, and 50+ data points"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Decode any VIN in under 2 seconds"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Accurate",
      description: "Powered by Market Check's verified database"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Increase Conversions",
      value: "45%",
      description: "Higher lead conversion with instant VIN data"
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Mobile Optimized",
      value: "100%",
      description: "Works perfectly on all devices"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Lead Quality",
      value: "3x",
      description: "Better leads with complete vehicle info"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              NEW FEATURE
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              VIN Decoder Tool
              <span className="block text-blue-600 mt-2">For Your Website</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Give your customers the power to instantly decode their vehicle information. 
              Increase lead quality by 3x with complete, accurate vehicle data on every submission.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  whileHover={{ y: -2 }}
                >
                  <div className={`text-blue-600 mb-2 transition-colors ${hoveredFeature === index ? 'text-blue-700' : ''}`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/vin-decoder"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Try VIN Decoder
                <ChevronRight className="w-5 h-5" />
              </Link>
              <a 
                href="tel:7029000265"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Right Content - Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Phone Mockup */}
            <div className="relative mx-auto max-w-sm">
              <div className="bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-black rounded-[2.5rem] p-4">
                  <div className="bg-white rounded-[2rem] overflow-hidden" style={{ aspectRatio: '9/19' }}>
                    {/* Screen Content */}
                    <div className="p-4 h-full flex flex-col">
                      {/* Header */}
                      <div className="text-center mb-4">
                        <h3 className="text-lg font-bold text-gray-900">VIN Decoder</h3>
                        <p className="text-xs text-gray-600">Scan or enter VIN</p>
                      </div>
                      
                      {/* VIN Input */}
                      <div className="bg-gray-100 rounded-lg p-3 mb-4">
                        <div className="flex items-center gap-2">
                          <ScanLine className="w-5 h-5 text-gray-400" />
                          <span className="text-sm text-gray-700 font-mono">1HGBH41JXMN109186</span>
                        </div>
                      </div>
                      
                      {/* Results */}
                      <div className="flex-1 space-y-3">
                        <div className="bg-blue-50 rounded-lg p-3">
                          <div className="text-xs text-blue-600 font-semibold mb-1">Vehicle Detected</div>
                          <div className="text-sm font-bold text-gray-900">2023 Honda Civic</div>
                          <div className="text-xs text-gray-600">EX-L Sedan 4D</div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-gray-50 rounded-lg p-2">
                            <div className="text-xs text-gray-500">Engine</div>
                            <div className="text-xs font-semibold text-gray-900">1.5L Turbo</div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2">
                            <div className="text-xs text-gray-500">Drivetrain</div>
                            <div className="text-xs font-semibold text-gray-900">FWD</div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2">
                            <div className="text-xs text-gray-500">Fuel Type</div>
                            <div className="text-xs font-semibold text-gray-900">Gasoline</div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2">
                            <div className="text-xs text-gray-500">MPG</div>
                            <div className="text-xs font-semibold text-gray-900">32/42</div>
                          </div>
                        </div>
                        
                        {/* Submit Button */}
                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold mt-auto">
                          Get Estimate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <div className="text-xs text-gray-600">Accuracy</div>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <div className="text-2xl font-bold text-green-600">2 sec</div>
                <div className="text-xs text-gray-600">Decode Time</div>
              </motion.div>
            </div>

            {/* Benefits Cards */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="text-blue-600 mb-2 flex justify-center">{benefit.icon}</div>
                  <div className="text-xl font-bold text-gray-900">{benefit.value}</div>
                  <div className="text-xs text-gray-600">{benefit.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Ready to Add VIN Decoder to Your Website?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/vin-decoder"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              See Demo
              <ChevronRight className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
            >
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>

      {/* Lead Modal */}
      <LeadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="vin-decoder-section"
        title="Add VIN Decoder to Your Website"
      />
    </section>
  );
}
