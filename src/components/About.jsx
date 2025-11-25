// src/components/About.jsx
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/siteConfig";

export default function About() {
  return (
    // Arka plan koyu (#0f172a)
    <section className="py-24 bg-[#0f172a] overflow-hidden border-t border-gray-900" id="hakkimda">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* FOTOĞRAF ALANI */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/5] w-full bg-gray-800 rounded-sm overflow-hidden shadow-2xl border border-gray-700">
              <img 
                src={siteConfig.profileImage} 
                alt={siteConfig.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100"
              />
            </div>
            
            {/* Dekoratif Kutu (Altın Rengi Yaptık) */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-[#c5a47e]/30 rounded-sm -z-10"></div>
            
            {/* Tecrübe Kutusu (Koyu Tasarım) */}
            <div className="absolute bottom-8 left-8 bg-[#1e293b] p-6 rounded-sm shadow-2xl border border-gray-700 max-w-xs">
              <p className="text-4xl font-bold text-[#c5a47e] mb-1">{siteConfig.experience}</p>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wide">Yıllık Tecrübe</p>
            </div>
          </div>

          {/* YAZI ALANI */}
          <div className="w-full lg:w-1/2">
            <span className="text-[#c5a47e] font-bold tracking-widest uppercase text-xs mb-4 block">
              Hakkımızda
            </span>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-8 leading-tight">
              {siteConfig.bioTitle}
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed font-light">
              {siteConfig.shortBio}
            </p>
            
            <div className="space-y-4 mb-12">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-[#c5a47e]" size={22} />
                <span className="text-gray-300">Ulaşılabilir ve Şeffaf İletişim</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-[#c5a47e]" size={22} />
                <span className="text-gray-300">Stratejik Hukuki Planlama</span>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <h4 className="text-2xl font-playfair text-white">{siteConfig.name}</h4>
              <p className="text-[#c5a47e] text-sm tracking-widest uppercase mt-1">Kurucu Avukat</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}