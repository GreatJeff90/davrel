import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_INFO } from '../app/data';

// Define link structures for easier maintenance
const companyLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Subsidiaries', href: '/subsidiaries' },
  { label: 'Careers', href: '/careers' },
];

const operationLinks = [
  { label: 'Agriculture & BSF', href: '/operations' },
  { label: 'Shop Products', href: '/shop' },
  { label: 'Procurement Services', href: '/procurement' },
  { label: 'Logistics', href: '/logistics' },
];

// Accurate Social Media Data
const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'
  },
  {
    name: 'Twitter', // X Logo
    href: '#',
    path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z'
  },
  {
    name: 'LinkedIn',
    href: '#',
    path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z circle cx="4" cy="4" r="2"'
  },
  {
    name: 'Instagram',
    href: '#',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-950 text-green-100 border-t border-green-900 font-sans">
      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* COLUMN 1: Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm group-hover:bg-white/20 transition duration-300">
                <Image 
                  src="/images/logo.png" 
                  alt="Davrel Logo" 
                  width={40} 
                  height={40} 
                  className="object-contain h-10 w-auto"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-wide">
                Davrel Global
              </span>
            </Link>
            
            <p className="text-green-300 leading-relaxed text-sm max-w-xs">
              {COMPANY_INFO.tagline || "Empowering sustainable growth through global resources and agricultural innovation."}
            </p>

            {/* Social Media Icons (Accurate SVGs) */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  aria-label={social.name}
                  className="bg-green-900 p-2.5 rounded-full text-green-300 hover:bg-green-700 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-green-500/20"
                >
                  <span className="sr-only">{social.name}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    {/* Handles path string, or complex paths like LinkedIn's dot */}
                    {social.name === 'LinkedIn' ? (
                        <>
                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                            <circle cx="4" cy="4" r="2" />
                        </>
                    ) : (
                        <path d={social.path} />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Company Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider border-b border-green-800 pb-2 w-fit">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-green-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Operations Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider border-b border-green-800 pb-2 w-fit">
              Operations
            </h3>
            <ul className="space-y-3">
              {operationLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-green-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider border-b border-green-800 pb-2 w-fit">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-green-300">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>
                  75 Pipe line Off Igbo Etche Road ,<br />
                  Omuotobe Rivers State.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:info@davrel.com" className="hover:text-white transition">info@davrel.com</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+2348037592346" className="hover:text-white transition">+2348037592346</a> <br />
                <a href="tel:+2347018735340" className="hover:text-white transition">+2347018735340</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR: Copyright & Legal */}
      <div className="bg-green-950 border-t border-green-900">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-green-400">
          <p>&copy; {currentYear} Davrel Global Resources. All rights reserved.</p>
          
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-white transition">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}