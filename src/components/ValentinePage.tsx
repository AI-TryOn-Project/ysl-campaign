"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import {
  EDITORIAL_ASSETS,
  FEATURED_PRODUCTS,
  PRODUCTS,
  STYLE_GUIDES,
  type Product,
  type StyleGuide,
} from "@/data/campaign";
import { SaintLaurentMark } from "./SaintLaurentMark";

type DrawerKind = "wishlist" | "bag";
type ChatMode = "need" | "style" | "occasion";

type Suggestion = {
  text: string;
  style?: string;
  occasion?: string;
  category?: string;
  budget?: number;
  recipient?: "her" | "him" | "neutral";
};

type SnapScene = {
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

const quickPrompts: Suggestion[] = [
  { text: "A gift for her under ¥10,000", recipient: "her", budget: 10000 },
  { text: "An elegant gift for him", recipient: "him", style: "polished-elegance" },
  { text: "A dinner-date look", occasion: "dinner" },
  { text: "A weekend escape edit", occasion: "weekend" },
];

const SNAP_SCENES: SnapScene[] = [
  {
    id: "gift-finder",
    eyebrow: "Qixi Gifts",
    placeholder: "What do you want to gift today?",
    skuProductIds: [FEATURED_PRODUCTS.her[0], FEATURED_PRODUCTS.him[0], FEATURED_PRODUCTS.her[1]].filter(Boolean),
  },
  {
    id: "ai-response-section",
    eyebrow: "AI Reply",
    placeholder: "Refine the brief before product search...",
    skuProductIds: [],
  },
  {
    id: "recommendations-section",
    eyebrow: "Function Call",
    placeholder: "Refine by SKU, budget, category, or occasion...",
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

const SNAP_SECTION_IDS = SNAP_SCENES.map((scene) => scene.id);
const YSL_CHAT_API_URL = process.env.NEXT_PUBLIC_YSL_CHAT_API_URL ?? "http://localhost:3000/api/public/ysl-chat";

type BackendYslProduct = {
  id: string;
  sku: string;
  name: string;
  gender: ProductGender;
  category: string;
  categoryLabel: string;
  price: number | null;
  image: string;
  detailUrl: string;
  summary: string;
  reason: string;
  material: string;
  styling: string;
  styleTags: string[];
  occasionTags: string[];
};

type BackendYslChatEvent =
  | { type: "assistant_text"; text: string }
  | { type: "tool_call"; name: string; arguments: Record<string, unknown> }
  | { type: "tool_result"; name: string; products: BackendYslProduct[]; count: number }
  | { type: "done" }
  | { type: "error"; error: string };

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

function Media({ guide, className = "" }: { guide: StyleGuide; className?: string }) {
  if (guide.mediaType === "video") {
    return (
      <video className={className} muted loop playsInline autoPlay poster={guide.poster}>
        <source src={guide.media} type="video/mp4" />
      </video>
    );
  }

  return <img className={className} src={guide.media || guide.image} alt={guide.title} />;
}

function BlurRevealText({
  as: Tag = "span",
  text,
  className = "",
  id,
}: {
  as?: "h1" | "h2" | "h3" | "p" | "span" | "strong";
  text: string;
  className?: string;
  id?: string;
}) {
  return (
    <Tag id={id} className={`letter-reveal ${className}`} aria-label={text}>
      {Array.from(text).map((char, index) => (
        <span
          aria-hidden="true"
          className="lr-char"
          key={`${char}-${index}`}
          style={{ "--char-index": index } as CSSProperties}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Tag>
  );
}

export function ValentinePage() {
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
  const [activeSection, setActiveSection] = useState("");
  const [reboundCue, setReboundCue] = useState<{ direction: "next" | "prev"; id: string } | null>(null);
  const wheelStateRef = useRef({
    delta: 0,
    locked: false,
    snapTimer: 0,
    lockTimer: 0,
    animationFrame: 0,
    reboundTimer: 0,
  });

  const activeScene = useMemo(
    () => SNAP_SCENES.find((scene) => scene.id === activeSection) ?? SNAP_SCENES[0],
    [activeSection],
  );

  const activeSceneProducts = useMemo(() => {
    if (activeScene.id === "recommendations-section") return results.slice(0, 4);
    const configured = byIds(activeScene.skuProductIds);
    return configured.length ? configured.slice(0, 4) : results.slice(0, 4);
  }, [activeScene, results]);

  useEffect(() => {
    document.documentElement.classList.add("valentine-snap-mode");
    return () => {
      document.documentElement.classList.remove("valentine-snap-mode");
    };
  }, []);

  useEffect(() => {
    const sections = SNAP_SECTION_IDS.map((id) => document.getElementById(id)).filter((node): node is HTMLElement =>
      Boolean(node),
    );
    if (!sections.length) return;

    let frame = 0;
    const syncActiveSection = () => {
      const viewportFocus = window.innerHeight * 0.46;
      const containing = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= viewportFocus && rect.bottom >= viewportFocus;
      });

      if (containing) {
        setActiveSection(containing.id);
        return;
      }

      const nearest = sections.reduce(
        (best, section) => {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top - viewportFocus);
          return distance < best.distance ? { id: section.id, distance } : best;
        },
        { id: sections[0].id, distance: Number.POSITIVE_INFINITY },
      );
      setActiveSection(nearest.id);
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(syncActiveSection);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target instanceof HTMLElement && visible.intersectionRatio >= 0.34) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: [0.22, 0.34, 0.5, 0.68], rootMargin: "-16% 0px -34% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", onScroll, { passive: true });
    syncActiveSection();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const sections = SNAP_SECTION_IDS.map((id) => document.getElementById(id)).filter((node): node is HTMLElement =>
      Boolean(node),
    );
    if (!sections.length) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const nearestIndex = () => {
      const viewportFocus = window.innerHeight * 0.46;
      const containingIndex = sections.findIndex((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= viewportFocus && rect.bottom >= viewportFocus;
      });
      if (containingIndex >= 0) return containingIndex;

      return sections.reduce(
        (best, section, index) => {
          const distance = Math.abs(section.getBoundingClientRect().top - viewportFocus);
          return distance < best.distance ? { index, distance } : best;
        },
        { index: 0, distance: Number.POSITIVE_INFINITY },
      ).index;
    };

    const animateScrollTo = (targetY: number, duration = 920) => {
      const state = wheelStateRef.current;
      if (state.animationFrame) window.cancelAnimationFrame(state.animationFrame);

      const startY = window.scrollY;
      const distance = targetY - startY;
      if (Math.abs(distance) < 2 || prefersReducedMotion) {
        window.scrollTo(0, targetY);
        state.animationFrame = 0;
        return;
      }

      const startTime = window.performance.now();
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);

      const tick = (now: number) => {
        const progress = Math.min(1, (now - startTime) / duration);
        window.scrollTo(0, startY + distance * easeOut(progress));

        if (progress < 1) {
          state.animationFrame = window.requestAnimationFrame(tick);
          return;
        }

        window.scrollTo(0, targetY);
        state.animationFrame = 0;
      };

      state.animationFrame = window.requestAnimationFrame(tick);
    };

    const snapToIndex = (index: number, duration = 920) => {
      const target = sections[Math.max(0, Math.min(sections.length - 1, index))];
      setActiveSection(target.id);
      const targetY = Math.round(target.getBoundingClientRect().top + window.scrollY);
      animateScrollTo(targetY, duration);
    };

    const shouldIgnoreWheel = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return false;
      return Boolean(target.closest(".chat-dock, .modal-backdrop, input, textarea, select"));
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || shouldIgnoreWheel(event.target)) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

      const state = wheelStateRef.current;
      const normalizedDelta = event.deltaMode === 1 ? event.deltaY * 16 : event.deltaY;
      const currentIndex = nearestIndex();
      const currentRect = sections[currentIndex].getBoundingClientRect();
      const canScrollInsideTallSection =
        currentRect.height > window.innerHeight * 1.08 &&
        ((normalizedDelta > 0 && currentRect.bottom > window.innerHeight + 96) ||
          (normalizedDelta < 0 && currentRect.top < -96));

      if (canScrollInsideTallSection) {
        state.delta = 0;
        return;
      }

      event.preventDefault();

      if (state.locked) return;

      window.clearTimeout(state.snapTimer);
      state.delta += normalizedDelta;

      const intentThreshold = Math.min(132, Math.max(92, window.innerHeight * 0.105));
      const hasStrongIntent = Math.abs(normalizedDelta) > 82 || Math.abs(state.delta) > intentThreshold;

      if (!hasStrongIntent) {
        setReboundCue({ id: sections[currentIndex].id, direction: normalizedDelta > 0 ? "next" : "prev" });
        window.clearTimeout(state.reboundTimer);
        state.reboundTimer = window.setTimeout(() => setReboundCue(null), 430);
        state.snapTimer = window.setTimeout(() => {
          state.delta = 0;
          snapToIndex(currentIndex, 460);
        }, 130);
        return;
      }

      const direction = state.delta > 0 ? 1 : -1;
      const nextIndex = Math.max(0, Math.min(sections.length - 1, currentIndex + direction));
      state.delta = 0;
      state.locked = true;
      snapToIndex(nextIndex);
      window.clearTimeout(state.lockTimer);
      state.lockTimer = window.setTimeout(() => {
        state.locked = false;
      }, 960);
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      const state = wheelStateRef.current;
      window.clearTimeout(state.snapTimer);
      window.clearTimeout(state.lockTimer);
      window.clearTimeout(state.reboundTimer);
      if (state.animationFrame) window.cancelAnimationFrame(state.animationFrame);
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  function showToast(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(""), 1600);
  }

  function addItem(kind: DrawerKind, product: Product) {
    if (kind === "wishlist") {
      setWishlist((current) => (current.includes(product.id) ? current : [...current, product.id]));
      showToast("Saved to wishlist");
      return;
    }

    setBag((current) => (current.includes(product.id) ? current : [...current, product.id]));
    showToast("Added to bag");
  }

  function removeItem(kind: DrawerKind, id: string) {
    if (kind === "wishlist") {
      setWishlist((current) => current.filter((item) => item !== id));
      return;
    }
    setBag((current) => current.filter((item) => item !== id));
  }

  function runSearch(text: string, suggestion?: Suggestion) {
    const query = text.trim() || "Qixi gift";
    const nextResults = curateProducts(query, suggestion);
    setThinkingCopy(getThinkingCopy(query, suggestion));
    setModePanelOpen(false);
    setIsCurating(true);
    window.setTimeout(() => {
      setResults(nextResults);
      setHasSearched(true);
      setIsCurating(false);
      setActiveSection("recommendations-section");
      document.getElementById("recommendations-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 720);
  }

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    runSearch(inputValue);
  }

  function chooseSuggestion(suggestion: Suggestion) {
    setInputValue(suggestion.text);
    runSearch(suggestion.text, suggestion);
  }

  function chooseSku(product: Product) {
    const query = `SKU ${product.sku} ${product.name}`;
    setInputValue(query);
    runSearch(query, {
      text: query,
      category: product.categoryLabel,
      recipient: product.gender === "men" ? "him" : "her",
    });
  }

  function sectionClass(id: string, className: string) {
    return [
      className,
      "snap-section",
      activeSection === id ? "is-active" : "",
      reboundCue?.id === id ? `is-rebounding rebound-${reboundCue.direction}` : "",
    ]
      .filter(Boolean)
      .join(" ");
  }

  const drawerProducts = byIds(drawer === "bag" ? bag : wishlist);

  return (
    <div className="valentine-shell">
      <header className="site-header site-header--dark">
        <div className="header-left">
          <button className="icon-button" type="button" aria-label="Open navigation">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 8h16M4 16h16" />
            </svg>
          </button>
          <a className="nav-link desktop-only" href="#campaign-section">
            Highlights
          </a>
          <a href="#collection-intro">Women</a>
          <a href="#gifts-for-him">Men</a>
          <a href="#gifts-for-her">Gifts</a>
          <a href="#style-guide-section">Style Guide</a>
          <a href="#gift-finder">Qixi Edit</a>
        </div>

        <Link className="wordmark header-brand" href="/" aria-label="Saint Laurent home">
          <SaintLaurentMark />
        </Link>

        <div className="header-right">
          <a className="nav-link desktop-only" href="#gift-finder">
            LA MAISON
          </a>
          <a className="nav-link desktop-only" href="#services-section">
            Store Locator
          </a>
          <a className="nav-link desktop-only" href="#services-section">
            Client Service
          </a>
          <button
            className="icon-button"
            type="button"
            aria-label="Search"
            onClick={() => {
              setModePanelOpen(true);
              document.getElementById("chat-input")?.focus();
            }}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M16.5 16.5 21 21" />
            </svg>
          </button>
          <button className="icon-button" type="button" aria-label="Wishlist" onClick={() => setDrawer("wishlist")}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.4 5.8c-1.7-2-4.6-1.9-6.3.1L12 8.3 9.9 5.9C8.2 3.9 5.3 3.8 3.6 5.8c-1.7 2-1.4 5 .6 6.8L12 20l7.8-7.4c2-1.8 2.3-4.8.6-6.8Z" />
            </svg>
            <span className={`badge ${wishlist.length ? "visible" : ""}`}>{wishlist.length}</span>
          </button>
          <button className="icon-button" type="button" aria-label="Bag" onClick={() => setDrawer("bag")}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 8h12l-1 13H7L6 8Z" />
              <path d="M9 8a3 3 0 0 1 6 0" />
            </svg>
            <span className={`badge ${bag.length ? "visible" : ""}`}>{bag.length}</span>
          </button>
        </div>
      </header>

      <main className="valentine-landing">
        <section
          className={sectionClass("gift-finder", "bc-guide bc-hero-panel vl-hero in-view")}
          id="gift-finder"
          aria-label="Saint Laurent welcome"
        >
          <img className="bc-panel-bg" src={EDITORIAL_ASSETS.valentineHero} alt="" />
          <div className="bc-panel-shade" />
          <div className="bc-hero-copy">
            <p className="bc-guide-kicker bc-reveal">Saint Laurent AI Gift Concierge</p>
            <BlurRevealText as="h1" className="bc-guide-title bc-reveal" text="Welcome to Qixi Gifts" />
            <p className="bc-guide-copy bc-reveal">
              Saint Laurent tailoring, black-and-gold details, and Qixi gifting inspiration.
            </p>
            <p className="bc-guide-kicker bc-reveal">Scroll to explore</p>
          </div>
        </section>

        <section
          className={sectionClass("style-guide-section", "vl-style-guide vl-reveal in-view")}
          id="style-guide-section"
          aria-label="Style Guide"
        >
          <div className="vl-style-guide-head">
            <p className="vl-eyebrow">Editorial Worlds</p>
            <BlurRevealText as="h2" className="vl-headline" text="Style Guide" />
            <p className="vl-subhead vl-subhead--light">Choose the mood before the product.</p>
          </div>
          <div className="vl-style-guide-track" role="list">
            {STYLE_GUIDES.map((guide) => (
              <button
                key={guide.id}
                className="vl-sg-card style-guide-card"
                type="button"
                role="listitem"
                aria-label={`Open ${guide.title} style guide`}
                onClick={() => setSelectedGuide(guide)}
              >
                <div className="vl-sg-card-media">
                  <div className="vl-sg-card-parallax">
                    <Media guide={guide} className="style-guide-media" />
                  </div>
                </div>
                <span className="vl-sg-card-shade" aria-hidden="true" />
                <span className="vl-sg-card-glow" aria-hidden="true" />
                <span className="vl-sg-card-copy">
                  <small className="vl-sg-card-kicker">Style Guide</small>
                  <strong className="vl-sg-card-title">{guide.title}</strong>
                  <span className="vl-sg-card-desc">{guide.tagline}</span>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section
          className={sectionClass("recommendations-section", "section recommendations-section")}
          id="recommendations-section"
          aria-label="Recommended products"
        >
          <div className="section-inner">
            <div className="section-head">
              <p className="kicker">{hasSearched ? "Selected for you" : "Qixi starter edit"}</p>
              <BlurRevealText as="h2" text={thinkingCopy} />
            </div>
            <div className="product-grid">
              {results.slice(0, 4).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onBag={() => addItem("bag", product)}
                  onWishlist={() => addItem("wishlist", product)}
                  onDetail={() => setSelectedProduct(product)}
                />
              ))}
            </div>
            <div className="refinement-section" aria-label="Refine recommendations">
              <p>Quick filters</p>
              {quickPrompts.map((prompt) => (
                <button className="refinement-btn" key={prompt.text} type="button" onClick={() => chooseSuggestion(prompt)}>
                  {prompt.text}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section
          className={sectionClass("campaign-section", "vl-campaign vl-reveal in-view")}
          id="campaign-section"
          aria-label="Qixi campaign"
        >
          <div className="vl-campaign-media">
            <img src={EDITORIAL_ASSETS.valentineCampaign} alt="Saint Laurent Qixi gifting" />
          </div>
          <div className="vl-campaign-copy">
            <p className="vl-campaign-kicker">Qixi Gifts, Reimagined</p>
            <BlurRevealText as="h2" className="vl-headline" text="Dare to Love with Desire" />
            <p className="vl-body">
              Confident. Sophisticated. Undeniably alluring. This Qixi, express devotion through Saint Laurent
              silhouettes, sculptural bags, silk textures, and gold-toned details.
            </p>
            <a className="vl-cta vl-cta--dark" href="#collection-intro">
              Discover
            </a>
          </div>
        </section>

        <section
          className={sectionClass("collection-intro", "vl-collection vl-reveal in-view")}
          id="collection-intro"
          aria-label="The Qixi Gift Edit"
        >
          <p className="vl-eyebrow">The Collection</p>
          <BlurRevealText as="h2" className="vl-headline" text="The Qixi Gift Edit" />
          <p className="vl-subhead vl-subhead--light">
            A curated selection of after-dark silhouettes, iconic accessories, and unforgettable gestures.
          </p>
        </section>

        <GiftSection
          id="gifts-for-her"
          eyebrow="For Her"
          title="Luxurious Gifts, Undeniably Hers"
          body="Transform a simple gift into a grand gesture with sculptural bags, silk textures, and gold-toned details."
          products={featuredHer}
          tone="light"
          active={activeSection === "gifts-for-her"}
          reboundDirection={reboundCue?.id === "gifts-for-her" ? reboundCue.direction : null}
          onBag={(product) => addItem("bag", product)}
          onWishlist={(product) => addItem("wishlist", product)}
          onDetail={setSelectedProduct}
        />

        <GiftSection
          id="gifts-for-him"
          eyebrow="For Him"
          title="Elegant Gifts, Unmistakably His"
          body="For the one drawn to sharp tailoring, black leather, and quiet confidence."
          products={featuredHim}
          tone="dark"
          active={activeSection === "gifts-for-him"}
          reboundDirection={reboundCue?.id === "gifts-for-him" ? reboundCue.direction : null}
          onBag={(product) => addItem("bag", product)}
          onWishlist={(product) => addItem("wishlist", product)}
          onDetail={setSelectedProduct}
        />

        <section
          className={sectionClass("statement-section", "vl-statement vl-reveal in-view")}
          id="statement-section"
          aria-label="Unapologetic love"
        >
          <img className="vl-statement-bg" src={EDITORIAL_ASSETS.valentineStatement} alt="" />
          <div className="vl-statement-shade" />
          <div className="vl-statement-copy">
            <p className="vl-eyebrow">Qixi 2026</p>
            <BlurRevealText as="h2" className="vl-headline" text="Unapologetic Love in Every Gift" />
          </div>
        </section>

        <section
          className={sectionClass("services-section", "vl-services vl-reveal in-view")}
          id="services-section"
          aria-label="Exclusive services"
        >
          <div className="vl-services-inner">
            <BlurRevealText as="h2" className="vl-headline" text="Our Exclusive Services" />
            <div className="vl-service-grid">
              <article className="vl-service-card">
                <h3>Gift with Love</h3>
                <p>
                  Elevate Qixi gifting with Saint Laurent luxury wrapping and a handwritten gift note, each gesture
                  composed with precision.
                </p>
              </article>
              <article className="vl-service-card">
                <h3>Make It Yours</h3>
                <p>
                  Personalize selected accessories with monogram-inspired detailing and engraving-style finishing for
                  an unmistakably personal gift.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          className={sectionClass("membership-cta", "vl-membership vl-reveal in-view")}
          id="membership-cta"
          aria-label="Join the Saint Laurent experience"
        >
          <p className="vl-eyebrow">Saint Laurent Experience</p>
          <BlurRevealText as="h2" className="vl-headline" text="Join the Saint Laurent Experience" />
          <p className="vl-subhead vl-subhead--light">
            Unlock a more personal gifting journey through curated recommendations.
          </p>
          <button
            className="vl-cta vl-cta--outline"
            type="button"
            onClick={() => {
              setModePanelOpen(true);
              document.getElementById("chat-input")?.focus();
            }}
          >
            Start with the Concierge
          </button>
        </section>
      </main>

      <footer className="site-footer valentine-footer">
        <div className="footer-row">
          <span className="footer-region">Shipping to: Mainland China</span>
          <span className="footer-sep" aria-hidden="true" />
          <a href="#services-section">Client Service</a>
          <a href="#services-section">Delivery</a>
          <a href="#services-section">Returns</a>
          <a href="#services-section">Contact us</a>
          <a href="#services-section">Track order</a>
          <span className="footer-sep" aria-hidden="true" />
          <a href="#services-section">Store Locator</a>
          <a href="#services-section">Privacy policy</a>
        </div>
        <div className="footer-legal">
          <span>© 2026 Saint Laurent Qixi Campaign Demo</span>
          <span>Next.js editorial commerce prototype</span>
        </div>
      </footer>

      <form
        className={`chat-dock ${activeScene.productScene ? "product-scene-dock" : ""}`}
        onSubmit={submitSearch}
        aria-label="Qixi gift concierge input"
      >
        <div className={`chat-mode-panel ${modePanelOpen ? "open has-mode" : ""}`} aria-hidden={!modePanelOpen}>
          <p className="chat-mode-kicker">Saint Laurent AI Gift Concierge</p>
          <div className="chat-mode-tabs" role="tablist" aria-label="Concierge modes">
            {(Object.keys(CHATBOT_CONFIG) as ChatMode[]).map((mode) => (
              <button
                key={mode}
                type="button"
                role="tab"
                aria-selected={activeMode === mode}
                className={`chat-mode-tab ${activeMode === mode ? "active" : ""}`}
                onClick={() => setActiveMode(mode)}
              >
                {CHATBOT_CONFIG[mode].label}
              </button>
            ))}
          </div>
          <div className="chat-mode-chips">
            {CHATBOT_CONFIG[activeMode].suggestions.map((suggestion) => (
              <button className="chat-suggestion-chip" key={suggestion.text} type="button" onClick={() => chooseSuggestion(suggestion)}>
                {suggestion.text}
              </button>
            ))}
          </div>
        </div>

        <div className={`chat-concierge-bubble ${isCurating ? "visible" : ""}`} aria-hidden={!isCurating}>
          <p className="chat-concierge-label">Saint Laurent Concierge</p>
          <p className="chat-concierge-message">{thinkingCopy}</p>
        </div>

        <div className={`chat-bar chat-bar-fixed ${activeScene.productScene ? "product-scene" : ""}`}>
          <div className="chat-eyebrow">
            <span className="chat-scene-copy" key={activeScene.eyebrow}>
              {activeScene.eyebrow}
            </span>
          </div>
          <div className="chat-main">
            <button
              className="chat-action"
              type="button"
              aria-label="Open concierge modes"
              aria-expanded={modePanelOpen}
              onClick={() => setModePanelOpen((open) => !open)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <div className="bar-input-wrap">
              <input
                id="chat-input"
                className="chat-input"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder={activeScene.placeholder}
              />
              {!inputValue ? (
                <div className="bar-placeholder">
                  <span className="chat-scene-copy" key={activeScene.placeholder}>
                    {activeScene.placeholder}
                  </span>
                </div>
              ) : null}
            </div>
            <button className="chat-action send-action" type="submit" aria-label="Send recommendation request">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 19V5" />
                <path d="m5 12 7-7 7 7" />
              </svg>
            </button>
          </div>
          <div className="chat-sku-strip" aria-label="Visible page SKUs">
            <span>SKU</span>
            {activeSceneProducts.slice(0, 4).map((product) => (
              <button key={product.id} type="button" title={product.name} onClick={() => chooseSku(product)}>
                {product.sku}
              </button>
            ))}
          </div>
        </div>
      </form>

      <div className={`curating-overlay ${isCurating ? "open" : ""}`} aria-hidden={!isCurating} aria-live="polite">
        <div className="curating-inner">
          <SaintLaurentMark className="curating-wordmark" />
          <p className="curating-copy">
            Curating your <em>Saint Laurent</em> edit...
          </p>
        </div>
      </div>

      {toast ? <div className="toast">{toast}</div> : null}

      {drawer ? (
        <Drawer
          kind={drawer}
          products={drawerProducts}
          onClose={() => setDrawer(null)}
          onRemove={(id) => removeItem(drawer, id)}
          onDetail={setSelectedProduct}
        />
      ) : null}

      {selectedProduct ? (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onBag={() => addItem("bag", selectedProduct)}
          onWishlist={() => addItem("wishlist", selectedProduct)}
        />
      ) : null}

      {selectedGuide ? (
        <StyleGuideModal
          guide={selectedGuide}
          onClose={() => setSelectedGuide(null)}
          onDetail={setSelectedProduct}
          onBag={(product) => addItem("bag", product)}
        />
      ) : null}
    </div>
  );
}

function ProductCard({
  product,
  onBag,
  onWishlist,
  onDetail,
}: {
  product: Product;
  onBag: () => void;
  onWishlist: () => void;
  onDetail: () => void;
}) {
  const tags = [...product.styleTags, ...product.occasionTags].slice(0, 3);

  return (
    <article className="product-card">
      <button className="product-image" type="button" onClick={onDetail}>
        <img src={product.image} alt={product.name} loading="lazy" />
      </button>
      <div className="product-meta">
        <p className="product-kicker">{product.categoryLabel}</p>
        <h3 className="product-name">{product.name}</h3>
        <span className="product-price">{money(product.price)}</span>
        <div className="tag-row">
          {tags.map((tag) => (
            <small className="tag" key={tag}>
              {labelTag(tag)}
            </small>
          ))}
        </div>
        <p className="reason">{product.reason}</p>
        <div className="card-actions">
          <button type="button" onClick={onWishlist}>
            Save
          </button>
          <button type="button" onClick={onBag}>
            Add to bag
          </button>
          <button type="button" onClick={onDetail}>
            Details
          </button>
        </div>
      </div>
    </article>
  );
}

function GiftSection({
  id,
  eyebrow,
  title,
  body,
  products,
  tone,
  active,
  reboundDirection,
  onBag,
  onWishlist,
  onDetail,
}: {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  products: Product[];
  tone: "light" | "dark";
  active: boolean;
  reboundDirection: "next" | "prev" | null;
  onBag: (product: Product) => void;
  onWishlist: (product: Product) => void;
  onDetail: (product: Product) => void;
}) {
  const sectionClass =
    tone === "dark" ? "vl-gifts vl-gifts--him vl-reveal in-view" : "vl-gifts vl-gifts--her vl-reveal in-view";

  return (
    <section
      className={`${sectionClass} snap-section ${active ? "is-active" : ""} ${
        reboundDirection ? `is-rebounding rebound-${reboundDirection}` : ""
      }`}
      id={id}
      aria-label={title}
    >
      <div className="vl-gifts-inner">
        <div className="vl-gifts-head">
          <p className={`vl-eyebrow ${tone === "light" ? "vl-eyebrow--dark" : ""}`}>{eyebrow}</p>
          <BlurRevealText as="h2" className="vl-headline" text={title} />
          <p className="vl-body">{body}</p>
        </div>
        <div className="vl-edit-row">
          {products.map((product) => (
            <article className="vl-edit-card" key={product.id}>
              <button className="vl-edit-card-link" type="button" onClick={() => onDetail(product)}>
                <div className="vl-edit-card-media">
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <div className="vl-edit-card-copy">
                  <span className="vl-edit-kicker">{product.categoryLabel}</span>
                  <h3>{product.name}</h3>
                  <p className="vl-edit-price">{money(product.price)}</p>
                </div>
              </button>
              <div className="vl-edit-actions">
                <button type="button" onClick={() => onWishlist(product)}>
                  Save
                </button>
                <button type="button" onClick={() => onBag(product)}>
                  Add to bag
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Drawer({
  kind,
  products,
  onClose,
  onRemove,
  onDetail,
}: {
  kind: DrawerKind;
  products: Product[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onDetail: (product: Product) => void;
}) {
  return (
    <div className="modal-backdrop" role="presentation">
      <aside className="drawer-panel" role="dialog" aria-modal="true" aria-label={kind === "bag" ? "Shopping bag" : "Wishlist"}>
        <header>
          <h2>{kind === "bag" ? "Shopping Bag" : "Wishlist"}</h2>
          <button type="button" onClick={onClose} aria-label="Close drawer">
            ×
          </button>
        </header>
        {products.length ? (
          <div className="drawer-list">
            {products.map((product) => (
              <article key={product.id} className="drawer-item">
                <button type="button" onClick={() => onDetail(product)}>
                  <img src={product.image} alt={product.name} />
                </button>
                <div>
                  <p>{product.categoryLabel}</p>
                  <h3>{product.name}</h3>
                  <span>{money(product.price)}</span>
                  <button type="button" onClick={() => onRemove(product.id)}>
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="empty-state">No pieces yet.</p>
        )}
      </aside>
    </div>
  );
}

function ProductDetail({
  product,
  onClose,
  onBag,
  onWishlist,
}: {
  product: Product;
  onClose: () => void;
  onBag: () => void;
  onWishlist: () => void;
}) {
  return (
    <div className="modal-backdrop modal-backdrop--center" role="presentation">
      <article className="detail-modal" role="dialog" aria-modal="true" aria-labelledby="detail-title">
        <div className="detail-modal__media">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="detail-modal__copy">
          <button className="modal-close" type="button" onClick={onClose} aria-label="Close product detail">
            ×
          </button>
          <p>{product.categoryLabel}</p>
          <h2 id="detail-title">{product.name}</h2>
          <strong>{money(product.price)}</strong>
          <div className="tag-row">
            {[...product.styleTags, ...product.occasionTags].slice(0, 5).map((tag) => (
              <small key={tag}>{labelTag(tag)}</small>
            ))}
          </div>
          <section>
            <h3>Materials</h3>
            <p>{product.material}</p>
          </section>
          <section>
            <h3>Styling</h3>
            <p>{product.styling}</p>
          </section>
          <section>
            <h3>Why it fits</h3>
            <p>{product.reason}</p>
          </section>
          <div className="detail-modal__actions">
            <button type="button" onClick={onWishlist}>
              Save to wishlist
            </button>
            <button type="button" onClick={onBag}>
              Add to bag
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

function StyleGuideModal({
  guide,
  onClose,
  onDetail,
  onBag,
}: {
  guide: StyleGuide;
  onClose: () => void;
  onDetail: (product: Product) => void;
  onBag: (product: Product) => void;
}) {
  const products = byIds(guide.productIds);

  return (
    <div className="modal-backdrop modal-backdrop--center" role="presentation">
      <article className="style-modal" role="dialog" aria-modal="true" aria-labelledby="style-guide-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close style guide">
          ×
        </button>
        <div className="style-modal__hero">
          <Media guide={guide} className="style-modal__media" />
          <div>
            <p>Saint Laurent Style Guide</p>
            <h2 id="style-guide-title">{guide.title}</h2>
            <span>{guide.tagline}</span>
          </div>
        </div>
        <div className="style-modal__body">
          <section>
            <h3>Styling Notes</h3>
            <p>{guide.stylingNotes}</p>
          </section>
          <section>
            <h3>Curated Pieces</h3>
            <div className="style-modal__products">
              {products.map((product) => (
                <article key={product.id}>
                  <button type="button" onClick={() => onDetail(product)}>
                    <img src={product.image} alt={product.name} />
                  </button>
                  <div>
                    <p>{product.categoryLabel}</p>
                    <h4>{product.name}</h4>
                    <span>{money(product.price)}</span>
                    <button type="button" onClick={() => onBag(product)}>
                      Add to bag
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
