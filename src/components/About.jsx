"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Award, Users, Scale, Clock } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

// Animasyonlu Sayaç Bileşeni (0'dan belirlediğimiz sayıya kadar sayar)
function Counter({ value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <div ref={ref} className="text-center group p-6 bg-[#1e293b]/50 rounded-sm border border-gray-800 hover:border-[#c5a47e]/50 transition-all duration-500">
      <div className="text-4xl md:text-5xl font-playfair font-bold text-[#c5a47e] mb-2 flex justify-center items-center">
        {isInView ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {value}
          </motion.span>
        ) : "0"}
        <span className="text-2xl ml-1">+</span>
      </div>
      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  const containerRef = useRef(null);

  // İstatistik Verileri
  const stats = [
    { value: 15, label: "Yıllık Tecrübe" },
    { value: 450, label: "Mutlu Müvekkil" },
    { value: 98, label: "Başarı Oranı (%)" },
    { value: 24, label: "Uzmanlık Alanı" }
  ];

  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden" id="hakkimda">
      {/* Dekoratif Arka Plan Çizgileri */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#c5a47e]/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ÜST KISIM: Fotoğraf ve Hikaye */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          
          {/* FOTOĞRAF ALANI (Animasyonlu Çerçeve) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0">
              {/* Resim */}
              <div className="absolute inset-0 bg-gray-800 rounded-sm overflow-hidden shadow-2xl border border-gray-700 z-10 group">
                <img 
                  src={siteConfig.profileImage} 
                  alt={siteConfig.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                {/* Resim Üzeri Parlama Efekti */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60"></div>
              </div>
              
              {/* Arkadaki Altın Çerçeve */}
              <motion.div 
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 20, y: 20 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute inset-0 border-2 border-[#c5a47e]/30 rounded-sm -z-0 translate-x-6 translate-y-6"
              ></motion.div>
            </div>
          </motion.div>

          {/* YAZI ALANI */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-[#c5a47e]"></div>
              <span className="text-[#c5a47e] font-bold tracking-[0.2em] uppercase text-sm">
                Avukat Osman Özkaya Kimdir?
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8 leading-tight">
              {siteConfig.bioTitle}
            </h2>
            
            <div className="prose prose-invert prose-lg text-gray-400 font-light mb-10 leading-relaxed">
              <p className="mb-6">
                Hukuk, sadece kurallar bütünü değil; adaletin, vicdanın ve toplumsal dengenin teminatıdır. 
                <span className="text-white font-medium"> {siteConfig.name}</span> olarak, mesleki hayatım boyunca bu prensibi pusulam kabul ettim.
              </p>
              <p>
                {siteConfig.shortBio} Müvekkillerimle kurduğum ilişki sadece vekaletname ile sınırlı değildir; karşılıklı güvene dayalı bir çözüm ortaklığıdır.
                Her dosyada en ince detayı analiz ederek, stratejik ve sonuç odaklı bir yol haritası çiziyoruz.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3 bg-[#1e293b] p-4 rounded-sm border border-gray-800">
                <Scale className="text-[#c5a47e]" size={24} />
                <span className="text-gray-200 text-sm font-bold">Stratejik Planlama</span>
              </div>
              <div className="flex items-center gap-3 bg-[#1e293b] p-4 rounded-sm border border-gray-800">
                <Clock className="text-[#c5a47e]" size={24} />
                <span className="text-gray-200 text-sm font-bold">7/24 Ulaşılabilirlik</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ALT KISIM: İstatistikler Sayacı */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-800 pt-16">
          {stats.map((stat, index) => (
            <Counter key={index} value={stat.value} label={stat.label} />
          ))}
        </div>

      </div>
    </section>
  );
}