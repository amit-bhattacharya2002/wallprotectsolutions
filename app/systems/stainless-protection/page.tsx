import { Header, Footer } from "@/app/components";
import Link from "next/link";

export const metadata = {
  title: "Stainless Protection | FRP Installations Inc. | Wall Protection Solutions",
  description: "Custom-fabricated stainless steel corner protection, wall end caps, and wall cladding for food processing, commercial kitchens, and industrial environments across BC.",
};

const products = ["Stainless steel corner protection", "Stainless wall end caps", "Stainless wall cladding panels", "Custom stainless fabrication to specification"];
const applications = ["Industrial food processing facilities", "Commercial kitchens with harsh chemical washdown", "Environments requiring premium metal aesthetic", "Spaces where plastic wall protection systems are not appropriate", "Agricultural processing facilities"];

export default function StainlessProtectionPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-dvh bg-[#0f172a] pt-32 pb-20 lg:pt-40 lg:pb-28 flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-left">
            <div className="grid lg:grid-cols-[1fr_260px] gap-12 lg:gap-16 items-center">
              <div>
                <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  <span>/</span>
                  <Link href="/systems" className="hover:text-white transition-colors">Systems</Link>
                  <span>/</span>
                  <span className="text-white">Stainless Protection</span>
                </div>
                <p className="text-[#0d9488] text-sm font-medium uppercase tracking-wider mb-4">Stainless Protection</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 max-w-3xl">
                  Custom stainless steel wall protection
                </h1>
                <p className="text-lg text-white/80 max-w-2xl font-normal leading-relaxed">
                  Custom-fabricated stainless corner protection, wall end caps, and wall cladding for food processing, commercial kitchens, and environments where plastic wall protection systems are not appropriate.
                </p>
              </div>
              {/* Right: quick links */}
              <div className="hidden lg:block">
                <p className="text-xs font-medium text-white/30 uppercase tracking-wider mb-3">
                  Related systems
                </p>
                <div className="space-y-0.5">
                  <Link href="/systems/wall-protection" className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all group">
                    Wall Protection Systems
                    <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/systems/frp-wall-systems" className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all group">
                    FRP Wall Systems
                    <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/systems" className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all group">
                    All Systems
                    <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/quote" className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all group">
                    Get a Quote
                    <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <span className="text-sm font-medium text-[#0d9488] tracking-wider uppercase mb-4 block">Products</span>
                <h2 className="text-3xl font-semibold text-[#0f172a] tracking-tight mb-6">Custom local fabrication</h2>
                <p className="text-gray-600 leading-relaxed font-normal mb-8">Stainless steel wall protection is fabricated locally to specification. Smaller volume than our plastic wall protection and hygienic cladding work, but an important capability signal — and often part of a larger wall protection scope.</p>
                <div className="space-y-3">
                  {products.map((p) => (
                    <div key={p} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#0d9488] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-[#0d9488] tracking-wider uppercase mb-4 block">Applications</span>
                <h2 className="text-3xl font-semibold text-[#0f172a] tracking-tight mb-6">When stainless is the right choice</h2>
                <div className="space-y-3">
                  {applications.map((app) => (
                    <div key={app} className="flex items-start gap-3 bg-[#f8fafc] border border-gray-100 rounded-xl px-5 py-3">
                      <div className="w-2 h-2 rounded-full bg-[#0d9488] flex-shrink-0 mt-1.5" />
                      <span className="text-gray-700 text-sm">{app}</span>
                    </div>
                  ))}
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
