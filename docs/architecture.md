# Architecture

## Runtime

- Framework: Next.js App Router.
- Routes: `app/page.tsx` and `app/valentine/page.tsx`.
- Rendering: both routes prerender as static content.
- Interactivity: client components in `src/components/HomePage.tsx` and `src/components/ValentinePage.tsx`.

## Data

`src/data/campaign.ts` is the single source for:

- product inventory
- style guide metadata
- featured product IDs
- homepage slides and tiles
- editorial media paths
- Blob-hosted campaign motion URLs

Product images and editorial posters can point to local `/assets/*` paths. Campaign motion media should point to Vercel Blob URLs so large MP4 files are not loaded from the app's homepage/runtime asset set.

## Valentine Flow

The Valentine page keeps the commercial demo surface focused on:

- mood-led style guide cards
- prompt and chip based recommendation filtering
- product result grid
- For Her and For Him gift edits
- wishlist and bag state
- product detail and style guide modals

The AI concierge flow is streamed through the public WebApp endpoint:

```text
ysl-campaign useChat
  -> /api/public/ysl-chat in faishion-web-app
  -> ToolLoopAgent
  -> searchProducts
  -> streamed UIMessage parts
```

The YSL frontend parses assistant text and `tool-searchProducts` output in `src/lib/ysl-chat.ts`. The frontend should not call model providers, embeddings, Prisma, or product-search services directly.

For detailed implementation rules, see `docs/ai-frontend-guidelines.md`.
