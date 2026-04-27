# vainagpt

A chat interface for talking to **Arturito** — tu pana. Your best Venezuelan-American friend, ride or die, gives advice on anything. *tu pana is here — ask me anything.*

Warm tropical Venezuela aesthetic — the country of memory, not the news. Sun-faded travel poster colours: deep tropical green, golden yellow, Caribbean teal, warm cream paper. Different feel from every other site in the network.

---

## Local dev setup

Requires Node 20+ and pnpm.

```bash
pnpm install
cp .env.local.example .env.local
# fill in keys, then:
pnpm dev
```

Open http://localhost:3000.

### Environment variables

```
ANTHROPIC_API_KEY=
NEXT_PUBLIC_STRIPE_BEER_LINK=
NEXT_PUBLIC_STRIPE_CASE_LINK=
```

Restart `pnpm dev` after editing `.env.local` — Next.js loads env at startup.

---

## Editing the personality

**To change how Arturito talks, open [`lib/systemPrompt.ts`](lib/systemPrompt.ts). This is the most important file in the project.** Voice, vocabulary, refusals, length defaults — all in one string.

> **NOTE FOR LAUNCH**: this system prompt was written with care but should be reviewed by a Venezuelan or Venezuelan-American before going live. Broad strokes are right; the specific rhythm of the Spanglish, the phrases that feel genuinely homey vs tourist-Venezuelan, and the cultural references that land — those need a native ear. The character is a draft. Make it yours.

Paywall phrasing, suggestions, and stamp microtype live in [`lib/constants.ts`](lib/constants.ts).

---

## Stripe Setup

Free tier is 3 questions. Two unlocks via Stripe Payment Links.

### Step 1 — Create a Stripe account

[stripe.com](https://stripe.com), verify email, default to test mode.

### Step 2 — Create two Payment Links

Stripe dashboard → **Payment Links** → **+ New**.

**Link 1 — Malta ($2):**
1. + Add a product → Create new product
2. Name: `Malta for Arturito`
3. Price: `$2.00 USD`, one-time
4. Redirect URL: `https://vainagpt.com?session=success&tier=beer`

**Link 2 — Case of Polar ($10):**
1. Repeat
2. Name: `Case of Polar for Arturito`
3. Price: `$10.00 USD`, one-time
4. Redirect URL: `https://vainagpt.com?session=success&tier=case`

### Step 3 — Set the Stripe statement descriptor

Stripe dashboard → **Settings** → **Public details** → **Statement descriptors**:
- **Statement descriptor**: `VAINAGPT` (5–22 chars)
- **Shortened**: `VAINAGPT` (5–10 chars)

Both for test and live mode separately.

### Step 4 — Add links to your environment

Both `.env.local` and Vercel Project → Settings → Environment Variables (Production + Development).

### Step 5 — Test mode → Live mode switchover

1. Test card: `4242 4242 4242 4242`, any future expiry, any CVC.
2. Confirm: redirect to `vainagpt.vercel.app?session=success&tier=beer`, URL cleans to `/`, confirmation appears in chat, prompt counter updates.
3. Switch Stripe to **Live mode**, recreate both links, update Vercel env vars, redeploy.

---

## Vercel deploy

1. Push to GitHub.
2. Vercel → **Add New → Project**, import the repo.
3. Framework preset: Next.js.
4. **Environment Variables** — `ANTHROPIC_API_KEY` and both `NEXT_PUBLIC_STRIPE_*` for Production, Preview, Development.
5. Deploy.

---

## Custom domain

1. **Vercel:** Project → Settings → Domains → add `vainagpt.com`.
2. **At the registrar (Namecheap example):**
   - Delete any parking-page records.
   - A record: Host `@`, Value `76.76.21.21`.
   - CNAME: Host `www`, Value `cname.vercel-dns.com`.
3. Wait 5–30 min for DNS + Vercel-issued SSL.

---

## Generating the favicon

```bash
node scripts/generate-images.mjs
```

Produces `app/icon.png` (512×512) and `app/apple-icon.png` (180×180) — 8-ray cream sun on a gold-to-red radial gradient disc, teal inner ring + gold outer ring.

The OG image (`public/og.png`, 1200×630) is created separately via Claude Design — see `MASTER_TEMPLATE.md` section 18.A.

---

## Design notes (this site's overrides)

- **Background**: deep tropical green `#0a1a0e` with sunburst (gold → red → teal radial), warm grain, fine diagonal cross-hatch at very low opacity (the spec-authorised fallback for the leaf pattern), and warm vignette. Caribbean sunset through palm leaves.
- **Wordmark**: Playfair Display, cream `#fdf6e3`, three-layer drop shadow (teal 2/2, gold 4/4, red 6/6) plus a soft amber glow. The flag, never stated. Gentle drift animation.
- **Tagline**: Lora italic, gold, between gradient rules (teal → gold → red → transparent).
- **Chat card**: warm cream `#fdf6e3` paper with subtle warm dot grain, slight `-0.3deg` tilt, amber border + amber glow.
- **Side stripes**: teal / gold / red thirds on the left, mirrored to red / gold / teal on the right. 8px wide each. Venezuelan flag, also never stated.
- **Avatar**: 8-ray cream sun on a gold-to-red radial gradient disc, teal inner ring + gold outer ring + soft gold glow.
- **Loading dots**: teal, gold, red — the flag palette.
- **Suggestion chips**: cream bg, alternating teal/gold/red borders, slight rotation per chip.
- **Beer button**: gold gradient, ink text. **Case button**: solid red, cream text.
- **Bottom stripe**: 6px tall, teal/gold/red thirds.
- **Footer**: green bg, gold headings, cream links with gold hover.

---

## Analytics

Two sources, both already wired up — no third-party analytics service.

- **Vercel Web Analytics** via `<Analytics />` from `@vercel/analytics/react` in `app/layout.tsx`. Free tier covers page views, unique visitors, top pages, referrers, countries, devices, and Web Vitals.
- **Stripe Dashboard** is the source of truth for everything paywall-related: button clicks that converted, successful payments by tier, refunds, disputes, conversion rate. Statement descriptor `VAINAGPT` makes charges identifiable.

What's *not* tracked (deliberately): paywall shown, share-card opens, share completions. Trade-off accepted.

---

## Protecting against API costs

Set a hard cap in the Anthropic console:
1. [console.anthropic.com](https://console.anthropic.com) → **Settings** → **Billing**
2. Monthly spend limit — suggested **$200** for launch.

In-app rate limit: 20 req/IP/min, in-memory, per-instance. For real traffic, upgrade to Upstash (V2 wishlist).

---

## Launch checklist

Before declaring the project done:

- [ ] **Native-ear voice review** — have a Venezuelan or Venezuelan-American review `lib/systemPrompt.ts` and `lib/constants.ts` (greeting, paywall phrases, suggestions). The Spanglish should feel homey, not performed.
- [ ] OG image and favicon generated (favicon: `node scripts/generate-images.mjs`; OG: see `MASTER_TEMPLATE.md` section 18.A — Claude Design)
- [ ] Stripe statement descriptor set to `VAINAGPT` in both test and live mode
- [ ] All env vars set on Vercel for Production
- [ ] Custom domain `vainagpt.com` resolving with valid SSL
- [ ] Tested: free 3 questions → paywall → Malta/case redirect → confirmation message
- [ ] Tested: Arturito stays in character on a formal-document prompt (e.g., "Write a complaint letter")
- [ ] Tested: Venezuela-political question handled with gravity, not as a punchline
- [ ] Tested: arepas vs empanadas — Arturito has OPINIONS

---

## V2 wishlist

- Upstash Redis rate limiting + session store (paid balances survive cold starts).
- Stripe Webhook prompt verification (closes the "anyone can call /api/session/create" loophole).
- Server-rendered share images via `@vercel/og`.
- Tropical leaf SVG pattern background (currently using the diagonal cross-hatch fallback per spec authorisation).
