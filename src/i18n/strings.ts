/**
 * Every interface string on the translated pages, English and Kinyarwanda
 * side by side — so a reviewer can read the whole Kinyarwanda site in one file.
 *
 * The Kinyarwanda is written for Rwandan business owners, not translated word
 * for word. Plan and package names (Starter, Business, …), "hosting", "SSL",
 * "WhatsApp" and "AI" stay in English, as they are commonly used in business.
 *
 * Strings may contain <span class="accent"> markup where the design
 * highlights a word; those are rendered with set:html.
 *
 * If the Kinyarwanda object is missing any key the English one has, the build
 * fails (see the check at the bottom) — so the two can never silently drift.
 */
import type { Lang } from "./index";

const A = (w: string) => `<span class="accent">${w}</span>`;

const en = {
  base: {
    skip: "Skip to content",
    ld: "Digital studio in Kigali, Rwanda. Website design, web hosting, graphic design and digital marketing.",
    homeTitleSuffix: "Building what comes next.",
    homeDescription:
      "Inkingi Digital Solutions is a Kigali studio building websites, hosting, branding, and digital marketing for Rwandan businesses. Clear prices, real proof, one team.",
  },
  header: {
    homeAria: "Inkingi Digital Solutions — home",
    allServices: "All services & pricing",
    themeToggle: "Switch colour theme",
    getQuote: "Get a quote",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    primaryNav: "Primary",
    mobileNav: "Mobile",
    langLabel: "Language",
  },
  footer: {
    statement: `Building<br />what comes<br />${A("next.")}`,
    about:
      "Inkingi Digital Solutions is a technology partner in Kigali, Rwanda, engineering the digital foundations that African businesses run on.",
    emailLabel: "Email address",
    subscribe: "Get the letter",
    invalid: "Enter a valid email address.",
    note: "One letter a month on building software in African markets. Unsubscribe in a click.",
    failBefore: "That did not go through. Email",
    failAfter: "and we will add you.",
    done: "You are on the list. The next letter goes out at month end.",
    services: "Services",
    pricing: "Pricing",
    company: "Company",
    about_: "About",
    insights: "Insights",
    contact: "Contact",
    reach: "Reach us",
    concept:
      "Three connected elements forming a strong foundation for growth, innovation and the future. Simple. Solid. Forward.",
    rights: "Ltd. All rights reserved.",
    engineered: "Engineered in Kigali",
  },
  cta: {
    eyebrow: "Next step",
    title: `Let's build your digital ${A("foundation.")}`,
    body: "One conversation is enough to know whether we are the right partner. No deck, no pressure — a straight look at what your business actually needs, and what it would take.",
    book: "Book a strategy session",
    cost: "See what it costs",
    fine: "30 minutes · no obligation · you leave with a clear plan either way",
  },
  hero: {
    tag: "Kigali, Rwanda · est. 2024",
    l1: "Websites that",
    l2: "win you",
    l3: "customers.",
    lead: "A Kigali studio building the websites, hosting, branding, and marketing that Rwandan businesses need to be found, trusted, and chosen online.",
    quote: "Get a free quote",
    services: "See our services",
    dim: "FOUNDATION",
  },
  wwd: {
    tag: "What we do",
    h2: `Everything a Rwandan business needs to ${A("win online")} — in one place.`,
    lead: "Four services, one team. Be found, look the part, and turn attention into customers. Pick one, or let us handle the lot.",
    explore: "Explore & pricing",
  },
  belief: {
    tag: "Why foundations",
    lines: [
      "<b>Inkingi</b> is Kinyarwanda for",
      "<em>pillar</em>. A pillar is not",
      "decoration. It is the thing",
      "everything else rests on.",
    ],
    p1: "Most technology sold on this continent is disposable. A template rebranded as a platform. A project abandoned the week after launch. A vendor who stops answering once the invoice clears. The real cost is not the money — it is the three years a business spends operating on something that cannot carry it.",
    p2: "A digital foundation behaves differently. It automates the work that drains your people. It shows you the operation as it actually is, today, not at month end. And it holds weight when you double in size, because it was engineered to.",
    how: "How we work",
  },
  promise: {
    tag: "Why Inkingi",
    h2: `New studio.<br />${A("Serious")} standards.`,
    body: "We are just beginning — and that is exactly why we obsess over every project. Our name is on each one. Here is what you can count on.",
    points: [
      {
        t: "One team, start to finish",
        b: "Design, build, hosting, and marketing under one roof. No juggling three vendors who blame each other.",
      },
      {
        t: "Prices on the website",
        b: "Real starting figures, right here. You get a fixed quote before we start — no surprise invoices, ever.",
      },
      {
        t: "We host it and look after it",
        b: "We don't vanish at launch. Your site stays fast, secure, and backed up, with a human to call.",
      },
      {
        t: "Built here, to a world standard",
        b: "Made in Kigali, for mobile money and real connections — held to the bar of the best studios anywhere.",
      },
    ],
  },
  work: {
    tag: "Our work",
    h2: `Don't take our word.<br />${A("Click our work.")}`,
    body: "Real websites, platforms, and apps we've designed and built — every one a live link you can open right now. Start with this site itself, then see what we've made for others.",
    btn: "See our work",
  },
  testimonials: {
    tag: "What clients say",
    h2: `In their ${A("own words.")}`,
  },
  tiers: { popular: "Most popular", start: "Get started" },
  packs: {
    popular: "Most popular",
    name: (n: string) => `${n} Package`,
    setup: "One-time setup fee",
    month: "/month",
    note: "The monthly fee covers hosting, security updates, backups, and priority support. No lock-in — you can move on after the first year, and the site is yours. Prices exclude VAT.",
  },
  servicesPage: {
    title: "Services",
    description:
      "Website design, web hosting, graphic design, and digital marketing — everything a Rwandan business needs to be found, trusted, and chosen online.",
    label: "Services",
    h1: `Everything you need to ${A("be chosen")} online.`,
    lede: "Four services, one team, one standard. Be found, look the part, and turn attention into customers — all handled under one roof in Kigali.",
    view: "View & pricing",
    ctaEyebrow: "Not sure which you need?",
    ctaTitle: "Tell us the problem — we'll tell you the fix.",
    ctaBody:
      "Most businesses come to us for a website and leave with a plan that also sorts their hosting, brand, and how they get found. One conversation is enough to map it.",
  },
  servicePage: {
    label: "Service",
    start: "Start this service",
    pricingTag: "Pricing",
    h2Packages: "Website packages.",
    h2Simple: "Simple, honest pricing.",
    others: "Other services",
    aria: (n: string) => `${n} service`,
  },
  pricingPage: {
    title: "Pricing",
    description:
      "Transparent pricing in Rwandan francs for website design, web hosting, graphic design, and digital marketing. Real starting prices, no hidden costs.",
    label: "Pricing",
    h1: `What it costs, ${A("before")} you ask.`,
    lede: "Most firms in this market will not publish a number. We will. These are real starting points — the free strategy session turns one into a fixed quote.",
    webH2: "Website design packages",
    webSm: "Setup fee builds it. The small monthly keeps it fast, secure, and looked after.",
    faqTag: "Straight answers",
    faqH2: "No small print.",
    faqs: [
      {
        q: "Why publish prices at all?",
        a: "Because the alternative wastes your time and ours. If our starting point is beyond your budget this quarter, you should know that from a web page — not after three meetings.",
      },
      {
        q: "What does the monthly website fee actually cover?",
        a: "Hosting, your SSL certificate, security updates, daily backups, small content changes, and priority support when something needs a human. It is care, not a payment plan for the build.",
      },
      {
        q: "Can I pay the setup fee in instalments?",
        a: "Yes. Website builds run 40% to begin, 40% at design sign-off, and 20% on launch. We agree the schedule before any work starts.",
      },
      {
        q: "Do the prices include VAT?",
        a: "No — all prices shown exclude VAT. Your quote after the strategy session will show the VAT-inclusive total clearly.",
      },
      {
        q: "Is the strategy session really free?",
        a: "Yes. You leave it with a written brief whether or not you engage us. We would rather be the firm that gave you a useful hour than the one that invoiced for it.",
      },
    ],
    ctaEyebrow: "No obligation",
    ctaTitle: "Get a fixed quote for your project.",
    ctaBody:
      "Bring us the problem, not a specification. We'll tell you what it takes, what it costs, and what you shouldn't pay for.",
  },
  contact: {
    title: "Contact",
    description:
      "Talk to Inkingi Digital Solutions in Kigali — a free 30-minute strategy session, or estimate your project budget in Rwandan francs. Call, WhatsApp, or send us a message.",
    label: "Contact",
    h1: `One conversation. ${A("Zero")} obligation.`,
    lede: "Thirty minutes in which we look at your business and tell you honestly what to build, what to skip, and what it will cost. You leave with a clear plan either way.",
    estimateAttached: "Your estimate is attached",
    packageAttached: "Your chosen package is attached",
    remove: "Remove",
    nameLabel: "Your name",
    namePh: "Full name",
    nameErr: "Please tell us your name.",
    emailLabel: "Work email",
    emailErr: "That email address does not look right.",
    companyLabel: "Company",
    companyPh: "Organisation name",
    optional: "Optional",
    phoneLabel: "Phone",
    phoneHint: "Optional — for a callback instead",
    topic: "What is this about?",
    msgLabel: "The situation",
    msgPh: "A few sentences about the business and what keeps going wrong. Plain language is perfect — no need to describe a solution.",
    msgErr: "A sentence or two is enough to start.",
    send: "Request the session",
    sendQuote: "Request my quote",
    sending: "Sending…",
    fine: "We reply within one business day. Your details are never shared or sold.",
    errBefore: "Something went wrong sending your message. Please email us directly at",
    errOr: "or WhatsApp",
    received: "Received.",
    receivedBody:
      "We reply within one business day with a couple of times that suit us. If it is urgent, call or WhatsApp",
    steps: [
      "We confirm a time — 30 minutes, on a call or in Kigali.",
      "We talk about your business, not jargon.",
      "You leave with a clear plan and a fixed price.",
    ],
    bookTitle: "Book directly",
    bookBody: "Pick a 30-minute slot that suits you — no back-and-forth.",
    bookBtn: "Pick a time",
    direct: "Direct",
    emailAny: "email us anytime",
    callWa: "call or WhatsApp",
    call: "call us",
    studio: "Studio",
    ask: "What we will ask",
    asks: [
      "Where does work currently get stuck?",
      "What does someone re-key by hand every week?",
      "What question can nobody answer quickly?",
      "What would change if that were solved?",
    ],
    estTag: "Estimator",
    estH2: "A number, in two clicks.",
    estBody:
      "Directional, not a quote — but built from what our engagements actually cost. It will not be wildly off.",
    q1: "What are we building?",
    q2: "At what scale?",
    outMoney: "Indicative investment",
    outTime: "Indicative timeline",
    outTier: "Closest tier",
    estNote:
      "Assumes discovery has not yet happened. A fixed quote follows the strategy session, and it is the number we hold ourselves to.",
    estBtn: "Turn this into a quote",
    weeks: "weeks",
    tierWord: (t: string) => `${t} tier`,
    quotePrefix: "I'd like a quote for:",
    packageLine: (n: string) => `I'd like the ${n} package.`,
    packageSummary: (n: string, setup: string, monthly: string) =>
      `${n} package · ${setup} RWF setup + ${monthly} RWF/month`,
    subjectNote: "",
    kinds: {
      site: "Digital presence",
      platform: "Business platform",
      mobile: "Mobile application",
      automation: "Automation & integration",
      ai: "Applied AI",
      enterprise: "Enterprise system",
    },
    scales: {
      one: { label: "One workflow", hint: "Launch the core, prove it, extend later" },
      dept: { label: "One department", hint: "Complete feature set and integrations" },
      org: { label: "Whole organisation", hint: "Multiple roles, branches, reporting" },
    },
    interests: {
      custom: "Custom software",
      platform: "Business platform",
      automation: "Automation",
      ai: "Applied AI",
      cloud: "Cloud & infrastructure",
      mobile: "Mobile app",
      website: "Website",
      unsure: "Not sure yet",
    },
  },
};

type Strings = typeof en;

const rw: Strings = {
  base: {
    skip: "Jya ku bikubiyemo",
    ld: "Ikigo cy'ikoranabuhanga i Kigali, mu Rwanda. Gikora imbuga za internet, hosting, ibishushanyo n'ibirango, n'iyamamaza kuri internet.",
    homeTitleSuffix: "Twubaka ejo hazaza.",
    homeDescription:
      "Inkingi Digital Solutions ni ikigo cyo muri Kigali gikora imbuga za internet, hosting, ibirango n'iyamamaza kuri internet ku bucuruzi bwo mu Rwanda. Ibiciro bisobanutse, ibimenyetso nyabyo, itsinda rimwe.",
  },
  header: {
    homeAria: "Inkingi Digital Solutions — ahabanza",
    allServices: "Serivisi zose n'ibiciro",
    themeToggle: "Hindura amabara y'urubuga",
    getQuote: "Saba igiciro",
    openMenu: "Fungura menu",
    closeMenu: "Funga menu",
    primaryNav: "Menu nyamukuru",
    mobileNav: "Menu ya telefone",
    langLabel: "Ururimi",
  },
  footer: {
    statement: `Twubaka<br />ejo<br />${A("hazaza.")}`,
    about:
      "Inkingi Digital Solutions ni umufatanyabikorwa mu ikoranabuhanga ukorera i Kigali, mu Rwanda, wubaka imfatiro z'ikoranabuhanga ubucuruzi bwo muri Afurika bushingiraho.",
    emailLabel: "Aderesi ya imeri",
    subscribe: "Iyandikishe",
    invalid: "Andika imeri yemewe.",
    note: "Ibaruwa imwe buri kwezi yerekeye kubaka porogaramu ku masoko yo muri Afurika. Wivanaho igihe cyose, ukanze rimwe.",
    failBefore: "Ntibyakunze. Twandikire kuri",
    failAfter: "tuzakwandika ku rutonde.",
    done: "Wanditswe ku rutonde. Ibaruwa ikurikira izasohoka ku mpera z'ukwezi.",
    services: "Serivisi",
    pricing: "Ibiciro",
    company: "Ikigo",
    about_: "Abo turi bo",
    insights: "Inyandiko",
    contact: "Twandikire",
    reach: "Tuvugishe",
    concept:
      "Ibice bitatu bifatanye bigize urufatiro rukomeye rw'iterambere, udushya n'ejo hazaza. Byoroshye. Bikomeye. Bijya imbere.",
    rights: "Ltd. Uburenganzira bwose burabitswe.",
    engineered: "Byakorewe i Kigali",
  },
  cta: {
    eyebrow: "Intambwe ikurikira",
    // Kept short: "rw'ikoranabuhanga" at headline size cannot wrap on a phone.
    title: `Reka twubake ${A("urufatiro")} rwawe.`,
    body: "Ikiganiro kimwe kirahagije ngo umenye niba turi abafatanyabikorwa bakwiye. Nta mapaji menshi, nta gahato — tureba neza icyo ubucuruzi bwawe bukeneye koko, n'icyo bizasaba.",
    book: "Teganya inama y'ubujyanama",
    cost: "Reba ibiciro",
    fine: "Iminota 30 · nta gutegekwa · usohoka ufite gahunda isobanutse uko byagenda kose",
  },
  hero: {
    tag: "Kigali, u Rwanda · kuva 2024",
    l1: "Imbuga za internet",
    l2: "zikuzanira",
    l3: "abakiriya.",
    lead: "Ikigo cyo muri Kigali gikora imbuga za internet, hosting, ibirango n'iyamamaza ubucuruzi bwo mu Rwanda bukeneye kugira ngo bubonwe, bugirirwe icyizere, kandi buhitwemo kuri internet.",
    quote: "Saba igiciro ku buntu",
    services: "Reba serivisi zacu",
    dim: "URUFATIRO",
  },
  wwd: {
    tag: "Icyo dukora",
    h2: `Ibyo ubucuruzi bwo mu Rwanda bukeneye byose kugira ngo ${A("butsinde kuri internet")} — ahantu hamwe.`,
    lead: "Serivisi enye, itsinda rimwe. Bonwa, ugaragare neza, kandi abakureba ubahindure abakiriya. Hitamo imwe, cyangwa utureke tukwitaho byose.",
    explore: "Ibisobanuro n'ibiciro",
  },
  belief: {
    tag: "Impamvu y'urufatiro",
    lines: [
      "<b>Inkingi</b> si umutako.",
      "Ni yo <em>ifata</em> inzu;",
      "ibindi byose",
      "bishingiye kuri yo.",
    ],
    p1: "Ikoranabuhanga ryinshi rigurishwa kuri uyu mugabane ntirimara kabiri. Inyandikorugero ihawe izina rishya ikitwa porogaramu. Umushinga utereranwa icyumweru kimwe nyuma yo gutangizwa. Uwo mwakoranye utacyitaba amaze kwishyurwa. Igihombo nyacyo si amafaranga — ni imyaka itatu ubucuruzi bumara bukoresha ikintu kidashobora kubuheka.",
    p2: "Urufatiro rw'ikoranabuhanga rukora ukundi. Rukora ubwarwo imirimo inaniza abakozi bawe. Rukwereka uko ibikorwa byawe bihagaze uyu munsi, atari ku mpera z'ukwezi. Kandi rukomeza gukomera iyo ubucuruzi bwikubye kabiri, kuko ari ko rwubatswe.",
    how: "Uko dukora",
  },
  promise: {
    tag: "Kuki Inkingi",
    h2: `Ikigo gishya.<br />Ubuziranenge ${A("buhanitse")}.`,
    body: "Turacyatangira — kandi ni yo mpamvu twita cyane kuri buri mushinga. Izina ryacu riri kuri buri wose. Dore ibyo ushobora kutwizeraho.",
    points: [
      {
        t: "Itsinda rimwe, kuva utangiye kugeza urangije",
        b: "Igishushanyo, kubaka, hosting n'iyamamaza biri hamwe. Ntuzirirwa ukurikirana abantu batatu batana bamwana.",
      },
      {
        t: "Ibiciro biri ku rubuga",
        b: "Imibare nyayo y'aho bitangirira, iri hano. Uhabwa igiciro kidahinduka mbere y'uko dutangira — nta fagitire zigutunguye, na rimwe.",
      },
      {
        t: "Turabwakira kandi tukabwitaho",
        b: "Ntitubura iyo urubuga rumaze gutangizwa. Urubuga rwawe rukomeza kwihuta, rurinzwe kandi rubikirwa kopi, kandi ufite umuntu wo guhamagara.",
      },
      {
        t: "Byubakiwe hano, ku rwego mpuzamahanga",
        b: "Byakorewe i Kigali, bikorana na mobile money na internet uko imeze koko — bigereranywa n'ibigo byiza kurusha ibindi ku isi.",
      },
    ],
  },
  work: {
    tag: "Ibikorwa byacu",
    h2: `Ntutwizere ku magambo.<br />${A("Fungura ibyo twakoze.")}`,
    body: "Imbuga, porogaramu na apulikasiyo nyazo twashushanyije kandi tukubaka — buri kimwe ni ihuza rikora ushobora gufungura ubu. Tangirira kuri uru rubuga ubwarwo, hanyuma urebe ibyo twakoreye abandi.",
    btn: "Reba ibikorwa byacu",
  },
  testimonials: {
    tag: "Ibyo abakiriya bavuga",
    h2: `Mu ${A("magambo yabo.")}`,
  },
  tiers: { popular: "Ikunzwe cyane", start: "Tangira" },
  packs: {
    popular: "Ikunzwe cyane",
    name: (n: string) => `Ipaki ya ${n}`,
    setup: "Amafaranga yo gutangiza, rimwe gusa",
    month: "/ukwezi",
    note: "Amafaranga ya buri kwezi akubiyemo hosting, kuvugurura umutekano, kubika kopi, n'ubufasha bwihuse. Nta gufungirwa — ushobora kugenda nyuma y'umwaka wa mbere, kandi urubuga ni urwawe. Ibiciro ntibikubiyemo TVA.",
  },
  servicesPage: {
    title: "Serivisi",
    description:
      "Gukora imbuga za internet, hosting, ibishushanyo n'ibirango, n'iyamamaza kuri internet — ibyo ubucuruzi bwo mu Rwanda bukeneye byose kugira ngo bubonwe, bugirirwe icyizere kandi buhitwemo.",
    label: "Serivisi",
    h1: `Ibyo ukeneye byose kugira ngo ${A("uhitwemo")} kuri internet.`,
    lede: "Serivisi enye, itsinda rimwe, ubuziranenge bumwe. Bonwa, ugaragare neza, kandi abakureba ubahindure abakiriya — byose bikorerwa hamwe i Kigali.",
    view: "Reba n'ibiciro",
    ctaEyebrow: "Ntuzi neza icyo ukeneye?",
    ctaTitle: "Tubwire ikibazo — tukubwire igisubizo.",
    ctaBody:
      "Abenshi baza badusaba urubuga, bagasohoka bafite gahunda inakemura hosting, ikirango, n'uburyo babonwa. Ikiganiro kimwe kirahagije ngo tubishyire ku murongo.",
  },
  servicePage: {
    label: "Serivisi",
    start: "Tangira iyi serivisi",
    pricingTag: "Ibiciro",
    h2Packages: "Ipaki z'imbuga za internet.",
    h2Simple: "Ibiciro byoroshye kandi bisobanutse.",
    others: "Izindi serivisi",
    aria: (n: string) => `Serivisi: ${n}`,
  },
  pricingPage: {
    title: "Ibiciro",
    description:
      "Ibiciro bisobanutse mu mafaranga y'u Rwanda byo gukora imbuga, hosting, ibishushanyo n'ibirango, n'iyamamaza kuri internet. Ibiciro nyabyo by'aho bitangirira, nta kiguzi gihishe.",
    label: "Ibiciro",
    h1: `Icyo bisaba, ${A("mbere")} y'uko ubaza.`,
    lede: "Ibigo byinshi muri iri soko ntibitangaza imibare. Twe turabikora. Ibi ni ibiciro nyabyo by'aho bitangirira — inama y'ubujyanama y'ubuntu ibihindura igiciro kidahinduka.",
    webH2: "Ipaki zo gukora imbuga za internet",
    webSm: "Amafaranga yo gutangiza ni yo arwubaka. Make ya buri kwezi atuma rukomeza kwihuta, kurindwa no kwitabwaho.",
    faqTag: "Ibisubizo bitaziguye",
    faqH2: "Nta nyandiko ntoya zihishe.",
    faqs: [
      {
        q: "Kuki mutangaza ibiciro?",
        a: "Kubera ko ubundi buryo butakaza igihe cyawe n'icyacu. Niba aho dutangirira birenze ingengo y'imari yawe muri iki gihembwe, ukwiye kubimenya usomye urubuga — atari nyuma y'inama eshatu.",
      },
      {
        q: "Amafaranga y'urubuga ya buri kwezi akubiyemo iki koko?",
        a: "Hosting, icyemezo cya SSL, kuvugurura umutekano, kubika kopi buri munsi, impinduka nto ku bikubiyemo, n'ubufasha bwihuse igihe hari ibikeneye umuntu. Ni ukwita ku rubuga, si uburyo bwo kwishyura kurwubaka buhoro buhoro.",
      },
      {
        q: "Nshobora kwishyura amafaranga yo gutangiza mu byiciro?",
        a: "Yego. Kubaka urubuga byishyurwa 40% mbere yo gutangira, 40% iyo igishushanyo cyemejwe, na 20% iyo rutangijwe. Twumvikana kuri iyi gahunda mbere y'uko akazi gatangira.",
      },
      {
        q: "Ibiciro birimo TVA?",
        a: "Oya — ibiciro byose bigaragara ntibirimo TVA. Igiciro uzahabwa nyuma y'inama y'ubujyanama kizerekana neza igiteranyo kirimo TVA.",
      },
      {
        q: "Inama y'ubujyanama koko ni ubuntu?",
        a: "Yego. Uyisohokamo ufite inyandiko isobanura umushinga wawe, waba uduhaye akazi cyangwa utaduhaye. Twahitamo kuba ikigo cyaguhaye isaha y'ingirakamaro aho kuba icyayikwishyuje.",
      },
    ],
    ctaEyebrow: "Nta gutegekwa",
    ctaTitle: "Habwa igiciro kidahinduka cy'umushinga wawe.",
    ctaBody:
      "Uzane ikibazo, si urutonde rw'ibisabwa. Tuzakubwira icyo bisaba, ikiguzi cyabyo, n'ibyo udakwiye kwishyura.",
  },
  contact: {
    title: "Twandikire",
    description:
      "Vugana na Inkingi Digital Solutions i Kigali — inama y'ubujyanama y'iminota 30 ku buntu, cyangwa ugereranye ingengo y'imari y'umushinga wawe mu mafaranga y'u Rwanda. Hamagara, wandike kuri WhatsApp, cyangwa utwoherereze ubutumwa.",
    label: "Twandikire",
    h1: `Ikiganiro kimwe. ${A("Nta")} gutegekwa.`,
    lede: "Iminota mirongo itatu turebaho ubucuruzi bwawe tukakubwira mu kuri icyo wakubaka, icyo wareka, n'icyo bizagutwara. Usohoka ufite gahunda isobanutse uko byagenda kose.",
    estimateAttached: "Igereranya ryawe ryometseho",
    packageAttached: "Ipaki wahisemo yometseho",
    remove: "Kuraho",
    nameLabel: "Amazina yawe",
    namePh: "Amazina yose",
    nameErr: "Tubwire amazina yawe.",
    emailLabel: "Imeri y'akazi",
    emailErr: "Iyo aderesi ya imeri ntisa neza.",
    companyLabel: "Ikigo",
    companyPh: "Izina ry'ikigo",
    optional: "Si ngombwa",
    phoneLabel: "Telefone",
    phoneHint: "Si ngombwa — niba ushaka ko tuguhamagara",
    topic: "Bijyanye n'iki?",
    msgLabel: "Uko bihagaze",
    msgPh: "Interuro nkeya ku bucuruzi bwawe n'ibikomeza kugenda nabi. Ururimi rworoshye ni rwiza — ntukeneye gusobanura igisubizo.",
    msgErr: "Interuro imwe cyangwa ebyiri zirahagije ngo dutangire.",
    send: "Saba inama",
    sendQuote: "Saba igiciro cyanjye",
    sending: "Birimo koherezwa…",
    fine: "Dusubiza mu munsi umwe w'akazi. Amakuru yawe ntasangizwa abandi kandi ntagurishwa.",
    errBefore: "Habaye ikibazo mu kohereza ubutumwa bwawe. Twandikire kuri",
    errOr: "cyangwa kuri WhatsApp",
    received: "Twabyakiriye.",
    receivedBody:
      "Tugusubiza mu munsi umwe w'akazi tukakoherereza amasaha tuboneka. Niba byihutirwa, hamagara cyangwa wandike kuri WhatsApp",
    steps: [
      "Twemeza igihe — iminota 30, kuri telefone cyangwa i Kigali.",
      "Tuganira ku bucuruzi bwawe, si amagambo y'abahanga.",
      "Usohoka ufite gahunda isobanutse n'igiciro kidahinduka.",
    ],
    bookTitle: "Teganya ako kanya",
    bookBody: "Hitamo isaha y'iminota 30 ikubereye — nta kwandikirana kenshi.",
    bookBtn: "Hitamo igihe",
    direct: "Bitaziguye",
    emailAny: "twandikire igihe cyose",
    callWa: "hamagara cyangwa WhatsApp",
    call: "duhamagare",
    studio: "Aho dukorera",
    ask: "Ibyo tuzakubaza",
    asks: [
      "Ni he akazi gakunze guhagarara?",
      "Ni iki umuntu yongera kwandika n'intoki buri cyumweru?",
      "Ni ikihe kibazo nta muntu ushobora gusubiza vuba?",
      "Ni iki cyahinduka icyo kibazo gikemutse?",
    ],
    estTag: "Igereranya",
    estH2: "Umubare, mu gukanda kabiri.",
    estBody:
      "Ni icyerekezo, si igiciro nyacyo — ariko gishingiye ku byo imishinga yacu itwara koko. Ntikizajya kure y'ukuri.",
    q1: "Turubaka iki?",
    q2: "Ku rugero rungana iki?",
    outMoney: "Ishoramari riteganijwe",
    outTime: "Igihe giteganijwe",
    outTier: "Urwego rwegereye",
    estNote:
      "Bifata ko isesengura ritaraba. Igiciro kidahinduka gitangwa nyuma y'inama y'ubujyanama, kandi ni wo mubare twiyemeza kubahiriza.",
    estBtn: "Bihindure igiciro nyacyo",
    weeks: "ibyumweru",
    tierWord: (t: string) => `urwego rwa ${t}`,
    quotePrefix: "Ndifuza igiciro cya:",
    packageLine: (n: string) => `Ndifuza ipaki ya ${n}.`,
    packageSummary: (n: string, setup: string, monthly: string) =>
      `Ipaki ya ${n} · ${setup} RWF yo gutangiza + ${monthly} RWF/ukwezi`,
    subjectNote: " · Kinyarwanda",
    kinds: {
      site: "Kuboneka kuri internet",
      platform: "Porogaramu y'ubucuruzi",
      mobile: "Apulikasiyo ya telefone",
      automation: "Ikoranabuhanga ryikoresha no guhuza sisitemu",
      ai: "Ubwenge bw'ubukorano (AI)",
      enterprise: "Sisitemu y'ikigo kinini",
    },
    scales: {
      one: { label: "Umurimo umwe", hint: "Tangiza iby'ingenzi, ubigerageze, wagure nyuma" },
      dept: { label: "Ishami rimwe", hint: "Ibikorwa byose n'ihuzwa rya sisitemu" },
      org: { label: "Ikigo cyose", hint: "Inshingano nyinshi, amashami, raporo" },
    },
    interests: {
      custom: "Porogaramu yakozwe ku bwawe",
      platform: "Porogaramu y'ubucuruzi",
      automation: "Ikoranabuhanga ryikoresha",
      ai: "Ubwenge bw'ubukorano (AI)",
      cloud: "Cloud n'ibikorwa remezo",
      mobile: "Apulikasiyo ya telefone",
      website: "Urubuga rwa internet",
      unsure: "Sindabimenya neza",
    },
  },
};

/* ---- parity check: the build fails if any Kinyarwanda key is missing ---- */
function missing(a: unknown, b: unknown, path = ""): string[] {
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || b.length !== a.length) return [path || "(root)"];
    return a.flatMap((x, i) => missing(x, b[i], `${path}[${i}]`));
  }
  if (a && typeof a === "object") {
    const bb = (b ?? {}) as Record<string, unknown>;
    return Object.keys(a).flatMap((k) =>
      k in bb ? missing((a as Record<string, unknown>)[k], bb[k], path ? `${path}.${k}` : k) : [path ? `${path}.${k}` : k]
    );
  }
  return [];
}
const gaps = missing(en, rw);
if (gaps.length) throw new Error(`Kinyarwanda strings missing: ${gaps.join(", ")}`);

export const strings: Record<Lang, Strings> = { en, rw };
export const t = (lang: Lang): Strings => strings[lang];
