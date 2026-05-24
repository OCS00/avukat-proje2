"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight, ShieldAlert, Fingerprint, Lock, Scale,
  Star, Quote, Calendar, ArrowRight, ChevronRight,
  ShieldCheck, BookOpen
} from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { reviews } from "@/data/content";

// --- YARDIMCI BİLEŞENLER ---

const Marquee = () => (
  <div className="relative flex overflow-hidden py-6 bg-[#c5a47e] text-[#0f172a]">
    {/* Sol ve sağ kenar soluk geçişi */}
    <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#c5a47e] to-transparent z-10 pointer-events-none" />
    <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#c5a47e] to-transparent z-10 pointer-events-none" />

    <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="text-2xl font-bold uppercase tracking-widest font-playfair flex items-center gap-4">
          Stratejik Savunma <span className="w-2 h-2 bg-[#0f172a] rounded-full" />
          Kişiye Özel Hukuk <span className="w-2 h-2 bg-[#0f172a] rounded-full" />
          Gizlilik & Güven <span className="w-2 h-2 bg-[#0f172a] rounded-full" />
        </span>
      ))}
    </div>
    <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap items-center gap-12">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="text-2xl font-bold uppercase tracking-widest font-playfair flex items-center gap-4">
          Stratejik Savunma <span className="w-2 h-2 bg-[#0f172a] rounded-full" />
          Kişiye Özel Hukuk <span className="w-2 h-2 bg-[#0f172a] rounded-full" />
          Gizlilik & Güven <span className="w-2 h-2 bg-[#0f172a] rounded-full" />
        </span>
      ))}
    </div>
  </div>
);


function BlogPreview() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then((r) => r.json())
      .then((data) => {
        const list = Array.isArray(data) ? data : (data.posts ?? []);
        setPosts(list.slice(0, 3));
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (!loading && posts.length === 0) return null;

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-14">
        <div>
          <span className="text-[#c5a47e] font-bold tracking-widest uppercase text-xs">Hukuki Perspektif</span>
          <h2 className="text-4xl font-playfair font-bold text-white mt-2">Son Yazılar</h2>
        </div>
        <Link href="/blog" className="hidden md:flex items-center gap-2 text-gray-400 hover:text-[#c5a47e] transition-colors text-sm font-bold uppercase tracking-widest">
          Tüm Yazılar <ChevronRight size={16} />
        </Link>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-[#151c2f] rounded-2xl overflow-hidden border border-gray-800 animate-pulse">
              <div className="h-48 bg-gray-800" />
              <div className="p-6 space-y-3">
                <div className="h-3 bg-gray-700 rounded w-1/3" />
                <div className="h-5 bg-gray-700 rounded w-4/5" />
                <div className="h-3 bg-gray-800 rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <motion.div
              key={post._id ?? idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-[#151c2f] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#c5a47e]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(197,164,126,0.1)]"
              >
                <div className="relative h-48 overflow-hidden">
                  {post.mainImage ? (
                    <img
                      src={post.mainImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#1e293b] to-[#0b1120] flex items-center justify-center">
                      <Scale className="text-[#c5a47e]/30" size={40} />
                    </div>
                  )}
                  {post.category && (
                    <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest bg-[#c5a47e] text-[#0f172a] px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                    <Calendar size={12} />
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })
                      : ""}
                  </div>
                  <h3 className="text-white font-playfair font-bold text-lg leading-snug mb-3 group-hover:text-[#c5a47e] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  {post.overview && (
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{post.overview}</p>
                  )}
                  <div className="mt-4 flex items-center gap-1 text-[#c5a47e] text-xs font-bold uppercase tracking-widest">
                    Devamını Oku <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}

      <div className="md:hidden mt-8 text-center">
        <Link href="/blog" className="inline-flex items-center gap-2 text-[#c5a47e] font-bold uppercase tracking-widest text-sm border-b border-[#c5a47e] pb-1">
          Tüm Yazılar <ChevronRight size={14} />
        </Link>
      </div>
    </section>
  );
}

// --- ANA SAYFA ---

export default function Home() {
  const containerRef = useRef(null);

  return (
    <main className="bg-[#050914] min-h-screen selection:bg-[#c5a47e] selection:text-[#0f172a]" ref={containerRef}>

      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0" />
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#c5a47e]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 border border-[#c5a47e]/30 px-4 py-2 rounded-full mb-8 bg-[#c5a47e]/5 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#c5a47e] rounded-full animate-pulse" />
              <span className="text-[#c5a47e] text-xs font-bold uppercase tracking-[0.2em]">Mersin Barosu Avukatı</span>
            </div>

            <h1 className="text-6xl md:text-9xl font-playfair font-bold text-white leading-[0.9] tracking-tighter mb-8">
              OTORİTE <br /> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5a47e] via-[#e8d5b5] to-[#c5a47e]">GÜVEN</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
              Büyük büroların karmaşasında kaybolmayın. <br className="hidden md:block" />
              Sadece dosyanızı değil, itibarınızı da koruyan{" "}
              <strong className="text-white">stratejik ve butik</strong> bir hukuk hizmeti.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/iletisim"
                className="group relative px-8 py-4 bg-[#c5a47e] text-[#050914] font-bold text-sm uppercase tracking-widest overflow-hidden rounded-sm hover:text-white transition-colors"
              >
                <div className="absolute inset-0 w-full h-full bg-[#0f172a] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Dava Analizi Başlat <ArrowUpRight size={18} />
                </span>
              </Link>
              <Link
                href="/uzmanliklar"
                className="px-8 py-4 border border-gray-700 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all rounded-sm"
              >
                Çalışma Alanlarım
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Aşağı kaydırma ipucu */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#c5a47e]/40" />
          <span className="text-[9px] uppercase tracking-[0.3em]">Kaydır</span>
        </motion.div>
      </section>

      {/* ── 2. MARQUEE ──────────────────────────────────────────────── */}
      <Marquee />

      {/* ── 3. NEDEN BEN? (Kalite Taahhütleri) ──────────────────────── */}
      <section className="py-20 border-b border-gray-800/50 bg-[#050914]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800/50">
            {[
              {
                title: "Her Zaman Avukatınız",
                desc: "Telefona ben bakarım. Dilekçeyi ben yazarım. Duruşmada ben olurum. Asistan ya da stajyer aracılığıyla değil — sizi temsil eden avukatla doğrudan çalışırsınız.",
                icon: <Fingerprint className="text-[#c5a47e]" size={32} />
              },
              {
                title: "Şeffaf Ücret Politikası",
                desc: "Hizmet bedeli ve dava giderleri, sürece başlamadan yazılı olarak bildirilir. Fatura aşamasında sürpriz bir kalem çıkmaz.",
                icon: <ShieldCheck className="text-[#c5a47e]" size={32} />
              },
              {
                title: "Güncel Hukuk Stratejisi",
                desc: "Eski alışkanlıklar değil; en son Yargıtay ve Bölge Adliye Mahkemesi kararlarını yakından takip eden dinamik bir savunma çizgisi.",
                icon: <BookOpen className="text-[#c5a47e]" size={32} />
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className="px-8 py-12 flex flex-col items-center text-center group hover:bg-white/[0.02] transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-[#c5a47e]/10 border border-[#c5a47e]/10 flex items-center justify-center mb-6 group-hover:bg-[#c5a47e]/15 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-playfair font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FELSEFİ BÖLÜM ───────────────────────────────────────── */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-8 leading-tight">
              "Avukatınız Kim?{" "}
              <br />
              <span className="text-gray-600">Stajyer mi, Ortak mı?"</span>
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
                  "Terzi işi, kişiye özel strateji.",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Fingerprint className="text-[#c5a47e] shrink-0" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-sm border border-gray-800 p-2 overflow-hidden relative group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
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
            {/* Arka dekoratif kare */}
            <div className="hidden md:block absolute -bottom-4 -right-4 w-full h-full border border-gray-800 -z-10 rounded-sm" />
          </div>
        </div>
      </section>

      {/* ── 5. BENTO GRID — HİZMETLER ──────────────────────────────── */}
      <section className="py-24 px-4 bg-[#0b1120]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[#c5a47e] font-bold tracking-widest uppercase text-xs">Uzmanlıklar</span>
              <h2 className="text-4xl font-playfair font-bold text-white mt-2">Hukuki Cephanelik</h2>
            </div>
            <Link href="/uzmanliklar" className="text-white border-b border-[#c5a47e] pb-1 hover:text-[#c5a47e] transition-colors">
              Tüm Alanlar
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[600px]">
            <Link
              href="/uzmanliklar/ceza-hukuku"
              className="md:col-span-2 md:row-span-2 group relative bg-[#151c2f] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#c5a47e] transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050914]/90 z-10" />
              <img
                src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=2000"
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                alt="Mersin Ceza Hukuku Avukatı — Av. Osman Özkaya"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <div className="w-12 h-12 bg-[#c5a47e] rounded-full flex items-center justify-center text-[#050914] mb-4">
                  <Scale size={24} />
                </div>
                <h3 className="text-3xl font-playfair font-bold text-white mb-2">Ağır Ceza & Savunma</h3>
                <p className="text-gray-400 max-w-md">
                  Özgürlüğünüzün söz konusu olduğu yerde, şansa yer yoktur. Agresif ve stratejik savunma.
                </p>
              </div>
            </Link>

            <Link
              href="/uzmanliklar/aile-hukuku"
              className="group relative bg-[#151c2f] rounded-2xl p-8 border border-gray-800 hover:border-[#c5a47e] transition-all flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-32 bg-[#c5a47e]/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#c5a47e]/10 transition-all" />
              <ShieldAlert className="text-[#c5a47e] mb-4" size={32} />
              <div>
                <h3 className="text-xl font-playfair font-bold text-white">Aile & Boşanma</h3>
                <p className="text-sm text-gray-400 mt-2">Mal paylaşımı, velayet ve nafaka süreçlerinde hak kaybına son.</p>
              </div>
            </Link>

            <Link
              href="/uzmanliklar/ticaret-hukuku"
              className="group relative bg-[#151c2f] rounded-2xl p-8 border border-gray-800 hover:border-[#c5a47e] transition-all flex flex-col justify-between"
            >
              <Lock className="text-[#c5a47e] mb-4" size={32} />
              <div>
                <h3 className="text-xl font-playfair font-bold text-white">Ticaret & Şirketler</h3>
                <p className="text-sm text-gray-400 mt-2">Sözleşme riskleri ve şirket danışmanlığı.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. TESTİMONİALS ─────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#c5a47e] font-bold tracking-widest uppercase text-xs">Müvekkil Deneyimleri</span>
            <h2 className="text-4xl font-playfair font-bold text-white mt-2">Ne Dediler?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative bg-[#0d1627] border border-gray-800 hover:border-[#c5a47e]/40 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_40px_rgba(197,164,126,0.08)] flex flex-col gap-6"
              >
                {/* Tırnak işareti */}
                <Quote className="text-[#c5a47e]/20 absolute top-6 right-6" size={40} />

                {/* Yıldızlar */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-[#c5a47e] fill-[#c5a47e]" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed text-sm flex-grow italic relative z-10">
                  "{review.text}"
                </p>

                <div className="border-t border-gray-800 pt-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c5a47e]/30 to-[#c5a47e]/10 flex items-center justify-center text-[#c5a47e] font-playfair font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{review.name}</p>
                    <p className="text-[#c5a47e] text-xs uppercase tracking-widest">{review.davaturu}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. BLOG ÖNİZLEME ────────────────────────────────────────── */}
      <div className="bg-[#0b1120] border-y border-gray-800/50">
        <BlogPreview />
      </div>

      {/* ── 8. CTA ──────────────────────────────────────────────────── */}
      <section className="py-32 relative flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10vw] md:text-[12vw] font-bold text-white/[0.03] whitespace-nowrap font-playfair pointer-events-none select-none">
          OSMAN ÖZKAYA
        </h2>

        <div className="relative z-10 max-w-2xl">
          <p className="text-[#c5a47e] font-bold tracking-widest uppercase text-sm mb-6">Müsaitlik Durumu: Açık</p>
          <h3 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-8">
            Endişeyi Bırakın. <br /> Çözüme Başlayalım.
          </h3>
          <p className="text-gray-400 text-lg mb-12">
            Hukuki sorununuzu bir paragrafla özetleyin. Size davanızın gidişatı hakkında net bir geri dönüş yapayım.
          </p>

          <Link
            href="/iletisim"
            className="inline-flex items-center gap-4 bg-white text-[#050914] px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#c5a47e] transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            İletişime Geç <ArrowUpRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
