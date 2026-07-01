"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Chuck Lau",
    role: "Commercial Farm Owner",
    location: "Lower Mainland, BC",
    scope: "13,000 SF commercial farm",
    content:
      "These guys came through on short notice. Excellent company to work with. Very professional installers made quick work of 13,000 SF in commercial farm. Was on time, on budget, and cleaned up after themselves.",
  },
  {
    name: "Murrin Bewick",
    role: "Tofino Wilderness Resort",
    location: "Tofino, BC",
    scope: "Longhouse kitchen wall package",
    content:
      "These guys did the walls on our longhouse kitchen walls all the way out at Tofino Wilderness Resort! The service was awesome. Sales rep, Beau, is exceptionally helpful.",
  },
  {
    name: "Allen Vidovic",
    role: "Business Owner",
    location: "Vancouver, BC",
    scope: "85 linear feet fast-track install",
    content:
      "Great Company! Great People and amazing Installers. We needed about 85 linear feet installed on short notice and these guys came in and rocked it out! Installation was on budget and no surprises.",
  },
  {
    name: "王静楠",
    role: "Restaurant Owner",
    location: "Burnaby, BC",
    scope: "Kitchen and janitor room cladding",
    content:
      "We used white FRP panel for our Kitchen and Janitor's room. Good quality, and they did great job. Fair price.",
  },
  {
    name: "Jacob Vanderveen",
    role: "General Contractor",
    location: "Fraser Valley, BC",
    scope: "Commercial interior wall scope",
    content:
      "Great quality work done in an efficient and organized manner. Very fast and cleaned up after themselves daily. Will definitely be using FRP Installations again.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false,
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((c) => (c + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [paused, reduceMotion]);

  const active = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      className="section-shell-lg section-shell-dark grain-overlay relative isolate flex min-h-[min(92vh,56rem)] flex-col overflow-hidden bg-[#10233F] lg:min-h-[min(88vh,52rem)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <Image
        src="/actualphotos/7.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-0 object-cover object-center filter-[saturate(0.88)_brightness(0.82)]"
      />
      <div className="pointer-events-none absolute inset-0 z-1 bg-[#10233F]/90" />
      <div
        className="pointer-events-none absolute -top-24 -left-20 z-2 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(155,203,74,0.18) 0%, rgba(155,203,74,0) 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-20 z-2 h-80 w-80 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 72%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 lg:px-8">
        <div className="section-header reveal mx-auto mb-10 max-w-3xl shrink-0 text-center lg:mb-12">
          <span className="eyebrow">Testimonials</span>
          <h2 className="section-title section-title-dark mb-4">What our clients say</h2>
          <p className="section-lead section-lead-dark mx-auto">
            Don&apos;t just take our word for it. Here is feedback from owners, GCs, and operators across British Columbia.
          </p>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-10 pb-2 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start lg:gap-16">
          <div className="reveal flex flex-col justify-center gap-8 lg:min-h-[min(52vh,28rem)]">
            <div className="hidden border-y border-white/10 py-6 md:block">
              <div className="mb-5 flex shrink-0 gap-0.5" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-4 w-4 text-[#9BCB4A]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-semibold tracking-tight text-white">5.0</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Google rating</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold tracking-tight text-white">100+</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Completed installs</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold tracking-tight text-white">24hr</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Response cadence</div>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Recent client voices</div>
              <div className="border-y border-white/10">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={index === activeIndex}
                    className={`group flex w-full items-center justify-between gap-4 border-b border-white/10 px-4 py-4 text-left transition-colors last:border-b-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9BCB4A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#10233F] ${
                      index === activeIndex ? "bg-[#163152] text-white" : "bg-transparent text-white/62 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold">{item.name}</div>
                      <div className="truncate text-xs text-white/45">{item.role}</div>
                    </div>
                    <span className={`text-xs font-semibold tabular-nums ${index === activeIndex ? "text-[#9BCB4A]" : "text-white/28"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          <div className="reveal flex min-h-0 flex-1 flex-col justify-center lg:min-h-[min(52vh,28rem)]">
            <div className="relative flex h-136 flex-none flex-col overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#163152] p-8 text-white shadow-[0_24px_70px_-36px_rgba(2,6,23,0.72)] md:h-128 lg:h-120 lg:p-12 xl:p-14">
              <div
                className="pointer-events-none absolute -top-20 right-4 h-52 w-52 rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(155,203,74,0.12) 0%, rgba(155,203,74,0) 72%)" }}
                aria-hidden="true"
              />
              <div className="absolute bottom-10 left-0 top-10 w-1 rounded-full bg-[#64A70B] opacity-90 lg:bottom-12 lg:top-12" aria-hidden="true" />

              <div className="mb-5 ml-2 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/16 bg-white/6 px-2.5 py-1 text-xs text-white/70">{active.location}</span>
                  <span className="rounded-full border border-[#9BCB4A]/35 bg-[#9BCB4A]/10 px-2.5 py-1 text-xs text-[#d9f99d]">
                    {active.scope}
                  </span>
                </div>
                <span className="text-xs font-medium tracking-[0.14em] text-white/45">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>

              <svg
                className="mb-6 ml-2 h-10 w-10 shrink-0 text-[#9BCB4A] lg:h-12 lg:w-12"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <blockquote className="ml-2 flex min-h-0 flex-1 flex-col border-none p-0" aria-live="polite">
                <p
                  key={activeIndex}
                  className="mb-0 flex-1 text-sm font-normal leading-7 text-white/90 md:text-base md:leading-8 lg:text-lg xl:text-xl xl:leading-9"
                  id="testimonial-quote"
                >
                  <span className="font-medium text-[#9BCB4A]">&ldquo;</span>
                  {active.content}
                  <span className="font-medium text-[#9BCB4A]">&rdquo;</span>
                </p>
                <footer className="mt-7 ml-2 flex shrink-0 items-center gap-4 border-t border-white/10 pt-6 lg:mt-8 lg:pt-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#005EB8] text-base font-semibold text-white ring-2 ring-white/20 shadow-sm lg:h-14 lg:w-14 lg:text-lg">
                    {active.name.charAt(0)}
                  </div>
                  <div>
                    <cite className="not-italic text-base font-semibold tracking-tight text-white lg:text-lg">{active.name}</cite>
                    <div className="text-sm text-white/60 lg:text-base">{active.role}</div>
                  </div>
                </footer>
              </blockquote>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 lg:mt-8">
              <div className="flex gap-2" role="tablist" aria-label="Choose testimonial">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    role="tab"
                    aria-selected={index === activeIndex}
                    aria-controls="testimonial-quote"
                    onClick={() => setActiveIndex(index)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9BCB4A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#10233F]"
                  >
                    <span
                      aria-hidden
                      className={`block rounded-full transition-all duration-300 ${
                        index === activeIndex ? "h-2 w-8 bg-[#9BCB4A]" : "h-2 w-2 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all hover:border-white/40 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9BCB4A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#10233F]"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all hover:border-white/40 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9BCB4A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#10233F]"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal mt-10 hidden border-t border-white/10 pt-7 md:flex md:items-center md:justify-between md:gap-8 lg:mt-12">
          <p className="max-w-2xl text-sm leading-relaxed text-white/62">
            From remote hospitality to commercial kitchens and fast-track interiors, teams call out our communication, cleanliness, and schedule discipline.
          </p>
          <div className="flex flex-wrap justify-end gap-x-6 gap-y-2">
            {["On budget", "Tidy installs", "Short-notice capable", "Clear communication"].map((tag) => (
              <span key={tag} className="text-xs font-semibold uppercase tracking-[0.14em] text-white/46">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
