'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Product Data
const PRODUCTS = [
  {
    id: 1,
    name: "Dried BSF Larvae (High Protein)",
    category: "Feed",
    price: "₦1,000 / kg",
    image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=800&auto=format&fit=crop", // Updated to local asset
    desc: "Premium dried larvae for poultry and fish feed. 100% organic and sustainable protein source.",
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "BSF Frass Fertilizer",
    category: "Agriculture",
    price: "₦1,000 / bag",
    image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=800&auto=format&fit=crop",
    desc: "Organic fertilizer rich in nutrients. Perfect for vegetable farming and enhancing soil health.",
    tag: "Eco-Friendly"
  },
  {
    id: 3,
    name: "Live Larvae Starter Kit",
    category: "Training",
    price: "₦250,000",
    image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=800&auto=format&fit=crop",
    desc: "Everything you need to start your own BSF colony for a week. Includes live larvae, bin, and manual.",
    tag: "New Arrival"
  },
  {
    id: 4,
    name: "Processed Organic Feed",
    category: "Feed",
    price: "Contact for Price",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=800&auto=format&fit=crop",
    desc: "Balanced feed mix for layers and broilers, enriched with BSF protein for maximum growth.",
    tag: null
  },
  {
    id: 5,
    name: "Pupas for Breeding",
    category: "Breeding",
    price: "₦8,000 / bag",
    image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=800&auto=format&fit=crop",
    desc: "Emerges into flies. For people who want to breed their own larvae or use as live feed for aquaculture.",
    tag: null
  },
  {
    id: 6,
    name: "Fish",
    category: "Breeding",
    price: "₦3,500 / kg",
    image: "https://images.unsplash.com/photo-1524704659698-9ff03063f854?q=80&w=800&auto=format&fit=crop",
    desc: "Healthy and disease-free, perfect for aquaponics or traditional fish farming.",
    tag: null
  },
  {
    id: 7,
    name: "Piggery",
    category: "Breeding",
    price: "Coming soon",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=800&auto=format&fit=crop",
    desc: "Coming soon! We will be offering piglets and swine feed enriched with BSF protein. Stay tuned for updates.",
    tag: null
  },
  {
    id: 8,
    name: "Poultry",
    category: "Breeding",
    price: "Coming soon",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=800&auto=format&fit=crop",
    desc: "Coming soon! We will be offering poultry feed enriched with BSF protein. Stay tuned for updates.",
    tag: null
  },
  {
    id: 9,
    name: "Snailery",
    category: "Breeding",
    price: "Coming soon",
    image: "https://images.unsplash.com/photo-1534432082912-63853111f62b?q=80&w=800&auto=format&fit=crop",
    desc: "Coming soon! We will be offering snail feed enriched with BSF protein. Stay tuned for updates.",
    tag: null
  },
];

const CATEGORIES = ["All", "Feed", "Agriculture", "Training", "Breeding"];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans text-gray-900">
      
      {/* 1. HERO SECTION & SEARCH */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Davrel Market</h1>
              <p className="text-gray-500 text-sm mt-1">Premium agricultural products & supplies.</p>
            </div>
            
            <div className="relative w-full md:w-96 group">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 border border-transparent focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition outline-none text-sm"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 mt-8 overflow-x-auto pb-2 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="relative px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200"
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-green-700 rounded-full shadow-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`relative z-10 ${activeCategory === cat ? "text-white" : "text-gray-600 hover:text-green-700"}`}>
                  {cat}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. TRUST INDICATORS */}
      <div className="bg-green-50/50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex gap-8 text-xs font-bold text-green-800 overflow-x-auto tracking-wide uppercase">
          <span className="flex items-center gap-2 shrink-0">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            100% Organic
          </span>
          <span className="flex items-center gap-2 shrink-0">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            Fast Delivery
          </span>
          <span className="flex items-center gap-2 shrink-0">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            Bulk & Retail
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* 3. PRODUCT GRID */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="group bg-white rounded-2xl p-3 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 mb-4">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  {product.tag && (
                    <div className="absolute top-2 left-2 bg-white/90 backdrop-blur text-green-800 text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider">
                      {product.tag}
                    </div>
                  )}
                </div>

                <div className="flex flex-col flex-grow px-1">
                  <div className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-1">
                    {product.category}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2 group-hover:text-green-700 transition">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed flex-grow">
                    {product.desc}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="font-bold text-gray-900 text-sm">
                      {product.price}
                    </span>
                    <Link href="/contact" className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white p-2 rounded-lg transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 4. BULK ORDER CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 relative rounded-3xl overflow-hidden bg-gray-900 text-white shadow-2xl"
        >
          <div className="absolute inset-0 opacity-40">
            <Image 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200"
              alt="Warehouse"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-green-400 font-bold tracking-widest text-xs uppercase mb-2 block">Industrial Supply</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Bulk Orders?</h2>
              <p className="text-gray-300 text-lg">Contact us for wholesale pricing on BSF products and livestock feed.</p>
            </div>
            <Link href="/contact" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition transform hover:scale-105 shrink-0">
              Get Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}