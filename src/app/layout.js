import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteLayout from "@/components/SiteLayout"; // Yeni korumamızı çağırdık
import { siteConfig } from "@/data/siteConfig";

// FONT AYARLARI
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: "swap",
});

// METADATA (SEO BİLGİLERİ - BURASI BOZULMAZ)
export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0f172a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-[#0f172a] text-gray-300 antialiased selection:bg-[#c5a47e] selection:text-[#0f172a] overflow-x-hidden">
        {/* Tüm içeriği SiteLayout'a emanet ediyoruz */}
        <SiteLayout>
          {children}
        </SiteLayout>
      </body>
    </html>
  );
}