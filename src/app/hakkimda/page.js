// src/app/hakkimda/page.js
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function HakkimdaPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar />
      {/* Navbar üstte sabit olduğu için içerik kaybolmasın diye üstten biraz boşluk (pt-20) bırakıyoruz */}
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  );
}