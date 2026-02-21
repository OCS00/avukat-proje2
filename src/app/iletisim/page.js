"use client";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact"; // Daha önce yazdığımız form
import Faq from "@/components/Faq"; // SSS
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import { siteConfig } from "@/data/siteConfig";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function IletisimPage() {
  return (
    <main className="bg-[#0f172a] min-h-screen text-gray-300">
     

      <div className="pt-32 pb-12 bg-[#0b1120] text-center">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4">İletişime Geçin</h1>
        <p className="text-gray-400">Sorularınız için bizimle her zaman irtibata geçebilirsiniz.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
           {/* Hızlı İletişim Kartları */}
           <div className="bg-[#1e293b] p-8 rounded-sm border border-gray-800 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#0f172a] rounded-full flex items-center justify-center text-[#c5a47e] mx-auto mb-4"><Phone/></div>
              <h3 className="text-white font-bold font-playfair text-xl mb-2">Telefon</h3>
              <p className="text-gray-400 text-sm mb-4">Hafta içi 09:00 - 18:00</p>
              <a href={`tel:${siteConfig.phone}`} className="text-[#c5a47e] font-bold hover:underline">{siteConfig.phone}</a>
           </div>

           <div className="bg-[#1e293b] p-8 rounded-sm border border-gray-800 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#0f172a] rounded-full flex items-center justify-center text-[#c5a47e] mx-auto mb-4"><Mail/></div>
              <h3 className="text-white font-bold font-playfair text-xl mb-2">E-Posta</h3>
              <p className="text-gray-400 text-sm mb-4">7/24 Mail Gönderebilirsiniz</p>
              <a href={`mailto:${siteConfig.email}`} className="text-[#c5a47e] font-bold hover:underline">{siteConfig.email}</a>
           </div>

           <div className="bg-[#1e293b] p-8 rounded-sm border border-gray-800 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#0f172a] rounded-full flex items-center justify-center text-[#c5a47e] mx-auto mb-4"><MapPin/></div>
              <h3 className="text-white font-bold font-playfair text-xl mb-2">Ofis</h3>
              <p className="text-gray-400 text-sm mb-4">Mersin Adliyesi Yanı</p>
              <span className="text-[#c5a47e] font-bold cursor-pointer hover:underline">Yol Tarifi Al</span>
           </div>
        </div>

        {/* Form Alanı */}
        <div className="mb-20">
           <Contact />
        </div>

        {/* SSS */}
        <Faq />
      </div>

      
    </main>
  );
}