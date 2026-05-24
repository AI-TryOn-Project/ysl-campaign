"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
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
  const haystack = [product.name, product.description, product.material, product.categoryLabel, product.category]
    .join(" ")
    .toLowerCase();

  let score = 0;

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
  const [toast, setToast] = useState("");

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
    setResults(nextResults);
    setHasSearched(true);
    setThinkingCopy(getThinkingCopy(query, suggestion));
    setModePanelOpen(false);
    window.setTimeout(() => {
      document.getElementById("recommendations-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  }

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    runSearch(inputValue);
  }

  function chooseSuggestion(suggestion: Suggestion) {
    setInputValue(suggestion.text);
    runSearch(suggestion.text, suggestion);
  }

  const drawerProducts = byIds(drawer === "bag" ? bag : wishlist);

  return (
    <div className="valentine-shell">
      <header className="site-header site-header--dark">
        <nav className="header-nav header-nav--left" aria-label="Valentine primary navigation">
          <a href="#style-guide-section">Style Guide</a>
          <a href="#collection-intro">Women</a>
          <a href="#gifts-for-him">Men</a>
          <a href="#gifts-for-her">Gifts</a>
          <a href="#gift-finder">Qixi Edit</a>
        </nav>

        <Link className="header-brand" href="/" aria-label="Saint Laurent home">
          <SaintLaurentMark />
        </Link>

        <nav className="header-nav header-nav--right" aria-label="Valentine actions">
          <a href="#services-section">Client Service</a>
          <button type="button" onClick={() => setDrawer("wishlist")}>
            Wishlist <span>{wishlist.length}</span>
          </button>
          <button type="button" onClick={() => setDrawer("bag")}>
            Bag <span>{bag.length}</span>
          </button>
        </nav>
      </header>

      <main>
        <section className="valentine-hero" id="gift-finder" aria-label="Saint Laurent Qixi welcome">
          <img src={EDITORIAL_ASSETS.valentineHero} alt="" />
          <div className="valentine-hero__shade" />
          <div className="valentine-hero__copy">
            <p>Saint Laurent AI Gift Concierge</p>
            <h1>Welcome to Qixi Gifts</h1>
            <span>Tailoring, black leather, sculptural bags, and summer-night gestures.</span>
          </div>
        </section>

        <section className="style-guide-section" id="style-guide-section" aria-label="Style Guide">
          <div className="section-heading">
            <p>Style Guide</p>
            <h2>Choose the mood before the product.</h2>
          </div>
          <div className="style-guide-track" role="list">
            {STYLE_GUIDES.map((guide) => (
              <button
                key={guide.id}
                className="style-guide-card"
                type="button"
                role="listitem"
                aria-label={`Open ${guide.title} style guide`}
                onClick={() => setSelectedGuide(guide)}
              >
                <Media guide={guide} className="style-guide-card__media" />
                <span className="style-guide-card__shade" aria-hidden="true" />
                <span className="style-guide-card__copy">
                  <small>Style Guide</small>
                  <strong>{guide.title}</strong>
                  <span>{guide.tagline}</span>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="recommendations-section" id="recommendations-section" aria-label="Recommended products">
          <div className="section-heading">
            <p>{hasSearched ? "Selected for you" : "Qixi starter edit"}</p>
            <h2>{thinkingCopy}</h2>
          </div>
          <div className="product-grid">
            {results.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onBag={() => addItem("bag", product)}
                onWishlist={() => addItem("wishlist", product)}
                onDetail={() => setSelectedProduct(product)}
              />
            ))}
          </div>
          <div className="refinement-row" aria-label="Refine recommendations">
            {quickPrompts.map((prompt) => (
              <button key={prompt.text} type="button" onClick={() => chooseSuggestion(prompt)}>
                {prompt.text}
              </button>
            ))}
          </div>
        </section>

        <section className="campaign-block" id="campaign-section" aria-label="Qixi campaign">
          <div className="campaign-block__media">
            <img src={EDITORIAL_ASSETS.valentineCampaign} alt="Saint Laurent Qixi gifting" />
          </div>
          <div className="campaign-block__copy">
            <p>Qixi Gifts, Reimagined</p>
            <h2>Dare to Love with Desire</h2>
            <span>
              Confident, sophisticated, and unmistakably Saint Laurent. This edit turns Qixi intent into a
              shoppable fashion journey.
            </span>
            <a href="#collection-intro">Discover</a>
          </div>
        </section>

        <section className="collection-intro" id="collection-intro" aria-label="The Qixi Gift Edit">
          <p>The Collection</p>
          <h2>The Qixi Gift Edit</h2>
          <span>A curated selection of after-dark silhouettes, iconic accessories, and unforgettable gestures.</span>
        </section>

        <GiftSection
          id="gifts-for-her"
          eyebrow="For Her"
          title="Luxurious Gifts, Undeniably Hers"
          body="Transform a simple gift into a grand gesture with sculptural bags, silk textures, and gold-toned details."
          products={featuredHer}
          tone="light"
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
          onBag={(product) => addItem("bag", product)}
          onWishlist={(product) => addItem("wishlist", product)}
          onDetail={setSelectedProduct}
        />

        <section className="statement-section" aria-label="Unapologetic love">
          <img src={EDITORIAL_ASSETS.valentineStatement} alt="" />
          <div>
            <p>Qixi 2026</p>
            <h2>Unapologetic Love in Every Gift</h2>
            <span>For brand teams, the flow shows traffic intent, assisted discovery, and conversion-ready moments.</span>
          </div>
        </section>

        <section className="services-section" id="services-section" aria-label="Exclusive services">
          <div className="section-heading">
            <p>Services</p>
            <h2>Our Exclusive Services</h2>
          </div>
          <div className="service-grid">
            <article>
              <h3>Complimentary Gift Packaging</h3>
              <p>Campaign-specific wrapping and gifting note moments for seasonal retail activations.</p>
            </article>
            <article>
              <h3>AI-Assisted Clienteling</h3>
              <p>Each recommendation can be attributed to need, mood, category, and assisted commerce intent.</p>
            </article>
            <article>
              <h3>Wishlist and Bag Signals</h3>
              <p>Lightweight interactions make the demo useful for campaign analytics and commercial storytelling.</p>
            </article>
          </div>
        </section>
      </main>

      <form className="chat-dock" onSubmit={submitSearch} aria-label="Qixi gift concierge input">
        {modePanelOpen ? (
          <div className="chat-mode-panel">
            <div className="chat-mode-tabs" role="tablist" aria-label="Concierge modes">
              {(Object.keys(CHATBOT_CONFIG) as ChatMode[]).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  role="tab"
                  aria-selected={activeMode === mode}
                  className={activeMode === mode ? "is-active" : ""}
                  onClick={() => setActiveMode(mode)}
                >
                  {CHATBOT_CONFIG[mode].label}
                </button>
              ))}
            </div>
            <div className="chat-suggestion-grid">
              {CHATBOT_CONFIG[activeMode].suggestions.map((suggestion) => (
                <button key={suggestion.text} type="button" onClick={() => chooseSuggestion(suggestion)}>
                  {suggestion.text}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        <div className="chat-bar">
          <button
            className="chat-plus"
            type="button"
            aria-label="Open concierge modes"
            aria-expanded={modePanelOpen}
            onClick={() => setModePanelOpen((open) => !open)}
          >
            +
          </button>
          <label>
            <span>Qixi Gifts</span>
            <input
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="What do you want to gift today?"
            />
          </label>
          <button className="chat-submit" type="submit" aria-label="Send recommendation request">
            →
          </button>
        </div>
      </form>

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
      <button className="product-card__image" type="button" onClick={onDetail}>
        <img src={product.image} alt={product.name} loading="lazy" />
      </button>
      <div className="product-card__copy">
        <p>{product.categoryLabel}</p>
        <h3>{product.name}</h3>
        <span>{money(product.price)}</span>
        <div className="tag-row">
          {tags.map((tag) => (
            <small key={tag}>{labelTag(tag)}</small>
          ))}
        </div>
        <p className="product-card__reason">{product.reason}</p>
        <div className="product-card__actions">
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
  onBag: (product: Product) => void;
  onWishlist: (product: Product) => void;
  onDetail: (product: Product) => void;
}) {
  return (
    <section className={`gift-section gift-section--${tone}`} id={id} aria-label={title}>
      <div className="gift-section__head">
        <p>{eyebrow}</p>
        <h2>{title}</h2>
        <span>{body}</span>
      </div>
      <div className="gift-row">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onBag={() => onBag(product)}
            onWishlist={() => onWishlist(product)}
            onDetail={() => onDetail(product)}
          />
        ))}
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
