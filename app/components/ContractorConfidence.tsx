import Image from "next/image";
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
    <section className="section-shell-lg section-shell-dark grain-overlay relative isolate overflow-hidden border-t border-white/5 bg-[#10233F]">
      <Image
        src="/actualphotos/5.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-0 hidden object-cover object-center filter-[saturate(0.88)_brightness(0.82)] md:block"
      />
      <div className="pointer-events-none absolute inset-0 z-1 bg-linear-to-r from-[#005EB8]/84 via-[#0d6fc7]/66 to-[#64A70B]/58" />
      <div className="pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(90deg,rgba(7,21,34,0.78)_0%,rgba(7,21,34,0.58)_48%,rgba(7,21,34,0.28)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-1 bg-linear-to-b from-[#071522]/32 via-transparent to-[#071522]/58" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <span className="eyebrow">Why Contractors Choose Us</span>
          <h2 className="section-title section-title-dark mb-5 [text-shadow:_0_3px_18px_rgb(7_21_34_/_0.5)]">
            A specialist subcontractor, not a generic panel installer
          </h2>
          <p className="section-lead section-lead-dark mx-auto [text-shadow:_0_2px_14px_rgb(7_21_34_/_0.42)]">
            The website brief calls for construction-partner credibility, and that is where we are strongest. We help teams select the right system, coordinate documentation, and deliver installation scopes that hold up in healthcare and institutional environments.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-start">
          <div className="reveal sticky-side">
            <div className="mb-8 border-y border-white/10">
              {workflow.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-white/10 py-4 text-left last:border-b-0"
                >
                  <span className="mt-0.5 w-7 shrink-0 text-xs font-semibold tracking-[0.16em] text-[#9BCB4A] tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="min-w-0 text-sm font-medium leading-relaxed text-white/88 [text-shadow:_0_2px_12px_rgb(7_21_34_/_0.38)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="max-md:flex max-md:justify-center md:block">
              <Link
                href="/pre-construction"
                className="inline-flex items-center gap-2 font-medium text-[#9BCB4A] transition-all hover:gap-3 hover:text-white"
              >
                See how we support projects early
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {deliveryPoints.map((item) => (
              <div key={item.title} className="border-t border-white/12 pt-5 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center sm:text-left">
                <div className="mb-4 text-[#9BCB4A] max-sm:flex max-sm:justify-center">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-white/82 leading-relaxed [text-shadow:_0_2px_12px_rgb(7_21_34_/_0.35)]">
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
