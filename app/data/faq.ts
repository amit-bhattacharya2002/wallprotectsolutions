export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  slug: string;
  title: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    slug: "general",
    title: "General Company Questions",
    items: [
      {
        question: "Do you supply and install, or install only?",
        answer: "We supply and install complete systems. We do not take labour-only contracts. This means we control product selection, procurement, quality, and warranty alignment on every project — giving general contractors a single point of accountability rather than managing a separate supply chain.",
      },
      {
        question: "What areas of British Columbia do you serve?",
        answer: "We serve all of British Columbia, with the majority of our work concentrated in Metro Vancouver, the Fraser Valley, Vancouver Island, and the Interior. We have completed projects from Victoria to Kamloops, Nanaimo to Cranbrook.",
      },
      {
        question: "Do you work in active healthcare facilities?",
        answer: "Yes. A significant portion of our work is in occupied and active healthcare environments — including hospitals and clinics that remain operational during renovation. We understand the infection-control requirements, safety protocols, and scheduling constraints that active healthcare projects demand.",
      },
      {
        question: "Are you WorkSafe BC compliant and VRCA members?",
        answer: "Yes. We maintain full WorkSafe BC compliance and are active members of the Vancouver Regional Construction Association (VRCA).",
      },
      {
        question: "What types of facilities do you typically work in?",
        answer: "Our primary focus is healthcare and institutional — hospitals, clinics, UPCC facilities, long-term care, and medical office buildings. We also work in education, food service, commercial/public, and industrial environments.",
      },
    ],
  },
  {
    slug: "pre-construction",
    title: "Pre-Construction & Estimating",
    items: [
      {
        question: "Can you help with product selection and budget pricing during pre-construction?",
        answer: "Yes. We regularly engage at the pre-construction stage to help GCs and project managers understand system options, relative costs, and appropriate applications. Early involvement allows us to flag long-lead items, suggest value-engineered alternatives, and ensure the specified product is achievable on the project schedule.",
      },
      {
        question: "Can you suggest alternates or value-engineered options?",
        answer: "Yes. We work with products from multiple manufacturers across every system category, which allows us to suggest genuine alternates that meet the specification intent at a lower cost or with better availability. We do not push a single brand — we recommend what fits the environment, specification, and budget.",
      },
      {
        question: "How early should a wall protection contractor be involved in a healthcare project?",
        answer: "Ideally at the schematic design or design development stage. Early involvement allows us to review room-by-room system requirements, flag transitions to adjacent materials, help select hygienic system levels appropriate for each space, and identify any long-lead products that need to be ordered early.",
      },
      {
        question: "How do you determine the right wall protection system for a given application?",
        answer: "We assess several factors: the infection-control classification of the space, the level of impact exposure, maintenance and cleaning requirements, budget, adjacent material transitions, and whether the specification requires a specific product or can accept an equal. Healthcare spaces range widely — a corridor needs a different solution than a procedure room or an autopsy suite.",
      },
    ],
  },
  {
    slug: "submittals",
    title: "Submittals & Documentation",
    items: [
      {
        question: "Do you prepare submittals, shop drawings, and sample packages?",
        answer: "Yes. We prepare complete submittal packages including product data sheets, samples, and shop drawings where required. We understand the documentation requirements of healthcare construction projects and work with the project team to meet review timelines.",
      },
      {
        question: "Do you provide closeout and warranty documentation?",
        answer: "Yes. We provide full closeout packages including as-built information, warranty documentation, product data, and maintenance instructions as required by the project specification.",
      },
      {
        question: "How do you manage long-lead materials and procurement?",
        answer: "We identify long-lead items during pre-construction and provide procurement schedules. For critical-path hygienic systems like Altro Whiterock, we work with the project team to ensure material is ordered and on-site before the installation window opens.",
      },
    ],
  },
  {
    slug: "healthcare-hygienic",
    title: "Healthcare & Hygienic Wall Systems",
    items: [
      {
        question: "What is the difference between FRP and a welded hygienic wall system?",
        answer: "FRP (Fiberglass Reinforced Plastic) is a panel system installed with mechanical fasteners and trim. It provides a good hygienic surface for most healthcare support spaces. A welded hygienic system like Altro Whiterock uses thermoplastic sheets that are heat-welded at seams and thermoformed at corners, creating a fully seamless, crevice-free surface. Welded systems are required for higher infection-control classifications — OR-adjacent spaces, procedure rooms, and areas where bacterial harborage in joints is a clinical concern.",
      },
      {
        question: "Where should Altro Whiterock be used?",
        answer: "Altro Whiterock is appropriate for spaces with high infection-control requirements: procedure rooms, clean utility rooms, OR-adjacent corridors, autopsy suites, and any space where the clinical team or infection control officer requires a seamless, crevice-free wall surface. It is also used in hospital washrooms and shower rooms where long-term waterproofing integrity is critical.",
      },
      {
        question: "When is Altro Puraguard or True North an appropriate choice?",
        answer: "Altro Puraguard and True North are trim-finished panel systems — they do not require welding. They are appropriate for spaces with moderate hygienic requirements where a seamless system is not mandated: patient rooms, staff areas, waiting areas, and lower-risk clinical support spaces. They are significantly more cost-effective than a fully welded system.",
      },
      {
        question: "What wall system should be used in patient washrooms and shower rooms?",
        answer: "For healthcare washrooms, we typically recommend either Altro Whiterock (welded, fully seamless) or a solid surface wet wall system like Avonite Wet Walls. The right choice depends on the infection-control classification and budget. In most UPCC clinic washrooms we have installed Avonite Wet Walls with excellent results.",
      },
      {
        question: "What should be used in procedure rooms, OR-adjacent areas, and autopsy spaces?",
        answer: "These spaces typically require a fully welded, crevice-free hygienic wall system — Altro Whiterock or an equivalent weldable thermoplastic. We strongly recommend involving infection control early for these spaces to confirm the required specification level before product selection.",
      },
    ],
  },
  {
    slug: "wall-protection-systems",
    title: "Wall Protection Systems",
    items: [
      {
        question: "What is the difference between Acrovyn (C/S) and Inpro wall protection?",
        answer: "Both are leading PVC-based wall protection systems. Construction Specialties Acrovyn has a longer heritage in healthcare and is widely specified by Canadian health authorities. Inpro offers a comparable product range with competitive pricing and strong availability. Both cover the full range of crash rails, corner guards, wall guards, handrails, and door protection. We work with both and can help select based on specification, budget, and availability.",
      },
      {
        question: "When should Ricochet be specified instead of standard wall protection?",
        answer: "Ricochet (part of the Inpro lineup) offers higher-impact resilience than standard PVC wall protection. It is appropriate for high-traffic corridors, loading areas, laundry and linen areas, and other spaces with exceptional wheeled traffic or cart impact exposure.",
      },
      {
        question: "When is stainless steel wall protection more appropriate than plastic systems?",
        answer: "Stainless steel is more appropriate in industrial food processing environments, areas with harsh chemical washdown, commercial kitchens with high sanitation demands, and spaces where the visual standard requires a premium metal finish. We fabricate custom stainless corner protection, end caps, and wall cladding locally.",
      },
    ],
  },
  {
    slug: "frp-frl",
    title: "FRP, FRL & Decorative Wall Panels",
    items: [
      {
        question: "What is the difference between FRP and FRL?",
        answer: "FRP (Fiberglass Reinforced Plastic) is a fibreglass-reinforced panel primarily used for its hygienic and moisture-resistant properties in utility and support spaces. FRL (Fiberglass Reinforced Liner) is a composite panel with a higher-quality surface finish and a wider colour range — used where a more finished appearance is required alongside the durability of a fibre-reinforced core. Panolam FRL offers 400+ colours and is commonly used in healthcare corridors and public-facing institutional spaces.",
      },
      {
        question: "Where should Panolam FRL or Formica HardStop be used?",
        answer: "Panolam FRL and Formica HardStop are appropriate for healthcare corridors, reception areas, waiting rooms, and institutional interiors where a high-quality finish is required alongside durability. They provide a much more architectural appearance than standard white FRP while retaining impact and moisture resistance.",
      },
      {
        question: "When should decorative or graphic wall systems be considered?",
        answer: "Decorative systems like Acrovyn by Design, Inpro Aspex, and Valto Varietex make sense in public-facing healthcare spaces — waiting areas, corridors, and lobbies — where the design intent calls for visual interest alongside protection. These systems allow custom artwork or patterns to be integrated into the wall protection system itself.",
      },
    ],
  },
  {
    slug: "pvc-wet-division10",
    title: "PVC Liner, Wet Areas & Division 10",
    items: [
      {
        question: "What are PVC liner systems and where are they typically used?",
        answer: "PVC structural liner systems (Octaform, Clean 16, EZ Liner, AG-Tuf, DelPro) are direct-to-stud or direct-to-structure panel systems used in wet, washdown, and industrial environments. Common applications include agricultural facilities, food processing plants, commercial car washes, and industrial utility spaces where a seamless, washable, durable wall surface is required and aesthetics are secondary.",
      },
      {
        question: "When should Avonite Wet Walls be used?",
        answer: "Avonite Wet Walls are a solid surface wet wall system suitable for healthcare washrooms, shower rooms, and wet areas where a high-quality, seamless, waterproof surface is required. We have installed Avonite Wet Walls at multiple UPCC clinics including Cloverdale UPCC, where they were used in all washrooms.",
      },
      {
        question: "When should expansion joints and entrance mat systems be specified and coordinated?",
        answer: "Expansion joints should be coordinated with the structural engineer and specified wherever building movement joints intersect interior wall and floor surfaces — this is especially important in healthcare facilities where continuity of hygienic surfaces must be maintained across movement joints. Entrance mat systems should be specified at all primary building entrances. Both are Division 10 items typically supplied through our Construction Specialties and Inpro relationships.",
      },
    ],
  },
];

export function getFAQByCategory(slug: string): FAQCategory | undefined {
  return faqCategories.find((c) => c.slug === slug);
}

export function getAllFAQItems(): FAQItem[] {
  return faqCategories.flatMap((c) => c.items);
}
