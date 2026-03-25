import { Header, Footer } from "@/app/components";
import Link from "next/link";

export const metadata = {
  title: "Hygienic Wall Cladding | FRP Installations Inc. | Wall Protection Solutions",
  description: "Altro-trained and approved installer for Whiterock seamless hygienic wall systems. Also supply and install True North and AM-Clad. Healthcare hygienic cladding across British Columbia.",
};

const systems = [
  {
    name: "Altro Whiterock",
    type: "Welded seamless hygienic system",
    relationship: "Altro-trained & approved installer",
    description: "Fully welded seams, thermoformed corners — a completely seamless, crevice-free hygienic wall surface. The benchmark system for high infection-control classification spaces.",
    usedWhen: [
      "Procedure rooms and OR-adjacent corridors",
      "Autopsy and mortuary spaces",
      "High infection-control classification areas",
      "Hospital washrooms requiring seamless waterproofing",
      "Spaces where crevice-free surfaces are mandated by infection control",
    ],
    note: "We completed manufacturer training in Toronto. Manufacturer support and technical guidance available on all Altro Whiterock projects.",
  },
  {
    name: "Altro Puraguard",
    type: "Trim-finished hygienic panel system",
    relationship: "Altro-trained & approved installer",
    description: "Trim-finished hygienic panel system for areas with moderate hygienic requirements. Does not require welding — faster to install and more cost-effective than Whiterock.",
    usedWhen: [
      "Patient rooms and staff areas",
      "Waiting areas and reception",
      "Lower-risk clinical support spaces",
      "Areas where a trim finish is acceptable",
    ],
    note: "Significantly more cost-effective than a fully welded system. Appropriate where the infection-control classification does not require seamless surfaces.",
  },
  {
    name: "True North Premium Wall Cladding",
    type: "Weldable & thermoformable hygienic system",
    relationship: "Supplier",
    description: "Performance is very similar to Altro Whiterock. Less expensive and more open-market than Altro — a genuine alternate where budget is a constraint and the performance requirement is the same.",
    usedWhen: [
      "Projects where Altro Whiterock performance is required but cost is a constraint",
      "Applications where an open-market alternate is acceptable",
    ],
    note: "A strong value-engineering option where the specification allows an approved equal to Altro Whiterock.",
  },
  {
    name: "AM-Clad",
    type: "Weldable & thermoformable hygienic system",
    relationship: "Approved installer",
    description: "Similar in performance to Altro Whiterock. Less expensive option for projects where budget is a primary driver and the performance requirement can be met by an alternate system.",
    usedWhen: [
      "Budget-driven alternates where weldable performance is required",
    ],
    note: null,
  },
];

export default function HygienicWallCladdingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
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
                  <span className="text-white">Hygienic Wall Cladding</span>
                </div>
                <p className="text-[#0d9488] text-sm font-medium uppercase tracking-wider mb-4">Hygienic Wall Cladding</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 max-w-3xl">
                  Hygienic wall cladding for healthcare environments
                </h1>
                <p className="text-lg text-white/80 max-w-2xl font-normal leading-relaxed">
                  Altro-trained and approved installer for Whiterock and Puraguard. Also supply and install True North and AM-Clad weldable systems. We help specify the right level of system for each clinical space.
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
                  <Link href="/systems/wet-wall" className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all group">
                    Wet Wall Systems
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

        {/* Systems */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <span className="text-sm font-medium text-[#0d9488] tracking-wider uppercase mb-4 block">Systems We Install</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-4">Four hygienic cladding systems — matched to the requirement</h2>
              <p className="text-gray-500 leading-relaxed font-normal text-base md:text-lg">
                Not every healthcare space needs a fully welded seamless system. We help match the right hygienic level to each space, avoiding both overspecification and underspecification.
              </p>
            </div>
            <div className="space-y-12">
              {systems.map((system, index) => (
                <div key={system.name} className={`grid lg:grid-cols-2 gap-10 ${index > 0 ? "pt-12 border-t border-gray-200" : ""}`}>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-semibold text-[#0f172a]">{system.name}</h3>
                      <span className="px-3 py-1 bg-[#0d9488]/10 text-[#0d9488] text-xs font-medium rounded-full">{system.relationship}</span>
                    </div>
                    <p className="text-gray-500 text-sm font-medium mb-3">{system.type}</p>
                    <p className="text-gray-600 leading-relaxed font-normal mb-6">{system.description}</p>
                    {system.note && (
                      <div className="p-4 bg-[#f8fafc] border border-gray-100 rounded-xl">
                        <p className="text-gray-600 text-sm leading-relaxed">{system.note}</p>
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#0f172a] uppercase tracking-wider mb-4">Used when:</div>
                    <ul className="space-y-3">
                      {system.usedWhen.map((use) => (
                        <li key={use} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-[#0d9488] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 text-sm">{use}</span>
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
