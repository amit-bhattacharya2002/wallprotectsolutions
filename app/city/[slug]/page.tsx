import { notFound } from "next/navigation";
import Link from "next/link";
import { Header, Footer } from "@/app/components";
import { cities, getCityBySlug, getAllCitySlugs } from "@/app/data/cities";

// Generate static params for all cities
export function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each city
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return { title: "City Not Found" };
  
  return {
    title: `${city.name} FRP Panel Installation & Sales | Wall Protection Experts`,
    description: `Professional FRP panel sales, installation and service in ${city.name}, BC. Trusted wall protection solutions for restaurants, healthcare, food processing & commercial facilities. Free quotes & site visits.`,
    keywords: [
      `FRP Panels ${city.name}`,
      `Wall Protection ${city.name}`,
      `FRP Installation ${city.name} BC`,
      `Commercial Wall Panels ${city.region}`,
      `Restaurant Wall Protection ${city.name}`,
    ],
    openGraph: {
      title: `${city.name} FRP Panels & Wall Protection | FRP Installations`,
      description: `Professional FRP panel installation in ${city.name}, BC. 500+ projects completed across British Columbia.`,
      url: `https://frpinstallations.com/city/${slug}`,
      type: "website",
    },
    alternates: {
      canonical: `https://frpinstallations.com/city/${slug}`,
    },
  };
}

const frpManufacturers = [
  { name: "Graham", href: "/wall-protection/manufacturers/graham" },
  { name: "Crane Composites", href: "/wall-protection/manufacturers/crane-composites" },
  { name: "Marlite", href: "/wall-protection/manufacturers/marlite" },
  { name: "Nudo", href: "/wall-protection/manufacturers/nudo" },
  { name: "Panolam", href: "/wall-protection/manufacturers/panolam" },
];

const otherManufacturers = [
  { name: "Pionite", type: "FRL" },
  { name: "Nevamar", type: "FRL" },
  { name: "Panolam", type: "FRL" },
  { name: "Muralex", type: "PVC Liner" },
  { name: "DelPro", type: "PVC Liner" },
  { name: "Octaform", type: "PVC Liner" },
  { name: "Acrovyn", type: "Wall Protection" },
  { name: "Korogard", type: "Wall Protection" },
];

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  
  if (!city) {
    notFound();
  }

  // Get nearby cities (same region, excluding current)
  const nearbyCities = cities
    .filter(c => c.region === city.region && c.slug !== city.slug)
    .slice(0, 6);

  // Local SEO JSON-LD Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `FRP Installations - ${city.name}`,
    description: `Professional FRP panel sales, installation and service in ${city.name}, British Columbia.`,
    url: `https://frpinstallations.com/city/${slug}`,
    telephone: "+1-604-715-9469",
    email: "info@frpinstallations.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: "BC",
      addressCountry: "CA",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedIn: {
        "@type": "State",
        name: "British Columbia",
      },
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        addressCountry: "CA",
        addressRegion: "BC",
      },
      geoRadius: "50km",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-[#0f172a] pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-2 text-white/70 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">{city.name}</span>
            </div>
            <span className="text-[#f97316] text-sm font-medium uppercase tracking-wider block mb-4">
              {city.region}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6">
              {city.name} FRP Panels & Wall Protection
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl font-normal leading-relaxed">
              We specialize in the sales, installation and service of Fiberglass Reinforced Plastic (FRP) 
              panels and wall protection materials throughout {city.name} and British Columbia.
            </p>
          </div>
        </section>

        {/* FRP Panels Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <span className="text-sm font-medium text-[#f97316] tracking-wider uppercase mb-4 block">
                  Wall Protection Panels
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                  FRP Panels
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed font-normal">
                  <p>
                    Fiberglass Reinforced Plastic Panels (FRP Panels) are flexible composite panels 
                    constructed from a polymer matrix and reinforced with fiberglass. Where durability, 
                    strength, impact resistance and sanitation are key requirements, FRP Panels check 
                    all these boxes and more.
                  </p>
                  <p>
                    FRP Panels are a cost-effective "wall covering" and "wall protection" solution 
                    compared to other wall covering systems due to their relatively low cost, 
                    availability, and ease of installation.
                  </p>
                  <p>
                    FRP Panels are scratch and impact resistant; they are extremely easy to clean; 
                    and are impervious to mold and mildew. As a result of these properties, FRP 
                    Panels tend to be the wall protection solution required and specified by the 
                    various health authorities and architects throughout North America.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-3 bg-[#0f172a] text-white px-6 py-3 rounded-full font-medium hover:bg-[#f97316] transition-all"
                  >
                    Get FRP Quote
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/wall-protection"
                    className="inline-flex items-center gap-3 border border-gray-300 text-[#0f172a] px-6 py-3 rounded-full font-medium hover:border-[#f97316] hover:text-[#f97316] transition-all"
                  >
                    FRP Options
                  </Link>
                </div>
              </div>

              <div>
                <div className="bg-[#f8fafc] rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-[#0f172a] mb-6">FRP Manufacturers</h3>
                  <div className="space-y-3">
                    {frpManufacturers.map((mfr) => (
                      <Link
                        key={mfr.name}
                        href={mfr.href}
                        className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-[#f97316] transition-colors group"
                      >
                        <span className="font-medium text-[#0f172a] group-hover:text-[#f97316] transition-colors">
                          {mfr.name}
                        </span>
                        <svg className="w-4 h-4 text-gray-500 group-hover:text-[#f97316] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Wall Protection */}
        <section className="py-16 lg:py-24 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                Other Wall Protection Panels
              </h2>
              <p className="text-gray-700 leading-relaxed font-normal">
                In addition to FRP, we also offer a wide assortment of wall protection panels including 
                FRL Panels, PVC Liner Panels, Acrovyn, Korogard, and Stainless Steel wall panels.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {otherManufacturers.map((mfr) => (
                <div
                  key={mfr.name}
                  className="p-5 bg-white rounded-xl border border-gray-200"
                >
                  <span className="text-xs text-[#f97316] font-medium uppercase tracking-wider block mb-2">
                    {mfr.type}
                  </span>
                  <span className="font-medium text-[#0f172a]">{mfr.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/wall-protection"
                className="inline-flex items-center gap-2 text-[#f97316] font-medium hover:gap-3 transition-all"
              >
                View all wall protection options
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* City Experts Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                  {city.name} Wall Protection Experts
                </h2>
                <p className="text-gray-700 leading-relaxed font-normal mb-6">
                  We are happy to work with you on your project in {city.name}. Specifying the proper FRP product, 
                  as well as adhesive will help to make sure it lasts for years to come. Installations only 
                  take one day, and we receive standard FRP panels usually within 2-3 days from the order date.
                </p>
                <p className="text-gray-700 leading-relaxed font-normal mb-8">
                  We understand every day matters in your construction schedule, and with that in mind, 
                  we can accommodate expedited orders, installation timeframes, and even off-hour installations.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#0f172a] text-white px-6 py-3 rounded-full font-medium hover:bg-[#f97316] transition-all"
                >
                  Contact Our {city.name} Team
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="bg-[#0f172a] rounded-2xl p-8 lg:p-10">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#f97316] flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Pro Tip</h3>
                    <p className="text-white/70 font-normal">
                      FRP offers different classes based on flame spread ratings and smoke spread ratings.
                    </p>
                  </div>
                </div>

                <h3 className="text-white font-semibold mb-4">General Contractors Corner</h3>
                <p className="text-white/80 font-normal text-sm mb-6">
                  Are you quoting a new project that specifies FRP or Wall Protection? Get in touch 
                  with our expert team for a detailed quotation.
                </p>
                <ul className="space-y-3">
                  {[
                    "Class A & Class C Panels Available",
                    "Popular Colours In-Stock",
                    "Experienced & Professional Installers",
                    "Knowledgeable Sales Team",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <svg className="w-5 h-5 text-[#f97316] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Cities */}
        {nearbyCities.length > 0 && (
          <section className="py-16 lg:py-24 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-8">
                Also Serving Nearby Areas
              </h2>
              <div className="flex flex-wrap gap-3">
                {nearbyCities.map((nearbyCity) => (
                  <Link
                    key={nearbyCity.slug}
                    href={`/city/${nearbyCity.slug}`}
                    className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-gray-700 hover:border-[#f97316] hover:text-[#f97316] transition-colors font-medium"
                  >
                    {nearbyCity.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
              Get a Quotation for {city.name}
            </h2>
            <p className="text-white/80 font-normal mb-10 max-w-2xl mx-auto">
              We provide quotations according to your deadlines. Our team can attend your site in {city.name} for 
              on-site measurements at no additional cost.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-3 bg-white text-[#0f172a] px-8 py-4 rounded-full font-medium hover:bg-[#f97316] hover:text-white transition-all"
              >
                Submit Project Specifications
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all"
              >
                Schedule On-Site Measurement
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
