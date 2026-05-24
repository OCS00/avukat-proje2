export const metadata = {
  title: "Uzmanlık Alanları | Av. Osman Özkaya",
  description: "Mersin'de ceza, aile, ticaret ve bilişim hukuku alanlarında uzman avukat. Av. Osman Özkaya ile hukuki sürecinizi başlatın.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Dava açmadan önce danışmanlık almalı mıyım?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kesinlikle. Önleyici hukuk hizmeti, ileride doğabilecek büyük maliyetlerin ve hak kayıplarının önüne geçer. Stratejiyi baştan kurmak başarı şansını önemli ölçüde artırır."
      }
    },
    {
      "@type": "Question",
      "name": "Vekalet verme işlemi nasıl yapılır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Notere giderek avukatlık bilgilerimizle vekaletname çıkarabilirsiniz. Yurt dışındaysanız konsolosluklar aracılığıyla bu işlemi gerçekleştirebilirsiniz."
      }
    },
    {
      "@type": "Question",
      "name": "Dava masrafları ne kadar tutar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Masraflar davanın türüne, talep edilen tutara ve dosyanın karmaşıklığına göre değişir. Şeffaflık ilkemiz gereği, süreç başlamadan tüm kalemleri size yazılı olarak sunuyoruz."
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
