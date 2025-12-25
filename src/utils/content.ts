import type { LocationData, StateData } from './csv';

/**
 * Generates unique, localized content for city pages.
 * Uses multiple data points to ensure content varies significantly between cities.
 */

// Hash function to get consistent "random" values based on city name
function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

// Select from array based on city hash
function selectByHash<T>(arr: T[], city: string, offset: number = 0): T {
  const hash = hashCode(city + offset.toString());
  return arr[hash % arr.length];
}

const industryPhrases: Record<string, string[]> = {
  'tech': ['tech startups', 'software companies', 'IT firms', 'technology businesses'],
  'healthcare': ['medical practices', 'clinics', 'healthcare providers', 'doctors offices'],
  'finance': ['financial advisors', 'accounting firms', 'banks', 'insurance agencies'],
  'manufacturing': ['manufacturers', 'industrial companies', 'production facilities', 'factories'],
  'retail': ['retail stores', 'local shops', 'boutiques', 'e-commerce businesses'],
  'education': ['schools', 'tutoring centers', 'educational institutions', 'training academies'],
  'tourism': ['hotels', 'restaurants', 'travel agencies', 'tour operators'],
  'real estate': ['real estate agents', 'property managers', 'brokers', 'realtors'],
  'aerospace': ['aerospace firms', 'aviation companies', 'defense contractors'],
  'energy': ['energy companies', 'solar installers', 'HVAC contractors', 'utilities'],
  'agriculture': ['farms', 'agricultural suppliers', 'food producers'],
  'logistics': ['shipping companies', 'freight services', 'warehouses', 'delivery services'],
  'entertainment': ['entertainment venues', 'event spaces', 'media companies'],
  'government': ['government contractors', 'public sector vendors'],
  'professional services': ['law firms', 'consultants', 'marketing agencies', 'PR firms'],
  'construction': ['contractors', 'builders', 'construction companies', 'home builders'],
  'automotive': ['auto dealers', 'mechanics', 'body shops', 'car dealerships'],
  'biotech': ['biotech companies', 'life science firms', 'research facilities'],
  'hospitality': ['restaurants', 'cafes', 'bars', 'catering companies'],
  'legal': ['law firms', 'attorneys', 'legal services'],
  'medical': ['doctors', 'dentists', 'chiropractors', 'therapists'],
  'home services': ['plumbers', 'electricians', 'roofers', 'landscapers'],
};

function getIndustryPhrase(industry: string, city: string): string {
  const lower = industry.toLowerCase();
  const phrases = industryPhrases[lower];
  if (phrases) {
    return selectByHash(phrases, city);
  }
  return `${industry.toLowerCase()} businesses`;
}

function getIndustryList(industries: string[], city: string): string {
  const phrases = industries.slice(0, 3).map((ind, i) => getIndustryPhrase(ind, city + i));
  if (phrases.length === 1) return phrases[0];
  if (phrases.length === 2) return `${phrases[0]} and ${phrases[1]}`;
  return `${phrases.slice(0, -1).join(', ')}, and ${phrases[phrases.length - 1]}`;
}

// Introduction variations
const introTemplates = [
  (city: string, state: string, industries: string) => 
    `If you run a business in ${city}, ${state}, potential customers are searching Google for ${industries} right now. The question is whether they're finding you or your competitors. We help ${city} businesses show up where it matters—at the top of search results.`,
  
  (city: string, state: string, industries: string) =>
    `Every day, hundreds of people in ${city} search Google for local services. They're looking for ${industries}—and they're ready to buy. If your business isn't ranking, you're losing those customers to competitors who are. We change that.`,
  
  (city: string, state: string, industries: string) =>
    `Your ${city} customers don't flip through phone books anymore. They Google. Whether they need ${industries}, search is where they start. We make sure your business is the one they find.`,
  
  (city: string, state: string, industries: string) =>
    `Getting found online in ${city} isn't optional anymore—it's how businesses grow. Local ${industries} are competing for attention on Google, and the ones ranking on page one are winning. We help you become one of them.`,
  
  (city: string, state: string, industries: string) =>
    `${city} businesses face a choice: invest in SEO now or watch competitors capture every local search. From ${industries}, the businesses showing up on Google are the ones getting calls. Let's make sure that's you.`,
  
  (city: string, state: string, industries: string) =>
    `When someone in ${city}, ${state} needs ${industries}, they reach for their phone and search. In seconds, they've found a business and made a decision. Our SEO services ensure your business is the one they choose.`,
  
  (city: string, state: string, industries: string) =>
    `The ${city} market is active online. Local searches for ${industries} happen constantly, and businesses that rank well are capturing that demand. If you're not visible on Google, you're leaving money on the table.`,
  
  (city: string, state: string, industries: string) =>
    `Running a business in ${city}? Your next customer is probably on Google right now, searching for ${industries}. SEO is how you make sure they find you instead of your competition.`,
];

// Competition-based messaging
function getCompetitionContent(level: string, city: string): string {
  const highMessages = [
    `${city} is a competitive market for search visibility. Businesses here have been investing in SEO for years, which makes standing out harder—but not impossible. With the right strategy, you can outrank established competitors.`,
    `Competition for Google's top spots in ${city} is fierce. That's actually good news for businesses willing to invest seriously in SEO—you can differentiate yourself while others settle for mediocre results.`,
    `The ${city} SEO landscape is competitive, which means half-measures won't cut it. But businesses that commit to comprehensive optimization consistently outperform those relying on outdated tactics.`,
  ];
  
  const mediumMessages = [
    `${city} has moderate SEO competition. Some local businesses rank well, but there's significant opportunity for those willing to execute a solid strategy. Many local searches still return mediocre results.`,
    `The competitive landscape in ${city} is balanced—not easy, but not locked down either. Businesses that invest in quality SEO can absolutely break into the top positions.`,
    `In ${city}, the SEO competition is manageable. The top positions aren't unattainable, but they require consistent effort and smart strategy. There's room for new players who take it seriously.`,
  ];
  
  const lowMessages = [
    `${city} has relatively low SEO competition right now. Most local businesses haven't invested seriously in search optimization, which creates a major opportunity for those who move first.`,
    `The good news about ${city}? Most local businesses haven't figured out SEO yet. This is your window to establish dominance before the market gets crowded.`,
    `SEO competition in ${city} is still developing, which means early movers have a significant advantage. Businesses that invest now can lock in top positions before competitors catch on.`,
  ];
  
  switch (level) {
    case 'high': return selectByHash(highMessages, city);
    case 'medium': return selectByHash(mediumMessages, city);
    case 'low': return selectByHash(lowMessages, city);
    default: return `${city} presents real opportunity for businesses ready to invest in search visibility.`;
  }
}

// Market size messaging
function getMarketContent(size: string, population: number, city: string): string {
  const pop = population.toLocaleString();
  
  const largeMessages = [
    `With a population of ${pop}, ${city} generates massive local search volume. Thousands of searches happen daily for local services—ranking on page one means a constant stream of potential customers.`,
    `${city}'s ${pop} residents create substantial online search demand. Major markets like this reward SEO investment with serious traffic and lead generation potential.`,
    `A market of ${pop} people means ${city} has the search volume to drive real business growth. The key is capturing your share of those searches through smart optimization.`,
  ];
  
  const midMessages = [
    `${city}'s population of ${pop} creates healthy search demand without big-city competition levels. Mid-sized markets often deliver the best SEO ROI—meaningful volume with achievable rankings.`,
    `With ${pop} residents, ${city} hits a sweet spot for SEO: enough search volume to drive growth, without the brutal competition of major metros.`,
    `Markets like ${city} (population ${pop}) are where SEO often performs best. You get real search volume without needing enterprise-level budgets to compete.`,
  ];
  
  const smallMessages = [
    `${city}'s population of ${pop} might seem modest, but local search traffic is still valuable. Smaller markets mean faster results and the ability to truly dominate your niche.`,
    `Don't underestimate ${city}'s ${pop} residents—local searches here convert at high rates because people are looking for nearby solutions. Smaller markets, bigger opportunities.`,
    `With ${pop} residents, ${city} is a market where smart SEO pays off quickly. Less competition means you can establish authority faster and own your local search results.`,
  ];
  
  switch (size) {
    case 'large': return selectByHash(largeMessages, city, 1);
    case 'mid': return selectByHash(midMessages, city, 1);
    case 'small': return selectByHash(smallMessages, city, 1);
    default: return `${city}'s market of ${pop} residents represents real opportunity for businesses that rank well.`;
  }
}

export function generateCityIntro(location: LocationData): string {
  const { city, state, dominant_industries } = location;
  const industries = getIndustryList(dominant_industries, city);
  const template = selectByHash(introTemplates, city, 2);
  return template(city, state, industries);
}

export function generateWhySEOMatters(location: LocationData): string {
  const { city, state, competition_level, market_size, population, dominant_industries } = location;
  
  const marketContent = getMarketContent(market_size, population, city);
  const competitionContent = getCompetitionContent(competition_level, city);
  
  const closingStatements = [
    `SEO is about showing up when ${city} customers are searching for exactly what you offer. We focus on sustainable strategies—technical optimization, quality content, and building real authority.`,
    `Effective SEO in ${city} requires more than keywords. It demands technical excellence, relevant content, and signals that tell Google you're the most credible option. That's what we deliver.`,
    `Our approach to ${city} SEO focuses on what Google actually rewards: fast, well-built websites, content that answers real questions, and authority built through quality, not shortcuts.`,
    `We don't do SEO tricks that might work today and fail tomorrow. For ${city} businesses, we build lasting visibility through technical optimization, strategic content, and genuine authority.`,
  ];
  
  const closing = selectByHash(closingStatements, city, 3);
  
  return `
    <p>${marketContent}</p>
    <p>${competitionContent}</p>
    <p>${closing}</p>
  `.trim();
}

export function generateCityFAQs(location: LocationData): Array<{ question: string; answer: string }> {
  const { city, state, competition_level, dominant_industries, market_size } = location;
  const primaryIndustry = getIndustryPhrase(dominant_industries[0], city);
  const industries = getIndustryList(dominant_industries, city);
  
  const timelineAnswers = [
    `Most ${city} businesses see initial ranking improvements within 2-3 months, with significant results typically appearing in months 4-6. ${competition_level === 'high' ? 'Competitive markets like yours may take longer to break through, but results compound over time.' : 'Your market conditions can support faster progress with consistent execution.'} SEO is an investment that builds over time—the longer you're in it, the stronger your position becomes.`,
    `SEO timelines vary, but ${city} businesses generally start seeing meaningful movement in 3-4 months, with stronger results building through months 6-12. ${competition_level === 'low' ? 'Lower competition here can accelerate your progress.' : 'Consistency is key in competitive markets.'} Unlike paid ads, SEO results compound and persist.`,
    `For businesses in ${city}, expect initial improvements within the first 90 days, with more substantial gains developing over 6+ months. ${market_size === 'large' ? 'Larger markets take time to penetrate but offer significant upside.' : 'Markets your size often see faster wins than major metros.'} SEO is a marathon, not a sprint—but the finish line keeps moving in your favor.`,
  ];
  
  const servicesAnswers = [
    `For ${city} businesses, we provide full-service SEO: local search optimization to appear in map results, Google Business Profile management, technical SEO audits and fixes, content strategy, and authority building through quality link acquisition. Everything is customized for your specific market and competition.`,
    `Our ${city} SEO services cover everything needed to rank higher: local SEO and map pack optimization, on-page optimization, technical fixes, content development, and link building. We also handle Google Business Profile setup and optimization—critical for local visibility.`,
    `We offer comprehensive SEO for ${city} businesses including local search optimization, technical website audits, content strategy, Google Business Profile management, citation building, and strategic link acquisition. Each engagement is tailored to your competitive landscape.`,
  ];
  
  const industryAnswers = [
    `Absolutely. We've worked with ${industries} throughout ${state} and understand the unique SEO challenges and opportunities in your industry. Our strategies are built around your specific competitive landscape and customer search behavior.`,
    `Yes—we have experience helping ${industries} improve their search visibility. We understand what drives rankings in your industry and build strategies that target the searches that actually generate business.`,
    `We work with businesses across industries, including ${industries}. Each strategy is customized based on your industry's competitive dynamics and how your potential customers search.`,
  ];
  
  const differenceAnswers = [
    `We focus on outcomes, not activities. Every recommendation is tied to actually improving your rankings and traffic. We're transparent about what's working and what isn't, and we don't lock you into long contracts—our results keep you here, not fine print.`,
    `We skip the vanity metrics and focus on what matters: rankings, traffic, and leads. Our approach is strategic and transparent—you'll always know what we're doing and why. We earn your business every month through results.`,
    `We're practitioners, not salespeople. Everything we recommend is based on what actually moves rankings. We communicate clearly, report honestly, and focus on your business results rather than impressive-sounding SEO jargon.`,
  ];
  
  const startedAnswers = [
    `Start with a free strategy session. We'll analyze your current online presence, review your ${city} competition, and outline exactly what it would take to improve your rankings. No pressure, no hard sell—just a clear picture of your opportunity.`,
    `Reach out for a free SEO assessment. We'll look at your website, your Google Business Profile, and your local competition to show you where you stand and what's possible. It's a no-obligation conversation about your options.`,
    `Request your free strategy session. We'll audit your current visibility, analyze competitors in the ${city} market, and present a roadmap for improvement. You'll leave with actionable insights whether you work with us or not.`,
  ];
  
  return [
    {
      question: `How long does SEO take to work in ${city}?`,
      answer: selectByHash(timelineAnswers, city, 4)
    },
    {
      question: `What SEO services do you provide for ${city} businesses?`,
      answer: selectByHash(servicesAnswers, city, 5)
    },
    {
      question: `Do you work with ${dominant_industries[0].toLowerCase()} businesses in ${city}?`,
      answer: selectByHash(industryAnswers, city, 6)
    },
    {
      question: `What makes your SEO approach different?`,
      answer: selectByHash(differenceAnswers, city, 7)
    },
    {
      question: `How do I start working with you on SEO for my ${city} business?`,
      answer: selectByHash(startedAnswers, city, 8)
    }
  ];
}

export function generateStateIntro(stateData: StateData): string {
  const { state, cities, totalPopulation } = stateData;
  const cityCount = cities.length;
  const topCities = cities.slice(0, 4).map(c => c.city);
  
  const templates = [
    `<p>From ${topCities[0]} to ${topCities[1]} and everywhere in between, ${state} businesses are competing for Google's top spots. Local search has become the primary way customers find services—and businesses that aren't visible are losing ground daily.</p>
    <p>We help ${state} businesses break through. Whether you're in a major metro, a growing suburb, or an established community, our SEO strategies are built around your specific market. No generic playbooks—just focused work that drives rankings, traffic, and revenue.</p>`,
    
    `<p>Across ${state}'s ${cityCount}+ cities, businesses are fighting for visibility on Google. From ${topCities[0]} to ${topCities[2]}, local search determines which companies get found—and which get forgotten.</p>
    <p>We specialize in helping ${state} businesses dominate their local markets. Our approach combines technical expertise with deep understanding of regional search patterns. The result: higher rankings, more traffic, and measurable business growth.</p>`,
    
    `<p>${state} businesses face intense competition for online attention. Whether you're in ${topCities[0]}, ${topCities[1]}, or a smaller community, your potential customers are searching Google before they buy. Ranking well isn't optional—it's how businesses grow.</p>
    <p>We've helped businesses throughout ${state} improve their search visibility and capture more local demand. Our strategies are tailored to your market's unique competitive landscape and search patterns.</p>`,
  ];
  
  return selectByHash(templates, state);
}

export function generateStateMarketOverview(stateData: StateData): string {
  const { state, cities } = stateData;
  
  const highCompCities = cities.filter(c => c.competition_level === 'high').length;
  const medCompCities = cities.filter(c => c.competition_level === 'medium').length;
  const lowCompCities = cities.filter(c => c.competition_level === 'low').length;
  
  const allIndustries = new Set<string>();
  cities.forEach(c => c.dominant_industries.forEach(i => allIndustries.add(i)));
  const topIndustries = Array.from(allIndustries).slice(0, 5);
  
  let competitionNote = '';
  if (highCompCities > cities.length * 0.3) {
    competitionNote = `Many ${state} markets are highly competitive, meaning SEO requires serious commitment—but businesses that invest see significant returns.`;
  } else if (lowCompCities > cities.length * 0.4) {
    competitionNote = `A significant portion of ${state} markets have lower competition, creating opportunity for businesses that act now to establish search dominance.`;
  } else {
    competitionNote = `${state}'s markets vary from highly competitive metros to developing suburban markets, each requiring a tailored SEO approach.`;
  }
  
  return `
    <p>${state}'s economy spans ${topIndustries.slice(0, 4).join(', ')}, and dozens more industries. Across all of them, businesses are competing for online visibility. The ones ranking on page one are capturing the largest share of customers.</p>
    <p>${competitionNote}</p>
  `.trim();
}
