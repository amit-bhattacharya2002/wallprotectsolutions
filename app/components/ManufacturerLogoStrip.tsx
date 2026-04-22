interface LogoItem {
  name: string;
}

interface ManufacturerLogoStripProps {
  items: LogoItem[];
  className?: string;
}

/**
 * Horizontal row of manufacturer "logos." Until real SVG marks are licensed
 * from each vendor we render them as muted neutral pill placeholders so the
 * layout is already wired up — the drop-in swap later is name-tile → <svg>.
 *
 * Style: subtle `text-slate-400` on a divider row, evenly spaced, wraps on
 * small screens. No background color so it blends into whichever surface the
 * parent section uses.
 */
export default function ManufacturerLogoStrip({
  items,
  className,
}: ManufacturerLogoStripProps) {
  return (
    <div
      className={`flex flex-wrap items-center justify-start gap-x-8 gap-y-4 border-y border-slate-200/80 py-6 md:gap-x-10 md:py-8 ${className ?? ""}`}
      role="list"
      aria-label="Manufacturer partners"
    >
      {/* TODO: swap name tiles for official logos once licensed */}
      {items.map((item) => (
        <div
          key={item.name}
          role="listitem"
          className="text-sm font-medium uppercase tracking-[0.14em] text-slate-400 transition-colors hover:text-slate-600 md:text-[0.95rem]"
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}
