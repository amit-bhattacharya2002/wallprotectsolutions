/**
 * Tiny pill badge that marks a photo as a placeholder.
 *
 * Renders only when the public env var `NEXT_PUBLIC_SHOW_PLACEHOLDER_BADGES`
 * is set to `"true"`. Leave it unset in production. This lets QA / staging
 * spot every "swap before launch" image at a glance.
 */
export default function PlaceholderBadge() {
  if (process.env.NEXT_PUBLIC_SHOW_PLACEHOLDER_BADGES !== "true") return null;
  return (
    <span className="pointer-events-none absolute bottom-2 right-2 z-10 inline-flex items-center gap-1 rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
      <span className="h-1 w-1 rounded-full bg-amber-300" aria-hidden="true" />
      Placeholder photo
    </span>
  );
}
