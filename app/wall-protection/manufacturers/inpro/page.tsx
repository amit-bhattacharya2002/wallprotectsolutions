import Image from "next/image";
import Link from "next/link";
import { Footer, Header, PageHero } from "@/app/components";
import { sitePhotos } from "@/app/data/site-photos";

export const metadata = {
  title: "Inpro Wall Protection | FRP Installations Inc.",
  description:
    "Inpro wall protection systems including crash rails, wall guards, corner guards, handrails, door protection, expansion joints, and Aspex graphic wall protection for BC healthcare and institutional projects.",
};

const productGroups = [
  {
    title: "Wall Protection",
    description: "Impact protection for corridors, patient areas, back-of-house routes, service rooms, and public-facing circulation zones.",
    items: ["Crash rails", "Wall guards", "Corner guards", "Sheet protection", "Door and frame protection"],
  },
  {
    title: "Handrails + Combination Rails",
    description: "Support and protection profiles for healthcare, assisted living, institutional, and high-use public interiors.",
    items: ["Handrails", "Combination handrail / crash rail profiles", "Column protection", "Custom transitions"],
  },
  {
    title: "Specialty Interior Products",
    description: "Coordinated Division 10 and interior protection items that often sit beside wall protection scopes.",
    items: ["Cubicle curtain tracks", "Entrance systems", "Expansion joints", "Aspex custom graphic wall systems"],
  },
];

const selectionFactors = [
  "Impact exposure and cart traffic",
  "Clinical or institutional cleanability requirements",
  "Profile height, wall backing, and substrate condition",
  "Colour, finish, and wayfinding requirements",
  "Coordination with doors, casework, millwork, and corner conditions",
  "Submittals, samples, lead times, and closeout documentation",
];

export default function InproManufacturerPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          visual="photo"
          backgroundPhoto={sitePhotos.wallProtection}
          eyebrow="Manufacturer Partner"
          title="Inpro wall protection systems"
          subtitle="Inpro gives project teams access to a broad wall protection and specialty interiors lineup, including crash rails, wall guards, corner guards, handrails, door protection, cubicle track, expansion joints, and Aspex graphic wall systems."
          subtitleClassName="text-lg md:text-xl"
          quickLinksTitle="Explore"
          quickLinks={[
            { label: "Wall Protection Systems", href: "/systems/wall-protection" },
            { label: "Healthcare Experience", href: "/healthcare" },
            { label: "Manufacturer Partners", href: "/manufacturers" },
            { label: "Get a Quote", href: "/quote" },
          ]}
          supportingContent={
            <div className="grid gap-4 border-y border-white/14 py-6 md:grid-cols-3">
              {[
                ["Wall protection", "Primary fit"],
                ["Full access", "Relationship"],
                ["Healthcare", "Common use"],
              ].map(([value, label]) => (
                <div key={label} className="border-white/12 md:border-r md:pr-6 md:last:border-r-0">
                  <div className="text-xl font-semibold tracking-tight text-white md:text-2xl">{value}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/62">{label}</div>
                </div>
              ))}
            </div>
          }
        />

        <section className="border-b border-slate-200 bg-white py-14 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
            <aside className="sticky-side">
              <div className="border border-slate-200 bg-[#f8fafc] p-6 lg:p-8">
                <div className="mb-8 flex h-24 items-center justify-center bg-white p-5 shadow-sm">
                  <Image src="/inpro.jpg" alt="Inpro logo" width={180} height={90} className="max-h-14 w-auto object-contain" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64A70B]">
                  Product access
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0f172a]">
                  Broad wall protection coverage for complex interiors.
                </h2>
                <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                  Inpro is especially useful when a project needs multiple protection profiles coordinated across rooms, corridors, doors, corners, and public-facing spaces.
                </p>
              </div>
            </aside>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#64A70B]">
                Where Inpro Fits
              </p>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-[#0f172a] md:text-4xl">
                A complete wall protection option for healthcare and institutional projects.
              </h2>
              <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-slate-600">
                Inpro products are commonly considered where impact resistance, cleanability, profile coordination, and long-term maintenance are all part of the decision. We help project teams compare Inpro against other wall protection options and coordinate the correct product mix for the room conditions.
              </p>

              <div className="mt-10 grid gap-px overflow-hidden border border-slate-200 bg-slate-200">
                {productGroups.map((group, index) => (
                  <div key={group.title} className="grid gap-6 bg-white p-6 md:grid-cols-[0.36fr_0.64fr] lg:p-8">
                    <div>
                      <div className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight text-[#0f172a]">{group.title}</h3>
                      <p className="mt-3 text-sm font-medium leading-7 text-slate-600">{group.description}</p>
                    </div>
                    <div className="border-t border-slate-200 md:border-l md:border-t-0 md:pl-6">
                      {group.items.map((item) => (
                        <div key={item} className="border-b border-slate-200 py-3 text-sm font-semibold text-slate-700 last:border-b-0">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8fafc] py-14 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#64A70B]">
                Selection Support
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[#0f172a] md:text-4xl">
                The product line is only half the decision.
              </h2>
              <p className="mt-5 text-base font-medium leading-8 text-slate-600">
                Inpro can cover a lot of the protection package, but the important work is matching the right profile, height, backing, finish, and accessory coordination to the actual site condition.
              </p>
            </div>
            <div className="border-y border-slate-200">
              {selectionFactors.map((factor) => (
                <div key={factor} className="border-b border-slate-200 py-4 text-sm font-semibold text-slate-700 last:border-b-0">
                  {factor}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="brand-blue-surface py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#9BCB4A]">
              Scope Review
            </p>
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Need help comparing Inpro with other wall protection options?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-8 text-white/86">
              Send drawings, room schedules, finish tags, or photos. We can help identify where Inpro makes sense and where another system may be the better fit.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/quote" className="inline-flex items-center justify-center bg-white px-7 py-3.5 text-sm font-semibold text-[#0f172a] transition-colors hover:bg-[#9BCB4A]">
                Submit project specifications
              </Link>
              <Link href="/systems/wall-protection" className="inline-flex items-center justify-center border border-white/24 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/45 hover:bg-white/8">
                View wall protection systems
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
