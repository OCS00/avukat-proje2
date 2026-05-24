"use client";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";

export default function IletisimPage() {
  return (
    <main className="bg-[#0f172a] min-h-screen text-gray-300">

      {/* HERO */}
      <section className="pt-40 pb-28 bg-[#0b1120] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c5a47e]/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-[#c5a47e]/30" />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 border border-[#c5a47e]/30 px-4 py-2 rounded-full mb-10 bg-[#c5a47e]/5">
              <span className="w-2 h-2 bg-[#c5a47e] rounded-full animate-pulse" />
              <span className="text-[#c5a47e] text-xs font-bold uppercase tracking-[0.2em]">Ücretsiz İlk Görüşme</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-playfair font-bold text-white mb-8 leading-[0.9]">
              İlk Adımı <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5a47e] via-[#e8d5b5] to-[#c5a47e]">
                Birlikte Atalım.
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Hukuki durumunuzu bize anlatın.{" "}
              <strong className="text-white">24 saat içinde</strong>{" "}
              net bir değerlendirme yapıyoruz. İlk görüşme ücretsizdir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FORM */}
      <Contact />

      {/* SSS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Faq />
      </div>

    </main>
  );
}
