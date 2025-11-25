// src/components/Hero.jsx
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/siteConfig";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* 1. ARKA PLAN RESMİ (Üzerine koyu filtre atılmış) */}
      <div className="absolute inset-0 z-0">
        <img 
          // Buraya daha sonra 'avukat ofisi' gibi kaliteli bir resim koyabilirsin
          src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop" 
          alt="Hukuk Bürosu" 
          className="w-full h-full object-cover"
        />
        {/* Koyu Lacivert Filtre (Resmi karartır ki yazı okunsun) */}
        <div className="absolute inset-0 bg-[#0f172a]/80 mix-blend-multiply"></div>
      </div>

      {/* 2. ORTA YAZI ALANI */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
        
        {/* Üstteki küçük altın yazı */}
        <span className="inline-block py-1 px-3 border border-[#c5a47e]/30 text-[#c5a47e] text-xs font-bold tracking-[0.2em] uppercase mb-6 bg-[#0f172a]/50 backdrop-blur-sm rounded-sm">
          Profesyonel Hukuki Çözümler
        </span>
        
        {/* Ana Başlık */}
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white leading-tight mb-8 drop-shadow-lg">
          Adalet, Güven ve <br/>
          <span className="text-[#c5a47e] italic">Tecrübe.</span>
        </h1>
        
        {/* Alt Açıklama */}
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
          {siteConfig.description} Hukuki süreçlerinizde şeffaf, sonuç odaklı ve profesyonel bir yaklaşım sunuyoruz.
        </p>
        
        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link 
            href="/iletisim" 
            className="bg-[#c5a47e] text-[#0f172a] px-8 py-4 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-xl"
          >
            Ücretsiz Danışma
          </Link>
          <Link 
            href="/uzmanliklar" 
            className="border border-white/20 text-white px-8 py-4 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-[#0f172a] transition-all duration-300 backdrop-blur-sm"
          >
            Uzmanlıklarımız
          </Link>
        </div>
      </div>

      {/* 3. AŞAĞI KAYDIR İKONU (Animasyonlu) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400">
        <ArrowDown size={32} strokeWidth={1} />
      </div>

    </section>
  );
}