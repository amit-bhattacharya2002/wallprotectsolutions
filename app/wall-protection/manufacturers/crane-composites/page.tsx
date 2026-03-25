import Link from "next/link";
import { Header, Footer } from "@/app/components";

export const metadata = {
  title: "Crane Composites FRP Panels | FRP Installations",
  description: "Crane Composites Glasbord and Sequentia FRP panels. Industry-leading wall and ceiling panels for commercial applications.",
};

const products = [
  {
    name: "Glasbord FRP Wall Panels",
    description: "The industry standard for FRP wall panels, Glasbord provides superior protection for walls in commercial kitchens, healthcare facilities, and food processing plants. Known for exceptional durability and easy maintenance.",
    benefits: [
      "Industry-leading impact resistance",
      "Superior moisture and stain resistance",
      "Easy to clean and maintain",
      "USDA/FSIS approved for food contact",
      "Class A, B, and C fire ratings available",
      "Wide range of colors and textures",
    ],
    options: {
      textures: ["Embossed", "Smooth", "Pebbled"],
      colors: ["White", "Almond", "Gray", "Custom colors available"],
      sizes: ["4' x 8'", "4' x 9'", "4' x 10'", "4' x 12'"],
      thicknesses: ["0.090\"", "0.120\""],
    },
  },
  {
    name: "Glasbord with Surfaseal",
    description: "Enhanced Glasbord panels with Surfaseal technology providing additional protection against bacteria, mold, and mildew. Ideal for healthcare and food service applications requiring superior sanitation.",
    benefits: [
      "Antimicrobial surface protection",
      "Enhanced stain resistance",
      "Easier cleaning and sanitization",
      "Meets strict healthcare requirements",
      "Extended product lifespan",
      "Same durability as standard Glasbord",
    ],
    options: {
      applications: ["Healthcare facilities", "Food processing", "Pharmaceutical", "Clean rooms"],
      colors: ["White", "Almond", "Light Gray"],
    },
  },
  {
    name: "Sequentia FRP Ceiling Panels",
    description: "Lightweight, durable ceiling panels designed for suspended ceiling applications. Provides excellent light diffusion and easy installation in commercial and industrial settings.",
    benefits: [
      "Lightweight for easy installation",
      "Excellent light transmission",
      "Impact and moisture resistant",
      "Easy to cut and handle",
      "Compatible with standard ceiling grids",
      "Cost-effective ceiling solution",
    ],
    options: {
      types: ["Flat panels", "Corrugated panels"],
      colors: ["Clear", "White", "Bronze"],
      sizes: ["2' x 4'", "2' x 8'", "4' x 8'"],
    },
  },
];

export default function CraneCompositesPage() {
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
                <span className="text-white">Crane Composites</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 max-w-3xl">
                Crane Composites FRP
              </h1>
              <p className="text-xl text-white/80 max-w-2xl font-normal leading-relaxed">
                Industry-leading Glasbord and Sequentia panels trusted by commercial kitchens,
                healthcare facilities, and food processing plants across North America.
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

                    {product.options.types && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-3">Panel Types</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.options.types.map((type) => (
                            <span key={type} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                              {type}
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
              Ready to discuss your Crane Composites project?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 font-normal">
              Our team can help you select the right Glasbord or Sequentia product for your application.
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
                { name: "Graham", href: "/wall-protection/manufacturers/graham" },
                { name: "Panolam", href: "/wall-protection/manufacturers/panolam" },
                { name: "Nudo", href: "/wall-protection/manufacturers/nudo" },
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
