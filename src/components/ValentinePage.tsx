"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { PRODUCTS, type Product } from "@/data/campaign";
import { openProductDetail } from "@/lib/product-link";
import { SaintLaurentMark } from "./SaintLaurentMark";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/lib/use-language";
import { i18n } from "@/lib/i18n";
import { ValentineProvider, useValentine } from "./valentine/ValentineContext";
import { ChatDock } from "./valentine/ui/ChatDock";
import { Drawer } from "./valentine/ui/Drawer";
import { ProductDetailModal } from "./valentine/ui/ProductDetailModal";
import { StyleGuideModal } from "./valentine/ui/StyleGuideModal";
import { HeroCampaign } from "./valentine/redesign/HeroCampaign";
import { SelectedForQixi } from "./valentine/redesign/SelectedForQixi";
import { EditorialCategory } from "./valentine/redesign/EditorialCategory";
import { CollectionOverlay } from "./valentine/redesign/CollectionOverlay";
import { ConciergeResultsOverlay } from "./valentine/redesign/ConciergeResultsOverlay";
import { SaintLaurentFooter } from "./valentine/redesign/SaintLaurentFooter";

const HERS_IMAGE = "/assets/editorial/saint-laurent-wsummer26-lookbook-4x5-20.jpg";
const HIS_IMAGE = "/assets/editorial/saint-laurent-lb-mspring26-ecom-2x3-32-a.jpg";

type CollectionView = "her" | "him" | null;

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openStylist(setModePanelOpen: (open: boolean) => void) {
  setModePanelOpen(true);
  window.setTimeout(() => document.getElementById("chat-input")?.focus(), 60);
}

function TopBar({ onOpenCollection }: { onOpenCollection: (view: CollectionView) => void }) {
  const { wishlist, bag, setDrawer, setModePanelOpen } = useValentine();
  const { lang } = useLanguage();
  const T = i18n[lang];

  return (
    <header className="vl-ed-topbar">
      <nav className="vl-ed-nav vl-ed-nav--left" aria-label="Primary">
        <button className="vl-ed-navlink" type="button" onClick={() => scrollToId("highlights")}>
          {T.highlights}
        </button>
        <button className="vl-ed-navlink" type="button" onClick={() => onOpenCollection("her")}>
          {T.women}
        </button>
        <button className="vl-ed-navlink" type="button" onClick={() => onOpenCollection("him")}>
          {T.men}
        </button>
        <button className="vl-ed-navlink" type="button" onClick={() => scrollToId("gifts")}>
          {T.gifts}
        </button>
      </nav>

      <Link className="vl-ed-brand" href="/" aria-label="Saint Laurent home">
        <SaintLaurentMark />
      </Link>

      <div className="vl-ed-nav vl-ed-nav--right">
        <button className="vl-ed-navlink vl-ed-navlink--minor" type="button" onClick={() => scrollToId("highlights")}>
          {T.laMaison}
        </button>
        <button className="vl-ed-navlink vl-ed-navlink--minor" type="button" onClick={() => scrollToId("site-footer")}>
          {T.services}
        </button>
        <button className="vl-ed-navlink vl-ed-navlink--minor" type="button" onClick={() => openStylist(setModePanelOpen)}>
          {T.login}
        </button>
        <button className="vl-ed-icon" type="button" aria-label="Search with the AI Stylist" onClick={() => openStylist(setModePanelOpen)}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M16.5 16.5 21 21" />
          </svg>
        </button>
        <button className="vl-ed-icon" type="button" aria-label="Wishlist" onClick={() => setDrawer("wishlist")}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.4 5.8c-1.7-2-4.6-1.9-6.3.1L12 8.3 9.9 5.9C8.2 3.9 5.3 3.8 3.6 5.8c-1.7 2-1.4 5 .6 6.8L12 20l7.8-7.4c2-1.8 2.3-4.8.6-6.8Z" />
          </svg>
          <span className={`vl-ed-badge ${wishlist.length ? "is-visible" : ""}`}>{wishlist.length}</span>
        </button>
        <button className="vl-ed-icon" type="button" aria-label="Bag" onClick={() => setDrawer("bag")}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 8h12l-1 13H7L6 8Z" />
            <path d="M9 8a3 3 0 0 1 6 0" />
          </svg>
          <span className={`vl-ed-badge ${bag.length ? "is-visible" : ""}`}>{bag.length}</span>
        </button>
      </div>
    </header>
  );
}

function CampaignHeader({ onOpenCollection }: { onOpenCollection: (view: CollectionView) => void }) {
  const { lang } = useLanguage();
  const T = i18n[lang];
  return (
    <div className="vl-ed-campaign-header">
      <p className="vl-ed-campaign-title">{T.campaignTitle}</p>
    </div>
  );
}

function SeamlessLoadingVideo() {
  return (
    <video autoPlay muted playsInline preload="auto">
      <source src="/loading-ai-stylist-new.mp4" type="video/mp4" />
    </video>
  );
}

function ValentineOverlays() {
  const {
    drawer,
    drawerProducts,
    selectedProduct,
    selectedGuide,
    toast,
    isAwaitingAssistant,
    isSearchingProducts,
    isChatBusy,
    recommendationProducts,
    setDrawer,
    removeItem,
    setSelectedProduct,
    setSelectedGuide,
    addItem,
  } = useValentine();

  const isLoading = (isAwaitingAssistant || isSearchingProducts) && recommendationProducts.length === 0;

  // Latch: once products arrive, block the overlay from coming back
  // (the AI SDK may briefly toggle loading states while finalising the stream).
  // Reset the latch only when a genuinely new search starts (chat busy + no products yet).
  const [resultsLatch, setResultsLatch] = useState(false);
  useEffect(() => {
    if (recommendationProducts.length > 0) setResultsLatch(true);
  }, [recommendationProducts.length]);
  useEffect(() => {
    if (isChatBusy && recommendationProducts.length === 0) setResultsLatch(false);
  }, [isChatBusy, recommendationProducts.length]);

  const shouldLoad = isLoading && !resultsLatch;

  // Keep overlay mounted during fade-out so unmount doesn't cause a flash.
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayFading, setOverlayFading] = useState(false);

  useEffect(() => {
    if (shouldLoad) {
      setOverlayVisible(true);
      setOverlayFading(false);
    } else if (overlayVisible) {
      setOverlayFading(true);
      const t = setTimeout(() => {
        setOverlayVisible(false);
        setOverlayFading(false);
      }, 500);
      return () => clearTimeout(t);
    }
  }, [shouldLoad]);

  return (
    <>
      <ConciergeResultsOverlay />
      <ChatDock />

      {overlayVisible && (
        <div
          className={`loading-video-overlay${overlayFading ? " is-fading" : ""}`}
          aria-label="AI is curating your selection"
          aria-live="polite"
        >
          <SeamlessLoadingVideo />
        </div>
      )}

      {toast ? <div className="toast">{toast}</div> : null}

      {drawer ? (
        <Drawer
          kind={drawer}
          products={drawerProducts}
          onClose={() => setDrawer(null)}
          onRemove={(id) => removeItem(drawer, id)}
          onDetail={openProductDetail}
        />
      ) : null}

      {selectedProduct ? (
        <ProductDetailModal
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
          onDetail={openProductDetail}
          onBag={(product) => addItem("bag", product)}
        />
      ) : null}
    </>
  );
}

function ValentineExperience() {
  const { featuredHer, featuredHim } = useValentine();
  const [collection, setCollection] = useState<CollectionView>(null);
  const { lang } = useLanguage();
  const T = i18n[lang];

  const womenProducts = useMemo(() => PRODUCTS.filter((p) => p.gender === "women"), []);
  const menProducts = useMemo(() => PRODUCTS.filter((p) => p.gender === "men"), []);
  const qixiSelection = useMemo<Product[]>(
    () => [...featuredHer.slice(0, 3), ...featuredHim.slice(0, 3)],
    [featuredHer, featuredHim],
  );

  const onDetail = (product: Product) => openProductDetail(product);

  return (
    <>
      <LanguageToggle />
      <TopBar onOpenCollection={setCollection} />
      <CampaignHeader onOpenCollection={setCollection} />

      <main className="vl-ed-main">
        <HeroCampaign />
        <SelectedForQixi products={qixiSelection} onDetail={onDetail} title={T.selectedForQixi} />
        <EditorialCategory
          id="qixi-hers"
          image={HERS_IMAGE}
          imageAlt="Saint Laurent women's Qixi campaign"
          title={T.qixiHers}
          products={womenProducts.slice(0, 3)}
          onView={() => setCollection("her")}
          onDetail={onDetail}
          viewLabel={T.view}
        />
        <EditorialCategory
          id="qixi-his"
          image={HIS_IMAGE}
          imageAlt="Saint Laurent men's Qixi campaign"
          title={T.qixiHis}
          products={menProducts.slice(0, 3)}
          onView={() => setCollection("him")}
          onDetail={onDetail}
          viewLabel={T.view}
        />
      </main>

      <div id="site-footer">
        <SaintLaurentFooter lang={lang} />
      </div>

      {collection === "her" ? (
        <CollectionOverlay
          eyebrow="Saint Laurent — Qixi"
          title={T.qixiHers}
          products={womenProducts}
          onClose={() => setCollection(null)}
          onDetail={onDetail}
        />
      ) : null}

      {collection === "him" ? (
        <CollectionOverlay
          eyebrow="Saint Laurent — Qixi"
          title={T.qixiHis}
          products={menProducts}
          onClose={() => setCollection(null)}
          onDetail={onDetail}
        />
      ) : null}

      <ValentineOverlays />
    </>
  );
}

export function ValentinePage() {
  const [activeSection, setActiveSection] = useState("highlights");

  return (
    <div className="valentine-shell valentine-shell--editorial">
      <ValentineProvider activeSection={activeSection} onActiveSectionChange={setActiveSection}>
        <ValentineExperience />
      </ValentineProvider>
    </div>
  );
}
