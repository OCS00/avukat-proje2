import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteLayout from "@/components/SiteLayout"; // Yeni korumamızı çağırdık
import { siteConfig } from "@/data/siteConfig";

// FONT AYARLARI
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: "swap",
});

// METADATA (SEO BİLGİLERİ - BURASI BOZULMAZ)
export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: "Mersin avukatı Av. Osman Özkaya; ceza, aile ve ticaret hukukunda kişiye özel, butik hukuki danışmanlık ve dava takibi hizmeti sunar.",
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: "/avukat.jpg", width: 1200, height: 630, alt: siteConfig.name }],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/avukat.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0f172a",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LegalService", "LocalBusiness"],
      "@id": `${siteConfig.url}/#business`,
      "name": siteConfig.name,
      "description": siteConfig.description,
      "url": siteConfig.url,
      "telephone": siteConfig.phone,
      "email": siteConfig.email,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mersin",
        "addressRegion": "Mersin",
        "addressCountry": "TR"
      },
      "areaServed": { "@type": "Country", "name": "Türkiye" },
      "serviceType": [
        "Ceza Hukuku",
        "Aile ve Boşanma Hukuku",
        "Ticaret Hukuku",
        "Bilişim Hukuku"
      ],
      "sameAs": [siteConfig.social.instagram, siteConfig.social.linkedin]
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      "name": "Osman Özkaya",
      "jobTitle": "Avukat",
      "url": siteConfig.url,
      "worksFor": { "@id": `${siteConfig.url}/#business` },
      "memberOf": {
        "@type": "Organization",
        "name": "Mersin Barosu"
      },
      "sameAs": [siteConfig.social.instagram, siteConfig.social.linkedin]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-[#0f172a] text-gray-300 antialiased selection:bg-[#c5a47e] selection:text-[#0f172a] overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SiteLayout>
          {children}
        </SiteLayout>
      </body>
    </html>
  );
}