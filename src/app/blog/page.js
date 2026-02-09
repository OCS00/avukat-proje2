// src/app/blog/page.js
"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import { blogPosts } from "@/data/blogData";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Search, Tag, Clock } from "lucide-react";

export default function BlogPage() {
  // İlk yazıyı "Öne Çıkan" (Featured) olarak alalım
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <main className="bg-[#0f172a] min-h-screen text-gray-300">
      <Navbar />

      {/* 1. BLOG HERO & SEARCH */}
      <section className="pt-40 pb-16 px-4 bg-[#0b1120] border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="text-[#c5a47e] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Hukuk Kütüphanesi</span>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white">Güncel Makaleler</h1>
          </div>
          
          {/* Arama Çubuğu */}
          <div className="w-full md:w-auto relative group">
            <input 
              type="text" 
              placeholder="Makale ara..." 
              className="w-full md:w-80 bg-[#1e293b] border border-gray-700 rounded-sm py-4 pl-12 pr-4 text-white focus:border-[#c5a47e] outline-none transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#c5a47e]" size={20} />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* 2. ÖNE ÇIKAN YAZI (FEATURED POST) */}
        {featuredPost && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20 relative group overflow-hidden rounded-sm"
          >
            <div className="aspect-[21/9] w-full relative">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
              <div className="flex items-center gap-4 text-[#c5a47e] text-xs font-bold uppercase tracking-widest mb-4">
                <span className="flex items-center gap-2"><Tag size={14}/> Öne Çıkan</span>
                <span className="flex items-center gap-2"><Calendar size={14}/> {featuredPost.date}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6 leading-tight group-hover:text-[#c5a47e] transition-colors">
                <Link href={`/blog/${featuredPost.id}`}>
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="text-gray-300 text-lg line-clamp-2 mb-8">{featuredPost.summary}</p>
              <Link href={`/blog/${featuredPost.id}`} className="inline-flex items-center gap-2 bg-[#c5a47e] text-[#0f172a] px-8 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-white transition-all">
                Okumaya Devam Et <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}

        {/* 3. DİĞER YAZILAR (GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {otherPosts.map((post, idx) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link 
                href={`/blog/${post.id}`} 
                className="group block bg-[#1e293b] border border-gray-800 rounded-sm overflow-hidden hover:border-[#c5a47e] transition-all duration-300 h-full flex flex-col"
              >
                {/* Resim */}
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-[#0f172a]/80 backdrop-blur px-3 py-1 rounded-sm text-xs font-bold text-white flex items-center gap-2">
                    <Clock size={12} className="text-[#c5a47e]" /> 5 dk okuma
                  </div>
                </div>

                {/* İçerik */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-[#c5a47e] text-xs font-bold uppercase tracking-widest mb-4">
                    <Calendar size={12} /> {post.date}
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-white mb-4 line-clamp-2 group-hover:text-[#c5a47e] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {post.summary}
                  </p>
                  <div className="flex items-center text-white font-bold text-xs uppercase tracking-widest gap-2 group-hover:gap-4 transition-all pt-4 border-t border-gray-700">
                    Makaleyi Oku <ArrowRight size={14} className="text-[#c5a47e]" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 4. NEWSLETTER / ABONELİK (MOCK) */}
        <div className="mt-24 bg-[#c5a47e] rounded-sm p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold text-[#0f172a] mb-4">Hukuki Gelişmelerden Haberdar Olun</h2>
            <p className="text-[#0f172a]/80 mb-8 font-medium">
              Emsal kararlar ve mevzuat değişiklikleri hakkında bilgi almak için bültenimize abone olun. Spam yok, sadece bilgi.
            </p>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                className="flex-1 bg-white/90 border-0 p-4 text-[#0f172a] placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[#0f172a]"
              />
              <button className="bg-[#0f172a] text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-[#0f172a] transition-all">
                Abone Ol
              </button>
            </form>
          </div>
        </div>

      </div>

      <WhatsAppBtn />
      <Footer />
    </main>
  );
}