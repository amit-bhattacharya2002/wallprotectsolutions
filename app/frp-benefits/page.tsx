import Link from "next/link";
import { Header, Footer } from "@/app/components";
import { frpBenefits } from "@/app/data/frp-benefits";

export const metadata = {
  title: "Why FRP? Benefits of FRP Panels | FRP Installations",
  description: "Discover the benefits of FRP panels: cost effective, corrosion resistant, impact resistant, lightweight, high strength, flexible, and more.",
};

// Icon components
const icons: Record<string, React.ReactNode> = {
  dollar: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  impact: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  feather: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5" />
    </svg>
  ),
  strength: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
    </svg>
  ),
  flex: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  temperature: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  bolt: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
};

export default function FRPBenefitsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-[#0f172a] pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-2 text-white/70 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Why FRP?</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6">
              Why FRP?
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl font-normal leading-relaxed">
              Discover why FRP (Fiberglass Reinforced Plastic) panels are the preferred choice 
              for wall protection in commercial, industrial, and healthcare applications.
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {frpBenefits.map((benefit, index) => (
                <Link
                  key={benefit.slug}
                  href={`/frp-benefits/${benefit.slug}`}
                  className="group p-8 bg-[#f8fafc] rounded-2xl border border-gray-100 hover:border-[#f97316] hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-[#f97316] mb-6 group-hover:scale-110 transition-transform">
                    {icons[benefit.icon]}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-3 group-hover:text-[#f97316] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 font-normal leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[#f97316] group-hover:gap-3 transition-all">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                  Ready to experience the benefits of FRP?
                </h2>
                <p className="text-white/80 font-normal mb-8 leading-relaxed">
                  Our team can help you select the right FRP products for your specific application. 
                  We provide free on-site consultations and measurements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center gap-3 bg-white text-[#0f172a] px-8 py-4 rounded-full font-medium hover:bg-[#f97316] hover:text-white transition-all"
                  >
                    Get a Free Quote
                  </Link>
                  <Link
                    href="/wall-protection"
                    className="inline-flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all"
                  >
                    View Products
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">8</div>
                  <div className="text-white/80 text-sm">Key Benefits</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">5+</div>
                  <div className="text-white/80 text-sm">Manufacturers</div>
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
        </section>
      </main>
      <Footer />
    </>
  );
}
