import Image, { type ImageProps } from "next/image";
import PlaceholderBadge from "./PlaceholderBadge";

type AspectRatio =
  | "1/1"
  | "4/3"
  | "3/2"
  | "16/9"
  | "16/10"
  | "21/9"
  | (string & {});

export interface UnsplashImageProps
  extends Omit<ImageProps, "fill" | "width" | "height"> {
  /**
   * Aspect ratio for the wrapper, locked via CSS so swapping the `src` later
   * doesn't change layout. Examples: "16/9", "4/3", "1/1".
   */
  aspectRatio?: AspectRatio;
  /** When true, renders a small "Placeholder photo" pill (gated by env var). */
  isPlaceholder?: boolean;
  /** Extra classes for the outer wrapper (controls sizing/border-radius). */
  wrapperClassName?: string;
  /** Extra classes for the underlying `<Image>`. */
  className?: string;
}

/**
 * Brand-consistent wrapper around `next/image` for Unsplash placeholders.
 *
 * - Applies the global filter `saturate(0.85) brightness(0.97)` so all
 *   placeholder photography reads with the same calm, slightly desaturated
 *   tone that matches our healthcare/institutional palette.
 * - Locks aspect ratio via CSS (`aspectRatio` style + `position: relative`),
 *   so swapping the underlying `src` later requires no layout changes.
 * - Emits a `<PlaceholderBadge>` in the bottom-right when `isPlaceholder` is
 *   true and the staging env var is on.
 */
export default function UnsplashImage({
  aspectRatio = "16/9",
  isPlaceholder,
  wrapperClassName,
  className,
  alt,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  ...rest
}: UnsplashImageProps) {
  return (
    <div
      className={`relative isolate overflow-hidden ${wrapperClassName ?? ""}`}
      style={{ aspectRatio }}
    >
      <Image
        {...rest}
        alt={alt}
        fill
        sizes={sizes}
        className={`object-cover filter-[saturate(0.85)_brightness(0.97)] ${className ?? ""}`}
      />
      {isPlaceholder ? <PlaceholderBadge /> : null}
    </div>
  );
}
