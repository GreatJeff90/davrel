'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// --- ANIMATION VARIANTS (Typed to fix TS errors) ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Operations() {
  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-green-950 to-green-900 py-24 md:py-32 text-center text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat"
        />
        
        <div className="relative max-w-4xl mx-auto px-6 z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-full bg-green-800/50 border border-green-600 text-green-200 text-sm font-semibold mb-6 backdrop-blur-md">
              Our Expertise
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Integrated Global Operations
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-green-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              From sustainable protein production to complex supply chain management, 
              we operate at the intersection of nature and commerce.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. AGRICULTURE SECTION (The Core) */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Content Side */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="order-2 lg:order-1 space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-2">
                  Agro-Allied Services
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Agriculture & BSF Farming
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We are revolutionizing animal feed through sustainable insect protein. 
                  Our operations focus on circular economy principles, reducing waste while maximizing output.
                </p>
                {/* Placeholder for future diagram if needed:  */}
              </motion.div>

              {/* Feature List with Icons */}
              <div className="space-y-6">
                {/* Feature 1 */}
                <motion.div variants={fadeInUp} className="flex gap-4 p-4 bg-green-50 rounded-xl border border-green-100 transition hover:shadow-md hover:bg-green-100/50">
                  <div className="shrink-0 w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-700">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Black Soldier Fly (BSF) Farming</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Producing high-protein larvae as a cost-effective feed alternative for poultry and fish farmers.
                    </p>
                  </div>
                </motion.div>

                {/* Feature 2 */}
                <motion.div variants={fadeInUp} className="flex gap-4 p-4 bg-green-50 rounded-xl border border-green-100 transition hover:shadow-md hover:bg-green-100/50">
                  <div className="shrink-0 w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-700">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Training & Capacity Building</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Empowering local farmers with training on BSF techniques, business models, and scalability.
                    </p>
                  </div>
                </motion.div>

                {/* Feature 3 */}
                <motion.div variants={fadeInUp} className="flex gap-4 p-4 bg-green-50 rounded-xl border border-green-100 transition hover:shadow-md hover:bg-green-100/50">
                  <div className="shrink-0 w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-700">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Food Processing</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Committed to quality assurance and value addition in crop and food production.
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="pt-4">
                <Link 
                  href="/shop" 
                  className="inline-flex items-center gap-2 bg-green-700 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-green-800 transition shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Visit Our Shop
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </motion.div>
            </motion.div>

            {/* Image Side - FARM IMAGE 1 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageReveal}
              className="order-1 lg:order-2"
            >
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                <Image 
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop"
                  alt="Sustainable Wheat Farming at Sunset"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. PROCUREMENT SECTION (Logistics) */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Side - FARM RELATED LOGISTICS IMAGE 2 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageReveal}
              className="relative h-[500px] w-full bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200 group"
            >
               <Image 
                  src="https://images.unsplash.com/photo-1625246333195-092ef353c3e4?q=80&w=1200&auto=format&fit=crop"
                  alt="Agricultural Harvesting and Logistics"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition duration-500" />
            </motion.div>

            {/* Content Side */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Commercial Services
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  General Procurement & Sales
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We bridge the gap between quality raw materials and the industries that need them. 
                  Davrel ensures legal sourcing, secure supply chains, and products tailored to client needs.
                </p>
                 {/* Placeholder for future diagram if needed: 

[Image of supply chain management process diagram]
 */}
              </motion.div>

              {/* Cards Grid for Features */}
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div variants={fadeInUp} className="bg-white p-5 rounded-lg shadow-sm border border-slate-100 hover:border-blue-200 transition">
                  <h4 className="font-bold text-slate-800 text-lg mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Import & Export
                  </h4>
                  <p className="text-sm text-slate-600">Handling processed foods, raw materials, and agricultural machinery.</p>
                </motion.div>

                <motion.div variants={fadeInUp} className="bg-white p-5 rounded-lg shadow-sm border border-slate-100 hover:border-orange-200 transition">
                    <h4 className="font-bold text-slate-800 text-lg mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    Strategic Sourcing
                  </h4>
                  <p className="text-sm text-slate-600">Reliable supply chain management tailored for manufacturing sectors.</p>
                </motion.div>

                <motion.div variants={fadeInUp} className="bg-white p-5 rounded-lg shadow-sm border border-slate-100 sm:col-span-2 hover:border-green-200 transition">
                    <h4 className="font-bold text-slate-800 text-lg mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Quality Verification
                  </h4>
                  <p className="text-sm text-slate-600">Ensuring all products meet international safety, legal, and quality standards before shipment.</p>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="pt-2">
                <Link href="/contact" className="text-slate-900 font-bold hover:text-blue-700 transition flex items-center gap-2 group">
                  Contact Procurement Team 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <section className="bg-green-900 text-white py-16 text-center">
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-2xl font-bold mb-4">Interested in Partnering with Us?</h2>
          <p className="text-green-100 mb-8">Whether you need BSF larvae for your farm or a procurement partner for your business.</p>
          <div className="flex justify-center gap-4">
             <Link href="/contact" className="bg-white text-green-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg hover:scale-105 transform">
               Get in Touch
             </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}