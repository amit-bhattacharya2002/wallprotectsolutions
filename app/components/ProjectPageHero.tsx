import Link from "next/link";
import ProjectImage from "./ProjectImage";
import ViewGalleryButton from "./ViewGalleryButton";

interface ProjectPageHeroProps {
  title: string;
  category?: string;
  signature?: boolean;
  coverImage: string;
  hasMedia: boolean;
}

export default function ProjectPageHero({
  title,
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
          <ViewGalleryButton className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/25">
            View gallery
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </ViewGalleryButton>
        </div>
      </div>
    </section>
  );
}
