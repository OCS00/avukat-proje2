"use client";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { siteConfig } from "@/siteConfig";
import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setResult("Gonderiliyor...");
    const formData = new FormData(e.target);
    formData.append("access_key", siteConfig.formAccessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Basarili");
      e.target.reset();
    } else {
      setResult("Hata");
    }
  }

  return (
    // Arka plan yine Koyu Lacivert
    <section className="py-24 bg-[#0f172a] border-t border-gray-900" id="iletisim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-[#c5a47e] font-bold tracking-widest uppercase text-xs mb-2 block">İletişim</span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Bizimle İletişime Geçin
          </h2>
          <div className="w-24 h-1 bg-[#c5a47e] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* BİLGİ KUTULARI (Dark) */}
          <div className="space-y-6">
            <div className="bg-[#1e293b] p-10 border border-gray-800 shadow-lg hover:border-[#c5a47e] transition-colors group">
              <div className="w-12 h-12 bg-[#0f172a] text-[#c5a47e] flex items-center justify-center mb-6 border border-gray-800 group-hover:bg-[#c5a47e] group-hover:text-[#0f172a] transition-colors">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-playfair font-bold text-white mb-2">Telefon</h3>
              <p className="text-gray-400">{siteConfig.phone}</p>
            </div>

            <div className="bg-[#1e293b] p-10 border border-gray-800 shadow-lg hover:border-[#c5a47e] transition-colors group">
              <div className="w-12 h-12 bg-[#0f172a] text-[#c5a47e] flex items-center justify-center mb-6 border border-gray-800 group-hover:bg-[#c5a47e] group-hover:text-[#0f172a] transition-colors">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-playfair font-bold text-white mb-2">E-Posta</h3>
              <p className="text-gray-400">{siteConfig.email}</p>
            </div>

            <div className="bg-[#1e293b] p-10 border border-gray-800 shadow-lg hover:border-[#c5a47e] transition-colors group">
              <div className="w-12 h-12 bg-[#0f172a] text-[#c5a47e] flex items-center justify-center mb-6 border border-gray-800 group-hover:bg-[#c5a47e] group-hover:text-[#0f172a] transition-colors">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-playfair font-bold text-white mb-2">Ofis Adresi</h3>
              <p className="text-gray-400">{siteConfig.address}</p>
            </div>
          </div>

          {/* FORM (Dark) */}
          <div className="bg-[#1e293b] p-10 lg:p-12 border border-gray-800 shadow-2xl relative">
            {result === "Basarili" ? (
              <div className="absolute inset-0 bg-[#1e293b] flex flex-col items-center justify-center text-center p-8">
                <CheckCircle size={64} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-playfair font-bold text-white">Mesajınız İletildi</h3>
                <p className="text-gray-400 mt-2">En kısa sürede size dönüş yapacağız.</p>
                <button onClick={() => setResult("")} className="mt-6 text-[#c5a47e] font-bold uppercase text-sm tracking-widest underline">Yeni Mesaj</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-playfair font-bold text-white mb-6">Randevu Talep Formu</h3>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Ad Soyad</label>
                  {/* Inputlar koyu zeminli oldu */}
                  <input type="text" name="name" required className="w-full bg-[#0f172a] border border-gray-700 text-white p-4 outline-none focus:border-[#c5a47e] transition-colors placeholder-gray-600" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Telefon</label>
                  <input type="tel" name="phone" required className="w-full bg-[#0f172a] border border-gray-700 text-white p-4 outline-none focus:border-[#c5a47e] transition-colors placeholder-gray-600" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Konu / Mesaj</label>
                  <textarea name="message" rows="4" required className="w-full bg-[#0f172a] border border-gray-700 text-white p-4 outline-none focus:border-[#c5a47e] transition-colors placeholder-gray-600"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={result === "Gonderiliyor..."}
                  className="w-full bg-[#c5a47e] text-[#0f172a] font-bold py-4 uppercase tracking-widest text-sm hover:bg-white transition-all disabled:opacity-70 shadow-lg"
                >
                  {result === "Gonderiliyor..." ? "Gönderiliyor..." : "Mesajı Gönder"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}