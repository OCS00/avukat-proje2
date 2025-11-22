// src/components/About.jsx
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/siteConfig"; // Verileri buradan çekiyor

export default function About() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden" id="hakkimda">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Sol Taraf */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/5] w-full bg-slate-200 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium text-lg">
                Fotoğraf Alanı
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-slate-200 rounded-2xl -z-10"></div>
            
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs">
              <p className="text-4xl font-bold text-slate-900 mb-1">{siteConfig.experience}</p>
              <p className="text-slate-600 text-sm font-medium uppercase tracking-wide">Yıllık Tecrübe</p>
            </div>
          </div>

          {/* Sağ Taraf */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              {siteConfig.bioTitle}
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {siteConfig.shortBio}
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-700" size={20} />
                <span className="text-slate-700 font-medium">Ulaşılabilir ve Şeffaf İletişim</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-700" size={20} />
                <span className="text-slate-700 font-medium">Stratejik Hukuki Planlama</span>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-8">
              <h4 className="text-xl font-bold text-slate-900">{siteConfig.name}</h4>
              <p className="text-slate-500">Kurucu Avukat</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}