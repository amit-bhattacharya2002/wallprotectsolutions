import Image from "next/image";
import Link from "next/link";
import ManufacturerLogoStrip from "./ManufacturerLogoStrip";

const manufacturers = [
  {
    name: "Construction Specialties",
    logoSrc: "/cs.png",
    note: "Acrovyn sheets, crash rails, corner guards, handrails, door protection",
  },
  {
    name: "Altro",
    logoSrc: "/altro.webp",
    note: "Whiterock welded hygienic systems and Puraguard panel systems",
  },
  {
    name: "Inpro",
    logoSrc: "/inpro.jpg",
    note: "Wall protection, door protection, corridor systems, and Aspex graphics",
  },
  {
    name: "Panolam",
    logoSrc: "/panolam.png",
    note: "FRL decorative wall systems and healthcare corridor finishes",
  },
  {
    name: "Marlite",
    logoSrc: "/marlite.png",
    note: "Traditional FRP, Induro, Symmetrix, and decorative hybrid panels",
  },
  {
    name: "Valto",
    logoSrc: "/valto.png",
    note: "Glasbord FRP and Varietex decorative wall systems",
  },
];

export default function ManufacturerStrip() {
  return (
    <section className="section-shell bg-[#f8fafc] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Logo row sits directly beneath the section heading so visitors get
             a quick visual roll-call of partners before the detail cards. */}
        <div className="mb-12 lg:mb-14 reveal">
          <span className="eyebrow">Manufacturer Depth</span>
          <h2 className="section-title mb-6">
            Strong manufacturer relationships, without product bias
          </h2>
          <ManufacturerLogoStrip
            items={[
              { name: "Construction Specialties" },
              { name: "Altro" },
              { name: "Inpro" },
              { name: "Panolam" },
              { name: "Marlite" },
              { name: "Valto" },
            ]}
          />
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          <div>
            <p className="section-lead mb-6">
              We regularly work with products from leading manufacturers including Construction Specialties, Altro, Inpro, Panolam, Marlite, and others. The goal is not to push one brand everywhere. It is to choose the right system for the application, specification, budget, and maintenance conditions.
            </p>
            <div className="surface-card-muted p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#134e4a] mb-3">
                What this means for project teams
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Better alternates and value-engineering options when lead times or budgets tighten",
                  "System selection driven by application suitability rather than catalogue preference",
                  "Cleaner coordination across wall protection, hygienic systems, FRP/FRL, and Division 10 scopes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[#134e4a] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/manufacturers" className="inline-flex items-center gap-1.5 text-[#134e4a] text-sm font-medium mt-6 hover:gap-2 transition-all">
              View manufacturer partners
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {manufacturers.map((m) => (
              <div key={m.name} className="surface-card p-5 lg:p-6">
                <div className="mb-4 flex h-12 items-center rounded-lg bg-white px-3 sm:h-14">
                  <div className="relative h-full w-full">
                    <Image
                      src={m.logoSrc}
                      alt={`${m.name} logo`}
                      fill
                      sizes="(min-width: 1280px) 180px, (min-width: 640px) 40vw, 90vw"
                      className="object-contain object-center saturate-[0.92] contrast-[1.02]"
                    />
                  </div>
                </div>
                <div className="text-base font-semibold text-[#0f172a] leading-tight mb-2">{m.name}</div>
                <div className="text-sm text-gray-500 leading-relaxed">{m.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
