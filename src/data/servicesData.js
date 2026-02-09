import { Gavel, HeartHandshake, Building2, Globe, Lock, FileWarning } from "lucide-react";

export const servicesData = [
  {
    id: 1,
    title: "Ceza Hukuku",
    slug: "ceza-hukuku",
    icon: <Gavel size={32} />,
    shortDesc: "Soruşturma ve kovuşturma aşamalarında özgürlüğünüzü koruyan agresif ve stratejik savunma.",
    fullDesc: "Ceza yargılaması, telafisi imkansız zararlar doğurabilecek en hassas hukuk dalıdır. Sadece kanun maddelerini bilmek yetmez; savcılık aşamasından Yargıtay sürecine kadar her adımı satranç hamlesi gibi planlamak gerekir. Osman Özkaya olarak, müvekkilin sadece 'avukatı' değil, özgürlüğünün teminatı olarak hareket ederim.",
    heroImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000",
    features: [
      "Ağır Ceza Davaları ve Duruşma Temsili",
      "Gözaltı ve Tutuklamaya İtiraz",
      "İnfaz Hukuku ve Denetimli Serbestlik",
      "Bilişim ve Siber Suçlar",
      "Ekonomik Suçlar ve Yolsuzluk İddiaları"
    ],
    process: [
      { step: "01", title: "Dosya Analizi", desc: "İddianame ve delillerin didik didik incelenmesi." },
      { step: "02", title: "Strateji", desc: "Savunma kurgusunun oluşturulması ve lehe delil toplama." },
      { step: "03", title: "Savunma", desc: "Mahkemede etkin, sözlü ve yazılı savunma." }
    ],
    faq: [
      { q: "Tutuksuz yargılanma sağlanabilir mi?", a: "Tutuklama bir tedbirdir, ceza değildir. Doğru hukuki argümanlar ve 'kaçma şüphesi olmadığına' dair delillerle tutuksuz yargılama için mücadele ediyoruz." },
      { q: "Ceza alırsam sicilime işler mi?", a: "Hükmün açıklanmasının geri bırakılması (HAGB) veya erteleme gibi kurumlar işletilerek sicilin temiz kalması mümkündür." }
    ]
  },
  {
    id: 2,
    title: "Aile ve Boşanma Hukuku",
    slug: "aile-hukuku",
    icon: <HeartHandshake size={32} />,
    shortDesc: "Çekişmeli boşanma, velayet ve mal paylaşımı davalarında haklarınızı güvence altına alın.",
    fullDesc: "Boşanma süreci sadece hukuki değil, psikolojik bir savaştır. Bu süreçte duygusal kararlar vermek, gelecekte maddi ve manevi büyük kayıplara yol açabilir. Biz, süreci en az hasarla atlatmanız ve hak ettiğiniz geleceği kurmanız için 'kalkan' görevi görüyoruz.",
    heroImage: "https://images.unsplash.com/photo-1632156825368-218f26019b84?q=80&w=2000",
    features: [
      "Çekişmeli ve Anlaşmalı Boşanma",
      "Mal Rejimi Tasfiyesi ve Ziynet Alacağı",
      "Velayet ve Nafaka Uyuşmazlıkları",
      "Uzaklaştırma Kararları (6284 Sayılı Kanun)",
      "Babalık Davaları ve Soybağı"
    ],
    process: [
      { step: "01", title: "Ön Görüşme", desc: "Taleplerin dinlenmesi ve yol haritasının çizilmesi." },
      { step: "02", title: "Protokol/Dava", desc: "Anlaşma protokolünün veya dava dilekçesinin hazırlanması." },
      { step: "03", title: "Sonuç", desc: "Boşanma, tazminat ve velayetin karara bağlanması." }
    ],
    faq: [
      { q: "Çekişmeli boşanma ne kadar sürer?", a: "Tarafların iddialarına ve mahkemenin yoğunluğuna göre değişmekle birlikte ortalama 1.5 - 2 yıl sürebilir." },
      { q: "WhatsApp kayıtları delil olur mu?", a: "Yargıtay kararlarına göre, hukuka uygun elde edilmiş ve oynanmamış dijital kayıtlar boşanma davalarında delil olarak kullanılabilir." }
    ]
  },
  {
    id: 3,
    title: "Ticaret ve Şirketler Hukuku",
    slug: "ticaret-hukuku",
    icon: <Building2 size={32} />,
    shortDesc: "Şirketler için risk analizi, sözleşme yönetimi ve ticari dava takibi.",
    fullDesc: "Ticari hayat hata kabul etmez. Bir sözleşmedeki eksik bir madde, şirketinizi iflasa sürükleyebilir. Osman Özkaya Hukuk Ofisi olarak, şirketlere sadece dava açıldığında değil, dava açılmaması için 'önleyici hukuk' hizmeti sunuyoruz.",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000",
    features: [
      "Şirket Kuruluşu ve Esas Sözleşme",
      "Ticari Alacak Davaları ve İcra",
      "Haksız Rekabet ve Marka Koruma",
      "İş Hukuku ve Personel Sözleşmeleri",
      "Birleşme ve Devralmalar"
    ],
    process: [
      { step: "01", title: "Risk Analizi", desc: "Şirketin hukuki röntgeninin çekilmesi." },
      { step: "02", title: "Danışmanlık", desc: "Sözleşme revizyonları ve hukuki altyapı." },
      { step: "03", title: "Koruma", desc: "Ticari davalarda ve icra süreçlerinde aktif temsil." }
    ],
    faq: [
      { q: "Aylık danışmanlık hizmeti veriyor musunuz?", a: "Evet, kurumsal müvekkillerimize 7/24 erişilebilir olduğumuz aylık danışmanlık paketleri sunuyoruz." },
      { q: "Alacaklarımı nasıl tahsil ederim?", a: "İcra takibi ve ihtiyati haciz gibi hızlı yollarla, borçlunun malvarlığına bloke koyarak tahsilat sağlıyoruz." }
    ]
  },
  {
    id: 4,
    title: "Bilişim Hukuku",
    slug: "bilisim-hukuku",
    icon: <Globe size={32} />,
    shortDesc: "Siber suçlar, internetten içerik kaldırma ve KVKK uyum süreçleri.",
    fullDesc: "Dijital dünyada itibarınız saniyeler içinde zedelenebilir. İnternetten haber/içerik kaldırma, sosyal medya hakaretleri ve siber dolandırıcılık konularında teknik bilgimiz ve hukuki tecrübemizle yanınızdayız.",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000",
    features: [
      "Erişim Engelleme ve İçerik Kaldırma",
      "Kripto Para Dolandırıcılığı",
      "KVKK Danışmanlığı",
      "Yasadışı Bahis ve Banka Bloke",
      "Sosyal Medya Hesap Çalınması"
    ],
    process: [
      { step: "01", title: "Tespit", desc: "İhlalin noter veya e-tespit yoluyla kayıt altına alınması." },
      { step: "02", title: "Başvuru", desc: "Sulh Ceza Hakimliği'ne erişim engeli başvurusu." },
      { step: "03", title: "Takip", desc: "İçeriğin tamamen silindiğinin teyidi." }
    ],
    faq: [
      { q: "Google'dan ismimi sildirebilir miyim?", a: "Unutulma hakkı kapsamında, eski ve gerçeği yansıtmayan haberlerin arama motorlarından kaldırılmasını sağlıyoruz." },
      { q: "Kripto param çalındı, geri alabilir miyim?", a: "Blokzincir takibi ve savcılık şikayeti ile failin borsadaki hesaplarına bloke konulması mümkündür." }
    ]
  }
];