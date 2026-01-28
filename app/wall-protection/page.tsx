import { PageHero, Footer, Header } from "@/app/components";
import Link from "next/link";

const frpBenefits = [
  {
    slug: "cost-effective",
    title: "Cost Effective",
    description: "FRP Panels are a cost effective, readily available, and easy to install building material system compared to other wall covering solutions.",
  },
  {
    slug: "corrosion-resistance",
    title: "Corrosion Resistance",
    description: "FRP Panels are protected against corrosion by a wide range of chemicals and are unaffected by moisture or being immersed in water.",
  },
  {
    slug: "impact-resistance",
    title: "Impact Resistance",
    description: "FRP panels will not permanently deform or break under impact, making them ideal for high-traffic areas.",
  },
  {
    slug: "lightweight",
    title: "Lightweight",
    description: "FRP is a lightweight material that helps reduce installation and maintenance costs significantly.",
  },
  {
    slug: "high-strength",
    title: "High Strength",
    description: "FRP Panels have great flexural strength, beating timber, and pound-for-pound is usually stronger than common metals.",
  },
  {
    slug: "flexibility",
    title: "Flexibility",
    description: "FRP is more than three times as rigid as lumber and will not deform permanently, adapting to various surfaces.",
  },
  {
    slug: "thermal-properties",
    title: "Thermal Properties",
    description: "FRP has low thermal conductivity which makes it a good insulator for temperature-sensitive environments.",
  },
  {
    slug: "electrical-properties",
    title: "Electrical Properties",
    description: "FRP Panels are non-conductive and do not need to be grounded due to their high dielectric capability.",
  },
];

const frpManufacturers = [
  { name: "Graham", type: "FRP", href: "/wall-protection/manufacturers/graham" },
  { name: "Crane Composites", type: "FRP", href: "/wall-protection/manufacturers/crane-composites" },
  { name: "Marlite", type: "FRP", href: "/wall-protection/manufacturers/marlite" },
  { name: "Nudo", type: "FRP", href: "/wall-protection/manufacturers/nudo" },
  { name: "Panolam", type: "FRP", href: "/wall-protection/manufacturers/panolam" },
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

const otherProducts = [
  {
    name: "FRL Panels",
    description: "Fire-rated laminate panels for applications requiring fire resistance ratings.",
    brands: ["Pionite", "Nevamar", "Panolam"],
  },
  {
    name: "PVC Liner Panels",
    description: "Durable PVC panels ideal for agricultural and industrial applications.",
    brands: ["Muralex", "DelPro", "Octaform"],
  },
  {
    name: "Acrovyn Wall Protection",
    description: "Premium wall protection system for healthcare and high-traffic environments.",
    brands: ["Construction Specialties"],
  },
  {
    name: "Korogard Wall Protection",
    description: "Rigid thermoset wall protection with superior durability.",
    brands: ["Korogard"],
  },
  {
    name: "Stainless Steel Panels",
    description: "Commercial-grade stainless steel panels for demanding environments.",
    brands: ["Various Manufacturers"],
  },
];

const applications = [
  { name: "Restaurants" },
  { name: "Commercial Kitchens" },
  { name: "Grocery Stores" },
  { name: "Walk-in Coolers & Freezers" },
  { name: "Food Processing Plants" },
  { name: "Bathrooms" },
  { name: "Hospitals" },
  { name: "Schools" },
  { name: "Car Washes" },
  { name: "Medical Laboratories" },
  { name: "High Traffic Corridors" },
  { name: "Clean Rooms" },
  { name: "Cannabis Cultivation Facilities" },
  { name: "Correctional Facilities" },
  { name: "Storage Rooms" },
  { name: "Hotels" },
  { name: "Warehouses" },
  { name: "Lunch Rooms" },
  { name: "Mobile Trailers" },
  { name: "Modular Buildings" },
];

export default function WallProtectionPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Wall Protection Panels"
          subtitle="Premium FRP panels and wall protection solutions for commercial, industrial, and healthcare applications."
          breadcrumb="Products"
        />

        {/* FRP Panels Overview */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                  FRP Panels
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed font-normal">
                  <p>
                    Fiberglass Reinforced Plastic Panels (FRP Panels) are flexible composite panels 
                    constructed from a polymer matrix and reinforced with fiberglass. Where durability, 
                    strength, impact resistance, and sanitation are key requirements, FRP Panels check 
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
                
                <div className="mt-8">
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-3 bg-[#0f172a] text-white px-6 py-3 rounded-full font-medium hover:bg-[#f97316] transition-all"
                  >
                    Get FRP Quote
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div>
                <div className="bg-[#f8fafc] rounded-2xl p-8 mb-8">
                  <h3 className="text-lg font-semibold text-[#0f172a] mb-6">FRP Manufacturers</h3>
                  <div className="space-y-4">
                    {frpManufacturers.map((mfr) => (
                      <Link 
                        key={mfr.name} 
                        href={mfr.href}
                        className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0 group hover:bg-white rounded-lg px-3 -mx-3 transition-colors"
                      >
                        <span className="font-medium text-[#0f172a] group-hover:text-[#f97316] transition-colors">{mfr.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-[#f97316] bg-orange-50 px-3 py-1 rounded-full">{mfr.type}</span>
                          <svg className="w-4 h-4 text-gray-500 group-hover:text-[#f97316] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                    alt="FRP Panel Installation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why FRP Section */}
        <section className="py-20 lg:py-28 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                  Why FRP?
                </h2>
                <p className="text-white/80 font-normal max-w-2xl">
                  FRP panels offer numerous advantages that make them the preferred choice for wall protection.
                </p>
              </div>
              <Link
                href="/frp-benefits"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors shrink-0"
              >
                View all benefits
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {frpBenefits.map((benefit, index) => (
                <Link 
                  key={benefit.slug} 
                  href={`/frp-benefits/${benefit.slug}`}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#f97316]/50 transition-all"
                >
                  <div className="text-sm text-[#f97316] font-medium mb-3">0{index + 1}</div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#f97316] transition-colors">{benefit.title}</h3>
                  <p className="text-white/80 text-sm font-normal leading-relaxed mb-4">{benefit.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-[#f97316] opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Other Products Section */}
        <section className="py-20 lg:py-28 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                Other Wall Protection Panels
              </h2>
              <p className="text-gray-600 leading-relaxed font-normal">
                In addition to FRP, we also offer a wide assortment of wall protection panels including 
                FRL Panels, PVC Liner Panels, Acrovyn, Korogard, and Stainless Steel wall panels.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProducts.map((product) => (
                <div key={product.name} className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#f97316] transition-colors">
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-3">{product.name}</h3>
                  <p className="text-gray-600 font-normal mb-4 leading-relaxed">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.brands.map((brand) => (
                      <span key={brand} className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                FRP Panel & Wall Protection Applications
              </h2>
              <p className="text-gray-600 leading-relaxed font-normal">
                Due to the many positive properties of FRP Panels, we find them used in a variety of 
                different industries including Agriculture, Business, Food & Beverage, Government, 
                Medical, Tourism & Hospitality.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {applications.map((app) => (
                <div
                  key={app.name}
                  className="group p-5 bg-[#f8fafc] border border-gray-200 rounded-xl hover:border-[#f97316] hover:bg-white transition-colors cursor-default flex items-center min-h-[72px]"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#f97316] shrink-0 mt-1.5" />
                    <div className="text-sm text-gray-700 font-medium group-hover:text-[#0f172a] transition-colors leading-snug">{app.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FRP Options CTA */}
        <section className="py-20 lg:py-28 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-[#0f172a] rounded-3xl p-10 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                    Not sure which product is right for you?
                  </h2>
                  <p className="text-white/80 font-normal mb-8 leading-relaxed">
                    Our team can recommend the most suitable FRP panel products, accessories, and 
                    adhesives for your specific application. We provide consultation services to 
                    ensure you get the best wall protection solution for your needs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-3 bg-white text-[#0f172a] px-8 py-4 rounded-full font-medium hover:bg-[#f97316] hover:text-white transition-all"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="/services/frp-service"
                      className="inline-flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all"
                    >
                      Learn About Our Services
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-white mb-2">5+</div>
                    <div className="text-white/80 text-sm">FRP Manufacturers</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-white mb-2">8+</div>
                    <div className="text-white/80 text-sm">Other Brands</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-white mb-2">20+</div>
                    <div className="text-white/80 text-sm">Applications</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-white mb-2">12</div>
                    <div className="text-white/80 text-sm">Month Warranty</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
