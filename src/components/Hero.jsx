// src/components/Hero.jsx
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/siteConfig";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* 1. ARKA PLAN RESMİ SEÇENEKLERİ */}
      <div className="absolute inset-0 z-0">
        <img 
          // SEÇENEK 1: Adalet Sarayı Sütunları (Güç ve Stabilite - Şu an Aktif Olan)
          src="https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?q=80&w=2070&auto=format&fit=crop"
          
          // SEÇENEK 2: Modern Plaza / Gökdelen (Kurumsal ve Şehirli Havası)
          // src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"

          // SEÇENEK 3: Koyu Mermer Doku (Çok Sade ve Minimalist)
          // src="https://images.unsplash.com/photo-1618588507085-c79565432917?q=80&w=2070&auto=format&fit=crop"
          
          alt="Hukuk Bürosu" 
          className="w-full h-full object-cover"
        />
        
        {/* Koyu Lacivert Filtre (Resmi sitenin rengiyle kaynaştırır) */}
        <div className="absolute inset-0 bg-[#0f172a]/85 mix-blend-multiply"></div>
      </div>

      {/* 2. ORTA YAZI ALANI */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
        
        {/* Üst Başlık */}
        <span className="inline-block py-1.5 px-4 border border-[#c5a47e]/40 text-[#c5a47e] text-xs font-bold tracking-[0.3em] uppercase mb-8 bg-[#0f172a]/40 backdrop-blur-md rounded-sm">
          Profesyonel Hukuki Çözümler
        </span>
        
        {/* Ana Başlık */}
        <h1 className="font-playfair text-5xl md:text-8xl font-bold text-white leading-tight mb-8 drop-shadow-2xl">
          Adalet, Güven ve <br/>
          <span className="text-[#c5a47e] italic relative inline-block">
            Tecrübe.
            {/* Altına dekoratif çizgi */}
            <span className="absolute bottom-2 left-0 w-full h-1 bg-[#c5a47e]/40 -z-10"></span>
          </span>
        </h1>
        
        {/* Alt Açıklama */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light opacity-90">
          {siteConfig.description} Hukukun üstünlüğü ilkesiyle, haklarınızı en güçlü şekilde savunuyoruz.
        </p>
        
        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            href="/iletisim" 
            className="bg-[#c5a47e] text-[#0f172a] px-10 py-4 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(197,164,126,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            Randevu Al
          </Link>
          <Link 
            href="/uzmanliklar" 
            className="border border-white/30 text-white px-10 py-4 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-[#0f172a] transition-all duration-300 backdrop-blur-sm"
          >
            Faaliyet Alanları
          </Link>
        </div>
      </div>

      {/* 3. AŞAĞI KAYDIR İKONU */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-[#c5a47e]/70">
        <ArrowDown size={32} strokeWidth={1} />
      </div>

    </section>
  );
}