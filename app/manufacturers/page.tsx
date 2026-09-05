import Image from "next/image";
import Link from "next/link";
import { Footer, Header, PageHero, SitePhoto } from "@/app/components";
import { manufacturers } from "@/app/data/manufacturers";
import { sitePhotos } from "@/app/data/site-photos";

export const metadata = {
  title: "Manufacturer Partners | FRP Installations Inc. | Wall Protection Solutions",
  description: "Construction Specialties, Altro, Inpro, Panolam, Marlite, Valto, and more. Manufacturer partners for wall protection, hygienic cladding, FRP, FRL, and wet wall systems across BC.",
};

const categoryLabels: Record<string, string> = {
  "wall-protection": "Wall Protection",
  "hygienic-cladding": "Hygienic Cladding",
  frp: "FRP",
  "frl-decorative": "FRL / Decorative",
  "pvc-liner": "PVC Liner",
  "wet-wall": "Wet Wall",
};

const categoryDescriptions: Record<string, string> = {
  "wall-protection": "Crash rails, handrails, guards, sheet goods, doors, frames, and specialty protection.",
  "hygienic-cladding": "Welded or trim-finished wall cladding systems for clinical and cleanable environments.",
  frp: "Traditional and decorative FRP panels for support spaces, kitchens, washdown rooms, and utility areas.",
  "frl-decorative": "Finished wall panel systems where impact resistance and public-facing design both matter.",
  "pvc-liner": "Direct-to-stud liner systems for washdown, agricultural, industrial, and food processing spaces.",
  "wet-wall": "Solid surface wet wall systems for washrooms, showers, and healthcare wet areas.",
};

const systemHrefByCategory: Record<string, string> = {
  "wall-protection": "/systems/wall-protection",
  "hygienic-cladding": "/systems/hygienic-wall-cladding",
  frp: "/systems/frp-wall-systems",
  "frl-decorative": "/systems/frl-decorative",
  "pvc-liner": "/systems/pvc-liner",
  "wet-wall": "/systems/wet-wall",
};

const categories = ["wall-protection", "hygienic-cladding", "frp", "frl-decorative", "pvc-liner", "wet-wall"] as const;

const detailHrefBySlug: Record<string, string> = {
  "construction-specialties": "/wall-protection/manufacturers/construction-specialties",
  inpro: "/wall-protection/manufacturers/inpro",
  ricochet: "/wall-protection/manufacturers/ricochet",
  altro: "/wall-protection/manufacturers/altro",
  "true-north": "/wall-protection/manufacturers/true-north",
  "am-clad": "/wall-protection/manufacturers/am-clad",
  "stabilit-graham": "/wall-protection/manufacturers/graham",
  valto: "/wall-protection/manufacturers/valto",
  marlite: "/wall-protection/manufacturers/marlite",
  nudo: "/wall-protection/manufacturers/nudo",
  panolam: "/wall-protection/manufacturers/panolam",
  formica: "/wall-protection/manufacturers/formica",
  octaform: "/wall-protection/manufacturers/octaform",
  "clean-16": "/wall-protection/manufacturers/clean-16",
  "ez-liner": "/wall-protection/manufacturers/ez-liner",
  "ag-tuf": "/wall-protection/manufacturers/ag-tuf",
  delpro: "/wall-protection/manufacturers/delpro",
  avonite: "/wall-protection/manufacturers/avonite",
};

const logoBySlug: Record<string, string> = {
  "construction-specialties": "/cs.png",
  inpro: "/inpro.jpg",
  altro: "/altro.webp",
  panolam: "/panolam.png",
  marlite: "/marlite.png",
  valto: "/valto.png",
};

const featuredSlugs = ["construction-specialties", "inpro", "altro", "panolam"];

export default function ManufacturersPage() {
  const featuredManufacturers = featuredSlugs
    .map((slug) => manufacturers.find((manufacturer) => manufacturer.slug === slug))
    .filter(Boolean);

  return (
    <>
      <Header />
      <main>
        <PageHero
          visual="photo"
          backgroundPhoto={sitePhotos.manufacturers}
          title="Manufacturer partners"
          subtitle="A curated manufacturer network for healthcare, institutional, food service, and high-use interior protection. We select products by room condition, specification, budget, and long-term maintenance requirements."
          breadcrumb="Manufacturer Partners"
          quickLinksTitle="Explore"
          quickLinks={[
            { label: "Wall Protection", href: "#wall-protection" },
            { label: "Hygienic Cladding", href: "#hygienic-cladding" },
            { label: "FRP Systems", href: "#frp" },
            { label: "FRL / Decorative", href: "#frl-decorative" },
            { label: "PVC Liner", href: "#pvc-liner" },
            { label: "Wet Wall", href: "#wet-wall" },
          ]}
          supportingContent={
            <div className="grid gap-4 border-y border-white/14 py-6 md:grid-cols-3">
              {[
                ["20+", "Manufacturer lines"],
                ["6", "System categories"],
                ["Healthcare", "Primary project focus"],
              ].map(([value, label]) => (
                <div key={label} className="border-white/12 md:border-r md:pr-6 md:last:border-r-0">
                  <div className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{value}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/62">{label}</div>
                </div>
              ))}
            </div>
          }
        />

        <section className="border-b border-slate-200 bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div className="sticky-side">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#64A70B]">
                  Product Neutral. Project Specific.
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-[#0f172a] md:text-4xl">
                  We lead with installed performance, not catalogue preference.
                </h2>
                <p className="mt-5 text-base font-medium leading-8 text-slate-600">
                  The right manufacturer changes by room type, substrate, infection-control expectation, budget, lead time, and closeout requirements. This page maps the partners we commonly coordinate across wall protection, hygienic wall systems, FRP, FRL, PVC liner, and wet wall scopes.
                </p>
              </div>

              <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2">
                {featuredManufacturers.map((manufacturer) => {
                  if (!manufacturer) return null;
                  const detailHref = detailHrefBySlug[manufacturer.slug];
                  const logoSrc = logoBySlug[manufacturer.slug];

                  const content = (
                    <>
                      <div className="mb-7 flex min-h-16 items-center justify-between gap-5">
                        <div>
                          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#64A70B]">
                            {manufacturer.relationship}
                          </p>
                          <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#0f172a]">
                            {manufacturer.name}
                          </h3>
                        </div>
                        {logoSrc ? (
                          <span className="flex h-16 w-28 shrink-0 items-center justify-center bg-white p-3 shadow-sm">
                            <Image src={logoSrc} alt={`${manufacturer.name} logo`} width={112} height={56} className="max-h-10 w-auto object-contain" />
                          </span>
                        ) : null}
                      </div>
                      <div className="border-t border-slate-200">
                        {manufacturer.products.slice(0, 4).map((product) => (
                          <div key={product} className="border-b border-slate-200 py-3 text-sm font-medium leading-relaxed text-slate-700 last:border-b-0">
                            {product}
                          </div>
                        ))}
                      </div>
                      {detailHref ? (
                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#64A70B] transition-all group-hover:gap-3">
                          View partner page
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      ) : null}
                    </>
                  );

                  return detailHref ? (
                    <Link key={manufacturer.slug} href={detailHref} className="group bg-[#f8fafc] p-6 transition-colors hover:bg-white lg:p-8">
                      {content}
                    </Link>
                  ) : (
                    <div key={manufacturer.slug} className="bg-[#f8fafc] p-6 lg:p-8">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8fafc] py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#64A70B]">
                  Manufacturer Index
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-[#0f172a] md:text-4xl">
                  Partners by system category
                </h2>
              </div>
              <p className="max-w-3xl text-base font-medium leading-8 text-slate-600 lg:justify-self-end">
                A quieter reference layout keeps the focus on how each manufacturer fits into the work. Use the system links for product selection context, or open the dedicated partner pages where available.
              </p>
            </div>

            <div className="space-y-8">
              {categories.map((category) => {
                const categoryManufacturers = manufacturers.filter((manufacturer) => manufacturer.category === category);
                if (categoryManufacturers.length === 0) return null;

                return (
                  <section key={category} id={category} className="scroll-mt-32 border border-slate-200 bg-white">
                    <div className="grid gap-px bg-slate-200 lg:grid-cols-[0.34fr_0.66fr]">
                      <div className="bg-white p-6 lg:p-8">
                        <div className="mb-5 h-0.5 w-14 bg-linear-to-r from-[#0868C4] to-[#64A70B]" />
                        <h3 className="text-2xl font-semibold tracking-tight text-[#0f172a]">
                          {categoryLabels[category]}
                        </h3>
                        <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                          {categoryDescriptions[category]}
                        </p>
                        <Link
                          href={systemHrefByCategory[category]}
                          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#64A70B] transition-all hover:gap-3"
                        >
                          View system
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>

                      <div className="bg-white">
                        {categoryManufacturers.map((manufacturer) => {
                          const detailHref = detailHrefBySlug[manufacturer.slug];
                          const logoSrc = logoBySlug[manufacturer.slug];

                          const row = (
                            <div className="grid gap-5 border-b border-slate-200 p-5 last:border-b-0 md:grid-cols-[0.72fr_1.28fr] md:p-6">
                              <div className="flex items-center gap-4">
                                {logoSrc ? (
                                  <span className="flex h-12 w-20 shrink-0 items-center justify-center bg-white p-2 ring-1 ring-slate-200">
                                    <Image src={logoSrc} alt={`${manufacturer.name} logo`} width={88} height={44} className="max-h-8 w-auto object-contain" />
                                  </span>
                                ) : null}
                                <div className="min-w-0">
                                  <h4 className="font-semibold tracking-tight text-[#0f172a]">{manufacturer.name}</h4>
                                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                                    {manufacturer.relationship}
                                  </p>
                                </div>
                              </div>
                              <div>
                                <p className="text-sm font-medium leading-7 text-slate-600">
                                  {manufacturer.products.slice(0, 3).join("; ")}
                                </p>
                                {detailHref ? (
                                  <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#64A70B] transition-all group-hover:gap-3">
                                    View details
                                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                  </span>
                                ) : null}
                              </div>
                            </div>
                          );

                          return detailHref ? (
                            <Link key={manufacturer.slug} href={detailHref} className="group block transition-colors hover:bg-[#f8fafc]">
                              {row}
                            </Link>
                          ) : (
                            <div key={manufacturer.slug}>{row}</div>
                          );
                        })}
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-14 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <SitePhoto photo={sitePhotos.manufacturers} overlay="gradient" className="shadow-[0_22px_60px_-36px_rgba(15,23,42,0.28)]" />
            <div className="flex flex-col justify-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#64A70B]">
                Real project work
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[#0f172a] md:text-4xl">
                Manufacturer depth matters most when scopes overlap.
              </h2>
              <p className="mt-5 text-base font-medium leading-8 text-slate-600">
                Healthcare and institutional projects rarely rely on a single product line. A typical package may combine wall guards, handrails, FRP, hygienic cladding, stainless protection, curtain tracks, and specialty accessories. Our role is to coordinate the right mix early enough that pricing, submittals, and installation stay clean.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/systems/wall-protection" className="inline-flex items-center justify-center bg-[#005EB8] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#004A91]">
                  View wall protection systems
                </Link>
                <Link href="/quote" className="inline-flex items-center justify-center border border-slate-300 px-6 py-3 text-sm font-semibold text-[#0f172a] transition-colors hover:border-[#64A70B] hover:text-[#64A70B]">
                  Request product guidance
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
