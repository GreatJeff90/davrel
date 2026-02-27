// app/subsidiaries/page.tsx
import { SUBSIDIARIES } from '../data';
import Image from 'next/image';
import Link from 'next/link';

// Curated "Pinterest-Aesthetic" Image Collection
// These are Unsplash images selected for their specific mood, lighting, and vertical composition.
const PIN_AESTHETIC: Record<string, string> = {
  "Davrel Farms": "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=800&auto=format&fit=crop", // Golden hour wheat, moody
  "General Procurement": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop", // Industrial minimalism
  "Ace Energy": "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop", // Abstract nature/tech
  "Ace Forms and Customs": "https://images.unsplash.com/photo-1518005020951-ecc8596763b7?q=80&w=800&auto=format&fit=crop", // Concrete architecture, brutalist
  "Ace Suites": "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop", // Warm hotel interior, beige tones
  "Sauce Place": "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop", // Dark cocktail bar vibe
};

export default function Subsidiaries() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* HEADER: Editorial Style */}
      <div className="pt-24 pb-12 px-6 text-center max-w-4xl mx-auto">
        <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">
          The Portfolio
        </p>
        <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6">
          Curated Ventures
        </h1>
        <p className="text-gray-500 font-light italic text-lg">
          "A collection of specialized businesses, each operating as a distinct pillar of the Davrel ecosystem."
        </p>
      </div>

      {/* MASONRY LAYOUT (The Pinterest Look) */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        {/* Tailwind's 'columns' utility creates the masonry effect */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          
          {SUBSIDIARIES.map((sub, index) => {
            const imageUrl = PIN_AESTHETIC[sub.name] || "https://images.unsplash.com/photo-1508615039623-a25605d2b022?q=80&w=800";
            const isActive = sub.status === 'Active';

            return (
              <div 
                key={index} 
                className="break-inside-avoid relative group rounded-3xl overflow-hidden cursor-pointer"
              >
                {/* 1. The Image (Tall & Aesthetic) */}
                <div className="relative w-full">
                  <Image
                    src={imageUrl}
                    alt={sub.name}
                    width={800}
                    height={1000} // Taller aspect ratio
                    className={`w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 ${
                      !isActive && 'grayscale contrast-125'
                    }`}
                  />
                  
                  {/* Dark Overlay Gradient (Pinterest Style) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                {/* 2. Floating Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  {/* Top: Status Pill */}
                  <div className="flex justify-end">
                    <span className={`backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${
                      isActive 
                        ? 'bg-white/20 text-white border border-white/30' 
                        : 'bg-black/50 text-gray-300 border border-gray-600'
                    }`}>
                      {sub.status}
                    </span>
                  </div>

                  {/* Bottom: Text Info */}
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h2 className="text-3xl font-serif text-white mb-2 drop-shadow-md">
                      {sub.name}
                    </h2>
                    <p className={`text-sm text-gray-200 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ${
                      !isActive && 'italic text-gray-400'
                    }`}>
                      {sub.desc}
                    </p>

                    {/* "Save/Explore" Button that appears on hover */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {isActive ? (
                        <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold text-sm shadow-lg hover:bg-gray-100 transition">
                          Explore Board
                        </button>
                      ) : (
                        <div className="flex items-center gap-2 text-white/70 text-sm">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                          In Development
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FOOTER CTA */}
      <div className="text-center pb-20">
        <Link href="/contact" className="inline-block border-b border-gray-900 text-gray-900 pb-1 text-sm font-bold uppercase tracking-widest hover:text-green-700 hover:border-green-700 transition">
          Become a Partner
        </Link>
      </div>

    </div>
  );
}