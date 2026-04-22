import Image from "next/image";

interface TestimonialProps {
  quote: string;
  attribution: string;
  firm: string;
  headshotSrc?: string;
}

/**
 * Single pull-quote testimonial card. Center-aligned, max-width ~800px,
 * large italicized display-weight quote with a small teal rule above and
 * avatar + firm line below.
 *
 * TODO: replace with real testimonial (quote, attribution, firm, headshot).
 */
export default function Testimonial({
  quote,
  attribution,
  firm,
  headshotSrc,
}: TestimonialProps) {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[800px] px-6 text-center">
        <div className="mx-auto mb-8 h-0.5 w-12 bg-[#0d9488]" aria-hidden="true" />
        <blockquote className="text-2xl font-medium italic leading-snug tracking-tight text-[#0f172a] md:text-3xl lg:text-[2rem] lg:leading-tight">
          <span className="mr-1 align-[0.2em] text-[#0d9488]">&ldquo;</span>
          {quote}
          <span className="ml-1 align-[0.2em] text-[#0d9488]">&rdquo;</span>
        </blockquote>
        <div className="mt-10 flex items-center justify-center gap-4">
          {headshotSrc ? (
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200">
              <Image
                src={headshotSrc}
                alt=""
                aria-hidden="true"
                width={48}
                height={48}
                className="h-12 w-12 object-cover"
              />
            </div>
          ) : null}
          <div className="text-left">
            <div className="text-sm font-semibold tracking-tight text-[#0f172a]">
              {attribution}
            </div>
            <div className="text-sm text-slate-500">{firm}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
