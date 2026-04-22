"use client";

import { useState } from "react";
import { PageHero, Footer, Header } from "@/app/components";
import Link from "next/link";

const serviceAreas = [
  "Abbotsford", "Armstrong", "Burnaby", "Campbell River", "Castlegar", "Chilliwack", 
  "Colwood", "Coquitlam", "Courtenay", "Cranbrook", "Dawson Creek", "Delta", 
  "Duncan", "Enderby", "Fernie", "Fort St. John", "Grand Forks", "Greenwood", 
  "Kamloops", "Kelowna", "Kimberley", "Langford", "Langley", "Maple Ridge", 
  "Merritt", "Nanaimo", "Nelson", "New Westminster", "North Vancouver", "Parksville", 
  "Penticton", "Pitt Meadows", "Port Alberni", "Port Coquitlam", "Port Moody", 
  "Powell River", "Prince George", "Prince Rupert", "Quesnel", "Revelstoke", 
  "Richmond", "Rossland", "Salmon Arm", "Surrey", "Terrace", "Trail", 
  "Vancouver", "Vernon", "Victoria", "West Kelowna", "White Rock", "Williams Lake"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Contact Us"
          subtitle="Get in touch with our team for any questions, quotes, or project inquiries."
          breadcrumb="Contact"
          quickLinksTitle="Reach us directly"
          fullHeight={false}
          quickLinks={[
            { label: "604-715-9469", href: "tel:604-715-9469" },
            { label: "info@frpinstallations.com", href: "mailto:info@frpinstallations.com" },
            { label: "Get a Quote", href: "/quote" },
            { label: "Schedule a Site Measurement", href: "/schedule-on-site-measurement" },
          ]}
        />

        <section className="section-shell-lg bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-8">
                  Get in Touch
                </h2>
                <p className="text-gray-600 leading-relaxed font-normal mb-12">
                  Have a question about our services? Want to discuss your project? 
                  We&apos;d love to hear from you. Reach out using any of the methods below, 
                  or fill out the contact form.
                </p>

                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2a4663] rounded-lg flex items-center justify-center text-white shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Phone</div>
                      <a href="tel:604-715-9469" className="text-2xl font-semibold text-[#0f172a] hover:text-[#0d9488] transition-colors">
                        604-715-9469
                      </a>
                      <p className="text-gray-600 text-sm mt-1">Mon-Fri 8am-5pm PST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2a4663] rounded-lg flex items-center justify-center text-white shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email</div>
                      <a href="mailto:info@frpinstallations.com" className="text-2xl font-semibold text-[#0f172a] hover:text-[#0d9488] transition-colors">
                        info@frpinstallations.com
                      </a>
                      <p className="text-gray-600 text-sm mt-1">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2a4663] rounded-lg flex items-center justify-center text-white shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Office Address</div>
                      <p className="text-xl font-semibold text-[#0f172a]">
                        FRP Installations Inc.
                      </p>
                      <p className="text-gray-600 mt-1">
                        145-1685 Pinetree Way<br />
                        Coquitlam, BC V3E 3A1
                      </p>
                      <p className="text-[#134e4a] text-sm mt-2 font-medium">(By Appointment Only)</p>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="surface-card-muted p-6">
                  <h3 className="font-semibold text-[#0f172a] mb-4">Quick Links</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/quote" className="text-gray-600 hover:text-[#0d9488] transition-colors text-sm">
                      → Get a Quote
                    </Link>
                    <Link href="/projects" className="text-gray-600 hover:text-[#0d9488] transition-colors text-sm">
                      → View Projects
                    </Link>
                    <Link href="/services/frp-sales" className="text-gray-600 hover:text-[#0d9488] transition-colors text-sm">
                      → FRP Sales
                    </Link>
                    <Link href="/services/frp-installation" className="text-gray-600 hover:text-[#0d9488] transition-colors text-sm">
                      → FRP Installation
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="surface-card-muted p-8 lg:p-10">
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm text-gray-600 mb-2">Full Name *</label>
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
                        <label htmlFor="company" className="block text-sm text-gray-600 mb-2">Company</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="field-input"
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm text-gray-600 mb-2">Email *</label>
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
                        <label htmlFor="phone" className="block text-sm text-gray-600 mb-2">Phone</label>
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
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm text-gray-600 mb-2">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="field-input"
                      >
                        <option value="">Select a subject</option>
                        <option value="quote">Request a Quote</option>
                        <option value="question">General Question</option>
                        <option value="products">Product Information</option>
                        <option value="support">Support / Warranty</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm text-gray-600 mb-2">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="field-input resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#2a4663] text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-[#0d9488]"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="section-shell bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-4">
                Serving British Columbia
              </h2>
              <p className="text-gray-600 font-normal max-w-2xl mx-auto">
                We provide FRP panel sales, installation, and service throughout British Columbia. 
                Our team travels to all major cities and communities.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {serviceAreas.map((city) => (
                <span key={city} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-gray-600 text-sm">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-shell bg-[#eaf6f5] border-t border-[#d5ece8]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
              Prefer to speak with our team directly?
            </h2>
            <p className="text-slate-600 font-normal mb-10 max-w-2xl mx-auto leading-relaxed">
              Call or email us for project questions, coordination details, or next steps. If you need pricing, the quotation request in the footer right below is the best place to send project specifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:604-715-9469"
                className="inline-flex items-center justify-center gap-3 bg-[#2a4663] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0d9488] transition-all"
              >
                Call 604-715-9469
              </a>
              <a
                href="mailto:info@frpinstallations.com"
                className="inline-flex items-center justify-center gap-3 border border-slate-300 text-[#0f172a] px-8 py-4 rounded-full font-medium hover:border-[#0d9488] hover:text-[#0d9488] hover:bg-white/70 transition-all"
              >
                Email Our Team
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
