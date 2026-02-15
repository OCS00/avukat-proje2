import Link from "next/link";
import { FileQuestion, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 relative overflow-hidden">
      
      {/* Arka Plan Deseni */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

      <div className="relative z-10 text-center max-w-lg mx-auto">
        
        {/* İkon */}
        <div className="w-24 h-24 bg-[#1e293b] rounded-full flex items-center justify-center mx-auto mb-8 border border-gray-800 shadow-[0_0_30px_rgba(197,164,126,0.1)]">
          <FileQuestion size={40} className="text-[#c5a47e]" />
        </div>

        {/* Başlık */}
        <h1 className="text-6xl md:text-8xl font-playfair font-bold text-white mb-4">404</h1>
        <h2 className="text-xl md:text-2xl font-light text-gray-300 mb-6">
          Aradığınız Dosya Bulunamadı.
        </h2>
        
        <p className="text-gray-400 mb-10 leading-relaxed">
          Ulaşmaya çalıştığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir. Hukuki bir çıkmaza girmeden ana sayfaya dönelim.
        </p>

        {/* Buton */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-[#c5a47e] text-[#0f172a] px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg"
        >
          <ArrowLeft size={18} /> Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}