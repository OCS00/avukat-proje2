"use client";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Kartlar 0.2sn arayla gelsin
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Services() {
  return (
    <section className="py-24 bg-[#0f172a] relative" id="uzmanliklar">
      {/* Hafif Arka Plan Deseni */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/public/globe.svg')] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#c5a47e] font-bold tracking-widest uppercase text-xs mb-2 block"
          >
            Çalışma Alanlarımız
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6"
          >
            Uzmanlık ve Faaliyet Alanları
          </motion.h2>
          <div className="w-24 h-1 bg-[#c5a47e] mx-auto"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link 
                href={`/uzmanliklar/${service.slug}`} 
                className="group relative p-10 bg-[#1e293b] border border-gray-800 rounded-sm block overflow-hidden hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-500"
              >
                {/* Hover olunca gelen altın çizgi */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#c5a47e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <div className="text-[#c5a47e] mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-playfair font-bold text-white mb-4 group-hover:text-[#c5a47e] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm transition-colors line-clamp-3 group-hover:text-gray-300">
                  {service.shortDesc}
                </p>
                
                <div className="mt-8 flex items-center gap-2 text-[#c5a47e] text-xs font-bold uppercase tracking-widest transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  İncele <span className="text-lg">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}