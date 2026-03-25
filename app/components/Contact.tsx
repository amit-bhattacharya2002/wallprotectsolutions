"use client";

import { useState } from "react";

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
    <section id="contact" className="section-shell-lg bg-[#f3f6f8] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div>
            <span className="eyebrow">Contact Us</span>
            <h2 className="section-title mb-4">
              Let&apos;s talk about your project
            </h2>
            <p className="section-lead mb-8 max-w-md">
              Ready to discuss your project scope? We work directly with GCs, project managers, and design teams — from pre-construction through to closeout documentation.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f8fafc] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#0f172a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Phone</div>
                  <a href="tel:604-715-9469" className="text-xl font-semibold text-[#0f172a] hover:text-[#0d9488] transition-colors">
                    604-715-9469
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f8fafc] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#0f172a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email</div>
                  <a href="mailto:info@frpinstallations.com" className="text-xl font-semibold text-[#0f172a] hover:text-[#0d9488] transition-colors">
                    info@frpinstallations.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f8fafc] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#0f172a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Address</div>
                  <p className="text-lg text-[#0f172a] font-medium">
                    145-1685 Pinetree Way<br />
                    Coquitlam, BC V3E 3A1
                  </p>
                  <p className="text-sm text-gray-500 mt-1">(By Appointment Only)</p>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4">
              <div className="pill-tag">
                <svg className="w-4 h-4 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free Site Visits</span>
              </div>
              <div className="pill-tag">
                <svg className="w-4 h-4 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>24hr Response</span>
              </div>
              <div className="pill-tag">
                <svg className="w-4 h-4 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No Obligation</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="surface-card-muted p-8 lg:p-10">
            <h3 className="text-2xl font-semibold text-[#0f172a] mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-600 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="field-input"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="field-input"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-gray-600 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="field-input"
                  placeholder="604-XXX-XXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-600 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="field-input resize-none"
                  placeholder="Tell us about your project"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full inline-flex items-center justify-center gap-3 bg-[#0f172a] text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-[#0d9488]"
              >
                {isSubmitting ? "Sending message..." : "Send message"}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              {submitState.type !== "idle" && (
                <div
                  className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    submitState.type === "success"
                      ? "bg-[#ecfeff] text-[#0f766e] border border-[#99f6e4]"
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
