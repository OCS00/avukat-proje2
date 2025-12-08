// src/app/blog/[id]/page.js
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogData";
import { Calendar, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Bu fonksiyon, hangi yazıların var olduğunu Next.js'e söyler (Static Export için gerekli)
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogPostPage({ params }) {
  // URL'deki ID'ye göre doğru yazıyı bul
  const post = blogPosts.find((p) => p.id === params.id);

  // Yazı yoksa 404 sayfasına at
  if (!post) {
    notFound();
  }

  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar />
      
      <article className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Geri Dön Butonu */}
          <Link href="/blog" className="inline-flex items-center text-slate-500 hover:text-blue-700 mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Bloga Dön
          </Link>

          {/* Başlık ve Meta */}
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 text-slate-500 text-sm mb-10 border-b border-slate-200 pb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Share2 size={16} />
              Paylaş
            </div>
          </div>

          {/* Ana Görsel */}
          <div className="rounded-2xl overflow-hidden mb-12 shadow-lg">
            <img src={post.image} alt={post.title} className="w-full object-cover" />
          </div>

          {/* İçerik (HTML olarak basıyoruz) */}
          <div 
            className="prose prose-lg prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
        </div>
      </article>

      <Footer />
    </main>
  );
}