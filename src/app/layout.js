import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import { siteConfig } from "@/data/siteConfig";
import { Phone, MessageCircle } from "lucide-react";

// 1. FONT OPTİMİZASYONU (Google'dan en hızlı şekilde çeker)
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap", // Sayfa açılınca yazı beklemez, hemen gelir
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: "swap",
});

// 2. PROFESYONEL SEO & METADATA (Google ve Sosyal Medya İçin)
export const metadata = {
  metadataBase: new URL("https://osmanozkaya.av.tr"), // Kendi domainin
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.title}`, // Örn: "İletişim | Av. Osman Özkaya"
  },
  description: siteConfig.description,
  keywords: ["Mersin Avukat", "Ceza Avukatı", "Boşanma Avukatı", "Ağır Ceza", "Osman Özkaya"],
  authors: [{ name: "Osman Özkaya" }],
  creator: "OCS Creative",
  publisher: "Av. Osman Özkaya",
  robots: {
    index: true,
    follow: true,
  },
  // WhatsApp ve LinkedIn'de paylaşınca çıkacak kartvizit
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "https://osmanozkaya.av.tr",
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // public klasörüne 1200x630px bir kapak resmi koyarsan efsane olur
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// 3. MOBİL CİHAZ AYARLARI (Zoom sorununu çözer)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Inputlara tıklayınca ekranın büyümesini engeller
  themeColor: "#0f172a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-[#0f172a] text-gray-300 antialiased selection:bg-[#c5a47e] selection:text-[#0f172a] overflow-x-hidden">
        
        {/* ÜST MENÜ (NAVBAR) */}
        <Navbar />

        {/* ANA İÇERİK (Flex yapısı footer'ı hep aşağı iter) */}
        <div className="flex flex-col min-h-screen">
          {children}
        </div>

        {/* ALT MENÜ (FOOTER) */}
        {/* Mobilde footer'ın en altı, yapışkan barın altında kalmasın diye padding-bottom ekledik (mb-20) */}
        <div className="mb-20 md:mb-0">
          <Footer />
        </div>
        
        {/* --- MASAÜSTÜ ÖZEL: YÜZEN WHATSAPP BUTONU --- */}
        <div className="hidden md:block">
           <WhatsAppBtn />
        </div>

        {/* --- MOBİL ÖZEL: PROFESYONEL ACTION BAR --- */}
        {/* iPhone Home Bar (Siyah Çizgi) ile çakışmaması için pb-6 ve safe-area mantığı */}
        <div className="fixed bottom-0 left-0 w-full z-50 md:hidden grid grid-cols-2 bg-[#0f172a]/95 backdrop-blur-lg border-t border-gray-800 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] pb-6 pt-3 px-2 gap-3">
          
          {/* WhatsApp Butonu */}
          <a 
            href="https://wa.me/905459320015" // Numaranı uluslararası formatta yaz
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-sm active:scale-95 transition-transform shadow-lg"
          >
            <MessageCircle size={20} className="text-white" fill="white" />
            <span className="text-xs font-bold uppercase tracking-wide">WhatsApp</span>
          </a>

          {/* Hemen Ara Butonu (Marka Rengi) */}
          <a 
            href={`tel:${siteConfig.phone}`}
            className="flex items-center justify-center gap-2 bg-[#c5a47e] text-[#0f172a] py-3 rounded-sm active:scale-95 transition-transform shadow-[0_0_15px_rgba(197,164,126,0.4)]"
          >
            <Phone size={20} className="text-[#0f172a]" fill="#0f172a" />
            <span className="text-xs font-bold uppercase tracking-wide">Hemen Ara</span>
          </a>

        </div>

      </body>
    </html>
  );
}