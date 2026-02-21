import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/urlFor";
import { PortableText } from "@portabletext/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";

// SEO Metadata - Başlık ve açıklamayı Sanity'den çeker
export async function generateMetadata({ params }) {
  const query = `*[_type == "post" && slug.current == $slug][0]{ title, overview }`;
  const post = await client.fetch(query, { slug: params.slug });
  if (!post) return { title: "Yazı Bulunamadı" };
  return {
    title: `${post.title} | Av. Osman Özkaya`,
    description: post.overview,
  };
}

// Veri Çekme
async function getPost(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  return await client.fetch(query, { slug });
}

// Zengin Metin Bileşenleri (Yazı içi stiller)
const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="my-8 rounded-sm overflow-hidden border border-gray-700">
           <img
            src={urlFor(value).fit('max').auto('format').url()}
            alt={value.alt || 'Blog Görseli'}
            className="w-full h-auto"
          />
        </div>
      );
    }
  },
  block: {
    h2: ({children}) => <h2 className="text-3xl font-playfair font-bold text-white mt-12 mb-6">{children}</h2>,
    h3: ({children}) => <h3 className="text-2xl font-playfair font-bold text-white mt-8 mb-4">{children}</h3>,
    normal: ({children}) => <p className="mb-6 leading-relaxed text-gray-300 text-lg font-light">{children}</p>,
    blockquote: ({children}) => <blockquote className="border-l-4 border-[#c5a47e] pl-6 my-8 italic text-gray-400 text-xl">{children}</blockquote>,
  },
  list: {
    bullet: ({children}) => <ul className="list-disc pl-5 mb-8 space-y-2 text-gray-300">{children}</ul>,
    number: ({children}) => <ol className="list-decimal pl-5 mb-8 space-y-2 text-gray-300">{children}</ol>,
  },
};

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-white">
        Yazı bulunamadı veya henüz yüklenmedi.
      </div>
    );
  }

  return (
    <main className="bg-[#0f172a] min-h-screen text-gray-300 selection:bg-[#c5a47e] selection:text-[#0f172a]">
      

      <article>
        {/* HERO HEADER */}
        <div className="relative h-[60vh] min-h-[400px]">
          <div className="absolute inset-0">
             {post.mainImage && (
               <img 
                 src={urlFor(post.mainImage).url()} 
                 alt={post.title} 
                 className="w-full h-full object-cover"
               />
             )}
             <div className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-sm bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 text-center">
               <Link href="/blog" className="inline-flex items-center gap-2 text-[#c5a47e] hover:text-white transition-colors mb-8 font-bold uppercase tracking-widest text-xs">
                 <ArrowLeft size={16}/> Bloğa Dön
               </Link>
               <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
                 {post.title}
               </h1>
               <div className="flex items-center justify-center gap-6 text-sm text-gray-400 font-medium">
                 <span className="flex items-center gap-2"><User size={16} className="text-[#c5a47e]"/> Av. Osman Özkaya</span>
                 <span className="flex items-center gap-2"><Calendar size={16} className="text-[#c5a47e]"/> {new Date(post.publishedAt).toLocaleDateString("tr-TR")}</span>
               </div>
            </div>
          </div>
        </div>

        {/* İÇERİK ALANI */}
        <div className="max-w-3xl mx-auto px-4 py-20">
          <div className="prose prose-invert prose-lg max-w-none">
            <PortableText value={post.body} components={ptComponents} />
          </div>
        </div>
      </article>

      
    </main>
  );
}