'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Define navigation data here to avoid repetition
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Operations', href: '/operations' },
    { name: 'Subsidiaries', href: '/subsidiaries' },
    { name: 'Shop', href: '/shop' },
    { name: 'Blog', href: '/blog' },
  ];

  // Helper to determine link classes based on active state
  const getLinkClass = (path: string, isMobile = false) => {
    const baseClass = "transition duration-150 ease-in-out font-medium";
    const isActive = pathname === path;

    if (isMobile) {
      return `${baseClass} block px-3 py-3 rounded-md text-base ${
        isActive 
          ? "bg-green-50 text-green-800 font-semibold" 
          : "text-gray-700 hover:text-green-800 hover:bg-green-50"
      }`;
    }

    return `${baseClass} px-3 py-2 rounded-md text-sm ${
      isActive 
        ? "text-green-700 font-semibold" 
        : "text-gray-700 hover:text-green-700 hover:bg-gray-50"
    }`;
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* LEFT SIDE: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
              <div className="relative h-10 w-10">
                <Image 
                  src="/images/logo.png" 
                  alt="Davrel Logo" 
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-200"
                  priority
                />
              </div>
              <span className="font-bold text-xl text-green-900 tracking-tight">
                Davrel Global
              </span>
            </Link>
          </div>

          {/* RIGHT SIDE: Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={getLinkClass(link.href)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* CTA Button separated for distinct styling */}
            <div className="pl-4">
              <Link 
                href="/contact" 
                className="bg-green-700 text-white hover:bg-green-800 px-5 py-2.5 rounded-md text-sm font-medium transition shadow-sm hover:shadow-md"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-800 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 transition"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                // X Icon
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {/* Note: In a real production app, consider using a library like HeadlessUI for accessibility trap and animations */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`} 
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100 shadow-lg">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className={getLinkClass(link.href, true)}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="pt-2 mt-2 border-t border-gray-100">
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-3 rounded-md text-base font-bold text-white bg-green-700 hover:bg-green-800 transition shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}