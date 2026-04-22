"use client";

import { useState } from "react";
import { PageHero, Footer, Header } from "@/app/components";

const projectTypes = [
  "New Installation",
  "Renovation / Replacement",
  "Repair / Maintenance",
  "Panel Supply Only",
  "Consultation",
];

const industryTypes = [
  "Restaurant / Food Service",
  "Healthcare / Medical",
  "Food Processing",
  "Cannabis Cultivation",
  "Education",
  "Fitness / Recreation",
  "Industrial / Warehouse",
  "Retail",
  "Other",
];

const howDidYouHear = [
  "Google Search",
  "Referral",
  "Previous Customer",
  "Social Media",
  "Trade Show",
  "Other",
];

export default function QuotePage() {
  const [formData, setFormData] = useState({
    // Contact Info
    name: "",
    email: "",
    phone: "",
    company: "",
    // Project Details
    projectType: "",
    industry: "",
    squareFootage: "",
    location: "",
    timeline: "",
    budget: "",
    // Additional Info
    description: "",
    hasDrawings: "",
    siteVisit: "",
    howHeard: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote request submitted:", formData);
    alert("Thank you for your quote request! We'll review your project details and get back to you within 24 hours with a detailed estimate.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Get a Quote"
          subtitle="Submit your project specifications for a free, no-obligation quote. We respond quickly with accurate pricing."
          breadcrumb="Quote"
          quickLinksTitle="Other options"
          quickLinks={[
            { label: "Contact Us Directly", href: "/contact" },
            { label: "Pre-Construction Support", href: "/pre-construction" },
            { label: "Healthcare Experience", href: "/healthcare" },
            { label: "View All Systems", href: "/systems" },
          ]}
        />

        <section className="section-shell-lg bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Info Column */}
              <div className="lg:col-span-1">
                <div className="sticky top-32">
                  <h2 className="text-2xl font-semibold text-[#0f172a] tracking-tight mb-6">
                    Free Site Visits & Quotes
                  </h2>
                  <div className="space-y-4 text-gray-600 font-normal mb-8">
                    <p>
                      We strive to provide quotations according to your deadlines based on the 
                      project specifications provided.
                    </p>
                    <p>
                      Alternatively, our team can attend your site to take on-site measurements 
                      at your convenience. <strong className="text-[#0f172a]">There are no additional 
                      costs</strong> for site visits.
                    </p>
                    <p>
                      We would be pleased to meet with you anytime to review your wall protection needs.
                    </p>
                  </div>

                  <div className="surface-card-muted p-6 mb-8">
                    <h3 className="font-semibold text-[#0f172a] mb-4">What to Include</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[#134e4a] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Approximate square footage
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[#134e4a] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Type of space / application
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[#134e4a] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Project location
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[#134e4a] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Desired timeline
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[#134e4a] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Any drawings or specifications
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-gray-200">
                    <div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Phone</div>
                      <a href="tel:604-715-9469" className="text-lg font-semibold text-[#0f172a] hover:text-[#0d9488] transition-colors">
                        604-715-9469
                      </a>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email</div>
                      <a href="mailto:info@frpinstallations.com" className="text-lg font-semibold text-[#0f172a] hover:text-[#0d9488] transition-colors">
                        info@frpinstallations.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Column */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="surface-card-muted p-8 lg:p-10">
                  {/* Contact Information */}
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#0f172a] mb-6">Contact Information</h3>
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
                        <label htmlFor="company" className="block text-sm text-gray-600 mb-2">Company / Organization</label>
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
                        <label htmlFor="phone" className="block text-sm text-gray-600 mb-2">Phone *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="field-input"
                          placeholder="604-XXX-XXXX"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#0f172a] mb-6">Project Details</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="projectType" className="block text-sm text-gray-600 mb-2">Project Type *</label>
                        <select
                          id="projectType"
                          name="projectType"
                          required
                          value={formData.projectType}
                          onChange={handleChange}
                          className="field-input"
                        >
                          <option value="">Select type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="industry" className="block text-sm text-gray-600 mb-2">Industry / Application</label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className="field-input"
                        >
                          <option value="">Select industry</option>
                          {industryTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="squareFootage" className="block text-sm text-gray-600 mb-2">Approx. Square Footage *</label>
                        <input
                          type="text"
                          id="squareFootage"
                          name="squareFootage"
                          required
                          value={formData.squareFootage}
                          onChange={handleChange}
                          className="field-input"
                          placeholder="e.g., 5,000 SF"
                        />
                      </div>
                      <div>
                        <label htmlFor="location" className="block text-sm text-gray-600 mb-2">Project Location (City) *</label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleChange}
                          className="field-input"
                          placeholder="e.g., Vancouver, BC"
                        />
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm text-gray-600 mb-2">Desired Timeline</label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-[#0f172a] focus:border-[#2a4663] focus:ring-0 transition-colors"
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">As soon as possible</option>
                          <option value="1-2-weeks">1-2 weeks</option>
                          <option value="1-month">Within 1 month</option>
                          <option value="2-3-months">2-3 months</option>
                          <option value="flexible">Flexible / Planning stage</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm text-gray-600 mb-2">Budget Range</label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-[#0f172a] focus:border-[#2a4663] focus:ring-0 transition-colors"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-5k">Under $5,000</option>
                          <option value="5k-15k">$5,000 - $15,000</option>
                          <option value="15k-30k">$15,000 - $30,000</option>
                          <option value="30k-50k">$30,000 - $50,000</option>
                          <option value="over-50k">Over $50,000</option>
                          <option value="unknown">Not sure yet</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#0f172a] mb-6">Additional Information</h3>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="description" className="block text-sm text-gray-600 mb-2">Project Description *</label>
                        <textarea
                          id="description"
                          name="description"
                          required
                          rows={5}
                          value={formData.description}
                          onChange={handleChange}
                          className="field-input resize-none"
                          placeholder="Please describe your project, including the areas to be covered, any special requirements, and any other relevant details..."
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="hasDrawings" className="block text-sm text-gray-600 mb-2">Do you have drawings/specs?</label>
                          <select
                            id="hasDrawings"
                            name="hasDrawings"
                            value={formData.hasDrawings}
                            onChange={handleChange}
                            className="field-input"
                          >
                            <option value="">Select option</option>
                            <option value="yes">Yes, I can provide drawings</option>
                            <option value="partial">Yes, partial drawings</option>
                            <option value="no">No drawings available</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="siteVisit" className="block text-sm text-gray-600 mb-2">Would you like a site visit?</label>
                          <select
                            id="siteVisit"
                            name="siteVisit"
                            value={formData.siteVisit}
                            onChange={handleChange}
                            className="field-input"
                          >
                            <option value="">Select option</option>
                            <option value="yes">Yes, please schedule a visit</option>
                            <option value="maybe">Maybe, after initial quote</option>
                            <option value="no">No, quote from specs is fine</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="howHeard" className="block text-sm text-gray-600 mb-2">How did you hear about us?</label>
                        <select
                          id="howHeard"
                          name="howHeard"
                          value={formData.howHeard}
                          onChange={handleChange}
                          className="field-input"
                        >
                          <option value="">Select option</option>
                          {howDidYouHear.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#2a4663] text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-[#0d9488]"
                  >
                    Submit Quote Request
                  </button>

                  <p className="text-sm text-gray-600 text-center mt-4">
                    We typically respond within 24 business hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="section-shell section-shell-dark bg-[#3a597b]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80">Projects Completed</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-white mb-2">12</div>
                <div className="text-white/80">Month Warranty</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-white mb-2">Free</div>
                <div className="text-white/80">Site Visits</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
