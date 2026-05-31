"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { createContext, useContext, useState, useMemo, useCallback, useEffect, type FormEvent, type ReactNode } from "react";
import {
  EDITORIAL_ASSETS,
  FEATURED_PRODUCTS,
  PRODUCTS,
  STYLE_GUIDES,
  type Product,
  type StyleGuide,
} from "@/data/campaign";
import { extractYslChatSnapshot, type YslChatProduct } from "@/lib/ysl-chat";

export type { Product, StyleGuide } from "@/data/campaign";

export type DrawerKind = "wishlist" | "bag";
export type ChatMode = "need" | "style" | "occasion";

const YSL_CHAT_API =
  process.env.NEXT_PUBLIC_YSL_CHAT_API_URL ?? "http://staging.app.faishion.ai/api/public/ysl-chat";

export type Suggestion = {
  text: string;
  icon?: string;
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

const CHATBOT_CONFIG: Record<ChatMode, { label: string; sublabel: string; description: string; icon: string; suggestions: Suggestion[] }> = {
  need: {
    label: "FOR HER",
    sublabel: "GIFTS",
    description: "",
    icon: "search",
    suggestions: [
      { text: "QIXI GIFTS", icon: "♡", recipient: "her" },
      { text: "JEWELRY", icon: "◇", category: "Accessories" },
      { text: "HANDBAGS", icon: "◈", category: "Bags" },
      { text: "LITTLE BLACK DRESS", icon: "◻", category: "Ready-to-Wear" },
      { text: "NEW ARRIVALS", icon: "✦" },
    ],
  },
  style: {
    label: "DISCOVER",
    sublabel: "STYLE",
    description: "",
    icon: "sparkle",
    suggestions: [
      { text: "MINIMALIST", icon: "♡", style: "classic-minimal" },
      { text: "OFFICE", icon: "◇", style: "polished-elegance" },
      { text: "BOLD", icon: "✦", style: "black-cool" },
      { text: "AFTER DARK", icon: "☾", style: "black-cool", occasion: "city-night" },
      { text: "FRENCH CHIC", icon: "◈", style: "polished-elegance" },
    ],
  },
  occasion: {
    label: "SHOP",
    sublabel: "OCCASIONS",
    description: "",
    icon: "calendar",
    suggestions: [
      { text: "DINNER DATE", icon: "◈", occasion: "dinner" },
      { text: "CITY", icon: "☀", occasion: "weekend" },
      { text: "BUSINESS DINNER", icon: "◇", occasion: "dinner", style: "polished-elegance" },
      { text: "TRAVEL", icon: "✦", occasion: "resort" },
      { text: "VACATION", icon: "☾", occasion: "resort" },
    ],
  },
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
    placeholder: "Find the perfect Qixi look.",
    skuProductIds: [FEATURED_PRODUCTS.her[0], FEATURED_PRODUCTS.him[0], FEATURED_PRODUCTS.her[1]].filter(Boolean),
  },
  {
    id: "concierge-reply-section",
    eyebrow: "Concierge",
    placeholder: "Refine the mood, recipient, or budget...",
    skuProductIds: [],
  },
  {
    id: "recommendations-section",
    eyebrow: "Function Call",
    placeholder: "Refine by budget, category, or occasion...",
    productScene: true,
    skuProductIds: [],
  },
  {
    id: "style-guide-section",
    eyebrow: "Style Guide",
    placeholder: "Tell me the mood, moment, or person...",
    skuProductIds: STYLE_GUIDES.flatMap((guide) => guide.productIds).slice(0, 4),
  },
  {
    id: "campaign-section",
    eyebrow: "Campaign",
    placeholder: "Search a Qixi dinner piece...",
    skuProductIds: [FEATURED_PRODUCTS.her[2], FEATURED_PRODUCTS.her[3], FEATURED_PRODUCTS.him[0]].filter(Boolean),
  },
  {
    id: "collection-intro",
    eyebrow: "Collection",
    placeholder: "Explore the Qixi Gift Edit by style...",
    skuProductIds: [...FEATURED_PRODUCTS.her.slice(0, 2), ...FEATURED_PRODUCTS.him.slice(0, 2)],
  },
  {
    id: "gifts-for-her",
    eyebrow: "For Her",
    placeholder: "Search her edit by bag, jewelry, or silk...",
    productScene: true,
    skuProductIds: FEATURED_PRODUCTS.her,
  },
  {
    id: "gifts-for-him",
    eyebrow: "For Him",
    placeholder: "Search his edit by leather, tailoring, or travel...",
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
    placeholder: "Ask for wrapping, delivery, or styling advice...",
    skuProductIds: [...FEATURED_PRODUCTS.her.slice(1, 3), ...FEATURED_PRODUCTS.him.slice(1, 3)],
  },
  {
    id: "membership-cta",
    eyebrow: "Concierge",
    placeholder: "Plan a Qixi surprise with curated recommendations...",
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
  recommendationProducts: YslChatProduct[];
  hasSearched: boolean;
  hasProductSearch: boolean;
  assistantReplyText: string;
  thinkingCopy: string;
  isCurating: boolean;
  isAwaitingAssistant: boolean;
  isSearchingProducts: boolean;
  isChatBusy: boolean;
  chatErrorText: string | null;
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
  const [toast, setToast] = useState("");
  const chat = useChat({
    id: "ysl-campaign-concierge",
    transport: new DefaultChatTransport({
      api: YSL_CHAT_API,
      credentials: "omit",
    }),
  });
  const chatSnapshot = useMemo(
    () => extractYslChatSnapshot(chat.messages, chat.error),
    [chat.error, chat.messages]
  );
  const isChatBusy = chat.status === "submitted" || chat.status === "streaming";
  const isAwaitingAssistant = hasSearched && isChatBusy && !chatSnapshot.assistantText;
  const isSearchingProducts =
    hasSearched &&
    (chatSnapshot.isSearching ||
      (isChatBusy && chatSnapshot.hasSearch && chatSnapshot.products.length === 0));
  const thinkingCopy =
    chatSnapshot.assistantText ||
    (isAwaitingAssistant
      ? "Reading the gesture, the person, and the Saint Laurent mood."
      : "Selected for Qixi gifting");
  const isCurating = false;

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

  useEffect(() => {
    if (!hasSearched || !chatSnapshot.hasSearch) return;
    onActiveSectionChange("recommendations-section");
  }, [chatSnapshot.hasSearch, hasSearched, onActiveSectionChange]);

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

  const buildConciergePrompt = useCallback((text: string, suggestion?: Suggestion) => {
    const hints = [
      suggestion?.recipient ? `recipient: ${suggestion.recipient}` : null,
      suggestion?.budget ? `budget under ¥${suggestion.budget.toLocaleString("en-US")}` : null,
      suggestion?.category ? `category: ${suggestion.category}` : null,
      suggestion?.style ? `style: ${suggestion.style}` : null,
      suggestion?.occasion ? `occasion: ${suggestion.occasion}` : null,
    ].filter(Boolean);

    return hints.length ? `${text}\n\nPreference hints: ${hints.join(", ")}.` : text;
  }, []);

  const runSearch = useCallback((text: string, suggestion?: Suggestion) => {
    const query = text.trim() || "Qixi gift";
    setModePanelOpen(false);
    setHasSearched(true);
    setResults(initialResults);
    chat.stop();
    chat.clearError();
    chat.setMessages([]);
    onActiveSectionChange("concierge-reply-section");
    void chat.sendMessage({ text: buildConciergePrompt(query, suggestion) });
  }, [buildConciergePrompt, chat, initialResults, onActiveSectionChange]);

  const submitSearch = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    runSearch(inputValue);
  }, [inputValue, runSearch]);

  const chooseSuggestion = useCallback((suggestion: Suggestion) => {
    setInputValue(suggestion.text);
    runSearch(suggestion.text, suggestion);
  }, [runSearch]);

  const chooseSku = useCallback((product: Product) => {
    const query = `Saint Laurent SKU ${product.sku} ${product.name}`;
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
    recommendationProducts: chatSnapshot.products,
    hasSearched,
    hasProductSearch: chatSnapshot.hasSearch,
    assistantReplyText: chatSnapshot.assistantText,
    thinkingCopy,
    isCurating,
    isAwaitingAssistant,
    isSearchingProducts,
    isChatBusy,
    chatErrorText: chatSnapshot.errorText,
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
