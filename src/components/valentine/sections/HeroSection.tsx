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
        <p className="bc-guide-kicker bc-reveal">Saint Laurent AI Gift Concierge</p>
        <BlurRevealText as="h1" className="bc-guide-title bc-reveal" text="Welcome to Qixi Gifts" />
        <p className="bc-guide-copy bc-reveal">
          Saint Laurent tailoring, black-and-gold details, and Qixi gifting inspiration.
        </p>
        <p className="bc-guide-kicker bc-reveal">Scroll to explore</p>
      </div>
    </section>
  );
}
