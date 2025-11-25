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
        sans: ['var(--font-inter)'],     // Düz yazılar için
        playfair: ['var(--font-playfair)'], // Başlıklar için (O sitenin aynısı)
      },
      colors: {
        navy: {
          900: "#0f172a", // O sitenin koyu laciverti
        },
        gold: {
          500: "#c5a47e", // O sitenin altın rengi
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};