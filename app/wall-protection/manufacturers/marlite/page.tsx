import Link from "next/link";
import { Header, Footer } from "@/app/components";

export const metadata = {
  title: "Marlite FRP Panels | FRP Installations",
  description: "Marlite Standard FRP, Induro, Symmetrix & Artizan panels. Strong, water-resistant products with exceptional durability for high-traffic areas.",
};

const products = [
  {
    name: "Marlite Standard FRP",
    description: "A strong, water-resistant product that has exceptional durability for high-traffic areas and is easy to install and maintain. Certified for low chemical emissions and comes in various textured and smooth surfaces.",
    benefits: [
      "Moisture resistant, ideal for wet environments",
      "Doesn't support mold or mildew growth",
      "Resists scratches, chemicals and stains",
      "High-impact strength at lower cost",
      "USDA, FSIS, Class A/C Fire Rating certified",
      "Approved by Canadian Food Inspection Agency",
    ],
    options: {
      colors: ["White", "Almond", "Silver", "Beige", "Blue", "Maroon", "And more"],
      smoothColors: ["White", "Almond", "Light Grey"],
      sizes: ["4' x 8' x 3/32\"", "4' x 9' x 3/32\"", "4' x 10' x 3/32\"", "4' x 12' x 3/32\""],
    },
  },
  {
    name: "Marlite Induro FRP",
    description: "Decorative Laminate FRP known for its wear-resistant capabilities, created to work with HPL (High Pressure Laminates). Available in a wide range of woodgrains, solid colors and abstract prints.",
    benefits: [
      "Same durability as High Pressure Laminates",
      "Moisture and impact resistant properties",
      "Flexible on both sides, works with HPL case goods",
      "Most affordable decorative option",
      "Various trims, hand rails and corner guards available",
      "Conforms with fire ratings and NFPA Safety codes",
    ],
    options: {
      finishes: ["Woodgrains", "Solid Colors", "Abstract Prints"],
      construction: ["Protective surface sheet", "Decorative sheet", "FRP core", "Balanced both sides"],
    },
  },
  {
    name: "Marlite Symmetrix FRP",
    description: "Mimics the look of smooth tile on large grooved panels with state-of-the-art CNC and Sani-coat sealer. Creates a high-quality and durable ceramic tile appearance.",
    benefits: [
      "Multiple colors, patterns and scoring features",
      "Resists mold, mildew, scratching, and stains",
      "Won't crack like ceramic tile",
      "Easy to clean with standard solutions",
      "Withstands high impact with fiberglass core",
      "FSIS/USDA compliant, Class C Fire Rating",
    ],
    options: {
      sizes: ["4' x 8' x 3/32\"", "4' x 10' x 3/32\""],
      styles: ["Checkerboard", "Classic", "Subway"],
      feature: "Sani-coat topcoat seals groove lines, protecting against mold and mildew",
    },
  },
  {
    name: "Marlite Artizan FRP",
    description: "Detailed finish that's super easy to maintain. More economical than other decorative laminates with carefully applied base, print, precision and melamine coats.",
    benefits: [
      "Intricately detailed decorative walls",
      "High-impact and bacteria resistant",
      "Resists mold, mildew and stains",
      "Won't crack, costs less than ceramic tile",
      "FSIS/USDA compliant, Class A and C Fire Ratings",
      "Custom finishes available with swatch patterns",
    ],
    options: {
      sizes: ["4' x 8' x 3/32\"", "Custom sizes available"],
      woodgrains: ["Mahogany", "Cremello", "Townsend"],
      abstracts: ["Cody", "Adara"],
      stonegrids: ["Dark", "Tuscany", "Verona"],
    },
  },
];

export default function MarlitePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-[#0f172a] pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-2 text-white/70 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/wall-protection" className="hover:text-white transition-colors">Wall Protection</Link>
              <span>/</span>
              <span className="text-white">Marlite</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6">
              Marlite FRP Panels
            </h1>
            <p className="text-xl text-white/80 max-w-2xl font-normal leading-relaxed">
              Industry-leading fiberglass reinforced plastic panels with exceptional durability, 
              moisture resistance, and a wide range of finishes for any commercial application.
            </p>
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
                    
                    {product.options.colors && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-3">Pebbled Surface Colors</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.options.colors.map((color) => (
                            <span key={color} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                              {color}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.options.smoothColors && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-3">Smooth Surface Colors</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.options.smoothColors.map((color) => (
                            <span key={color} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                              {color}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.options.sizes && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-3">Available Sizes</h4>
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
                        <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-3">Finish Types</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.options.finishes.map((finish) => (
                            <span key={finish} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                              {finish}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.options.styles && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-3">Available Styles</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.options.styles.map((style) => (
                            <span key={style} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                              {style}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.options.woodgrains && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-3">Woodgrain Options</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.options.woodgrains.map((wood) => (
                            <span key={wood} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                              {wood}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.options.feature && (
                      <div className="mt-6 p-4 bg-[#0f172a]/5 rounded-lg">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium text-[#0f172a]">Key Feature:</span> {product.options.feature}
                        </p>
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
              Ready to discuss your Marlite FRP project?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 font-normal">
              Our team can help you select the right Marlite product for your application. 
              Get a free consultation and quote today.
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
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
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
                { name: "Crane Composites", href: "/wall-protection/manufacturers/crane-composites" },
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
