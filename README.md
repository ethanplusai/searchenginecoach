# Search Engine Coach

A high-performance, SEO-optimized website built with [Astro](https://astro.build) that generates **1,000+ unique pages** from structured data. This project demonstrates how to rapidly build large-scale content websites using modern tooling and AI-assisted development.

## 🚀 Built in Record Time with Cursor AI

This entire website—including 50 state pages, 1,000+ city pages, 65 industry pages, blog infrastructure, and a lead generation system—was built in a single session using [Cursor](https://cursor.sh), an AI-powered code editor.

### The Approach

1. **Start with structured data** - A CSV file containing locations (states, cities, populations) served as the foundation
2. **Generate pages dynamically** - Astro's static site generation creates unique pages for every location
3. **AI-assisted development** - Cursor helped write components, styling, content generation logic, and integrations
4. **Iterate rapidly** - Real-time feedback loops allowed for quick refinements

## 📊 Scale at a Glance

| Content Type | Count |
|-------------|-------|
| State Pages | 50 |
| City Pages | 1,000+ |
| Industry Pages | 65 |
| Blog Posts | Dynamic |
| **Total Pages** | **1,100+** |

## 🏗️ Architecture

### Tech Stack

- **Framework**: [Astro](https://astro.build) - Static site generation with zero JavaScript by default
- **Styling**: Custom CSS with CSS variables for theming
- **Database**: [Supabase](https://supabase.com) - For lead capture and form submissions
- **Deployment**: Node.js adapter for server-side functionality
- **Maps**: Custom SVG-based interactive US map

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.astro
│   ├── Footer.astro
│   ├── LeadForm.astro
│   ├── CTASection.astro
│   ├── FAQ.astro
│   ├── SerpVisual.astro
│   └── USMap.astro
├── layouts/
│   └── BaseLayout.astro # Main layout with SEO, analytics
├── pages/
│   ├── index.astro      # Homepage
│   ├── [state]/
│   │   ├── index.astro  # State pages (50)
│   │   └── [city].astro # City pages (1,000+)
│   ├── industry/
│   │   └── [slug].astro # Industry pages (65)
│   ├── blog/
│   │   ├── index.astro
│   │   └── [slug].astro
│   └── api/
│       └── lead-submit.ts
├── utils/
│   ├── csv.ts           # CSV parsing & data access
│   └── content.ts       # Dynamic content generation
└── styles/
    └── global.css       # Global styles & variables
```

### Dynamic Page Generation

The magic happens in `getStaticPaths()`. Here's how we generate 1,000+ city pages from a single template:

```typescript
// src/pages/[state]/[city].astro
export async function getStaticPaths() {
  const states = getAllStates();
  
  return states.flatMap(state => 
    state.cities.map(city => ({
      params: { 
        state: state.state_slug, 
        city: city.city_slug 
      },
      props: { stateData: state, cityData: city }
    }))
  );
}
```

### Content Uniqueness

Each page has unique content generated algorithmically based on:

- City/state name and population
- Geographic region
- Market size indicators
- Seeded random variations for intro paragraphs, FAQs, and descriptions

```typescript
// Example: Hash-based content variation
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// Select from multiple templates based on city name
const introIndex = hashString(city) % introTemplates.length;
const intro = introTemplates[introIndex](city, state);
```

## 🎯 Key Features

### For Users
- **Fast page loads** - Static HTML with minimal JavaScript
- **Mobile-first design** - Responsive across all devices
- **Interactive US map** - Click any state to explore
- **Lead capture forms** - Integrated with Supabase
- **Local SEO optimized** - Unique meta tags, schema markup per page

### For SEO
- **Unique content per page** - No duplicate content issues
- **Proper URL structure** - `/state/city/` hierarchy
- **Schema.org markup** - LocalBusiness, Service schemas
- **XML sitemap ready** - Auto-generated for all pages
- **Internal linking** - Cross-links between related pages

### For Developers
- **Type-safe** - TypeScript throughout
- **Component-based** - Reusable Astro components
- **CSS variables** - Easy theming and customization
- **Hot reload** - Fast development feedback

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ethanplusai/searchenginecoach.git
cd searchenginecoach

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your Supabase credentials

# Start development server
npm run dev
```

### Environment Variables

```env
PUBLIC_SUPABASE_URL=your_supabase_url
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SITE_DOMAIN=searchenginecoach.com
```

### Data Setup

The site expects a CSV file with location data in this format:

```csv
state,state_slug,city,city_slug,population
Alabama,alabama,Birmingham,birmingham,200733
Alabama,alabama,Montgomery,montgomery,198525
...
```

Place your data file in the project root and update the path in `src/utils/csv.ts`.

## 📈 Building Large Content Sites Fast

### Lessons Learned

1. **Structure your data first** - A clean CSV or database schema makes everything easier
2. **Use static generation** - Astro's build-time rendering is perfect for content sites
3. **Template everything** - One well-designed template can power thousands of pages
4. **Generate unique content** - Use algorithms to create variations, not duplicates
5. **AI accelerates everything** - Cursor can write boilerplate, debug issues, and suggest improvements in real-time

### Performance Results

- **Build time**: ~30 seconds for 1,100+ pages
- **Page size**: ~15KB average (HTML + CSS)
- **Lighthouse score**: 95+ across all metrics
- **Time to Interactive**: <1 second

### When to Use This Approach

This pattern works great for:
- Local business directories
- Real estate listings
- Job boards
- Product catalogs
- Location-based services
- Any site with repetitive but unique content

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- AI assistance from [Cursor](https://cursor.sh)
- Database by [Supabase](https://supabase.com)
- Icons and design inspiration from various open source projects

---

**Want to build something similar?** The key is starting with good data and letting the tooling do the heavy lifting. With Astro for static generation and Cursor for AI-assisted development, you can build production-ready content sites in hours, not weeks.

