'use client';

import { motion, Variants } from 'framer-motion'; // 1. Import Variants
import Image from 'next/image';
import Link from 'next/link';
import { COMPANY_INFO, CORE_VALUES } from '../data';

// --- ANIMATION VARIANTS (Fixed Types) ---

// 2. Add ': Variants' to all these definitions
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const scaleIn: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } }
};

export default function About() {
  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-green-950 text-white py-24 md:py-32 overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>

        {/* Floating Gradient Orbs (Background) */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[100px]" 
        />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tight">
              Driving Global <span className="text-green-400">Innovation</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed font-light">
              {COMPANY_INFO.mission}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. SPLIT LAYOUT: WHO WE ARE */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <div>
              <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-2">
                Who We Are
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Building a Sustainable Future Through Integrated Resources.
              </h3>
            </div>
            
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                <span className="font-semibold text-green-900">{COMPANY_INFO.name}</span> functions 
                as a parent company, housing specialized subsidiaries designed to operate independently 
                while aligning with our core values. 
              </p>
              <p>
                We bridge the gap between natural potential and technical execution, turning raw 
                resources into sustainable value for communities and stakeholders alike.
              </p>
            </div>
            
            {/* Signature / Decorative Element */}
            <div className="pt-2">
              <div className="h-1.5 w-24 bg-green-500 rounded-full"></div>
            </div>
          </motion.div>

          {/* Image Content (Real Image) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl group"
          >
             <Image 
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
               alt="Modern Corporate Office"
               fill
               className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-green-900/10 group-hover:bg-transparent transition duration-500" />
          </motion.div>
        </div>
      </section>

      {/* 3. BREAKOUT SECTION: VISION */}
      <section className="bg-green-50 border-y border-green-100 relative overflow-hidden">
         {/* Decorative quotes */}
         <div className="absolute top-0 left-10 text-9xl font-serif text-green-200 opacity-30 select-none pointer-events-none">“</div>
         
         <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
           className="max-w-7xl mx-auto px-6 py-28 relative z-10"
         >
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center justify-center p-4 bg-green-100 text-green-700 rounded-full mb-4 shadow-sm">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif text-green-900 leading-tight italic">
              {COMPANY_INFO.vision}
            </h2>
            <p className="text-green-700 font-bold tracking-widest uppercase text-sm border-t border-green-200 inline-block pt-4">
              Our Vision
            </p>
          </div>
        </motion.div>
      </section>

      {/* 4. CORE VALUES GRID */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">The principles that guide every decision we make.</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {CORE_VALUES.map((val, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-50 text-green-700 rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold border border-green-100">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 5. TEAM / LEADERSHIP */}
      <section className="bg-slate-50 py-28 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Leadership Team</h2>
                <p className="mt-2 text-gray-600 max-w-md">Meet the experts leading Davrel Global towards a sustainable future.</p>
              </div>
              <Link href="/contact" className="hidden md:block text-green-700 font-bold hover:text-green-800 transition flex items-center gap-2">
                View all team members <span>&rarr;</span>
              </Link>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { name: "David Okeke", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
                { name: "Sarah Johnson", role: "Head of Operations", img: "https://images.unsplash.com/photo-1573496359-0e75849353a0?q=80&w=800&auto=format&fit=crop" },
                { name: "Michael Chen", role: "Chief Financial Officer", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
                { name: "Amara Ndiaye", role: "Lead Agronomist", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" }
              ].map((member, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="group cursor-pointer">
                  <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-5 bg-gray-200">
                    <Image 
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0 grayscale-[0.2]"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <p className="text-white text-sm font-medium">Connect on LinkedIn &rarr;</p>
                    </div>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-green-700 transition-colors">{member.name}</h3>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="bg-green-900 py-24 text-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to work with us?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-900 px-10 py-4 rounded-full font-bold hover:bg-green-50 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Contact Us
            </Link>
            <Link href="/operations" className="border border-green-400/30 bg-green-800/50 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold hover:bg-green-800 transition">
              View Operations
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}