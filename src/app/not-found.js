// src/app/not-found.js
import Link from "next/link";
import { Scale, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center text-center px-4">
      
      <div className="text-[#c5a47e] mb-6 animate-pulse">
        <Scale size={64} />
      </div>
      
      <h1 className="text-8xl font-playfair font-bold text-white mb-4">404</h1>
      
      <h2 className="text-2xl font-playfair text-gray-300 mb-8">
        Aradığınız Sayfa Bulunamadı
      </h2>
      
      <p className="text-gray-500 max-w-md mb-10 leading-relaxed">
        Görünüşe göre hukuki bir boşluğa düştünüz. Aradığınız sayfa taşınmış veya silinmiş olabilir.
      </p>
      
      <Link 
        href="/" 
        className="flex items-center gap-2 bg-[#c5a47e] text-[#0f172a] px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white transition-all"
      >
        <ArrowLeft size={20} />
        Ana Sayfaya Dön
      </Link>

    </div>
  );
}