// src/components/Navbar.jsx
"use client";
import Link from "next/link";
import { Scale, Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/siteConfig"; // Verileri buradan çekiyor

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-slate-200 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo ve İsim */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-slate-900 p-2 rounded-lg text-white">
              <Scale size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                {siteConfig.name}
              </h1>
              <span className="text-xs text-slate-500 uppercase tracking-widest font-medium">
                {siteConfig.title}
              </span>
            </div>
          </Link>

          {/* Masaüstü Menü */}
          <div className="hidden md:flex items-center space-x-8 font-medium text-slate-600">
            <Link href="/" className="hover:text-slate-900">Ana Sayfa</Link>
            <Link href="/hakkimda" className="hover:text-slate-900">Hakkımda</Link>
            <Link href="/uzmanliklar" className="hover:text-slate-900">Uzmanlıklar</Link>
            <Link href="/iletisim" className="bg-slate-900 text-white px-5 py-2 rounded-md hover:bg-slate-800 transition">
              Randevu Al
            </Link>
          </div>

          {/* Mobil Menü Butonu */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü Açılır Kısmı */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link href="/" className="block px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-md">Ana Sayfa</Link>
            <Link href="/hakkimda" className="block px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-md">Hakkımda</Link>
            <Link href="/uzmanliklar" className="block px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-md">Uzmanlıklar</Link>
            <Link href="/iletisim" className="block px-3 py-2 text-slate-900 font-medium bg-slate-50 rounded-md mt-2">Randevu Al</Link>
          </div>
        </div>
      )}
    </nav>
  );
}