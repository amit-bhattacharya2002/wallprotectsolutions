export interface City {
  slug: string;
  name: string;
  region: string;
}

export const cities: City[] = [
  { slug: "abbotsford", name: "Abbotsford", region: "Fraser Valley" },
  { slug: "armstrong", name: "Armstrong", region: "Okanagan" },
  { slug: "burnaby", name: "Burnaby", region: "Metro Vancouver" },
  { slug: "campbell-river", name: "Campbell River", region: "Vancouver Island" },
  { slug: "castlegar", name: "Castlegar", region: "Kootenays" },
  { slug: "chilliwack", name: "Chilliwack", region: "Fraser Valley" },
  { slug: "colwood", name: "Colwood", region: "Vancouver Island" },
  { slug: "coquitlam", name: "Coquitlam", region: "Metro Vancouver" },
  { slug: "courtenay", name: "Courtenay", region: "Vancouver Island" },
  { slug: "cranbrook", name: "Cranbrook", region: "Kootenays" },
  { slug: "dawson-creek", name: "Dawson Creek", region: "Northern BC" },
  { slug: "delta", name: "Delta", region: "Metro Vancouver" },
  { slug: "duncan", name: "Duncan", region: "Vancouver Island" },
  { slug: "enderby", name: "Enderby", region: "Okanagan" },
  { slug: "fernie", name: "Fernie", region: "Kootenays" },
  { slug: "fort-st-john", name: "Fort St. John", region: "Northern BC" },
  { slug: "grand-forks", name: "Grand Forks", region: "Kootenays" },
  { slug: "greenwood", name: "Greenwood", region: "Kootenays" },
  { slug: "kamloops", name: "Kamloops", region: "Thompson-Okanagan" },
  { slug: "kelowna", name: "Kelowna", region: "Okanagan" },
  { slug: "kimberley", name: "Kimberley", region: "Kootenays" },
  { slug: "langford", name: "Langford", region: "Vancouver Island" },
  { slug: "langley", name: "Langley", region: "Fraser Valley" },
  { slug: "maple-ridge", name: "Maple Ridge", region: "Metro Vancouver" },
  { slug: "merritt", name: "Merritt", region: "Thompson-Okanagan" },
  { slug: "nanaimo", name: "Nanaimo", region: "Vancouver Island" },
  { slug: "nelson", name: "Nelson", region: "Kootenays" },
  { slug: "new-westminster", name: "New Westminster", region: "Metro Vancouver" },
  { slug: "north-vancouver", name: "North Vancouver", region: "Metro Vancouver" },
  { slug: "parksville", name: "Parksville", region: "Vancouver Island" },
  { slug: "penticton", name: "Penticton", region: "Okanagan" },
  { slug: "pitt-meadows", name: "Pitt Meadows", region: "Metro Vancouver" },
  { slug: "port-alberni", name: "Port Alberni", region: "Vancouver Island" },
  { slug: "port-coquitlam", name: "Port Coquitlam", region: "Metro Vancouver" },
  { slug: "port-moody", name: "Port Moody", region: "Metro Vancouver" },
  { slug: "powell-river", name: "Powell River", region: "Sunshine Coast" },
  { slug: "prince-george", name: "Prince George", region: "Northern BC" },
  { slug: "prince-rupert", name: "Prince Rupert", region: "Northern BC" },
  { slug: "quesnel", name: "Quesnel", region: "Cariboo" },
  { slug: "revelstoke", name: "Revelstoke", region: "Kootenays" },
  { slug: "richmond", name: "Richmond", region: "Metro Vancouver" },
  { slug: "rossland", name: "Rossland", region: "Kootenays" },
  { slug: "salmon-arm", name: "Salmon Arm", region: "Shuswap" },
  { slug: "surrey", name: "Surrey", region: "Metro Vancouver" },
  { slug: "terrace", name: "Terrace", region: "Northern BC" },
  { slug: "trail", name: "Trail", region: "Kootenays" },
  { slug: "vancouver", name: "Vancouver", region: "Metro Vancouver" },
  { slug: "vernon", name: "Vernon", region: "Okanagan" },
  { slug: "victoria", name: "Victoria", region: "Vancouver Island" },
  { slug: "west-kelowna", name: "West Kelowna", region: "Okanagan" },
  { slug: "white-rock", name: "White Rock", region: "Metro Vancouver" },
  { slug: "williams-lake", name: "Williams Lake", region: "Cariboo" },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map(c => c.slug);
}

export function getCitiesByRegion(): Record<string, City[]> {
  return cities.reduce((acc, city) => {
    if (!acc[city.region]) {
      acc[city.region] = [];
    }
    acc[city.region].push(city);
    return acc;
  }, {} as Record<string, City[]>);
}
