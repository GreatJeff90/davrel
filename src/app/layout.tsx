// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar'; // Importing Navbar
import Footer from '../components/Footer'; // Importing Footer

export const metadata: Metadata = {
  title: 'Davrel Global Resources',
  description: 'Sustainable Value. Responsible Growth.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 flex flex-col min-h-screen">
        {/* Navbar sits at the top */}
        <Navbar />
        
        {/* Main content grows to fill space */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer sits at the bottom */}
        <Footer />
      </body>
    </html>
  );
}