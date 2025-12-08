import { Inter, Playfair_Display } from "next/font/google"; // Playfair ekledik
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" }); // Değişkeni tanımladık

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-slate-50`}>
        {children}
      </body>
    </html>
  );
}