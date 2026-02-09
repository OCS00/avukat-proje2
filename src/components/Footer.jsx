"use client";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/servicesData";
import { ArrowUpRight, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050914] text-white pt-24 pb-10 border-t border-gray-800 relative overflow-hidden">
      
      {/* Hafif Arka Plan Dokusu */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ÜST KISIM: CTA (Harekete Geçirici Mesaj) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 pb-12 border-b border-gray-800 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-7xl font-playfair font-bold mb-8 leading-tight">
              Hukuki Sürecinizi <br/> <span className="text-[#c5a47e]">Şansa Bırakmayın.</span>
            </h2>
            <Link 
              href="/iletisim" 
              className="inline-flex items-center gap-3 text-white text-lg font-bold uppercase tracking-widest hover:text-[#c5a47e] transition-colors group"
            >
              <span className="border-b border-white pb-1 group-hover:border-[#c5a47e] transition-colors">
                Randevu Oluştur
              </span>
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
          
          <div className="text-right hidden md:block opacity-60">
             <div className="text-2xl font-playfair font-bold text-white">{siteConfig.name}</div>
             <div className="text-xs uppercase tracking-[0.3em] mt-2">Mersin / Türkiye</div>
          </div>
        </div>

        {/* ORTA KISIM: GRID YAPISI */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* 1. BLOK: ADRES & İLETİŞİM (5 Kolon) */}
          <div className="md:col-span-5 space-y-8">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">İletişim Bilgileri</h3>
            
            <div className="space-y-6">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 text-xl md:text-2xl font-playfair text-white hover:text-[#c5a47e] transition-colors group">
                <Mail size={24} className="text-gray-600 group-hover:text-[#c5a47e] transition-colors" />
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-4 text-xl md:text-2xl font-playfair text-white hover:text-[#c5a47e] transition-colors group">
                <Phone size={24} className="text-gray-600 group-hover:text-[#c5a47e] transition-colors" />
                {siteConfig.phone}
              </a>
              <div className="flex items-start gap-4 text-gray-400 group pt-2">
                <MapPin size={24} className="text-gray-600 mt-1 group-hover:text-[#c5a47e] transition-colors shrink-0" />
                <span className="leading-relaxed text-lg max-w-xs">{siteConfig.address}</span>
              </div>
            </div>
          </div>

          {/* BOŞLUK (1 Kolon) */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* 2. BLOK: MENÜ (3 Kolon) */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">Site Haritası</h3>
            <ul className="space-y-4">
              {["Ana Sayfa", "Hakkımda", "Uzmanlıklar", "Blog", "İletişim"].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Ana Sayfa" ? "/" : `/${item.toLowerCase().replace("ı", "i").replace("ş", "s")}`}
                    className="text-gray-400 hover:text-white transition-colors text-base font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-[#c5a47e] transition-colors"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. BLOK: SOSYAL MEDYA (3 Kolon) */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">Sosyal Medya</h3>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={20} />, href: siteConfig.social.linkedin },
                { icon: <Twitter size={20} />, href: siteConfig.social.twitter },
                { icon: <Instagram size={20} />, href: siteConfig.social.instagram }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:border-[#c5a47e] hover:text-[#0f172a] hover:bg-[#c5a47e] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ALT KISIM: COPYRIGHT */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium uppercase tracking-wider">
          <p>&copy; {currentYear} {siteConfig.name}.</p>
          
          <div className="flex items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
            Designed by <span className="text-[#c5a47e] font-bold">OCS Creative</span>
          </div>
        </div>

      </div>
    </footer>
  );
}