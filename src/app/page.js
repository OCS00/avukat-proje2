import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact"; // Yeni
import Footer from "@/components/Footer";   // Yeni
import WhatsAppBtn from "@/components/WhatsAppBtn";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Faq />
      <Contact />
      <Footer />
      <WhatsAppBtn />
    </main>
  );
}