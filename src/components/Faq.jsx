// src/components/Faq.jsx
"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Dava açmak için süreç nasıl işliyor?",
    answer: "İlk olarak ofisimizde veya online olarak bir ön görüşme yapıyoruz. Durumunuzu analiz ettikten sonra gerekli vekaletname işlemleriyle birlikte dava dilekçenizi hazırlayıp süreci başlatıyoruz."
  },
  {
    question: "Avukatlık ücreti neye göre belirleniyor?",
    answer: "Ücretler, davanın türüne, karmaşıklığına ve Baro tarafından belirlenen asgari ücret tarifesine göre değişkenlik göstermektedir. Detaylı bilgi için iletişime geçiniz."
  },
  {
    question: "Boşanma davaları ortalama ne kadar sürer?",
    answer: "Anlaşmalı boşanmalar genellikle tek celsede (1-2 ay) sonuçlanırken, çekişmeli boşanma davaları mahkemenin yoğunluğuna göre 1.5 ile 3 yıl arasında sürebilmektedir."
  },
  {
    question: "Hangi şehirlere hizmet veriyorsunuz?",
    answer: "Merkez ofisimiz İstanbul'da olmakla birlikte, Türkiye'nin her yerindeki davalarınız için hukuki destek ve danışmanlık hizmeti sunmaktayız."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Sıkça Sorulan Sorular</h2>
          <p className="text-slate-600">Aklınıza takılan soruların cevaplarını burada bulabilirsiniz.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
              >
                <span className="font-bold text-slate-900">{faq.question}</span>
                {openIndex === index ? <Minus className="text-blue-600" /> : <Plus className="text-slate-400" />}
              </button>
              
              {/* Açılır Kapanır Alan */}
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed bg-slate-50 border-t border-slate-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}