"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

interface ShowcaseSystem {
  id: string;
  number: string;
  name: string;
  manufacturer: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

const SYSTEMS: ShowcaseSystem[] = [
  {
    id: "wall-protection",
    number: "01",
    name: "Wall Protection Systems",
    manufacturer: "Construction Specialties · Inpro · Ricochet",
    description:
      "Supply and installation of Acrovyn wall protection sheets, crash rails, corner guards, wall guards, handrails, and door and frame protection. BC distributor for Construction Specialties; full access to Inpro and Ricochet product lines.",
    href: "/systems/wall-protection",
    imageSrc: "/images/showcase/wall-protection.jpg",
    imageAlt: "Healthcare corridor with Acrovyn wall protection wainscot",
  },
  {
    id: "hygienic-wall-cladding",
    number: "02",
    name: "Hygienic Wall Cladding",
    manufacturer: "Altro Whiterock · Puraguard · True North · AM-Clad",
    description:
      "Altro-trained and approved installer for Whiterock seamless welded systems and Puraguard. Also supply and install True North and AM-Clad hygienic wall systems — helping specify the right system for the infection-control requirement and budget.",
    href: "/systems/hygienic-wall-cladding",
    imageSrc: "/images/showcase/hygienic-cladding.jpg",
    imageAlt: "Food processing facility with seamless hygienic wall cladding",
  },
  {
    id: "frp-wall-systems",
    number: "03",
    name: "FRP & FRL Wall Systems",
    manufacturer: "Valto · Stabilit/Graham · Marlite · Panolam",
    description:
      "Traditional and decorative FRP wall panels from Valto (Glasbord, Varietex), Stabilit/Graham (Exceliner, Glasliner), and Marlite. Panolam FRL distributor relationship for 400+ colour decorative wall panel options in healthcare and institutional interiors.",
    href: "/systems/frp-wall-systems",
    imageSrc: "/images/showcase/frp-systems.jpg",
    imageAlt: "Healthcare facility with decorative wood-grain FRP wall panels",
  },
];

export default function SystemsShowcaseMobile() {
  return (
    <div className="m-0 border-t border-slate-200/80 px-4 pb-2 pt-0">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-2 border-b border-slate-200/90 pb-4">
        {SYSTEMS.map((sys) => (
          <span key={sys.id} className="text-center text-sm font-medium text-[#0B1D3A]">
            <span className="mr-1.5 text-xs font-semibold text-[#9CA3AF]">{sys.number}</span>
            {sys.name}
          </span>
        ))}
      </div>

      <div className="mx-auto mt-6 max-w-3xl space-y-14">
        {SYSTEMS.map((sys) => (
          <article key={sys.id} className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="relative aspect-4/5 w-full sm:aspect-3/4">
              <img
                src={sys.imageSrc}
                alt={sys.imageAlt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
            <div className="space-y-4 px-6 py-8 sm:px-8 sm:py-9">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#6B7280]">{sys.number}</p>
              <h3 className="text-2xl font-semibold tracking-tight text-[#0B1D3A] sm:text-[1.65rem]">{sys.name}</h3>
              <p className="text-[0.9375rem] italic leading-relaxed text-[#6B7280] sm:text-base">{sys.manufacturer}</p>
              <p className="text-base leading-relaxed text-[#6B7280] sm:text-[1.0625rem] sm:leading-[1.65]">{sys.description}</p>
              <Link
                href={sys.href}
                className="inline-flex items-center gap-1.5 text-base font-semibold text-[#14b8a6] transition-colors hover:text-[#0d9488]"
              >
                Learn more
                <span aria-hidden>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
