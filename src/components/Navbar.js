// src/components/Navbar.jsx
"use client";
import Link from "next/link";
import { Scale, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sayfa kaydırılınca menü arka planı koyulaşsın
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#0f172a] shadow-lg py-2" : "bg-[#0f172a] py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO KISMI */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-[#c5a47e] p-2 rounded-sm text-[#0f172a]">
              <Scale size={24} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-playfair font-bold text-white tracking-wide uppercase">
                {siteConfig.name}
              </h1>
              <span className="text-[10px] text-[#c5a47e] uppercase tracking-[0.2em] font-medium">
                Hukuk & Danışmanlık
              </span>
            </div>
          </Link>

          {/* MASAÜSTÜ MENÜ (Burada zaten vardı) */}
          <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide">
            <Link href="/" className="text-gray-300 hover:text-[#c5a47e] transition-colors uppercase">Ana Sayfa</Link>
            <Link href="/hakkimda" className="text-gray-300 hover:text-[#c5a47e] transition-colors uppercase">Hakkımda</Link>
            <Link href="/uzmanliklar" className="text-gray-300 hover:text-[#c5a47e] transition-colors uppercase">Uzmanlıklar</Link>
            <Link href="/blog" className="text-gray-300 hover:text-[#c5a47e] transition-colors uppercase">Blog</Link>
            
            <Link href="/iletisim" className="border border-[#c5a47e] text-[#c5a47e] px-6 py-2 rounded-sm hover:bg-[#c5a47e] hover:text-[#0f172a] transition-all uppercase text-xs font-bold">
              İletişime Geç
            </Link>
          </div>

          {/* MOBİL MENÜ BUTONU (Hamburger) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBİL MENÜ İÇERİK (Burayı Düzelttik) */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] border-t border-gray-800 absolute w-full h-screen">
          <div className="px-4 pt-8 pb-6 space-y-4 flex flex-col text-center">
            
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-lg font-playfair text-gray-300 hover:text-[#c5a47e] hover:bg-white/5 rounded-md">Ana Sayfa</Link>
            
            <Link href="/hakkimda" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-lg font-playfair text-gray-300 hover:text-[#c5a47e] hover:bg-white/5 rounded-md">Hakkımda</Link>
            
            <Link href="/uzmanliklar" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-lg font-playfair text-gray-300 hover:text-[#c5a47e] hover:bg-white/5 rounded-md">Uzmanlıklar</Link>
            
            {/* İŞTE BU EKSİKTİ, ŞİMDİ EKLENDİ 👇 */}
            <Link href="/blog" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-lg font-playfair text-gray-300 hover:text-[#c5a47e] hover:bg-white/5 rounded-md">Blog</Link>
            
            <Link href="/iletisim" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-[#0f172a] bg-[#c5a47e] font-bold uppercase tracking-widest mt-4 rounded-sm">İletişime Geç</Link>
          </div>
        </div>
      )}
    </nav>
  );
}