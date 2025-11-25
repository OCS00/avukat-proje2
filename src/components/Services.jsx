// src/components/Services.jsx
import { Scale, Gavel, Users, FileText, ShieldAlert, Briefcase } from "lucide-react";

const services = [
  {
    title: "Ceza Hukuku",
    desc: "Ağır ceza ve asliye ceza mahkemelerindeki tüm süreçlerin titizlikle takibi.",
    icon: <Gavel size={32} />
  },
  {
    title: "Aile & Boşanma",
    desc: "Anlaşmalı ve çekişmeli boşanma, velayet, nafaka ve mal rejimi davaları.",
    icon: <Users size={32} />
  },
  {
    title: "Ticaret Hukuku",
    desc: "Şirketler hukuku, sözleşmeler, birleşme ve devralma süreçleri danışmanlığı.",
    icon: <Briefcase size={32} />
  },
  {
    title: "Gayrimenkul",
    desc: "Tapu iptal tescil, kira tespit ve tahliye davaları ile hukuki danışmanlık.",
    icon: <FileText size={32} />
  },
  {
    title: "İcra ve İflas",
    desc: "Alacak takibi, haciz işlemleri ve iflas erteleme süreçlerinin yönetimi.",
    icon: <Scale size={32} />
  },
  {
    title: "İdare Hukuku",
    desc: "İdari işlemlerin iptali ve tam yargı davalarında hukuki temsil hizmeti.",
    icon: <ShieldAlert size={32} />
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-white" id="uzmanliklar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-[#c5a47e] font-bold tracking-widest uppercase text-xs mb-2 block">
            Çalışma Alanlarımız
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0f172a] mb-6">
            Uzmanlık ve Faaliyet Alanları
          </h2>
          <div className="w-24 h-1 bg-[#c5a47e] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-10 bg-[#f8f9fa] border border-gray-200 hover:bg-[#0f172a] hover:border-[#0f172a] transition-all duration-500 rounded-sm"
            >
              <div className="text-[#c5a47e] mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-playfair font-bold text-[#0f172a] group-hover:text-white mb-4 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-400 leading-relaxed text-sm transition-colors">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}