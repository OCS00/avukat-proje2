"use client";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ShieldAlert, Fingerprint, Lock, Scale } from "lucide-react";
import { servicesData } from "@/data/servicesData";

// --- BİLEŞENLER ---

// 1. Kayan Yazı Şeridi (Marquee)
const Marquee = () => {
  return (
    <div className="relative flex overflow-hidden py-6 bg-[#c5a47e] text-[#0f172a]">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-2xl font-bold uppercase tracking-widest font-playfair flex items-center gap-4">
            Stratejik Savunma <span className="w-2 h-2 bg-[#0f172a] rounded-full"></span> 
            Kişiye Özel Hukuk <span className="w-2 h-2 bg-[#0f172a] rounded-full"></span>
            Gizlilik & Güven <span className="w-2 h-2 bg-[#0f172a] rounded-full"></span>
          </span>
        ))}
      </div>
      <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap items-center gap-12">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-2xl font-bold uppercase tracking-widest font-playfair flex items-center gap-4">
            Stratejik Savunma <span className="w-2 h-2 bg-[#0f172a] rounded-full"></span> 
            Kişiye Özel Hukuk <span className="w-2 h-2 bg-[#0f172a] rounded-full"></span>
            Gizlilik & Güven <span className="w-2 h-2 bg-[#0f172a] rounded-full"></span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const containerRef = useRef(null);

  return (
    <main className="bg-[#050914] min-h-screen selection:bg-[#c5a47e] selection:text-[#0f172a]" ref={containerRef}>
      <Navbar />
      
      {/* 1. SPOTLIGHT HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Arka Plan: Noise Texture & Gradient */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#c5a47e]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 border border-[#c5a47e]/30 px-4 py-2 rounded-full mb-8 bg-[#c5a47e]/5 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#c5a47e] rounded-full animate-pulse"></span>
              <span className="text-[#c5a47e] text-xs font-bold uppercase tracking-[0.2em]">Mersin Barosu Avukatı</span>
            </div>

            <h1 className="text-6xl md:text-9xl font-playfair font-bold text-white leading-[0.9] tracking-tighter mb-8 mix-blend-overlay">
              OTORİTE <br/> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5a47e] via-[#e8d5b5] to-[#c5a47e]">GÜVEN</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
              Büyük büroların karmaşasında kaybolmayın. <br className="hidden md:block"/>
              Sadece dosyanızı değil, itibarınızı da koruyan <strong className="text-white">stratejik ve butik</strong> bir hukuk hizmeti.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/iletisim" className="group relative px-8 py-4 bg-[#c5a47e] text-[#050914] font-bold text-sm uppercase tracking-widest overflow-hidden rounded-sm hover:text-white transition-colors">
                <div className="absolute inset-0 w-full h-full bg-[#0f172a] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Dava Analizi Başlat <ArrowUpRight size={18} />
                </span>
              </Link>
              <Link href="/uzmanliklar" className="px-8 py-4 border border-gray-700 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all rounded-sm">
                Çalışma Alanlarım
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. INFINITE MARQUEE (Hareketli Şerit) */}
      <Marquee />

      {/* 3. FELSEFE: NEDEN TEK KİŞİLİK OFİS? (Dark Psychology) */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-8 leading-tight">
              "Avukatınız Kim? <br/> <span className="text-gray-600">Stajyer mi, Ortak mı?"</span>
            </h2>
            <div className="space-y-8">
              <p className="text-gray-400 text-lg leading-relaxed">
                Büyük hukuk fabrikalarında dosyanız elden ele dolaşır. Stratejiyi kıdemli avukat kurar, duruşmaya yetkisiz asistan girer.
              </p>
              <p className="text-white text-xl font-medium border-l-2 border-[#c5a47e] pl-6 py-2">
                Benim ofisimde bu olmaz. Telefona ben bakarım. Dilekçeyi ben yazarım. Duruşmada yargıcın gözünün içine ben bakarım.
              </p>
              <ul className="space-y-4 mt-8">
                {[
                  "Aracı yok, doğrudan iletişim.",
                  "Gizlilik garantisi (Dosyanızı 3. kişiler görmez).",
                  "Terzi işi, kişiye özel strateji."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Fingerprint className="text-[#c5a47e]" size={20} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-sm border border-gray-800 p-2 overflow-hidden relative group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
              {/* Buraya Osman Bey'in çok karizmatik, belki masada çalışırken bir fotosu */}
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071" 
                alt="Osman Özkaya Çalışma Anı" 
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700 mix-blend-luminosity" 
              />
              
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#050914] to-transparent">
                 <p className="text-white font-playfair text-2xl">Av. Osman Özkaya</p>
                 <p className="text-[#c5a47e] text-xs uppercase tracking-widest">Kurucu & Tek Muhatap</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BENTO GRID SERVICES (Yenilikçi Hizmet Gösterimi) */}
      <section className="py-24 px-4 bg-[#0b1120]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[#c5a47e] font-bold tracking-widest uppercase text-xs">Uzmanlıklar</span>
              <h2 className="text-4xl font-playfair font-bold text-white mt-2">Hukuki Cephanelik</h2>
            </div>
            <Link href="/uzmanliklar" className="text-white border-b border-[#c5a47e] pb-1 hover:text-[#c5a47e] transition-colors">Tüm Alanlar</Link>
          </div>

          {/* BENTO GRID LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[600px]">
            
            {/* Büyük Kutu (Ceza Hukuku vb.) */}
            <Link href="/uzmanliklar/ceza-hukuku" className="md:col-span-2 md:row-span-2 group relative bg-[#151c2f] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#c5a47e] transition-all">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050914]/90 z-10"></div>
              <img src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=2000" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" alt="Ceza Hukuku"/>
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <div className="w-12 h-12 bg-[#c5a47e] rounded-full flex items-center justify-center text-[#050914] mb-4">
                  <Scale size={24} />
                </div>
                <h3 className="text-3xl font-playfair font-bold text-white mb-2">Ağır Ceza & Savunma</h3>
                <p className="text-gray-400 max-w-md">Özgürlüğünüzün söz konusu olduğu yerde, şansa yer yoktur. Agresif ve stratejik savunma.</p>
              </div>
            </Link>

            {/* Sağ Üst Kutu */}
            <Link href="/uzmanliklar/aile-hukuku" className="group relative bg-[#151c2f] rounded-2xl p-8 border border-gray-800 hover:border-[#c5a47e] transition-all flex flex-col justify-between overflow-hidden">
               <div className="absolute top-0 right-0 p-32 bg-[#c5a47e]/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-[#c5a47e]/10"></div>
               <ShieldAlert className="text-[#c5a47e] mb-4" size={32} />
               <div>
                 <h3 className="text-xl font-playfair font-bold text-white">Aile & Boşanma</h3>
                 <p className="text-sm text-gray-400 mt-2">Mal paylaşımı, velayet ve nafaka süreçlerinde hak kaybına son.</p>
               </div>
            </Link>

            {/* Sağ Alt Kutu */}
            <Link href="/uzmanliklar/ticaret-hukuku" className="group relative bg-[#151c2f] rounded-2xl p-8 border border-gray-800 hover:border-[#c5a47e] transition-all flex flex-col justify-between">
               <Lock className="text-[#c5a47e] mb-4" size={32} />
               <div>
                 <h3 className="text-xl font-playfair font-bold text-white">Ticaret & Şirketler</h3>
                 <p className="text-sm text-gray-400 mt-2">Sözleşme riskleri ve şirket danışmanlığı.</p>
               </div>
            </Link>

          </div>
        </div>
      </section>

      {/* 5. CTA: EYLEME GEÇİRME (Minimalist) */}
      <section className="py-32 relative flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        
        {/* Arka Plan Yazısı (Devasa) */}
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10vw] md:text-[12vw] font-bold text-white/[0.03] whitespace-nowrap font-playfair pointer-events-none select-none">
          OSMAN ÖZKAYA
        </h2>

        <div className="relative z-10 max-w-2xl">
          <p className="text-[#c5a47e] font-bold tracking-widest uppercase text-sm mb-6">Müsaitlik Durumu: Açık</p>
          <h3 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-8">
            Endişeyi Bırakın. <br/> Çözüme Başlayalım.
          </h3>
          <p className="text-gray-400 text-lg mb-12">
            Hukuki sorununuzu bir paragrafla özetleyin. Size davanızın gidişatı hakkında net bir geri dönüş yapayım.
          </p>
          
          <Link href="/iletisim" className="inline-flex items-center gap-4 bg-white text-[#050914] px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#c5a47e] transition-all duration-300 transform hover:scale-105 shadow-2xl">
            İletişime Geç <ArrowUpRight />
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppBtn />
    </main>
  );
}