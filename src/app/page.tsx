'use client'; 

import Link from 'next/link';
import { motion, Variants } from 'framer-motion'; // 1. Import Variants
import { COMPANY_INFO, CORE_VALUES, SUBSIDIARIES } from './data';
import { ArrowRight, Globe2, Leaf, TrendingUp } from 'lucide-react';

// 2. Add the ': Variants' type annotation here
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// 3. And here
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 selection:bg-green-200 selection:text-green-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white overflow-hidden min-h-[90vh] flex items-center justify-center">
        
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-green-600/30 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], rotate: [0, -45, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-emerald-800/40 rounded-full blur-[100px]" 
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          
          {/* Animated Content Wrapper */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-green-300 text-sm font-medium mb-8 backdrop-blur-md shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Building the Future
            </motion.div>

            {/* Title */}
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-balance bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60">
              Sustainable Value. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                Responsible Growth.
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed text-balance">
              {COMPANY_INFO.positioning}
            </motion.p>

            {/* Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Link href="/operations">
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center justify-center gap-2 bg-green-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg shadow-green-900/20"
                >
                  Our Operations
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
              
              <Link href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }} 
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center bg-white/5 text-white border border-white/10 font-semibold py-4 px-8 rounded-full backdrop-blur-sm"
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. MISSION & VISION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Mission Card */}
          <motion.div variants={fadeInUp} className="group relative overflow-hidden bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-green-900/5 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-700">
                <TargetIcon /> 
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed text-lg">{COMPANY_INFO.mission}</p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div variants={fadeInUp} className="group relative overflow-hidden bg-slate-900 p-10 rounded-3xl border border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800/50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-green-400">
                <Globe2 />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Our Vision</h2>
              <p className="text-slate-300 leading-relaxed text-lg">{COMPANY_INFO.vision}</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="bg-white py-24 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-3">What Drives Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Core Values</h3>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {CORE_VALUES.map((value, index) => (
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                key={index} 
                className="group p-8 rounded-2xl bg-stone-50 border border-transparent hover:border-green-100 hover:bg-white hover:shadow-lg hover:shadow-green-900/5 transition-all duration-300"
              >
                <div className="mb-6 inline-block p-3 rounded-lg bg-white shadow-sm text-green-700 group-hover:text-green-600 group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. SUBSIDIARIES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">The Davrel Ecosystem</h2>
            <p className="text-lg text-slate-500">
              From sustainable agriculture to energy solutions, our diverse portfolio drives comprehensive growth.
            </p>
          </div>
          <Link href="/operations" className="text-green-700 font-semibold hover:text-green-800 flex items-center gap-2 group">
            View all companies <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SUBSIDIARIES.map((sub, index) => (
            <motion.div 
              variants={fadeInUp}
              key={index} 
              className="flex flex-col bg-white border border-gray-200 rounded-2xl p-6 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-900/5 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                  sub.status === 'Active' 
                    ? 'bg-green-50 text-green-700 border-green-200' 
                    : 'bg-amber-50 text-amber-700 border-amber-200'
                }`}>
                  {sub.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-green-700 transition-colors">
                {sub.name}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{sub.desc}</p>
              
              <div className="pt-6 border-t border-gray-100 flex items-center text-sm font-medium text-slate-400 group-hover:text-slate-900 transition-colors">
                Learn more
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="px-6 pb-20 pt-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto bg-slate-900 rounded-[2.5rem] p-12 md:p-24 text-center overflow-hidden relative"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
              <motion.div 
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute -top-24 -left-24 w-96 h-96 bg-green-500 rounded-full blur-[128px]" 
              />
              <motion.div 
                animate={{ scale: [1, 1.1, 1], rotate: [0, -90, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-600 rounded-full blur-[128px]" 
              />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to build with us?</h2>
            <p className="text-xl text-slate-300 mb-10 text-balance">
              Whether it's sustainable farming, procurement, or energy, we deliver excellence at every step.
            </p>
            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-green-500 text-slate-900 font-bold py-4 px-10 rounded-full hover:bg-green-400 transition"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

// Helper component
function TargetIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
  )
}