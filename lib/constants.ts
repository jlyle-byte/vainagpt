// vainagpt palette — Venezuelan flag colours, blue-dominant.
// Page bg sampled from og.png corners (#061009 — very dark green-black);
// the three flag accents are the official Pantone-derived values:
//   Yellow #FCE300 · Blue #003DA5 · Red #EF3340
// Blue is the dominant accent — anchors the sunburst, mid-stripe of the
// chat card edges, the wordmark drop-shadow centre, and the middle
// loading dot.
export const PALETTE = {
  bgDark: "#061009",       // very dark green-black, page bg (sampled from og.png)
  primary: "#FCE300",      // FLAG YELLOW — vivid, lead accent
  primaryDeep: "#cab500",  // darker yellow for hovers + button borders
  secondary: "#EF3340",    // FLAG RED — accents, send button, paywall case
  secondaryDeep: "#b8242c",
  accent: "#003DA5",       // FLAG BLUE — dominant: sunburst, stripe middle
  accentDeep: "#002b75",
  cream: "#fdf6e3",        // warm cream — wordmark, body text on dark bg
  ink: "#1a120a",          // dark ink for body text on cream paper
  // Legacy aliases so master-template-derived components don't all need rename.
  red: "#EF3340",
  redDark: "#b8242c",
  gold: "#FCE300",
  goldDeep: "#cab500",
  green: "#003DA5",        // flag blue stands in for the master-template "green" slot
  greenDark: "#002b75",
  black: "#1a120a",
  creamDeep: "#f0e6c5",
};

export const PAYWALL = {
  freeMessages: 3,
  messagesPerBeer: 30,
  messagesPerCase: 200,
  priceBeer: "$2",
  priceCase: "$10",
};

export const STRIPE = {
  beerLink: process.env.NEXT_PUBLIC_STRIPE_BEER_LINK ?? "#",
  caseLink: process.env.NEXT_PUBLIC_STRIPE_CASE_LINK ?? "#",
};

export const SUGGESTIONS = [
  "My family keeps asking when I'm getting married",
  "Help me write a text to cancel plans without guilt",
  "What's better — arepas or empanadas?",
];

export const PAYWALL_PHRASES = [
  "Na guará chamo, you've been asking a LOT of questions! Me tiene exhausted — but in a good way, I love it. Mira, buy Arturito a Malta and we keep going. Es only $2 chamo, same price as a cold Malta from the bodega on the corner. You know how good that hits. Worth it, te lo juro.",
  "Coño chamo, my brain está full now after all that. Buy Arturito a Malta and we crack on — the cold one fixes everything pana, you know how it is.",
  "Mira pana, I'd talk for free pero mi abuela siempre said never trust a man con la garganta seca to give you good advice. So — Malta? $2? Vamos.",
  "Chamo three free questions is generous, I think you'll agree. After that, una Malta gets us thirty more — that's like 6 cents per question, qué ganga.",
  "Te lo digo con amor pana — Arturito está thirsty. Buy me a Malta and you've got my whole afternoon. We figure anything out together, lo prometo.",
  "Na guará, mi cerebro is fried from these questions chamo. Una Malta cold from the bodega and we're back, te lo juro.",
  "Mira chamo, en Venezuela we paid the elders in pabellón. You're getting off easy with $2 for a Malta, just saying.",
  "Coño pana, you ask better questions than my cousin Eduardo and that man has a PhD. But even he charges for his time. Una Malta y seguimos.",
  "Look chamo, está full late and I need refreshment. Send Arturito a Malta and we keep this conversation going pana — there's nowhere else I'd rather be.",
  "Te confieso chamo, mi voice is going. La Malta brings it back. $2 for thirty more questions — that's full value, I promise you.",
  "Mira mira mira — I love this conversation. Pero my throat está dry. Una Malta fría and we figure out anything you want chamo.",
  "Chamo en mi casa, when la familia visits, you bring Malta. Es just how it is. Bring Arturito Malta and we're family — vamos.",
  "Na guará pana, you've been working me harder than the kitchen at La Casa de los Tequeños on a Sunday. Una Malta and I'm back chamo.",
  "Look, I'd keep going — pero I made a promise to mi abuela never to give advice on an empty estómago. Malta fixes that real quick chamo.",
  "Te lo juro chamo, I love hearing what's on tu mente. But Arturito necesita combustible. Una Malta? Thirty more rounds? Hagamoslo.",
  "Pana you've kept Arturito busier than my tía at a quinceañera. That's a compliment! But my throat's gone — Malta please.",
  "Mira chamo, en la diáspora we sort each other out. You sort the Malta, I sort the answers. That's the deal de toda la vida.",
  "Coño, I'd argue arepas vs empanadas with you all night — pero my voice gave out two questions ago. Malta? $2? Listo.",
  "Look pana, three questions free is fair. After that even mi abuelo would say I've earned a Malta. Y si mi abuelo lo dice, va.",
  "Chamo we've been at it. Vamos — Malta, $2, thirty more questions. We figure tu vaina out together, te lo prometo.",
];

export const PAYWALL_MESSAGE = PAYWALL_PHRASES[0];


export const DISCLAIMER_LINE =
  "Arturito is an AI — tu pana, but not a professional. Always consult a real expert for medical, legal, or financial decisions, chamo.";

export const STAMPS = {
  left: "★ VENEZUELA · LA DIÁSPORA · EL MUNDO ★",
  right: "QUÉ ES LA VAINA",
  label: "Pana Records · Desde Siempre",
  footerText: "pa' divertirse chamo, pero el consejo es real",
};

export const CHARACTER_NAME = "Arturito";
export const CHARACTER_TAGLINE = "tu pana, tu consejo, tu vaina.";
export const DOMAIN = "vainagpt.com";

export const CASE_SESSION_WARNING =
  "⚠ Case lasts one session chamo — get your money's worth, vamos!";
