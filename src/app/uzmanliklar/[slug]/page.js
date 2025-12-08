// src/app/uzmanliklar/[slug]/page.js
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { servicesData } from "@/data/servicesData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-[#0f172a] min-h-screen">
      <Navbar />
      
      {/* BAŞLIK ALANI (HEADER) */}
      <div className="pt-32 pb-16 bg-[#0b1120] border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center text-[#c5a47e] mb-6 animate-fade-in">
            {service.icon}
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            {service.title}
          </h1>
          <div className="w-24 h-1 bg-[#c5a47e] mx-auto rounded-full"></div>
        </div>
      </div>

      {/* İÇERİK ALANI */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Geri Dön Butonu */}
        <Link href="/uzmanliklar" className="inline-flex items-center text-gray-400 hover:text-[#c5a47e] mb-10 transition-colors text-sm font-bold uppercase tracking-wider">
          <ArrowLeft size={18} className="mr-2" />
          Tüm Uzmanlıklar
        </Link>

        {/* Yazı İçeriği */}
        <div className="prose prose-invert prose-lg max-w-none">
          {/* İçerik HTML formatında olduğu için dangerouslySetInnerHTML kullanıyoruz */}
          <div 
            dangerouslySetInnerHTML={{ __html: service.content }} 
            className="text-gray-300 leading-relaxed font-light [&>h3]:text-white [&>h3]:font-playfair [&>h3]:text-2xl [&>h3]:mt-8 [&>h3]:mb-4 [&>h4]:text-[#c5a47e] [&>h4]:uppercase [&>h4]:tracking-wider [&>h4]:text-sm [&>h4]:font-bold [&>h4]:mt-8 [&>ul]:space-y-2 [&>ul>li]:flex [&>ul>li]:items-center [&>ul>li]:before:content-['•'] [&>ul>li]:before:text-[#c5a47e] [&>ul>li]:before:mr-3"
          />
        </div>

        {/* Aksiyon Kutusu */}
        <div className="mt-16 bg-[#1e293b] p-8 border border-[#c5a47e]/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-playfair font-bold text-white mb-2">Hukuki Desteğe mi İhtiyacınız Var?</h3>
            <p className="text-gray-400 text-sm">Bu alanda uzman avukatlarımızla görüşmek için hemen randevu alın.</p>
          </div>
          <Link href="/iletisim" className="bg-[#c5a47e] text-[#0f172a] px-8 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-white transition-colors whitespace-nowrap">
            Randevu Al
          </Link>
        </div>

      </div>

      <Footer />
    </main>
  );
}