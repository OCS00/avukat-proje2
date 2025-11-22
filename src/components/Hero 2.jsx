// src/components/Hero.jsx
"use client";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-slate-50 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="lg:w-2/3">
          {/* Animasyonlu Alt Başlık */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 border border-blue-100"
          >
            <ShieldCheck size={16} />
            Güvenilir Hukuki Çözümler
          </motion.div>
          
          {/* Ana Başlık */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6"
          >
            Adalet arayışınızda <br/>
            <span className="text-slate-600">güçlü ortağınız.</span>
          </motion.h1>
          
          {/* Açıklama */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed"
          >
            Karmaşık hukuki süreçlerde yanınızdayız. Ceza, Aile ve Ticaret hukuku alanlarında 
            yılların getirdiği deneyimle haklarınızı profesyonelce savunuyoruz.
          </motion.p>
          
          {/* Butonlar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              href="/iletisim" 
              className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20"
            >
              Ücretsiz Danışma
              <ArrowRight size={20} />
            </Link>
            <Link 
              href="/uzmanliklar" 
              className="flex items-center justify-center px-8 py-4 rounded-lg text-lg font-medium text-slate-700 border border-slate-300 hover:bg-white hover:shadow-md transition-all"
            >
              Hizmetlerimiz
            </Link>
          </motion.div>
        </div>

      </div>
      
      {/* Arka Plan Dekoru (Bulanık Mavi Işık) */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-slate-300 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
}