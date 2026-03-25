import { Header, Footer } from "@/app/components";
import Link from "next/link";

export const metadata = {
  title: "FRL & Decorative Wall Systems | FRP Installations Inc. | Wall Protection Solutions",
  description: "Panolam FRL distributor — 400+ colours. Formica HardStop and Marlite decorative lines. FRL and decorative wall panels for healthcare corridors and institutional interiors across BC.",
};

const systems = [
  {
    name: "Panolam Surface Systems — FRL",
    relationship: "Distributor",
    description: "FRL (Fiberglass Reinforced Liner) wall panels in 400+ colours. A significant portion of our healthcare work uses Panolam FRL in corridors, reception areas, and public-facing spaces where a finished appearance is required alongside durability.",
    highlights: ["400+ colour options", "Approx. $200K in FRL in recent healthcare work", "Full distributor relationship — competitive pricing and availability"],
  },
  {
    name: "Formica HardStop",
    relationship: "Supplier",
    description: "HardStop FRL wall panels from Formica — an alternative FRL system for projects where Formica is specified or preferred.",
    highlights: ["FRL composite panel", "Alternative to Panolam for specified projects"],
  },
  {
    name: "Marlite Decorative Lines",
    relationship: "Supplier",
    description: "Marlite Induro (HPL-faced FRP), Symmetrix (tile appearance), and Artizan Max (decorative) for applications requiring a more architectural surface finish alongside FRP core properties.",
    highlights: ["Induro — HPL-faced, most affordable decorative option", "Symmetrix — tile appearance with Sani-coat sealer", "Artizan Max — custom finishes and swatch patterns"],
  },
  {
    name: "Graphic / Custom Wall Systems",
    relationship: "Multiple manufacturers",
    description: "For public-facing healthcare spaces where custom imagery or patterns are desired integrated into the wall protection system.",
    highlights: ["Acrovyn by Design (Construction Specialties)", "Inpro Aspex custom graphic system", "Valto Varietex decorative FRP line"],
  },
];

export default function FRLDecorativePage() {
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
                  <span className="text-white">FRL / Decorative Wall Systems</span>
                </div>
                <p className="text-[#0d9488] text-sm font-medium uppercase tracking-wider mb-4">FRL / Decorative Wall Systems</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 max-w-3xl">
                  FRL and decorative wall systems for healthcare and institutional interiors
                </h1>
                <p className="text-lg text-white/80 max-w-2xl font-normal leading-relaxed">
                  Panolam FRL distributor (400+ colours), Formica HardStop, and Marlite decorative lines — for healthcare corridors, reception areas, and institutional interiors where a finished appearance is required alongside impact and moisture resistance.
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
                  <Link href="/systems/wall-protection" className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all group">
                    Wall Protection Systems
                    <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/systems/hygienic-wall-cladding" className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all group">
                    Hygienic Wall Cladding
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
            <div className="max-w-3xl mb-14">
              <p className="text-gray-500 leading-relaxed font-normal text-base md:text-lg">
                FRL offers 400+ colour options and a significantly more finished appearance, while still retaining the durability of a fibre-reinforced core.
              </p>
            </div>
            <div className="space-y-12">
              {systems.map((system, index) => (
                <div key={system.name} className={`grid lg:grid-cols-2 gap-10 ${index > 0 ? "pt-12 border-t border-gray-200" : ""}`}>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-xl font-semibold text-[#0f172a]">{system.name}</h3>
                      <span className="px-3 py-1 bg-[#0d9488]/10 text-[#0d9488] text-xs font-medium rounded-full">{system.relationship}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed font-normal">{system.description}</p>
                  </div>
                  <div className="bg-[#f8fafc] rounded-xl p-6 border border-gray-100">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Key Points</div>
                    <ul className="space-y-3">
                      {system.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-[#0d9488] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 text-sm">{h}</span>
                        </li>
                      ))}
                    </ul>
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
