import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import StickyContactBar from "./components/StickyContactBar";
import PageBreadcrumb from "./components/PageBreadcrumb";
import ScrollRevealManager from "./components/ScrollRevealManager";
import BackToTopButton from "./components/BackToTopButton";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-red-hat-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://frpinstallations.com"),
  title: {
    default: "FRP Installations Inc. | Wall Protection Solutions — Healthcare & Institutional Interior Protection BC",
    template: "%s | FRP Installations | Wall Protection Solutions",
  },
  description: "British Columbia's specialist healthcare and institutional interior protection subcontractor. Supply and installation of wall protection systems, hygienic wall cladding, FRP/FRL panels, wet wall systems, and architectural specialties. 700+ projects. 16+ UPCC clinics. Free quotes.",
  keywords: [
    "Wall Protection Systems BC",
    "Healthcare Interior Protection",
    "Hygienic Wall Cladding",
    "FRP Installation British Columbia",
    "FRL Wall Panels",
    "Altro Whiterock Installer",
    "Construction Specialties Acrovyn",
    "Institutional Wall Protection",
    "Hospital Wall Protection BC",
    "Healthcare Construction Subcontractor",
    "Wall Protection Solutions",
    "FRP Installations Inc",
    "Supply and Install Wall Protection",
    "UPCC Clinic Construction",
    "Inpro Wall Protection",
    "Panolam FRL Panels",
    "Hygienic Systems Healthcare",
    "Wall Protection Contractor Vancouver",
  ],
  authors: [{ name: "FRP Installations Inc. | Wall Protection Solutions", url: "https://frpinstallations.com" }],
  creator: "FRP Installations Inc.",
  publisher: "FRP Installations Inc.",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "FRP Installations Inc. | Wall Protection Solutions — Healthcare & Institutional Interior Protection",
    description: "Specialist healthcare and institutional interior protection subcontractor across British Columbia. 700+ projects. 16+ UPCC clinics. Supply and install wall protection, hygienic cladding, FRP/FRL, and more.",
    url: "https://frpinstallations.com",
    siteName: "FRP Installations Inc. | Wall Protection Solutions",
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/actualphotos/8.jpg",
        width: 5224,
        height: 3483,
        alt: "Healthcare interior with hygienic wall cladding and wall protection — FRP Installations BC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FRP Installations Inc. | Wall Protection Solutions",
    description: "Specialist healthcare and institutional interior protection subcontractor across British Columbia.",
    images: ["/actualphotos/8.jpg"],
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
  // NOTE: Add the real Google Search Console verification code here (or verify
  // via DNS) when connecting the domain, e.g. verification: { google: "..." }.
  // A global `alternates.canonical` is intentionally NOT set here: in the App
  // Router it would be inherited by every page and make them all canonicalize
  // to the homepage. Each page sets its own self-referencing canonical instead.
  category: "Construction",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://frpinstallations.com/#business",
      name: "FRP Installations Inc. | Wall Protection Solutions",
      alternateName: "Wall Protection Solutions",
      image: "https://frpinstallations.com/actualphotos/8.jpg",
      description: "Specialist healthcare and institutional interior protection subcontractor across British Columbia. Supply and installation of wall protection systems, hygienic wall cladding, FRP/FRL panels, wet wall systems, stainless protection, and architectural specialties.",
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
    },
    {
      "@type": "WebSite",
      "@id": "https://frpinstallations.com/#website",
      url: "https://frpinstallations.com",
      name: "FRP Installations Inc. | Wall Protection Solutions",
      description: "Healthcare and institutional interior protection systems across British Columbia",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://frpinstallations.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
      publisher: {
        "@id": "https://frpinstallations.com/#business",
      },
    },
    {
      "@type": "Service",
      "@id": "https://frpinstallations.com/#service",
      name: "Healthcare & Institutional Interior Protection Systems",
      provider: {
        "@id": "https://frpinstallations.com/#business",
      },
      serviceType: "Wall Protection Installation",
      areaServed: {
        "@type": "State",
        name: "British Columbia",
      },
      description: "Supply and installation of wall protection systems, hygienic wall cladding, FRP/FRL wall panels, wet wall systems, stainless protection, and architectural specialties for healthcare and institutional facilities.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${redHatDisplay.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#005EB8" />
        <meta name="geo.region" content="CA-BC" />
        <meta name="geo.placename" content="Coquitlam" />
        <meta name="geo.position" content="49.2827;-122.7931" />
        <meta name="ICBM" content="49.2827, -122.7931" />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="absolute left-4 top-4 z-100 -translate-y-16 rounded bg-white px-4 py-2 text-sm font-medium text-[#0f172a] outline-2 outline-[#64A70B] transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>
        <PageBreadcrumb />
        <div id="main-content">
          {children}
        </div>
        <BackToTopButton />
        <StickyContactBar />
        <ScrollRevealManager />
      </body>
    </html>
  );
}
