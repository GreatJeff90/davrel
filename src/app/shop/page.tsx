'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Optimized Product Data - Prices removed
const PRODUCTS = [
  {
    id: 1,
    name: "Dried BSF Larvae (High Protein)",
    category: "Feed",
    image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=800&auto=format&fit=crop",
    desc: "Premium dried larvae for poultry and fish feed. 100% organic and sustainable protein source.",
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "BSF Frass Fertilizer",
    category: "Agriculture",
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=800&auto=format&fit=crop",
    desc: "Organic fertilizer rich in nutrients. Perfect for vegetable farming and enhancing soil health.",
    tag: "Eco-Friendly"
  },
  {
    id: 3,
    name: "Live Larvae Starter Kit",
    category: "Training",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
    desc: "Everything you need to start your own BSF colony. Includes live larvae, bin, and manual.",
    tag: "New Arrival"
  },
  {
    id: 4,
    name: "Processed Organic Feed",
    category: "Feed",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=800&auto=format&fit=crop",
    desc: "Balanced feed mix for layers and broilers, enriched with BSF protein for maximum growth.",
    tag: null
  },
  {
    id: 5,
    name: "Pupas for Breeding",
    category: "Breeding",
    image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=800&auto=format&fit=crop",
    desc: "Emerges into flies. For people who want to breed their own larvae or use as live feed.",
    tag: null
  },
  {
    id: 6,
    name: "Fresh Fish",
    category: "Breeding",
    image: "https://images.unsplash.com/photo-1524704659698-9ff03063f854?q=80&w=800&auto=format&fit=crop",
    desc: "Healthy and disease-free, perfect for aquaponics or traditional fish farming.",
    tag: null
  },
  {
    id: 7,
    name: "Piggery",
    category: "Breeding",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=800&auto=format&fit=crop",
    desc: "We will be offering piglets and swine feed enriched with BSF protein. Stay tuned.",
    tag: null
  },
  {
    id: 8,
    name: "Poultry",
    category: "Breeding",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=800&auto=format&fit=crop",
    desc: "High-quality poultry options fed with organic BSF nutrient-rich feed.",
    tag: null
  },
  {
    id: 9,
    name: "Snailery",
    category: "Breeding",
    image: "https://images.unsplash.com/photo-1534432082912-63853111f62b?q=80&w=800&auto=format&fit=crop",
    desc: "Premium snails bred in a controlled organic environment for maximum yield.",
    tag: null
  },
];

const CATEGORIES = ["All", "Feed", "Agriculture", "Training", "Breeding"];
const WHATSAPP_LINK = "https://wa.link/ucovx9";

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
                    layoutId="activeCategoryTab"
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
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 mb-4">
          <Image 
            src={product.image} 
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority={product.id <= 4}
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
          
          <div className="pt-4 border-t border-gray-100">
            {/* IMPORTANT: Use the direct link here to ensure 
               it works even if the constant is missing 
            */}
            <Link 
              href="https://wa.link/ucovx9" 
              target="_blank"
              className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-200 active:scale-95"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contact for Price
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
              <p className="text-gray-300 text-lg">Contact us for wholesale pricing on BSF products and livestock feed via WhatsApp.</p>
            </div>
            <Link 
              href={WHATSAPP_LINK} 
              target="_blank"
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition transform hover:scale-105 shrink-0"
            >
              Get Quote Now
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}