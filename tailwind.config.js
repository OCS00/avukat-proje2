/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans' varsayılan fonttur, Jakarta yapıyoruz
        sans: ['var(--font-jakarta)', 'ui-sans-serif', 'system-ui'],
        // 'playfair' yerine artık 'serif' veya 'display' diyebiliriz ama kodlarını bozmamak için playfair ismini koruyup yeni fontu atayalım
        playfair: ['var(--font-dm-serif)', 'serif'], 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    animation: {
  marquee: 'marquee 25s linear infinite',
  marquee2: 'marquee2 25s linear infinite',
  },
  keyframes: {
  marquee: {
    '0%': { transform: 'translateX(0%)' },
    '100%': { transform: 'translateX(-100%)' },
  },
  marquee2: {
    '0%': { transform: 'translateX(100%)' },
    '100%': { transform: 'translateX(0%)' },
  },
}
  },
  plugins: [
    require('@tailwindcss/typography'), // Eğer yüklü değilse: npm install @tailwindcss/typography
  ],
};