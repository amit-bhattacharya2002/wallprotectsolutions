import Link from "next/link";
import { Header, Footer } from "@/app/components";

export const metadata = {
  title: "Nudo FRP Panels | FRP Installations",
  description: "Nudo FRP and FiberCorr wall panels for commercial applications. Durable, lightweight panels for food service, cold storage, and industrial environments.",
};

const products = [
  {
    name: "Nudo FiberCorr FRP",
    description: "Lightweight corrugated FRP panels that provide excellent durability with reduced weight. Ideal for walk-in coolers, freezers, and cold storage applications where temperature resistance is critical.",
    benefits: [
      "Lightweight corrugated design",
      "Excellent thermal properties",
      "Superior moisture resistance",
      "Ideal for cold storage",
      "Easy to install",
      "USDA/FSIS approved",
    ],
    options: {
      applications: ["Walk-in coolers", "Freezers", "Cold storage", "Food processing"],
      colors: ["White", "Almond"],
      sizes: ["4' x 8'", "4' x 10'", "Custom lengths"],
      cores: ["Corrugated", "Foam insulated"],
    },
  },
  {
    name: "Nudo Standard FRP",
    description: "Traditional fiberglass reinforced plastic panels for general commercial wall protection. Provides reliable performance in food service, healthcare, and industrial environments.",
    benefits: [
      "Impact and scratch resistant",
      "Moisture and stain resistant",
      "Easy to clean and maintain",
      "Mold and mildew resistant",
      "Class A/C fire ratings",
      "Cost-effective solution",
    ],
    options: {
      textures: ["Embossed", "Pebbled", "Smooth"],
      colors: ["White", "Almond", "Gray", "Beige"],
      sizes: ["4' x 8'", "4' x 9'", "4' x 10'"],
      thicknesses: ["0.090\"", "0.120\""],
    },
  },
  {
    name: "Nudo Insulated Panels",
    description: "Composite insulated wall panels that combine FRP surfaces with foam insulation cores. Perfect for applications requiring both wall protection and thermal insulation.",
    benefits: [
      "Built-in thermal insulation",
      "Energy efficient",
      "FRP surface protection",
      "Reduces HVAC costs",
      "Quick installation",
      "Ideal for climate-controlled spaces",
    ],
    options: {
      insulation: ["EPS foam", "Polyisocyanurate", "XPS foam"],
      rValues: ["R-5", "R-10", "R-15", "R-20", "Custom"],
      applications: ["Cold storage", "Clean rooms", "Food processing", "Pharmaceutical"],
    },
  },
];

export default function NudoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-dvh bg-[#0f172a] pt-32 pb-20 lg:pt-40 lg:pb-28 flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-left">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-white/70 text-sm mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href="/wall-protection" className="hover:text-white transition-colors">Wall Protection</Link>
                <span>/</span>
                <span className="text-white">Nudo</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 max-w-3xl">
                Nudo FRP Panels
              </h1>
              <p className="text-xl text-white/80 max-w-2xl font-normal leading-relaxed">
                Innovative FRP and insulated panel solutions for cold storage, food processing,
                and commercial applications requiring superior thermal performance.
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-20">
              {products.map((product, index) => (
                <div key={product.name} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 ${index !== 0 ? 'pt-20 border-t border-gray-200' : ''}`}>
                  <div>
                    <span className="text-sm font-medium text-[#f97316] tracking-wider uppercase mb-4 block">
                      Product {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                      {product.name}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed font-normal mb-8">
                      {product.description}
                    </p>
                    
                    <h3 className="text-lg font-semibold text-[#0f172a] mb-4">Benefits</h3>
                    <ul className="space-y-3 mb-8">
                      {product.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-[#f97316] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#f8fafc] rounded-2xl p-8 lg:p-10">
                    <h3 className="text-lg font-semibold text-[#0f172a] mb-6">Available Options</h3>
                    
                    {product.options.applications && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-3">Ideal Applications</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.options.applications.map((app) => (
                            <span key={app} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.options.colors && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-3">Colors</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.options.colors.map((color) => (
                            <span key={color} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                              {color}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.options.sizes && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-3">Sizes</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.options.sizes.map((size) => (
                            <span key={size} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.options.textures && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-3">Textures</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.options.textures.map((texture) => (
                            <span key={texture} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                              {texture}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.options.cores && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-3">Core Types</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.options.cores.map((core) => (
                            <span key={core} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                              {core}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.options.insulation && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-3">Insulation Types</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.options.insulation.map((ins) => (
                            <span key={ins} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                              {ins}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.options.rValues && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-3">R-Values Available</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.options.rValues.map((rVal) => (
                            <span key={rVal} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                              {rVal}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
              Ready to discuss your Nudo project?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 font-normal">
              Our team can help you select the right Nudo product for your cold storage or commercial application.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="group inline-flex items-center gap-3 bg-[#f97316] text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-[#ea580c]"
              >
                Get a Quote
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-white/80 hover:text-white font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Other Manufacturers */}
        <section className="py-20 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-[#0f172a] tracking-tight mb-8 text-center">
              Other FRP Manufacturers We Work With
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "Marlite", href: "/wall-protection/manufacturers/marlite" },
                { name: "Crane Composites", href: "/wall-protection/manufacturers/crane-composites" },
                { name: "Graham", href: "/wall-protection/manufacturers/graham" },
                { name: "Panolam", href: "/wall-protection/manufacturers/panolam" },
              ].map((manufacturer) => (
                <Link
                  key={manufacturer.name}
                  href={manufacturer.href}
                  className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:border-[#f97316] hover:text-[#f97316] transition-colors font-medium"
                >
                  {manufacturer.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
