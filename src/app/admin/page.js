'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, ArrowRight, Scale } from 'lucide-react';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    if (data.success) {
      router.push('/admin/dashboard');
    } else {
      setError('Hatalı şifre.');
      setPassword('');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#03060f] flex items-center justify-center relative overflow-hidden selection:bg-[#c5a47e] selection:text-[#03060f]">

      {/* ── ARKA PLAN ─────────────────────────────────────────────── */}
      {/* Ana degrade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(197,164,126,0.12),transparent)]" />
      {/* Sol alt mavi glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-950/40 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3" />
      {/* Sağ üst altın glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c5a47e]/[0.07] rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
      {/* Noise texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.04]" />

      {/* Dev dekoratif yazı */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-playfair font-black text-white/[0.018] pointer-events-none select-none whitespace-nowrap tracking-[-0.02em]"
        style={{ fontSize: 'clamp(120px, 22vw, 320px)' }}
      >
        LEX
      </div>

      {/* Yatay ince çizgiler (grid hissi) */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(255,255,255,0.5) 80px, rgba(255,255,255,0.5) 81px)',
        }}
      />

      {/* ── KART ──────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-md mx-4">

        {/* Üstteki ince altın çizgi */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c5a47e]/60 to-transparent mb-8" />

        {/* Logo + İsim */}
        <div className="text-center mb-10">
          <div className="relative inline-flex items-center justify-center mb-6">
            {/* Dış halka */}
            <div className="w-20 h-20 rounded-full border border-[#c5a47e]/20 flex items-center justify-center">
              {/* İç halka */}
              <div className="w-14 h-14 rounded-full border border-[#c5a47e]/40 bg-[#c5a47e]/5 flex items-center justify-center shadow-[0_0_40px_rgba(197,164,126,0.15)]">
                <Scale className="text-[#c5a47e]" size={24} strokeWidth={1.5} />
              </div>
            </div>
            {/* Glow efekti */}
            <div className="absolute inset-0 rounded-full bg-[#c5a47e]/10 blur-xl" />
          </div>

          <h1 className="text-3xl font-playfair font-bold text-white tracking-tight mb-1">
            Av. Osman Özkaya
          </h1>
          <p className="text-gray-600 text-xs uppercase tracking-[0.35em] font-medium">
            Hukuk Ofisi · İçerik Paneli
          </p>
        </div>

        {/* Form Kartı */}
        <div className="relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 backdrop-blur-md shadow-[0_0_80px_rgba(0,0,0,0.6)]">
          {/* Kart sol kenarlık vurgusu */}
          <div className="absolute left-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-[#c5a47e]/40 to-transparent rounded-full" />

          <form onSubmit={handleLogin} className="space-y-5">

            {/* Hata */}
            {error && (
              <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                <div className="w-1 h-1 bg-red-400 rounded-full flex-shrink-0" />
                <p className="text-red-400 text-xs font-medium">{error}</p>
              </div>
            )}

            {/* Şifre */}
            <div>
              <label className="block text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold mb-3">
                Güvenlik Şifresi
              </label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  autoFocus
                  className="w-full bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.14] focus:border-[#c5a47e]/50 rounded-xl px-5 py-4 text-white text-sm tracking-[0.15em] outline-none transition-all duration-200 placeholder:text-gray-700 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(p => !p)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-700 hover:text-gray-400 transition-colors"
                  tabIndex={-1}
                >
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || !password}
              className="relative w-full overflow-hidden flex items-center justify-center gap-3 bg-[#c5a47e] text-[#03060f] font-bold text-xs uppercase tracking-[0.2em] py-4 rounded-xl transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed group shadow-[0_4px_30px_rgba(197,164,126,0.25)] hover:shadow-[0_4px_40px_rgba(197,164,126,0.45)]"
            >
              {/* Hover beyaz overlay */}
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2.5">
                {loading ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-[#03060f]/30 border-t-[#03060f] rounded-full animate-spin" />
                    Giriş Yapılıyor...
                  </>
                ) : (
                  <>
                    Panele Giriş Yap
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
            </button>
          </form>
        </div>

        {/* Alt çizgi + not */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c5a47e]/20 to-transparent mt-8 mb-6" />
        <p className="text-center text-gray-700 text-[9px] uppercase tracking-[0.3em]">
          Yetkisiz erişim girişimleri kayıt altına alınır
        </p>
      </div>

    </div>
  );
}
