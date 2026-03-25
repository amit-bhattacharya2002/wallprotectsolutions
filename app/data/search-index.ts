import { cities } from "./cities";
import { manufacturers } from "./manufacturers";
import { projects } from "./projects";
import { resourceArticles } from "./resources";

export type SearchGroup = "system" | "service" | "manufacturer" | "project" | "page" | "resource";

export interface SearchEntry {
  title: string;
  href: string;
  group: SearchGroup;
  description: string;
  keywords: string[];
  badge?: string;
  featured?: boolean;
}

const staticEntries: SearchEntry[] = [
  {
    title: "Wall Protection Systems",
    href: "/systems/wall-protection",
    group: "system",
    badge: "System",
    featured: true,
    description: "Crash rails, corner guards, wall guards, handrails, door and frame protection for healthcare and institutional spaces.",
    keywords: ["acrovyn", "inpro", "ricochet", "crash rails", "corner guards", "wall guards", "handrails", "door protection"],
  },
  {
    title: "Hygienic Wall Cladding",
    href: "/systems/hygienic-wall-cladding",
    group: "system",
    badge: "System",
    featured: true,
    description: "Altro Whiterock, Puraguard, True North, and AM-Clad systems for cleanable healthcare environments.",
    keywords: ["altro", "whiterock", "puraguard", "true north", "am-clad", "seamless wall cladding", "hospital wall cladding"],
  },
  {
    title: "FRP Wall Systems",
    href: "/systems/frp-wall-systems",
    group: "system",
    badge: "System",
    featured: true,
    description: "Traditional and decorative FRP wall panels for moisture resistance, durability, and easy cleaning.",
    keywords: ["frp", "fiberglass reinforced plastic", "glasbord", "exceliner", "glasliner", "washable wall panels"],
  },
  {
    title: "FRL / Decorative Wall Systems",
    href: "/systems/frl-decorative",
    group: "system",
    badge: "System",
    description: "Decorative FRL wall panels and finished interior protection systems for corridors and public-facing spaces.",
    keywords: ["frl", "decorative wall panels", "panolam", "hardstop", "marlite", "finished wall systems"],
  },
  {
    title: "PVC Liner Systems",
    href: "/systems/pvc-liner",
    group: "system",
    badge: "System",
    description: "Direct-to-stud PVC liner systems for industrial, washdown, food processing, and agricultural environments.",
    keywords: ["pvc liner", "octaform", "clean 16", "ez liner", "delpro", "ag-tuf", "washdown walls"],
  },
  {
    title: "Wet Wall Systems",
    href: "/systems/wet-wall",
    group: "system",
    badge: "System",
    description: "Solid surface wet wall systems for washrooms, showers, and healthcare wet areas.",
    keywords: ["wet wall", "avonite", "solid surface", "washroom wall panels", "shower wall systems"],
  },
  {
    title: "Architectural Specialties",
    href: "/systems/architectural-specialties",
    group: "system",
    badge: "System",
    description: "Expansion joint covers, entrance mats, cubicle tracks, and other institutional interior specialties.",
    keywords: ["division 10", "expansion joint covers", "entrance mats", "cubicle curtain tracks", "architectural specialties"],
  },
  {
    title: "Stainless Protection",
    href: "/systems/stainless-protection",
    group: "system",
    badge: "System",
    description: "Custom stainless corner protection, wall end caps, and wall cladding for heavy-duty environments.",
    keywords: ["stainless protection", "stainless wall cladding", "metal wall protection", "corner protection", "commercial kitchens"],
  },
  {
    title: "FRP Installation",
    href: "/services/frp-installation",
    group: "service",
    badge: "Service",
    featured: true,
    description: "Professional FRP panel installation for walls and ceilings across British Columbia.",
    keywords: ["frp installation", "panel installation", "wall installation", "ceiling installation", "installer"],
  },
  {
    title: "FRP Sales",
    href: "/services/frp-sales",
    group: "service",
    badge: "Service",
    description: "Supply-side support for FRP panels, trims, and accessories for contractors and project teams.",
    keywords: ["frp sales", "panel supply", "wall panel supplier", "trims and accessories", "material supply"],
  },
  {
    title: "FRP Service",
    href: "/services/frp-service",
    group: "service",
    badge: "Service",
    description: "Service, repairs, and on-site support for interior protection systems and FRP installations.",
    keywords: ["repairs", "service calls", "maintenance", "retrofit", "panel replacement"],
  },
  {
    title: "Healthcare Experience",
    href: "/healthcare",
    group: "page",
    badge: "Expertise",
    featured: true,
    description: "Healthcare-focused wall protection expertise with extensive clinic and institutional experience.",
    keywords: ["healthcare", "hospital", "clinic", "upcc", "infection control", "medical facilities"],
  },
  {
    title: "Pre-Construction Support",
    href: "/pre-construction",
    group: "page",
    badge: "Expertise",
    description: "Specification help, budgeting, product selection, and project coordination support before installation starts.",
    keywords: ["pre-construction", "specification", "budgeting", "submittals", "coordination", "pricing"],
  },
  {
    title: "Manufacturer Partners",
    href: "/manufacturers",
    group: "page",
    badge: "Page",
    description: "Overview of manufacturer relationships across wall protection, hygienic cladding, FRP, and specialty systems.",
    keywords: ["manufacturers", "brands", "partners", "suppliers", "distributor"],
  },
  {
    title: "Projects",
    href: "/projects",
    group: "page",
    badge: "Page",
    description: "Representative healthcare, institutional, and commercial wall protection projects across British Columbia.",
    keywords: ["projects", "case studies", "portfolio", "installed work", "examples"],
  },
  {
    title: "Contact",
    href: "/contact",
    group: "page",
    badge: "Page",
    description: "Speak with the team directly about pricing, systems, scheduling, or scope support.",
    keywords: ["contact", "call", "email", "talk to us", "customer support"],
  },
  {
    title: "Request a Quote",
    href: "/quote",
    group: "page",
    badge: "CTA",
    featured: true,
    description: "Submit project specifications for pricing, budgeting, and scope review.",
    keywords: ["quote", "pricing", "estimate", "budget", "quotation", "project specifications"],
  },
  {
    title: "FAQ",
    href: "/faq",
    group: "page",
    badge: "Page",
    description: "Answers about FRP, hygienic wall systems, specifications, installation, and typical applications.",
    keywords: ["faq", "questions", "answers", "help", "guidance", "wall protection faq"],
  },
  {
    title: "Service Areas",
    href: "/city",
    group: "page",
    badge: "Page",
    description: "Cities served across British Columbia for wall protection, hygienic cladding, FRP, FRL, and interior protection systems.",
    keywords: ["service areas", "cities served", "british columbia", "bc cities", "locations", "where we work"],
  },
];

const manufacturerHrefMap: Record<string, string> = {
  "construction-specialties": "/systems/wall-protection",
  inpro: "/systems/wall-protection",
  ricochet: "/systems/wall-protection",
  altro: "/systems/hygienic-wall-cladding",
  "true-north": "/systems/hygienic-wall-cladding",
  "am-clad": "/systems/hygienic-wall-cladding",
  valto: "/systems/frp-wall-systems",
  "stabilit-graham": "/wall-protection/manufacturers/graham",
  marlite: "/wall-protection/manufacturers/marlite",
  nudo: "/wall-protection/manufacturers/nudo",
  panolam: "/wall-protection/manufacturers/panolam",
  formica: "/systems/frl-decorative",
  octaform: "/systems/pvc-liner",
  "clean-16": "/systems/pvc-liner",
  "ez-liner": "/systems/pvc-liner",
  "ag-tuf": "/systems/pvc-liner",
  delpro: "/systems/pvc-liner",
  avonite: "/systems/wet-wall",
};

const categoryKeywords: Record<string, string[]> = {
  "wall-protection": ["wall protection", "crash rails", "corner guards", "handrails"],
  "hygienic-cladding": ["hygienic wall cladding", "seamless wall system", "healthcare wall panels"],
  frp: ["frp panels", "fiberglass reinforced plastic", "durable wall panels"],
  "frl-decorative": ["frl panels", "decorative wall systems", "finished interiors"],
  "pvc-liner": ["pvc liner panels", "washdown liner systems", "agricultural walls"],
  "wet-wall": ["wet wall panels", "solid surface walls", "washroom systems"],
};

const manufacturerEntries: SearchEntry[] = manufacturers.map((manufacturer) => ({
  title: manufacturer.name,
  href: manufacturerHrefMap[manufacturer.slug] ?? "/manufacturers",
  group: "manufacturer",
  badge: "Manufacturer",
  featured: manufacturer.featured,
  description: manufacturer.notes ?? manufacturer.products[0] ?? "Manufacturer partner for interior protection systems.",
  keywords: [
    manufacturer.relationship,
    ...manufacturer.products,
    ...categoryKeywords[manufacturer.category],
    manufacturer.name,
  ],
}));

const featuredProjectSlugs = new Set([
  "lilys-dtes-community-health-centre",
  "fraser-health-authority",
  "bcit-cari-lab",
  "craft-beer-market-kelowna",
  "breathe-medical-manufacturing",
]);

const projectEntries: SearchEntry[] = projects.map((project) => ({
  title: project.title,
  href: `/projects/${project.slug}`,
  group: "project",
  badge: "Project",
  featured: featuredProjectSlugs.has(project.slug),
  description: project.description,
  keywords: [
    project.category,
    project.fullDescription,
    project.details.location ?? "",
    ...(project.details.products ?? []),
  ],
}));

const resourceEntries: SearchEntry[] = resourceArticles.map((article) => ({
  title: article.title,
  href: `/resources/${article.slug}`,
  group: "resource",
  badge: "Resource",
  description: article.description,
  keywords: [
    ...article.tags,
    ...article.summary,
    ...article.takeaways,
  ],
}));

const cityEntries: SearchEntry[] = cities.map((city) => ({
  title: city.name,
  href: `/city/${city.slug}`,
  group: "page",
  badge: "Service Area",
  description: `Wall protection, hygienic cladding, FRP, FRL, and interior protection systems in ${city.name}, ${city.region}, British Columbia.`,
  keywords: [
    city.name,
    city.slug.replace(/-/g, " "),
    city.region,
    `${city.name} bc`,
    `${city.name} british columbia`,
    `wall protection ${city.name}`,
    `frp ${city.name}`,
    `service area ${city.name}`,
    "cities served",
    "interior protection systems",
  ],
}));

export const searchEntries: SearchEntry[] = [
  ...staticEntries,
  ...manufacturerEntries,
  ...projectEntries,
  ...resourceEntries,
  ...cityEntries,
];

const groupWeight: Record<SearchGroup, number> = {
  system: 16,
  service: 14,
  manufacturer: 12,
  project: 10,
  resource: 9,
  page: 8,
};

const groupLabels: Record<SearchGroup, string> = {
  system: "Systems",
  service: "Services",
  manufacturer: "Manufacturers",
  project: "Projects",
  resource: "Resources",
  page: "Pages",
};

export function getSearchGroupLabel(group: SearchGroup) {
  return groupLabels[group];
}

export function normalizeSearchValue(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9\s/-]+/g, " ").replace(/\s+/g, " ").trim();
}

function tokenize(value: string) {
  return normalizeSearchValue(value).split(" ").filter(Boolean);
}

function scoreEntry(entry: SearchEntry, query: string) {
  const normalizedQuery = normalizeSearchValue(query);
  if (!normalizedQuery) {
    return entry.featured ? 100 + groupWeight[entry.group] : groupWeight[entry.group];
  }

  const title = normalizeSearchValue(entry.title);
  const description = normalizeSearchValue(entry.description);
  const keywords = entry.keywords.map(normalizeSearchValue).join(" ");
  const href = normalizeSearchValue(entry.href);
  const terms = tokenize(query);

  let score = groupWeight[entry.group];

  if (title === normalizedQuery) score += 160;
  if (title.startsWith(normalizedQuery)) score += 90;
  if (title.includes(normalizedQuery)) score += 65;
  if (keywords.includes(normalizedQuery)) score += 54;
  if (description.includes(normalizedQuery)) score += 28;

  for (const term of terms) {
    const inTitle = title.includes(term);
    const inKeywords = keywords.includes(term);
    const inDescription = description.includes(term);
    const inHref = href.includes(term);

    if (!inTitle && !inKeywords && !inDescription && !inHref) {
      return -1;
    }

    if (inTitle) score += 24;
    if (inKeywords) score += 16;
    if (inDescription) score += 8;
    if (inHref) score += 4;
  }

  if (entry.featured) score += 10;

  return score;
}

export function searchSite(query: string, limit = 24) {
  return searchEntries
    .map((entry) => ({ entry, score: scoreEntry(entry, query) }))
    .filter((item) => item.score >= 0)
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
    .slice(0, limit)
    .map((item) => item.entry);
}

export function getFeaturedSearchEntries(limit = 8) {
  return searchEntries.filter((entry) => entry.featured).slice(0, limit);
}

export function groupSearchResults(results: SearchEntry[]) {
  return Object.entries(groupLabels)
    .map(([group, label]) => ({
      group: group as SearchGroup,
      label,
      items: results.filter((result) => result.group === group),
    }))
    .filter((section) => section.items.length > 0);
}
