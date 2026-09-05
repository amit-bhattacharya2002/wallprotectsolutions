import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header, PageHero } from "@/app/components";
import { manufacturers, type Manufacturer } from "@/app/data/manufacturers";
import { sitePhotos } from "@/app/data/site-photos";

const categoryLabels: Record<Manufacturer["category"], string> = {
  "wall-protection": "Wall Protection",
  "hygienic-cladding": "Hygienic Wall Cladding",
  frp: "FRP Wall Systems",
  "frl-decorative": "FRL / Decorative Wall Systems",
  "pvc-liner": "PVC Liner Systems",
  "wet-wall": "Wet Wall Systems",
};

const categoryDescriptions: Record<Manufacturer["category"], string> = {
  "wall-protection": "Impact protection, handrails, guards, doors, frames, graphic wall protection, and related interior protection scopes.",
  "hygienic-cladding": "Welded and trim-finished hygienic wall cladding systems for clinical, cleanable, and moisture-exposed spaces.",
  frp: "Traditional and decorative FRP panels for food service, healthcare support, utility, washdown, and institutional spaces.",
  "frl-decorative": "Finished wall panel systems where impact resistance, cleanability, and public-facing appearance all matter.",
  "pvc-liner": "PVC liner panels for direct-to-stud, industrial, agricultural, food processing, and washdown environments.",
  "wet-wall": "Solid surface wet wall systems for washrooms, shower rooms, and healthcare wet areas.",
};

const systemHrefByCategory: Record<Manufacturer["category"], string> = {
  "wall-protection": "/systems/wall-protection",
  "hygienic-cladding": "/systems/hygienic-wall-cladding",
  frp: "/systems/frp-wall-systems",
  "frl-decorative": "/systems/frl-decorative",
  "pvc-liner": "/systems/pvc-liner",
  "wet-wall": "/systems/wet-wall",
};

const photoByCategory: Record<Manufacturer["category"], typeof sitePhotos.wallProtection> = {
  "wall-protection": sitePhotos.systems.wallProtection,
  "hygienic-cladding": sitePhotos.systems.hygienic,
  frp: sitePhotos.systems.frp,
  "frl-decorative": sitePhotos.systems.frl,
  "pvc-liner": sitePhotos.systems.pvcLiner,
  "wet-wall": sitePhotos.systems.wetWall,
};

const logoBySlug: Record<string, string> = {
  "construction-specialties": "/cs.png",
  inpro: "/inpro.jpg",
  altro: "/altro.webp",
  panolam: "/panolam.png",
  marlite: "/marlite.png",
  valto: "/valto.png",
};

const customPageSlugs = new Set(["inpro", "marlite", "nudo", "panolam"]);

function getManufacturer(slug: string) {
  return manufacturers.find((manufacturer) => manufacturer.slug === slug);
}

export function generateStaticParams() {
  return manufacturers
    .filter((manufacturer) => !customPageSlugs.has(manufacturer.slug))
    .map((manufacturer) => ({ slug: manufacturer.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const manufacturer = getManufacturer(slug);

  if (!manufacturer) {
    return {
      title: "Manufacturer Partner | FRP Installations Inc.",
    };
  }

  return {
    title: `${manufacturer.name} | Manufacturer Partner | FRP Installations Inc.`,
    description: `${manufacturer.name} ${categoryLabels[manufacturer.category].toLowerCase()} partner for ${manufacturer.products.slice(0, 3).join(", ")} across BC healthcare, institutional, commercial, and industrial projects.`,
  };
}

export default async function ManufacturerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const manufacturer = getManufacturer(slug);

  if (!manufacturer) {
    notFound();
  }

  const systemHref = systemHrefByCategory[manufacturer.category];
  const relatedManufacturers = manufacturers
    .filter((item) => item.category === manufacturer.category && item.slug !== manufacturer.slug)
    .slice(0, 4);
  const logoSrc = logoBySlug[manufacturer.slug];

  return (
    <>
      <Header />
      <main>
        <PageHero
          visual="photo"
          backgroundPhoto={photoByCategory[manufacturer.category]}
          eyebrow="Manufacturer Partner"
          title={manufacturer.name}
          subtitle={`${manufacturer.relationship} for ${categoryLabels[manufacturer.category].toLowerCase()} scopes. We map the product line to the room condition, substrate, specification, budget, and long-term maintenance expectation.`}
          quickLinksTitle="Explore"
          quickLinks={[
            { label: categoryLabels[manufacturer.category], href: systemHref },
            { label: "Manufacturer Partners", href: "/manufacturers" },
            { label: "Request Guidance", href: "/quote" },
          ]}
          supportingContent={
            <div className="grid gap-4 border-y border-white/14 py-6 md:grid-cols-3">
              {[
                [categoryLabels[manufacturer.category], "System category"],
                [manufacturer.relationship, "Relationship"],
                ["BC projects", "Service area"],
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
                {logoSrc ? (
                  <div className="mb-8 flex h-24 items-center justify-center bg-white p-5 shadow-sm">
                    <Image src={logoSrc} alt={`${manufacturer.name} logo`} width={180} height={90} className="max-h-14 w-auto object-contain" />
                  </div>
                ) : null}
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64A70B]">
                  {manufacturer.relationship}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0f172a]">
                  {categoryLabels[manufacturer.category]} partner page
                </h2>
                <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                  {categoryDescriptions[manufacturer.category]}
                </p>
                <Link href={systemHref} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#64A70B] transition-all hover:gap-3">
                  View related system
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </aside>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#64A70B]">
                Typical Scope
              </p>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-[#0f172a] md:text-4xl">
                Where {manufacturer.name} fits into the wall protection package.
              </h2>
              <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-slate-600">
                We use manufacturer pages as practical selection references, not catalogue dumps. The goal is to help project teams understand what the line is normally used for, where it belongs in the specification, and when another system may be a better fit.
              </p>

              <div className="mt-10 overflow-hidden border border-slate-200">
                {manufacturer.products.map((product, index) => (
                  <div key={product} className="grid gap-5 border-b border-slate-200 bg-white p-5 last:border-b-0 md:grid-cols-[0.18fr_0.82fr] md:p-6">
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="text-sm font-semibold leading-7 text-slate-700">{product}</p>
                  </div>
                ))}
              </div>

              {manufacturer.notes ? (
                <div className="mt-8 border-l-2 border-[#64A70B] bg-[#f8fafc] px-5 py-4">
                  <p className="text-sm font-medium leading-7 text-slate-600">{manufacturer.notes}</p>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section className="bg-[#f8fafc] py-14 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#64A70B]">
                Product Selection
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[#0f172a] md:text-4xl">
                The best manufacturer choice depends on the room.
              </h2>
              <p className="mt-5 text-base font-medium leading-8 text-slate-600">
                We compare products against traffic level, hygienic requirement, substrate condition, trim details, availability, budget, and closeout requirements before recommending a system.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/quote" className="inline-flex items-center justify-center bg-[#005EB8] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#004A91]">
                  Request product guidance
                </Link>
                <Link href="/manufacturers" className="inline-flex items-center justify-center border border-slate-300 px-6 py-3 text-sm font-semibold text-[#0f172a] transition-colors hover:border-[#64A70B] hover:text-[#64A70B]">
                  All manufacturers
                </Link>
              </div>
            </div>

            <div className="border-y border-slate-200">
              {[
                "Room use and traffic exposure",
                "Cleanability and infection-control expectation",
                "Moisture, washdown, and substrate conditions",
                "Profile, trim, transition, and finish requirements",
                "Lead time, submittals, and closeout documentation",
              ].map((factor) => (
                <div key={factor} className="border-b border-slate-200 py-4 text-sm font-semibold text-slate-700 last:border-b-0">
                  {factor}
                </div>
              ))}
            </div>
          </div>
        </section>

        {relatedManufacturers.length > 0 ? (
          <section className="bg-white py-14 lg:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#0f172a]">
                Related {categoryLabels[manufacturer.category].toLowerCase()} manufacturers
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {relatedManufacturers.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/wall-protection/manufacturers/${item.slug}`}
                    className="group border border-slate-200 bg-white p-5 transition-colors hover:border-[#64A70B]"
                  >
                    <h3 className="text-base font-semibold tracking-tight text-[#0f172a] group-hover:text-[#64A70B]">{item.name}</h3>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{item.relationship}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
