import Image from "next/image";
import Link from "next/link";
import PlaceholderBadge from "./PlaceholderBadge";

const partners = ["Construction Specialties", "Altro", "Inpro", "Panolam", "Marlite", "Valto"];

export default function FeaturedHealthcareProject() {
  return (
    <section className="section-shell-lg section-shell-dark grain-overlay bg-[#2a4663]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: content
               NOTE: never wrap the column in `.reveal` — `.reveal` sets
               opacity:0 until the IntersectionObserver kicks in, which means
               any imagery nested inside (here, the feature photo) goes blank
               if the observer is slow or starved. Apply `.reveal` only to
               atomic text blocks. */}
          <div>
            <div className="reveal">
              <span className="eyebrow">Signature Project</span>
              <h2 className="section-title section-title-dark mb-6">
                Lily&apos;s DTES Health Centre
              </h2>
              <p className="section-lead section-lead-dark mb-8">
                Our largest single healthcare interior protection package to date — approximately $550,000 in wall protection, hygienic cladding, and architectural specialties for a full health centre build-out in Vancouver&apos;s Downtown Eastside. Delivered on schedule with complete submittal documentation.
              </p>
            </div>

            {/* 3:2 feature image sits above the stat cards. Locked aspect
                 ratio so swapping the source later is layout-stable. */}
            <div
              className="relative mb-8 overflow-hidden rounded-[1.25rem] shadow-[0_28px_80px_-38px_rgba(0,0,0,0.6)]"
              style={{ aspectRatio: "3/2" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1628372095387-017d1099fc19?auto=format&fit=crop&w=1800&q=80"
                alt="Hospital corridor with bed — representative placeholder for Lily’s DTES Health Centre"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                loading="eager"
                className="object-cover filter-[saturate(0.85)_brightness(0.97)]"
              />
              <PlaceholderBadge />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Project Value", value: "~$550K" },
                { label: "Scope", value: "Full Interior Protection" },
                { label: "Systems", value: "Altro Whiterock, FRP, Wall Protection" },
                { label: "Location", value: "Vancouver, BC" },
              ].map((stat) => (
                <div key={stat.label} className="surface-card-dark p-4">
                  <div className="text-xs text-white/50 uppercase tracking-wider mb-1">{stat.label}</div>
                  <div className="text-sm font-semibold text-white">{stat.value}</div>
                </div>
              ))}
            </div>
            <Link
              href="/healthcare"
              className="inline-flex items-center gap-2 bg-[#0d9488] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0d9488] transition-colors"
            >
              View healthcare experience
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right: proof points */}
          <div className="space-y-4">
            <div className="surface-card-dark p-6">
              <div className="text-4xl font-semibold text-white mb-1">16+</div>
              <div className="text-sm font-medium text-[#5eead4] mb-2">UPCC Clinics Completed</div>
              <p className="text-white/60 text-sm leading-relaxed">
                Urgent and Primary Care Centres require high-specification hygienic systems and tight coordination with health authority teams. We have delivered 16+ of these scopes across BC.
              </p>
            </div>
            <div className="surface-card-dark p-6">
              <div className="text-4xl font-semibold text-white mb-1">75%+</div>
              <div className="text-sm font-medium text-[#5eead4] mb-2">Healthcare Portfolio</div>
              <p className="text-white/60 text-sm leading-relaxed">
                More than three-quarters of our annual work is in healthcare and institutional environments — VGH, Lions Gate, Surrey Memorial, and BC Children&apos;s among them.
              </p>
            </div>
            <div className="surface-card-dark p-6">
              <div className="text-4xl font-semibold text-white mb-1">700+</div>
              <div className="text-sm font-medium text-[#5eead4] mb-2">Projects Across BC</div>
              <p className="text-white/60 text-sm leading-relaxed">
                Over 700 completed projects spanning Vancouver Island, the Lower Mainland, the Interior, and Northern BC.
              </p>
            </div>
          </div>
        </div>

        {/* Manufacturer partners bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="text-xs font-medium text-white/30 uppercase tracking-wider flex-shrink-0">Key manufacturer partners</p>
          <div className="flex flex-1 flex-wrap justify-center gap-x-6 gap-y-2 text-center">
            {partners.map((name, i) => (
              <span key={name} className="text-sm text-white/50 font-medium">
                {name}{i < partners.length - 1 && <span className="ml-6 text-white/20">·</span>}
              </span>
            ))}
          </div>
          <Link href="/manufacturers" className="text-xs text-[#5eead4] font-medium hover:text-[#0d9488] transition-colors sm:ml-auto flex-shrink-0">
            All partners →
          </Link>
        </div>
      </div>
    </section>
  );
}
