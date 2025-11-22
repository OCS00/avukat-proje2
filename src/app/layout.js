import { Inter } from "next/font/google";
import "./globals.css"; // <--- İŞTE SİHİRLİ KABLO BU!

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Avukat Web Sitesi",
  description: "Profesyonel Hukuki Danışmanlık",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}