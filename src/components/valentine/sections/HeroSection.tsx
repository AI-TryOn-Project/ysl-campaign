"use client";

import { EDITORIAL_ASSETS } from "@/data/campaign";
import { BlurRevealText } from "../ui/BlurRevealText";

export function HeroSection({ active }: { active: boolean }) {
  return (
    <section
      className={`bc-guide bc-hero-panel vl-hero in-view snap-section ${active ? "is-active" : ""}`}
      id="gift-finder"
      aria-label="Saint Laurent welcome"
    >
      <img className="bc-panel-bg" src={EDITORIAL_ASSETS.valentineHero} alt="" />
      <div className="bc-panel-shade" />
      <div className="bc-hero-copy">
        <p className="bc-guide-kicker bc-hero-kicker bc-reveal">
          SAINT LAURENT<br />2026 七夕特别呈献
        </p>
        <BlurRevealText as="h1" className="bc-guide-title bc-hero-headline bc-reveal" text="因你，独一无二" />
        <p className="bc-guide-copy bc-hero-subtitle bc-reveal">
          献给不需被定义的爱
        </p>
        <p className="bc-hero-scroll bc-reveal">探索七夕甄选</p>
      </div>
    </section>
  );
}
