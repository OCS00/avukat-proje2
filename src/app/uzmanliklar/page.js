"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import { servicesData } from "@/data/servicesData"; // Mevcut veri dosyan
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Search, Gavel, FileText, Scale, 
  ShieldCheck, MessageSquare, ChevronDown, CheckCircle2 
} from "lucide-react";

export default function UzmanliklarPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("Tümü");
  const [openFaq, setOpenFaq] = useState(null);

  // Arama Fonksiyonu
  const filteredServices = servicesData.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // SSS Verisi (Sayfa içine gömülü)
  const faqData = [
    { q: "Dava açmadan önce danışmanlık almalı mıyım?", a: "Kesinlikle. Önleyici hukuk hizmeti, ileride doğabilecek büyük maliyetlerin ve hak kayıplarının önüne geçer. Stratejiyi baştan kurmak başarı şansını %80 artırır." },
    { q: "Vekalet verme işlemi nasıl yapılır?", a: "Notere giderek avukatlık bilgilerimizle vekaletname çıkarabilirsiniz. Yurt dışındaysanız konsolosluklar aracılığıyla bu işlemi gerçekleştirebilirsiniz." },
    { q: "Dava masrafları ne kadar tutar?", a: "Masraflar davanın türüne, talep edilen tutara ve dosyanın karmaşıklığına göre değişir. Şeffaflık ilkemiz gereği, süreç başlamadan tüm kalemleri size yazılı olarak sunuyoruz." }
  ];

  return (
    <main className="bg-[#0f172a] min-h-screen text-gray-300 selection:bg-[#c5a47e] selection:text-[#0f172a]">
      

      {/* 1. HERO & SEARCH SECTION */}
      <section className="pt-40 pb-20 px-4 bg-[#0b1120] border-b border-gray-800 relative overflow-hidden">
        {/* Arka Plan Efekti */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#c5a47e]/5 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[#c5a47e] font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block px-3 py-1 border border-[#c5a47e]/30 rounded-full">
              Uzmanlık Alanları
            </span>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
              Hukuki Çözüm Merkezi
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light mb-10">
              Sizin için karmaşık görünen süreçleri, tecrübemizle yalın ve sonuç odaklı çözümlere dönüştürüyoruz. Hangi konuda desteğe ihtiyacınız var?
            </p>

            {/* Arama Çubuğu */}
            <div className="max-w-xl mx-auto relative group">
              <input 
                type="text" 
                placeholder="Örn: Boşanma, Ceza, Tazminat..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#1e293b] border border-gray-700 rounded-full py-5 pl-14 pr-6 text-white focus:border-[#c5a47e] focus:ring-1 focus:ring-[#c5a47e] outline-none transition-all shadow-2xl placeholder:text-gray-600"
              />
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#c5a47e] transition-colors" size={22} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TAB MENÜ & KARTLAR */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Kategoriler (Görsel Filtreleme - Şu an hepsi aktif) */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["Tümü", "Bireysel Hukuk", "Kurumsal Danışmanlık", "Uluslararası"].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${
                activeTab === tab 
                  ? "bg-[#c5a47e] text-[#0f172a]" 
                  : "bg-[#1e293b] text-gray-400 hover:text-white hover:bg-[#2d3b4e]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Servis Izgarası */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link 
                    href={`/uzmanliklar/${service.slug}`} 
                    className="group block h-full bg-[#1e293b] border border-gray-800 p-8 rounded-sm hover:border-[#c5a47e] hover:shadow-[0_0_30px_rgba(197,164,126,0.15)] transition-all duration-300 relative overflow-hidden flex flex-col"
                  >
                    {/* Hover Arka Planı */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#c5a47e]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 flex justify-between items-start mb-6">
                      <div className="w-14 h-14 bg-[#0f172a] rounded-sm border border-gray-700 flex items-center justify-center text-[#c5a47e] group-hover:scale-110 group-hover:bg-[#c5a47e] group-hover:text-[#0f172a] transition-all duration-300">
                        {service.icon}
                      </div>
                      <span className="text-gray-600 font-playfair italic group-hover:text-[#c5a47e] transition-colors">0{index+1}</span>
                    </div>

                    <div className="relative z-10 flex-grow">
                      <h3 className="text-2xl font-playfair font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">{service.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                        {service.shortDesc}
                      </p>
                    </div>

                    <div className="relative z-10 mt-auto pt-6 border-t border-gray-800 group-hover:border-[#c5a47e]/30 transition-colors flex items-center justify-between">
                      <span className="text-xs font-bold text-[#c5a47e] uppercase tracking-widest">Detaylı İncele</span>
                      <div className="w-8 h-8 rounded-full bg-[#0f172a] flex items-center justify-center group-hover:bg-[#c5a47e] transition-colors">
                        <ArrowRight size={14} className="text-white group-hover:text-[#0f172a]" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-3 text-center py-20">
                <p className="text-gray-400 text-lg">Aradığınız kriterlere uygun uzmanlık alanı bulunamadı.</p>
                <button onClick={() => setSearchTerm("")} className="mt-4 text-[#c5a47e] underline">Tümünü Göster</button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 3. SÜREÇ HARİTASI (Timeline) */}
      <section className="py-24 bg-[#c5a47e] text-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4">Dava Süreci Nasıl İşler?</h2>
            <p className="font-medium max-w-2xl mx-auto">Adım adım şeffaf ve planlı bir yol haritası izliyoruz.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Çizgi (Masaüstü) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-[#0f172a]/20 border-t border-dashed border-[#0f172a]"></div>

            {[
              { icon: <MessageSquare size={28}/>, step: "01", title: "Ön Görüşme", desc: "Durum analizi ve yol haritasının belirlenmesi." },
              { icon: <FileText size={28}/>, step: "02", title: "Dosya Hazırlığı", desc: "Delillerin toplanması ve dilekçelerin yazımı." },
              { icon: <Gavel size={28}/>, step: "03", title: "Dava Süreci", desc: "Duruşmaların takibi ve mahkeme temsili." },
              { icon: <CheckCircle2 size={28}/>, step: "04", title: "Sonuç & İnfaz", desc: "Kararın uygulanması ve sürecin kapanışı." }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 text-center group">
                <div className="w-24 h-24 mx-auto bg-[#0f172a] text-white rounded-full flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-70">Adım {item.step}</span>
                <h3 className="text-xl font-bold font-playfair mb-3">{item.title}</h3>
                <p className="text-sm font-medium opacity-80 leading-relaxed px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SIKÇA SORULAN SORULAR (FAQ) & CTA */}
      <section className="py-24 max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-white mb-4">Merak Edilenler</h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, idx) => (
            <div key={idx} className="bg-[#1e293b] border border-gray-800 rounded-sm overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-800/50 transition-colors"
              >
                <span className="font-playfair font-bold text-white text-lg">{item.q}</span>
                <ChevronDown className={`text-[#c5a47e] transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 font-light leading-relaxed border-t border-gray-800/50">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#1e293b] to-[#0f172a] p-10 rounded-sm border border-[#c5a47e]/30 text-center">
          <h3 className="text-2xl font-playfair font-bold text-white mb-4">Aradığınız Sorunun Cevabını Bulamadınız mı?</h3>
          <p className="text-gray-400 mb-8">
            Her hukuki durum kendine özgüdür. Size özel bir değerlendirme için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="/iletisim" className="bg-[#c5a47e] text-[#0f172a] px-8 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-white transition-all">
               Randevu Al
             </Link>
             <Link href="https://wa.me/905555555555" className="border border-white text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#0f172a] transition-all">
               WhatsApp Destek
             </Link>
          </div>
        </div>
      </section>

      
    </main>
  );
}