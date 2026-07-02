import { MetadataRoute } from "next";
import { getAllProjectSlugs } from "./data/projects";
import { getAllBenefitSlugs } from "./data/frp-benefits";
import { getAllCitySlugs } from "./data/cities";
import { resourceArticles } from "./data/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  // Env-aware so the test deploy doesn't emit production URLs. Set
  // NEXT_PUBLIC_SITE_URL in the deploy environment; falls back to production.
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://frpinstallations.com";

  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/quote`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/schedule-on-site-measurement`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/wall-protection`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/frp-benefits`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/city`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    // Services
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/services/frp-sales`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/services/frp-installation`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/services/frp-service`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    // Manufacturers
    { url: `${baseUrl}/manufacturers`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/wall-protection/manufacturers`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/wall-protection/manufacturers/inpro`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/wall-protection/manufacturers/marlite`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/wall-protection/manufacturers/crane-composites`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/wall-protection/manufacturers/graham`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/wall-protection/manufacturers/panolam`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/wall-protection/manufacturers/nudo`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    // Healthcare & other key landing pages
    { url: `${baseUrl}/healthcare`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/industries`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/pre-construction`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/careers`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    // Systems
    { url: `${baseUrl}/systems`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/systems/wall-protection`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/systems/hygienic-wall-cladding`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/systems/frp-wall-systems`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/systems/frl-decorative`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/systems/pvc-liner`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/systems/wet-wall`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/systems/architectural-specialties`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/systems/stainless-protection`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  // Dynamic project pages
  const projectPages = getAllProjectSlugs().map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamic benefit pages
  const benefitPages = getAllBenefitSlugs().map((slug) => ({
    url: `${baseUrl}/frp-benefits/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamic city pages (high priority for local SEO)
  const cityPages = getAllCitySlugs().map((slug) => ({
    url: `${baseUrl}/city/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const resourcePages = resourceArticles.map((article) => ({
    url: `${baseUrl}/resources/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages, ...benefitPages, ...cityPages, ...resourcePages];
}
