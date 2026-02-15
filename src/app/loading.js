export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0f172a]">
      {/* Dış Çember (Sabit) */}
      <div className="absolute w-16 h-16 border-4 border-[#1e293b] rounded-full"></div>
      
      {/* İç Çember (Dönen - Altın Rengi) */}
      <div className="w-16 h-16 border-4 border-[#c5a47e] border-t-transparent rounded-full animate-spin"></div>
      
      {/* Marka İmzası */}
      <div className="absolute mt-32 text-[#c5a47e] text-xs font-bold uppercase tracking-[0.3em] animate-pulse">
        Yükleniyor
      </div>
    </div>
  );
}