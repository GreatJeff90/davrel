'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// --- MOCK DATA ---
const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of Protein: Why BSF Farming is Taking Over",
    excerpt: "Black Soldier Fly larvae are revolutionizing the animal feed industry. Discover how this sustainable protein source is reducing costs for poultry farmers.",
    date: "Oct 12, 2025",
    category: "Sustainability",
    author: "Amara Ndiaye",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1200&auto=format&fit=crop", 
    featured: true
  },
  {
    id: 2,
    title: "Navigating Global Procurement in 2026",
    excerpt: "Supply chains are evolving. Here are the top strategies Davrel uses to ensure timely delivery of raw materials amidst global shifts.",
    date: "Sep 28, 2025",
    category: "Logistics",
    author: "David Okeke",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1494412574643-35d324698422?q=80&w=800&auto=format&fit=crop",
    featured: false
  },
  {
    id: 3,
    title: "Organic Fertilizer vs. Chemical: The Long Term Impact",
    excerpt: "A deep dive into soil health and why switching to Frass fertilizer yields better crops over a 5-year cycle.",
    date: "Sep 15, 2025",
    category: "Agriculture",
    author: "Sarah Johnson",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1622383563227-0440114a6801?q=80&w=800&auto=format&fit=crop",
    featured: false
  },
  {
    id: 4,
    title: "Davrel Expands Operations to Southeast Asia",
    excerpt: "We are proud to announce our new procurement hub in Vietnam, opening doors for faster textile and machinery imports.",
    date: "Aug 10, 2025",
    category: "Company News",
    author: "Admin",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    featured: false
  },
  {
    id: 5,
    title: "5 Tips for Starting Your Own BSF Colony",
    excerpt: "Interested in waste recycling? Here is a beginner's guide to setting up a small-scale Black Soldier Fly bin at home.",
    date: "Jul 22, 2025",
    category: "Training",
    author: "Amara Ndiaye",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=800&auto=format&fit=crop",
    featured: false
  },
];

// --- ANIMATION VARIANTS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Blog() {
  return (
    <div className="bg-stone-50 min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="bg-green-950 py-24 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-green-400 font-bold tracking-widest uppercase text-xs">
            Insights & News
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            The Davrel Journal
          </h1>
          <p className="text-green-100/80 text-lg leading-relaxed">
            Expert perspectives on sustainable agriculture, global trade, and the future of supply chains.
          </p>
        </div>
      </section>

      {/* 2. BLOG CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16 -mt-12 relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {BLOG_POSTS.map((post) => (
            <motion.article 
              key={post.id} 
              variants={fadeInUp}
              // Added 'relative' here so the absolute link span works correctly
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col ${
                post.featured ? 'md:col-span-2 lg:col-span-3 lg:flex-row lg:h-96' : ''
              }`}
            >
              {/* Image Container */}
              <div className={`relative overflow-hidden bg-gray-200 ${
                post.featured ? 'h-64 lg:h-full lg:w-1/2' : 'h-60 w-full'
              }`}>
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-green-800 uppercase tracking-wide z-10">
                  {post.category}
                </div>
              </div>

              {/* Content Container */}
              <div className={`p-8 flex flex-col justify-center ${
                post.featured ? 'lg:w-1/2 lg:p-12' : ''
              }`}>
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className={`font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors ${
                  post.featured ? 'text-2xl md:text-4xl' : 'text-xl'
                }`}>
                  {/* The Link wraps the title but the span covers the whole parent card */}
                  <Link href={`/blog/${post.id}`} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {post.title}
                  </Link>
                </h2>
                
                <p className={`text-gray-600 leading-relaxed mb-6 flex-grow ${
                  post.featured ? 'text-lg' : 'text-sm line-clamp-3'
                }`}>
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-xs">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-gray-900">{post.author}</span>
                  </div>
                  <span className="text-green-600 font-bold text-sm group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Read Article <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* 3. NEWSLETTER CTA */}
      <section className="bg-white border-t border-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Get the latest news on sustainable agriculture and global market trends delivered directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-6 py-4 rounded-full bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
            />
            <button className="bg-green-700 text-white font-bold px-8 py-4 rounded-full hover:bg-green-800 transition shadow-lg hover:shadow-xl">
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}