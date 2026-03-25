import { Header, Footer } from "@/app/components";
import Link from "next/link";
import { industries } from "@/app/data/industries";

export const metadata = {
  title: "Industries Served | FRP Installations Inc. | Wall Protection Solutions",
  description: "Healthcare, education, food service, commercial, and industrial wall protection across British Columbia. 75%+ healthcare focus. 700+ projects completed.",
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-dvh bg-[#0f172a] pt-32 pb-20 lg:pt-40 lg:pb-28 flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-left">
            <div className="grid lg:grid-cols-[1fr_260px] gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-[#0d9488] text-sm font-medium uppercase tracking-wider mb-4">Industries</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 max-w-3xl">
                  Industries served
                </h1>
                <p className="text-lg text-white/80 max-w-2xl font-normal leading-relaxed">
                  Healthcare is the core of our business — 75%+ of our work. We also serve education, food service, commercial, and industrial sectors across British Columbia.
                </p>
              </div>
              {/* Right: quick links */}
              <div className="hidden lg:block">
                <p className="text-xs font-medium text-white/30 uppercase tracking-wider mb-3">
                  Industries
                </p>
                <div className="space-y-0.5">
                  <Link href="/healthcare" className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all group">
                    Healthcare
                    <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/industries" className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all group">
                    Education
                    <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/industries" className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all group">
                    Food Service
                    <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/industries" className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all group">
                    Commercial
                    <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/industries" className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all group">
                    Industrial
                    <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/systems" className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all group">
                    View all systems
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
            <div className="space-y-12">
              {industries.map((industry, index) => (
                <div key={industry.slug} className={`grid lg:grid-cols-2 gap-12 items-start ${index > 0 ? "pt-12 border-t border-gray-200" : ""}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-2xl md:text-3xl font-semibold text-[#0f172a] tracking-tight">{industry.name}</h2>
                      {industry.primary && (
                        <span className="px-3 py-1 bg-[#0d9488]/10 text-[#0d9488] text-xs font-medium rounded-full">Primary Focus</span>
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed font-normal mb-6">{industry.description}</p>
                    {industry.slug === "healthcare" && (
                      <Link href="/healthcare" className="inline-flex items-center gap-2 text-[#0d9488] font-medium hover:gap-3 transition-all text-sm">
                        View healthcare experience
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Systems commonly installed</div>
                    <div className="flex flex-wrap gap-2">
                      {industry.systems.map((sys) => (
                        <span key={sys} className="px-4 py-2 bg-[#f8fafc] border border-gray-200 rounded-full text-sm text-gray-700 font-medium">
                          {sys}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
