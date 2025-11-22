// src/components/Services.jsx
import { Scale, Gavel, Users, FileText, ShieldAlert, Briefcase } from "lucide-react";

const services = [
  {
    title: "Ceza Hukuku",
    desc: "Soruşturma ve kovuşturma aşamalarında müvekkillerimizin haklarını titizlikle savunuyoruz.",
    icon: <Gavel size={32} className="text-blue-900" />
  },
  {
    title: "Aile & Boşanma",
    desc: "Boşanma, velayet ve nafaka davalarında hassas ve çözüm odaklı hukuki destek sağlıyoruz.",
    icon: <Users size={32} className="text-blue-900" />
  },
  {
    title: "Ticaret Hukuku",
    desc: "Şirketler için sözleşme hazırlama, danışmanlık ve ticari davalarda profesyonel ortaklık.",
    icon: <Briefcase size={32} className="text-blue-900" />
  },
  {
    title: "Gayrimenkul Hukuku",
    desc: "Tapu iptali, tescil davaları ve kira uyuşmazlıklarında uzmanlaşmış kadromuzla yanınızdayız.",
    icon: <FileText size={32} className="text-blue-900" />
  },
  {
    title: "İcra ve İflas",
    desc: "Alacak takibi ve tahsilat süreçlerinin hızlı ve etkin bir şekilde yürütülmesini sağlıyoruz.",
    icon: <Scale size={32} className="text-blue-900" />
  },
  {
    title: "İdare Hukuku",
    desc: "Devlet kurumlarıyla yaşanan uyuşmazlıklarda ve iptal davalarında hukuki süreç yönetimi.",
    icon: <ShieldAlert size={32} className="text-blue-900" />
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-white" id="uzmanliklar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bölüm Başlığı */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Uzmanlık Alanlarımız
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hukukun çeşitli alanlarında edindiğimiz tecrübe ile sorunlarınıza 
            etkili ve kalıcı çözümler üretiyoruz.
          </p>
        </div>

        {/* Kartlar Izgarası (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}