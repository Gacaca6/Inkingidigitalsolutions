export const site = {
  name: "Inkingi Digital Solutions",
  short: "Inkingi",
  tagline: "Building what comes next.",
  url: "https://inkingi.rw",
  email: "hello@inkingi.rw",
  careersEmail: "careers@inkingi.rw",
  phone: "+250 788 421 706", // TODO: replace with the studio's real line
  whatsapp: "+250 788 421 706",
  city: "Kigali, Rwanda",
  hours: "Mon–Fri · 08:00–18:00 CAT",
};

/* ------------------------------------------------------------------
   NAVIGATION — two-tier header. Services carries a dropdown.
------------------------------------------------------------------ */
export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const nav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/website-design", label: "Website Design" },
      { href: "/services/web-hosting", label: "Web Hosting" },
      { href: "/services/graphic-design", label: "Graphic Design" },
      { href: "/services/digital-marketing", label: "Digital Marketing" },
    ],
  },
  { href: "/clients", label: "Our Clients" },
  { href: "/contact", label: "Contact" },
];

/* ------------------------------------------------------------------
   SERVICES — the four things we sell. Each has its own page.
------------------------------------------------------------------ */
export type ServiceTier = {
  name: string;
  price: string;
  unit: string;
  note: string;
  features: string[];
  featured?: boolean;
};

export type Service = {
  slug: string;
  idx: string;
  name: string;
  tagline: string;
  summary: string;
  intro: string;
  includes: string[];
  demo: "site" | "cloud" | "brand" | "marketing";
  /** website-design uses the shared web packages; the rest carry their own tiers */
  pricing: "packages" | { lede: string; tiers: ServiceTier[] };
};

export const services: Service[] = [
  {
    slug: "website-design",
    idx: "01",
    name: "Website Design",
    tagline: "The first thing they judge you on.",
    summary:
      "Custom websites that load in under a second on a Kigali connection, read beautifully on a phone, and turn visitors into customers.",
    intro:
      "Before anyone calls you, they look you up. We build the site that decides what they think next — designed from scratch for your business, never a template, and fast enough that nobody leaves while it loads.",
    includes: [
      "Custom design — never a template",
      "Mobile-first, sub-second load",
      "Search-engine foundations built in",
      "Content you manage yourself, no developer needed",
      "Kinyarwanda, English & French ready",
      "Analytics and contact capture configured",
    ],
    demo: "site",
    pricing: "packages",
  },
  {
    slug: "web-hosting",
    idx: "02",
    name: "Web Hosting",
    tagline: "Fast, secure, and actually watched over.",
    summary:
      "Hosting on infrastructure we monitor ourselves — with your .rw domain, SSL, daily backups, and a human in Kigali to call.",
    intro:
      "Most hosting is a login and a shrug when something breaks. Ours comes with monitoring that pages a real person, backups we actually test, and support that answers in Kinyarwanda. Your site stays up; you sleep.",
    includes: [
      "Free .rw domain for the first year",
      "SSL certificate and firewall included",
      "Daily backups — tested, not just taken",
      "Business email accounts on your domain",
      "Uptime monitoring with real alerts",
      "Local support, same time zone",
    ],
    demo: "cloud",
    pricing: {
      lede: "Billed annually. Every plan includes a free .rw domain, SSL, and daily backups.",
      tiers: [
        {
          name: "Starter",
          price: "60,000",
          unit: "RWF / year",
          note: "One site, small business",
          features: [
            "10 GB SSD storage",
            "Free .rw domain (year one)",
            "20 email accounts",
            "SSL + daily backups",
            "Email support",
          ],
        },
        {
          name: "Business",
          price: "150,000",
          unit: "RWF / year",
          note: "Growing site with traffic",
          featured: true,
          features: [
            "50 GB SSD storage",
            "Free domain + SSL",
            "100 email accounts",
            "Staging environment",
            "Phone & WhatsApp support",
          ],
        },
        {
          name: "Managed",
          price: "320,000",
          unit: "RWF / year",
          note: "Mission-critical, hands-off",
          features: [
            "100 GB SSD storage",
            "Priority uptime monitoring",
            "300 email accounts",
            "SSH access + weekly reports",
            "Named support contact",
          ],
        },
      ],
    },
  },
  {
    slug: "graphic-design",
    idx: "03",
    name: "Graphic Design",
    tagline: "Impossible to confuse with anyone else.",
    summary:
      "Logos, brand identities, and the print and social assets that make a small business look like it means business.",
    intro:
      "A logo is not a brand. We build the whole system — the mark, the colours, the type, the templates — so everything you put out looks like it came from the same confident company, whether it is a business card or a billboard.",
    includes: [
      "Logo suite in every file format you'll need",
      "Colour and typography system",
      "Business cards, letterhead, print-ready",
      "Social media templates you can reuse",
      "100% ownership of the final files",
      "Local printing partners, sorted",
    ],
    demo: "brand",
    pricing: {
      lede: "Logo and identity work is priced per project. Ongoing design is a monthly retainer.",
      tiers: [
        {
          name: "Logo & Essentials",
          price: "60,000",
          unit: "RWF · from, one-time",
          note: "New businesses finding their look",
          features: [
            "4 logo concepts to choose from",
            "Unlimited revisions on your pick",
            "All file formats + ownership",
            "Business card design",
            "3–5 day turnaround",
          ],
        },
        {
          name: "Brand Identity",
          price: "250,000",
          unit: "RWF · from, one-time",
          note: "Businesses that want to look serious",
          featured: true,
          features: [
            "Full logo suite + variations",
            "Colour & typography system",
            "Stationery + social templates",
            "A written brand guide",
            "Print-ready everything",
          ],
        },
        {
          name: "Design Retainer",
          price: "120,000",
          unit: "RWF / month",
          note: "Ongoing posts, flyers, campaigns",
          features: [
            "Set allocation of designs monthly",
            "Social graphics & stories",
            "Flyers, banners, promotions",
            "48-hour turnaround",
            "Consistent with your brand",
          ],
        },
      ],
    },
  },
  {
    slug: "digital-marketing",
    idx: "04",
    name: "Digital Marketing",
    tagline: "Reach that turns into revenue.",
    summary:
      "Social media, paid ads, and SEO — managed month to month and measured against the numbers that actually matter to you.",
    intro:
      "Being online is not the same as being found. We run your social channels, place your ads, and tune your search presence — then report every month in plain numbers: reach, leads, and what it cost to get them.",
    includes: [
      "Social media management & content",
      "Post graphics designed in-house",
      "Meta and Google ad campaigns",
      "Search-engine optimisation",
      "Monthly reporting in plain language",
      "WhatsApp support, same time zone",
    ],
    demo: "marketing",
    pricing: {
      lede: "Billed monthly. Ad spend is separate and always yours — we never mark it up.",
      tiers: [
        {
          name: "Starter",
          price: "200,000",
          unit: "RWF / month",
          note: "Getting consistent and visible",
          features: [
            "1–2 platforms managed",
            "2–3 posts per week",
            "Post graphics included",
            "Google Business + ad setup",
            "Monthly performance report",
          ],
        },
        {
          name: "Growth",
          price: "350,000",
          unit: "RWF / month",
          note: "Turning reach into enquiries",
          featured: true,
          features: [
            "2–3 platforms managed",
            "4–5 posts per week, custom graphics",
            "Meta + Google ads managed",
            "Email marketing setup",
            "Analytics & engagement tracking",
          ],
        },
        {
          name: "Scale",
          price: "650,000",
          unit: "RWF / month",
          note: "Serious, multi-channel growth",
          features: [
            "3–4 platforms, daily posting",
            "Full paid campaign management",
            "A/B testing + conversion tracking",
            "SEO integration",
            "Priority WhatsApp support",
          ],
        },
      ],
    },
  },
];

/* ------------------------------------------------------------------
   WEBSITE PACKAGES — setup fee + monthly, used on Website Design
   and the Pricing page.
------------------------------------------------------------------ */
export type WebPackage = {
  id: string;
  name: string;
  blurb: string;
  setup: string;
  monthly: string;
  delivery: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

export const webPackages: WebPackage[] = [
  {
    id: "basic",
    name: "Basic",
    blurb: "A clean, fast presence for a business getting online properly for the first time.",
    setup: "200,000",
    monthly: "50,000",
    delivery: "3–5 days",
    features: [
      "Landing page or simple website design",
      "Responsive design",
      "Basic on-page SEO setup",
      "Contact form",
      "Fast loading performance",
      "Third-party integrations",
      "Delivery in 3–5 days",
    ],
    cta: "Choose Basic",
  },
  {
    id: "business",
    name: "Business",
    blurb: "A complete, custom-designed site for a company ready to compete online.",
    setup: "500,000",
    monthly: "70,000",
    delivery: "5–7 days",
    featured: true,
    features: [
      "5–7 pages with custom design",
      "Custom professional design",
      "Mobile-first & responsive",
      "On-page and off-page SEO optimization",
      "Performance optimization",
      "Google Maps integration",
      "Google Analytics setup",
      "SSL certificate and basic security",
      "Delivery in 5–7 days",
    ],
    cta: "Choose Business",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    blurb: "A full online store — catalog, cart, payments, and the operations behind them.",
    setup: "800,000",
    monthly: "100,000",
    delivery: "7–10 days",
    features: [
      "Unlimited pages with custom design",
      "Fully custom UI/UX design",
      "Product catalog and shopping cart system",
      "Basic inventory and order management",
      "Shipping setup",
      "Payment gateway integration",
      "High-level SEO & security configuration",
      "Unlimited revisions",
      "Priority delivery (7–10 days)",
    ],
    cta: "Choose E-commerce",
  },
];

/* ------------------------------------------------------------------
   CLIENT STORIES — challenge / solution / outcome.
   Clients anonymised by sector at their request.
------------------------------------------------------------------ */
export type Story = {
  id: string;
  sector: string;
  scale: string;
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { value: string; label: string }[];
  quote: string;
  attribution: string;
};

export const stories: Story[] = [
  {
    id: "retail",
    sector: "Retail & e-commerce",
    scale: "1 shop → nationwide delivery",
    title: "A Kigali boutique that was invisible the moment the shop closed",
    challenge:
      "All sales happened in-store. Customers who found the shop on Instagram had no way to buy, and the owner spent evenings answering the same price questions in DMs.",
    solution:
      "A custom online store with a product catalog, mobile-money checkout, and delivery setup — plus a social presence that points followers straight to the cart instead of the inbox.",
    outcome:
      "Orders now arrive overnight and from outside Kigali. The owner answers fewer DMs and ships more boxes.",
    metrics: [
      { value: "3.4×", label: "monthly orders within a quarter" },
      { value: "41%", label: "of sales now outside Kigali" },
      { value: "7 days", label: "from brief to live store" },
    ],
    quote: "The shop finally works while I sleep.",
    attribution: "Owner · fashion & retail",
  },
  {
    id: "clinic",
    sector: "Healthcare",
    scale: "3 branches · 40 staff",
    title: "A clinic group losing bookings to a phone line nobody answered",
    challenge:
      "Appointments ran through a single busy phone line. Patients who couldn't get through simply went elsewhere, and the brand looked different on every flyer and sign.",
    solution:
      "A professional website with online booking, a coherent visual identity across print and digital, and a Google presence so the clinics actually show up when someone searches nearby.",
    outcome:
      "Patients book themselves, at any hour. The three branches finally look like one trusted brand.",
    metrics: [
      { value: "58%", label: "of bookings now self-service" },
      { value: "2.2×", label: "search visibility in 90 days" },
      { value: "1 identity", label: "across all three branches" },
    ],
    quote: "We look like the serious clinic we always were.",
    attribution: "Director · healthcare group",
  },
  {
    id: "cooperative",
    sector: "Agriculture & trade",
    scale: "1,200 members",
    title: "A cooperative with a great product and no way to be found",
    challenge:
      "Buyers could not find the cooperative online, and had no confidence in an operation with no website, no email on its own domain, and no consistent brand.",
    solution:
      "A credible website, hosting with proper business email, a clean brand identity, and a digital-marketing push to reach buyers beyond the district.",
    outcome:
      "Enquiries now come from buyers the cooperative never used to reach — including two outside the country.",
    metrics: [
      { value: "6", label: "new wholesale buyers in a season" },
      { value: "100%", label: "of staff on branded email" },
      { value: "+28%", label: "average selling price" },
    ],
    quote: "Now buyers take one look and trust us.",
    attribution: "Chairperson · farming cooperative",
  },
];

/* ------------------------------------------------------------------
   PROCESS
------------------------------------------------------------------ */
export const journey = [
  {
    idx: "01",
    title: "Discover",
    lead: "We learn your business before we propose anything.",
    body: "A proper conversation about what you sell, who you sell to, and what is getting in the way. We surface what will actually move your numbers — not what would be fun to build.",
    output: "A clear brief and a fixed quote.",
  },
  {
    idx: "02",
    title: "Design",
    lead: "You see it before we build it.",
    body: "Real, clickable designs in your hands early. Changing a screen now costs an afternoon; changing it after launch costs a week. So we get it right here.",
    output: "Signed-off designs you approve.",
  },
  {
    idx: "03",
    title: "Engineer",
    lead: "Built properly, shown as we go.",
    body: "Clean, fast, secure work — demonstrated regularly, not hidden behind status reports. You always know what exists and what is next.",
    output: "Your site or system, built to last.",
  },
  {
    idx: "04",
    title: "Launch",
    lead: "Live, with nothing left to chance.",
    body: "Domain, hosting, SSL, analytics, and training — all handled. We watch the first weeks closely and stay reachable while everything settles.",
    output: "A live product and a team that can use it.",
  },
  {
    idx: "05",
    title: "Grow",
    lead: "We stay, and keep it working.",
    body: "Maintenance, security updates, hosting, and marketing — month after month. Most of our work is with clients we launched long ago.",
    output: "A partnership measured in years.",
  },
];

/* ------------------------------------------------------------------
   PRINCIPLES
------------------------------------------------------------------ */
export const principles = [
  {
    n: "01",
    title: "Reliable",
    body: "Technology you can trust. We publish our uptime, we tell you what broke, and we say when something is a bad idea — including when it is our idea.",
  },
  {
    n: "02",
    title: "Innovative",
    body: "We build solutions for tomorrow. New tools get used when they beat the old ones on a measure you care about, not because they are new.",
  },
  {
    n: "03",
    title: "Human",
    body: "People at the heart of everything. The test of anything we make is whether the person using it on a busy Friday finds it obvious.",
  },
  {
    n: "04",
    title: "Engineering-first",
    body: "Clean. Scalable. Built to last. Reviewed work, real testing, and honest documentation — the unglamorous craft that decides whether something survives.",
  },
  {
    n: "05",
    title: "Rwandan & global",
    body: "Rooted in Rwanda. Built for the world. We design for mobile money, intermittent signal, and multilingual teams — at the quality bar of anyone anywhere.",
  },
];

/* ------------------------------------------------------------------
   INSIGHTS
------------------------------------------------------------------ */
export const insights = [
  {
    id: "wrong-first-question",
    date: "2026-07-08",
    dateLabel: "8 July 2026",
    category: "Strategy",
    read: "7 min",
    title: "“How much for a website?” is the wrong first question",
    excerpt:
      "The question underneath it is usually: how do we stop losing customers to businesses that look more organised than us? Those need different answers, and only one starts with a website.",
  },
  {
    id: "hosting-that-answers",
    date: "2026-06-19",
    dateLabel: "19 June 2026",
    category: "Hosting",
    read: "6 min",
    title: "Cheap hosting is the most expensive kind",
    excerpt:
      "What actually happens when a Rwandan business's site goes down on a Saturday — and why the monthly saving on bargain hosting disappears the first time it does.",
  },
  {
    id: "ninety-day-marketing",
    date: "2026-05-27",
    dateLabel: "27 May 2026",
    category: "Marketing",
    read: "5 min",
    title: "If your marketing can't show you numbers, it isn't marketing",
    excerpt:
      "The three figures we report to every client every month — reach, leads, and cost per lead — and why a pretty feed with none of them is just decoration.",
  },
  {
    id: "brand-before-ads",
    date: "2026-04-30",
    dateLabel: "30 April 2026",
    category: "Branding",
    read: "8 min",
    title: "Fix the brand before you spend on ads",
    excerpt:
      "Paying to send traffic to a business that looks unfinished is paying to confirm a bad first impression. Where identity work pays for itself before a single ad runs.",
  },
];

/* ------------------------------------------------------------------
   CAREERS
------------------------------------------------------------------ */
export const roles = [
  {
    title: "Senior Full-Stack Engineer",
    location: "Kigali · hybrid",
    type: "Full-time",
    body: "Own websites and systems end to end — design through deployment — for clients whose business depends on what you ship.",
  },
  {
    title: "Product & Brand Designer",
    location: "Kigali",
    type: "Full-time",
    body: "Design websites and identities at the standard of the world's best studios, for clients those studios overlook.",
  },
  {
    title: "Digital Marketing Lead",
    location: "Kigali · hybrid",
    type: "Full-time",
    body: "Run social, ads, and SEO for a portfolio of Rwandan businesses — and report the numbers that prove it worked.",
  },
  {
    title: "Cloud & Support Engineer",
    location: "Remote (CAT ±3)",
    type: "Full-time",
    body: "Keep client sites fast, backed up, and online — and be the human on the other end when something needs a person.",
  },
];

export const stack = [
  { name: "TypeScript", role: "Application language" },
  { name: "React", role: "Interface engineering" },
  { name: "Next.js", role: "Web platform" },
  { name: "Astro", role: "Content-first web" },
  { name: "WordPress", role: "Client-managed sites" },
  { name: "Node.js", role: "Services" },
  { name: "PostgreSQL", role: "System of record" },
  { name: "AWS", role: "Cloud infrastructure" },
  { name: "cPanel", role: "Managed hosting" },
  { name: "Meta & Google Ads", role: "Paid reach" },
  { name: "Figma", role: "Design & brand" },
  { name: "Analytics", role: "Measurement" },
];
