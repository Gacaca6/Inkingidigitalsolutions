export const site = {
  name: "Inkingi Digital Solutions",
  short: "Inkingi",
  tagline: "Building what comes next.",
  url: "https://inkingi.rw",
  email: "hello@inkingi.rw",
  careersEmail: "careers@inkingi.rw",
  phone: "+250 788 421 706",
  city: "Kigali, Rwanda",
  hours: "Mon–Fri · 08:00–18:00 CAT",
};

export const nav = [
  { href: "/approach", label: "Approach" },
  { href: "/what-we-build", label: "What we build" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
];

/* ------------------------------------------------------------------
   WHAT WE BUILD — each capability is shown, not listed.
   `demo` selects the live visual that renders beside it.
------------------------------------------------------------------ */
export type Capability = {
  id: string;
  idx: string;
  kicker: string;
  title: string;
  body: string;
  proof: string;
  points: string[];
  demo: "site" | "dashboard" | "automation" | "cloud" | "ai";
};

export const capabilities: Capability[] = [
  {
    id: "digital-presence",
    idx: "01",
    kicker: "Websites & digital presence",
    title: "The first thing they judge you on.",
    body: "Before a customer calls, they look you up. We build sites that load in under a second on a Kigali 3G connection, read beautifully on a phone, and tell your story without a single stock photograph.",
    proof: "Typical build: 3–6 weeks",
    points: [
      "Performance budgets, enforced",
      "Written and structured for search",
      "Kinyarwanda, English, French",
      "You edit it yourself, no developer needed",
    ],
    demo: "site",
  },
  {
    id: "business-software",
    idx: "02",
    kicker: "Business software",
    title: "Your operation, on one screen.",
    body: "Most businesses run on six spreadsheets and one person's memory. We replace that with a system that knows what happened, what is happening, and what needs a decision — for every role in the company.",
    proof: "Typical build: 10–20 weeks",
    points: [
      "Operations, inventory, and finance in one place",
      "Role-based access your auditor will accept",
      "Reports that generate themselves",
      "Built to survive the person who built it leaving",
    ],
    demo: "dashboard",
  },
  {
    id: "automation",
    idx: "03",
    kicker: "Automation",
    title: "The work nobody should be doing.",
    body: "Re-keying invoices. Chasing approvals. Assembling the Monday report. We map the process, engineer the parts that need no judgment, and hand your team back the hours.",
    proof: "Most automations pay for themselves inside 90 days",
    points: [
      "Process mapping before any code",
      "Systems that already exist, connected",
      "Humans kept in the loop where judgment matters",
      "Measured against the hours it actually saved",
    ],
    demo: "automation",
  },
  {
    id: "cloud",
    idx: "04",
    kicker: "Cloud & infrastructure",
    title: "Foundations that hold under load.",
    body: "Secure, observed, and cost-disciplined infrastructure. Deployments that take four minutes instead of a weekend. Backups that have actually been restored from, because we test them.",
    proof: "Deployment in minutes, not weekends",
    points: [
      "Architecture, migration, and hardening",
      "Continuous delivery pipelines",
      "Monitoring that pages a human, not a void",
      "Restore drills, quarterly",
    ],
    demo: "cloud",
  },
  {
    id: "ai",
    idx: "05",
    kicker: "Applied AI",
    title: "Intelligence, pointed at something.",
    body: "Not a chatbot on your homepage. AI where it changes a number in your ledger: reading documents nobody has time to read, forecasting demand, answering the same customer question for the four hundredth time.",
    proof: "Deployed only where it beats the status quo",
    points: [
      "Document and form intelligence",
      "Customer service copilots, on your data",
      "Demand and yield forecasting",
      "An honest readiness assessment first",
    ],
    demo: "ai",
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
    id: "freight",
    sector: "Cross-border logistics",
    scale: "48 trucks · 3 countries",
    title: "A freight operator that could not answer where its trucks were",
    challenge:
      "Dispatch ran on phone calls and carbon-copy manifests. Between checkpoints, a truck's position was a guess. Month-end reconciliation consumed a full working week and still disagreed with the drivers' logbooks.",
    solution:
      "One operations platform: digital manifests signed on the driver's phone, GPS positions on a live board, and billing generated from the same records the drivers create. Built to work offline and sync when signal returns — because the Gatuna road does not have coverage.",
    outcome:
      "Dispatch answers customer questions in seconds. Reconciliation closes the same afternoon. The finance lead stopped working Saturdays.",
    metrics: [
      { value: "68%", label: "faster dispatch turnaround" },
      { value: "4.5 days", label: "returned to finance each month" },
      { value: "RWF 31M", label: "annual leakage recovered" },
    ],
    quote:
      "They did not sell us software. They rebuilt how the company moves.",
    attribution: "Operations Director · cross-border logistics group",
  },
  {
    id: "sacco",
    sector: "Financial services",
    scale: "41,800 members · 12 branches",
    title: "A SACCO network where a balance check meant a two-hour queue",
    challenge:
      "Member records lived in branch ledgers and unlinked spreadsheets. Loan decisions took nine days because three people had to physically sign the same folder. Members queued at the branch to ask a question their phone could answer.",
    solution:
      "A secure core platform with a USSD and mobile front door, automated loan scoring against the SACCO's own rules, and board reporting that builds itself nightly. Regulator-grade audit trails from day one.",
    outcome:
      "Members self-serve. Loan officers review instead of transcribe. The board sees the position on the first of the month rather than the fifteenth.",
    metrics: [
      { value: "41,800", label: "members migrated without data loss" },
      { value: "9 days → 38 hrs", label: "median loan decision" },
      { value: "72%", label: "of balance checks now self-served" },
    ],
    quote:
      "Our members trust the technology now, because the technology earned it.",
    attribution: "Chief Executive · regional SACCO network",
  },
  {
    id: "agri",
    sector: "Agriculture",
    scale: "12,400 smallholders",
    title: "A cooperative negotiating harvest prices on intuition",
    challenge:
      "Volume estimates came from memory and optimism. Buyers over-ordered or under-ordered, and either way the farmer absorbed the loss. Post-harvest waste was accepted as weather.",
    solution:
      "A forecasting system combining field agent reports, satellite weather, and eight seasons of the cooperative's own yield history — delivered as a number a chairwoman can take into a negotiation, not a dashboard nobody opens.",
    outcome:
      "The cooperative commits to volumes it can meet, prices from a position of evidence, and plans drying capacity before the harvest rather than during it.",
    metrics: [
      { value: "31%", label: "reduction in post-harvest loss" },
      { value: "±7%", label: "forecast accuracy at 30 days" },
      { value: "+24%", label: "average farmer income" },
    ],
    quote:
      "For the first time the data works for the farmer, not against her.",
    attribution: "Chairwoman · coffee & maize cooperative",
  },
];

/* ------------------------------------------------------------------
   PROCESS
------------------------------------------------------------------ */
export const journey = [
  {
    idx: "01",
    title: "Discover",
    lead: "We learn your operation before we propose anything.",
    body: "Two weeks inside the business — sitting with dispatch, watching the month-end close, reading the spreadsheet everyone depends on. We surface where value leaks, not where software would be fun to build.",
    output: "A written diagnosis you keep, whoever you build with.",
  },
  {
    idx: "02",
    title: "Design",
    lead: "Interfaces and systems drawn together, tested with real users.",
    body: "Your people sit with clickable prototypes before a line of production code exists. Changing a screen at this stage costs an afternoon. Changing it after launch costs a month.",
    output: "Signed-off prototypes and a system architecture.",
  },
  {
    idx: "03",
    title: "Engineer",
    lead: "Disciplined builds, demonstrated every Friday.",
    body: "Working software in your hands weekly — not status reports. Code reviewed by a second engineer, tested automatically, and documented so your future team is not hostage to ours.",
    output: "Production code, tests, and documentation you own.",
  },
  {
    idx: "04",
    title: "Launch",
    lead: "Migration, training, and monitoring — engineered, not hoped for.",
    body: "Data migrates in rehearsed runs. Your staff train on the real system with their real records. We watch the first weeks closely and stay reachable while habits form.",
    output: "A live system and a team that knows how to use it.",
  },
  {
    idx: "05",
    title: "Grow",
    lead: "The foundation is maintained, measured, and extended.",
    body: "Quarterly reviews against the numbers we agreed at Discover. Security patched, costs watched, capacity planned. Most of our work is with clients we launched years ago.",
    output: "A partnership measured in years, not invoices.",
  },
];

/* ------------------------------------------------------------------
   PRICING — transparent, RWF
------------------------------------------------------------------ */
export type Tier = {
  id: string;
  name: string;
  price: string;
  unit: string;
  summary: string;
  timeline: string;
  ideal: string;
  includes: string[];
  featured?: boolean;
  cta: string;
};

export const tiers: Tier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "780,000",
    unit: "RWF · from",
    summary:
      "A fast, credible digital presence for a business that currently has none — or one it is embarrassed by.",
    timeline: "3–4 weeks",
    ideal: "Established SMEs, professional practices, hospitality",
    includes: [
      "Up to 6 pages, designed not templated",
      "Mobile-first, sub-second load",
      "Content management you control",
      "Search and analytics configured",
      "Two rounds of revisions",
      "30 days post-launch support",
    ],
    cta: "Start here",
  },
  {
    id: "business",
    name: "Business",
    price: "2,650,000",
    unit: "RWF · from",
    summary:
      "Your first real system: the operation moved off spreadsheets and onto software your team logs into every morning.",
    timeline: "8–12 weeks",
    ideal: "Growing companies of 10–80 staff running on manual process",
    includes: [
      "Everything in Starter",
      "Custom platform for one core workflow",
      "User roles and permissions",
      "Automated reporting",
      "Third-party and payment integration",
      "Staff training, delivered on site",
      "90 days post-launch support",
    ],
    featured: true,
    cta: "Most chosen",
  },
  {
    id: "professional",
    name: "Professional",
    price: "7,400,000",
    unit: "RWF · from",
    summary:
      "A platform spanning several departments, with the automation, mobile access, and intelligence layered on top.",
    timeline: "16–24 weeks",
    ideal: "Multi-branch operators, SACCOs, distributors, healthcare groups",
    includes: [
      "Everything in Business",
      "Multi-department platform",
      "Native mobile application",
      "Workflow automation across systems",
      "Applied AI where it earns its place",
      "Cloud architecture and CI/CD",
      "12 months of partnership support",
    ],
    cta: "Scale up",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Bespoke",
    unit: "scoped after discovery",
    summary:
      "Institution-grade systems: integration across a large estate, data platforms, and governance your regulator will sign off.",
    timeline: "Scoped at Discover",
    ideal: "Banks, government bodies, regional groups, large NGOs",
    includes: [
      "Everything in Professional",
      "Enterprise systems integration",
      "Data platform and business intelligence",
      "Security review and compliance evidence",
      "Dedicated engineering team",
      "Service level agreement",
      "Named technical partner",
    ],
    cta: "Talk to us",
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
    body: "People at the heart of everything. The test of a system is whether the person using it at 4pm on a Friday finds it obvious.",
  },
  {
    n: "04",
    title: "Engineering-first",
    body: "Clean. Scalable. Built to last. Reviewed code, real tests, written documentation — the unglamorous work that decides whether a system survives.",
  },
  {
    n: "05",
    title: "African & global",
    body: "Rooted in Africa. Built for the world. We design for intermittent signal, mobile money, and multilingual teams — and hold the same quality bar as anyone in London or San Francisco.",
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
      "The question underneath it is usually: how do we stop losing customers to businesses that look more organised than us? Those need different answers, and only one of them starts with a website.",
  },
  {
    id: "ai-in-the-ledger",
    date: "2026-06-19",
    dateLabel: "19 June 2026",
    category: "Applied AI",
    read: "9 min",
    title: "AI in African business: past the hype, into the ledger",
    excerpt:
      "Where AI is producing returns for East African operators today — document processing, demand forecasting, first-line support — and three places we have advised clients not to use it.",
  },
  {
    id: "ninety-day-test",
    date: "2026-05-27",
    dateLabel: "27 May 2026",
    category: "Automation",
    read: "5 min",
    title: "The 90-day automation payback test",
    excerpt:
      "If an automation cannot pay for itself within a quarter, we usually advise against building it. The arithmetic that keeps a client's automation portfolio honest.",
  },
  {
    id: "offline-first",
    date: "2026-04-30",
    dateLabel: "30 April 2026",
    category: "Engineering",
    read: "8 min",
    title: "Designing for the road to Gatuna",
    excerpt:
      "Software built in cities with perfect connectivity fails quietly in the field. What we changed after watching a driver lose a signed manifest to a dropped connection.",
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
    body: "Own systems end to end — schema through interface — for clients whose payroll depends on what you ship.",
  },
  {
    title: "Product Designer",
    location: "Kigali",
    type: "Full-time",
    body: "Design at the standard of the world's best product companies, for users those companies have never designed for.",
  },
  {
    title: "AI Engineer",
    location: "Kigali · remote (CAT ±3)",
    type: "Full-time",
    body: "Apply language models and classical ML to document intelligence, forecasting, and decision support on real operational data.",
  },
  {
    title: "Cloud & Reliability Engineer",
    location: "Remote (CAT ±3)",
    type: "Full-time",
    body: "Build the pipelines, observability, and restore drills that let a small team run systems people depend on.",
  },
];

export const stack = [
  { name: "TypeScript", role: "Application language" },
  { name: "React", role: "Interface engineering" },
  { name: "Next.js", role: "Web platform" },
  { name: "Astro", role: "Content-first web" },
  { name: "Node.js", role: "Services" },
  { name: "Python", role: "Data & machine learning" },
  { name: "PostgreSQL", role: "System of record" },
  { name: "Supabase", role: "Application backend" },
  { name: "Docker", role: "Reproducible deploys" },
  { name: "AWS", role: "Cloud infrastructure" },
  { name: "Terraform", role: "Infrastructure as code" },
  { name: "Flutter", role: "Mobile applications" },
];
