import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frpinstallations.com"),
  title: {
    default: "FRP Installations Inc. | #1 FRP Panel Experts in British Columbia",
    template: "%s | FRP Installations",
  },
  description: "British Columbia's leading FRP panel specialists. Professional Fiberglass Reinforced Plastic sales, installation & service for restaurants, healthcare, food processing, and commercial facilities. 500+ projects completed. Free quotes & site visits.",
  keywords: [
    "FRP Panels", "Fiberglass Reinforced Plastic", "Wall Protection", 
    "FRP Installation Vancouver", "FRP Panels BC", "Commercial Wall Panels",
    "Restaurant Wall Protection", "Healthcare FRP", "Food Processing Walls",
    "Marlite FRP", "Crane Composites", "FRP Contractors BC"
  ],
  authors: [{ name: "FRP Installations Inc.", url: "https://frpinstallations.com" }],
  creator: "FRP Installations Inc.",
  publisher: "FRP Installations Inc.",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "FRP Installations Inc. | #1 FRP Panel Experts in BC",
    description: "Professional FRP panel sales, installation & service across British Columbia. 500+ projects, 10+ years experience. Free quotes available.",
    url: "https://frpinstallations.com",
    siteName: "FRP Installations Inc.",
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FRP Installations - Premium FRP Panel Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FRP Installations Inc. | FRP Panel Experts in BC",
    description: "Professional FRP panel sales, installation & service across British Columbia.",
    images: ["/og-image.jpg"],
  },
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
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://frpinstallations.com",
  },
  category: "Construction",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://frpinstallations.com/#business",
      name: "FRP Installations Inc.",
      image: "https://frpinstallations.com/og-image.jpg",
      description: "British Columbia's leading FRP panel specialists providing professional Fiberglass Reinforced Plastic sales, installation and service for commercial, healthcare, and industrial facilities.",
      url: "https://frpinstallations.com",
      telephone: "+1-604-715-9469",
      email: "info@frpinstallations.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "145-1685 Pinetree Way",
        addressLocality: "Coquitlam",
        addressRegion: "BC",
        postalCode: "V3E 3A1",
        addressCountry: "CA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 49.2827,
        longitude: -122.7931,
      },
      areaServed: {
        "@type": "State",
        name: "British Columbia",
        containedIn: "Canada",
      },
      priceRange: "$$",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      sameAs: [],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "47",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://frpinstallations.com/#website",
      url: "https://frpinstallations.com",
      name: "FRP Installations Inc.",
      description: "Professional FRP panel solutions in British Columbia",
      publisher: {
        "@id": "https://frpinstallations.com/#business",
      },
    },
    {
      "@type": "Service",
      "@id": "https://frpinstallations.com/#service",
      name: "FRP Panel Installation",
      provider: {
        "@id": "https://frpinstallations.com/#business",
      },
      serviceType: "Wall Protection Installation",
      areaServed: {
        "@type": "State",
        name: "British Columbia",
      },
      description: "Professional installation of Fiberglass Reinforced Plastic panels for commercial, healthcare, food service, and industrial applications.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="geo.region" content="CA-BC" />
        <meta name="geo.placename" content="Coquitlam" />
        <meta name="geo.position" content="49.2827;-122.7931" />
        <meta name="ICBM" content="49.2827, -122.7931" />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
