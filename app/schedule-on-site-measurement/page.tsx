"use client";

import { useState } from "react";
import { PageHero, Footer, Header } from "@/app/components";

export default function ScheduleMeasurementPage() {
  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    email: "",
    projectAddress: "",
    projectCity: "",
    preferredDate: "",
    comments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Measurement request submitted:", formData);
    alert("Thank you for scheduling! Our team will contact you to confirm your on-site measurement appointment.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Schedule On-Site Measurement"
          subtitle="Book a free site visit for accurate measurements and personalized recommendations."
          breadcrumb="Schedule Measurement"
        />

        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Info Column */}
              <div className="lg:col-span-1">
                <div className="sticky top-32">
                  <h2 className="text-2xl font-semibold text-[#0f172a] tracking-tight mb-6">
                    What to Expect
                  </h2>
                  <div className="space-y-4 text-gray-600 font-normal mb-8">
                    <p>
                      On-site measurements typically take anywhere between <strong className="text-[#0f172a]">30 to 90 minutes</strong> depending on the project scope.
                    </p>
                    <p>
                      Our team will also bring <strong className="text-[#0f172a]">samples</strong> of FRP finishes, trim, base moulding, and corner guards for you to see and feel.
                    </p>
                    <p>
                      There are <strong className="text-[#0f172a]">no costs</strong> associated with on-site measurements. We&apos;re happy to meet at your convenience.
                    </p>
                  </div>

                  <div className="bg-[#f8fafc] rounded-xl p-6 mb-8">
                    <h3 className="font-semibold text-[#0f172a] mb-4">During the Visit</h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#f97316] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Accurate wall measurements
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#f97316] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        FRP finish samples to review
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#f97316] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Trim & moulding options
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#f97316] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Expert recommendations
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#f97316] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Detailed quote to follow
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0f172a] rounded-xl p-6 text-white">
                    <h3 className="font-semibold mb-3">Prefer to Call?</h3>
                    <p className="text-white/70 text-sm mb-4">
                      Reach us directly to schedule your measurement or ask questions.
                    </p>
                    <a 
                      href="tel:604-715-9469" 
                      className="inline-flex items-center gap-2 text-[#f97316] hover:text-[#fb923c] font-medium transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      604-715-9469
                    </a>
                  </div>
                </div>
              </div>

              {/* Form Column */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="bg-[#f8fafc] rounded-2xl p-8 lg:p-10">
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-6">Schedule Your Free Site Visit</h3>
                  
                  <div className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm text-gray-600 mb-2">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-[#0f172a] focus:border-[#0f172a] focus:ring-0 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    {/* Phone & Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="telephone" className="block text-sm text-gray-600 mb-2">Telephone</label>
                        <input
                          type="tel"
                          id="telephone"
                          name="telephone"
                          value={formData.telephone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-[#0f172a] focus:border-[#0f172a] focus:ring-0 transition-colors"
                          placeholder="604-XXX-XXXX"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm text-gray-600 mb-2">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-[#0f172a] focus:border-[#0f172a] focus:ring-0 transition-colors"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    {/* Project Address */}
                    <div>
                      <label htmlFor="projectAddress" className="block text-sm text-gray-600 mb-2">Project Address *</label>
                      <input
                        type="text"
                        id="projectAddress"
                        name="projectAddress"
                        required
                        value={formData.projectAddress}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-[#0f172a] focus:border-[#0f172a] focus:ring-0 transition-colors"
                        placeholder="Street address"
                      />
                    </div>

                    {/* Project City & Preferred Date */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="projectCity" className="block text-sm text-gray-600 mb-2">Project City *</label>
                        <input
                          type="text"
                          id="projectCity"
                          name="projectCity"
                          required
                          value={formData.projectCity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-[#0f172a] focus:border-[#0f172a] focus:ring-0 transition-colors"
                          placeholder="e.g., Vancouver, BC"
                        />
                      </div>
                      <div>
                        <label htmlFor="preferredDate" className="block text-sm text-gray-600 mb-2">Preferred Date</label>
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-[#0f172a] focus:border-[#0f172a] focus:ring-0 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Comments */}
                    <div>
                      <label htmlFor="comments" className="block text-sm text-gray-600 mb-2">Comments / Additional Details</label>
                      <textarea
                        id="comments"
                        name="comments"
                        rows={5}
                        value={formData.comments}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-[#0f172a] focus:border-[#0f172a] focus:ring-0 transition-colors resize-none"
                        placeholder="Tell us about your project, preferred time slots, or any questions you have..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0f172a] text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-[#f97316] mt-8"
                  >
                    Schedule My Site Visit
                  </button>

                  <p className="text-sm text-gray-600 text-center mt-4">
                    We&apos;ll confirm your appointment within 1 business day.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Note */}
        <section className="py-16 bg-[#f8fafc] border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 text-[#f97316] mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-medium">Serving All of British Columbia</span>
            </div>
            <p className="text-gray-600 font-normal">
              From Vancouver to Victoria, Kelowna to Prince George — our team provides free on-site measurements 
              across the entire province. No project is too far.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
