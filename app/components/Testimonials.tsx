"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Chuck Lau",
    role: "Commercial Farm Owner",
    content: "These guys came through on short notice. Excellent company to work with. Very professional installers made quick work of 13,000 SF in commercial farm. Was on time, on budget, and cleaned up after themselves.",
  },
  {
    name: "Murrin Bewick",
    role: "Tofino Wilderness Resort",
    content: "These guys did the walls on our longhouse kitchen walls all the way out at Tofino Wilderness Resort! The service was awesome. Sales rep, Beau, is exceptionally helpful.",
  },
  {
    name: "Allen Vidovic",
    role: "Business Owner",
    content: "Great Company! Great People and amazing Installers. We needed about 85 linear feet installed on short notice and these guys came in and rocked it out! Installation was on budget and no surprises.",
  },
  {
    name: "王静楠",
    role: "Restaurant Owner",
    content: "We used white FRP panel for our Kitchen and Janitor's room. Good quality, and they did great job. Fair price.",
  },
  {
    name: "Jacob Vanderveen",
    role: "General Contractor",
    content: "Great quality work done in an efficient and organized manner. Very fast and cleaned up after themselves daily. Will definitely be using FRP Installations again.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="bg-[#0f172a] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div>
            <span className="text-sm font-medium text-[#f97316] tracking-wider uppercase mb-4 block">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
              What our clients say
            </h2>
            <p className="text-lg text-white/70 leading-relaxed font-normal mb-12">
              Don't just take our word for it. Here's what our satisfied clients 
              across British Columbia have to say about our work.
            </p>

            {/* Google Rating */}
            <div className="flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10 inline-flex">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-[#f97316]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div>
                <div className="text-white font-semibold">5.0 Rating</div>
                <div className="text-white/70 text-sm">on Google Reviews</div>
              </div>
            </div>
          </div>

          {/* Right Column - Testimonial Cards */}
          <div className="relative">
            {/* Active Testimonial */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10">
              <svg className="w-10 h-10 text-[#f97316] mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-normal min-h-[150px]">
                "{testimonials[activeIndex].content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f97316] flex items-center justify-center text-white font-semibold text-lg">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-white/70 text-sm">
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-[#f97316] w-8"
                        : "bg-white/30 hover:bg-white/50 w-2"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setActiveIndex((current) => (current + 1) % testimonials.length)}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
