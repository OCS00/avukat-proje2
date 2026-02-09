"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

// Özel Input Bileşeni (Floating Label Efektli)
function FloatingInput({ label, name, type = "text", required = true, isTextArea = false }) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = (e) => {
    setFocused(false);
    setHasValue(e.target.value.length > 0);
  };

  const wrapperClass = "relative w-full mb-6 group";
  const labelClass = `absolute left-4 transition-all duration-300 pointer-events-none text-gray-500
    ${focused || hasValue ? "-top-2.5 text-xs bg-[#1e293b] px-2 text-[#c5a47e] font-bold" : "top-4 text-sm"}`;
  
  const inputClass = `w-full bg-[#1e293b] border rounded-sm outline-none p-4 text-white transition-all duration-300
    ${focused ? "border-[#c5a47e] shadow-[0_0_15px_rgba(197,164,126,0.1)]" : "border-gray-700 hover:border-gray-500"}`;

  return (
    <div className={wrapperClass}>
      <label className={labelClass}>{label}</label>
      {isTextArea ? (
        <textarea name={name} required={required} rows="4" className={inputClass} onFocus={handleFocus} onBlur={handleBlur} />
      ) : (
        <input type={type} name={name} required={required} className={inputClass} onFocus={handleFocus} onBlur={handleBlur} />
      )}
    </div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.target);
    const data = {
      Tarih: new Date().toLocaleString("tr-TR"),
      Isim: formData.get("name"),
      Telefon: formData.get("phone"),
      Konu: formData.get("subject"),
      Mesaj: formData.get("message")
    };

    try {
      await fetch(siteConfig.sheetDbUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });
      // Gerçekçi bir gecikme ekleyelim ki animasyon görünsün
      setTimeout(() => setStatus("success"), 1000);
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <section className="py-24 bg-[#0b1120] relative" id="iletisim">
      {/* Arka Plan Harita Deseni (Opsiyonel) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* SOL TARAF: İletişim Bilgileri */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <span className="text-[#c5a47e] font-bold tracking-widest uppercase text-xs mb-4 block">İletişim</span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
                Sorularınız İçin <br/> Bizimle Görüşün.
              </h2>
              <p className="text-gray-400 leading-relaxed font-light text-lg">
                Hukuki süreçlerinizde zaman kaybetmeyin. Aşağıdaki formu doldurun veya doğrudan ofisimizle iletişime geçin. İlk 24 saat içinde dönüş yapıyoruz.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Phone />, title: "Telefon", val: siteConfig.phone, link: `tel:${siteConfig.phone}` },
                { icon: <Mail />, title: "E-Posta", val: siteConfig.email, link: `mailto:${siteConfig.email}` },
                { icon: <MapPin />, title: "Ofis", val: siteConfig.address, link: "#" }
              ].map((item, idx) => (
                <a key={idx} href={item.link} className="flex items-center gap-6 group bg-[#1e293b] p-6 rounded-sm border border-gray-800 hover:border-[#c5a47e] transition-all duration-300">
                  <div className="w-12 h-12 bg-[#0f172a] text-[#c5a47e] flex items-center justify-center rounded-full group-hover:bg-[#c5a47e] group-hover:text-[#0f172a] transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-playfair font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300">{item.val}</p>
                  </div>
                  <ArrowRight className="ml-auto text-gray-600 group-hover:text-[#c5a47e] transform group-hover:translate-x-2 transition-all" size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* SAĞ TARAF: Gelişmiş Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1e293b]/80 backdrop-blur-xl p-8 md:p-12 border border-gray-700 rounded-sm shadow-2xl relative overflow-hidden"
          >
            {/* Form Üstü Altın Çizgi */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c5a47e] to-transparent"></div>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-[400px]"
                >
                  <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 ring-2 ring-green-500/20 animate-pulse">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-playfair font-bold text-white mb-2">Başvurunuz Alındı!</h3>
                  <p className="text-gray-400 max-w-xs mx-auto">
                    Bilgileriniz tarafımıza güvenle ulaştı. En kısa sürede sizinle iletişime geçeceğiz.
                  </p>
                  <button onClick={() => setStatus("idle")} className="mt-8 text-[#c5a47e] font-bold text-sm hover:text-white transition-colors underline decoration-2 underline-offset-4">
                    Yeni Form Gönder
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                >
                  <h3 className="text-2xl font-playfair font-bold text-white mb-8">Randevu Formu</h3>
                  
                  <FloatingInput label="Ad Soyad" name="name" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FloatingInput label="Telefon" name="phone" type="tel" />
                    <div className="relative w-full mb-6 group">
                      <select name="subject" className="w-full bg-[#1e293b] border border-gray-700 rounded-sm outline-none p-4 text-white appearance-none hover:border-gray-500 focus:border-[#c5a47e] transition-all cursor-pointer">
                        <option value="" disabled selected>Hukuki Konu Seçiniz</option>
                        <option value="ceza">Ceza Hukuku</option>
                        <option value="aile">Aile ve Boşanma</option>
                        <option value="ticaret">Ticaret Hukuku</option>
                        <option value="diger">Diğer</option>
                      </select>
                    </div>
                  </div>
                  <FloatingInput label="Mesajınız" name="message" isTextArea={true} />

                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="w-full bg-[#c5a47e] text-[#0f172a] font-bold py-4 px-8 rounded-sm uppercase tracking-widest text-sm hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed mt-4 shadow-[0_0_20px_rgba(197,164,126,0.3)] hover:shadow-[0_0_30px_rgba(197,164,126,0.5)]"
                  >
                    {status === "loading" ? (
                      <> <Loader2 size={20} className="animate-spin" /> Gönderiliyor... </>
                    ) : (
                      <> Randevu Oluştur <Send size={18} className="group-hover:translate-x-1 transition-transform" /> </>
                    )}
                  </button>
                  
                  {status === "error" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-sm text-red-400 text-sm text-center">
                      Bir hata oluştu. Lütfen WhatsApp üzerinden bize ulaşın.
                    </motion.div>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}