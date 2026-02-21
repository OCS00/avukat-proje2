"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { Quote, Scale, BookOpen, Shield, Target, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HakkimdaPage() {
  return (
    <div className="bg-[#0f172a] text-gray-300 selection:bg-[#c5a47e] selection:text-[#0f172a]">
     
      {/* 1. KİŞİSEL GİRİŞ (PORTRE ODAKLI) */}
      <section className="pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          
          {/* Sol Taraf: Büyük Yazı */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-8xl font-playfair font-bold text-white mb-6 leading-[0.9]">
                Osman <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5a47e] to-white">Özkaya.</span>
              </h1>
              <div className="w-24 h-1 bg-[#c5a47e] mb-8"></div>
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8 border-l-2 border-[#c5a47e] pl-6 italic">
                "Hukuk, sadece kanun maddelerini ezberlemek değil; onları hayatın gerçekleriyle harmanlayıp, haklı olanı stratejiyle savunma sanatıdır."
              </p>
              <p className="text-gray-400 font-light leading-relaxed mb-6">
                Mersin Barosu'na kayıtlı olarak, hukukun karmaşık labirentlerinde müvekkillerime şeffaf ve sonuç odaklı bir rehberlik sunuyorum. Klasik avukatlık anlayışının aksine; niceliğe değil, niteliğe odaklanıyorum.
              </p>
              <p className="text-gray-400 font-light leading-relaxed">
                Ofisimde yüzlerce dosya yığınına değil, her biri özenle seçilmiş, stratejisi günlerce düşünülmüş ve bizzat ilgilendiğim hukuki süreçlere yer veriyorum. Sizin davanız, benim meselemdir.
              </p>
            </motion.div>
          </div>

          {/* Sağ Taraf: Soyut/Sanatsal Görsel */}
          <div className="w-full md:w-1/2 order-1 md:order-2 relative">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               className="relative z-10 aspect-[4/5] overflow-hidden bg-[#1e293b] rounded-sm"
             >
               <img 
                 src={siteConfig.profileImage || "https://images.unsplash.com/photo-1505664173691-a28d66bc5b75?q=80&w=2000"} 
                 alt="Av. Osman Özkaya" 
                 className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" 
               />
               
               {/* Dekoratif Çerçeve */}
               <div className="absolute inset-0 border border-[#c5a47e]/30 m-6 pointer-events-none transition-all duration-700 hover:m-4"></div>
             </motion.div>
             {/* Arka Plan Efekti */}
             <div className="absolute -bottom-8 -right-8 w-full h-full border border-gray-800 -z-0 rounded-sm hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* 2. YENİ: MESLEKİ İLKELERİM (Güven Aşılayan Grid Yapısı) */}
      <section className="py-24 bg-[#0b1120] border-y border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#c5a47e] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Çalışma Prensiplerim
            </span>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white">
              Temel Değerlerim
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Mutlak Gizlilik", desc: "Avukat-müvekkil ilişkisinin temeli sırdır. Paylaştığınız her bilgi, çelik kasadan daha güvenli bir şekilde zihnimde ve sistemlerimde korunur." },
              { icon: Target, title: "Stratejik Hamle", desc: "Davalar mahkeme salonundan önce masada kazanılır. Her adım, rakibin hamleleri öngörülerek bir satranç ustası titizliğiyle planlanır." },
              { icon: Award, title: "Şeffaf İletişim", desc: "Hukuki jargonun arkasına saklanmam. Davanızın risklerini, kazanma ihtimalini ve sürecini size en anlaşılır, en dürüst haliyle anlatırım." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-[#0f172a] p-8 border border-gray-800 hover:border-[#c5a47e]/50 transition-colors rounded-sm group"
              >
                <item.icon className="text-[#c5a47e] mb-6 group-hover:scale-110 transition-transform" size={36} />
                <h3 className="text-xl text-white font-bold font-playfair mb-4">{item.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TEK KİŞİLİK OFİS FELSEFESİ (Senin Tasarımın, Geliştirilmiş) */}
      <section className="py-32 relative overflow-hidden">
        {/* Arka Plan Deseni */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Quote className="text-[#c5a47e] mx-auto mb-8 opacity-30" size={56} />
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-16">
            Neden "Butik" Çalışıyorum?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl text-white font-bold font-playfair mb-4 flex items-center gap-3">
                <Scale className="text-[#c5a47e]" size={24}/> Odaklanma
              </h3>
              <p className="text-gray-400 font-light leading-relaxed text-lg">
                Her avukat aynı anda yüzlerce davaya bakamaz; bakmaya çalışırsa hayat kurtaracak o küçük detayı kaçırır. Ben, fabrika gibi çalışmak yerine sınırlı sayıda dosya kabul ederek, her müvekkilime hak ettiği zamanı, eforu ve dikkati son damlasına kadar ayırıyorum.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl text-white font-bold font-playfair mb-4 flex items-center gap-3">
                <BookOpen className="text-[#c5a47e]" size={24}/> Derinleşme
              </h3>
              <p className="text-gray-400 font-light leading-relaxed text-lg">
                Matbu (hazır) dilekçelerle dava yürütmek benim tarzım değil. Her vaka için özel Yargıtay kararları tarar, akademik literatürü inceler ve size özel bir savunma stratejisi kurgularım. Sizin davanız, benim için çözülmesi gereken kusursuz bir bulmacadır.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. İMZA VE CTA ALANI */}
      <section className="py-24 bg-[#0b1120] flex flex-col items-center justify-center text-center px-4 border-t border-gray-800">
        <p className="text-xl text-gray-500 font-playfair italic mb-8">
          Haklarınızı şansa değil, stratejiye bırakın. Saygılarımla,
        </p>
        
        {/* İmza */}
        <div className="text-4xl md:text-6xl font-playfair font-bold text-white relative inline-block mb-12">
          <span className="text-[#c5a47e] font-light italic pr-2">Av.</span> 
          Osman Özkaya
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-[#c5a47e] to-transparent"
          ></motion.div>
        </div>
        
        {/* Aksiyon Butonu */}
        <Link 
          href="/iletisim" 
          className="group flex items-center gap-3 bg-transparent border border-[#c5a47e] text-[#c5a47e] px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-[#c5a47e] hover:text-[#0f172a] transition-all duration-300"
        >
          Hukuki Sürecinizi Başlatın 
          <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </section>

    </div>
  );
}