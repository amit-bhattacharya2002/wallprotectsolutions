import Image from "next/image";
import Link from "next/link";

const partners = ["Construction Specialties", "Altro", "Inpro", "Panolam", "Marlite", "Valto"];
const lilyDtesImages = [
  {
    src: "/actualphotos/lily-dtes-lounge.png",
    alt: "Lily's DTES Health Centre waiting area with feature wall and seating",
  },
  {
    src: "/actualphotos/lily-dtes-feature-wall.png",
    alt: "Lily's DTES Health Centre glass feature wall and stairwell",
  },
  {
    src: "/actualphotos/lily-dtes-corridor.png",
    alt: "Lily's DTES Health Centre clinical corridor with wall protection",
  },
];

export default function FeaturedHealthcareProject() {
  return (
    <section className="section-shell-lg section-shell-dark grain-overlay bg-[#2a4663]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal mx-auto mb-10 max-w-4xl text-center">
          <span className="eyebrow">Signature Project</span>
          <h2 className="section-title section-title-dark mb-5">
            Lily&apos;s DTES Health Centre
          </h2>
          <p className="section-lead section-lead-dark mx-auto">
            Our largest single healthcare interior protection package to date — approximately $550,000 in wall protection, hygienic cladding, and architectural specialties for a full health centre build-out in Vancouver&apos;s Downtown Eastside.
          </p>
        </div>

        <div className="mb-10 grid gap-4 lg:grid-cols-[1.45fr_0.55fr]">
          <div className="overflow-hidden rounded-3xl shadow-[0_34px_90px_-44px_rgba(0,0,0,0.7)]">
            <Image
              src={lilyDtesImages[0].src}
              alt={lilyDtesImages[0].alt}
              width={1400}
              height={900}
              loading="eager"
              className="aspect-video w-full object-cover filter-[saturate(0.92)_brightness(0.98)]"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {lilyDtesImages.slice(1).map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-[1.25rem] shadow-[0_26px_70px_-46px_rgba(0,0,0,0.7)]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={620}
                  loading="eager"
                  className="aspect-video w-full object-cover filter-[saturate(0.92)_brightness(0.98)] lg:aspect-16/10"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="py-8">
          {/* Full-bleed to viewport edges below lg: cancel max-w-7xl horizontal padding so
              snapshot dividers span the full content width on phone / stacked layouts. */}
          <div className="max-lg:-mx-6 max-lg:px-6 max-lg:text-center lg:mx-0 lg:px-0 lg:text-left">
            <div className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#5eead4]">
              Project Snapshot
            </div>
            <div className="grid w-full grid-cols-1 gap-x-8 gap-y-5 max-sm:justify-items-stretch sm:grid-cols-2 sm:justify-items-start">
              {[
                { label: "Project Value", value: "~$550K" },
                { label: "Scope", value: "Full Interior Protection" },
                { label: "Systems", value: "Altro Whiterock, FRP, Wall Protection" },
                { label: "Location", value: "Vancouver, BC" },
              ].map((stat) => (
                <div key={stat.label} className="w-full border-t border-white/12 pt-4">
                  <div className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/40">{stat.label}</div>
                  <div className="text-base font-semibold leading-snug text-white">{stat.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-7 max-lg:flex max-lg:justify-center lg:block">
              <Link
                href="/healthcare"
                className="inline-flex items-center gap-2 border-b border-[#5eead4]/50 pb-1 text-sm font-semibold text-[#5eead4] transition-all hover:gap-3 hover:border-[#5eead4]"
              >
                View healthcare experience
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Manufacturer partners bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 max-lg:items-center max-lg:text-center lg:flex-row lg:items-center lg:text-left">
          <p className="shrink-0 text-xs font-medium uppercase tracking-wider text-white/30">Key manufacturer partners</p>
          <div className="flex flex-1 flex-wrap justify-center gap-x-6 gap-y-2 text-center lg:justify-start lg:text-left">
            {partners.map((name, i) => (
              <span key={name} className="text-sm text-white/50 font-medium">
                {name}{i < partners.length - 1 && <span className="ml-6 text-white/20">·</span>}
              </span>
            ))}
          </div>
          <Link href="/manufacturers" className="shrink-0 text-xs font-medium text-[#5eead4] transition-colors hover:text-[#0d9488] max-lg:mx-auto lg:ml-auto">
            All partners →
          </Link>
        </div>
      </div>
    </section>
  );
}
