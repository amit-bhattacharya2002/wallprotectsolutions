"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ShowcaseSystem } from "./SystemsShowcase.data";

function isFinePointer() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export default function SystemPhotoCard({
  sys,
  priority,
  sizes,
}: {
  sys: ShowcaseSystem;
  priority?: boolean;
  sizes: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <article
      data-open={open ? "true" : "false"}
      className="group relative isolate h-[22rem] overflow-hidden rounded-2xl border border-slate-200/70 shadow-[0_22px_60px_-36px_rgba(15,23,42,0.38)] md:h-[30rem] lg:h-[32rem]"
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("a")) return;
        if (isFinePointer()) return;
        setOpen((value) => !value);
      }}
    >
      <Image
        src={sys.imageSrc}
        alt={sys.imageAlt}
        fill
        sizes={sizes}
        priority={priority}
        quality={75}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] group-focus-within:scale-[1.05] group-data-[open=true]:scale-[1.05] motion-reduce:transform-none"
        draggable={false}
      />

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#07162c]/82 via-[#07162c]/22 to-[#07162c]/8 transition-opacity duration-500 group-hover:opacity-0 group-focus-within:opacity-0 group-data-[open=true]:opacity-0" />

      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-6 pt-20 transition duration-300 ease-out group-hover:translate-y-4 group-hover:opacity-0 group-focus-within:translate-y-4 group-focus-within:opacity-0 group-data-[open=true]:translate-y-4 group-data-[open=true]:opacity-0 motion-reduce:hidden">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-slate-300">{sys.number}</p>
        <h3 className="mt-2 text-balance text-[1.85rem] font-semibold leading-[1.12] tracking-tight text-slate-200 lg:text-[2.15rem]">
          {sys.name}
        </h3>
        <p className="mt-3 hidden text-sm text-slate-300 [@media(hover:none)]:block">Tap for details</p>
      </div>

      <div className="absolute inset-0 z-20 flex translate-y-full flex-col justify-start overflow-y-auto bg-white/32 px-6 pt-8 pb-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] ring-1 ring-inset ring-white/25 backdrop-blur-[18px] backdrop-saturate-150 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-focus-within:translate-y-0 group-data-[open=true]:translate-y-0 motion-reduce:translate-y-0 md:justify-end md:py-7 lg:px-7 lg:py-8">
        <div className="relative">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-[#4f8f16] md:text-[0.6875rem]">{sys.number}</p>
          <p className="mt-1.5 text-balance text-[1.45rem] font-semibold leading-[1.15] tracking-tight text-slate-600 md:mt-2 md:text-[1.85rem] lg:text-[2.25rem]" aria-hidden>
            {sys.name}
          </p>
          <p className="mt-2 text-[0.8125rem] italic leading-snug text-slate-600 md:mt-3 md:text-sm md:leading-relaxed">{sys.manufacturer}</p>
          <p className="mt-2.5 text-[0.8125rem] font-medium leading-snug text-slate-700 md:mt-4 md:text-sm md:leading-relaxed lg:text-[0.9375rem] lg:leading-[1.65]">
            {sys.description}
          </p>
          <Link
            href={sys.href}
            className="mt-3.5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[#4f8f16] transition-colors hover:text-[#0f172a] md:mt-5"
          >
            Learn more
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
