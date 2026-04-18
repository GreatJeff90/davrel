// src/app/layout.tsx
import './globals.css';
import Navbar from '@/components/Navbar'; // Adjust this path if your Navbar is elsewhere

export const metadata = {
  title: 'Davrel Market',
  description: 'Premium agricultural products & BSF supplies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className="bg-gray-50 flex flex-col min-h-screen" 
        suppressHydrationWarning
      >
        {/* Navbar sits at the top */}
        <Navbar />
        
        {/* Main content area */}
        <main className="flex-grow">
          {children}
        </main>

        {/* You can add a Footer here if needed */}
      </body>
    </html>
  );
}