import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn"; // Mevcut sağ alttaki butonun
import { siteConfig } from "@/data/siteConfig";
import { Phone, MessageCircle } from "lucide-react"; // İkonları ekledik

// Font Ayarları
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL("https://osmanozkaya.av.tr"), // Kendi domainin
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-[#0f172a] text-gray-300 antialiased selection:bg-[#c5a47e] selection:text-[#0f172a]">
        
        {/* ÜST MENÜ */}
        <Navbar />

        {/* SAYFA İÇERİĞİ */}
        <div className="flex flex-col min-h-screen">
          {children}
        </div>

        {/* ALT MENÜ */}
        <Footer />
        
        {/* SAĞ ALT WHATSAPP (Masaüstü için) */}
        <div className="hidden md:block">
           <WhatsAppBtn />
        </div>

        {/* --- MOBİL İÇİN YAPIŞKAN ALT BAR (Sadece Telefonda Görünür) --- */}
        <div className="fixed bottom-0 left-0 w-full z-50 md:hidden grid grid-cols-2 bg-[#0f172a] border-t border-gray-800 shadow-[0_-5px_20px_rgba(0,0,0,0.8)] pb-safe">
          
          {/* WhatsApp Butonu */}
          <a 
            href="https://wa.me/905459320015" // Numaranı buraya yaz (905...)
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-3 gap-1 border-r border-gray-800 active:bg-gray-800 transition-colors"
          >
            <MessageCircle size={22} className="text-green-500" />
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">WhatsApp</span>
          </a>

          {/* Hemen Ara Butonu */}
          <a 
            href={`tel:${siteConfig.phone}`}
            className="flex flex-col items-center justify-center py-3 gap-1 bg-[#c5a47e] text-[#0f172a] active:bg-[#b08d66] transition-colors"
          >
            <Phone size={22} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Hemen Ara</span>
          </a>

        </div>

      </body>
    </html>
  );
}