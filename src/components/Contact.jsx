"use client";
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";// Veya "@/data/siteConfig" (Dosyan neredeyse)
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(""); // idle, loading, success, error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    const currentDate = new Date().toLocaleString("tr-TR"); // Tarihi otomatik alıyoruz

    // Google Sheet'teki sütun isimleriyle BİREBİR aynı olmalı
    const data = {
      Tarih: currentDate,
      Isim: formData.get("name"),
      Telefon: formData.get("phone"),
      Mesaj: formData.get("message")
    };

    try {
      const response = await fetch(siteConfig.sheetDbUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: data }),
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset(); // Formu temizle
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

  return (
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
          
          {/* SOL TARAF - BİLGİLER */}
          <div className="space-y-6">
            {/* Telefon */}
            <div className="bg-[#1e293b] p-8 border border-gray-800 flex items-center gap-6 group hover:border-[#c5a47e] transition-colors">
              <div className="w-12 h-12 bg-[#0f172a] text-[#c5a47e] flex items-center justify-center rounded-sm">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-white font-playfair font-bold">Telefon</h3>
                <p className="text-gray-400 text-sm">{siteConfig.phone}</p>
              </div>
            </div>
            {/* Mail */}
            <div className="bg-[#1e293b] p-8 border border-gray-800 flex items-center gap-6 group hover:border-[#c5a47e] transition-colors">
              <div className="w-12 h-12 bg-[#0f172a] text-[#c5a47e] flex items-center justify-center rounded-sm">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-white font-playfair font-bold">E-Posta</h3>
                <p className="text-gray-400 text-sm">{siteConfig.email}</p>
              </div>
            </div>
            {/* Adres */}
            <div className="bg-[#1e293b] p-8 border border-gray-800 flex items-center gap-6 group hover:border-[#c5a47e] transition-colors">
              <div className="w-12 h-12 bg-[#0f172a] text-[#c5a47e] flex items-center justify-center rounded-sm">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-white font-playfair font-bold">Ofis Adresi</h3>
                <p className="text-gray-400 text-sm">{siteConfig.address}</p>
              </div>
            </div>
          </div>

          {/* SAĞ TARAF - GOOGLE SHEET FORMU */}
          <div className="bg-[#1e293b] p-10 border border-gray-800 shadow-2xl relative">
            
            {status === "success" ? (
              <div className="absolute inset-0 bg-[#1e293b] z-10 flex flex-col items-center justify-center text-center p-8 animate-in fade-in">
                <CheckCircle size={64} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-playfair font-bold text-white">Başvurunuz Alındı!</h3>
                <p className="text-gray-400 mt-2">Bilgileriniz sistemimize kaydedildi. En kısa sürede dönüş yapacağız.</p>
                <button onClick={() => setStatus("")} className="mt-8 text-[#c5a47e] font-bold uppercase text-xs tracking-widest underline hover:text-white">
                  Yeni Form Gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Ad Soyad</label>
                  <input type="text" name="name" required className="w-full bg-[#0f172a] border border-gray-700 text-white p-4 outline-none focus:border-[#c5a47e] transition-colors" placeholder="Adınız Soyadınız" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Telefon</label>
                  <input type="tel" name="phone" required className="w-full bg-[#0f172a] border border-gray-700 text-white p-4 outline-none focus:border-[#c5a47e] transition-colors" placeholder="05XX XXX XX XX" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Konu</label>
                  <textarea name="message" required rows="4" className="w-full bg-[#0f172a] border border-gray-700 text-white p-4 outline-none focus:border-[#c5a47e] transition-colors" placeholder="Hukuki sorununuzdan kısaca bahsedin..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full bg-[#c5a47e] text-[#0f172a] font-bold py-4 uppercase tracking-widest text-sm hover:bg-white transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> Gönderiliyor...
                    </>
                  ) : (
                    "Randevu Talep Et"
                  )}
                </button>
                
                {status === "error" && (
                  <p className="text-red-500 text-sm text-center font-bold">Bir hata oluştu. Lütfen WhatsApp'tan yazın.</p>
                )}
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}