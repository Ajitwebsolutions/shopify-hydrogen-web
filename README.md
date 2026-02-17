# Headless Shopify Store (Next.js + Storefront API + Sanity)

This repository now uses a **headless stack** optimized for Shopify storefronts:

- **Backend**: Shopify (catalog, inventory, orders, checkout)
- **API Layer**: Shopify Storefront API (GraphQL)
- **Frontend**: Next.js (React, SSR/SSG)
- **Hosting**: Vercel (edge delivery + preview deployments)
- **CMS**: Sanity (blog/content)

## Architecture

- `app/lib/shopify` contains Storefront API client and queries.
- `app/lib/sanity` contains Sanity client and blog queries.
- `app/components/cart` + `app/hooks` implements cart drawer UI and optimistic mutation flow.
- `app/routes/*` files are now mapped to Next.js route intent and examples while preserving structure from the previous scaffold.

## Performance Guardrails

- Use SSR/SSG strategically for product and collection pages.
- Keep interactive islands small (`"use client"` only where required).
- Lazy-load non-critical animation libraries.
- Track Lighthouse in CI.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run typecheck`
