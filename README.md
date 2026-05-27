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
public/assets/        Curated local campaign assets used by the app
docs/                 PRD, architecture notes, and asset inventory
```

## Commands

```bash
npm install
npm run dev
npm run build
```

Local dev defaults to `http://localhost:3000`; Next.js will choose the next free port if 3000 is busy.

## Notes

The old static HTML pages and downloaded site mirror were removed. Only media actually used by the two-page demo was migrated into `public/assets`.
