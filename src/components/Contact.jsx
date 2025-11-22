// src/components/Contact.jsx
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { siteConfig } from "@/siteConfig"; // Verileri buradan çekiyor

export default function Contact() {
  return (
    <section className="py-24 bg-slate-50" id="iletisim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            İletişime Geçin
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Hukuki problemleriniz için ücretsiz ön görüşme talep edebilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">İletişim Bilgileri</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-700">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Telefon</p>
                    <p className="text-lg font-semibold text-slate-900">{siteConfig.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-700">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">E-Posta</p>
                    <p className="text-lg font-semibold text-slate-900">{siteConfig.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-700">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Ofis Adresi</p>
                    <p className="text-lg font-semibold text-slate-900">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form aynı kalıyor */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Mesaj Gönderin</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Adınız Soyadınız</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none transition-all" placeholder="İsim Soyisim" />
              </div>
              <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Telefon</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none transition-all" placeholder="05XX..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Mesajınız</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none transition-all"></textarea>
              </div>
              <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-blue-800 transition-all flex items-center justify-center gap-2">
                Mesajı Gönder <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}