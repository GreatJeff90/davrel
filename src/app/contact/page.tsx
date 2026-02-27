// app/contact/page.tsx
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <div className="relative bg-green-900 pb-32 pt-20 overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10">
            <Image 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop"
              alt="Background Pattern"
              fill
              className="object-cover"
              priority
            />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center text-white z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-green-100 text-xs font-bold tracking-widest uppercase mb-6">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Let's Start a Conversation.
          </h1>
          <p className="text-green-100 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Whether you are looking for bulk supply, agricultural consulting, or just have a question, 
            our team is here to help.
          </p>
        </div>
      </div>

      {/* 2. MAIN CONTENT CONTAINER (Overlaps Hero) */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* LEFT: Contact Information Card */}
          <div className="lg:col-span-1 space-y-6">
            {/* Info Card */}
            <div className="bg-green-800 text-white rounded-2xl p-8 shadow-xl overflow-hidden relative">
              <div className="relative z-10 space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-green-300 uppercase tracking-widest mb-4">Contact Info</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-lg">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </div>
                      <div>
                        <span className="block text-xs text-green-300 uppercase font-bold mb-1">Head Office</span>
                        <p className="font-medium">75 Pipe line Off Igbo Etche Road ,<br />
                  Omuotobe Rivers State.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-lg">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <div>
                        <span className="block text-xs text-green-300 uppercase font-bold mb-1">Email Us</span>
                        <a href="mailto:info@davrel.com" className="font-medium hover:text-green-200 transition">info@davrelglobal.com</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-lg">
                         <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      </div>
                      <div>
                        <span className="block text-xs text-green-300 uppercase font-bold mb-1">Call Us</span>
                        <a href="tel:+2348037592346" className="font-medium hover:text-green-200 transition">+2348037592346</a> <br />
                        <a href="tel:+2347018735340" className="font-medium hover:text-green-200 transition">+2347018735340</a>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-8 border-t border-white/10">
                  <h3 className="text-sm font-bold text-green-300 uppercase tracking-widest mb-4">Working Hours</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="block text-green-400">Mon - Fri</span>
                      <span className="font-bold">8:00 AM - 5:00 PM</span>
                    </div>
                    <div>
                      <span className="block text-green-400">Sat</span>
                      <span className="font-bold">10:00 AM - 2:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-700 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl h-64 shadow-sm border border-gray-100 overflow-hidden relative group">
               <Image 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop"
                 alt="Map Location"
                 fill
                 className="object-cover group-hover:scale-105 transition duration-700"
               />
               <div className="absolute inset-0 bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition">
                  <span className="bg-white px-4 py-2 rounded-full shadow-lg text-xs font-bold text-gray-800">
                    View on Google Maps
                  </span>
               </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" placeholder="john@example.com" />
                  </div>
                   <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" placeholder="+234..." />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Department</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition appearance-none text-gray-600">
                      <option>General Inquiry</option>
                      <option>Product Order (BSF/Feed)</option>
                      <option>Procurement & Import</option>
                      <option>Partnership Proposal</option>
                    </select>
                    {/* Custom Dropdown Arrow */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="w-full bg-green-700 text-white font-bold py-4 px-6 rounded-lg hover:bg-green-800 transition shadow-lg hover:shadow-green-500/25 transform active:scale-[0.99]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 3. FAQ SECTION */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-green-800 mb-2">Do you offer delivery?</h3>
            <p className="text-gray-600 text-sm">Yes, we deliver our agricultural products nationwide. Delivery costs depend on the volume and location.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-green-800 mb-2">Can I visit the farm?</h3>
            <p className="text-gray-600 text-sm">Visits to our BSF facilities are available by appointment only. Please contact us to schedule a tour.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-green-800 mb-2">Do you sell in bulk?</h3>
            <p className="text-gray-600 text-sm">Absolutely. Our procurement division specializes in bulk supply for industrial use. Select "Procurement" in the form above.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-green-800 mb-2">Where is your office located?</h3>
            <p className="text-gray-600 text-sm">Our administrative head office is located in Lagos, while our farms are located in the outskirts to ensure optimal production.</p>
          </div>
        </div>
      </div>

    </div>
  );
}