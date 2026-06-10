# MoggingLabs — mogginglabs.org

Marketing site for MoggingLabs, an AI implementation studio installing custom AI agents for US marketing and lead-generation teams doing $50k+/month.

Light, editorial, anti-AI-slop design: cream/ink/persimmon palette, Fraunces display serif, Geist Sans/Mono, hairline borders. Conversion funnel: free AI audit → Typeform qualification → booking.

## Stack

- **Next.js 16** (App Router, Turbopack) + TypeScript
- **Tailwind CSS v4** — design tokens in `src/app/globals.css` `@theme`
- **Motion** (Framer Motion v12) — scroll reveals, counters, accordion, magnetic CTA
- **React Three Fiber + drei** — "The New Hire" 3D hero (desktop-only, lazy, reduced-motion safe)
- **@typeform/embed-react** — audit application (popup + lazy inline widget)
- **Vercel Analytics + Speed Insights**

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (all routes static)
```

## Content

All copy, metrics, agents, FAQ, process steps, and niche-lander segments live in typed objects under `src/content/`. Sections are dumb renderers.

**Before launch**, fill every placeholder:

```bash
grep -rn "TODO_FOUNDER" src/
```

Key placeholders: real proof metrics, founder letter + signature, the Typeform form ID in `src/lib/constants.ts`, contact email.

## Routes

| Route | Purpose |
|---|---|
| `/` | Full narrative + conversion |
| `/apply` | Full-page audit application (cold-email deep-link target) |
| `/for/[segment]` | Niche landers (`roofing-lead-gen`, `ppc-agencies`) — add segments in `src/content/segments.ts` |
| `/privacy` | Compliance for ads / cold outreach |

UTM params (`utm_source`, `utm_medium`, `utm_campaign`, `segment`) are forwarded to Typeform hidden fields for attribution.

## Deploy

Vercel. `mogginglabs.org` to be registered and attached in Vercel project settings.
