import { Header, Footer } from "@/app/components";
import Link from "next/link";

export const metadata = {
  title: "Wet Wall Systems | FRP Installations Inc. | Wall Protection Solutions",
  description: "Avonite Wet Walls — solid surface wet wall systems for healthcare washrooms, shower rooms, and wet areas. Installed at multiple UPCC clinics across BC.",
};

export default function WetWallPage() {
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
                  <span className="text-white">Wet Wall Systems</span>
                </div>
                <p className="text-[#0d9488] text-sm font-medium uppercase tracking-wider mb-4">Wet Wall Systems</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 max-w-3xl">
                  Solid surface wet wall systems for healthcare environments
                </h1>
                <p className="text-lg text-white/80 max-w-2xl font-normal leading-relaxed">
                  Avonite Wet Walls for healthcare washrooms, shower rooms, and wet areas requiring a seamless, waterproof, durable wall surface.
                </p>
              </div>
              {/* Right: quick links */}
              <div className="hidden lg:block">
                <p className="text-xs font-medium text-white/30 uppercase tracking-wider mb-3">
                  Related systems
                </p>
                <div className="space-y-0.5">
                  <Link href="/systems/hygienic-wall-cladding" className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all group">
                    Hygienic Wall Cladding
                    <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/systems/pvc-liner" className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all group">
                    PVC Liner Systems
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
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm font-medium text-[#0d9488] tracking-wider uppercase mb-4 block">Avonite Wet Walls</span>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">The right wet wall solution for healthcare washrooms</h2>
                <p className="text-gray-600 leading-relaxed font-normal mb-6">
                  Avonite Wet Walls is a solid surface wet wall system that provides a seamless, non-porous, fully waterproof wall surface for healthcare washrooms, shower rooms, and wet areas. We have installed Avonite Wet Walls at multiple UPCC clinics across BC, including all washrooms at Cloverdale UPCC.
                </p>
                <p className="text-gray-600 leading-relaxed font-normal mb-8">
                  For high infection-control classification wet areas, we recommend either Avonite Wet Walls or Altro Whiterock welded hygienic cladding — the right choice depending on the clinical requirement, budget, and transition details.
                </p>
                <div className="space-y-3">
                  {["Healthcare washrooms and shower rooms", "UPCC clinic washrooms", "Wet areas in clinical environments", "Spaces requiring fully waterproof, non-porous surfaces"].map((app) => (
                    <div key={app} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#0d9488] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#f8fafc] rounded-2xl p-8 lg:p-10 border border-gray-200">
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">Project Reference</div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-3">Cloverdale UPCC</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Avonite Wet Walls installed in all washrooms as part of the complete interior protection scope at Cloverdale UPCC — one of 16+ Urgent Primary Care Centres we have completed across BC.
                </p>
                <Link href="/healthcare" className="inline-flex items-center gap-2 text-[#0d9488] text-sm font-medium hover:gap-3 transition-all">
                  View healthcare experience
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
