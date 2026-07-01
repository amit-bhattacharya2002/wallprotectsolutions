"use client";

import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { ProjectGalleryImage } from "@/app/data/galleries/types";

interface ProjectGalleryLightboxProps {
  images: ProjectGalleryImage[];
  activeIndex: number;
  title: string;
  onClose: () => void;
  onChange: (index: number) => void;
}

export default function ProjectGalleryLightbox({
  images,
  activeIndex,
  title,
  onClose,
  onChange,
}: ProjectGalleryLightboxProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const activeImage = images[activeIndex];

  const goPrev = useCallback(() => {
    onChange(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  }, [activeIndex, images.length, onChange]);

  const goNext = useCallback(() => {
    onChange(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  }, [activeIndex, images.length, onChange]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goNext, goPrev, onClose]);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;
    const activeThumb = timeline.querySelector<HTMLElement>(`[data-index="${activeIndex}"]`);
    activeThumb?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeIndex]);

  if (typeof document === "undefined" || !activeImage) return null;

  const lightbox = (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-[#0f172a]/96 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} photo gallery`}
    >
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-white">{title}</p>
          <p className="text-xs text-white/50">
            Photo {activeIndex + 1} of {images.length}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
          aria-label="Close gallery"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Main carousel */}
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 py-4 sm:px-6">
        {/* Left nav panel */}
        <button
          type="button"
          onClick={goPrev}
          className="absolute inset-y-0 left-0 z-10 flex w-[min(18vw,5rem)] items-center justify-center bg-gradient-to-r from-[#07162c]/48 to-transparent text-white/70 transition-colors hover:text-white sm:w-[min(14vw,6rem)]"
          aria-label="Previous photo"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-sm">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </span>
        </button>

        {/* Image — edge-to-edge; nav buttons overlay the sides */}
        <div className="relative h-[calc(100dvh-12rem)] max-h-full w-full">
          <Image
            key={activeImage.src}
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            sizes="100vw"
            priority
            className="object-contain"
          />
        </div>

        {/* Right nav panel */}
        <button
          type="button"
          onClick={goNext}
          className="absolute inset-y-0 right-0 z-10 flex w-[min(18vw,5rem)] items-center justify-center bg-gradient-to-l from-[#07162c]/48 to-transparent text-white/70 transition-colors hover:text-white sm:w-[min(14vw,6rem)]"
          aria-label="Next photo"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-sm">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>

      {/* Timeline */}
      <div className="shrink-0 border-t border-white/10 bg-black/30 px-4 py-3 sm:px-6">
        <div
          ref={timelineRef}
          className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.25)_transparent]"
        >
          {images.map((image, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={`${image.src}-${index}`}
                type="button"
                data-index={index}
                onClick={() => onChange(index)}
                className={`relative h-16 w-[5.5rem] shrink-0 overflow-hidden rounded-lg border-2 transition-all sm:h-[4.5rem] sm:w-28 ${
                  isActive
                    ? "border-[#9BCB4A] ring-2 ring-[#9BCB4A]/40 opacity-100"
                    : "border-transparent opacity-55 hover:border-white/30 hover:opacity-90"
                }`}
                aria-label={`View photo ${index + 1}`}
                aria-current={isActive ? "true" : undefined}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-cover"
                />
                <span className="absolute bottom-0.5 right-0.5 rounded bg-black/60 px-1 text-[10px] font-medium text-white/90">
                  {index + 1}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  return createPortal(lightbox, document.body);
}
