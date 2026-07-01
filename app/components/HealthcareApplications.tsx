"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const applications = [
  {
    area: "Hand hygiene sink walls",
    focus: "Splash exposure, sealed penetrations, cleanable surface transitions",
    detail: "Common review points include touchless fixture locations, soap and towel dispenser placement, substrate condition, sealed penetrations, and how the wall finish terminates at counters or adjacent surfaces.",
  },
  {
    area: "Clean and soiled utility rooms",
    focus: "Moisture, chemicals, storage impact, room-by-room finish selection",
    detail: "Clean and soiled utility rooms can look similar on drawings, but the cleaning protocol, sink use, waste handling, and storage impact often call for different wall protection decisions.",
  },
  {
    area: "Clinical corridors",
    focus: "Bed, cart, wheelchair, corner, rail, door, and sheet protection",
    detail: "Corridor packages usually combine several systems: sheet protection, wall guards, crash rails, corner guards, handrails, door protection, and carefully coordinated mounting heights.",
  },
  {
    area: "Procedure and exam rooms",
    focus: "Cleanability, high-touch zones, casework transitions, durable finishes",
    detail: "These rooms often need cleanable wall finishes at sinks, casework, exam areas, and high-touch zones without over-specifying a fully welded hygienic system everywhere.",
  },
  {
    area: "Public and patient washrooms",
    focus: "Wet wall assemblies, FRP, stainless, and hygienic wall protection",
    detail: "Washrooms put pressure on moisture resistance, cleaning durability, impact protection, and transitions around partitions, accessories, plumbing fixtures, and flooring.",
  },
  {
    area: "OR-adjacent support spaces",
    focus: "Seamless surfaces, hygienic detailing, penetrations, and terminations",
    detail: "OR-adjacent spaces benefit from early review of room classification, penetrations, transition details, and whether the project truly needs a seamless hygienic wall system.",
  },
];

export default function HealthcareApplications() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#0c1c32]">
      <Image
        src="/actualphotos/hero-healthcare-lounge.jpg"
        alt="Healthcare lounge with architectural wall protection and glazing"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-[0.78]"
      />
      <div className="absolute inset-0 bg-[#071522]/54" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,21,34,0.98)_0%,rgba(7,21,34,0.86)_48%,rgba(7,21,34,0.38)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-14">
          <div className="reveal">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9BCB4A]">Healthcare Applications</span>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              Wall protection decisions by clinical space.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/86 md:text-lg md:leading-8">
              Healthcare projects rarely need one product everywhere. We help project teams match wall protection, FRP, hygienic cladding, stainless, and architectural protection to the actual room conditions.
            </p>
            <p className="mt-6 max-w-lg border-l-2 border-[#9BCB4A] pl-4 text-sm leading-6 text-white/74">
              Final requirements vary by health authority, project specifications, and Infection Prevention &amp; Control review.
            </p>
          </div>

          <div className="reveal reveal-stagger-1">
            <div className="border-t border-white/25">
              {applications.map((item, index) => (
                <div
                  key={item.area}
                  className="border-b border-white/20"
                >
                  <button
                    type="button"
                    className="flex w-full cursor-pointer items-center justify-between gap-5 py-5 text-left outline-none transition-colors hover:text-white"
                    aria-expanded={openIndex === index}
                    aria-controls={`healthcare-application-${index}`}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="text-lg font-semibold leading-6 text-white">
                      {item.area}
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center border text-lg leading-none transition-colors ${
                        openIndex === index
                          ? "border-[#9BCB4A]/70 bg-[#9BCB4A] text-[#071522]"
                          : "border-white/25 text-[#9BCB4A]"
                      }`}
                    >
                      <span className="translate-y-[-1px]">
                        {openIndex === index ? "-" : "+"}
                      </span>
                    </span>
                  </button>
                  {openIndex === index && (
                    <div id={`healthcare-application-${index}`} className="max-w-2xl pb-6 pr-10">
                      <p className="text-base leading-7 text-white/84">
                        {item.focus}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-white/66">
                        {item.detail}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/58">
                Hospitals · Clinics · UPCCs · Long-term care
              </p>
              <Link
                href="/healthcare"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#9BCB4A] transition-all hover:gap-3 hover:text-white"
              >
                View healthcare experience
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
