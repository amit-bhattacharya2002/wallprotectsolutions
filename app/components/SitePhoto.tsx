import Image from "next/image";
import type { SitePhotoMeta } from "@/app/data/site-photos";

type SitePhotoVariant = "side" | "wide" | "fill";

const ASPECT: Record<NonNullable<SitePhotoProps["aspect"]>, string> = {
  "4/3": "aspect-4/3",
  "16/10": "aspect-16/10",
  "3/4": "aspect-3/4",
};

const SIZES: Record<SitePhotoVariant, string> = {
  side: "(max-width: 1024px) 100vw, 40vw",
  wide: "(max-width: 768px) 100vw, 50vw",
  fill: "100vw",
};

export interface SitePhotoProps {
  photo: SitePhotoMeta | string;
  alt?: string;
  caption?: string;
  variant?: SitePhotoVariant;
  aspect?: "4/3" | "16/10" | "3/4";
  rounded?: "xl" | "2xl" | "3xl";
  overlay?: "gradient" | "none";
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}

function resolvePhoto(photo: SitePhotoMeta | string, alt?: string, caption?: string) {
  if (typeof photo === "string") {
    return { src: photo, alt: alt ?? "", caption };
  }
  return {
    src: photo.src,
    alt: alt ?? photo.alt,
    caption: caption ?? photo.caption,
  };
}

/** Consistent project photography for marketing pages and sections. */
export default function SitePhoto({
  photo,
  alt,
  caption,
  variant = "side",
  aspect = "4/3",
  rounded = "2xl",
  overlay = "none",
  priority = false,
  className = "",
  imageClassName = "object-cover",
}: SitePhotoProps) {
  const resolved = resolvePhoto(photo, alt, caption);
  const roundedClass = rounded === "xl" ? "rounded-xl" : rounded === "3xl" ? "rounded-3xl" : "rounded-2xl";

  if (variant === "fill") {
    return (
      <Image
        src={resolved.src}
        alt={resolved.alt}
        aria-hidden={!resolved.alt ? true : undefined}
        fill
        priority={priority}
        sizes={SIZES.fill}
        className={`${imageClassName} ${className}`}
      />
    );
  }

  return (
    <figure className={`relative isolate overflow-hidden ${roundedClass} ${className}`}>
      <div className={`relative w-full ${ASPECT[aspect]}`}>
        <Image
          src={resolved.src}
          alt={resolved.alt}
          fill
          priority={priority}
          sizes={SIZES[variant]}
          className={imageClassName}
        />
        {overlay === "gradient" ? (
          <div className="absolute inset-0 bg-linear-to-t from-[#07162c]/72 via-[#10233F]/16 to-transparent" />
        ) : null}
        {resolved.caption ? (
          <figcaption className="absolute bottom-3 left-4 right-4 text-xs font-medium text-white/90 md:bottom-4 md:text-sm">
            {resolved.caption}
          </figcaption>
        ) : null}
      </div>
    </figure>
  );
}
