import Link from "next/link";
import { Header, Footer } from "@/app/components";

export const metadata = {
  title: "Panolam FRP Panels | FRP Installations",
  description: "Panolam FRP and FRL wall panels for commercial applications. Quality wall protection solutions for food service and healthcare facilities.",
};

const products = [
  {
    name: "Panolam FRP Wall Panels",
    description: "High-performance fiberglass reinforced plastic panels designed for demanding commercial environments. Panolam FRP provides excellent protection in food service, healthcare, and industrial applications.",
    benefits: [
      "Exceptional moisture resistance",
      "High impact strength",
      "Scratch and stain resistant",
      "Easy to clean and sanitize",
      "USDA/FSIS compliant",
      "Fire rated options available",
    ],
    options: {
      textures: ["Pebbled", "Smooth", "Embossed"],
      colors: ["White", "Almond", "Gray", "Custom colors"],
      sizes: ["4' x 8'", "4' x 9'", "4' x 10'"],
      thicknesses: ["0.090\"", "0.120\""],
    },
  },
  {
    name: "Panolam FRL (Fire-Rated Laminate)",
    description: "Fire-rated laminate panels that combine aesthetic appeal with fire safety compliance. Ideal for applications requiring both decorative finishes and fire protection.",
    benefits: [
      "Class A fire rating",
      "Wide range of decorative finishes",
      "Impact and scratch resistant",
      "Easy maintenance",
      "Meets building code requirements",
      "Suitable for high-visibility areas",
    ],
    options: {
      finishes: ["Woodgrains", "Solid colors", "Patterns", "Stone looks"],
      applications: ["Healthcare", "Education", "Hospitality", "Commercial offices"],
      fireRatings: ["Class A", "Class B", "Class C"],
    },
  },
  {
    name: "Panolam Decorative Surfaces",
    description: "Premium decorative surface panels that offer the durability of traditional wall protection with designer aesthetics. Perfect for creating attractive, durable wall surfaces.",
    benefits: [
      "Designer finish options",
      "Durable construction",
      "Easy to clean",
      "Coordinates with millwork",
      "Available in large panels",
      "Professional appearance",
    ],
    options: {
      categories: ["Nevamar HPL", "Pionite HPL", "Specialty laminates"],
      applications: ["Reception areas", "Conference rooms", "Retail spaces", "Restaurant dining areas"],
    },
  },
];

export default function PanolamPage() {
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
                <span className="text-white">Panolam</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 max-w-3xl">
                Panolam Wall Panels
              </h1>
              <p className="text-xl text-white/80 max-w-2xl font-normal leading-relaxed">
                Quality FRP and FRL wall panels for commercial applications. Trusted solutions
                for food service, healthcare, and decorative wall protection needs.
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

                    {product.options.finishes && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-3">Finishes</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.options.finishes.map((finish) => (
                            <span key={finish} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                              {finish}
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

                    {product.options.fireRatings && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-3">Fire Ratings</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.options.fireRatings.map((rating) => (
                            <span key={rating} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                              {rating}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.options.categories && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-3">Product Lines</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.options.categories.map((cat) => (
                            <span key={cat} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                              {cat}
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
              Ready to discuss your Panolam project?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 font-normal">
              Our team can help you select the right Panolam product for your application.
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
