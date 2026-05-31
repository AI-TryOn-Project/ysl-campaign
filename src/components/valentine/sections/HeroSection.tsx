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
          SAINT LAURENT<br />QIXI 2026
        </p>
        <BlurRevealText as="h1" className="bc-guide-title bc-hero-headline bc-reveal" text="Undeniably Yours" />
        <p className="bc-guide-copy bc-hero-subtitle bc-reveal">
          For a love that needs no definition
        </p>
        <p className="bc-hero-scroll bc-reveal">Explore the Qixi Edit</p>
      </div>
    </section>
  );
}
