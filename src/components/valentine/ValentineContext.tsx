"use client";

import { createContext, useContext, useState, useMemo, useCallback, type FormEvent, type ReactNode } from "react";
import {
  EDITORIAL_ASSETS,
  FEATURED_PRODUCTS,
  PRODUCTS,
  STYLE_GUIDES,
  type Product,
  type StyleGuide,
} from "@/data/campaign";

export type DrawerKind = "wishlist" | "bag";
export type ChatMode = "need" | "style" | "occasion";

export type Suggestion = {
  text: string;
  style?: string;
  occasion?: string;
  category?: string;
  budget?: number;
  recipient?: "her" | "him" | "neutral";
};

export type SnapScene = {
  id: string;
  eyebrow: string;
  placeholder: string;
  productScene?: boolean;
  skuProductIds: readonly string[];
};

const CHATBOT_CONFIG: Record<ChatMode, { label: string; suggestions: Suggestion[] }> = {
  need: {
    label: "Search by Need",
    suggestions: [
      { text: "A romantic red look" },
      { text: "A gift under ¥10,000", budget: 10000 },
      { text: "A statement evening bag", category: "Bags" },
      { text: "Silk pieces for summer nights", occasion: "resort" },
      { text: "Jewelry for a subtle love note", category: "Accessories" },
      { text: "A complete dinner-date outfit", occasion: "dinner" },
    ],
  },
  style: {
    label: "Browse by Style",
    suggestions: [
      { text: "Classic minimal", style: "classic-minimal" },
      { text: "Black cool", style: "black-cool" },
      { text: "Polished elegance", style: "polished-elegance" },
      { text: "Soft romantic", style: "classic-minimal" },
      { text: "Parisian night", style: "polished-elegance", occasion: "city-night" },
      { text: "Modern muse", style: "black-cool" },
    ],
  },
  occasion: {
    label: "Shop by Occasion",
    suggestions: [
      { text: "Fine dining", occasion: "dinner" },
      { text: "Rooftop drinks", occasion: "city-night" },
      { text: "Qixi date night", occasion: "dinner" },
      { text: "Weekend escape", occasion: "weekend" },
      { text: "Hawaii trip", occasion: "resort" },
      { text: "Anniversary gift", occasion: "anniversary" },
      { text: "Meet-the-parents dinner", occasion: "dinner", style: "polished-elegance" },
      { text: "Gift for him", recipient: "him" },
    ],
  },
};

const styleTagMap: Record<string, string[]> = {
  "classic-minimal": ["polished elegance", "quiet power"],
  "black-cool": ["city lights", "after dark"],
  "polished-elegance": ["polished elegance", "evening silhouette", "after dark"],
};

const occasionTagMap: Record<string, string[]> = {
  qixi: ["qixi", "qixi date night"],
  dinner: ["fine dining", "candlelit dinner"],
  "city-night": ["qixi date night", "after dark"],
  weekend: ["weekend escape", "weekend getaway"],
  resort: ["weekend escape"],
  anniversary: ["anniversary gift"],
};

export const quickPrompts: Suggestion[] = [
  { text: "A gift for her under ¥10,000", recipient: "her", budget: 10000 },
  { text: "An elegant gift for him", recipient: "him", style: "polished-elegance" },
  { text: "A dinner-date look", occasion: "dinner" },
  { text: "A weekend escape edit", occasion: "weekend" },
];

export const SNAP_SCENES: SnapScene[] = [
  {
    id: "gift-finder",
    eyebrow: "Qixi Gifts",
    placeholder: "What do you want to gift today?",
    skuProductIds: [FEATURED_PRODUCTS.her[0], FEATURED_PRODUCTS.him[0], FEATURED_PRODUCTS.her[1]].filter(Boolean),
  },
  {
    id: "style-guide-section",
    eyebrow: "Style Guide",
    placeholder: "Tell me the mood, moment, or person...",
    skuProductIds: STYLE_GUIDES.flatMap((guide) => guide.productIds).slice(0, 4),
  },
  {
    id: "recommendations-section",
    eyebrow: "Function Call",
    placeholder: "Refine by SKU, budget, category, or occasion...",
    productScene: true,
    skuProductIds: [],
  },
  {
    id: "campaign-section",
    eyebrow: "Campaign",
    placeholder: "Search a Qixi dinner piece or enter a SKU...",
    skuProductIds: [FEATURED_PRODUCTS.her[2], FEATURED_PRODUCTS.her[3], FEATURED_PRODUCTS.him[0]].filter(Boolean),
  },
  {
    id: "collection-intro",
    eyebrow: "Collection",
    placeholder: "Explore the Qixi Gift Edit by SKU or style...",
    skuProductIds: [...FEATURED_PRODUCTS.her.slice(0, 2), ...FEATURED_PRODUCTS.him.slice(0, 2)],
  },
  {
    id: "gifts-for-her",
    eyebrow: "For Her",
    placeholder: "Search her edit by SKU, bag, jewelry, or silk...",
    productScene: true,
    skuProductIds: FEATURED_PRODUCTS.her,
  },
  {
    id: "gifts-for-him",
    eyebrow: "For Him",
    placeholder: "Search his edit by SKU, leather, tailoring, or travel...",
    productScene: true,
    skuProductIds: FEATURED_PRODUCTS.him,
  },
  {
    id: "statement-section",
    eyebrow: "Statement",
    placeholder: "Find a gift with after-dark presence...",
    skuProductIds: [FEATURED_PRODUCTS.her[0], FEATURED_PRODUCTS.her[2], FEATURED_PRODUCTS.him[1]].filter(Boolean),
  },
  {
    id: "services-section",
    eyebrow: "Services",
    placeholder: "Ask for wrapping, delivery, or a precise SKU...",
    skuProductIds: [...FEATURED_PRODUCTS.her.slice(1, 3), ...FEATURED_PRODUCTS.him.slice(1, 3)],
  },
  {
    id: "membership-cta",
    eyebrow: "Concierge",
    placeholder: "Plan a Qixi surprise with SKU-level recommendations...",
    skuProductIds: [...FEATURED_PRODUCTS.her.slice(0, 2), ...FEATURED_PRODUCTS.him.slice(0, 2)],
  },
];

export const SNAP_SECTION_IDS = SNAP_SCENES.map((scene) => scene.id);

function money(value: number | null) {
  if (value == null) return "Price upon request";
  return `¥${value.toLocaleString("en-US")}`;
}

function labelTag(tag: string) {
  return tag
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getProduct(id: string) {
  return PRODUCTS.find((product) => product.id === id);
}

function byIds(ids: readonly string[]) {
  return ids.map(getProduct).filter((product): product is Product => Boolean(product));
}

function getThinkingCopy(text: string, suggestion?: Suggestion) {
  const normalized = text.toLowerCase();
  if (suggestion?.recipient === "him" || /for him|his|men|男/.test(normalized)) {
    return "Curating gifts with sharp tailoring, black leather, and quiet confidence.";
  }
  if (suggestion?.budget || /under|budget|¥|price/.test(normalized)) {
    return "Filtering the edit by gesture value, category, and price sensitivity.";
  }
  if (suggestion?.occasion === "weekend" || /weekend|escape|travel|hawaii/.test(normalized)) {
    return "Building a lighter travel edit with leather, resort texture, and easy movement.";
  }
  if (suggestion?.occasion === "dinner" || /dinner|date|qixi|romantic/.test(normalized)) {
    return "Choosing pieces with after-dark presence for a Qixi dinner moment.";
  }
  return "Matching the mood, the moment, and the person.";
}

function scoreProduct(product: Product, text: string, suggestion?: Suggestion) {
  const query = text.toLowerCase();
  const tags = [...product.styleTags, ...product.occasionTags].map((tag) => tag.toLowerCase());
  const haystack = [product.sku, product.name, product.description, product.material, product.categoryLabel, product.category]
    .join(" ")
    .toLowerCase();

  let score = 0;
  if (query.includes(product.sku.toLowerCase())) score += 18;
  if (suggestion?.recipient === "him" && product.gender === "men") score += 8;
  if (suggestion?.recipient === "her" && product.gender === "women") score += 8;
  if (!suggestion?.recipient && /for him|his|men|男/.test(query) && product.gender === "men") score += 6;
  if (!suggestion?.recipient && /for her|hers|women|女士|她/.test(query) && product.gender === "women") score += 6;
  if (suggestion?.budget && product.price != null && product.price <= suggestion.budget) score += 5;
  if (suggestion?.category && product.categoryLabel === suggestion.category) score += 5;

  const styleTags = suggestion?.style ? styleTagMap[suggestion.style] ?? [] : [];
  const occasionTags = suggestion?.occasion ? occasionTagMap[suggestion.occasion] ?? [] : [];
  for (const tag of [...styleTags, ...occasionTags]) {
    if (tags.includes(tag.toLowerCase())) score += 4;
  }

  for (const word of query.split(/\s+/).filter((item) => item.length > 2)) {
    if (haystack.includes(word)) score += 2;
    if (tags.some((tag) => tag.includes(word))) score += 2;
  }

  if (tags.includes("qixi")) score += 1;
  return score;
}

function curateProducts(text: string, suggestion?: Suggestion) {
  const sorted = PRODUCTS.map((product) => ({
    product,
    score: scoreProduct(product, text, suggestion),
  }))
    .sort((a, b) => b.score - a.score)
    .map((item) => item.product);

  const highSignal = sorted.filter((product) => scoreProduct(product, text, suggestion) > 0);
  const fallback = byIds([...FEATURED_PRODUCTS.her, ...FEATURED_PRODUCTS.him]);
  return (highSignal.length ? highSignal : fallback).slice(0, 8);
}

// Context type
interface ValentineContextValue {
  // Data
  featuredHer: Product[];
  featuredHim: Product[];
  styleGuides: StyleGuide[];
  snapScenes: SnapScene[];
  chatbotConfig: typeof CHATBOT_CONFIG;
  quickPrompts: Suggestion[];

  // UI State
  wishlist: string[];
  bag: string[];
  drawer: DrawerKind | null;
  selectedProduct: Product | null;
  selectedGuide: StyleGuide | null;
  inputValue: string;
  activeMode: ChatMode;
  modePanelOpen: boolean;
  results: Product[];
  hasSearched: boolean;
  thinkingCopy: string;
  isCurating: boolean;
  toast: string;
  activeSection: string;

  // Computed
  activeScene: SnapScene;
  activeSceneProducts: Product[];
  drawerProducts: Product[];

  // Actions
  setDrawer: (kind: DrawerKind | null) => void;
  setSelectedProduct: (product: Product | null) => void;
  setSelectedGuide: (guide: StyleGuide | null) => void;
  setInputValue: (value: string) => void;
  setActiveMode: (mode: ChatMode) => void;
  setModePanelOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
  setActiveSection: (section: string) => void;

  showToast: (message: string) => void;
  addItem: (kind: DrawerKind, product: Product) => void;
  removeItem: (kind: DrawerKind, id: string) => void;
  runSearch: (text: string, suggestion?: Suggestion) => void;
  submitSearch: (event: FormEvent<HTMLFormElement>) => void;
  chooseSuggestion: (suggestion: Suggestion) => void;
  chooseSku: (product: Product) => void;

  // Utilities
  money: (value: number | null) => string;
  labelTag: (tag: string) => string;
  byIds: (ids: readonly string[]) => Product[];
}

const ValentineContext = createContext<ValentineContextValue | null>(null);

export function useValentine() {
  const ctx = useContext(ValentineContext);
  if (!ctx) throw new Error("useValentine must be used within ValentineProvider");
  return ctx;
}

export function ValentineProvider({ children, activeSection, onActiveSectionChange }: { children: ReactNode; activeSection: string; onActiveSectionChange: (section: string) => void }) {
  const featuredHer = useMemo(() => byIds(FEATURED_PRODUCTS.her), []);
  const featuredHim = useMemo(() => byIds(FEATURED_PRODUCTS.him), []);
  const initialResults = useMemo(() => byIds([...FEATURED_PRODUCTS.her, ...FEATURED_PRODUCTS.him]), []);

  const [wishlist, setWishlist] = useState<string[]>([]);
  const [bag, setBag] = useState<string[]>([]);
  const [drawer, setDrawer] = useState<DrawerKind | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedGuide, setSelectedGuide] = useState<StyleGuide | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [activeMode, setActiveMode] = useState<ChatMode>("need");
  const [modePanelOpen, setModePanelOpen] = useState(false);
  const [results, setResults] = useState<Product[]>(initialResults);
  const [hasSearched, setHasSearched] = useState(false);
  const [thinkingCopy, setThinkingCopy] = useState("Selected for Qixi gifting");
  const [isCurating, setIsCurating] = useState(false);
  const [toast, setToast] = useState("");

  const activeScene = useMemo(
    () => SNAP_SCENES.find((scene) => scene.id === activeSection) ?? SNAP_SCENES[0],
    [activeSection]
  );

  const activeSceneProducts = useMemo(() => {
    if (activeScene.id === "recommendations-section") return results.slice(0, 4);
    const configured = byIds(activeScene.skuProductIds);
    return configured.length ? configured.slice(0, 4) : results.slice(0, 4);
  }, [activeScene, results]);

  const drawerProducts = byIds(drawer === "bag" ? bag : wishlist);

  const showToast = useCallback((message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 1600);
  }, []);

  const addItem = useCallback((kind: DrawerKind, product: Product) => {
    if (kind === "wishlist") {
      setWishlist((current) => (current.includes(product.id) ? current : [...current, product.id]));
      showToast("Saved to wishlist");
      return;
    }
    setBag((current) => (current.includes(product.id) ? current : [...current, product.id]));
    showToast("Added to bag");
  }, [showToast]);

  const removeItem = useCallback((kind: DrawerKind, id: string) => {
    if (kind === "wishlist") {
      setWishlist((current) => current.filter((item) => item !== id));
      return;
    }
    setBag((current) => current.filter((item) => item !== id));
  }, []);

  const runSearch = useCallback((text: string, suggestion?: Suggestion) => {
    const query = text.trim() || "Qixi gift";
    const nextResults = curateProducts(query, suggestion);
    setThinkingCopy(getThinkingCopy(query, suggestion));
    setModePanelOpen(false);
    setIsCurating(true);
    window.setTimeout(() => {
      setResults(nextResults);
      setHasSearched(true);
      setIsCurating(false);
      onActiveSectionChange("recommendations-section");
    }, 720);
  }, [onActiveSectionChange]);

  const submitSearch = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    runSearch(inputValue);
  }, [inputValue, runSearch]);

  const chooseSuggestion = useCallback((suggestion: Suggestion) => {
    setInputValue(suggestion.text);
    runSearch(suggestion.text, suggestion);
  }, [runSearch]);

  const chooseSku = useCallback((product: Product) => {
    const query = `SKU ${product.sku} ${product.name}`;
    setInputValue(query);
    runSearch(query, {
      text: query,
      category: product.categoryLabel,
      recipient: product.gender === "men" ? "him" : "her",
    });
  }, [runSearch]);

  const value: ValentineContextValue = {
    featuredHer,
    featuredHim,
    styleGuides: STYLE_GUIDES,
    snapScenes: SNAP_SCENES,
    chatbotConfig: CHATBOT_CONFIG,
    quickPrompts,
    wishlist,
    bag,
    drawer,
    selectedProduct,
    selectedGuide,
    inputValue,
    activeMode,
    modePanelOpen,
    results,
    hasSearched,
    thinkingCopy,
    isCurating,
    toast,
    activeSection,
    activeScene,
    activeSceneProducts,
    drawerProducts,
    setDrawer,
    setSelectedProduct,
    setSelectedGuide,
    setInputValue,
    setActiveMode,
    setModePanelOpen,
    setActiveSection: onActiveSectionChange,
    showToast,
    addItem,
    removeItem,
    runSearch,
    submitSearch,
    chooseSuggestion,
    chooseSku,
    money,
    labelTag,
    byIds,
  };

  return <ValentineContext.Provider value={value}>{children}</ValentineContext.Provider>;
}
