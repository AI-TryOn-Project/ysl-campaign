"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { EDITORIAL_ASSETS, HOME_SLIDES, HOME_TILES } from "@/data/campaign";
import { SaintLaurentMark } from "./SaintLaurentMark";

export function HomePage() {
  const [bannerOpen, setBannerOpen] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const qixiVideoRef = useRef<HTMLVideoElement | null>(null);

  const activeTone = HOME_SLIDES[activeSlide]?.tone ?? "light";

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HOME_SLIDES.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  const navItems = useMemo(
    () => [
      { label: "精选系列", href: "/valentine#collection-intro" },
      { label: "女士", href: "/valentine#gifts-for-her" },
      { label: "男士", href: "/valentine#gifts-for-him" },
      { label: "SL PRODUCTIONS", href: "/valentine#style-guide-section" },
      { label: "RIVE DROITE", href: "/valentine#campaign-section" },
    ],
    [],
  );

  function goToSlide(nextIndex: number) {
    setActiveSlide((nextIndex + HOME_SLIDES.length) % HOME_SLIDES.length);
  }

  function playQixiPreview() {
    const video = qixiVideoRef.current;
    if (!video) return;
    void video.play().catch(() => undefined);
  }

  function stopQixiPreview() {
    const video = qixiVideoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  }

  return (
    <div className="home-shell">
      {bannerOpen ? (
        <div className="home-banner">
          <span>免费标准配送及退货。七夕礼物企划现已上线。</span>
          <Link href="/valentine">立即探索</Link>
          <button
            className="icon-button icon-button--plain"
            type="button"
            aria-label="关闭通知"
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

        <Link className="header-brand" href="/" aria-label="Saint Laurent 首页">
          <SaintLaurentMark />
        </Link>

        <nav className="header-nav header-nav--right" aria-label="Client service">
          <Link href="/valentine">LA MAISON</Link>
          <Link href="/valentine#services-section">客户服务</Link>
          <Link href="/valentine#gift-finder">登录</Link>
          <span className="header-symbols" aria-hidden="true">
            <span>⌕</span>
            <span>♡</span>
            <span>□</span>
          </span>
        </nav>
      </header>

      <main>
        <section className={`home-hero home-hero--${activeTone}`} aria-label="Saint Laurent campaign slides">
          {HOME_SLIDES.map((slide, index) => (
            <Link
              key={slide.id}
              className={`home-slide ${index === activeSlide ? "is-active" : ""}`}
              href={slide.href}
              aria-hidden={index === activeSlide ? "false" : "true"}
              tabIndex={index === activeSlide ? 0 : -1}
            >
              <img src={slide.image} alt={slide.kicker} style={{ objectPosition: slide.imagePosition }} />
              <div className="home-slide__caption">
                <p>{slide.kicker}</p>
                <span>{slide.cta}</span>
              </div>
            </Link>
          ))}

          <button className="slide-control slide-control--prev" type="button" aria-label="上一张" onClick={() => goToSlide(activeSlide - 1)}>
            ‹
          </button>
          <button className="slide-control slide-control--next" type="button" aria-label="下一张" onClick={() => goToSlide(activeSlide + 1)}>
            ›
          </button>

          <div className="slide-dots" aria-label="幻灯片选择">
            {HOME_SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                className={index === activeSlide ? "is-active" : ""}
                type="button"
                aria-label={`切换到 ${slide.kicker}`}
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
          <h2>SAINT LAURENT</h2>
          <p>七夕礼物企划与 AI 导购演示。首页保留品牌站式入口，主体验集中在 Valentine 页面。</p>
        </div>
        <div className="footer-links">
          <Link href="/valentine">Qixi Gift Concierge</Link>
          <Link href="/valentine#style-guide-section">Style Guide</Link>
          <Link href="/valentine#gifts-for-her">For Her</Link>
          <Link href="/valentine#gifts-for-him">For Him</Link>
        </div>
      </footer>

      <Link
        className="qixi-teaser"
        href="/valentine"
        aria-label="进入七夕礼物 AI 导购"
        onMouseEnter={playQixiPreview}
        onMouseLeave={stopQixiPreview}
      >
        <video
          ref={qixiVideoRef}
          muted
          loop
          playsInline
          poster={EDITORIAL_ASSETS.qixiTeaserPoster}
          preload="metadata"
        >
          <source src={EDITORIAL_ASSETS.qixiTeaserVideo} type="video/mp4" />
        </video>
        <span>
          <strong>七夕礼物</strong>
          <small>AI Concierge</small>
        </span>
      </Link>
    </div>
  );
}
