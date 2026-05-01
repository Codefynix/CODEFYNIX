export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  category: string;
  image: string;
  details: string;
};

export type Project = {
  slug: string;
  name: string;
  category: "Websites" | "Web Apps" | "CRM" | "Design" | "Automation";
  image: string;
  summary: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  image: string;
};

export const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Service" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export const services: Service[] = [
  {
    slug: "seo-optimized-websites",
    name: "SEO Optimized Websites",
    shortDescription:
      "Data-driven SEO strategies that rank your site higher and bring quality traffic.",
    category: "SEO",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    details:
      "Codefynix builds fast and search-first websites engineered for discoverability, performance, and measurable growth.",
  },
  {
    slug: "web-application-development",
    name: "Web Application Development",
    shortDescription:
      "Custom, scalable web apps built with Next.js and modern stacks for peak performance.",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    details:
      "From architecture to deployment, we craft robust products that are secure, maintainable, and conversion-ready.",
  },
  {
    slug: "crm-application-development",
    name: "CRM Application Development",
    shortDescription:
      "Tailored CRM systems that streamline your customer data and sales pipeline.",
    category: "CRM",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    details:
      "We centralize customer workflows, automate repetitive tasks, and provide real-time reporting for faster decisions.",
  },
  {
    slug: "whatsapp-automation-systems",
    name: "WhatsApp Automation Systems",
    shortDescription:
      "Automate customer engagement and support with smart WhatsApp Business workflows.",
    category: "Automation",
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1200&q=80",
    details:
      "Intelligent bots, campaign automation, and CRM-linked messaging to boost response speed and customer satisfaction.",
  },
  {
    slug: "video-editing-production",
    name: "Video Editing & Production",
    shortDescription:
      "Professional video editing that brings your brand story to life.",
    category: "Media",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80",
    details:
      "We produce polished edits for ads, explainers, reels, and branded content optimized for every platform.",
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    shortDescription:
      "Creative brand identities, UI mockups, and marketing visuals that stand out.",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    details:
      "From logos and social creatives to product assets, we design memorable visual systems with clear brand direction.",
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    shortDescription:
      "Intuitive and beautiful user experiences designed for conversion and delight.",
    category: "UX",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
    details:
      "Our UX process blends research, wireframing, prototyping, and usability testing to deliver frictionless experiences.",
  },
  {
    slug: "ecommerce-development",
    name: "E-Commerce Development",
    shortDescription:
      "Blazing-fast online stores with seamless checkout and product management.",
    category: "Commerce",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    details:
      "We build high-converting storefronts with secure payments, inventory tools, and analytics for sustained revenue growth.",
  },
];

export const projects: Project[] = [
  {
    slug: "finflow-corporate-website",
    name: "FinFlow Corporate Website",
    category: "Websites",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    summary: "SEO-ready corporate platform with multilingual support.",
  },
  {
    slug: "retailops-dashboard",
    name: "RetailOps Dashboard",
    category: "Web Apps",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    summary: "Operations dashboard with real-time analytics and role-based access.",
  },
  {
    slug: "salespulse-crm",
    name: "SalesPulse CRM",
    category: "CRM",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    summary: "Custom CRM designed for lead lifecycle and follow-up automation.",
  },
  {
    slug: "greenbite-brand-system",
    name: "GreenBite Brand System",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1452802447250-470a88ac82bc?auto=format&fit=crop&w=1200&q=80",
    summary: "Full visual identity and social campaign design suite.",
  },
  {
    slug: "carebot-whatsapp-suite",
    name: "CareBot WhatsApp Suite",
    category: "Automation",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    summary: "Automated appointment reminders and customer support workflows.",
  },
  {
    slug: "shoplane-ecommerce",
    name: "ShopLane Commerce Platform",
    category: "Web Apps",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=80",
    summary: "Modern storefront with dynamic catalog and fast checkout.",
  },
  {
    slug: "northpeak-landing-pages",
    name: "NorthPeak Landing Series",
    category: "Websites",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
    summary: "Lead generation focused microsites with A/B tested funnels.",
  },
  {
    slug: "studiox-social-pack",
    name: "StudioX Social Pack",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1616627450475-5f1c7f72d4cb?auto=format&fit=crop&w=1200&q=80",
    summary: "Monthly creative packs for social and ad campaigns.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "why-nextjs-is-perfect-for-growth",
    title: "Why Next.js Is Perfect for Growth-Focused Businesses",
    excerpt:
      "Explore why modern businesses are choosing Next.js for performance, SEO, and scale.",
    content:
      "Next.js combines blazing-fast rendering, flexible data strategies, and enterprise-ready architecture. At Codefynix, we use it to build resilient products that convert users and accelerate business growth.",
    publishedAt: "2026-04-15",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "automation-playbook-for-service-companies",
    title: "Automation Playbook for Service Companies",
    excerpt:
      "A practical framework to automate repetitive tasks and reclaim team bandwidth.",
    content:
      "From lead capture to onboarding and support, workflow automation reduces delays and increases consistency. This guide outlines a phased implementation model we deploy for clients.",
    publishedAt: "2026-04-02",
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "design-systems-that-save-time",
    title: "Design Systems That Save Time and Improve Consistency",
    excerpt:
      "Learn how a scalable design system improves product velocity and brand quality.",
    content:
      "A design system aligns teams on shared components, typography, spacing, and interaction patterns. It reduces rework and keeps digital experiences coherent across channels.",
    publishedAt: "2026-03-20",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "seo-basics-for-new-websites",
    title: "SEO Basics Every New Website Must Get Right",
    excerpt:
      "A no-fluff checklist for technical and on-page SEO foundations.",
    content:
      "SEO starts with crawlability, indexing health, metadata quality, and content hierarchy. This article explains the baseline setup every website should have before content scaling.",
    publishedAt: "2026-03-10",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "crm-features-that-increase-sales",
    title: "CRM Features That Actually Increase Sales Efficiency",
    excerpt:
      "Identify the CRM modules that unlock visibility, speed, and better forecasting.",
    content:
      "The right CRM setup focuses on data quality, lifecycle visibility, and automation hooks. We break down the core capabilities that deliver measurable sales impact.",
    publishedAt: "2026-02-28",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "video-content-for-digital-branding",
    title: "Using Video Content to Strengthen Digital Branding",
    excerpt:
      "How short-form and long-form video assets influence trust and conversion.",
    content:
      "Video is one of the strongest channels for storytelling and engagement. This post covers formats, production tips, and distribution strategies for sustained brand growth.",
    publishedAt: "2026-02-18",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
  },
];

export const faqs = [
  {
    question: "What industries does Codefynix work with?",
    answer:
      "We partner with startups, service businesses, D2C brands, and enterprise teams across technology, retail, healthcare, and education.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. We provide maintenance, SEO optimization, feature enhancements, and performance monitoring plans after go-live.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary by scope, but most website and app engagements range from 4 to 14 weeks including discovery and QA.",
  },
  {
    question: "Can you modernize an existing website or app?",
    answer:
      "Absolutely. We can audit legacy systems, migrate stacks, redesign UX, and improve performance without disrupting operations.",
  },
];

export const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "Marketing Lead, NovaEdge",
    quote:
      "Codefynix transformed our digital funnel end-to-end. Traffic quality improved and our conversion rate increased significantly within months.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Santhosh Narayan",
    role: "Founder, RetailRoot",
    quote:
      "Their web app architecture and execution speed were exceptional. We launched faster than expected and gained immediate operational clarity.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Vijay Kumar",
    role: "Operations Manager, CareHub",
    quote:
      "The WhatsApp automation suite reduced support delays and improved customer response quality. The team was proactive and strategic.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
  },
];
