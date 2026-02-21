import { notFound } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import { siteConfig } from "@/data/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import Link from "next/link";
import { 
  ArrowRight, Phone, CheckCircle2, ChevronRight, 
  ChevronDown, FileText, ShieldCheck, Clock 
} from "lucide-react";

// SEO AYARLARI
export async function generateMetadata({ params }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: "Hizmet Bulunamadı" };

  return {
    title: `${service.title} | Av. Osman Özkaya`,
    description: service.shortDesc,
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export default function ServiceDetail({ params }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const otherServices = servicesData.filter(s => s.slug !== params.slug);

  return (
    <main className="bg-[#0f172a] min-h-screen text-gray-300 selection:bg-[#c5a47e] selection:text-[#0f172a]">
      

      {/* 1. HERO BÖLÜMÜ (Büyük Görsel) */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center md:text-left pt-20">
           {/* Breadcrumb */}
           <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-widest text-[#c5a47e] mb-6">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight size={12} />
            <Link href="/uzmanliklar" className="hover:text-white transition-colors">Uzmanlıklar</Link>
            <ChevronRight size={12} />
            <span className="text-white">{service.title}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl leading-relaxed">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* 2. İÇERİK ve SIDEBAR */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* SOL TARAF: ANA İÇERİK */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Açıklama */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-white mb-6 border-l-4 border-[#c5a47e] pl-6">
                Hukuki Süreç ve Yaklaşımımız
              </h2>
              <div className="text-lg text-gray-300 font-light leading-relaxed space-y-4">
                <p>{service.fullDesc}</p>
                <p>
                  Mevcut kanunlar, Yargıtay içtihatları ve güncel hukuki gelişmeler ışığında size özel, kopyala-yapıştır olmayan bir savunma stratejisi hazırlıyoruz.
                </p>
              </div>
            </div>

            {/* Kapsam (Features) */}
            <div>
              <h3 className="text-2xl font-playfair font-bold text-white mb-8">Hizmet Kapsamımız</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-[#1e293b] p-5 rounded-sm border border-gray-800 hover:border-[#c5a47e] transition-colors group">
                    <CheckCircle2 className="text-[#c5a47e] shrink-0 group-hover:scale-110 transition-transform" size={24} />
                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Süreç Haritası (Timeline) */}
            {service.process && (
              <div>
                <h3 className="text-2xl font-playfair font-bold text-white mb-8">Nasıl İlerliyoruz?</h3>
                <div className="space-y-6">
                  {service.process.map((proc, idx) => (
                    <div key={idx} className="flex gap-6 group">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full border-2 border-[#c5a47e] text-[#c5a47e] flex items-center justify-center font-bold text-lg bg-[#0f172a] z-10 group-hover:bg-[#c5a47e] group-hover:text-[#0f172a] transition-colors">
                          {proc.step}
                        </div>
                        {idx !== service.process.length - 1 && <div className="w-0.5 h-full bg-gray-800 mt-2"></div>}
                      </div>
                      <div className="pb-8">
                        <h4 className="text-xl font-bold text-white mb-2">{proc.title}</h4>
                        <p className="text-gray-400 font-light">{proc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sıkça Sorulan Sorular (Accordion) */}
            {service.faq && (
              <div>
                <h3 className="text-2xl font-playfair font-bold text-white mb-8">Bu Alanda Sık Sorulanlar</h3>
                <div className="space-y-4">
                  {service.faq.map((item, idx) => (
                    <details key={idx} className="group bg-[#1e293b] border border-gray-800 rounded-sm overflow-hidden">
                      <summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-white hover:text-[#c5a47e] transition-colors list-none">
                        <span className="flex items-center gap-3"><FileText size={18} className="text-[#c5a47e]"/> {item.q}</span>
                        <ChevronDown className="transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="px-6 pb-6 text-gray-400 font-light leading-relaxed border-t border-gray-700/30 pt-4">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SAĞ TARAF: STICKY SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              
              {/* İletişim Kartı */}
              <div className="bg-[#c5a47e] p-8 rounded-sm text-[#0f172a] relative overflow-hidden shadow-2xl">
                <div className="relative z-10">
                  <ShieldCheck size={40} className="mb-6 opacity-80" />
                  <h3 className="text-2xl font-playfair font-bold mb-4">Vakit Kaybetmeyin.</h3>
                  <p className="mb-8 font-medium opacity-90 leading-relaxed">
                    Hukukta süreler hak düşürücüdür. Dosyanızı incelememiz için hemen randevu alın.
                  </p>
                  <a 
                    href={`tel:${siteConfig.phone}`} 
                    className="flex items-center justify-center gap-3 bg-[#0f172a] text-white py-4 px-6 rounded-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#0f172a] transition-all shadow-lg w-full mb-3"
                  >
                    <Phone size={18} /> Hemen Ara
                  </a>
                  <p className="text-center text-xs font-bold uppercase tracking-widest opacity-60">İlk Görüşme Önemlidir</p>
                </div>
                {/* Dekoratif Arka Plan */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
              </div>

              {/* Diğer Hizmetler Navigasyon */}
              <div className="bg-[#1e293b]/50 border border-gray-800 rounded-sm p-6 backdrop-blur-sm">
                <h3 className="text-lg font-playfair font-bold text-white mb-6 pb-4 border-b border-gray-700">
                  Diğer Uzmanlıklar
                </h3>
                <nav className="flex flex-col gap-2">
                  {otherServices.map((s, idx) => (
                    <Link 
                      key={idx} 
                      href={`/uzmanliklar/${s.slug}`}
                      className="flex items-center justify-between p-3 rounded-sm hover:bg-[#0f172a] text-gray-400 hover:text-[#c5a47e] transition-all group"
                    >
                      <span className="text-sm font-medium">{s.title}</span>
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </Link>
                  ))}
                </nav>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-20 border-t border-gray-800 bg-[#0b1120] text-center">
        <h2 className="text-3xl font-playfair font-bold text-white mb-6">
          Hukuki Mücadelenizde Yalnız Değilsiniz.
        </h2>
        <Link href="/iletisim" className="text-[#c5a47e] border-b border-[#c5a47e] pb-1 hover:text-white hover:border-white transition-all font-bold uppercase tracking-widest">
          Bize Ulaşın
        </Link>
      </section>

      
    </main>
  );
}