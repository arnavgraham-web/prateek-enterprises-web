# Prateek Enterprises — website

Marketing site for Prateek Enterprises, an authorised Bharat Gas (BPCL) domestic and
commercial LPG distributor in OMBR Layout, Banaswadi, Bengaluru.

Vite + React 19 + TypeScript + Tailwind v4. No backend — the contact forms post to
Netlify Forms.

```bash
npm install
npm run dev      # http://localhost:5180
npm run build    # -> dist/
```

## Before this goes live

Two things are deliberately unfinished and marked in the code:

1. **Testimonials are placeholders.** `testimonials` in [`src/data/site.ts`](src/data/site.ts)
   contains dummy copy, not real reviews, and the section renders a visible amber warning
   banner. Replace them with genuine reviews from the business's Google listing (956 of
   them), then delete the banner in [`src/components/Testimonials.tsx`](src/components/Testimonials.tsx).

2. **The client list needs sign-off.** `clients` in `src/data/site.ts` was compiled from
   supply-request documents. Confirm each account is willing to be named publicly before
   launch, and trim the list as needed. The section renders whatever is in that array.

Other content worth reviewing: the `stats` numbers (years in business, account count) in
`src/data/site.ts` are estimates and should be corrected to the real figures.

## Content

All copy, contact details, services, FAQs and the client list live in
[`src/data/site.ts`](src/data/site.ts). Components only render what that file exports, so
routine content edits never require touching a component.

## Contact forms (Netlify)

Two forms post to Netlify Forms: `request-a-call` (hero) and `get-in-touch` (footer).

Because this is a single-page Vite app, Netlify cannot see React-rendered forms. Each form
is therefore declared a second time as a hidden static copy in [`index.html`](index.html),
which is what Netlify's build-time scanner registers. **If you add or rename a field in a
React form, make the same change in `index.html`** or Netlify will silently drop it.

Submissions land under **Forms** in the Netlify site dashboard. Add a notification email
there (Site configuration → Forms → Form notifications) so enquiries reach an inbox.

Running `npm run dev` has no Netlify backend, so the POST 404s. The handler treats that as
success in dev and logs the payload to the console instead — see `src/lib/netlify.ts`.

## Deploying

`netlify.toml` is committed with the build command, publish directory and the SPA redirect.
Connect the GitHub repo to a Netlify site and it will pick those up; no dashboard build
settings needed.

## Motion

Scroll reveals use a small IntersectionObserver hook (`src/hooks/useInView.ts`) that adds a
class; the animations themselves are CSS keyframes in `src/index.css`. Everything is
disabled under `prefers-reduced-motion: reduce`.

## Images

`public/images/` — re-encoded to JPEG and capped at 1920px (about 3.8 MB total). The
originals were ~24 MB of PNGs. Re-optimise any new artwork before committing it.
