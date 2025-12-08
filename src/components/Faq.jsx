// src/components/Faq.jsx
"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/content"; // Verileri buradan çekiyoruz

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-[#0f172a]" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BAŞLIK ALANI */}
        <div className="text-center mb-16">
          <span className="text-[#c5a47e] font-bold tracking-widest uppercase text-xs mb-2 block">
            Merak Edilenler
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Sıkça Sorulan Sorular
          </h2>
          <div className="w-24 h-1 bg-[#c5a47e] mx-auto"></div>
        </div>

        {/* SORULAR LİSTESİ */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-sm transition-all duration-300 ${
                openIndex === index 
                  ? "bg-[#1e293b] border-[#c5a47e]" 
                  : "bg-[#1e293b] border-gray-800 hover:border-gray-600"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-playfair font-bold text-lg transition-colors ${
                  openIndex === index ? "text-[#c5a47e]" : "text-white"
                }`}>
                  {faq.question}
                </span>
                
                {openIndex === index ? (
                  <div className="bg-[#c5a47e] rounded-full p-1 text-[#0f172a]">
                    <Minus size={16} strokeWidth={3} />
                  </div>
                ) : (
                  <div className="bg-gray-700 rounded-full p-1 text-gray-400">
                    <Plus size={16} strokeWidth={3} />
                  </div>
                )}
              </button>
              
              {/* Açılır Kapanır Alan */}
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed text-sm border-t border-gray-700/50 mt-2">
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