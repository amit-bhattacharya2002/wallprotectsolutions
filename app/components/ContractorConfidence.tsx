import Link from "next/link";

const deliveryPoints = [
  {
    title: "Supply and install accountability",
    description: "We do not take labour-only contracts. We control product, procurement, installation quality, and warranty alignment as one coordinated scope.",
  },
  {
    title: "Healthcare-heavy project experience",
    description: "More than 75% of our work is in healthcare and institutional environments, including 16+ UPCC clinics and major hospital projects across BC.",
  },
  {
    title: "Pre-construction depth",
    description: "We help with specification alignment, alternates, value engineering, procurement planning, submittals, and transition coordination before site becomes reactive.",
  },
  {
    title: "Product-neutral recommendations",
    description: "We work across wall protection, hygienic cladding, FRP, FRL, wet wall, stainless, and Division 10 systems to match the right product to the application.",
  },
];

const workflow = [
  "Budget pricing and scope clarification during tender",
  "Product selection based on application, specification, and long-term maintenance",
  "Submittals, samples, shop drawings, and manufacturer coordination",
  "Disciplined field execution in active healthcare and institutional environments",
];

export default function ContractorConfidence() {
  return (
    <section className="section-shell-lg section-shell-dark bg-[#0f172a] border-t border-white/5">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-start">
          <div>
            <span className="eyebrow">Why Contractors Choose Us</span>
            <h2 className="section-title section-title-dark mb-5">
              A specialist subcontractor, not a generic panel installer
            </h2>
            <p className="section-lead section-lead-dark mb-8">
              The website brief calls for construction-partner credibility, and that is where we are strongest. We help teams select the right system, coordinate documentation, and deliver installation scopes that hold up in healthcare and institutional environments.
            </p>

            <div className="space-y-3 mb-8">
              {workflow.map((item, index) => (
                <div
                  key={item}
                  className="surface-card-dark flex items-start gap-4 px-5 py-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0d9488]/20 text-sm font-semibold text-[#5eead4]">
                    {index + 1}
                  </span>
                  <p className="text-sm text-white/76 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/pre-construction"
              className="inline-flex items-center gap-2 text-[#5eead4] font-medium hover:gap-3 transition-all"
            >
              See how we support projects early
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {deliveryPoints.map((item) => (
              <div key={item.title} className="surface-card-dark p-6 lg:p-7">
                <div className="w-10 h-10 rounded-2xl bg-[#0d9488]/18 text-[#5eead4] flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-white/68 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
