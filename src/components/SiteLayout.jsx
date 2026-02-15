"use client"; // Bu dosya tarayıcıda çalışır, URL'yi kontrol eder
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import { siteConfig } from "@/data/siteConfig";
import { Phone, MessageCircle } from "lucide-react";

export default function SiteLayout({ children }) {
  const pathname = usePathname();
  
  // EĞER ADRES '/studio' İLE BAŞLIYORSA SADECE İÇERİĞİ GÖSTER (NAVBAR YOK)
  if (pathname && pathname.startsWith("/studio")) {
    return <>{children}</>;
  }

  // DEĞİLSE NORMAL SİTEYİ GÖSTER
  return (
    <>
      <Navbar />
      
      <main className="flex flex-col min-h-screen">
        {children}
      </main>
      
      <div className="mb-20 md:mb-0">
        <Footer />
      </div>

      {/* Masaüstü WhatsApp */}
      <div className="hidden md:block">
        <WhatsAppBtn />
      </div>

      {/* Mobil Yapışkan Bar (Hemen Ara) */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden grid grid-cols-2 bg-[#0f172a]/95 backdrop-blur-lg border-t border-gray-800 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] pb-6 pt-3 px-2 gap-3">
        <a 
          href={`https://wa.me/${siteConfig.phoneLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-sm active:scale-95 transition-transform shadow-lg"
        >
          <MessageCircle size={20} fill="white" />
          <span className="text-xs font-bold uppercase tracking-wide">WhatsApp</span>
        </a>
        <a 
          href={`tel:${siteConfig.phone}`}
          className="flex items-center justify-center gap-2 bg-[#c5a47e] text-[#0f172a] py-3 rounded-sm active:scale-95 transition-transform shadow-[0_0_15px_rgba(197,164,126,0.4)]"
        >
          <Phone size={20} fill="#0f172a" />
          <span className="text-xs font-bold uppercase tracking-wide">Hemen Ara</span>
        </a>
      </div>
    </>
  );
}