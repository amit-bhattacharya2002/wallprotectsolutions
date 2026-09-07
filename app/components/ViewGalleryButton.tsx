"use client";

import type { ReactNode } from "react";
import { useProjectGallery } from "./ProjectGalleryProvider";

interface ViewGalleryButtonProps {
  className?: string;
  index?: number;
  children?: ReactNode;
  "aria-label"?: string;
}

export default function ViewGalleryButton({
  className,
  index,
  children = "View gallery",
  "aria-label": ariaLabel = "View project gallery",
}: ViewGalleryButtonProps) {
  const { openGallery, hasGallery } = useProjectGallery();

  if (!hasGallery) return null;

  return (
    <button
      type="button"
      onClick={() => openGallery(index)}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
