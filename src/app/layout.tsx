import type { Metadata } from "next";
import { Bodoni_Moda, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import {
  CONTACT_PHONE_DISPLAY,
  INSTAGRAM_URL,
  MAPS_LAT,
  MAPS_LNG,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

// Dados estruturados (schema.org) para a Google entender que este é o site
// oficial de uma pousada, com endereço/geo/contato — habilita rich results
// e reforça o perfil do Google Business Profile.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": `${SITE_URL}/#pousada`,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: CONTACT_PHONE_DISPLAY,
  image: `${SITE_URL}/images/dona-maria.jpeg`,
  priceRange: "R$ 90 – R$ 300",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Campo Alegre, Paranã",
    addressRegion: "TO",
    postalCode: "77360-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: MAPS_LAT,
    longitude: MAPS_LNG,
  },
  hasMap: `https://www.google.com/maps?q=${MAPS_LAT},${MAPS_LNG}`,
  sameAs: [INSTAGRAM_URL],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Café da manhã incluso", value: true },
  ],
  areaServed: "Campo Alegre, Paranã, Tocantins",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${bodoni.variable} ${jakarta.variable}`}>
      <body className="font-body-md text-body-md text-on-surface bg-surface">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main className="pt-14">{children}</main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
