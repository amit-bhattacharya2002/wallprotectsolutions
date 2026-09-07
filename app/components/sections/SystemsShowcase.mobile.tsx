"use client";

import { SYSTEMS } from "./SystemsShowcase.data";
import SystemPhotoCard from "./SystemsShowcase.card";

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

      <div className="mx-auto mt-6 max-w-3xl space-y-6">
        {SYSTEMS.map((sys, index) => (
          <SystemPhotoCard
            key={sys.id}
            sys={sys}
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 768px"
          />
        ))}
      </div>
    </div>
  );
}
