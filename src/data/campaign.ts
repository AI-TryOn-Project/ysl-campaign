export type ProductGender = 'women' | 'men';

export type Product = {
  id: string;
  sku: string;
  name: string;
  gender: ProductGender;
  category: string;
  categoryLabel: string;
  price: number | null;
  image: string;
  detailPath: string;
  styleTags: string[];
  occasionTags: string[];
  description: string;
  reason: string;
  material: string;
  styling: string;
};

export type StyleGuide = {
  id: string;
  title: string;
  tagline: string;
  mediaType: 'image' | 'video' | 'gif';
  media: string;
  poster: string;
  image: string;
  productIds: string[];
  stylingNotes: string;
};

export type HomeSlide = {
  id: string;
  kicker: string;
  cta: string;
  href: string;
  image: string;
  imagePosition: string;
  tone: 'light' | 'dark';
};

export type HomeTile = {
  id: string;
  kicker: string;
  cta: string;
  href: string;
  image: string;
};

export const PRODUCTS: Product[] = [
  {
    "id": "ysl-w-s26-851432aagwj1000",
    "sku": "851432AAGWJ1000",
    "name": "MOMBASA small in leather",
    "gender": "women",
    "category": "bag",
    "categoryLabel": "Bags",
    "price": 3450,
    "image": "/assets/products/851432aagwj1000.jpg",
    "detailPath": "https://www.ysl.cn/products/851432aagwj1000.html",
    "styleTags": [
      "after dark",
      "evening silhouette",
      "polished elegance",
      "quiet power",
      "weekend getaway"
    ],
    "occasionTags": [
      "anniversary gift",
      "fine dining",
      "qixi",
      "qixi date night",
      "weekend escape"
    ],
    "description": "A sculptural Saint Laurent bag from the Summer 2026 collection with refined evening presence.",
    "reason": "Works beautifully for Qixi because it feels intimate, polished, and unmistakably Saint Laurent.",
    "material": "Saint Laurent Summer 2026 bags — MOMBASA small in leather.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-w-s26-862029aagwj1000",
    "sku": "862029AAGWJ1000",
    "name": "MOMBASA medium in leather",
    "gender": "women",
    "category": "bag",
    "categoryLabel": "Bags",
    "price": 3950,
    "image": "/assets/products/862029aagwj1000.jpg",
    "detailPath": "https://www.ysl.cn/products/862029aagwj1000.html",
    "styleTags": [
      "after dark",
      "evening silhouette",
      "polished elegance",
      "quiet power",
      "weekend getaway"
    ],
    "occasionTags": [
      "anniversary gift",
      "fine dining",
      "qixi",
      "qixi date night",
      "weekend escape"
    ],
    "description": "A sculptural Saint Laurent bag from the Summer 2026 collection with refined evening presence.",
    "reason": "Works beautifully for Qixi because it feels intimate, polished, and unmistakably Saint Laurent.",
    "material": "Saint Laurent Summer 2026 bags — MOMBASA medium in leather.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-w-s26-862029aafdj2551",
    "sku": "862029AAFDJ2551",
    "name": "MOMBASA medium in vintage leather",
    "gender": "women",
    "category": "bag",
    "categoryLabel": "Bags",
    "price": null,
    "image": "/assets/products/862029aafdj2551.jpg",
    "detailPath": "https://www.ysl.cn/products/862029aafdj2551.html",
    "styleTags": [
      "after dark",
      "evening silhouette",
      "polished elegance",
      "quiet power",
      "weekend getaway"
    ],
    "occasionTags": [
      "anniversary gift",
      "fine dining",
      "qixi",
      "qixi date night",
      "weekend escape"
    ],
    "description": "A sculptural Saint Laurent bag from the Summer 2026 collection with refined evening presence.",
    "reason": "Works beautifully for Qixi because it feels intimate, polished, and unmistakably Saint Laurent.",
    "material": "Saint Laurent Summer 2026 bags — MOMBASA medium in vintage leather.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-w-s26-851689aaang1000",
    "sku": "851689AAANG1000",
    "name": "ICARINO in quilted nappa",
    "gender": "women",
    "category": "bag",
    "categoryLabel": "Bags",
    "price": 3200,
    "image": "/assets/products/851689aaang1000.jpg",
    "detailPath": "https://www.ysl.cn/products/851689aaang1000.html",
    "styleTags": [
      "after dark",
      "evening silhouette",
      "polished elegance",
      "quiet power"
    ],
    "occasionTags": [
      "anniversary gift",
      "candlelit dinner",
      "fine dining",
      "qixi",
      "qixi date night",
      "weekend escape"
    ],
    "description": "A sculptural Saint Laurent bag from the Summer 2026 collection with refined evening presence.",
    "reason": "Works beautifully for Qixi because it feels intimate, polished, and unmistakably Saint Laurent.",
    "material": "Saint Laurent Summer 2026 bags — ICARINO in quilted nappa.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-w-s26-872469aaduu1000",
    "sku": "872469AADUU1000",
    "name": "LE 5 À 7 supple small in grained leather",
    "gender": "women",
    "category": "bag",
    "categoryLabel": "Bags",
    "price": 8200,
    "image": "/assets/products/872469aaduu1000.jpg",
    "detailPath": "https://www.ysl.cn/products/872469aaduu1000.html",
    "styleTags": [
      "after dark",
      "evening silhouette",
      "polished elegance",
      "quiet power"
    ],
    "occasionTags": [
      "anniversary gift",
      "candlelit dinner",
      "fine dining",
      "qixi",
      "qixi date night",
      "weekend escape"
    ],
    "description": "A sculptural Saint Laurent bag from the Summer 2026 collection with refined evening presence.",
    "reason": "Works beautifully for Qixi because it feels intimate, polished, and unmistakably Saint Laurent.",
    "material": "Saint Laurent Summer 2026 bags — LE 5 À 7 supple small in grained leather.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-w-s26-871494aaang3212",
    "sku": "871494AAANG3212",
    "name": "LE 5 À 7 small in quilted leather",
    "gender": "women",
    "category": "bag",
    "categoryLabel": "Bags",
    "price": null,
    "image": "/assets/products/871494aaang3212.jpg",
    "detailPath": "https://www.ysl.cn/products/871494aaang3212.html",
    "styleTags": [
      "after dark",
      "evening silhouette",
      "polished elegance",
      "quiet power"
    ],
    "occasionTags": [
      "anniversary gift",
      "candlelit dinner",
      "fine dining",
      "qixi",
      "qixi date night",
      "weekend escape"
    ],
    "description": "A sculptural Saint Laurent bag from the Summer 2026 collection with refined evening presence.",
    "reason": "Works beautifully for Qixi because it feels intimate, polished, and unmistakably Saint Laurent.",
    "material": "Saint Laurent Summer 2026 bags — LE 5 À 7 small in quilted leather.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-w-s26-779029aaduu1000",
    "sku": "779029AADUU1000",
    "name": "LE 5 À 7 mini in grained leather",
    "gender": "women",
    "category": "bag",
    "categoryLabel": "Bags",
    "price": 4300,
    "image": "/assets/products/779029aaduu1000.jpg",
    "detailPath": "https://www.ysl.cn/products/779029aaduu1000.html",
    "styleTags": [
      "after dark",
      "evening silhouette",
      "polished elegance",
      "quiet power"
    ],
    "occasionTags": [
      "anniversary gift",
      "candlelit dinner",
      "fine dining",
      "qixi",
      "qixi date night",
      "weekend escape"
    ],
    "description": "A sculptural Saint Laurent bag from the Summer 2026 collection with refined evening presence.",
    "reason": "Works beautifully for Qixi because it feels intimate, polished, and unmistakably Saint Laurent.",
    "material": "Saint Laurent Summer 2026 bags — LE 5 À 7 mini in grained leather.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-w-s26-862210aacx71000",
    "sku": "862210AACX71000",
    "name": "LE 5 À 7 bucket bag in leather",
    "gender": "women",
    "category": "bag",
    "categoryLabel": "Bags",
    "price": null,
    "image": "/assets/products/862210aacx71000.jpg",
    "detailPath": "https://www.ysl.cn/products/862210aacx71000.html",
    "styleTags": [
      "after dark",
      "evening silhouette",
      "polished elegance",
      "quiet power"
    ],
    "occasionTags": [
      "anniversary gift",
      "candlelit dinner",
      "fine dining",
      "qixi",
      "qixi date night",
      "weekend escape"
    ],
    "description": "A sculptural Saint Laurent bag from the Summer 2026 collection with refined evening presence.",
    "reason": "Works beautifully for Qixi because it feels intimate, polished, and unmistakably Saint Laurent.",
    "material": "Saint Laurent Summer 2026 bags — LE 5 À 7 bucket bag in leather.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-w-s26-8705051tvan6206",
    "sku": "8705051TVAN6206",
    "name": "Summer 26 women's heeled sandals",
    "gender": "women",
    "category": "shoes",
    "categoryLabel": "Shoes",
    "price": 9600,
    "image": "/assets/products/8705051tvan6206.jpg",
    "detailPath": "https://www.ysl.cn/products/8705051tvan6206.html",
    "styleTags": [
      "after dark",
      "evening silhouette",
      "polished elegance"
    ],
    "occasionTags": [
      "candlelit dinner",
      "fine dining",
      "qixi",
      "qixi date night"
    ],
    "description": "Summer 26 footwear with sharp proportion, polished finish, and Saint Laurent attitude.",
    "reason": "Works beautifully for Qixi because it feels intimate, polished, and unmistakably Saint Laurent.",
    "material": "Saint Laurent Summer 2026 shoes — Summer 26 women's heeled sandals.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-w-s26-8705051tvan3306",
    "sku": "8705051TVAN3306",
    "name": "Summer 26 women's heeled sandals",
    "gender": "women",
    "category": "shoes",
    "categoryLabel": "Shoes",
    "price": null,
    "image": "/assets/products/8705051tvan3306.jpg",
    "detailPath": "https://www.ysl.cn/products/8705051tvan3306.html",
    "styleTags": [
      "after dark",
      "evening silhouette",
      "polished elegance"
    ],
    "occasionTags": [
      "candlelit dinner",
      "fine dining",
      "qixi",
      "qixi date night"
    ],
    "description": "Summer 26 footwear with sharp proportion, polished finish, and Saint Laurent attitude.",
    "reason": "Works beautifully for Qixi because it feels intimate, polished, and unmistakably Saint Laurent.",
    "material": "Saint Laurent Summer 2026 shoes — Summer 26 women's heeled sandals.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-w-s26-867272aagm66485",
    "sku": "867272AAGM66485",
    "name": "Summer 26 women's slingback pumps",
    "gender": "women",
    "category": "shoes",
    "categoryLabel": "Shoes",
    "price": null,
    "image": "/assets/products/867272aagm66485.jpg",
    "detailPath": "https://www.ysl.cn/products/867272aagm66485.html",
    "styleTags": [
      "after dark",
      "evening silhouette",
      "polished elegance"
    ],
    "occasionTags": [
      "candlelit dinner",
      "fine dining",
      "qixi",
      "qixi date night"
    ],
    "description": "Summer 26 footwear with sharp proportion, polished finish, and Saint Laurent attitude.",
    "reason": "Works beautifully for Qixi because it feels intimate, polished, and unmistakably Saint Laurent.",
    "material": "Saint Laurent Summer 2026 shoes — Summer 26 women's slingback pumps.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-w-s26-8671811tvan2226",
    "sku": "8671811TVAN2226",
    "name": "Summer 26 women's heeled sandals",
    "gender": "women",
    "category": "shoes",
    "categoryLabel": "Shoes",
    "price": null,
    "image": "/assets/products/8671811tvan2226.jpg",
    "detailPath": "https://www.ysl.cn/products/8671811tvan2226.html",
    "styleTags": [
      "after dark",
      "evening silhouette",
      "polished elegance"
    ],
    "occasionTags": [
      "candlelit dinner",
      "fine dining",
      "qixi",
      "qixi date night"
    ],
    "description": "Summer 26 footwear with sharp proportion, polished finish, and Saint Laurent attitude.",
    "reason": "Works beautifully for Qixi because it feels intimate, polished, and unmistakably Saint Laurent.",
    "material": "Saint Laurent Summer 2026 shoes — Summer 26 women's heeled sandals.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-w-s26-867272aagjq2369",
    "sku": "867272AAGJQ2369",
    "name": "Summer 26 women's pumps",
    "gender": "women",
    "category": "shoes",
    "categoryLabel": "Shoes",
    "price": null,
    "image": "/assets/products/867272aagjq2369.jpg",
    "detailPath": "https://www.ysl.cn/products/867272aagjq2369.html",
    "styleTags": [
      "after dark",
      "evening silhouette",
      "polished elegance"
    ],
    "occasionTags": [
      "candlelit dinner",
      "fine dining",
      "qixi",
      "qixi date night"
    ],
    "description": "Summer 26 footwear with sharp proportion, polished finish, and Saint Laurent attitude.",
    "reason": "Works beautifully for Qixi because it feels intimate, polished, and unmistakably Saint Laurent.",
    "material": "Saint Laurent Summer 2026 shoes — Summer 26 women's pumps.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-w-s26-554465boo0w1000",
    "sku": "554465BOO0W1000",
    "name": "Monogram square-buckle smooth leather belt",
    "gender": "women",
    "category": "accessories",
    "categoryLabel": "Accessories",
    "price": 3550,
    "image": "/assets/products/554465boo0w1000.jpg",
    "detailPath": "https://www.ysl.cn/products/554465boo0w1000.html",
    "styleTags": [
      "after dark",
      "city lights",
      "evening silhouette",
      "polished elegance",
      "quiet power"
    ],
    "occasionTags": [
      "anniversary gift",
      "fine dining",
      "gesture of desire",
      "qixi",
      "qixi date night"
    ],
    "description": "An iconic Saint Laurent accessory with monogram details and timeless wearability.",
    "reason": "Works beautifully for Qixi because it feels intimate, polished, and unmistakably Saint Laurent.",
    "material": "Saint Laurent Summer 2026 accessories — Monogram square-buckle smooth leather belt.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-w-s26-554465boo0n1000",
    "sku": "554465BOO0N1000",
    "name": "Monogram square-buckle belt",
    "gender": "women",
    "category": "accessories",
    "categoryLabel": "Accessories",
    "price": null,
    "image": "/assets/products/554465boo0n1000.jpg",
    "detailPath": "https://www.ysl.cn/products/554465boo0n1000.html",
    "styleTags": [
      "after dark",
      "city lights",
      "evening silhouette",
      "polished elegance",
      "quiet power"
    ],
    "occasionTags": [
      "anniversary gift",
      "fine dining",
      "gesture of desire",
      "qixi",
      "qixi date night"
    ],
    "description": "An iconic Saint Laurent accessory with monogram details and timeless wearability.",
    "reason": "Works beautifully for Qixi because it feels intimate, polished, and unmistakably Saint Laurent.",
    "material": "Saint Laurent Summer 2026 accessories — Monogram square-buckle belt.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-w-s26-554465dti0w1000",
    "sku": "554465DTI0W1000",
    "name": "Cassandre thin belt in leather",
    "gender": "women",
    "category": "accessories",
    "categoryLabel": "Accessories",
    "price": null,
    "image": "/assets/products/554465dti0w1000.jpg",
    "detailPath": "https://www.ysl.cn/products/554465dti0w1000.html",
    "styleTags": [
      "after dark",
      "city lights",
      "evening silhouette",
      "polished elegance",
      "quiet power"
    ],
    "occasionTags": [
      "anniversary gift",
      "fine dining",
      "gesture of desire",
      "qixi",
      "qixi date night"
    ],
    "description": "An iconic Saint Laurent accessory with monogram details and timeless wearability.",
    "reason": "Works beautifully for Qixi because it feels intimate, polished, and unmistakably Saint Laurent.",
    "material": "Saint Laurent Summer 2026 accessories — Cassandre thin belt in leather.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-m-s26-862885y99581000",
    "sku": "862885Y99581000",
    "name": "Summer 26 men's tailored jacket",
    "gender": "men",
    "category": "ready-to-wear",
    "categoryLabel": "Ready-to-wear",
    "price": 18500,
    "image": "/assets/products/862885y99581000.jpg",
    "detailPath": "https://www.ysl.cn/products/862885y99581000.html",
    "styleTags": [
      "city lights",
      "polished elegance",
      "quiet power",
      "weekend getaway"
    ],
    "occasionTags": [
      "fine dining",
      "qixi",
      "qixi date night",
      "weekend escape"
    ],
    "description": "Summer 26 tailoring with architectural lines and understated Saint Laurent power.",
    "reason": "A confident Qixi gesture—sharp, wearable, and rooted in Saint Laurent Summer 26 codes.",
    "material": "Saint Laurent Summer 2026 ready-to-wear — Summer 26 men's tailored jacket.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-m-s26-862887y99581000",
    "sku": "862887Y99581000",
    "name": "Summer 26 men's single-breasted jacket",
    "gender": "men",
    "category": "ready-to-wear",
    "categoryLabel": "Ready-to-wear",
    "price": null,
    "image": "/assets/products/862887y99581000.jpg",
    "detailPath": "https://www.ysl.cn/products/862887y99581000.html",
    "styleTags": [
      "city lights",
      "polished elegance",
      "quiet power",
      "weekend getaway"
    ],
    "occasionTags": [
      "fine dining",
      "qixi",
      "qixi date night",
      "weekend escape"
    ],
    "description": "Summer 26 tailoring with architectural lines and understated Saint Laurent power.",
    "reason": "A confident Qixi gesture—sharp, wearable, and rooted in Saint Laurent Summer 26 codes.",
    "material": "Saint Laurent Summer 2026 ready-to-wear — Summer 26 men's single-breasted jacket.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-m-s26-854459y1n022019",
    "sku": "854459Y1N022019",
    "name": "Summer 26 men's wool jacket",
    "gender": "men",
    "category": "ready-to-wear",
    "categoryLabel": "Ready-to-wear",
    "price": null,
    "image": "/assets/products/854459y1n022019.jpg",
    "detailPath": "https://www.ysl.cn/products/854459y1n022019.html",
    "styleTags": [
      "city lights",
      "polished elegance",
      "quiet power",
      "weekend getaway"
    ],
    "occasionTags": [
      "fine dining",
      "qixi",
      "qixi date night",
      "weekend escape"
    ],
    "description": "Summer 26 tailoring with architectural lines and understated Saint Laurent power.",
    "reason": "A confident Qixi gesture—sharp, wearable, and rooted in Saint Laurent Summer 26 codes.",
    "material": "Saint Laurent Summer 2026 ready-to-wear — Summer 26 men's wool jacket.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-m-s26-854428y1n023204",
    "sku": "854428Y1N023204",
    "name": "Summer 26 men's leather jacket",
    "gender": "men",
    "category": "ready-to-wear",
    "categoryLabel": "Ready-to-wear",
    "price": null,
    "image": "/assets/products/854428y1n023204.jpg",
    "detailPath": "https://www.ysl.cn/products/854428y1n023204.html",
    "styleTags": [
      "city lights",
      "polished elegance",
      "quiet power",
      "weekend getaway"
    ],
    "occasionTags": [
      "fine dining",
      "qixi",
      "qixi date night",
      "weekend escape"
    ],
    "description": "Summer 26 tailoring with architectural lines and understated Saint Laurent power.",
    "reason": "A confident Qixi gesture—sharp, wearable, and rooted in Saint Laurent Summer 26 codes.",
    "material": "Saint Laurent Summer 2026 ready-to-wear — Summer 26 men's leather jacket.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-m-s26-841196aad4x1000",
    "sku": "841196AAD4X1000",
    "name": "Men's black leather loafers",
    "gender": "men",
    "category": "shoes",
    "categoryLabel": "Shoes",
    "price": 8500,
    "image": "/assets/products/841196aad4x1000.jpg",
    "detailPath": "https://www.ysl.cn/products/841196aad4x1000.html",
    "styleTags": [
      "after dark",
      "city lights",
      "evening silhouette",
      "polished elegance",
      "weekend getaway"
    ],
    "occasionTags": [
      "candlelit dinner",
      "fine dining",
      "qixi",
      "qixi date night",
      "weekend escape"
    ],
    "description": "Summer 26 footwear with sharp proportion, polished finish, and Saint Laurent attitude.",
    "reason": "A confident Qixi gesture—sharp, wearable, and rooted in Saint Laurent Summer 26 codes.",
    "material": "Saint Laurent Summer 2026 shoes — Men's black leather loafers.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-m-s26-83947125vaa1000",
    "sku": "83947125VAA1000",
    "name": "Men's leather derby shoes",
    "gender": "men",
    "category": "shoes",
    "categoryLabel": "Shoes",
    "price": null,
    "image": "/assets/products/83947125vaa1000.jpg",
    "detailPath": "https://www.ysl.cn/products/83947125vaa1000.html",
    "styleTags": [
      "after dark",
      "city lights",
      "evening silhouette",
      "polished elegance",
      "weekend getaway"
    ],
    "occasionTags": [
      "candlelit dinner",
      "fine dining",
      "qixi",
      "qixi date night",
      "weekend escape"
    ],
    "description": "Summer 26 footwear with sharp proportion, polished finish, and Saint Laurent attitude.",
    "reason": "A confident Qixi gesture—sharp, wearable, and rooted in Saint Laurent Summer 26 codes.",
    "material": "Saint Laurent Summer 2026 shoes — Men's leather derby shoes.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-m-s26-534967aae8m1000",
    "sku": "534967AAE8M1000",
    "name": "Classic CITY backpack in black leather",
    "gender": "men",
    "category": "bag",
    "categoryLabel": "Bags",
    "price": 14200,
    "image": "/assets/products/534967aae8m1000.jpg",
    "detailPath": "https://www.ysl.cn/products/534967aae8m1000.html",
    "styleTags": [
      "after dark",
      "city lights",
      "evening silhouette",
      "polished elegance",
      "quiet power",
      "weekend getaway"
    ],
    "occasionTags": [
      "anniversary gift",
      "fine dining",
      "qixi",
      "qixi date night",
      "weekend escape"
    ],
    "description": "A sculptural Saint Laurent bag from the Summer 2026 collection with refined evening presence.",
    "reason": "A confident Qixi gesture—sharp, wearable, and rooted in Saint Laurent Summer 26 codes.",
    "material": "Saint Laurent Summer 2026 bags — Classic CITY backpack in black leather.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-m-s26-756285faceo1000",
    "sku": "756285FACEO1000",
    "name": "Rive Gauche duffel bag in canvas and leather",
    "gender": "men",
    "category": "bag",
    "categoryLabel": "Bags",
    "price": null,
    "image": "/assets/products/756285faceo1000.jpg",
    "detailPath": "https://www.ysl.cn/products/756285faceo1000.html",
    "styleTags": [
      "after dark",
      "city lights",
      "evening silhouette",
      "polished elegance",
      "quiet power",
      "weekend getaway"
    ],
    "occasionTags": [
      "anniversary gift",
      "fine dining",
      "qixi",
      "qixi date night",
      "weekend escape"
    ],
    "description": "A sculptural Saint Laurent bag from the Summer 2026 collection with refined evening presence.",
    "reason": "A confident Qixi gesture—sharp, wearable, and rooted in Saint Laurent Summer 26 codes.",
    "material": "Saint Laurent Summer 2026 bags — Rive Gauche duffel bag in canvas and leather.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-m-s26-847812aab251000",
    "sku": "847812AAB251000",
    "name": "LA 66 smooth leather belt",
    "gender": "men",
    "category": "accessories",
    "categoryLabel": "Accessories",
    "price": 4200,
    "image": "/assets/products/847812aab251000.jpg",
    "detailPath": "https://www.ysl.cn/products/847812aab251000.html",
    "styleTags": [
      "city lights",
      "polished elegance",
      "quiet power",
      "weekend getaway"
    ],
    "occasionTags": [
      "anniversary gift",
      "fine dining",
      "gesture of desire",
      "qixi",
      "qixi date night",
      "weekend escape"
    ],
    "description": "An iconic Saint Laurent accessory with monogram details and timeless wearability.",
    "reason": "A confident Qixi gesture—sharp, wearable, and rooted in Saint Laurent Summer 26 codes.",
    "material": "Saint Laurent Summer 2026 accessories — LA 66 smooth leather belt.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-m-s26-863679aaelp1000",
    "sku": "863679AAELP1000",
    "name": "Cassandre card case in leather",
    "gender": "men",
    "category": "small-leather-goods",
    "categoryLabel": "Small leather goods",
    "price": null,
    "image": "/assets/products/863679aaelp1000.jpg",
    "detailPath": "https://www.ysl.cn/products/863679aaelp1000.html",
    "styleTags": [
      "after dark",
      "city lights",
      "evening silhouette",
      "polished elegance",
      "quiet power",
      "weekend getaway"
    ],
    "occasionTags": [
      "anniversary gift",
      "fine dining",
      "gesture of desire",
      "qixi",
      "qixi date night",
      "weekend escape"
    ],
    "description": "Compact leather goods with Cassandre codes—personal, polished, and gift-ready.",
    "reason": "A confident Qixi gesture—sharp, wearable, and rooted in Saint Laurent Summer 26 codes.",
    "material": "Saint Laurent Summer 2026 small leather goods — Cassandre card case in leather.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  },
  {
    "id": "ysl-m-s26-847954aaet94784",
    "sku": "847954AAET94784",
    "name": "Saint Laurent card holder",
    "gender": "men",
    "category": "small-leather-goods",
    "categoryLabel": "Small leather goods",
    "price": null,
    "image": "/assets/products/847954aaet94784.jpg",
    "detailPath": "https://www.ysl.cn/products/847954aaet94784.html",
    "styleTags": [
      "after dark",
      "city lights",
      "evening silhouette",
      "polished elegance",
      "quiet power",
      "weekend getaway"
    ],
    "occasionTags": [
      "anniversary gift",
      "fine dining",
      "gesture of desire",
      "qixi",
      "qixi date night",
      "weekend escape"
    ],
    "description": "Compact leather goods with Cassandre codes—personal, polished, and gift-ready.",
    "reason": "A confident Qixi gesture—sharp, wearable, and rooted in Saint Laurent Summer 26 codes.",
    "material": "Saint Laurent Summer 2026 small leather goods — Saint Laurent card holder.",
    "styling": "Pair with monochrome tailoring, after-dark silhouettes, or relaxed weekend layers from the Summer 26 edit."
  }
];

export const STYLE_GUIDES: StyleGuide[] = [
  {
    "id": "after-dark",
    "title": "After Dark",
    "tagline": "Velvet hours, sculpted silhouettes, and the art of arrival.",
    "mediaType": "video",
    "media": "/assets/motion/sl-ss26-15-seconds-edit.mp4",
    "poster": "/assets/editorial/medium2-saint-laurent-wsummer26-lookbook-2x3-19-a.jpg",
    "image": "/assets/editorial/medium2-saint-laurent-wsummer26-lookbook-2x3-19-a.jpg",
    "productIds": [
      "ysl-w-s26-8705051tvan6206",
      "ysl-w-s26-867272aagm66485",
      "ysl-w-s26-872469aaduu1000",
      "ysl-w-s26-554465boo0w1000"
    ],
    "stylingNotes": "Keep the palette deep and uninterrupted. One gleam of gold—a buckle, a chain—is enough."
  },
  {
    "id": "candlelit-dinner",
    "title": "Candlelit Dinner",
    "tagline": "Polished presence for the table, the toast, and the walk home.",
    "mediaType": "video",
    "media": "/assets/motion/saint-laurent-productions-hp.mp4",
    "poster": "/assets/editorial/saint-laurent-wsummer26-lookbook-4x5-20.jpg",
    "image": "/assets/editorial/saint-laurent-wsummer26-lookbook-4x5-20.jpg",
    "productIds": [
      "ysl-w-s26-872469aaduu1000",
      "ysl-w-s26-871494aaang3212",
      "ysl-m-s26-862885y99581000",
      "ysl-w-s26-8705051tvan3306"
    ],
    "stylingNotes": "Structured bag, refined heel, minimal jewelry. Let tailoring and leather do the talking."
  },
  {
    "id": "seaside-escape",
    "title": "Seaside Escape",
    "tagline": "Salt air, sun-warmed skin, and silk that moves with the breeze.",
    "mediaType": "image",
    "media": "/assets/editorial/saint-laurent-wsummer26-lookbook-4x5-19-b.jpg",
    "poster": "/assets/editorial/saint-laurent-wsummer26-lookbook-4x5-19-b.jpg",
    "image": "/assets/editorial/saint-laurent-wsummer26-lookbook-4x5-19-b.jpg",
    "productIds": [
      "ysl-w-s26-8705051tvan6206",
      "ysl-w-s26-8671811tvan2226",
      "ysl-w-s26-862029aafdj2551",
      "ysl-m-s26-756285faceo1000"
    ],
    "stylingNotes": "Light layers, bare shoulder, sand-ready sandals. Keep accessories minimal and sun-aware."
  },
  {
    "id": "city-lights",
    "title": "City Lights",
    "tagline": "Neon reflections, leather accents, and the pulse of the summer city.",
    "mediaType": "video",
    "media": "/assets/motion/slp-intro-9-16.mp4",
    "poster": "/assets/editorial/saint-laurent-women-fall-26-4x5-08.jpg",
    "image": "/assets/editorial/saint-laurent-women-fall-26-4x5-08.jpg",
    "productIds": [
      "ysl-m-s26-854428y1n023204",
      "ysl-m-s26-534967aae8m1000",
      "ysl-m-s26-847812aab251000",
      "ysl-w-s26-867272aagjq2369"
    ],
    "stylingNotes": "Matte black with one polished leather note. Crossbody bag, sharp shoe, controlled nonchalance."
  },
  {
    "id": "weekend-getaway",
    "title": "The Weekend Getaway",
    "tagline": "Departure at dawn. Return with stories.",
    "mediaType": "video",
    "media": "/assets/motion/saint-laurent-productions-hp.mp4",
    "poster": "/assets/editorial/saint-laurent-lb-mspring26-ecom-2x3-32-a.jpg",
    "image": "/assets/editorial/saint-laurent-lb-mspring26-ecom-2x3-32-a.jpg",
    "productIds": [
      "ysl-m-s26-534967aae8m1000",
      "ysl-m-s26-756285faceo1000",
      "ysl-m-s26-854459y1n022019",
      "ysl-m-s26-841196aad4x1000"
    ],
    "stylingNotes": "One travel bag, relaxed tailoring, versatile shoes. Pack light, dress with intention."
  },
  {
    "id": "quiet-power",
    "title": "Quiet Power",
    "tagline": "Tailoring that speaks softly. Presence that lingers.",
    "mediaType": "video",
    "media": "/assets/motion/slp-intro-9-16.mp4",
    "poster": "/assets/editorial/saintlaurent-fall26-wlookbook-ecom-2x3-36.jpg",
    "image": "/assets/editorial/saintlaurent-fall26-wlookbook-ecom-2x3-36.jpg",
    "productIds": [
      "ysl-m-s26-862885y99581000",
      "ysl-m-s26-862887y99581000",
      "ysl-w-s26-872469aaduu1000",
      "ysl-m-s26-847812aab251000"
    ],
    "stylingNotes": "Monochrome head to toe. Structured bag, minimal accessories, impeccable fit."
  },
  {
    "id": "evening-silhouette",
    "title": "The Evening Silhouette",
    "tagline": "Sculptural lines for the hour when daylight yields.",
    "mediaType": "video",
    "media": "/assets/motion/sl-ss26-15-seconds-edit.mp4",
    "poster": "/assets/editorial/saint-laurent-wsummer26-lookbook-2x3-19-b.jpg",
    "image": "/assets/editorial/saint-laurent-wsummer26-lookbook-2x3-19-b.jpg",
    "productIds": [
      "ysl-w-s26-8705051tvan6206",
      "ysl-w-s26-851689aaang1000",
      "ysl-m-s26-862885y99581000",
      "ysl-w-s26-554465dti0w1000"
    ],
    "stylingNotes": "Vertical lines, refined heel, compact clutch or mini bag. One statement, no excess."
  },
  {
    "id": "gesture-desire",
    "title": "A Gesture of Desire",
    "tagline": "The gift that says everything without speaking.",
    "mediaType": "video",
    "media": "/assets/motion/saint-laurent-productions-hp.mp4",
    "poster": "/assets/editorial/slrd-gifting-ecom-hp-desk.jpg",
    "image": "/assets/editorial/slrd-gifting-ecom-hp-desk.jpg",
    "productIds": [
      "ysl-w-s26-779029aaduu1000",
      "ysl-w-s26-871494aaang3212",
      "ysl-m-s26-863679aaelp1000",
      "ysl-w-s26-554465boo0w1000"
    ],
    "stylingNotes": "Giftable leather, gold codes, personal scale. Present with intention—not excess packaging."
  }
];

export const FEATURED_PRODUCTS = {
  "her": [
    "ysl-w-s26-872469aaduu1000",
    "ysl-w-s26-851689aaang1000",
    "ysl-w-s26-554465boo0w1000",
    "ysl-w-s26-8705051tvan6206"
  ],
  "him": [
    "ysl-m-s26-534967aae8m1000",
    "ysl-m-s26-847812aab251000",
    "ysl-m-s26-862885y99581000",
    "ysl-m-s26-841196aad4x1000"
  ]
};

export const HOME_SLIDES: HomeSlide[] = [
  {
    "id": "women-fall-26",
    "kicker": "WOMEN'S FALL 26",
    "cta": "探索系列",
    "href": "/valentine",
    "image": "/assets/editorial/women-fall-26-hero.jpg",
    "imagePosition": "center top",
    "tone": "light"
  },
  {
    "id": "spring-summer-26",
    "kicker": "SPRING SUMMER 26",
    "cta": "进入七夕礼物企划",
    "href": "/valentine",
    "image": "/assets/editorial/spring-summer-26-gifting.jpg",
    "imagePosition": "center center",
    "tone": "dark"
  },
  {
    "id": "men-summer-26",
    "kicker": "MEN'S SUMMER 26",
    "cta": "探索男士礼物",
    "href": "/valentine#gifts-for-him",
    "image": "/assets/editorial/men-summer-26-hero.jpg",
    "imagePosition": "center top",
    "tone": "light"
  },
  {
    "id": "rive-droite",
    "kicker": "RIVE DROITE",
    "cta": "探索灵感",
    "href": "/valentine#style-guide-section",
    "image": "/assets/editorial/rive-droite-gifting.jpg",
    "imagePosition": "center center",
    "tone": "light"
  }
];

export const HOME_TILES: HomeTile[] = [
  {
    "id": "handbags",
    "kicker": "手袋",
    "cta": "发现",
    "href": "/valentine#gifts-for-her",
    "image": "/assets/editorial/women-fall-handbag.jpg"
  },
  {
    "id": "shoes",
    "kicker": "鞋履",
    "cta": "查看更多",
    "href": "/valentine#style-guide-section",
    "image": "/assets/editorial/saint-laurent-women-fall-26-4x5-08.jpg"
  }
];

export const EDITORIAL_ASSETS = {
  "valentineHero": "/assets/editorial/saint-laurent-wsummer26-lookbook-4x5-20.jpg",
  "valentineCampaign": "/assets/editorial/slrd-gifting-ecom-hp-desk.jpg",
  "valentineStatement": "/assets/editorial/saint-laurent-wsummer26-lookbook-4x5-19-b.jpg",
  "qixiTeaserPoster": "/assets/editorial/slrd-gifting-ecom-hp-desk.jpg",
  "qixiTeaserVideo": "/ysl-new-access.mp4"
};
