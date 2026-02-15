"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Sayfa değişince menüyü kapatmak için
import { Menu, X, ChevronRight, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Mevcut sayfayı takip et

  // Scroll dinleyici
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sayfa değiştiğinde mobil menüyü OTOMATİK KAPAT (Yeni özellik)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımda", href: "/hakkimda" },
    { name: "Uzmanlıklar", href: "/uzmanliklar" },
    { name: "Blog", href: "/blog" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled || isOpen
            ? "bg-[#0f172a]/95 backdrop-blur-md border-b border-gray-800/50 py-4 shadow-lg"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* LOGO */}
            <Link href="/" className="flex flex-col group z-50 relative">
              <h1 className="text-xl md:text-2xl font-playfair font-bold text-white tracking-wide leading-none group-hover:text-[#c5a47e] transition-colors">
                Av. Osman <span className="text-[#c5a47e] group-hover:text-white transition-colors">Özkaya</span>
              </h1>
              <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-[0.3em] font-medium mt-1 group-hover:tracking-[0.4em] transition-all">
                Hukuk & Danışmanlık
              </span>
            </Link>

            {/* MASAÜSTÜ MENÜ (Desktop) */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`text-sm font-medium uppercase tracking-widest relative group transition-colors ${
                    pathname === item.href ? "text-[#c5a47e]" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-2 left-0 h-0.5 bg-[#c5a47e] transition-all duration-300 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </Link>
              ))}
              
              <Link
                href="/iletisim"
                className="flex items-center gap-2 border border-[#c5a47e] text-[#c5a47e] px-5 py-2.5 rounded-sm hover:bg-[#c5a47e] hover:text-[#0f172a] transition-all duration-300 text-xs font-bold uppercase tracking-widest"
              >
                <Phone size={14} /> Randevu Al
              </Link>
            </div>

            {/* MOBİL MENÜ BUTONU (Hamburger) */}
            <div className="md:hidden z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 hover:text-[#c5a47e] transition-colors focus:outline-none"
                aria-label="Menüyü Aç/Kapat"
              >
                {isOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBİL MENÜ (FULL SCREEN OVERLAY) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
            className="fixed inset-0 bg-[#0f172a] z-40 flex flex-col justify-center px-8 md:hidden overflow-hidden"
          >
            {/* Arka Plan Deseni */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

            {/* Menü Linkleri */}
            <nav className="space-y-6 relative z-10 w-full max-w-sm mx-auto">
              {navLinks.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between text-2xl font-playfair font-bold border-b border-gray-800 pb-4 group ${
                        pathname === item.href ? "text-[#c5a47e] border-[#c5a47e]/30" : "text-white hover:text-[#c5a47e]"
                    }`}
                  >
                    {item.name}
                    <ChevronRight 
                        size={20}
                        className={`transition-transform duration-300 ${
                            pathname === item.href ? "opacity-100 translate-x-0 text-[#c5a47e]" : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                        }`} 
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Alt Bilgi (İletişim) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 text-center relative z-10"
            >
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">Hızlı İletişim</p>
              <a href={`tel:${siteConfig.phone}`} className="text-2xl font-playfair font-bold text-[#c5a47e]">
                {siteConfig.phone}
              </a>
              <p className="text-gray-600 text-sm mt-4 px-8 leading-relaxed">
                {siteConfig.address}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}