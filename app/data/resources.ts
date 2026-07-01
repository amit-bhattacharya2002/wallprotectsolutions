export interface ResourceArticle {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  summary: string[];
  takeaways: string[];
  diagram?: "sink-splash-zone" | "room-map" | "wall-finish-guide";
  relatedSlugs?: string[];
}

export const resourceArticles: ResourceArticle[] = [
  {
    slug: "healthcare-sink-splash-zones",
    title: "Understanding healthcare sink splash zones",
    description: "Why healthcare hand hygiene sinks often need enhanced, cleanable wall surface protection around moisture, cleaning, and splash exposure.",
    tags: ["Healthcare", "Sink Splash Zones", "IPAC Considerations"],
    diagram: "sink-splash-zone",
    relatedSlugs: [
      "altro-whiterock-vs-frp-healthcare",
      "products-hospital-washrooms-showers",
      "wall-protection-transitions-adjacent-finishes",
    ],
    summary: [
      "Healthcare sink locations often create demanding surface conditions because water, soap, disinfectants, and repeated cleaning all meet at one wall assembly. The right finish is not only about appearance; it is about cleanability, moisture resistance, durability, and how penetrations and transitions are detailed.",
      "Hand hygiene stations, clinical sinks, utility sinks, and patient washroom sinks can each have different performance expectations. In some spaces, FRP or a trim-finished panel system may be appropriate. In others, a welded hygienic wall system or stainless protection may be considered because the cleaning protocol and moisture exposure are more demanding.",
      "Final design requirements vary by health authority, project specifications, room classification, and Infection Prevention & Control review. Our role is to help the construction team understand product options, installation implications, and details that commonly affect long-term performance.",
    ],
    takeaways: [
      "Sink-adjacent wall surfaces should be evaluated for moisture, chemical exposure, cleanability, and penetrations.",
      "Common systems include Altro Whiterock, FRP, Acrovyn sheet, stainless steel, and wet-wall assemblies depending on the room.",
      "Confirm final requirements with the design team, health authority standards, project specifications, and IPAC review.",
    ],
  },
  {
    slug: "clean-utility-vs-soiled-utility-surface-considerations",
    title: "Clean utility vs soiled utility rooms: surface considerations",
    description: "How clean utility and soiled utility rooms differ, and why wall system selection should reflect cleaning, moisture, storage, and clinical workflow demands.",
    tags: ["Healthcare", "Utility Rooms", "Hygienic Systems"],
    diagram: "room-map",
    relatedSlugs: [
      "healthcare-sink-splash-zones",
      "altro-whiterock-vs-frp-healthcare",
      "welded-hygienic-wall-systems-worth-cost",
    ],
    summary: [
      "Clean utility and soiled utility rooms may sit close together on a drawing, but they usually place different demands on interior finishes. Clean utility rooms often prioritize storage, cleanable surfaces, and protection from cart or equipment impact. Soiled utility rooms more often involve moisture, waste handling, frequent cleaning, and higher exposure to splashes and chemicals.",
      "Because the use case is different, the wall protection strategy should not be selected by room name alone. The team should consider the sink condition, cleaning protocol, cart traffic, penetrations, casework transitions, and whether the space requires a seamless hygienic finish or a durable trim-finished panel system.",
      "Early review of utility rooms helps avoid late substitutions, awkward transitions, and overspending on systems that are not required in every room.",
    ],
    takeaways: [
      "Clean utility rooms often need durable cleanable protection around storage and equipment movement.",
      "Soiled utility rooms often require higher attention to moisture, splash exposure, and cleaning chemicals.",
      "Room-by-room review is stronger than applying one wall finish across every healthcare support space.",
    ],
  },
  {
    slug: "operating-room-surface-considerations",
    title: "Operating room surface considerations",
    description: "A practical overview of cleanable, seamless, and impact-resistant wall finish considerations around ORs and adjacent clinical spaces.",
    tags: ["Operating Rooms", "Healthcare", "Hygienic Systems"],
    relatedSlugs: [
      "welded-hygienic-wall-systems-worth-cost",
      "altro-whiterock-vs-frp-healthcare",
      "wall-protection-transitions-adjacent-finishes",
    ],
    summary: [
      "Operating rooms and OR-adjacent spaces require careful coordination between infection-control expectations, durability, cleaning protocols, and architectural detailing. The wall finish is only one part of that assembly, but it has a major impact on long-term maintenance and cleanability.",
      "Welded hygienic wall systems are often considered where seamless, crevice-free surfaces are required. Adjacent corridors, procedure areas, storage rooms, and support spaces may require different levels of protection depending on traffic, cleaning, and clinical use.",
      "The important construction question is not simply which product is specified. It is whether the selected system, transitions, penetrations, corners, and terminations are coordinated early enough to perform as intended.",
    ],
    takeaways: [
      "OR-related spaces should be reviewed for cleanability, transitions, penetrations, and clinical workflow.",
      "Seamless hygienic systems are valuable where the room classification and cleaning requirements justify them.",
      "Adjacent healthcare spaces may need a different balance of impact protection, moisture resistance, and finish quality.",
    ],
  },
  {
    slug: "healthcare-wall-finish-selection-guide",
    title: "Healthcare wall finish selection guide",
    description: "A high-level comparison of painted drywall, FRP, Acrovyn sheet, Altro Whiterock, FRL, and stainless protection in healthcare environments.",
    tags: ["Healthcare", "Specification", "Wall Finishes"],
    diagram: "wall-finish-guide",
    relatedSlugs: [
      "frp-vs-frl",
      "altro-whiterock-vs-frp-healthcare",
      "acrovyn-vs-inpro",
    ],
    summary: [
      "Healthcare wall finish selection is usually a balance between cleanability, impact resistance, moisture resistance, chemical resistance, cost, and finish expectations. No single wall system belongs everywhere.",
      "Painted drywall may be appropriate in low-risk, low-impact spaces. FRP can be practical in support and utility rooms. Acrovyn sheet and similar wall protection systems are often used for impact resistance in corridors and patient-facing areas. Altro Whiterock and other welded hygienic systems are used where seamless cleanable surfaces are required. FRL can provide a more architectural appearance in public or corridor spaces. Stainless protection is best reserved for harsh, highly sanitary, or custom conditions.",
      "The strongest specification decisions come from matching the system to the room, cleaning protocol, budget, and long-term maintenance expectation.",
    ],
    takeaways: [
      "Select wall systems by room condition and performance need, not just by product familiarity.",
      "Balance cleanability, impact, moisture, chemical exposure, appearance, and budget.",
      "Use trade input early to avoid overspecification, underspecification, and awkward transitions.",
    ],
  },
  {
    slug: "impact-protection-healthcare-corridors",
    title: "Impact protection in healthcare corridors",
    description: "How to think about wall guards, corner guards, crash rails, sheet protection, and door protection in healthcare corridors.",
    tags: ["Corridors", "Wall Protection", "Healthcare"],
    relatedSlugs: [
      "crash-rails-corner-guards-corridor-protection",
      "acrovyn-vs-inpro",
      "healthcare-wall-finish-selection-guide",
    ],
    summary: [
      "Healthcare corridors take abuse from beds, carts, wheelchairs, equipment, maintenance traffic, and daily public use. A corridor protection package should respond to the actual impact source and height rather than relying on one default product everywhere.",
      "Corner guards, wall guards, crash rails, handrails, door protection, and sheet protection each solve different problems. In high-traffic healthcare areas, the best package often combines several elements with coordinated mounting heights, colours, and transitions.",
      "Well-planned wall protection reduces repainting, patching, shutdowns, and long-term maintenance disruption while still supporting the design intent of the facility.",
    ],
    takeaways: [
      "Match protection type to impact source, traffic pattern, and corridor use.",
      "Combine rails, guards, sheet protection, and door protection where needed.",
      "Coordinate colour, profile, mounting height, and transitions early.",
    ],
  },
  {
    slug: "decorative-vs-hygienic-wall-systems",
    title: "Decorative vs hygienic wall systems in healthcare",
    description: "Where FRL and decorative protection systems fit, where welded hygienic systems fit, and why the two should not be treated as interchangeable.",
    tags: ["FRL", "Hygienic Systems", "Healthcare"],
    relatedSlugs: [
      "frp-vs-frl",
      "healthcare-wall-finish-selection-guide",
      "welded-hygienic-wall-systems-worth-cost",
    ],
    summary: [
      "Decorative wall systems and hygienic wall systems can both appear in healthcare projects, but they usually solve different problems. FRL and decorative wall panels are often selected where durability, impact resistance, and a finished architectural appearance matter. Welded hygienic systems are selected where cleanability and seamless surfaces are the primary performance drivers.",
      "Confusing the two can create problems. A decorative panel may look appropriate in a corridor or public-facing clinical space, but it may not satisfy the same requirements as a welded hygienic wall system in a higher-risk room. Conversely, a fully welded hygienic system may be unnecessary in a space where the real need is impact resistance and finish quality.",
      "The better question is: what does the room need to withstand, how will it be cleaned, and what appearance standard is expected?",
    ],
    takeaways: [
      "Use decorative systems where appearance and durability are the primary needs.",
      "Use hygienic systems where cleanability, moisture resistance, and seamless detailing are required.",
      "Avoid treating FRL, FRP, and welded hygienic systems as direct substitutes without reviewing room requirements.",
    ],
  },
  {
    slug: "healthcare-renovation-surface-protection-considerations",
    title: "Healthcare renovation surface protection considerations",
    description: "What GCs and project teams should consider when installing wall protection and hygienic systems in active or phased healthcare renovations.",
    tags: ["Healthcare Renovation", "Pre-Construction", "Phasing"],
    relatedSlugs: [
      "value-engineering-wall-protection-scopes",
      "wall-protection-transitions-adjacent-finishes",
      "healthcare-wall-finish-selection-guide",
    ],
    summary: [
      "Healthcare renovations are rarely simple. Work may happen near active clinical areas, under phased schedules, with infection-control procedures, limited access, and tight shutdown windows. Wall protection and hygienic systems need to be planned around those constraints.",
      "The installation sequence, material staging, dust control, noise, penetrations, and tie-ins to existing finishes can all affect the project. Early review helps the team identify long-lead materials, awkward transitions, and room conditions that could slow installation once construction starts.",
      "A specialty subcontractor with healthcare experience can help flag practical issues before they become field problems, especially where wall protection ties into casework, flooring, ceilings, plumbing fixtures, or existing substrates.",
    ],
    takeaways: [
      "Plan wall protection scopes around access, phasing, active facilities, and shutdown windows.",
      "Review existing substrates, penetrations, transitions, and adjacent trades early.",
      "Use pre-construction input to reduce field surprises in clinical renovation work.",
    ],
  },
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
