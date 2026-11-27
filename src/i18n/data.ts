/**
 * Site data in the reader's language.
 *
 * English lives in src/data/site.ts and stays the source of truth for
 * structure, prices and ids. This file only overlays Kinyarwanda TEXT, matched
 * by slug / id / href — so a price can never differ between languages, and a
 * service added in English without a translation fails the build instead of
 * quietly showing English on a Kinyarwanda page.
 */
import type { Lang } from "./index";
import {
  site,
  nav,
  services,
  webPackages,
  testimonials,
  type NavItem,
  type Service,
  type WebPackage,
  type Testimonial,
} from "../data/site";

type ServiceRw = {
  name: string;
  tagline: string;
  summary: string;
  intro: string;
  includes: string[];
  /** For tiered services: the lede, and each tier's unit, note and features (names stay). */
  pricing?: { lede: string; tiers: { unit: string; note: string; features: string[] }[] };
};

const servicesRw: Record<string, ServiceRw> = {
  "website-design": {
    name: "Gukora imbuga za internet",
    tagline: "Ni ho babanza kukumenyera.",
    summary:
      "Imbuga zakozwe ku bwawe zifunguka mu kanya gato kuri internet y'i Kigali, zisomeka neza kuri telefone, kandi zihindura abazisura abakiriya.",
    intro:
      "Mbere y'uko hagira ukuhamagara, abanza kukureba kuri internet. Twubaka urubuga rugena icyo azatekereza — rushushanyijwe bushya ku bucuruzi bwawe, atari inyandikorugero, kandi rwihuta ku buryo nta muntu urureka rugifunguka.",
    includes: [
      "Igishushanyo cyihariye — atari inyandikorugero",
      "Rubanza kuri telefone, rufunguka mu kanya gato",
      "Ishingiro rya SEO ryubatswemo",
      "Ibikubiyemo wihindurira ubwawe, nta muhanga ukenewe",
      "Rwiteguye Ikinyarwanda, Icyongereza n'Igifaransa",
      "Isesengura n'ifishi yo kwakira ubutumwa bishyizweho",
    ],
  },
  "web-hosting": {
    name: "Hosting y'imbuga",
    tagline: "Byihuta, birinzwe, kandi bikurikiranwa koko.",
    summary:
      "Hosting ku bikorwa remezo dukurikirana ubwacu — hamwe na domeni yawe ya .rw, SSL, kubika kopi buri munsi, n'umuntu i Kigali wo guhamagara.",
    intro:
      "Hosting nyinshi ni ukwinjira gusa, maze ikibazo cyavuka ntihagire ukwitaho. Iyacu izana igenzura rihamagara umuntu nyawe, kopi tugerageza koko, n'ubufasha busubiza mu Kinyarwanda. Urubuga rwawe rukomeza gukora; nawe ugasinzira.",
    includes: [
      "Domeni ya .rw ku buntu mu mwaka wa mbere",
      "Icyemezo cya SSL na firewall birimo",
      "Kubika kopi buri munsi — zigeragezwa, atari ukuzibika gusa",
      "Imeri z'akazi ku izina rya domeni yawe",
      "Kugenzura ko urubuga rukora, n'imenyesha nyaryo",
      "Ubufasha bwo hafi, mu isaha imwe natwe",
    ],
    pricing: {
      lede: "Byishyurwa buri mwaka. Buri gahunda irimo domeni ya .rw ku buntu, SSL, no kubika kopi buri munsi.",
      tiers: [
        {
          unit: "RWF / umwaka",
          note: "Urubuga rumwe, ubucuruzi buto",
          features: [
            "Ububiko bwa SSD bwa 10 GB",
            "Domeni ya .rw ku buntu (umwaka wa mbere)",
            "Imeri 20",
            "SSL + kopi za buri munsi",
            "Ubufasha kuri imeri",
          ],
        },
        {
          unit: "RWF / umwaka",
          note: "Urubuga rukura, rusurwa na benshi",
          features: [
            "Ububiko bwa SSD bwa 50 GB",
            "Domeni + SSL ku buntu",
            "Imeri 100",
            "Aho kugerageza mbere yo gutangaza (staging)",
            "Ubufasha kuri telefone na WhatsApp",
          ],
        },
        {
          unit: "RWF / umwaka",
          note: "Iby'ingenzi cyane, utiriwe ubyitaho",
          features: [
            "Ububiko bwa SSD bwa 100 GB",
            "Kugenzura byihutirwa ko urubuga rukora",
            "Imeri 300",
            "Uburenganzira bwa SSH + raporo za buri cyumweru",
            "Umuntu wihariye ukwitaho",
          ],
        },
      ],
    },
  },
  "graphic-design": {
    name: "Ibishushanyo n'ibirango",
    tagline: "Ntawe uzakwitiranya n'undi.",
    summary:
      "Logo, isura y'ikigo, n'ibyo gucapa n'ibyo ku mbuga nkoranyambaga bituma ubucuruzi buto bugaragara nk'ubukomeye.",
    intro:
      "Logo yonyine si ikirango. Twubaka uburyo bwose — ikimenyetso, amabara, imyandikire, inyandikorugero — ku buryo ibyo usohoye byose bisa n'ibyavuye mu kigo kimwe cyizeye, yaba ikarita y'ubucuruzi cyangwa icyapa kinini.",
    includes: [
      "Logo mu bwoko bwose bwa dosiye uzakenera",
      "Uburyo bw'amabara n'imyandikire",
      "Amakarita y'ubucuruzi n'impapuro z'ikigo, byiteguye gucapwa",
      "Inyandikorugero z'imbuga nkoranyambaga wakongera gukoresha",
      "Uba nyiri dosiye zose 100%",
      "Abacapa bo hano twakorana, twabikemuye",
    ],
    pricing: {
      lede: "Logo n'isura y'ikigo byishyurwa ku mushinga. Ibishushanyo bihoraho byishyurwa buri kwezi.",
      tiers: [
        {
          unit: "RWF · uhereye kuri, rimwe gusa",
          note: "Ubucuruzi bushya bushaka isura yabwo",
          features: [
            "Ibitekerezo 4 bya logo byo guhitamo",
            "Guhindura inshuro zitagira umubare ku yo wahisemo",
            "Ubwoko bwose bwa dosiye + uburenganzira bwazo",
            "Igishushanyo cy'ikarita y'ubucuruzi",
            "Bitangwa mu minsi 3–5",
          ],
        },
        {
          unit: "RWF · uhereye kuri, rimwe gusa",
          note: "Ubucuruzi bushaka kugaragara nk'ubukomeye",
          features: [
            "Logo zuzuye + uburyo butandukanye bwazo",
            "Uburyo bw'amabara n'imyandikire",
            "Impapuro z'ikigo + inyandikorugero z'imbuga nkoranyambaga",
            "Igitabo cyanditse gisobanura ikirango",
            "Byose byiteguye gucapwa",
          ],
        },
        {
          unit: "RWF / ukwezi",
          note: "Ibyo gushyira ku mbuga, impapuro z'amamaza, ubukangurambaga",
          features: [
            "Umubare uzwi w'ibishushanyo buri kwezi",
            "Ibishushanyo n'inkuru by'imbuga nkoranyambaga",
            "Impapuro z'amamaza, ibyapa, poromosiyo",
            "Bitangwa mu masaha 48",
            "Bihuye n'ikirango cyawe",
          ],
        },
      ],
    },
  },
  "digital-marketing": {
    name: "Kwamamaza kuri internet",
    tagline: "Kumenyekana guhinduka inyungu.",
    summary:
      "Imbuga nkoranyambaga, amatangazo yishyurwa, na SEO — bicungwa buri kwezi kandi bipimwa ku mibare ifite agaciro koko kuri wowe.",
    intro:
      "Kuba kuri internet si kimwe no kuboneka. Ducunga imbuga nkoranyambaga zawe, dushyira amatangazo yawe, tunoza uko ugaragara mu bushakashatsi — hanyuma tugatanga raporo buri kwezi mu mibare yoroshye: abo wagezeho, abakugannye, n'icyo byatwaye.",
    includes: [
      "Gucunga imbuga nkoranyambaga n'ibizishyirwaho",
      "Ibishushanyo by'ibyo dushyiraho bikorerwa iwacu",
      "Ubukangurambaga bwa Meta na Google",
      "SEO — kugaragara mu bushakashatsi",
      "Raporo ya buri kwezi mu rurimi rworoshye",
      "Ubufasha kuri WhatsApp, mu isaha imwe natwe",
    ],
    pricing: {
      lede: "Byishyurwa buri kwezi. Amafaranga y'amatangazo ni ukwayo kandi buri gihe ni ayawe — ntituyongeraho inyungu.",
      tiers: [
        {
          unit: "RWF / ukwezi",
          note: "Kugaragara buri gihe no kumenyekana",
          features: [
            "Imbuga 1–2 zicungwa",
            "Ibintu 2–3 bishyirwaho buri cyumweru",
            "Ibishushanyo by'ibyo dushyiraho birimo",
            "Google Business + gutegura amatangazo",
            "Raporo y'ibyagezweho buri kwezi",
          ],
        },
        {
          unit: "RWF / ukwezi",
          note: "Guhindura abakubona abakugana",
          features: [
            "Imbuga 2–3 zicungwa",
            "Ibintu 4–5 buri cyumweru, ibishushanyo byihariye",
            "Amatangazo ya Meta + Google acungwa",
            "Gutegura iyamamaza kuri imeri",
            "Gukurikirana isesengura n'uko abantu bitabira",
          ],
        },
        {
          unit: "RWF / ukwezi",
          note: "Iterambere rikomeye ku mbuga nyinshi",
          features: [
            "Imbuga 3–4, gushyiraho buri munsi",
            "Gucunga byuzuye ubukangurambaga bwishyurwa",
            "Igerageza rya A/B + gukurikirana abaguze",
            "Guhuza na SEO",
            "Ubufasha bwihuse kuri WhatsApp",
          ],
        },
      ],
    },
  },
};

const packagesRw: Record<string, Pick<WebPackage, "blurb" | "delivery" | "features" | "cta">> = {
  basic: {
    blurb:
      "Kuboneka kuri internet mu buryo busukuye kandi bwihuta, ku bucuruzi bugiye kuri internet neza bwa mbere.",
    delivery: "Iminsi 3–5",
    features: [
      "Igishushanyo cy'urupapuro rumwe cyangwa urubuga rworoshye",
      "Igishushanyo gihuza n'ubwoko bwose bwa ecran",
      "Gutegura SEO y'ibanze ku mpapuro",
      "Ifishi yo kwakira ubutumwa",
      "Gufunguka vuba",
      "Guhuza na serivisi z'abandi",
      "Bitangwa mu minsi 3–5",
    ],
    cta: "Hitamo Basic",
  },
  business: {
    blurb: "Urubuga rwuzuye, rushushanyijwe ku bwawe, ku kigo cyiteguye guhatana kuri internet.",
    delivery: "Iminsi 5–7",
    features: [
      "Impapuro 5–7 zifite igishushanyo cyihariye",
      "Igishushanyo cy'umwuga cyihariye",
      "Rubanza kuri telefone, ruhuza n'ubwoko bwose bwa ecran",
      "SEO ku mpapuro no hanze yazo",
      "Kunoza umuvuduko",
      "Guhuza na Google Maps",
      "Gutegura Google Analytics",
      "Icyemezo cya SSL n'umutekano w'ibanze",
      "Bitangwa mu minsi 5–7",
    ],
    cta: "Hitamo Business",
  },
  ecommerce: {
    blurb:
      "Iduka ryuzuye kuri internet — urutonde rw'ibicuruzwa, agaseke, kwishyura, n'imikorere ibiri inyuma.",
    delivery: "Iminsi 7–10",
    features: [
      "Impapuro zitagira umubare zifite igishushanyo cyihariye",
      "Igishushanyo cya UI/UX cyihariye cyuzuye",
      "Urutonde rw'ibicuruzwa na sisitemu y'agaseke",
      "Gucunga ububiko n'ibyatumijwe by'ibanze",
      "Gutegura iyoherezwa ry'ibicuruzwa",
      "Guhuza n'uburyo bwo kwishyura",
      "SEO n'umutekano byo ku rwego rwo hejuru",
      "Guhindura inshuro zitagira umubare",
      "Bitangwa vuba (iminsi 7–10)",
    ],
    cta: "Hitamo E-commerce",
  },
};

const navRw: Record<string, string> = {
  "/": "Ahabanza",
  "/about": "Abo turi bo",
  "/services": "Serivisi",
  "/services/website-design": "Gukora imbuga za internet",
  "/services/web-hosting": "Hosting y'imbuga",
  "/services/graphic-design": "Ibishushanyo n'ibirango",
  "/services/digital-marketing": "Kwamamaza kuri internet",
  "/work": "Ibikorwa byacu",
  "/pricing": "Ibiciro",
  "/contact": "Twandikire",
};

const testimonialsRw: Record<string, { quote: string; role: string }> = {
  "Abikunda Macrine": {
    quote:
      "Abantu benshi cyane bamenye Ongera Ubeho babinyujije ku rubuga Inkingi yatwubakiye. Rwagize uruhare runini mu gutsinda kwacu — kandi twabigezeho tutiriwe dukora iyamamaza ryinshi.",
    role: "Umuyobozi Mukuru",
  },
  "Iragaba Eric": {
    quote:
      "Inkingi yashyize Kina Wige kuri Play Store vuba kurusha uko twabitekerezaga, kandi igishushanyo cyayo cyuzuye ubuzima — nk'uko apulikasiyo y'abana bato ikwiye kumera.",
    role: "Umuyobozi ushinzwe Imari",
  },
};

const siteTextRw = {
  city: "Kigali, u Rwanda",
  hours: "Kuwa Mbere–Kuwa Gatanu · 08:00–18:00 CAT",
};

/* ---- the build fails if anything in English has no Kinyarwanda ---- */
const need = (ok: boolean, what: string) => {
  if (!ok) throw new Error(`Kinyarwanda missing for ${what} (src/i18n/data.ts)`);
};
for (const s of services) {
  const r = servicesRw[s.slug];
  need(!!r, `service "${s.slug}"`);
  need(r.includes.length === s.includes.length, `service "${s.slug}" includes`);
  if (s.pricing !== "packages") {
    need(!!r.pricing && r.pricing.tiers.length === s.pricing.tiers.length, `service "${s.slug}" tiers`);
    s.pricing.tiers.forEach((tier, i) =>
      need(r.pricing!.tiers[i].features.length === tier.features.length, `service "${s.slug}" tier ${tier.name}`)
    );
  }
}
for (const p of webPackages) {
  need(!!packagesRw[p.id] && packagesRw[p.id].features.length === p.features.length, `package "${p.id}"`);
}
for (const n of nav) {
  need(n.href in navRw, `menu item "${n.href}"`);
  n.children?.forEach((c) => need(c.href in navRw, `menu item "${c.href}"`));
}
for (const q of testimonials) need(q.name in testimonialsRw, `testimonial from "${q.name}"`);

/* ---- localized views of the data ---- */
export function dataFor(lang: Lang) {
  if (lang === "en") {
    return {
      city: site.city,
      hours: site.hours,
      nav,
      services,
      webPackages,
      testimonials,
    };
  }
  const navOut: NavItem[] = nav.map((n) => ({
    ...n,
    label: navRw[n.href],
    children: n.children?.map((c) => ({ ...c, label: navRw[c.href] })),
  }));
  const servicesOut: Service[] = services.map((s) => {
    const r = servicesRw[s.slug];
    return {
      ...s,
      name: r.name,
      tagline: r.tagline,
      summary: r.summary,
      intro: r.intro,
      includes: r.includes,
      pricing:
        s.pricing === "packages"
          ? "packages"
          : {
              lede: r.pricing!.lede,
              tiers: s.pricing.tiers.map((tier, i) => ({
                ...tier, // name, price, featured stay as in English
                unit: r.pricing!.tiers[i].unit,
                note: r.pricing!.tiers[i].note,
                features: r.pricing!.tiers[i].features,
              })),
            },
    };
  });
  const packagesOut: WebPackage[] = webPackages.map((p) => ({ ...p, ...packagesRw[p.id] }));
  const testimonialsOut: Testimonial[] = testimonials.map((q) => ({
    ...q,
    quote: testimonialsRw[q.name].quote,
    role: testimonialsRw[q.name].role,
  }));
  return {
    city: siteTextRw.city,
    hours: siteTextRw.hours,
    nav: navOut,
    services: servicesOut,
    webPackages: packagesOut,
    testimonials: testimonialsOut,
  };
}
