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

   Five entries carry a real logo (`public/images/clients/`). The other seven render as
   wordmark tiles and each has a `logoNote` in the data explaining why no logo was
   sourced — mostly local businesses with no web presence. Three notes need your input:

   - **Fidelity** — two separate companies trade under that name (Fidelity Investments
     and Fidelity International) and both have Bengaluru offices. Which is the client?
   - **Chanakya** — no Bengaluru business confirmed; needs a locality to identify.
   - **Hot Smoke Deli** — no listing anywhere; the trade name may be recorded differently.

   For the rest, asking the clients for their logo files directly will be faster than
   more searching. Drop a file into `public/images/clients/` and add a `logo:` path to
   that entry; the tile switches from wordmark to logo automatically.

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

### Where submissions actually go

Netlify stores them. There is no database and no file in this repo — submissions live in
the Netlify dashboard under **Forms**, attached to whichever site the repo is deployed to.

Two things to know before launch:

- **Netlify sends no email by default.** Enquiries accumulate in a dashboard nobody opens
  unless you turn notifications on: Site configuration → Forms → Form notifications → Add
  notification → Email notification, one per form (`request-a-call`, `get-in-touch`).
- **The free tier caps at 100 submissions/month.** Past that Netlify rejects submissions
  rather than queueing them.

### WhatsApp

Set `business.whatsapp` in [`src/data/site.ts`](src/data/site.ts) to the team's **mobile**
number in international format, digits only (e.g. `919876543210`). The listed landline
cannot receive WhatsApp, so it cannot be reused.

Until that field is filled in, every WhatsApp affordance — the button in the enquiry form,
the one in the FAQ "Need more help?" card, and the floating action button — is hidden
rather than rendering a dead link. Fill it in and all three appear.

The enquiry-form button composes a message from whatever the visitor has typed, skipping
blank fields, and opens WhatsApp in a new tab. It does not submit to Netlify, so a visitor
who uses WhatsApp will not appear in the dashboard — that is intentional, since the
conversation itself becomes the record.

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
