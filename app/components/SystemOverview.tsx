import Link from "next/link";
import SitePhoto from "./SitePhoto";
import type { SystemOverviewContent } from "@/app/data/system-overviews";

export default function SystemOverview({
  overview,
}: {
  overview: SystemOverviewContent;
}) {
  return (
    <section className="border-b border-slate-200/80 bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#64A70B]">
              What this system is
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#0f172a] md:text-4xl">
              {overview.name}
            </h2>
            <p className="mt-5 max-w-xl text-base font-normal leading-relaxed text-gray-600">
              {overview.summary}
            </p>
          </div>
          <Link href={overview.projectHref} className="group block">
            <SitePhoto
              photo={overview.photo}
              overlay="gradient"
              className="shadow-[0_22px_60px_-36px_rgba(15,23,42,0.28)] transition-opacity group-hover:opacity-95"
            />
          </Link>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
              Typically includes
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {overview.includes.map((item) => (
                <li key={item} className="bg-[#f8fafc] px-3.5 py-1.5 text-sm font-medium text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
              Commonly used in
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {overview.usedFor.map((item) => (
                <li key={item} className="bg-[#f8fafc] px-3.5 py-1.5 text-sm font-medium text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
