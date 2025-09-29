# MOTSISTAR Affiliate Starter (Next.js + TypeScript + Tailwind)

Launch an affiliate site fast on Vercel with modern tooling and a neon-pink / deep-green visual theme.

## Quickstart

```bash
# 1) Install deps
npm install

# 2) Copy env template and set values
cp .env.local.example .env.local
# Set NEXT_PUBLIC_AFFILIATE_AMAZON_TAG and SITE_URL

# 3) Run locally
npm run dev

# 4) Deploy
# Push to GitHub and import the repo on Vercel (or use the Vercel CLI)
```

## Edit Products

Update `lib/products.ts` with your items. For Amazon links, include `?tag=YOUR_TAG` or set the global `NEXT_PUBLIC_AFFILIATE_AMAZON_TAG` env variable and use the template already provided.

## Compliance

- This starter includes an Affiliate Disclosure page and footer notice.
- Product links set `rel="nofollow sponsored"` and open in a new tab.

## Theming

Colors are defined in `tailwind.config.ts` and `styles/globals.css`.
You can tweak brand shades there.

## SEO
- Metadata in `app/layout.tsx`
- `app/robots.ts` and `app/sitemap.ts` auto-generate robots and sitemap

## File structure
- `app/` App Router pages
- `components/` UI components
- `lib/` data & helpers
- `styles/` Tailwind CSS
- `public/` assets (logo)

Enjoy!
