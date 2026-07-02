import Image from "next/image";
import Link from "next/link";
import ManufacturerLogoStrip from "./ManufacturerLogoStrip";

const manufacturers = [
  {
    name: "Construction Specialties",
    logoSrc: "/cs.png",
    useCase: "Impact protection",
    note: "Acrovyn sheets, crash rails, corner guards, handrails, door protection",
    href: "/manufacturers",
  },
  {
    name: "Altro",
    logoSrc: "/altro.webp",
    useCase: "Hygienic cladding",
    note: "Whiterock welded hygienic systems and Puraguard panel systems",
    href: "/manufacturers",
  },
  {
    name: "Inpro",
    logoSrc: "/inpro.jpg",
    useCase: "Corridor protection",
    note: "Wall protection, door protection, corridor systems, and Aspex graphics",
    href: "/manufacturers",
  },
  {
    name: "Panolam",
    logoSrc: "/panolam.png",
    useCase: "FRL / decorative",
    note: "FRL decorative wall systems and healthcare corridor finishes",
    href: "/wall-protection/manufacturers/panolam",
  },
  {
    name: "Marlite",
    logoSrc: "/marlite.png",
    useCase: "FRP / hybrid panels",
    note: "Traditional FRP, Induro, Symmetrix, and decorative hybrid panels",
    href: "/wall-protection/manufacturers/marlite",
  },
  {
    name: "Valto",
    logoSrc: "/valto.png",
    useCase: "FRP systems",
    note: "Glasbord FRP and Varietex decorative wall systems",
    href: "/wall-protection/manufacturers/crane-composites",
  },
];

export default function ManufacturerStrip() {
  return (
    <section className="section-shell bg-[#f8fafc] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Logo row sits directly beneath the section heading so visitors get
             a quick visual roll-call of partners before the detail cards. */}
        <div className="mb-12 text-center lg:mb-14 reveal">
          <span className="eyebrow">Manufacturer Depth</span>
          <h2 className="section-title mx-auto mb-6 max-w-4xl">
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
            <div className="mb-6 overflow-hidden rounded-[1.25rem] bg-white shadow-[0_22px_60px_-38px_rgba(15,23,42,0.35)]">
              <Image
                src="/actualphotos/3.jpg"
                alt="Healthcare corridor prepared for coordinated wall protection scope"
                width={900}
                height={1125}
                className="aspect-4/3 w-full object-cover"
              />
            </div>
            <p className="section-lead mb-6">
              We regularly work with products from leading manufacturers including Construction Specialties, Altro, Inpro, Panolam, Marlite, and others. The goal is not to push one brand everywhere. It is to choose the right system for the application, specification, budget, and maintenance conditions.
            </p>
          </div>
          <div className="overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white shadow-[0_22px_60px_-42px_rgba(15,23,42,0.28)]">
            <div className="grid border-b border-slate-200 bg-[#f8fafc] px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 md:grid-cols-[0.85fr_0.8fr_1.35fr] lg:px-6">
              <span>Manufacturer</span>
              <span className="hidden md:block">Best fit</span>
              <span className="hidden md:block">Typical scope</span>
            </div>
            {manufacturers.map((m, index) => (
              <Link key={m.name} href={m.href} className="grid gap-4 border-b border-slate-200 px-5 py-5 transition-colors last:border-b-0 hover:bg-[#f8fafc] md:grid-cols-[0.85fr_0.8fr_1.35fr] md:items-center lg:px-6">
                <div className="flex h-11 items-center md:h-12">
                  <div className="relative h-full w-full">
                    <Image
                      src={m.logoSrc}
                      alt={`${m.name} logo`}
                      fill
                      sizes="(min-width: 1280px) 180px, (min-width: 640px) 40vw, 90vw"
                      priority={index < 3}
                      loading={index < 3 ? "eager" : "lazy"}
                      className="object-contain object-center saturate-[0.92] contrast-[1.02]"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4f8f16] md:hidden">Best fit</div>
                  <div className="text-sm font-semibold text-[#0f172a]">{m.useCase}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4f8f16] md:hidden">Typical scope</div>
                  <div className="text-sm leading-relaxed text-gray-500">{m.note}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 border-y border-slate-200 py-7 lg:mt-12 lg:py-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64A70B]">
              What this means for project teams
            </div>
            <Link href="/manufacturers" className="inline-flex items-center gap-1.5 text-[#64A70B] text-sm font-medium hover:gap-2 transition-all">
              View manufacturer partners
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <ul className="grid gap-5 text-sm text-gray-600 md:grid-cols-3 md:divide-x md:divide-slate-200">
            {[
              "Better alternates and value-engineering options when lead times or budgets tighten",
              "System selection driven by application suitability rather than catalogue preference",
              "Cleaner coordination across wall protection, hygienic systems, FRP/FRL, and Division 10 scopes",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 md:pr-6 md:last:pr-0 md:not-first:pl-6">
                <svg className="w-4 h-4 text-[#64A70B] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
