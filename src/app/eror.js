"use client"; // Hata sayfaları Client Side olmak zorunda
import { useEffect } from "react";
import { RefreshCcw } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Hatayı konsola yazdır (Geliştirici görsün)
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-playfair font-bold text-white mb-4">
        Beklenmedik Bir Durum Oluştu.
      </h2>
      <p className="text-gray-400 mb-8 max-w-md">
        Sistemlerimizde geçici bir teknik aksaklık yaşanıyor. Lütfen sayfayı yenilemeyi deneyin.
      </p>
      
      <button
        onClick={() => reset()}
        className="flex items-center gap-2 border border-[#c5a47e] text-[#c5a47e] px-6 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-[#c5a47e] hover:text-[#0f172a] transition-all"
      >
        <RefreshCcw size={18} /> Tekrar Dene
      </button>
    </div>
  );
}