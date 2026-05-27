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

Product images now point to `/assets/products/*`. Editorial and motion media point to `/assets/editorial/*` and `/assets/motion/*`.

## Valentine Flow

The Valentine page keeps the commercial demo surface focused on:

- mood-led style guide cards
- prompt and chip based recommendation filtering
- product result grid
- For Her and For Him gift edits
- wishlist and bag state
- product detail and style guide modals

The recommendation logic is local and deterministic. There is no live AI API call in this demo version.
