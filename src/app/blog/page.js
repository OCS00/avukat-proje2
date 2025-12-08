// src/app/blog/page.js
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogData"; // Veriyi çekiyoruz
import { Calendar, ArrowRight } from "lucide-react";

export default function BlogPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Hukuk Blogu</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Güncel hukuki makaleler, yargıtay kararları ve bilgilendirici içeriklerimizi buradan takip edebilirsiniz.
          </p>
        </div>

        {/* Blog Kartları Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <Link 
              href={`/blog/${post.id}`} 
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Resim Alanı */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-700 flex items-center gap-1">
                  <Calendar size={12} />
                  {post.date}
                </div>
              </div>

              {/* Yazı Alanı */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {post.summary}
                </p>
                <div className="flex items-center text-blue-700 font-semibold text-sm gap-1">
                  Devamını Oku <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}