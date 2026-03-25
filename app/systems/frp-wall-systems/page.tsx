import { Header, Footer } from "@/app/components";
import Link from "next/link";

export const metadata = {
  title: "FRP Wall Systems | FRP Installations Inc. | Wall Protection Solutions",
  description: "Supply and installation of traditional and decorative FRP wall panels from Valto (Glasbord), Stabilit/Graham (Exceliner, Glasliner), Marlite, Panolam, and Nudo across British Columbia.",
};

const manufacturers = [
  {
    name: "Valto (formerly Crane Composites)",
    products: ["Glasbord — traditional FRP, industry standard", "Varietex — decorative FRP line with printed surface patterns"],
  },
  {
    name: "Stabilit / Graham",
    products: ["Exceliner and Glasliner", "White pebbled and white smooth — major volume products in healthcare", "Reliable Western Canada supply and cost-effective AHJ-friendly options"],
  },
  {
    name: "Marlite",
    products: ["Standard FRP", "Induro (HPL-faced FRP)", "Symmetrix FRP (tile appearance)", "Artizan Max (decorative)"],
  },
  {
    name: "Panolam Surface Systems",
    products: ["Traditional FRP wall panel options", "Also available as FRL — see FRL / Decorative Systems"],
  },
  {
    name: "Nudo",
    products: ["Traditional FRP wall panel products"],
  },
];

const applications = [
  "Healthcare support spaces — soiled utility, clean utility, janitor rooms",
  "Hospital kitchens and food preparation areas",
  "Patient washrooms and change rooms",
  "Commercial restaurant and food service kitchens",
  "Agricultural and food processing facilities",
  "Industrial utility and washdown spaces",
  "School cafeterias and food prep areas",
];

export default function FRPWallSystemsPage() {
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
                  <span className="text-white">FRP Wall Systems</span>
                </div>
                <p className="text-[#0d9488] text-sm font-medium uppercase tracking-wider mb-4">FRP Wall Systems</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 max-w-3xl">
                  Fiberglass Reinforced Plastic wall systems
                </h1>
                <p className="text-lg text-white/80 max-w-2xl font-normal leading-relaxed">
                  Traditional and decorative FRP wall panels for healthcare support spaces, food service, industrial, and utility environments. Multiple manufacturer options across all product types.
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
                  <Link href="/systems/frl-decorative" className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all group">
                    FRL / Decorative
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
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-8">FRP manufacturers we work with</h2>
                <div className="space-y-8">
                  {manufacturers.map((mfr) => (
                    <div key={mfr.name} className="border-l-2 border-[#0d9488] pl-6">
                      <h3 className="text-lg font-semibold text-[#0f172a] mb-3">{mfr.name}</h3>
                      <ul className="space-y-1.5">
                        {mfr.products.map((p) => (
                          <li key={p} className="text-gray-600 text-sm flex items-start gap-2">
                            <span className="text-[#0d9488] mt-1">—</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-[#0d9488] tracking-wider uppercase mb-4 block">Applications</span>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-8">Where FRP is commonly installed</h2>
                <div className="space-y-3">
                  {applications.map((app) => (
                    <div key={app} className="flex items-start gap-3 bg-[#f8fafc] border border-gray-100 rounded-xl px-5 py-3">
                      <div className="w-2 h-2 rounded-full bg-[#0d9488] flex-shrink-0 mt-1.5" />
                      <span className="text-gray-700 text-sm">{app}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-[#0f172a] rounded-xl">
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    Need something more decorative? FRL (Fiberglass Reinforced Liner) panels offer 400+ colour options and a significantly more finished appearance — still with the moisture and impact resistance of a fibre-reinforced core.
                  </p>
                  <Link href="/systems/frl-decorative" className="inline-flex items-center gap-2 text-[#0d9488] text-sm font-medium hover:gap-3 transition-all">
                    View FRL / Decorative Wall Systems
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
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
