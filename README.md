# hydrogen-enterprise-store

Enterprise-ready Hydrogen starter scaffold with:

- GitHub Actions CI and Lighthouse workflows
- Cart drawer architecture (UI state, mutations, isolated animation)
- CMS-driven section rendering scaffolding via Metaobjects
- Performance budget checklist and animation layering conventions

## Structure

- `.github/workflows`: CI and Lighthouse automation
- `app/components/cart`: cart drawer, lines, and summary components
- `app/hooks`: UI and mutation hooks for optimistic cart UX
- `app/components/animations`: reusable animation hooks/components
- `app/graphql/queries`: Metaobject query templates

## Performance budget targets

- LCP < 2.5s
- CLS < 0.1
- TBT < 150ms
- JS bundle < 180kb
- Lighthouse score 90+

## Cart architecture

- `useCartState.ts`: drawer open/close UI state context
- `useCartMutations.ts`: server-authoritative cart mutation API
- `CartDrawer.client.tsx`: controlled drawer shell
- `CartLines.server.tsx`: server-safe line item rendering
- `CartSummary.server.tsx`: summary and checkout CTA

## Metaobject-driven sections

Use `HOMEPAGE_METAOBJECT_QUERY` and pass parsed section config into `SectionRenderer`.

## Scripts

- `npm run typecheck`
- `npm run build`
- `npm run lighthouse`
