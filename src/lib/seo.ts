import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Franquias de Energia Solar e Mobilidade Elétrica`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Invista em um dos mercados que mais crescem no mundo através das franquias SegEnergy Solar e SegEnergy Charger. Parte do Grupo Zanon, com +4.000 franquias e presença em 7 países.",
  keywords: [
    "franquia energia solar",
    "franquia eletroposto",
    "SegEnergy",
    "SegEnergy Solar",
    "SegEnergy Charger",
    "Grupo Zanon",
    "franquia mobilidade elétrica",
    "investimento franquia",
    "energia renovável",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | O futuro da energia está criando os próximos grandes empresários`,
    description:
      "Franquias SegEnergy Solar e SegEnergy Charger. +4.000 franquias vendidas, 7 países, +R$ 2,5 bilhões em faturamento.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Franquias de Energia`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Franquias de Energia Solar e Mobilidade Elétrica`,
    description:
      "Invista em energia solar e mobilidade elétrica com o respaldo do Grupo Zanon.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  category: "business",
};

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.svg`,
    description: siteMetadata.description,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    sameAs: [
      "https://instagram.com/segenergysolar",
      "https://linkedin.com/company/segenergysolar",
      "https://youtube.com/@segenergysolar",
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "Grupo Zanon",
    },
    areaServed: {
      "@type": "Country",
      name: "Brazil",
    },
    knowsAbout: [
      "Energia Solar",
      "Mobilidade Elétrica",
      "Franquias",
      "Infraestrutura de Recarga",
    ],
  };
}
