"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { HOME_SLIDES, HOME_TILES } from "@/data/campaign";
import { SaintLaurentMark } from "./SaintLaurentMark";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/lib/use-language";
import { i18n } from "@/lib/i18n";

export function HomePage() {
  const [bannerOpen, setBannerOpen] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const teaserVideoRef = useRef<HTMLVideoElement>(null);
  const { lang } = useLanguage();
  const T = i18n[lang];

  const activeTone = HOME_SLIDES[activeSlide]?.tone ?? "light";

  useEffect(() => {
    const video = teaserVideoRef.current;
    if (!video) return;
    let pending = false; // guard: only one restart cycle at a time
    let restartTimer: ReturnType<typeof setTimeout> | null = null;

    const onTimeUpdate = () => {
      if (!pending && video.currentTime >= 4) {
        pending = true;
        video.pause();
        restartTimer = setTimeout(() => {
          video.currentTime = 0;
          void video.play().finally(() => { pending = false; });
        }, 1000);
      }
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      if (restartTimer) clearTimeout(restartTimer);
    };
  }, []);

  useEffect(() => {
    const tick = () => {
      if (!document.hidden) {
        setActiveSlide((current) => (current + 1) % HOME_SLIDES.length);
      }
    };
    const timer = window.setInterval(tick, 5200);
    return () => window.clearInterval(timer);
  }, []);

  const navItems = useMemo(
    () => [
      { label: T.highlights.toUpperCase(), href: "/valentine#collection-intro" },
      { label: T.women.toUpperCase(), href: "/valentine#gifts-for-her" },
      { label: T.men.toUpperCase(), href: "/valentine#gifts-for-him" },
      { label: T.slProductions.toUpperCase(), href: "/valentine#style-guide-section" },
      { label: T.riveDroite.toUpperCase(), href: "/valentine#campaign-section" },
    ],
    [T],
  );

  const slideLabels: Record<string, { kicker: string; cta: string }> = {
    "women-fall-26": { kicker: T.womenFall, cta: T.exploreEdit },
    "spring-summer-26": { kicker: T.springSummer, cta: T.enterEdit },
    "men-summer-26": { kicker: T.menSummer, cta: T.exploreGifts },
    "rive-droite": { kicker: T.riveDroiteSlide, cta: T.exploreInspiration },
  };

  function goToSlide(nextIndex: number) {
    setActiveSlide((nextIndex + HOME_SLIDES.length) % HOME_SLIDES.length);
  }

  return (
    <div className="home-shell">
      <LanguageToggle />

      {bannerOpen ? (
        <div className="home-banner">
          <span>{T.banner}</span>
          <Link href="/valentine">{T.exploreNow}</Link>
          <button
            className="icon-button icon-button--plain"
            type="button"
            aria-label={T.closeNotification}
            onClick={() => setBannerOpen(false)}
          >
            ×
          </button>
        </div>
      ) : null}

      <header className="site-header site-header--light">
        <nav className="header-nav header-nav--left" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="header-brand" href="/" aria-label="Saint Laurent home">
          <SaintLaurentMark />
        </Link>

        <nav className="header-nav header-nav--right" aria-label="Client service">
          <Link href="/valentine">{T.laMaison.toUpperCase()}</Link>
          <Link href="/valentine#services-section">{T.services.toUpperCase()}</Link>
          <Link href="/valentine#gift-finder">{T.login.toUpperCase()}</Link>
          <span className="header-symbols" aria-hidden="true">
            <span>⌕</span>
            <span>♡</span>
            <span>□</span>
          </span>
        </nav>
      </header>

      <main>
        <section className={`home-hero home-hero--${activeTone}`} aria-label="Saint Laurent campaign slides">
          {HOME_SLIDES.map((slide, index) => {
            const label = slideLabels[slide.id] ?? { kicker: slide.kicker, cta: slide.cta };
            return (
              <Link
                key={slide.id}
                className={`home-slide ${index === activeSlide ? "is-active" : ""}`}
                href={slide.href}
                aria-hidden={index === activeSlide ? "false" : "true"}
                tabIndex={index === activeSlide ? 0 : -1}
              >
                <img src={slide.image} alt={label.kicker} style={{ objectPosition: slide.imagePosition }} />
                <div className="home-slide__caption">
                  <p>{label.kicker}</p>
                  <span>{label.cta}</span>
                </div>
              </Link>
            );
          })}

          <button className="slide-control slide-control--prev" type="button" aria-label="Previous slide" onClick={() => goToSlide(activeSlide - 1)}>
            ‹
          </button>
          <button className="slide-control slide-control--next" type="button" aria-label="Next slide" onClick={() => goToSlide(activeSlide + 1)}>
            ›
          </button>

          <div className="slide-dots" aria-label="Slide selection">
            {HOME_SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                className={index === activeSlide ? "is-active" : ""}
                type="button"
                aria-label={`Go to ${slideLabels[slide.id]?.kicker ?? slide.kicker}`}
                aria-current={index === activeSlide ? "true" : undefined}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </section>

        <section className="home-grid" aria-label="Campaign categories">
          {HOME_TILES.map((tile) => (
            <Link key={tile.id} className="home-tile" href={tile.href}>
              <img src={tile.image} alt={tile.kicker} />
              <span className="home-tile__shade" aria-hidden="true" />
              <span className="home-tile__caption">
                <span>{tile.kicker}</span>
                <small>{tile.cta}</small>
              </span>
            </Link>
          ))}
        </section>
      </main>

      <footer className="site-footer site-footer--light">
        <div>
          <SaintLaurentMark />
          <p>A Qixi Gift Edit and AI concierge demonstration.</p>
        </div>
        <div className="footer-links">
          <Link href="/valentine">{lang === "zh" ? "七夕礼品顾问" : "Qixi Gift Concierge"}</Link>
          <Link href="/valentine#style-guide-section">{lang === "zh" ? "造型指南" : "Style Guide"}</Link>
          <Link href="/valentine#gifts-for-her">{lang === "zh" ? "她的礼物" : "For Her"}</Link>
          <Link href="/valentine#gifts-for-him">{lang === "zh" ? "他的礼物" : "For Him"}</Link>
        </div>
      </footer>

      <Link
        className="qixi-teaser"
        href="/valentine"
        aria-label="Enter the Qixi gift AI concierge"
      >
        <video ref={teaserVideoRef} autoPlay muted playsInline>
          <source src="/ysl-new-access.mp4" type="video/mp4" />
        </video>
      </Link>
    </div>
  );
}
