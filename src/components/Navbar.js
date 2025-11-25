// src/components/Navbar.jsx
"use client";
import Link from "next/link";
import { Scale, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { siteConfig } from "@/siteConfig";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sayfa kaydırılınca menünün rengini değiştirmek için (Opsiyonel ama şık durur)
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

          {/* MASAÜSTÜ MENÜ */}
          <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide">
            <Link href="/" className="text-gray-300 hover:text-[#c5a47e] transition-colors uppercase">Ana Sayfa</Link>
            <Link href="/hakkimda" className="text-gray-300 hover:text-[#c5a47e] transition-colors uppercase">Hakkımda</Link>
            <Link href="/uzmanliklar" className="text-gray-300 hover:text-[#c5a47e] transition-colors uppercase">Uzmanlıklar</Link>
            <Link href="/blog" className="text-gray-300 hover:text-[#c5a47e] transition-colors uppercase">Blog</Link>
            
            <Link href="/iletisim" className="border border-[#c5a47e] text-[#c5a47e] px-6 py-2 rounded-sm hover:bg-[#c5a47e] hover:text-[#0f172a] transition-all uppercase text-xs font-bold">
              İletişime Geç
            </Link>
          </div>

          {/* MOBİL MENÜ BUTONU */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBİL MENÜ İÇERİK */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] border-t border-gray-800 absolute w-full">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link href="/" className="block px-3 py-3 text-gray-300 hover:text-[#c5a47e] hover:bg-white/5 rounded-md">Ana Sayfa</Link>
            <Link href="/hakkimda" className="block px-3 py-3 text-gray-300 hover:text-[#c5a47e] hover:bg-white/5 rounded-md">Hakkımda</Link>
            <Link href="/uzmanliklar" className="block px-3 py-3 text-gray-300 hover:text-[#c5a47e] hover:bg-white/5 rounded-md">Uzmanlıklar</Link>
            <Link href="/iletisim" className="block px-3 py-3 text-[#c5a47e] font-bold border border-[#c5a47e] text-center mt-4 rounded-sm">İLETİŞİME GEÇ</Link>
          </div>
        </div>
      )}
    </nav>
  );
}