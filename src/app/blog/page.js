import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import Link from "next/link";
import { client } from "@/sanity/client"; // Sanity Client
import { urlFor } from "@/sanity/urlFor"; // Resim Helper
import { ArrowRight, Calendar, Clock } from "lucide-react";

// Veriyi Çekme Fonksiyonu (Revalidate: 60 saniyede bir günceller)
async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    mainImage,
    publishedAt,
    overview
  }`;
  return await client.fetch(query, {}, { next: { revalidate: 60 } });
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="bg-[#0f172a] min-h-screen text-gray-300 selection:bg-[#c5a47e] selection:text-[#0f172a]">
     

      {/* HERO SECTION */}
      <section className="pt-40 pb-16 px-4 bg-[#0b1120] border-b border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#c5a47e] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Güncel Hukuki Gelişmeler
          </span>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            Hukuk Kütüphanesi
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Emsal kararlar, mevzuat değişiklikleri ve hukuki makalelerimiz.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.length > 0 ? (
            posts.map((post, idx) => (
              <Link 
                key={idx} 
                href={`/blog/${post.slug.current}`} 
                className="group flex flex-col bg-[#1e293b] border border-gray-800 rounded-sm overflow-hidden hover:border-[#c5a47e] transition-all duration-500 hover:-translate-y-2"
              >
                {/* Resim Alanı */}
                <div className="h-64 overflow-hidden relative">
                  {post.mainImage && (
                    <img 
                      src={urlFor(post.mainImage).url()} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute top-4 right-4 bg-[#0f172a]/80 backdrop-blur px-3 py-1 rounded-sm text-xs font-bold text-white flex items-center gap-2">
                    <Clock size={12} className="text-[#c5a47e]" /> Okuma
                  </div>
                </div>

                {/* İçerik Alanı */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-[#c5a47e] text-xs font-bold uppercase tracking-widest mb-4">
                    <Calendar size={12} /> {new Date(post.publishedAt).toLocaleDateString("tr-TR")}
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-white mb-4 line-clamp-2 group-hover:text-[#c5a47e] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {post.overview}
                  </p>
                  <div className="flex items-center text-white font-bold text-xs uppercase tracking-widest gap-2 group-hover:gap-4 transition-all pt-4 border-t border-gray-700 mt-auto">
                    Makaleyi Oku <ArrowRight size={14} className="text-[#c5a47e]" />
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-3 text-center py-20">
              <p className="text-xl text-gray-500">Henüz bir yazı eklenmemiş.</p>
            </div>
          )}
        </div>
      </div>

      
    </main>
  );
}