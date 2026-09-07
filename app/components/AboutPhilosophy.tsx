"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { sitePhotos, type SitePhotoMeta } from "@/app/data/site-photos";

type PhilosophyBeat = {
  id: string;
  title: string;
  body: string;
  factors?: string[];
  points?: string[];
  partners?: boolean;
  photo: SitePhotoMeta;
};

const FACTORS = [
  "Application suitability and infection-control classification",
  "Specification alignment and health authority requirements",
  "Budget constraints and value-engineering potential",
  "Durability and long-term maintenance requirements",
  "Transitions into adjacent materials and finishes",
  "Manufacturer lead times and regional availability",
];

const BEATS: PhilosophyBeat[] = [
  {
    id: "environment",
    title: "The right system for the environment",
    body: "We focus on selecting the right system for the environment rather than promoting a single manufacturer or product. Different wall protection and hygienic systems perform best in different applications, budgets, and maintenance conditions.",
    points: [
      "Chosen for the room, not a preferred brand",
      "Matched to application, budget, and maintenance",
      "Different systems for different conditions",
    ],
    photo: sitePhotos.about.philosophy,
  },
  {
    id: "healthcare",
    title: "Especially relevant in healthcare",
    body: "This is especially relevant in healthcare, where overspecifying can waste project budget and underspecifying can create long-term performance and infection-control problems.",
    points: [
      "Overspecifying wastes project budget",
      "Underspecifying creates infection-control risk",
      "The clinical environment decides the finish",
    ],
    photo: sitePhotos.healthcare.upcc,
  },
  {
    id: "factors",
    title: "Factors we consider in system selection",
    body: "Each room is reviewed against the conditions that actually decide the finish — not a catalogue default.",
    factors: FACTORS,
    photo: sitePhotos.systems.hygienic,
  },
  {
    id: "partners",
    title: "Manufacturer partners, without product bias",
    body: "We have particularly strong relationships with Construction Specialties and Altro, and regularly work with Inpro, Panolam, Marlite, Valto, Formica, Avonite, and others — always selecting based on the right fit for the project.",
    points: [
      "Deep Construction Specialties and Altro relationships",
      "Regular work with Inpro, Panolam, Marlite, Valto, Formica, and Avonite",
      "Selected for the right fit — never by default",
    ],
    partners: true,
    photo: sitePhotos.manufacturers,
  },
];

const N = BEATS.length;
const TRAVEL = N - 1;

function FactorsList({ items, className }: { items: string[]; className: string }) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
          <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#64A70B]" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}

function BeatCopy({ beat }: { beat: PhilosophyBeat }) {
  return (
    <div className="max-w-xl">
      <h2 className="max-w-[16ch] text-3xl font-semibold tracking-tight text-[#0f172a] lg:text-4xl">
        {beat.title}
      </h2>
      <p className="mt-4 text-[0.95rem] leading-relaxed text-gray-600 md:leading-[1.7]">
        {beat.body}
      </p>
      {beat.factors || beat.points ? (
        <FactorsList
          items={beat.factors ?? beat.points ?? []}
          className={beat.factors ? "mt-5 grid gap-2 sm:grid-cols-2" : "mt-5 space-y-2.5"}
        />
      ) : null}
      {beat.partners ? (
        <Link
          href="/manufacturers"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#64A70B] transition-all hover:gap-3"
        >
          View all manufacturer partners
          <span aria-hidden>→</span>
        </Link>
      ) : null}
    </div>
  );
}

function BeatPhoto({ beat, priority = false }: { beat: PhilosophyBeat; priority?: boolean }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-[0_28px_70px_-36px_rgba(15,23,42,0.45)]">
      <Image
        src={beat.photo.src}
        alt={beat.photo.alt}
        fill
        sizes="(min-width: 1024px) 44vw, 50vw"
        priority={priority}
        className="object-cover"
      />
      {beat.photo.caption ? (
        <p className="absolute bottom-4 left-5 z-10 text-xs font-medium tracking-wide text-white/90 drop-shadow">
          {beat.photo.caption}
        </p>
      ) : null}
    </div>
  );
}

function localProgress(p: number, index: number): number {
  return p * TRAVEL - index;
}

function PhilosophyPanel({
  beat,
  index,
  progress,
}: {
  beat: PhilosophyBeat;
  index: number;
  progress: MotionValue<number>;
}) {
  const imageLeft = index % 2 === 1;
  const y = useTransform(progress, (p) => `${localProgress(p, index) * -100}%`);
  const copyY = useTransform(progress, (p) => localProgress(p, index) * -56);
  const imageShift = useTransform(progress, (p) => localProgress(p, index) * 90);
  const pointerEvents = useTransform(progress, (p) => (Math.abs(localProgress(p, index)) < 0.55 ? "auto" : "none"));

  return (
    <motion.article
      className="absolute inset-0 grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16"
      style={{ y, pointerEvents, zIndex: N - index }}
    >
      <motion.div className={imageLeft ? "md:order-2" : undefined} style={{ y: copyY }}>
        <BeatCopy beat={beat} />
      </motion.div>
      <motion.div
        className={`relative aspect-4/3 w-full overflow-hidden ${imageLeft ? "md:order-1" : ""}`}
        style={{ y: imageShift }}
      >
        <BeatPhoto beat={beat} priority={index === 0} />
      </motion.div>
    </motion.article>
  );
}

function PhilosophyScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.28 });

  return (
    <div ref={scrollRef} className="relative h-[320vh] bg-[#f8fafc]">
      <div className="sticky top-16 flex h-[calc(100svh-4rem)] flex-col overflow-hidden bg-[#f8fafc] lg:top-18 lg:h-[calc(100svh-4.5rem)]">
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col px-6 lg:px-8">
          <p className="shrink-0 pt-5 text-sm font-medium uppercase tracking-wider text-[#64A70B]">
            Product Selection Philosophy
          </p>
          <div className="relative min-h-0 flex-1 overflow-hidden">
            {BEATS.map((beat, index) => (
              <PhilosophyPanel key={beat.id} beat={beat} index={index} progress={progress} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PhilosophyCarousel() {
  return (
    <section className="bg-[#f8fafc] py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-6 text-sm font-medium uppercase tracking-wider text-[#64A70B]">
          Product Selection Philosophy
        </p>

        <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {BEATS.map((beat) => (
            <article
              key={beat.id}
              className="flex w-[min(85vw,36rem)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_22px_60px_-36px_rgba(15,23,42,0.28)]"
            >
              <div className="relative aspect-16/10 w-full shrink-0">
                <Image src={beat.photo.src} alt={beat.photo.alt} fill sizes="85vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col px-5 py-6">
                <h2 className="mb-3 text-xl font-semibold tracking-tight text-[#0f172a]">{beat.title}</h2>
                <p className="text-sm leading-relaxed text-gray-600">{beat.body}</p>
                {beat.factors || beat.points ? (
                  <FactorsList items={beat.factors ?? beat.points ?? []} className="mt-4 space-y-2.5" />
                ) : null}
                {beat.partners ? (
                  <Link href="/manufacturers" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#64A70B]">
                    View all manufacturer partners
                    <span aria-hidden>→</span>
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPhilosophy() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const reduceMotion = usePrefersReducedMotion();

  if (!isDesktop || reduceMotion) {
    return <PhilosophyCarousel />;
  }

  return (
    <section className="scroll-mt-28 py-0" aria-label="Product selection philosophy">
      <PhilosophyScroll />
    </section>
  );
}
