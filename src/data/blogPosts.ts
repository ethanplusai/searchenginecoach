// Blog posts data - Generated from blog-content-plan.csv
import { content as whatIsSeo } from './content/what-is-seo';
import { content as typesOfSeo } from './content/types-of-seo';
import { content as seoExamples } from './content/seo-examples';
import { content as localSeoForSmallBusinesses } from './content/local-seo-for-small-businesses';
import { content as localSeoChecklist } from './content/local-seo-checklist';
import { content as localSeoPricing } from './content/local-seo-pricing';
import { content as localSeoExpert } from './content/local-seo-expert';
import { content as seoPricing } from './content/seo-pricing';
import { content as whiteLabelSeo } from './content/white-label-seo';
import { content as seoVsSemVsPpc } from './content/seo-vs-sem-vs-ppc';
import { content as whatIsPpcMarketing } from './content/what-is-ppc-marketing';
import { content as wordpressSeoChecklist } from './content/wordpress-seo-checklist';
import { content as wordpressSeoAgency } from './content/wordpress-seo-agency';
import { content as howWordpressWorks } from './content/how-wordpress-works';
import { content as elementorVsDivi } from './content/elementor-vs-divi';
import { content as howToUseElementor } from './content/how-to-use-elementor';
import { content as howToLogInToWordpress } from './content/how-to-log-in-to-wordpress';
import { content as addMetaTagsWordpress } from './content/add-meta-tags-wordpress';
import { content as famousWordpressSites } from './content/famous-wordpress-sites';
import { content as futureOfSeoAi } from './content/future-of-seo-ai';
import { content as whatIsAMarketingAgency } from './content/what-is-a-marketing-agency';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  image: string;
  imageAlt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-is-seo',
    title: "What Is SEO? A Complete Beginner's Guide",
    excerpt: 'Learn what SEO is, how search engine optimization works, and why it matters for your business. A comprehensive guide for beginners.',
    date: '2024-12-20',
    category: 'SEO Fundamentals',
    readTime: '11 min read',
    author: 'Search Engine Coach Team',
    primaryKeyword: 'what is seo',
    secondaryKeywords: ['what is seo and how it works', 'what is seo optimization', 'what is seo in digital marketing', 'seo meaning in business', 'why is seo so important'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop',
    imageAlt: 'SEO analytics dashboard showing search optimization metrics',
    content: whatIsSeo
  },
  {
    slug: 'types-of-seo',
    title: 'Types of SEO Explained: Local, Global, Technical & More',
    excerpt: 'Discover the different types of SEO including local SEO, technical SEO, on-page and off-page optimization. Learn which type your business needs.',
    date: '2024-12-18',
    category: 'SEO Fundamentals',
    readTime: '10 min read',
    author: 'Search Engine Coach Team',
    primaryKeyword: 'types of seo',
    secondaryKeywords: ['local seo', 'global seo', 'technical seo', 'on page seo', 'off page seo'],
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1600&h=900&fit=crop',
    imageAlt: 'Different types of SEO strategies illustrated on a computer screen',
    content: typesOfSeo
  },
  {
    slug: 'seo-examples',
    title: 'SEO Examples: How Search Engine Optimization Works in Real Life',
    excerpt: 'See real-world SEO examples that demonstrate how search engine optimization works. Practical case studies and implementation strategies.',
    date: '2024-12-15',
    category: 'SEO Fundamentals',
    readTime: '9 min read',
    author: 'Search Engine Coach Team',
    primaryKeyword: 'search engine optimization example',
    secondaryKeywords: ['seo examples', 'seo website examples'],
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=1600&h=900&fit=crop',
    imageAlt: 'Search engine optimization examples showing website rankings',
    content: seoExamples
  },
  {
    slug: 'local-seo-for-small-businesses',
    title: 'Local SEO for Small Businesses: The Complete Guide',
    excerpt: 'Master local SEO for your small business. Learn proven strategies to rank higher in local search results and attract more nearby customers.',
    date: '2024-12-12',
    category: 'Local SEO',
    readTime: '11 min read',
    author: 'Search Engine Coach Team',
    primaryKeyword: 'local seo for small businesses',
    secondaryKeywords: ['local seo', 'benefits of local seo', 'why local seo is important'],
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1600&h=900&fit=crop',
    imageAlt: 'Small business owner optimizing local SEO on laptop',
    content: localSeoForSmallBusinesses
  },
  {
    slug: 'local-seo-checklist',
    title: 'Local SEO Checklist: Step-by-Step Optimization Guide',
    excerpt: 'Follow this comprehensive local SEO checklist to optimize your business for local search. Actionable steps covering all major ranking factors.',
    date: '2024-12-10',
    category: 'Local SEO',
    readTime: '9 min read',
    author: 'Search Engine Coach Team',
    primaryKeyword: 'local seo checklist',
    secondaryKeywords: ['local seo factors', 'local seo tips'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1600&h=900&fit=crop',
    imageAlt: 'Local SEO checklist and optimization guide',
    content: localSeoChecklist
  },
  {
    slug: 'local-seo-pricing',
    title: 'Local SEO Pricing: What Small Businesses Should Expect to Pay',
    excerpt: 'Understand local SEO costs and pricing models. Learn what affects pricing and how to budget for local search optimization services.',
    date: '2024-12-08',
    category: 'Local SEO',
    readTime: '8 min read',
    author: 'Search Engine Coach Team',
    primaryKeyword: 'local seo pricing',
    secondaryKeywords: ['seo pricing', 'seo package pricing'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&h=900&fit=crop',
    imageAlt: 'Local SEO pricing and cost breakdown',
    content: localSeoPricing
  },
  {
    slug: 'local-seo-expert',
    title: 'How to Choose a Local SEO Expert or Consultant',
    excerpt: 'Find the right local SEO expert for your business. Learn what to look for, questions to ask, and red flags to avoid when hiring.',
    date: '2024-12-05',
    category: 'Local SEO',
    readTime: '8 min read',
    author: 'Search Engine Coach Team',
    primaryKeyword: 'local seo expert',
    secondaryKeywords: ['seo consultant', 'seo specialist'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop',
    imageAlt: 'SEO expert consulting with business owner',
    content: localSeoExpert
  },
  {
    slug: 'seo-pricing',
    title: 'SEO Pricing Explained: Packages, Costs, and ROI',
    excerpt: 'Get clarity on SEO pricing models, package options, and expected ROI. Make informed decisions about your SEO investment.',
    date: '2024-12-03',
    category: 'SEO Services',
    readTime: '9 min read',
    author: 'Search Engine Coach Team',
    primaryKeyword: 'seo pricing',
    secondaryKeywords: ['seo package pricing', 'seo consultant pricing'],
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1600&h=900&fit=crop',
    imageAlt: 'SEO pricing packages and service costs',
    content: seoPricing
  },
  {
    slug: 'white-label-seo',
    title: 'White Label SEO: Services, Tools, and Reporting Explained',
    excerpt: 'Learn about white label SEO services for agencies. Discover tools, reporting solutions, and how to scale your agency with white label partnerships.',
    date: '2024-12-01',
    category: 'SEO Services',
    readTime: '10 min read',
    author: 'Search Engine Coach Team',
    primaryKeyword: 'white label seo',
    secondaryKeywords: ['white label local seo', 'white label seo reports', 'white label seo tools'],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=900&fit=crop',
    imageAlt: 'White label SEO services and agency tools',
    content: whiteLabelSeo
  },
  {
    slug: 'seo-vs-sem-vs-ppc',
    title: "SEO vs SEM vs PPC: What's the Difference?",
    excerpt: 'Understand the differences between SEO, SEM, and PPC marketing. Learn which strategy is right for your business goals and budget.',
    date: '2024-11-28',
    category: 'SEM & PPC',
    readTime: '9 min read',
    author: 'Search Engine Coach Team',
    primaryKeyword: 'sem vs seo',
    secondaryKeywords: ['what is search engine marketing', 'what is ppc marketing', 'types of paid advertising'],
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1600&h=900&fit=crop',
    imageAlt: 'Comparison of SEO SEM and PPC marketing strategies',
    content: seoVsSemVsPpc
  },
  {
    slug: 'what-is-ppc-marketing',
    title: "What Is PPC Marketing? A Beginner's Guide",
    excerpt: 'Learn the basics of pay-per-click advertising. Understand how PPC works, different ad types, and when to use paid advertising.',
    date: '2024-11-25',
    category: 'SEM & PPC',
    readTime: '8 min read',
    author: 'Search Engine Coach Team',
    primaryKeyword: 'what is ppc marketing',
    secondaryKeywords: ['types of paid advertising', 'ppc examples'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&h=900&fit=crop',
    imageAlt: 'PPC marketing and pay-per-click advertising dashboard',
    content: whatIsPpcMarketing
  },
  {
    slug: 'wordpress-seo-checklist',
    title: 'WordPress SEO: Complete Optimization Checklist',
    excerpt: 'Optimize your WordPress site for search engines with this comprehensive checklist. Step-by-step guide covering technical SEO, plugins, and best practices.',
    date: '2024-11-22',
    category: 'WordPress',
    readTime: '10 min read',
    author: 'Search Engine Coach Team',
    primaryKeyword: 'wordpress seo checklist',
    secondaryKeywords: ['website seo tool', 'google search console for seo', 'sitemap generator'],
    image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=1600&h=900&fit=crop',
    imageAlt: 'WordPress SEO optimization checklist and settings',
    content: wordpressSeoChecklist
  },
  {
    slug: 'wordpress-seo-agency',
    title: 'WordPress SEO Agency: When to Hire One (and What to Expect)',
    excerpt: 'Considering a WordPress SEO agency? Learn when to hire professional help, what services to expect, and how to choose the right agency.',
    date: '2024-11-20',
    category: 'WordPress',
    readTime: '8 min read',
    author: 'Search Engine Coach Team',
    primaryKeyword: 'wordpress seo agency',
    secondaryKeywords: ['wordpress maintenance service', 'website for seo'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop',
    imageAlt: 'WordPress SEO agency team working on client website',
    content: wordpressSeoAgency
  },
  {
    slug: 'how-wordpress-works',
    title: 'How WordPress Works: Beginner Guide for Business Owners',
    excerpt: "Understand how WordPress works, what it's used for, and whether it's right for your business website. A non-technical guide for business owners.",
    date: '2024-11-18',
    category: 'WordPress',
    readTime: '9 min read',
    author: 'Search Engine Coach Team',
    primaryKeyword: 'how does wordpress work',
    secondaryKeywords: ['what is wordpress used for', 'is wordpress free', 'how does wordpress make money'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1600&h=900&fit=crop',
    imageAlt: 'How WordPress works for business websites',
    content: howWordpressWorks
  },
  {
    slug: 'elementor-vs-divi',
    title: 'Elementor vs Divi: Which WordPress Builder Is Better?',
    excerpt: 'Compare Elementor and Divi page builders. Detailed breakdown of features, pricing, ease of use, and which builder suits your needs.',
    date: '2024-11-15',
    category: 'WordPress',
    readTime: '8 min read',
    author: 'Search Engine Coach Team',
    primaryKeyword: 'elementor vs divi',
    secondaryKeywords: ['elementor free vs pro'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&h=900&fit=crop',
    imageAlt: 'Elementor vs Divi WordPress page builder comparison',
    content: elementorVsDivi
  },
  {
    slug: 'how-to-use-elementor',
    title: "How to Use Elementor: Beginner's Guide",
    excerpt: 'Master Elementor with this beginner-friendly guide. Learn installation, basic editing, templates, and tips to build beautiful WordPress pages.',
    date: '2024-11-12',
    category: 'WordPress',
    readTime: '10 min read',
    author: 'Search Engine Coach Team',
    primaryKeyword: 'how to use elementor',
    secondaryKeywords: ['how to install elementor in wordpress', 'elementor editor not loading', 'elementor transparent header'],
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1600&h=900&fit=crop',
    imageAlt: 'How to use Elementor page builder tutorial',
    content: howToUseElementor
  },
  {
    slug: 'how-to-log-in-to-wordpress',
    title: 'How to Log In to WordPress (Step-by-Step)',
    excerpt: "Can't find your WordPress login? This quick guide shows you exactly how to access your WordPress dashboard and troubleshoot common login issues.",
    date: '2024-11-10',
    category: 'WordPress',
    readTime: '5 min read',
    author: 'Search Engine Coach Team',
    primaryKeyword: 'how to log in to wordpress',
    secondaryKeywords: [],
    image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=1600&h=900&fit=crop',
    imageAlt: 'WordPress login screen and dashboard access',
    content: howToLogInToWordpress
  },
  {
    slug: 'add-meta-tags-wordpress',
    title: 'How to Add Meta Tags in WordPress for SEO',
    excerpt: 'Learn how to add and optimize meta tags in WordPress. Step-by-step instructions for title tags, meta descriptions, and other important SEO tags.',
    date: '2024-11-08',
    category: 'WordPress',
    readTime: '6 min read',
    author: 'Search Engine Coach Team',
    primaryKeyword: 'how to add a metatag to wordpress',
    secondaryKeywords: ['wordpress seo'],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&h=900&fit=crop',
    imageAlt: 'Adding meta tags to WordPress for SEO optimization',
    content: addMetaTagsWordpress
  },
  {
    slug: 'famous-wordpress-sites',
    title: 'Famous WordPress Sites: Examples & Inspiration',
    excerpt: "Discover famous websites built with WordPress. From major brands to popular blogs, see what's possible with the world's most popular CMS.",
    date: '2024-11-05',
    category: 'WordPress',
    readTime: '7 min read',
    author: 'Search Engine Coach Team',
    primaryKeyword: 'famous wordpress sites',
    secondaryKeywords: ['wordpress examples'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&h=900&fit=crop',
    imageAlt: 'Famous websites built on WordPress platform',
    content: famousWordpressSites
  },
  {
    slug: 'future-of-seo-ai',
    title: 'The Future of SEO: How AI Is Changing Search',
    excerpt: 'Explore how artificial intelligence is reshaping SEO and search engines. What marketers need to know about AI-driven search and optimization.',
    date: '2024-11-03',
    category: 'SEO Strategy',
    readTime: '9 min read',
    author: 'Search Engine Coach Team',
    primaryKeyword: 'future of seo with ai',
    secondaryKeywords: ['ai and seo'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=900&fit=crop',
    imageAlt: 'AI and the future of SEO and search engines',
    content: futureOfSeoAi
  },
  {
    slug: 'what-is-a-marketing-agency',
    title: 'What Is a Marketing Agency and What Do They Actually Do?',
    excerpt: 'Understand what marketing agencies do and how they help businesses grow. Learn about different agency types and services they offer.',
    date: '2024-11-01',
    category: 'Marketing',
    readTime: '8 min read',
    author: 'Search Engine Coach Team',
    primaryKeyword: 'what is a marketing agency',
    secondaryKeywords: ['digital marketing agency services'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop',
    imageAlt: 'Marketing agency team planning digital strategy',
    content: whatIsAMarketingAgency
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getCategories(): string[] {
  return [...new Set(blogPosts.map(post => post.category))];
}
