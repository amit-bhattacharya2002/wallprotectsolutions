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
    <section className="section-shell-lg section-shell-dark grain-overlay relative overflow-hidden border-b border-white/10 bg-[#0c1c32]">
      <Image
        src={lilyDtesImages[0].src}
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="object-cover object-center opacity-[0.78]"
      />
      <div className="absolute inset-0 bg-linear-to-r from-[#005EB8]/82 via-[#0d6fc7]/66 to-[#64A70B]/58" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,21,34,0.76)_0%,rgba(7,21,34,0.58)_48%,rgba(7,21,34,0.22)_100%)]" />
      <div className="absolute inset-0 bg-linear-to-b from-[#071522]/30 via-transparent to-[#071522]/56" />
      <div className="absolute inset-y-0 right-0 w-full bg-[linear-gradient(90deg,transparent_0%,rgba(7,21,34,0.14)_42%,rgba(7,21,34,0.42)_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-14">
          <div className="reveal lg:sticky lg:top-28">
            <span className="eyebrow">Featured Case Study</span>
            <h2 className="section-title section-title-dark mt-3 mb-5 [text-shadow:_0_3px_18px_rgb(7_21_34_/_0.48)]">
              Lily&apos;s DTES Health Centre
            </h2>
            <p className="section-lead section-lead-dark [text-shadow:_0_2px_14px_rgb(7_21_34_/_0.42)]">
              A full healthcare interior protection package in Vancouver&apos;s
              Downtown Eastside, combining hygienic wall cladding, FRP, wall
              protection, and architectural specialties under one coordinated
              scope.
            </p>

            <div className="mt-8 grid gap-4 border-y border-white/10 py-6 sm:grid-cols-2">
              {[
                { label: "Project Value", value: "~$550K" },
                { label: "Scope", value: "Full interior protection" },
                { label: "Systems", value: "Altro Whiterock, FRP, wall protection" },
                { label: "Location", value: "Vancouver, BC" },
              ].map((stat) => (
                <div key={stat.label} className="border-t border-white/10 pt-4 first:border-t-0 sm:[&:nth-child(-n+2)]:border-t-0">
                  <div className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/40">
                    {stat.label}
                  </div>
                  <div className="text-base font-semibold leading-snug text-white">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 border-l-2 border-[#64A70B] pl-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#9BCB4A]">
                Why it matters
              </p>
              <p className="mt-2 text-sm font-medium leading-6 text-white/84 [text-shadow:_0_2px_12px_rgb(7_21_34_/_0.42)]">
                This is the kind of project that signals premium capability:
                multi-system scope, healthcare expectations, and careful
                coordination with the broader construction team.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/healthcare"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#10233F] shadow-sm transition-colors hover:bg-[#9BCB4A]"
              >
                View healthcare experience
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="reveal reveal-stagger-1">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1rem] shadow-[0_34px_90px_-44px_rgba(0,0,0,0.7)]">
              <Image
                src={lilyDtesImages[0].src}
                alt={lilyDtesImages[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority
                className="object-cover object-center scale-[1.08] filter-[saturate(0.92)_brightness(0.98)]"
              />
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {lilyDtesImages.slice(1).map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-[16/10] overflow-hidden rounded-[0.875rem] shadow-[0_26px_70px_-46px_rgba(0,0,0,0.7)]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 28vw"
                    loading="eager"
                    className="object-cover object-center scale-[1.08] filter-[saturate(0.92)_brightness(0.98)]"
                  />
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
              {[
                "Healthcare build-out",
                "Multi-manufacturer package",
                "Coordinated supply & install",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-white/72">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#64A70B]" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
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
          <Link href="/manufacturers" className="shrink-0 text-xs font-medium text-[#9BCB4A] transition-colors hover:text-white max-lg:mx-auto lg:ml-auto">
            All partners →
          </Link>
        </div>
      </div>
    </section>
  );
}
