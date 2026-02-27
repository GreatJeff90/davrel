import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// --- MOCK DATA (Ideally this would be in a separate data.ts file) ---
const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of Protein: Why BSF Farming is Taking Over",
    excerpt: "Black Soldier Fly larvae are revolutionizing the animal feed industry. Discover how this sustainable protein source is reducing costs for poultry farmers.",
    date: "Oct 12, 2025",
    category: "Sustainability",
    author: "Amara Ndiaye",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1200&auto=format&fit=crop",
    content: `
      <p class="mb-6">The global demand for protein is skyrocketing, yet traditional sources like fishmeal and soy are becoming unsustainable and expensive. Enter the <strong>Black Soldier Fly (BSF)</strong>—a humble insect that is rapidly becoming the superhero of the agricultural world.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Why BSF?</h2>
      <p class="mb-6">Black Soldier Fly larvae are voracious eaters. They can consume organic waste—from market scraps to agricultural byproducts—and convert it into high-quality protein and fat. This process not only manages waste but produces a feed ingredient that is rich in amino acids essential for poultry and fish health.</p>
      
      <blockquote class="border-l-4 border-green-500 pl-4 italic text-gray-700 my-8">
        "BSF farming represents the perfect circular economy. We take waste, turn it into value, and feed the world without depleting our oceans."
      </blockquote>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Economic Benefits for Farmers</h2>
      <p class="mb-6">For local farmers in Nigeria, feed costs can account for up to 70% of production expenses. By integrating BSF larvae into their feed mix, farmers can reduce reliance on imported fishmeal, lowering costs by as much as 25% while maintaining (or even improving) livestock growth rates.</p>
      
      <p>At Davrel Global, we are committed to scaling this technology. Our training programs are helping smallholder farmers set up their own colonies, ensuring food security starts at the grassroots level.</p>
    `
  },
  {
    id: 2,
    title: "Navigating Global Procurement in 2026",
    excerpt: "Supply chains are evolving. Here are the top strategies Davrel uses to ensure timely delivery of raw materials amidst global shifts.",
    date: "Sep 28, 2025",
    category: "Logistics",
    author: "David Okeke",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1494412574643-35d324698422?q=80&w=1200&auto=format&fit=crop",
    content: `
      <p class="mb-6">The logistics landscape has changed dramatically over the last decade. From post-pandemic shifts to new trade tariffs, navigating global procurement requires agility and foresight.</p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Diversification is Key</h2>
      <p class="mb-6">Reliance on a single source country is a risk modern businesses can no longer afford. At Davrel, we maintain active supplier relationships across Asia, Europe, and the Americas to ensure that if one route closes, another opens.</p>
    `
  },
  {
    id: 3,
    title: "Organic Fertilizer vs. Chemical: The Long Term Impact",
    excerpt: "A deep dive into soil health and why switching to Frass fertilizer yields better crops over a 5-year cycle.",
    date: "Sep 15, 2025",
    category: "Agriculture",
    author: "Sarah Johnson",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1622383563227-0440114a6801?q=80&w=1200&auto=format&fit=crop",
    content: `
      <p class="mb-6">Soil degradation is a silent crisis. Years of heavy chemical fertilizer use strip the soil of its natural microbiome, leading to "dead soil" that requires ever-increasing inputs to produce the same yield.</p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">The Frass Advantage</h2>
      <p class="mb-6">Insect Frass (BSF manure) is packed with chitin, a natural biopolymer that triggers plant immune systems. It doesn't just feed the plant; it heals the soil.</p>
    `
  },
  // ... (Add other posts here if needed to match the list)
];

// Type definition for Next.js 15+ Params
type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.id === Number(id));
  
  if (!post) {
    return { title: 'Article Not Found' };
  }
  
  return {
    title: `${post.title} | Davrel Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  // 1. Await params (Required in Next.js 15)
  const { id } = await params;
  
  // 2. Find the post
  const post = BLOG_POSTS.find((p) => p.id === Number(id));

  // 3. Handle 404
  if (!post) {
    notFound();
  }

  // 4. Find related posts (just picking the first 2 that aren't this one)
  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <div className="bg-white min-h-screen font-sans pb-20">
      
      {/* HEADER IMAGE */}
      <div className="relative w-full h-[50vh] min-h-[400px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="max-w-4xl mx-auto text-white">
            <span className="inline-block py-1 px-3 rounded-full bg-green-600/90 text-white text-xs font-bold uppercase tracking-wider mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-sm md:text-base text-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">
                  {post.author.charAt(0)}
                </div>
                <span>{post.author}</span>
              </div>
              <span className="w-1 h-1 bg-gray-400 rounded-full" />
              <span>{post.date}</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ARTICLE CONTENT */}
      <main className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Text Column */}
        <div className="lg:col-span-2">
          {/* Breadcrumb */}
          <Link href="/blog" className="inline-flex items-center text-green-700 font-bold text-sm mb-8 hover:underline">
            ← Back to all articles
          </Link>

          {/* Rich Text Body */}
          <div 
            className="prose prose-lg prose-green max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          
          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Share this article</h3>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 transition">Twitter</button>
              <button className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 transition">LinkedIn</button>
              <button className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 transition">Copy Link</button>
            </div>
          </div>
        </div>

        {/* Sidebar (Related Posts) */}
        <aside className="lg:col-span-1 space-y-8">
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 sticky top-24">
            <h3 className="font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Read Next</h3>
            <div className="space-y-6">
              {relatedPosts.map((related) => (
                <Link key={related.id} href={`/blog/${related.id}`} className="block group">
                  <div className="relative h-32 w-full rounded-xl overflow-hidden mb-3">
                    <Image 
                      src={related.image} 
                      alt={related.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="font-bold text-gray-900 leading-snug group-hover:text-green-700 transition-colors">
                    {related.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-2">{related.readTime}</p>
                </Link>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">Subscribe to our newsletter</h4>
              <p className="text-xs text-gray-500 mb-4">Get the latest agricultural insights.</p>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm mb-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
              <button className="w-full bg-green-700 text-white text-sm font-bold py-2 rounded-lg hover:bg-green-800 transition">
                Subscribe
              </button>
            </div>
          </div>
        </aside>

      </main>
    </div>
  );
}