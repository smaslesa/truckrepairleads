'use client'

import { notFound } from 'next/navigation'
import { use } from 'react'
import { Calendar, Clock, ArrowLeft, Share2, User, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { getPostBySlug } from '@/lib/blog-data'

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const post = getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link 
              href="/news"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="bg-white px-3 py-1.5 rounded-full font-medium border border-gray-200">{post.category}</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-xl prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#374151'
            }}
          />
          
          {/* Article Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Found this helpful?
                  </h3>
                  <p className="text-gray-600">
                    Share it with other shop owners who could benefit from these insights.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-all shadow-sm">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all shadow-lg"
                  >
                    <TrendingUp className="w-4 h-4" />
                    Back to Top
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link 
              href="/news"
              className="inline-flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all articles
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}