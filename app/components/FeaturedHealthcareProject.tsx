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

        <div className="grid gap-10 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
          <div>
            <div className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#5eead4]">
              Project Snapshot
            </div>
            <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {[
                { label: "Project Value", value: "~$550K" },
                { label: "Scope", value: "Full Interior Protection" },
                { label: "Systems", value: "Altro Whiterock, FRP, Wall Protection" },
                { label: "Location", value: "Vancouver, BC" },
              ].map((stat) => (
                <div key={stat.label} className="border-t border-white/12 pt-4">
                  <div className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/40">{stat.label}</div>
                  <div className="text-base font-semibold leading-snug text-white">{stat.value}</div>
                </div>
              ))}
            </div>
            <Link
              href="/healthcare"
              className="mt-7 inline-flex items-center gap-2 border-b border-[#5eead4]/50 pb-1 text-sm font-semibold text-[#5eead4] transition-all hover:gap-3 hover:border-[#5eead4]"
            >
              View healthcare experience
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {[
              {
                value: "16+",
                label: "UPCC Clinics Completed",
                description: "High-specification hygienic systems coordinated with health authority teams.",
              },
              {
                value: "75%+",
                label: "Healthcare Portfolio",
                description: "Healthcare and institutional environments are the core of our annual work.",
              },
              {
                value: "700+",
                label: "Projects Across BC",
                description: "Completed work across Vancouver Island, the Lower Mainland, the Interior, and Northern BC.",
              },
            ].map((proof) => (
              <div key={proof.label} className="border-t border-white/12 pt-5">
                <div className="mb-2 text-4xl font-semibold tracking-tight text-white">{proof.value}</div>
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#5eead4]">{proof.label}</div>
                <p className="text-sm leading-6 text-white/62">{proof.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Manufacturer partners bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="text-xs font-medium text-white/30 uppercase tracking-wider shrink-0">Key manufacturer partners</p>
          <div className="flex flex-1 flex-wrap justify-center gap-x-6 gap-y-2 text-center">
            {partners.map((name, i) => (
              <span key={name} className="text-sm text-white/50 font-medium">
                {name}{i < partners.length - 1 && <span className="ml-6 text-white/20">·</span>}
              </span>
            ))}
          </div>
          <Link href="/manufacturers" className="text-xs text-[#5eead4] font-medium hover:text-[#0d9488] transition-colors sm:ml-auto shrink-0">
            All partners →
          </Link>
        </div>
      </div>
    </section>
  );
}
