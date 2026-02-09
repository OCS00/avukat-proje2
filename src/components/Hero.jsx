"use client";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { motion } from "framer-motion";

export default function Hero() {
  // Animasyon varyasyonları
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: delay, ease: "easeOut" }
    })
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* 1. ARKA PLAN (Zoom Efekti ile) */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?q=80&w=2070&auto=format&fit=crop"
            alt="Hukuk Bürosu" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Modern Gradyan Maske */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 via-[#0f172a]/70 to-[#0f172a]"></div>
      </div>

      {/* 2. ORTA YAZI ALANI */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
        
        {/* Üst Başlık */}
        <motion.div 
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <span className="inline-block py-2 px-6 border border-[#c5a47e]/30 text-[#c5a47e] text-xs font-bold tracking-[0.4em] uppercase mb-8 bg-[#0f172a]/50 backdrop-blur-md rounded-sm">
            Profesyonel Hukuki Çözümler
          </span>
        </motion.div>
        
        {/* Ana Başlık */}
        <motion.h1 
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={textVariant}
          className="font-playfair text-5xl md:text-8xl font-bold text-white leading-tight mb-8 drop-shadow-2xl"
        >
          Adalet, Güven ve <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5a47e] to-[#e0bb8e] italic relative inline-block">
            Tecrübe.
          </span>
        </motion.h1>
        
        {/* Alt Açıklama */}
        <motion.p 
          custom={0.6}
          initial="hidden"
          animate="visible"
          variants={textVariant}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light opacity-90"
        >
          {siteConfig.description} Hukukun üstünlüğü ilkesiyle, haklarınızı en güçlü şekilde savunuyoruz.
        </motion.p>
        
        {/* Butonlar */}
        <motion.div 
          custom={0.8}
          initial="hidden"
          animate="visible"
          variants={textVariant}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link 
            href="/iletisim" 
            className="group relative px-10 py-4 bg-[#c5a47e] overflow-hidden rounded-sm"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <span className="relative text-[#0f172a] text-sm font-bold tracking-widest uppercase">Randevu Al</span>
          </Link>

          <Link 
            href="/uzmanliklar" 
            className="group px-10 py-4 border border-white/30 text-white rounded-sm hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            <span className="text-sm font-bold tracking-widest uppercase">Faaliyet Alanları</span>
          </Link>
        </motion.div>
      </div>

      {/* 3. SCROLL İKONU */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#c5a47e]/70"
      >
        <ArrowDown size={32} strokeWidth={1} />
      </motion.div>

    </section>
  );
}