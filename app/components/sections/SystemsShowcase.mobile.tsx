"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { SYSTEMS, SYSTEMS_COUNT, type ShowcaseSystem } from "./SystemsShowcase.data";

function SystemListCard({ sys }: { sys: ShowcaseSystem }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
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
        <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
          System {sys.number} / {String(SYSTEMS_COUNT).padStart(2, "0")}
        </p>
        <h3 className="text-2xl font-semibold tracking-tight text-[#0B1D3A] sm:text-[1.65rem]">
          {sys.name}
        </h3>
        <p className="text-[0.9375rem] italic leading-relaxed text-[#6B7280] sm:text-base">{sys.manufacturer}</p>
        <p className="text-base leading-relaxed text-[#6B7280] sm:text-[1.0625rem] sm:leading-[1.65]">
          {sys.description}
        </p>
        <Link
          href={sys.href}
          className="inline-flex items-center gap-1.5 text-base font-semibold text-[#14b8a6] transition-colors hover:text-[#0d9488]"
        >
          Learn more
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}

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
          <SystemListCard key={sys.id} sys={sys} />
        ))}
      </div>
    </div>
  );
}
