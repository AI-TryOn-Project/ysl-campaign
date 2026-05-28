# Asset Inventory

The source download contained a full website mirror with HTML, CSS, tracker scripts, chat scripts, duplicate logos, and product pages. That mirror was removed.

Curated assets retained in `public/assets`:

- `public/assets/products/` - 27 product images used by the recommendation and gift flows.
- `public/assets/editorial/` - homepage, Qixi, and style guide poster imagery.
- `public/assets/motion/` - legacy local MP4 copies only. Runtime campaign video references should use Vercel Blob URLs from `src/data/campaign.ts`.

Removed source folders:

- `ysl官网素材/`
- `references/`
- static `index.html`
- static `valentine.html`
- static `products.js`
- static `vercel.json`

## New Asset Rules

Small product/editorial images required by the app may live under `public/assets/<type>/`, then be referenced from `src/data/campaign.ts`.

Videos, GIFs, README media, and large documentation images must be uploaded to Vercel Blob first. Reference the public Blob URL rather than adding documentation-only files under `public/assets`.

Do not use homepage assets as README or documentation media. Documentation should not depend on `/assets/...` runtime paths.
