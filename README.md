# Saint Laurent Qixi Campaign

Next.js demo for the Saint Laurent China Qixi gift-shopping campaign.

## Pages

- `/` - Brand-style homepage entrance with campaign slides and Qixi entry point.
- `/valentine` - Primary AI concierge demo with style guides, recommendations, wishlist, bag, and product detail flows.

## Project Structure

```text
app/                  App Router pages and global CSS
src/components/       React UI for the homepage and Valentine experience
src/data/campaign.ts  Product, style guide, homepage, and media manifest data
public/assets/        Curated local fallback/product/editorial assets
docs/                 PRD, architecture notes, asset inventory, and implementation rules
```

## Implementation Rules

- Read `docs/ai-frontend-guidelines.md` before changing AI concierge, media, or Valentine frontend behavior.
- README/documentation videos and large images must be uploaded to Vercel Blob and referenced by public Blob URL.
- Do not add README-only videos or screenshots to `public/assets`, and do not point documentation media at homepage or campaign runtime assets.
- Campaign motion assets should be served from Vercel Blob; inactive frontend sections should render posters instead of mounting autoplay videos.

## Commands

```bash
npm install
npm run dev
npm run build
```

Local dev defaults to `http://localhost:3000`; Next.js will choose the next free port if 3000 is busy.

## Notes

The old static HTML pages and downloaded site mirror were removed. Only media actually used by the two-page demo was migrated into `public/assets`.
