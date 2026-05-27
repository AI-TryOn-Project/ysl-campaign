"use client";

import { EDITORIAL_ASSETS } from "@/data/campaign";
import { BlurRevealText } from "../ui/BlurRevealText";

export function CampaignSection({ active }: { active: boolean }) {
  return (
    <section
      className={`vl-campaign vl-reveal in-view snap-section ${active ? "is-active" : ""}`}
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
  );
}
