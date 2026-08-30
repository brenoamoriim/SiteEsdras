import type { Metadata } from "next";
import { Fraunces, Work_Sans, Big_Shoulders_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const title =
  "Monte Olimpo | Consultoria Online de Personal Trainer — Esdras Amorim";
const description =
  "Consultoria online de treino personalizado com Esdras Amorim, Personal Trainer (CREF 052783G/MG). Método baseado em biomecânica, ciência do exercício e individualidade biológica. Atendimento em todo o Brasil.";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    default: title,
    template: "%s | Monte Olimpo",
  },
  description,
  keywords: [
    "personal trainer online",
    "consultoria de treino online",
    "Esdras Amorim",
    "Monte Olimpo",
    "hipertrofia",
    "emagrecimento",
    "biomecânica",
    "correção postural",
    "treino personalizado",
    "personal trainer Itapeva MG",
  ],
  authors: [{ name: siteConfig.professional }],
  creator: siteConfig.professional,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `https://${siteConfig.domain}`,
    title,
    description,
    siteName: siteConfig.brand,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Monte Olimpo — Consultoria Online de Personal Trainer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.brand,
    image: `https://${siteConfig.domain}/og-image.jpg`,
    "@id": `https://${siteConfig.domain}`,
    url: `https://${siteConfig.domain}`,
    telephone: "+55 35 99146-5990",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Itapeva",
      addressRegion: "MG",
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    sameAs: [siteConfig.instagramUrl],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.professional,
    jobTitle: "Personal Trainer & Consultor de Treinos",
    worksFor: {
      "@type": "Organization",
      name: siteConfig.brand,
    },
    url: `https://${siteConfig.domain}`,
    sameAs: [siteConfig.instagramUrl],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "CREF",
      identifier: "052783G/MG",
    },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${workSans.variable} ${bigShoulders.variable} font-body bg-obsidian-900 text-ivory antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
