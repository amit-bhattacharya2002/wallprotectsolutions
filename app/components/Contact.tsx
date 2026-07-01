"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitState({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setSubmitState({
          type: "error",
          message: payload.error ?? "We could not send your message. Please try again.",
        });
        return;
      }

      setSubmitState({
        type: "success",
        message: payload.message ?? "Thanks for reaching out. Our team will follow up shortly.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      setSubmitState({
        type: "error",
        message: "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (submitState.type !== "idle") {
      setSubmitState({ type: "idle", message: "" });
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-shell-lg relative isolate overflow-hidden border-t border-slate-200/70 bg-[#081625]">
      <Image
        src="/actualphotos/usedforcontact.jpg"
        alt=""
        aria-hidden="true"
        fill
        quality={100}
        sizes="100vw"
        className="pointer-events-none -z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,22,37,0.78)_0%,rgba(8,22,37,0.44)_46%,rgba(8,22,37,0.72)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.22),transparent_28%),radial-gradient(circle_at_78%_8%,rgba(0,94,184,0.28),transparent_34%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="reveal overflow-hidden border border-white/55 bg-white/95 shadow-[0_34px_90px_-34px_rgba(0,0,0,0.62)] ring-1 ring-white/80 backdrop-blur-xl">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            <div className="border-b border-slate-200 px-6 py-7 sm:px-8 lg:border-b-0 lg:border-r lg:px-10 lg:py-10">
              <span className="eyebrow">Contact Us</span>
              <h2 className="mt-3 mb-4 max-w-md text-3xl font-semibold leading-tight tracking-tight text-[#0b1220] md:text-4xl">
                Let&apos;s plan the right wall system.
              </h2>
              <p className="max-w-xl text-sm leading-6 text-slate-600">
                Talk with a specialist about FRP, hygienic wall cladding, and impact protection scopes. We support GCs, project managers, and design teams from pre-construction through closeout.
              </p>

              <div className="mt-8 border-t border-slate-200">
                <div className="grid gap-1.5 border-b border-slate-200 py-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">Phone</div>
                  <a href="tel:604-715-9469" className="text-xl font-bold tracking-tight text-[#64A70B] transition-colors hover:text-[#4f8f16]">
                    604-715-9469
                  </a>
                </div>
                <div className="grid gap-1.5 border-b border-slate-200 py-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">Email</div>
                  <a href="mailto:info@frpinstallations.com" className="wrap-break-word text-base font-bold tracking-tight text-[#64A70B] transition-colors hover:text-[#4f8f16]">
                    info@frpinstallations.com
                  </a>
                </div>
                <div className="grid gap-1.5 py-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">Office</div>
                  <p className="text-sm font-semibold leading-snug text-[#0f172a]">
                    145-1685 Pinetree Way<br />
                    Coquitlam, BC V3E 3A1
                  </p>
                  <p className="text-xs font-medium text-gray-600">By appointment only</p>
                </div>
              </div>

              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {["Free Site Visits", "24hr Response", "No Obligation"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#64A70B]" />
                    <span className="font-medium text-[#0f172a]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="px-6 py-7 sm:px-8 lg:px-10 lg:py-10">
              <div className="mb-6 border-b border-slate-200 pb-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4f8f16]">Send us a message</h3>
                    <p className="mt-2 max-w-2xl text-lg leading-7 text-slate-600">
                      Tell us what you are building. Our team typically replies within one business day.
                    </p>
                  </div>
                  <div className="text-sm font-semibold text-[#0b1220]">BC & Western Canada</div>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-600">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="field-input bg-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-600">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="field-input bg-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-600">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="field-input bg-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]"
                    placeholder="604-XXX-XXXX"
                  />
                </div>

                <div className="flex min-h-[8rem] flex-col md:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-600">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="field-input min-h-[8rem] resize-none bg-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]"
                    placeholder="Tell us about your project"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                  Project inquiries only
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-3 bg-[#005EB8] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#004A91] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending message..." : "Send message"}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {submitState.type !== "idle" && (
                <div
                  className={`mt-5 px-4 py-3 text-sm leading-relaxed ${
                    submitState.type === "success"
                      ? "bg-[#f2f8e8] text-[#004A91] border border-[#9BCB4A]"
                      : "bg-[#fff1f2] text-[#be123c] border border-[#fecdd3]"
                  }`}
                >
                  {submitState.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
