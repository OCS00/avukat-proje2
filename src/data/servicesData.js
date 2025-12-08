// src/servicesData.js
import { Gavel, Users, Briefcase, FileText, Scale, ShieldAlert } from "lucide-react";

export const servicesData = [
  {
    slug: "ceza-hukuku", // Linkte görünecek isim
    title: "Ceza Hukuku",
    icon: <Gavel size={48} />,
    shortDesc: "Ağır ceza ve asliye ceza mahkemelerindeki süreçlerin takibi.",
    content: `
      <h3>Ceza Hukukunda Profesyonel Savunma</h3>
      <p>Ceza hukuku, kişilerin özgürlüğünü doğrudan ilgilendiren en hassas hukuk dalıdır. Soruşturma aşamasından kovuşturma evresine, istinaftan Yargıtay sürecine kadar her aşama hayati önem taşır.</p>
      <p>Büromuz; Ağır Ceza Mahkemeleri ve Asliye Ceza Mahkemeleri'nin görev alanına giren suçlarda müvekkillerinin yasal haklarını titizlikle savunmaktadır.</p>
      <h4>Hizmetlerimiz:</h4>
      <ul>
        <li>Karakol ve Savcılık ifade süreçlerinde hazır bulunma</li>
        <li>Tutukluluğa itiraz başvuruları</li>
        <li>Ağır Ceza davalarında sanık müdafiliği veya mağdur vekilliği</li>
      </ul>
    `
  },
  {
    slug: "aile-bosanma",
    title: "Aile ve Boşanma Hukuku",
    icon: <Users size={48} />,
    shortDesc: "Anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davaları.",
    content: `
      <h3>Aile Hukuku ve Boşanma Süreçleri</h3>
      <p>Boşanma süreci, hukuki boyutunun yanı sıra psikolojik boyutu da olan zorlu bir süreçtir. Bu süreçte hak kayıplarının önüne geçmek için profesyonel destek şarttır.</p>
      <h4>Faaliyet Alanlarımız:</h4>
      <ul>
        <li>Anlaşmalı ve Çekişmeli Boşanma Davaları</li>
        <li>Velayet ve Nafaka Uyuşmazlıkları</li>
        <li>Mal Rejimi Tasfiyesi</li>
        <li>Babalık Davaları</li>
      </ul>
    `
  },
  {
    slug: "ticaret-hukuku",
    title: "Ticaret ve Şirketler Hukuku",
    icon: <Briefcase size={48} />,
    shortDesc: "Şirketler hukuku, sözleşmeler ve ticari danışmanlık.",
    content: `
      <h3>Şirketler İçin Hukuki Danışmanlık</h3>
      <p>Ticari hayatın dinamik yapısı, şirketlerin hukuki risklerini minimize etmesini gerektirir. Sözleşmelerin hazırlanmasından, şirket birleşmelerine kadar geniş bir yelpazede hizmet sunuyoruz.</p>
    `
  },
  // Diğerlerini de aynı mantıkla ekleyebilirsin...
];