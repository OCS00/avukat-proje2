// src/components/ui/ScrollProgress.jsx
"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Animasyonu yumuşatmak için spring fiziği kullanıyoruz
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c5a47e] via-[#e0bb8e] to-[#c5a47e] origin-left z-[100] shadow-[0_0_10px_rgba(197,164,126,0.5)]"
      style={{ scaleX }}
    />
  );
}