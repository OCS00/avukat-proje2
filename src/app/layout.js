// src/app/layout.js
import { Plus_Jakarta_Sans, DM_Serif_Display } from "next/font/google"; // YENİ FONTLAR
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";

// GÖVDE METİNLERİ İÇİN (Çok modern ve okunaklı)
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-jakarta",
  display: "swap",
});

// BAŞLIKLAR İÇİN (Daha kalın, tırnaklı ve otoriter)
const dmSerif = DM_Serif_Display({ 
  weight: "400",
  subsets: ["latin"], 
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata = {
  // ... (Senin mevcut metadata kodların aynen kalsın)
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${jakarta.variable} ${dmSerif.variable} font-sans bg-[#0f172a] text-gray-300 antialiased selection:bg-[#c5a47e] selection:text-[#0f172a]`}>
        
        <ScrollProgress />
        
        <div className="flex flex-col min-h-screen">
          {children}
        </div>

        <ScrollToTop />
        
      </body>
    </html>
  );
}