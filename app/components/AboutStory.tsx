"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { sitePhotos, type SitePhotoMeta } from "@/app/data/site-photos";

type StoryBeat = {
  id: string;
  title: string;
  body: string;
  photo: SitePhotoMeta;
};

const BEATS: StoryBeat[] = [
  {
    id: "foundation",
    title: "Built on healthcare. Positioned for growth.",
    body: "FRP Installations Inc. was founded with a background in commercial general contracting — which means we came into the wall protection space with a broader project understanding than most specialty subcontractors. We understand schedules, trade coordination, specification requirements, and the documentation demands of large institutional projects.",
    photo: sitePhotos.about.story,
  },
  {
    id: "healthcare",
    title: "Healthcare is the core of the work.",
    body: "Over 20 years, healthcare became the core of our business. We have now completed over 700 projects across British Columbia, with 75% or more of our work in healthcare and institutional environments — hospitals, clinics, UPCC facilities, long-term care, and medical office buildings.",
    photo: sitePhotos.healthcare.featured,
  },
  {
    id: "specialist",
    title: "Not simply an FRP installer.",
    body: "We are not simply an FRP installer. We are a specialist wall protection and hygienic systems subcontractor. We supply and install complete systems from leading manufacturers including Construction Specialties, Altro, Inpro, Panolam, Marlite, and others — selecting the right product for the application, not promoting a single brand.",
    photo: sitePhotos.healthcare.hospital,
  },
  {
    id: "name",
    title: "A name that matches the work.",
    body: "Over the next 12–18 months, we are transitioning from the FRP Installations Inc. brand toward Wall Protection Solutions Inc. — a name that better reflects the breadth of what we do and the clients we serve.",
    photo: sitePhotos.industries.healthcare,
  },
];

const N = BEATS.length;
const FADE = 0.12;

function smoothstep01(t: number): number {
  const s = Math.min(1, Math.max(0, t));
  return s * s * (3 - 2 * s);
}

function visibility(p: number, i: number): number {
  const start = i / N;
  const end = (i + 1) / N;
  const half = FADE / 2;
  const isFirst = i === 0;
  const isLast = i === N - 1;

  if (!isFirst) {
    if (p < start - half) return 0;
    if (p < start + half) return smoothstep01((p - (start - half)) / FADE);
  }
  if (!isLast) {
    if (p > end + half) return 0;
    if (p > end - half) return smoothstep01((end + half - p) / FADE);
  }
  return 1;
}

function StoryScrollImage({
  beat,
  index,
  progress,
}: {
  beat: StoryBeat;
  index: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, (p) => visibility(p, index));
  const scale = useTransform(progress, (p) => 1 + visibility(p, index) * 0.06);

  return (
    <motion.div className="absolute inset-0" style={{ opacity, zIndex: index + 1 }}>
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image
          src={beat.photo.src}
          alt={beat.photo.alt}
          fill
          sizes="(min-width: 1024px) 44vw, 50vw"
          priority={index === 0}
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

function StoryScrollCopy({
  beat,
  index,
  progress,
}: {
  beat: StoryBeat;
  index: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, (p) => visibility(p, index));
  const y = useTransform(progress, (p) => (1 - visibility(p, index)) * 16);

  return (
    <motion.div className="absolute inset-0 flex flex-col justify-start" style={{ opacity, y }}>
      <h2 className="mb-6 max-w-[16ch] text-3xl font-semibold tracking-tight text-[#0f172a] md:text-4xl lg:text-5xl">
        {beat.title}
      </h2>
      <p className="max-w-xl text-[0.95rem] leading-relaxed text-gray-600 md:text-base md:leading-[1.7]">
        {beat.body}
      </p>
    </motion.div>
  );
}

function StoryProgressTick({
  index,
  progress,
}: {
  index: number;
  progress: MotionValue<number>;
}) {
  const width = useTransform(progress, (p) => {
    const start = index / N;
    const end = (index + 1) / N;
    const t = Math.min(1, Math.max(0, (p - start) / (end - start)));
    return `${Math.round(t * 100)}%`;
  });

  return (
    <span className="relative h-1 flex-1 overflow-hidden rounded-full bg-slate-200">
      <motion.span className="absolute inset-y-0 left-0 bg-[#005EB8]" style={{ width }} />
    </span>
  );
}

function StoryScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.28 });

  return (
    <div ref={scrollRef} className="relative h-[280vh] bg-white">
      <div className="sticky top-16 flex h-[calc(100svh-4rem)] items-center overflow-hidden bg-white lg:top-[4.5rem] lg:h-[calc(100svh-4.5rem)]">
        <div className="mx-auto grid h-full w-full max-w-7xl items-center gap-10 px-6 py-10 md:grid-cols-[1.05fr_0.95fr] md:gap-12 lg:gap-16 lg:px-8 lg:py-14">
          <div className="flex min-h-0 flex-col justify-center">
            <p className="mb-5 text-sm font-medium uppercase tracking-wider text-[#64A70B]">Our Story</p>
            <div className="relative min-h-[22rem]">
              {BEATS.map((beat, index) => (
                <StoryScrollCopy key={beat.id} beat={beat} index={index} progress={progress} />
              ))}
            </div>
            <div className="mt-8 flex max-w-md gap-2">
              {BEATS.map((beat, index) => (
                <StoryProgressTick key={beat.id} index={index} progress={progress} />
              ))}
            </div>
          </div>

          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-[0_28px_70px_-36px_rgba(15,23,42,0.45)]">
            {BEATS.map((beat, index) => (
              <StoryScrollImage key={beat.id} beat={beat} index={index} progress={progress} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StoryCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = (index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActive(index);
  };

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-8 text-sm font-medium uppercase tracking-wider text-[#64A70B]">Our Story</p>

        <div
          ref={scrollerRef}
          onScroll={(event) => {
            const el = event.currentTarget;
            const card = el.children[0] as HTMLElement | undefined;
            const stride = (card?.offsetWidth ?? el.clientWidth) + 16;
            const index = Math.round(el.scrollLeft / Math.max(stride, 1));
            setActive(Math.min(BEATS.length - 1, Math.max(0, index)));
          }}
          className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {BEATS.map((beat) => (
            <article
              key={beat.id}
              className="w-[min(85vw,36rem)] shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_22px_60px_-36px_rgba(15,23,42,0.28)]"
            >
              <div className="relative aspect-16/10">
                <Image src={beat.photo.src} alt={beat.photo.alt} fill sizes="85vw" className="object-cover" />
              </div>
              <div className="px-5 py-6">
                <h2 className="mb-3 text-xl font-semibold tracking-tight text-[#0f172a]">{beat.title}</h2>
                <p className="text-sm leading-relaxed text-gray-600">{beat.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {BEATS.map((beat, index) => (
            <button
              key={beat.id}
              type="button"
              aria-label={`Show story slide ${index + 1}`}
              aria-current={index === active}
              onClick={() => goTo(index)}
              className="flex h-8 w-8 items-center justify-center"
            >
              <span className={`block h-1.5 w-1.5 rounded-full ${index === active ? "bg-[#0f172a]" : "bg-slate-300"}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutStory() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const reduceMotion = usePrefersReducedMotion();

  if (!isDesktop || reduceMotion) {
    return <StoryCarousel />;
  }

  return (
    <section className="scroll-mt-28 py-0" aria-label="Our story">
      <StoryScroll />
    </section>
  );
}
