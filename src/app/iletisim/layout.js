export const metadata = {
  title: "İletişim | Av. Osman Özkaya",
  description: "Mersin avukatı Av. Osman Özkaya ile iletişime geçin. Ücretsiz ilk danışma, hızlı yanıt. Ceza, aile ve ticaret hukuku.",
  alternates: {
    canonical: "https://osmanozkaya.av.tr/iletisim",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Boşanma davası ne kadar sürer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anlaşmalı boşanma davaları genellikle tek celsede (1-3 ay) sonuçlanır. Çekişmeli boşanma davaları ise mahkemenin iş yüküne ve delil durumuna göre 1.5 - 3 yıl arasında sürebilir."
      }
    },
    {
      "@type": "Question",
      "name": "Avukatlık ücreti neye göre belirlenir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Avukatlık Asgari Ücret Tarifesi taban alınarak; davanın türü, karmaşıklığı ve harcanacak mesaiye göre karşılıklı anlaşma ile belirlenir."
      }
    },
    {
      "@type": "Question",
      "name": "Dava açmadan önce danışmanlık almalı mıyım?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kesinlikle. Hukuki sürecin en başında yapılan stratejik hatalar, davanın kaybedilmesine neden olabilir. Önleyici hukuk hizmeti bu riskleri minimize eder."
      }
    },
    {
      "@type": "Question",
      "name": "Hangi şehirlere hizmet veriyorsunuz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Merkez ofisimiz Mersin'de olmakla birlikte, Türkiye'nin 81 ilindeki davalarınız için hukuki destek sağlamaktayız."
      }
    }
  ]
};

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
