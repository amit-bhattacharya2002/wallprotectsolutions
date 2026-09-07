"use client";

import { SYSTEMS } from "./SystemsShowcase.data";
import SystemPhotoCard from "./SystemsShowcase.card";

export default function SystemsShowcaseGrid() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-6 pt-2 lg:px-8 lg:pb-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {SYSTEMS.map((sys) => (
          <SystemPhotoCard
            key={sys.id}
            sys={sys}
            priority
            sizes="(max-width: 1024px) 50vw, 33vw"
          />
        ))}
      </div>
    </div>
  );
}
