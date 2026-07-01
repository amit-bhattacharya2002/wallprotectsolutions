"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { SYSTEMS, SYSTEMS_COUNT, type ShowcaseSystem } from "./SystemsShowcase.data";

function SystemGridCard({ sys, eager }: { sys: ShowcaseSystem; eager?: boolean }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_22px_60px_-36px_rgba(15,23,42,0.3)] transition-colors hover:border-[#64A70B]/35">
      <div className="relative aspect-4/3 w-full">
        <img
          src={sys.imageSrc}
          alt={sys.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          loading={eager ? "eager" : "lazy"}
          draggable={false}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5 py-6 lg:px-6 lg:py-7">
        <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#4f8f16]">
          System {sys.number} / {String(SYSTEMS_COUNT).padStart(2, "0")}
        </p>
        <h3 className="min-w-0 text-balance text-xl font-semibold tracking-tight text-[#0B1D3A] lg:text-[1.35rem]">{sys.name}</h3>
        <p className="text-sm italic leading-relaxed text-[#6B7280]">{sys.manufacturer}</p>
        <p className="flex-1 text-sm leading-relaxed text-[#374151] lg:text-[0.9375rem] lg:leading-[1.65]">
          {sys.description}
        </p>
        <Link
          href={sys.href}
          className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-[#64A70B] transition-colors hover:text-[#4f8f16]"
        >
          Learn more
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}

export default function SystemsShowcaseGrid() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-6 pt-2 lg:px-8 lg:pb-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {SYSTEMS.map((sys, index) => (
          <SystemGridCard key={sys.id} sys={sys} eager={index === 0} />
        ))}
      </div>
    </div>
  );
}
