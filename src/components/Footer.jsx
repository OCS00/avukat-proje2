// src/components/Footer.jsx
import { Scale, Linkedin, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/siteConfig"; // Verileri buradan çekiyor

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Marka */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white p-1.5 rounded-md text-slate-900">
                <Scale size={20} />
              </div>
              <span className="text-xl font-bold text-white">{siteConfig.name}</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.social.linkedin} className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href={siteConfig.social.twitter} className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href={siteConfig.social.instagram} className="hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Linkler */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Hızlı Erişim</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-white">Ana Sayfa</Link></li>
              <li><Link href="/hakkimda" className="hover:text-white">Hakkımda</Link></li>
              <li><Link href="/uzmanliklar" className="hover:text-white">Uzmanlıklar</Link></li>
              <li><Link href="/iletisim" className="hover:text-white">İletişim</Link></li>
            </ul>
          </div>

          {/* Çalışma Alanları */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Alanlar</h4>
            <ul className="space-y-3">
              <li>Ceza Hukuku</li>
              <li>Aile ve Boşanma</li>
              <li>Ticaret Hukuku</li>
              <li>Gayrimenkul</li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Bize Ulaşın</h4>
            <ul className="space-y-4">
              <li className="flex flex-col gap-1">
                <span className="text-white font-medium">Adres:</span>
                <span className="text-sm">{siteConfig.address}</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white font-medium">Tel:</span>
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white font-medium">Email:</span>
                <span>{siteConfig.email}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {currentYear} {siteConfig.name}. Tüm hakları saklıdır.</p>
        </div>

      </div>
    </footer>
  );
}