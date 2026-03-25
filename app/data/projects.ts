export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery?: string[];
  signature?: boolean;
  details: {
    location?: string;
    squareFootage?: string;
    duration?: string;
    products?: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "lilys-dtes-community-health-centre",
    title: "Lily's Community Health Centre / VCH DTES",
    category: "Healthcare",
    signature: true,
    description: "Signature healthcare project and largest completed interior protection package at approximately $550K.",
    fullDescription: "Lily's Community Health Centre / VCH DTES represents our largest completed healthcare interior protection package to date at approximately $550,000. The scope included wall protection systems, hygienic cladding, FRP and FRL wall systems, wet wall solutions, and architectural specialties coordinated across a full health-centre build-out in Vancouver's Downtown Eastside. This project reflects the level of pre-construction coordination, submittal management, product selection, and installation execution required on major healthcare work.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    ],
    details: {
      location: "Vancouver, BC",
      squareFootage: "Largest healthcare interior protection package",
      duration: "Multi-phase healthcare build-out",
      products: ["Wall Protection Systems", "Altro Whiterock", "FRP / FRL Panels", "Architectural Specialties"],
    },
  },
  {
    slug: "crunch-fitness",
    title: "Crunch Fitness",
    category: "Fitness",
    description: "Complete wall protection installation for high-traffic gym facility.",
    fullDescription: "We provided comprehensive FRP wall protection for this high-traffic fitness facility. The installation covered all wet areas, locker rooms, and high-impact zones throughout the gym. Our team worked around the facility's operating hours to minimize disruption to members while ensuring a quality installation that meets all health and safety standards.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop",
    ],
    details: {
      location: "Metro Vancouver, BC",
      squareFootage: "5,000+ SF",
      duration: "2 weeks",
      products: ["FRP Panels", "Division Bars", "Inside Corners"],
    },
  },
  {
    slug: "breathe-medical-manufacturing",
    title: "Breathe Medical Manufacturing",
    category: "Healthcare",
    description: "Medical-grade FRP installation meeting strict health authority requirements.",
    fullDescription: "This medical manufacturing facility required wall protection that meets the strictest health authority requirements. We installed medical-grade FRP panels throughout the production areas, ensuring complete compliance with sanitation standards. The seamless installation provides easy cleaning and maintenance while protecting walls from daily wear.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    ],
    details: {
      location: "Lower Mainland, BC",
      squareFootage: "8,000 SF",
      duration: "3 weeks",
      products: ["Medical-Grade FRP", "Antimicrobial Panels", "Sealed Corners"],
    },
  },
  {
    slug: "langley-cannabis-producer",
    title: "Langley Cannabis Producer",
    category: "Agriculture",
    description: "Climate-controlled cultivation facility with 13,000 SF wall coverage.",
    fullDescription: "One of our largest agricultural projects, this cannabis cultivation facility required extensive wall protection across multiple grow rooms and processing areas. The FRP installation provides moisture resistance essential for the humid growing environment while meeting all Health Canada requirements for licensed producers.",
    image: "https://images.unsplash.com/photo-1589244159943-460088ed5c92?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1589244159943-460088ed5c92?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop",
    ],
    details: {
      location: "Langley, BC",
      squareFootage: "13,000 SF",
      duration: "4 weeks",
      products: ["Moisture-Resistant FRP", "Antimicrobial Coating", "Full Accessories"],
    },
  },
  {
    slug: "fraser-health-authority",
    title: "Fraser Health Authority",
    category: "Healthcare",
    description: "Urgent and Primary Care Center with sanitary wall systems.",
    fullDescription: "We were selected to provide wall protection for this new Urgent and Primary Care Center operated by Fraser Health Authority. The installation includes examination rooms, treatment areas, and high-traffic corridors. All materials meet healthcare facility standards and provide long-lasting, easy-to-clean surfaces.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=600&fit=crop",
    ],
    details: {
      location: "Fraser Valley, BC",
      squareFootage: "6,500 SF",
      duration: "3 weeks",
      products: ["Healthcare-Grade FRP", "Impact-Resistant Panels", "Sealed Systems"],
    },
  },
  {
    slug: "craft-beer-market-kelowna",
    title: "Craft Beer Market Kelowna",
    category: "Food & Beverage",
    description: "Commercial kitchen and prep area wall protection.",
    fullDescription: "This popular restaurant and craft beer establishment required durable wall protection for their commercial kitchen and food preparation areas. Our FRP installation provides the sanitary, easy-to-clean surfaces required by health inspectors while withstanding the heat and moisture of a busy commercial kitchen.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop",
    ],
    details: {
      location: "Kelowna, BC",
      squareFootage: "2,500 SF",
      duration: "1 week",
      products: ["Food-Grade FRP", "Heat-Resistant Panels", "Stainless Trim"],
    },
  },
  {
    slug: "bcit-cari-lab",
    title: "BCIT CARI Lab",
    category: "Education",
    description: "Laboratory wall protection for research facility.",
    fullDescription: "The Centre for Applied Research and Innovation at BCIT required specialized wall protection for their laboratory spaces. Our installation provides chemical-resistant surfaces that can withstand the rigors of a research environment while maintaining a clean, professional appearance.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581093458791-9d42e3c2fd45?w=800&h=600&fit=crop",
    ],
    details: {
      location: "Burnaby, BC",
      squareFootage: "4,000 SF",
      duration: "2 weeks",
      products: ["Chemical-Resistant FRP", "Laboratory-Grade Panels", "Sealed Joints"],
    },
  },
  {
    slug: "starbucks-fraser-hwy",
    title: "Starbucks Fraser Hwy",
    category: "Food & Beverage",
    description: "Commercial food service wall protection installation.",
    fullDescription: "This Starbucks location required wall protection for their back-of-house areas including food prep, storage, and dishwashing stations. Our installation provides the sanitary surfaces required for food service while maintaining the clean aesthetic expected of the brand.",
    image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
    ],
    details: {
      location: "Surrey, BC",
      squareFootage: "800 SF",
      duration: "3 days",
      products: ["Food-Grade FRP", "White Panels", "Corner Guards"],
    },
  },
  {
    slug: "flight-simulator-room",
    title: "Flight Simulator Room",
    category: "Special Projects",
    description: "Specialized wall protection for simulation facility.",
    fullDescription: "This unique project involved installing wall protection in a professional flight simulator facility. The FRP panels provide a clean, professional environment while protecting walls from equipment movement and maintenance activities. The installation also helps with acoustics and light control in the simulation environment.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
    ],
    details: {
      location: "Richmond, BC",
      squareFootage: "1,200 SF",
      duration: "1 week",
      products: ["Standard FRP", "Dark Finish Panels", "Acoustic Backing"],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(p => p.slug);
}
