"use client";

import { EDITORIAL_ASSETS } from "@/data/campaign";

// Full-width cinematic campaign hero. Motion asset leads; text stays minimal.
// TODO(asset): swap to the final full-resolution Qixi campaign film when available.
export function HeroCampaign() {
  return (
    <section className="vl-ed-hero" id="highlights" aria-label="Saint Laurent Qixi campaign">
      <video
        className="vl-ed-hero-media"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={EDITORIAL_ASSETS.valentineHero}
      >
        <source src="/assets/motion/qixi campaign video.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
