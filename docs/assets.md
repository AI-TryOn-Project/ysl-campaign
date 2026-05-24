# Asset Inventory

The source download contained a full website mirror with HTML, CSS, tracker scripts, chat scripts, duplicate logos, and product pages. That mirror was removed.

Curated assets retained in `public/assets`:

- `public/assets/products/` - 27 product images used by the recommendation and gift flows.
- `public/assets/editorial/` - homepage, Qixi, and style guide poster imagery.
- `public/assets/motion/` - 3 MP4 motion assets used by the Qixi teaser and style guide cards.

Removed source folders:

- `ysl官网素材/`
- `references/`
- static `index.html`
- static `valentine.html`
- static `products.js`
- static `vercel.json`

When adding new assets, put them under `public/assets/<type>/` first, then reference them from `src/data/campaign.ts`.
