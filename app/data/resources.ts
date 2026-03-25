export interface ResourceArticle {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  summary: string[];
  takeaways: string[];
}

export const resourceArticles: ResourceArticle[] = [
  {
    slug: "frp-vs-frl",
    title: "FRP vs FRL: When to use each",
    description: "The difference between Fiberglass Reinforced Plastic and Fiberglass Reinforced Liner panels, when each is appropriate, and how to specify them correctly for healthcare and institutional projects.",
    tags: ["FRP", "FRL", "Specification"],
    summary: [
      "FRP and FRL are both durable interior panel systems, but they solve different problems. FRP is typically selected for utility, support, and washdown spaces where hygiene, impact resistance, and moisture resistance matter more than finish quality.",
      "FRL is used when the project needs a more architectural appearance without giving up the durability of a fibre-reinforced panel. In healthcare corridors, reception areas, and public-facing institutional interiors, FRL often offers the better balance of durability and finish.",
      "The practical decision usually comes down to finish expectations, room classification, budget, and the need to coordinate with adjacent architectural materials.",
    ],
    takeaways: [
      "Use FRP for back-of-house, support, and moisture-prone spaces where function matters most.",
      "Use FRL where the wall panel must perform like protection but read more like finished architecture.",
      "Review transitions, trim conditions, and room-by-room aesthetic expectations before finalizing the specification.",
    ],
  },
  {
    slug: "altro-whiterock-vs-frp-healthcare",
    title: "Altro Whiterock vs FRP in healthcare environments",
    description: "A practical guide to when a fully welded seamless hygienic system is required versus when FRP or a trim-finished panel system is appropriate.",
    tags: ["Altro Whiterock", "FRP", "Healthcare", "Hygienic Systems"],
    summary: [
      "Altro Whiterock and FRP are both used in healthcare, but they do not belong in the same room types by default. Altro Whiterock is designed for spaces where a welded, crevice-free hygienic surface is needed to meet infection-control expectations.",
      "FRP remains a strong option in healthcare support spaces, janitor rooms, service areas, and lower-risk environments where the project needs a durable and cleanable wall finish without the cost premium of a fully welded hygienic system.",
      "The right answer is usually determined by the infection-control classification of the room, not by habit or whichever material appears more often in the project manual.",
    ],
    takeaways: [
      "Specify welded hygienic systems where infection-control requirements demand a seamless, crevice-free finish.",
      "Use FRP in lower-risk support environments where trim-finished systems are acceptable.",
      "Confirm room-specific requirements early with the design team and infection-control stakeholders.",
    ],
  },
  {
    slug: "acrovyn-vs-inpro",
    title: "Acrovyn vs Inpro wall protection systems",
    description: "Construction Specialties Acrovyn and Inpro both offer comprehensive wall protection product lines. This article covers the practical differences and how to select between them.",
    tags: ["Acrovyn", "Inpro", "Wall Protection"],
    summary: [
      "Acrovyn and Inpro both provide complete wall protection families for corridors, patient areas, schools, and institutional interiors. In most cases, both can satisfy the performance needs of the project when the product is selected correctly.",
      "Selection tends to come down to specification precedent, availability, budget, specific product geometry, and the surrounding package of related products such as handrails, door protection, curtain track, or expansion joint covers.",
      "The best outcome usually comes from evaluating the specific application rather than assuming one manufacturer is always the right answer.",
    ],
    takeaways: [
      "Compare the exact product family, not just the manufacturer name.",
      "Consider coordination with related Division 10 items when choosing a system.",
      "Use manufacturer-neutral evaluation to balance specification intent, lead times, and budget.",
    ],
  },
  {
    slug: "welded-hygienic-wall-systems-worth-cost",
    title: "When welded hygienic wall systems are worth the cost",
    description: "Fully welded systems like Altro Whiterock carry a meaningful cost premium over FRP and trim-finished panel systems. This article helps teams understand when that premium is justified.",
    tags: ["Altro Whiterock", "Hygienic Systems", "Value Engineering"],
    summary: [
      "Welded hygienic wall systems carry more material cost and more installation complexity, so they should be used where that performance actually matters. In the right healthcare spaces, the cost is justified by infection-control requirements and long-term maintainability.",
      "In the wrong spaces, however, they can consume budget that would be better spent elsewhere in the interior protection package. Overspecifying a seamless system in low-risk rooms often adds cost without meaningful performance benefit.",
      "The goal is not to push the highest-spec system everywhere. It is to match the specification level to the clinical risk, cleaning protocol, and long-term performance expectation of the space.",
    ],
    takeaways: [
      "Use welded hygienic systems in high-risk or high-cleanability environments.",
      "Avoid overspecifying costly seamless systems where trim-finished products are appropriate.",
      "Treat room-by-room classification as the basis for value engineering decisions.",
    ],
  },
  {
    slug: "products-hospital-washrooms-showers",
    title: "Products best suited for hospital washrooms and showers",
    description: "A practical guide to product options for healthcare washrooms, shower rooms, and wet areas including Avonite Wet Walls, Altro Whiterock, and FRP.",
    tags: ["Wet Walls", "Avonite", "Healthcare Washrooms"],
    summary: [
      "Hospital washrooms and showers place unusual demands on wall systems because hygiene, waterproofing, durability, and transitions all matter at the same time. The right product depends on whether the room is a patient washroom, a staff support room, or a clinically sensitive wet space.",
      "Solid surface wet wall systems like Avonite can be excellent in healthcare washrooms where a seamless and durable finish is important. Altro Whiterock is often appropriate where the specification requires a welded thermoplastic hygienic system. FRP may still be appropriate in lower-risk support spaces.",
      "The most common failures in wet areas happen at corners, trims, penetrations, and adjacent material transitions, so detailing matters just as much as material selection.",
    ],
    takeaways: [
      "Choose the system based on room classification, waterproofing needs, and hygiene expectations.",
      "Coordinate corners, penetrations, and terminations early to avoid failures later.",
      "Do not assume one wet-area product is appropriate for every healthcare washroom type.",
    ],
  },
  {
    slug: "when-stainless-wall-protection-right-choice",
    title: "When stainless wall protection is the right choice",
    description: "PVC wall protection and FRP suit most environments, but some applications call for stainless steel. This article covers when stainless is the better option.",
    tags: ["Stainless Protection", "Food Processing", "Commercial Kitchens"],
    summary: [
      "Most wall protection packages do not require stainless steel, but there are conditions where it is clearly the right material. Harsh washdown, aggressive sanitation protocols, food processing, and premium metal-finish requirements are common reasons to move away from plastic systems.",
      "Stainless also makes sense in locations where the detail needs to be custom-fabricated rather than selected from a standard manufacturer catalogue. End caps, corners, and specialty protection pieces can often be fabricated locally for the exact condition.",
      "Because it is a more specialized and expensive option, stainless should usually be reserved for the spaces that truly benefit from it.",
    ],
    takeaways: [
      "Reserve stainless for harsh, highly sanitary, or architecturally specific environments.",
      "Use custom fabrication where standard protection profiles do not solve the condition cleanly.",
      "Balance durability, sanitation, and visual requirements before selecting stainless.",
    ],
  },
  {
    slug: "pvc-liner-systems-vs-frp",
    title: "Where PVC liner systems should be used instead of FRP",
    description: "PVC structural liner systems like Octaform and Clean 16 are direct-to-stud alternatives to FRP for industrial, agricultural, and washdown environments.",
    tags: ["PVC Liner", "FRP", "Industrial", "Agricultural"],
    summary: [
      "PVC liner systems solve a different problem than FRP. They are often intended for direct-to-stud or direct-to-structure installation in agricultural, industrial, and washdown spaces where the construction method and the environmental exposure are more demanding.",
      "FRP still performs well as an adhered finish over a stable substrate, but in spaces that require heavier-duty washdown performance or simpler direct-to-structure assembly, PVC liner systems are often the stronger option.",
      "The right choice depends on how the wall is built, how the space is cleaned, and how much abuse the surface is expected to take over time.",
    ],
    takeaways: [
      "Use PVC liner where direct-to-stud or heavy washdown construction is part of the requirement.",
      "Use FRP where a durable adhered finish is appropriate and the substrate is already in place.",
      "Match the system to the construction assembly as well as the environment.",
    ],
  },
  {
    slug: "wall-protection-transitions-adjacent-finishes",
    title: "How wall protection materials should terminate into adjacent finishes",
    description: "A guide to transitions between wall protection systems and adjacent floor, ceiling, and wall finishes.",
    tags: ["Transitions", "Details", "Specification"],
    summary: [
      "A lot of wall protection problems are not product problems at all. They are transition problems. Even a good product can look poor or perform poorly if the terminations into drywall, base, flooring, ceilings, or other finishes are not resolved early.",
      "The best transition details are coordinated before submittals are finalized. That allows the team to account for trim thickness, reveal conditions, corner build-ups, movement joints, and how the wall protection package meets surrounding finishes cleanly.",
      "This is one of the areas where early involvement by the subcontractor adds real value, especially in healthcare renovations where there is little tolerance for awkward joints or patchwork detailing.",
    ],
    takeaways: [
      "Resolve transitions early rather than field-adjusting them during installation.",
      "Coordinate with adjacent finish trades and movement-joint conditions.",
      "Use submittals and mockups to confirm visual and performance expectations before procurement.",
    ],
  },
  {
    slug: "value-engineering-wall-protection-scopes",
    title: "What architects should know about value engineering wall protection scopes",
    description: "Wall protection scopes are often targeted for value engineering. This article helps teams understand which changes preserve intent and which create long-term performance risk.",
    tags: ["Value Engineering", "Specification", "Architects"],
    summary: [
      "Wall protection scopes often get value-engineered late in the process, but not every VE move is equal. Some substitutions preserve the performance intent of the design, while others remove the very characteristics the space depends on.",
      "The strongest VE decisions come from understanding the environment first: impact level, hygiene requirements, cleaning protocol, maintenance expectations, and the visual standard of the project. Once those factors are clear, there is often room to adjust manufacturer, product family, or finish level without compromising the room.",
      "The goal is to protect the long-term function of the space while still helping the project stay on budget.",
    ],
    takeaways: [
      "Value engineer by application, not by blanket material swaps.",
      "Differentiate between true equivalencies and substitutions that erode performance.",
      "Bring wall protection trade input in early enough to avoid late-stage cost shocks.",
    ],
  },
  {
    slug: "crash-rails-corner-guards-corridor-protection",
    title: "How to choose the right crash rail, corner guard, or corridor protection system",
    description: "A guide to selecting crash rails, chair rails, corner guards, wall guards, and combination rails based on traffic and impact exposure.",
    tags: ["Crash Rails", "Corner Guards", "Wall Guards", "Corridors"],
    summary: [
      "Corridor protection should be selected by traffic pattern and impact type, not by habit. A corridor used by beds, carts, wheelchairs, and equipment needs a different protection strategy than a low-traffic public corridor or administrative wing.",
      "Crash rails, corner guards, wall guards, handrails, and combination rails all solve different problems. In healthcare and institutional projects, the best package usually combines multiple elements rather than relying on a single product everywhere.",
      "When the package is planned carefully, corridor protection supports both durability and design intent instead of reading like an afterthought.",
    ],
    takeaways: [
      "Match product type to the actual source and height of impact exposure.",
      "Use combined protection strategies in high-traffic healthcare corridors.",
      "Coordinate colour, profile, and mounting heights with the design team early.",
    ],
  },
];

export function getResourceArticle(slug: string): ResourceArticle | undefined {
  return resourceArticles.find((article) => article.slug === slug);
}
