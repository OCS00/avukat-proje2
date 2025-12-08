// src/components/Services.jsx
import Link from "next/link";
import { servicesData } from "@/data/servicesData"; // Veriyi buradan alıyoruz

export default function Services() {
  return (
    <section className="py-24 bg-[#0f172a]" id="uzmanliklar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-[#c5a47e] font-bold tracking-widest uppercase text-xs mb-2 block">
            Çalışma Alanlarımız
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Uzmanlık ve Faaliyet Alanları
          </h2>
          <div className="w-24 h-1 bg-[#c5a47e] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Link 
              href={`/uzmanliklar/${service.slug}`} // ARTIK LİNKE GİDİYOR
              key={index} 
              className="group p-10 bg-[#1e293b] border border-gray-800 hover:border-[#c5a47e] transition-all duration-500 rounded-sm hover:-translate-y-2 block"
            >
              <div className="text-[#c5a47e] mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-playfair font-bold text-white mb-4 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm transition-colors line-clamp-3">
                {service.shortDesc}
              </p>
              <div className="mt-6 text-[#c5a47e] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Detaylı Bilgi &rarr;
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}