import { Scale, Linkedin, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-gray-400 pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* MARKA ALANI */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="text-[#c5a47e]">
                <Scale size={32} strokeWidth={1.5} />
              </div>
              <div>
                <span className="block text-xl font-playfair font-bold text-white uppercase tracking-wider">{siteConfig.name}</span>
                <span className="text-[10px] text-[#c5a47e] uppercase tracking-[0.2em]">Hukuk Bürosu</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-8 text-gray-400">
              {siteConfig.description} Hukukun üstünlüğü ilkesiyle, müvekkillerimize şeffaf ve sonuç odaklı hizmet sunuyoruz.
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.social.linkedin} className="w-10 h-10 border border-gray-700 flex items-center justify-center rounded-sm hover:bg-[#c5a47e] hover:border-[#c5a47e] hover:text-[#0f172a] transition-all"><Linkedin size={18} /></a>
              <a href={siteConfig.social.twitter} className="w-10 h-10 border border-gray-700 flex items-center justify-center rounded-sm hover:bg-[#c5a47e] hover:border-[#c5a47e] hover:text-[#0f172a] transition-all"><Twitter size={18} /></a>
              <a href={siteConfig.social.instagram} className="w-10 h-10 border border-gray-700 flex items-center justify-center rounded-sm hover:bg-[#c5a47e] hover:border-[#c5a47e] hover:text-[#0f172a] transition-all"><Instagram size={18} /></a>
            </div>
          </div>

          {/* HIZLI MENÜ */}
          <div>
            <h4 className="text-white font-playfair font-bold text-lg mb-8 relative inline-block">
              Hızlı Erişim
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#c5a47e]"></span>
            </h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-[#c5a47e] transition-colors flex items-center gap-2">Ana Sayfa</Link></li>
              <li><Link href="/hakkimda" className="hover:text-[#c5a47e] transition-colors flex items-center gap-2">Hakkımızda</Link></li>
              <li><Link href="/uzmanliklar" className="hover:text-[#c5a47e] transition-colors flex items-center gap-2">Faaliyet Alanları</Link></li>
              <li><Link href="/iletisim" className="hover:text-[#c5a47e] transition-colors flex items-center gap-2">İletişim</Link></li>
            </ul>
          </div>

          {/* ÇALIŞMA ALANLARI */}
          <div>
            <h4 className="text-white font-playfair font-bold text-lg mb-8 relative inline-block">
              Faaliyet Alanları
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#c5a47e]"></span>
            </h4>
            <ul className="space-y-4 text-sm">
              <li>Ceza Hukuku</li>
              <li>Aile ve Boşanma</li>
              <li>Şirketler Hukuku</li>
              <li>Gayrimenkul Hukuku</li>
              <li>İcra ve İflas</li>
            </ul>
          </div>

          {/* İLETİŞİM */}
          <div>
            <h4 className="text-white font-playfair font-bold text-lg mb-8 relative inline-block">
              Bize Ulaşın
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#c5a47e]"></span>
            </h4>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-4">
                <MapPin className="text-[#c5a47e] shrink-0" size={20} />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-[#c5a47e] shrink-0" size={20} />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-[#c5a47e] shrink-0" size={20} />
                <span>{siteConfig.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ALT ÇİZGİ */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {currentYear} {siteConfig.name}. Tüm hakları saklıdır. Designed by OCS Creative </p>
          <div className="flex gap-6">
            <span>Gizlilik Politikası</span>
            <span>Kullanım Şartları</span>
          </div>
        </div>

      </div>
    </footer>
  );
}