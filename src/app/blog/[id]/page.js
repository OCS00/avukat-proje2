import { connectToDatabase } from "@/lib/db";
import Post from "@/models/Post";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";

export async function generateMetadata({ params }) {
  await connectToDatabase();
  const post = await Post.findOne({ slug: params.id }).lean();
  if (!post) return { title: "Yazı Bulunamadı" };
  return {
    title: `${post.title} | Av. Osman Özkaya`,
    description: post.overview,
  };
}

async function getPost(slug) {
  await connectToDatabase();
  const post = await Post.findOne({ slug }).lean();
  return post ? JSON.parse(JSON.stringify(post)) : null;
}

export const revalidate = 60;

export default async function BlogPost({ params }) {
  const post = await getPost(params.id);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-white">
        Yazı bulunamadı.
      </div>
    );
  }

  return (
    <main className="bg-[#0f172a] min-h-screen text-gray-300 selection:bg-[#c5a47e] selection:text-[#0f172a]">
      <article>
        {/* HERO HEADER */}
        <div className="relative h-[60vh] min-h-[400px]">
          <div className="absolute inset-0">
            {post.mainImage ? (
              <img
                src={post.mainImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#1e293b] to-[#050914]"></div>
            )}
            <div className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-sm bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <Link href="/blog" className="inline-flex items-center gap-2 text-[#c5a47e] hover:text-white transition-colors mb-8 font-bold uppercase tracking-widest text-xs">
                <ArrowLeft size={16} /> Bloğa Dön
              </Link>
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-6 text-sm text-gray-400 font-medium">
                <span className="flex items-center gap-2">
                  <User size={16} className="text-[#c5a47e]" /> Av. Osman Özkaya
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-[#c5a47e]" /> {new Date(post.publishedAt).toLocaleDateString("tr-TR")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* İÇERİK */}
        <div className="max-w-3xl mx-auto px-4 py-20">
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-playfair prose-headings:text-white
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-lg prose-p:mb-6
              prose-blockquote:border-l-4 prose-blockquote:border-[#c5a47e] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-400
              prose-ul:text-gray-300 prose-ol:text-gray-300
              prose-strong:text-white
              prose-a:text-[#c5a47e] prose-a:no-underline hover:prose-a:text-white"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </main>
  );
}
