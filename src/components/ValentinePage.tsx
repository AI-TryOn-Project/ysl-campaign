"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { SaintLaurentMark } from "./SaintLaurentMark";
import { SnapPager } from "./valentine/SnapPager";
import { SNAP_SECTION_IDS, ValentineProvider, useValentine } from "./valentine/ValentineContext";
import { CampaignSection } from "./valentine/sections/CampaignSection";
import { CollectionIntroSection } from "./valentine/sections/CollectionIntroSection";
import { GiftsForHerSection } from "./valentine/sections/GiftsForHerSection";
import { GiftsForHimSection } from "./valentine/sections/GiftsForHimSection";
import { HeroSection } from "./valentine/sections/HeroSection";
import { MembershipSection } from "./valentine/sections/MembershipSection";
import { RecommendationsSection } from "./valentine/sections/RecommendationsSection";
import { ServicesSection } from "./valentine/sections/ServicesSection";
import { StatementSection } from "./valentine/sections/StatementSection";
import { StyleGuideSection } from "./valentine/sections/StyleGuideSection";
import { ChatDock } from "./valentine/ui/ChatDock";
import { ConciergeReplySection } from "./valentine/sections/ConciergeReplySection";
import { Drawer } from "./valentine/ui/Drawer";
import { ProductDetailModal } from "./valentine/ui/ProductDetailModal";
import { StyleGuideModal } from "./valentine/ui/StyleGuideModal";

function ValentineHeader() {
  const { wishlist, bag, setDrawer, setModePanelOpen, setActiveSection } = useValentine();

  const goToSection = (id: string) => {
    setActiveSection(id);
  };

  return (
    <header className="site-header site-header--dark">
      <div className="header-left">
        <button className="icon-button" type="button" aria-label="Open navigation">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 8h16M4 16h16" />
          </svg>
        </button>
        <button className="nav-link desktop-only" type="button" onClick={() => goToSection("campaign-section")}>
          Highlights
        </button>
        <button className="nav-link" type="button" onClick={() => goToSection("collection-intro")}>
          Women
        </button>
        <button className="nav-link" type="button" onClick={() => goToSection("gifts-for-him")}>
          Men
        </button>
        <button className="nav-link" type="button" onClick={() => goToSection("gifts-for-her")}>
          Gifts
        </button>
        <button className="nav-link" type="button" onClick={() => goToSection("style-guide-section")}>
          Style Guide
        </button>
        <button className="nav-link" type="button" onClick={() => goToSection("gift-finder")}>
          Qixi Edit
        </button>
      </div>

      <Link className="wordmark header-brand" href="/" aria-label="Saint Laurent home">
        <SaintLaurentMark />
      </Link>

      <div className="header-right">
        <button className="nav-link desktop-only" type="button" onClick={() => goToSection("gift-finder")}>
          LA MAISON
        </button>
        <button className="nav-link desktop-only" type="button" onClick={() => goToSection("services-section")}>
          Store Locator
        </button>
        <button className="nav-link desktop-only" type="button" onClick={() => goToSection("services-section")}>
          Client Service
        </button>
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
  );
}

function ValentineSections({ pageIndex, onPageChange }: { pageIndex: number; onPageChange: (index: number) => void }) {
  const { activeSection } = useValentine();
  const isActive = (id: string) => activeSection === id;

  const pages = useMemo(
    () => [
      <HeroSection key="gift-finder" active={isActive("gift-finder")} />,
      <ConciergeReplySection key="concierge-reply-section" active={isActive("concierge-reply-section")} />,
      <RecommendationsSection key="recommendations-section" active={isActive("recommendations-section")} />,
      <StyleGuideSection key="style-guide-section" active={isActive("style-guide-section")} />,
      <CampaignSection key="campaign-section" active={isActive("campaign-section")} />,
      <CollectionIntroSection key="collection-intro" active={isActive("collection-intro")} />,
      <GiftsForHerSection key="gifts-for-her" active={isActive("gifts-for-her")} />,
      <GiftsForHimSection key="gifts-for-him" active={isActive("gifts-for-him")} />,
      <StatementSection key="statement-section" active={isActive("statement-section")} />,
      <ServicesSection key="services-section" active={isActive("services-section")} />,
      <MembershipSection key="membership-cta" active={isActive("membership-cta")} />,
    ],
    [activeSection],
  );

  return (
    <main className="valentine-landing">
      <SnapPager pageIndex={pageIndex} onPageChange={onPageChange} pageIndicators>
        {pages}
      </SnapPager>
    </main>
  );
}

function ValentineFooter() {
  const { setActiveSection } = useValentine();
  const serviceLinks = ["Client Service", "Delivery", "Returns", "Contact us", "Track order", "Store Locator", "Privacy policy"];

  return (
    <footer className="site-footer valentine-footer">
      <div className="footer-row">
        <span className="footer-region">Shipping to: Mainland China</span>
        <span className="footer-sep" aria-hidden="true" />
        {serviceLinks.map((link) => (
          <button key={link} type="button" onClick={() => setActiveSection("services-section")}>
            {link}
          </button>
        ))}
      </div>
      <div className="footer-legal">
        <span>© 2026 Saint Laurent Qixi Campaign Demo</span>
        <span>Next.js editorial commerce prototype</span>
      </div>
    </footer>
  );
}

function ValentineOverlays() {
  const {
    drawer,
    drawerProducts,
    selectedProduct,
    selectedGuide,
    toast,
    isCurating,
    setDrawer,
    removeItem,
    setSelectedProduct,
    setSelectedGuide,
    addItem,
  } = useValentine();

  return (
    <>
      <ChatDock />

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
          onDetail={setSelectedProduct}
          onBag={(product) => addItem("bag", product)}
        />
      ) : null}
    </>
  );
}

function ValentineExperience({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: (section: string) => void;
}) {
  const pageIndex = Math.max(0, SNAP_SECTION_IDS.indexOf(activeSection));
  const handlePageChange = useCallback(
    (index: number) => {
      setActiveSection(SNAP_SECTION_IDS[index] ?? SNAP_SECTION_IDS[0]);
    },
    [setActiveSection],
  );

  return (
    <>
      <ValentineHeader />
      <ValentineSections pageIndex={pageIndex} onPageChange={handlePageChange} />
      <ValentineFooter />
      <ValentineOverlays />
    </>
  );
}

export function ValentinePage() {
  const [activeSection, setActiveSection] = useState(SNAP_SECTION_IDS[0]);

  useEffect(() => {
    document.documentElement.classList.add("valentine-snap-mode");
    return () => {
      document.documentElement.classList.remove("valentine-snap-mode");
    };
  }, []);

  return (
    <div className="valentine-shell">
      <ValentineProvider activeSection={activeSection} onActiveSectionChange={setActiveSection}>
        <ValentineExperience activeSection={activeSection} setActiveSection={setActiveSection} />
      </ValentineProvider>
    </div>
  );
}
