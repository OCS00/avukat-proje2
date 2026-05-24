import Link from "next/link";
import { connectToDatabase } from "@/lib/db";
import Post from "@/models/Post";
import { ArrowRight, Calendar, Clock } from "lucide-react";

async function getPosts() {
  await connectToDatabase();
  const posts = await Post.find({}).sort({ publishedAt: -1 }).lean();
  return JSON.parse(JSON.stringify(posts));
}

export const metadata = {
  title: "Hukuk Kütüphanesi | Av. Osman Özkaya",
  description: "Mersin avukatı Av. Osman Özkaya'nın ceza, aile ve ticaret hukukuna dair güncel makaleleri, emsal Yargıtay kararları ve mevzuat değişiklikleri.",
  alternates: {
    canonical: "https://osmanozkaya.av.tr/blog",
  },
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="bg-[#0f172a] min-h-screen text-gray-300 selection:bg-[#c5a47e] selection:text-[#0f172a]">
      {/* HERO */}
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
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-[#1e293b] border border-gray-800 rounded-sm overflow-hidden hover:border-[#c5a47e] transition-all duration-500 hover:-translate-y-2"
              >
                {/* Resim */}
                <div className="h-64 overflow-hidden relative bg-[#0f172a]">
                  {post.mainImage ? (
                    <img
                      src={post.mainImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1e293b] to-[#0f172a]">
                      <span className="text-[#c5a47e]/20 font-playfair font-bold text-4xl">Hukuk</span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-[#0f172a]/80 backdrop-blur px-3 py-1 rounded-sm text-xs font-bold text-white flex items-center gap-2">
                    <Clock size={12} className="text-[#c5a47e]" /> Okuma
                  </div>
                </div>

                {/* İçerik */}
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
