import { Header, Footer } from "@/app/components";
import Link from "next/link";

export const metadata = {
  title: "PVC Liner Systems | FRP Installations Inc. | Wall Protection Solutions",
  description: "Supply and installation of direct-to-stud PVC liner panel systems from Octaform, Clean 16, EZ Liner, AG-Tuf, and DelPro for industrial, agricultural, and washdown environments across BC.",
};

const manufacturers = ["Octaform — direct-to-stud PVC liner systems", "Clean 16 — PVC liner panel systems", "EZ Liner — PVC liner panel systems", "AG-Tuf — PVC liner panel systems", "DelPro — PVC liner panel systems"];

const applications = ["Agricultural barns and livestock facilities", "Food processing plants and packing facilities", "Commercial car washes", "Industrial utility and maintenance spaces", "Brewery and winery production areas", "Washdown and sanitation-intensive environments"];

export default function PVCLinerPage() {
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
                  <span className="text-white">PVC Liner Systems</span>
                </div>
                <p className="text-[#0d9488] text-sm font-medium uppercase tracking-wider mb-4">PVC Liner Systems</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 max-w-3xl">
                  PVC structural liner systems for industrial and agricultural environments
                </h1>
                <p className="text-lg text-white/80 max-w-2xl font-normal leading-relaxed">
                  Direct-to-stud PVC liner panels for washdown, industrial, and food processing environments where a seamless, durable, cleanable wall surface is required.
                </p>
              </div>
              {/* Right: quick links */}
              <div className="hidden lg:block">
                <p className="text-xs font-medium text-white/30 uppercase tracking-wider mb-3">
                  Related systems
                </p>
                <div className="space-y-0.5">
                  <Link href="/systems/frp-wall-systems" className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all group">
                    FRP Wall Systems
                    <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/systems/wet-wall" className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all group">
                    Wet Wall Systems
                    <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/systems/stainless-protection" className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all group">
                    Stainless Protection
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
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <span className="text-sm font-medium text-[#0d9488] tracking-wider uppercase mb-4 block">Manufacturers</span>
                <h2 className="text-3xl font-semibold text-[#0f172a] tracking-tight mb-8">PVC liner manufacturers we work with</h2>
                <div className="space-y-3">
                  {manufacturers.map((m) => (
                    <div key={m} className="flex items-start gap-3 bg-[#f8fafc] border border-gray-100 rounded-xl px-5 py-3">
                      <div className="w-2 h-2 rounded-full bg-[#0d9488] flex-shrink-0 mt-1.5" />
                      <span className="text-gray-700 text-sm">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-[#0d9488] tracking-wider uppercase mb-4 block">Applications</span>
                <h2 className="text-3xl font-semibold text-[#0f172a] tracking-tight mb-8">Where PVC liner systems are used</h2>
                <div className="space-y-3">
                  {applications.map((app) => (
                    <div key={app} className="flex items-start gap-3 border border-gray-200 rounded-xl px-5 py-3">
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
