import { Header, Footer } from "@/app/components";
import Link from "next/link";

export const metadata = {
  title: "Pre-Construction & Specification Support | FRP Installations Inc. | Wall Protection Solutions",
  description: "Wall protection specification support, value engineering, product selection, submittal preparation, and shop drawings for healthcare and institutional construction projects across BC.",
};

const services = [
  {
    title: "Product Selection & System Specification",
    description: "We help GCs, project managers, and design teams select the right wall protection system for each space — hygienic cladding level, wall protection type, FRP vs FRL, wet wall options. We assess infection-control classification, impact exposure, budget, and adjacent material transitions.",
  },
  {
    title: "Value Engineering",
    description: "Where a specified product is over or under-specified for the actual requirement, we propose appropriate alternates. Working with multiple manufacturers across every system category means our value-engineering options are genuine — not just a cheaper version of the same thing.",
  },
  {
    title: "Budget Pricing & Estimating Support",
    description: "We provide pre-construction budget pricing to help GCs assemble accurate estimates before design is finalized. The earlier we are involved, the more accurately we can forecast material and installation cost for the wall protection scope.",
  },
  {
    title: "Long-Lead Material Identification",
    description: "Hygienic wall systems, custom FRL colours, and some architectural specialty items can have extended lead times. We identify these early and provide procurement schedules to keep the installation window on track.",
  },
  {
    title: "Submittals & Shop Drawings",
    description: "We prepare complete submittal packages — product data sheets, samples, and shop drawings where required. We understand the submittal review and approval processes of healthcare projects and work with the project team to meet review timelines.",
  },
  {
    title: "Closeout Documentation",
    description: "Full closeout packages including warranty documentation, product data, as-built information, and maintenance instructions as required by the project specification.",
  },
];

const whenToInvolveUs = [
  { stage: "Schematic Design", value: "Review room-by-room system requirements; identify spaces where hygienic cladding level needs to be confirmed with infection control; flag long-lead items." },
  { stage: "Design Development", value: "Confirm system selections; review transition details to adjacent materials; begin value-engineering review if budget is a constraint." },
  { stage: "Construction Documents", value: "Review specifications; confirm products are correctly specified; identify any conflicts or coordination issues with adjacent trades." },
  { stage: "Tender / Bid Stage", value: "Provide competitive pricing; submit alternates or equals where appropriate; attend pre-tender meetings." },
  { stage: "Pre-Construction", value: "Finalize submittals, samples, and shop drawings; place long-lead material orders; confirm installation sequence and access requirements." },
];

export default function PreConstructionPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-dvh bg-[#0f172a] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-left">
            <div className="grid lg:grid-cols-[1fr_260px] gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-[#0d9488] text-sm font-medium uppercase tracking-wider mb-4">Pre-Construction & Specification Support</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 max-w-3xl">
                  Pre-construction and specification support
                </h1>
                <p className="text-lg text-white/80 max-w-2xl font-normal leading-relaxed">
                  We engage early — helping GCs, project managers, and design teams make the right wall protection and hygienic system decisions before they become problems on site.
                </p>
              </div>
              <div className="hidden lg:block">
                <p className="text-xs font-medium text-white/30 uppercase tracking-wider mb-3">
                  Services
                </p>
                <div className="space-y-0.5">
                  <Link href="/pre-construction" className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all group">
                    Product Selection
                    <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/pre-construction" className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all group">
                    Budget Pricing
                    <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/pre-construction" className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all group">
                    Submittal Packages
                    <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/pre-construction" className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all group">
                    Value Engineering
                    <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/contact" className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all group">
                    Contact Us
                    <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <span className="text-sm font-medium text-[#0d9488] tracking-wider uppercase mb-4 block">What We Provide</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-4">Pre-construction services</h2>
              <p className="text-gray-600 leading-relaxed font-normal">Our GC-level construction background means we understand the full project context — not just the wall protection scope. We engage as a construction partner, not just a subcontractor responding to a tender.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={service.title} className="p-8 border border-gray-200 rounded-xl hover:border-[#0d9488] transition-colors">
                  <div className="text-sm text-[#0d9488] font-medium mb-3">0{index + 1}</div>
                  <h3 className="text-lg font-semibold text-[#0f172a] mb-3">{service.title}</h3>
                  <p className="text-gray-600 font-normal leading-relaxed text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When to involve us */}
        <section className="py-20 lg:py-28 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <span className="text-sm font-medium text-[#0d9488] tracking-wider uppercase mb-4 block">Project Stages</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-4">When to involve us — and why</h2>
              <p className="text-gray-600 leading-relaxed font-normal">The earlier we are involved in a healthcare project, the more value we can add. Here is what we contribute at each project stage.</p>
            </div>
            <div className="space-y-4">
              {whenToInvolveUs.map((stage) => (
                <div key={stage.stage} className="grid md:grid-cols-4 gap-6 bg-white border border-gray-200 rounded-xl p-6 items-start">
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#0d9488]/10 text-[#0d9488] text-sm font-medium rounded-full">{stage.stage}</span>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-gray-600 text-sm leading-relaxed">{stage.value}</p>
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
