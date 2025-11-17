'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Search, TrendingUp } from 'lucide-react'
import LeadModal from '@/components/shared/LeadModal'
import { getAllPosts } from '@/lib/blog-data'

export default function NewsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Get all blog posts from data file
  const blogPosts = getAllPosts()

  const categories = ['all', 'Industry Trends', 'Digital Marketing', 'Website Tips', 'Business Strategy', 'Customer Service', 'Technology', 'Training', 'Marketing', 'Insurance', 'Operations', 'Technical']

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-full mb-6">
                <TrendingUp className="w-4 h-4" />
                <span>Truck Repair Shop News & Insights</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-gray-900 tracking-tight mb-6">
                Industry insights
                <span className="block text-gray-400">that grow your shop</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Expert analysis, proven strategies, and industry trends from the truck repair business. 
                <span className="block mt-2 font-medium">25 articles covering January - September 2025</span>
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-8 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                  }`}
                >
                  {category === 'all' ? 'All Articles' : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredPost && selectedCategory === 'all' && !searchTerm && (
          <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-80 lg:h-full">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
                      Latest Article
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">{featuredPost.category}</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">{featuredPost.title}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">{featuredPost.excerpt}</p>
                    <Link 
                      href={`/news/${featuredPost.slug}`}
                      className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all hover:gap-4 shadow-lg"
                    >
                      Read Full Article
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            {regularPosts.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your search or category filter.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <Link key={post.id} href={`/news/${post.slug}`}>
                    <article className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all group cursor-pointer hover:-translate-y-1">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-medium text-gray-900">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                        <div className="inline-flex items-center gap-2 text-gray-900 font-medium text-sm group-hover:gap-3 transition-all">
                          Read Article
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay ahead of the competition
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Get the latest truck repair shop insights, proven strategies, and industry trends delivered to your inbox every week.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all inline-flex items-center gap-3 shadow-lg hover:shadow-xl"
              >
                Get Weekly Updates
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Lead Modal */}
      <LeadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="news-newsletter"
        title="Stay Updated"
        subtitle="Get weekly truck repair shop insights and strategies"
      />
    </>
  )
}