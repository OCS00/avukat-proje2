// src/data/content.js
import { FileSearch, Scale, CheckCircle2 } from "lucide-react";

// 1. SIKÇA SORULAN SORULAR (FAQ)
export const faqs = [
  {
    question: "Dava açmak için süreç nasıl işliyor?",
    answer: "İlk olarak ofisimizde veya online olarak bir ön görüşme yapıyoruz..."
  },
  {
    question: "Avukatlık ücreti neye göre belirleniyor?",
    answer: "Ücretler, davanın türüne, karmaşıklığına göre Baro tarifesine uygun belirlenir."
  },
  {
    question: "Boşanma davaları ortalama ne kadar sürer?",
    answer: "Anlaşmalı boşanmalar 1-2 ay, çekişmeli olanlar ise 1.5 - 3 yıl sürebilir."
  },
  {
    question: "Hangi şehirlere hizmet veriyorsunuz?",
    answer: "Merkezimiz İstanbul'dur ancak tüm Türkiye genelinde hizmet veriyoruz."
  }
];

// 2. MÜVEKKİL YORUMLARI (TESTIMONIALS)
export const reviews = [
  {
    name: "Mehmet Y.",
    davaturu: "Aile Hukuku",
    text: "Boşanma sürecimde yaşadığım zorlukları profesyonel yaklaşımlarıyla çok hızlı çözdüler."
  },
  {
    name: "Ayşe K.",
    davaturu: "Ticaret Hukuku",
    text: "Şirketimizin ticari davalarında gösterdikleri titizlik için teşekkürler."
  },
  {
    name: "Ali Rıza B.",
    davaturu: "Ceza Hukuku",
    text: "Sürecin başından sonuna kadar yanımdaydılar. Güçlü savunma için minnettarım."
  }
];

// 3. EKİBİMİZ (TEAM)
export const team = [
  {
    name: "Av. Ahmet Yılmaz",
    title: "Kurucu Ortak",
    image: "/avukat.jpg", 
    bio: "Ceza hukuku ve Ticaret hukuku alanında 15 yıllık deneyim."
  },
  {
    name: "Av. Zeynep Demir",
    title: "Kıdemli Avukat",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    bio: "Aile hukuku ve Boşanma davalarında uzmanlaşmıştır."
  },
  {
    name: "Stj. Av. Caner Erkin",
    title: "Yasal Stajyer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    bio: "İcra ve İflas hukuku departmanında görev almaktadır."
  }
];

// 4. ÇALIŞMA SÜRECİ (PROCESS)
export const processSteps = [
  {
    title: "1. Ön Görüşme ve Analiz",
    desc: "Hukuki durumunuzun tespiti ve yol haritasının belirlenmesi.",
    icon: <FileSearch size={32} />
  },
  {
    title: "2. Strateji ve Dava Süreci",
    desc: "Belirlenen strateji doğrultusunda davanın açılması ve takibi.",
    icon: <Scale size={32} />
  },
  {
    title: "3. Sonuç ve İnfaz",
    desc: "Kararın kesinleşmesi ve hakların tahsil edilmesi.",
    icon: <CheckCircle2 size={32} />
  }
];