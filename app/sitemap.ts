import { MetadataRoute } from "next";
import { getAllProjectSlugs } from "./data/projects";
import { getAllBenefitSlugs } from "./data/frp-benefits";
import { getAllCitySlugs } from "./data/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://frpinstallations.com";

  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/quote`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/schedule-on-site-measurement`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/wall-protection`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/frp-benefits`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/city`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    // Services
    { url: `${baseUrl}/services/frp-sales`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/services/frp-installation`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/services/frp-service`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    // Manufacturers
    { url: `${baseUrl}/wall-protection/manufacturers/marlite`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/wall-protection/manufacturers/crane-composites`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/wall-protection/manufacturers/graham`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/wall-protection/manufacturers/panolam`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/wall-protection/manufacturers/nudo`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
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

  return [...staticPages, ...projectPages, ...benefitPages, ...cityPages];
}
