"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "Boşanma davası ne kadar sürer?",
    a: "Anlaşmalı boşanma davaları genellikle tek celsede (1-3 ay) sonuçlanır. Çekişmeli boşanma davaları ise mahkemenin iş yüküne ve delil durumuna göre 1.5 - 3 yıl arasında sürebilir."
  },
  {
    q: "Avukatlık ücreti neye göre belirlenir?",
    a: "Avukatlık Asgari Ücret Tarifesi taban alınarak; davanın türü, karmaşıklığı ve harcanacak mesaiye göre karşılıklı anlaşma ile belirlenir."
  },
  {
    q: "Dava açmadan önce danışmanlık almalı mıyım?",
    a: "Kesinlikle. Hukuki sürecin en başında yapılan stratejik hatalar, davanın kaybedilmesine neden olabilir. Önleyici hukuk hizmeti bu riskleri minimize eder."
  },
  {
    q: "Hangi şehirlere hizmet veriyorsunuz?",
    a: "Merkez ofisimiz Mersin'de olmakla birlikte, Türkiye'nin 81 ilindeki davalarınız için hukuki destek sağlamaktayız."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-[#c5a47e] font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block px-3 py-1 border border-[#c5a47e]/30 rounded-full">
            Merak Edilenler
          </span>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-gray-400 font-light text-lg">
            Aklınıza takılan soruların cevaplarını burada bulabilirsiniz.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div 
              key={index}
              className={`border transition-all duration-300 rounded-sm overflow-hidden ${
                activeIndex === index 
                  ? "border-[#c5a47e] bg-[#1e293b]" 
                  : "border-gray-800 bg-[#1e293b]/50 hover:border-gray-600"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`text-lg font-playfair font-bold transition-colors ${activeIndex === index ? "text-[#c5a47e]" : "text-white"}`}>
                  {item.q}
                </span>
                <div className={`p-2 rounded-full transition-colors ${activeIndex === index ? "bg-[#c5a47e] text-[#0f172a]" : "bg-gray-800 text-gray-400"}`}>
                  {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-300 font-light leading-relaxed border-t border-gray-700/50 mt-2">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}