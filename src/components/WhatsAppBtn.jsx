// src/components/WhatsAppBtn.jsx
"use client";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function WhatsAppBtn() {
  // Telefon numarasındaki boşlukları ve parantezleri temizleyip saf numara yapar
  const phoneClean = siteConfig.phone.replace(/[^0-9]/g, '');

  return (
    <a
      href={`https://wa.me/${phoneClean}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center gap-2 group"
    >
      <MessageCircle size={28} fill="white" />
      {/* Üzerine gelince açılan yazı */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 font-bold whitespace-nowrap">
        WhatsApp'tan Sor
      </span>
    </a>
  );
}