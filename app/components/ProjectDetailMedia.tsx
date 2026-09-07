"use client";

import { useState, type ReactNode } from "react";
import ProjectImage from "./ProjectImage";
import { useProjectGallery } from "./ProjectGalleryProvider";
import ViewGalleryButton from "./ViewGalleryButton";
import type { ProjectGalleryImage } from "@/app/data/galleries/types";

const PAGE_SIZE = 24;
const MOBILE_PREVIEW_COUNT = 3;

interface ProjectDetailMediaProps {
  coverImage: string;
  coverAlt: string;
  images: ProjectGalleryImage[];
  hasMedia: boolean;
  children: ReactNode;
}

function findCoverIndex(images: ProjectGalleryImage[], coverImage: string) {
  const index = images.findIndex((image) => image.src === coverImage);
  return index >= 0 ? index : 0;
}

export default function ProjectDetailMedia({
  coverImage,
  coverAlt,
  images,
  hasMedia,
  children,
}: ProjectDetailMediaProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const { openGallery } = useProjectGallery();

  const visible = images.slice(0, visibleCount);
  const preview = images.slice(0, MOBILE_PREVIEW_COUNT);
  const hasMore = visibleCount < images.length;
  const remaining = images.length - visible.length;
  const showGalleryGrid = images.length > 1;

  return (
    <>
      {hasMedia ? (
        <button
          type="button"
          onClick={() => openGallery(findCoverIndex(images, coverImage))}
          className="group relative mb-10 hidden aspect-16/10 w-full overflow-hidden rounded-2xl bg-gray-100 text-left shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#64A70B] focus-visible:ring-offset-2 lg:block"
          aria-label="Open main project photo in gallery viewer"
        >
          <ProjectImage
            src={coverImage}
            alt={coverAlt}
            variant="hero"
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <span className="pointer-events-none absolute inset-0 bg-transparent transition-colors group-hover:bg-slate-950/10" />
          <span className="absolute bottom-4 right-4 rounded-full bg-black/55 px-3 py-1.5 text-xs font-medium text-white opacity-90 backdrop-blur-sm sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
            View gallery
          </span>
        </button>
      ) : (
        <div className="mb-10 hidden aspect-16/10 w-full items-center justify-center rounded-2xl bg-[#f1f5f9] lg:flex">
          <p className="px-6 text-center text-sm font-medium uppercase tracking-[0.16em] text-slate-400">
            Project photos coming soon
          </p>
        </div>
      )}

      {children}

      {showGalleryGrid && (
        <>
          <div id="project-gallery" className="mt-10 lg:hidden">
            <h3 className="mb-4 text-xl font-semibold text-[#0f172a]">Project Gallery</h3>
            <div className="grid grid-cols-3 gap-1.5">
              {preview.map((image, index) => (
                <button
                  key={`${image.src}-${index}`}
                  type="button"
                  onClick={() => openGallery(index)}
                  className="group relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#64A70B] focus-visible:ring-offset-2"
                  aria-label={`Open photo ${index + 1} in gallery viewer`}
                >
                  <ProjectImage
                    src={image.src}
                    alt={image.alt}
                    variant="gallery"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
            <ViewGalleryButton className="mt-3 w-full text-right text-sm font-medium text-[#005EB8] transition-colors hover:text-[#004A91] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#64A70B] focus-visible:ring-offset-2">
              View gallery
            </ViewGalleryButton>
          </div>

          <div className="mt-10 hidden lg:block">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <h3 className="text-xl font-semibold text-[#0f172a]">Project Gallery</h3>
              <p className="text-sm text-gray-500">
                {images.length} photo{images.length === 1 ? "" : "s"}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-3">
              {visible.map((image, index) => (
                <button
                  key={`${image.src}-${index}`}
                  type="button"
                  onClick={() => openGallery(index)}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#64A70B] focus-visible:ring-offset-2 sm:rounded-xl"
                  aria-label={`Open photo ${index + 1} in gallery viewer`}
                >
                  <ProjectImage
                    src={image.src}
                    alt={image.alt}
                    variant="gallery"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-transparent transition-colors group-hover:bg-slate-950/10" />
                  <span className="absolute bottom-2 right-2 rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-medium text-white opacity-90 sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
                    View
                  </span>
                </button>
              ))}
            </div>

            {hasMore && (
              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-[#0f172a] transition-colors hover:border-[#64A70B] hover:text-[#64A70B]"
                >
                  Load {remaining} more photo{remaining === 1 ? "" : "s"}
                  <span className="text-gray-400">
                    ({visible.length} of {images.length} shown)
                  </span>
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
