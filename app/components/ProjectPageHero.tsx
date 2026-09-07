import Link from "next/link";
import ProjectImage from "./ProjectImage";

interface ProjectPageHeroProps {
  title: string;
  subtitle?: string;
  category?: string;
  signature?: boolean;
  coverImage: string;
  hasMedia: boolean;
}

export default function ProjectPageHero({
  title,
  subtitle,
  category,
  signature,
  coverImage,
  hasMedia,
}: ProjectPageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden lg:hidden">
      <div className="relative min-h-[70svh] w-full bg-[#07162c]">
        {hasMedia ? (
          <ProjectImage
            src={coverImage}
            alt=""
            variant="hero"
            priority
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-[#0f172a]" aria-hidden />
        )}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#07162c]/88 via-[#07162c]/35 to-[#07162c]/25" />

        <div className="absolute inset-x-0 top-0 z-10 px-5 pt-[calc(4.75rem+env(safe-area-inset-top,0px))]">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-7 pt-28">
          {category && (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9BCB4A]">
              {category}
            </p>
          )}
          {signature && (
            <span className="mt-2 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
              Signature Project
            </span>
          )}
          <h1 className="mt-2 max-w-[18ch] text-[2rem] font-bold leading-[1.08] tracking-tight text-white">
            {title}
          </h1>
        </div>
      </div>

      {subtitle && (
        <div className="bg-white px-5 py-5">
          <p className="text-base leading-relaxed text-slate-600">{subtitle}</p>
        </div>
      )}
    </section>
  );
}
