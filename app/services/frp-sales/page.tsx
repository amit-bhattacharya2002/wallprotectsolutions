import { PageHero, Footer, Header } from "@/app/components";
import Link from "next/link";

const manufacturers = [
  {
    name: "Marlite",
    description: "Premium FRP panels known for quality and variety",
    specialty: "Wide color selection",
  },
  {
    name: "Crane Composites",
    description: "Industry leader in fiberglass reinforced panels",
    specialty: "Durability focused",
  },
  {
    name: "Graham",
    description: "Trusted manufacturer of wall protection products",
    specialty: "Commercial grade",
  },
  {
    name: "Panolam",
    description: "Versatile panel solutions for various applications",
    specialty: "Multi-purpose",
  },
  {
    name: "Nudo",
    description: "Quality FRP products for demanding environments",
    specialty: "High performance",
  },
];

const panelOptions = [
  {
    title: "Colors & Finishes",
    description: "FRP panels come in a wide variety of colours, textures, and finishes to match the look you have envisioned for your space.",
    items: ["White", "Almond", "Gray", "Custom Colors", "Textured Finishes", "Smooth Finishes"],
  },
  {
    title: "Panel Sizes",
    description: "Available in standard sizes to accommodate various wall dimensions and minimize waste.",
    items: ["4' x 8' Sheets", "4' x 10' Sheets", "4' x 12' Sheets", "Custom Sizes Available"],
  },
  {
    title: "Thicknesses",
    description: "Different thicknesses for varying levels of impact resistance and durability requirements.",
    items: ["0.090\" Standard", "0.120\" Heavy Duty", "Custom Thicknesses"],
  },
];

const accessories = [
  {
    name: "End Caps",
    description: "Finished edges for a professional look",
  },
  {
    name: "Division Bars",
    description: "Clean transitions between panels",
  },
  {
    name: "Inside Corners",
    description: "Seamless interior corner coverage",
  },
  {
    name: "Outside Corners",
    description: "Protected exterior corner coverage",
  },
  {
    name: "J-Trim",
    description: "Edge finishing and transitions",
  },
  {
    name: "Adhesives",
    description: "Professional-grade panel adhesive",
  },
];

const features = [
  {
    title: "Quality Products",
    description: "We only supply FRP panels from leading manufacturers known for their quality, durability, and performance in demanding environments.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Complete Accessories",
    description: "All standard accessories including end caps, division bars, inside and outside corners are included with your panel order.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Expert Guidance",
    description: "Our team can help you select the right products for your specific application, requirements, and budget.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Competitive Pricing",
    description: "We offer competitive pricing on all FRP products while maintaining the highest quality standards.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function FRPSalesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="FRP Sales"
          subtitle="Premium FRP panels for wall and ceiling applications from leading manufacturers."
          breadcrumb="Services / FRP Sales"
        />

        {/* Overview Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                  Quality FRP Panels for Every Application
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed font-normal mb-8">
                  <p>
                    We supply FRP Panels for wall and ceiling applications from leading FRP 
                    Manufacturers including Marlite, Crane Composites, Graham, and Panolam. 
                    Our panels come in a variety of colours, textures, and finishes to match 
                    the look you have envisioned.
                  </p>
                  <p>
                    Standard accessories to help enhance the look and protection of your wall 
                    assemblies such as end caps, division bars, inside and outside corners, 
                    are all included with your order. We ensure you have everything needed 
                    for a complete, professional installation.
                  </p>
                  <p>
                    Whether you need panels for a commercial kitchen, healthcare facility, 
                    food processing plant, or any other application, we have the right 
                    products to meet your requirements and budget.
                  </p>
                </div>

                <Link
                  href="/quote"
                  className="inline-flex items-center gap-3 bg-[#2a4663] text-white px-8 py-4 rounded-full font-medium hover:bg-[#f97316] transition-all"
                >
                  Request a Quote
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature.title} className="p-6 border border-gray-200 rounded-xl hover:border-[#f97316] transition-colors">
                    <div className="w-12 h-12 bg-[#f8fafc] rounded-lg flex items-center justify-center text-[#0f172a] mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[#0f172a] mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm font-normal leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturers Section */}
        <section className="py-20 lg:py-28 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                Our Manufacturer Partners
              </h2>
              <p className="text-gray-600 leading-relaxed font-normal">
                We work exclusively with trusted, industry-leading manufacturers to ensure 
                you receive the highest quality FRP products.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {manufacturers.map((mfr) => (
                <div key={mfr.name} className="bg-white p-8 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-2">{mfr.name}</h3>
                  <p className="text-gray-600 font-normal mb-4">{mfr.description}</p>
                  <span className="text-sm text-[#f97316] bg-orange-50 px-3 py-1 rounded-full">
                    {mfr.specialty}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Panel Options Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                FRP Panel Options
              </h2>
              <p className="text-gray-600 leading-relaxed font-normal">
                We offer a wide range of panel options to meet your specific needs.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {panelOptions.map((option) => (
                <div key={option.title} className="p-8 bg-[#f8fafc] rounded-xl">
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-3">{option.title}</h3>
                  <p className="text-gray-600 font-normal mb-4">{option.description}</p>
                  <ul className="space-y-2">
                    {option.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-[#f97316]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accessories Section */}
        <section className="py-20 lg:py-28 bg-[#2a4663]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                Standard Accessories Included
              </h2>
              <p className="text-white/80 font-normal max-w-2xl mx-auto">
                All the accessories you need for a professional installation are included with your panel order.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {accessories.map((accessory) => (
                <div key={accessory.name} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <h3 className="text-white font-medium mb-2">{accessory.name}</h3>
                  <p className="text-white/70 text-sm">{accessory.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-[#f8fafc] rounded-3xl p-10 lg:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                Ready to order FRP panels?
              </h2>
              <p className="text-gray-600 font-normal mb-10 max-w-2xl mx-auto">
                Contact us for a quote. We'll help you select the right products and provide 
                competitive pricing for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-3 bg-[#2a4663] text-white px-8 py-4 rounded-full font-medium hover:bg-[#f97316] transition-all"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/services/frp-installation"
                  className="inline-flex items-center justify-center gap-3 border border-gray-300 text-[#0f172a] px-8 py-4 rounded-full font-medium hover:border-[#2a4663] transition-all"
                >
                  Learn About Installation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-20 lg:py-28 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-[#0f172a] mb-8">Other Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/services/frp-installation" className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-[#f97316] transition-colors">
                <h3 className="text-xl font-semibold text-[#0f172a] mb-2 group-hover:text-[#f97316] transition-colors">FRP Installation</h3>
                <p className="text-gray-600 font-normal">Professional panel installation for walls and ceilings across British Columbia.</p>
              </Link>
              <Link href="/services/frp-service" className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-[#f97316] transition-colors">
                <h3 className="text-xl font-semibold text-[#0f172a] mb-2 group-hover:text-[#f97316] transition-colors">FRP Service</h3>
                <p className="text-gray-600 font-normal">Consultation services, product recommendations, and 12-month warranty.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
