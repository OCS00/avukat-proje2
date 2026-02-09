"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { Quote, Scale, BookOpen } from "lucide-react";

export default function HakkimdaPage() {
  return (
    <main className="bg-[#0f172a] min-h-screen text-gray-300 selection:bg-[#c5a47e] selection:text-[#0f172a]">
      <Navbar />

      {/* 1. KİŞİSEL GİRİŞ (PORTRE ODAKLI) */}
      <section className="pt-40 pb-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          
          {/* Sol Taraf: Büyük Yazı */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-8xl font-playfair font-bold text-white mb-8 leading-[0.9]">
                Osman <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5a47e] to-white">Özkaya.</span>
              </h1>
              <div className="w-24 h-1 bg-[#c5a47e] mb-8"></div>
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8">
                "Hukuk, sadece kanun maddelerini ezberlemek değil; onları hayatın gerçekleriyle harmanlayıp, haklı olanı savunma sanatıdır."
              </p>
              <p className="text-gray-400 font-light leading-relaxed">
                Mersin Barosu'na kayıtlı olarak, hukukun karmaşık labirentlerinde müvekkillerime rehberlik ediyorum. 
                Ofisimde yüzlerce dosya yığınına değil, her biri özenle seçilmiş ve bizzat ilgilendiğim hukuki süreçlere yer veriyorum.
              </p>
            </motion.div>
          </div>

          {/* Sağ Taraf: Soyut/Sanatsal Görsel */}
          <div className="w-full md:w-1/2 order-1 md:order-2 relative">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               className="relative z-10 aspect-[3/4] overflow-hidden bg-[#1e293b]"
             >
               {/* Buraya çok karizmatik, belki siyah arka planlı bir fotoğraf gelecek */}
               <img src={siteConfig.profileImage} alt="Osman Özkaya" className="w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-1000" />
               
               {/* Dekoratif Çerçeve */}
               <div className="absolute inset-0 border-[1px] border-[#c5a47e]/30 m-4 pointer-events-none"></div>
             </motion.div>
             {/* Arka Plan Efekti */}
             <div className="absolute -bottom-10 -right-10 w-full h-full border border-gray-800 -z-0"></div>
          </div>
        </div>
      </section>

      {/* 2. TEK KİŞİLİK OFİS FELSEFESİ */}
      <section className="py-32 bg-[#0b1120] relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Quote className="text-[#c5a47e] mx-auto mb-8 opacity-50" size={48} />
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-12">
            Neden "Butik" Çalışıyorum?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-xl text-white font-bold font-playfair mb-4 flex items-center gap-2">
                <Scale className="text-[#c5a47e]" size={20}/> Odaklanma
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Her avukat aynı anda yüzlerce davaya bakamaz; bakarsa detayları kaçırır. Ben, sınırlı sayıda dosya kabul ederek, her müvekkilime hak ettiği zamanı ve dikkati ayırıyorum.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-white font-bold font-playfair mb-4 flex items-center gap-2">
                <BookOpen className="text-[#c5a47e]" size={20}/> Derinleşme
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Sıradan dilekçeler yerine, her vaka için özel literatür taraması yapıyor ve strateji geliştiriyorum. Sizin davanız, benim için çözülmesi gereken özel bir kurgudur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. İMZA ALANI */}
      <section className="py-24 bg-[#0f172a] flex flex-col items-center justify-center text-center px-4">
        <p className="text-lg text-gray-500 font-playfair italic mb-6">
          Saygılarımla,
        </p>
        
        {/* İmza Görseli veya Adı */}
        <div className="text-4xl md:text-6xl font-playfair font-bold text-white relative inline-block">
          <span className="text-[#c5a47e]">Av.</span> Osman Özkaya
          {/* Altın Çizgi */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute -bottom-4 left-0 h-1 bg-[#c5a47e]"
          ></motion.div>
        </div>
        
        <div className="mt-16">
          <a href="/iletisim" className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors">
            İletişime Geçin
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppBtn />
    </main>
  );
}