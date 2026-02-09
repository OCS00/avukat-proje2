"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Scale, Menu, X, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll dinleyici: Sayfa aşağı kayınca navbar'ı sıkılaştır
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menü Linkleri
  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımda", href: "/hakkimda" },
    { name: "Uzmanlıklar", href: "/uzmanliklar" },
    { name: "Blog", href: "/blog" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-[#0f172a]/90 backdrop-blur-md border-b border-gray-800/50 py-4 shadow-lg" 
        : "bg-transparent py-8"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            
            <div className="flex flex-col">
              <h1 className="text-xl font-playfair font-bold text-white tracking-wide leading-none">
                {siteConfig.name}
              </h1>
              <span className="text-[10px] text-[#c5a47e] uppercase tracking-[0.25em] font-medium mt-1">
                Hukuk & Danışmanlık
              </span>
            </div>
          </Link>

          {/* MASAÜSTÜ MENÜ */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.slice(0, 4).map((item, index) => (
              <Link key={index} href={item.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-wide relative group">
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#c5a47e] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            <Link href="/iletisim" className="bg-[#c5a47e] text-[#0f172a] px-6 py-2.5 rounded-sm hover:bg-white transition-all duration-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(197,164,126,0.3)] hover:shadow-[0_0_25px_rgba(197,164,126,0.5)]">
              Randevu Al
            </Link>
          </div>

          {/* MOBİL MENÜ BUTONU */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 hover:bg-white/10 rounded-sm transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBİL MENÜ (FULL SCREEN) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
            className="md:hidden fixed inset-0 bg-[#0f172a] z-40 flex flex-col justify-center px-8"
          >
             {/* Arka Plan Deseni */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

             <nav className="space-y-6 relative z-10">
               {navLinks.map((item, idx) => (
                 <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                 >
                   <Link 
                    href={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between text-3xl font-playfair font-bold text-white hover:text-[#c5a47e] transition-colors group border-b border-gray-800 pb-4"
                   >
                     {item.name}
                     <ChevronRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-[#c5a47e]" />
                   </Link>
                 </motion.div>
               ))}
             </nav>
             
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="mt-12 text-center relative z-10"
             >
               <p className="text-gray-500 text-sm mb-2">Bize Ulaşın</p>
               <a href={`tel:${siteConfig.phone}`} className="text-xl font-playfair text-[#c5a47e]">{siteConfig.phone}</a>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}