"use client";

import { useState } from "react";
import ProjectImage from "./ProjectImage";
import ProjectGalleryLightbox from "./ProjectGalleryLightbox";
import type { ProjectGalleryImage } from "@/app/data/galleries/types";

const PAGE_SIZE = 24;

interface ProjectGalleryProps {
  title: string;
  images: ProjectGalleryImage[];
}

export default function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visible = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;
  const remaining = images.length - visible.length;

  if (images.length === 0) return null;

  return (
    <>
      <div className="mt-10">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <h3 className="text-xl font-semibold text-[#0f172a]">Project Gallery</h3>
          <p className="text-sm text-gray-500">
            {images.length} photo{images.length === 1 ? "" : "s"}
          </p>
        </div>

        <div className="-mx-6 sm:mx-0">
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {visible.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-none bg-gray-100 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0d9488] focus-visible:ring-offset-2 sm:rounded-xl"
                aria-label={`Open photo ${index + 1} in gallery viewer`}
              >
              <ProjectImage
                src={image.src}
                alt={image.alt}
                variant="gallery"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-[#0f172a]/0 transition-colors group-hover:bg-[#0f172a]/10" />
              <span className="absolute bottom-2 right-2 rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                View
              </span>
            </button>
          ))}
          </div>
        </div>

        {hasMore && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-[#0f172a] transition-colors hover:border-[#0d9488] hover:text-[#0d9488]"
            >
              Load {remaining} more photo{remaining === 1 ? "" : "s"}
              <span className="text-gray-400">
                ({visible.length} of {images.length} shown)
              </span>
            </button>
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <ProjectGalleryLightbox
          images={images}
          activeIndex={lightboxIndex}
          title={title}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}
    </>
  );
}
