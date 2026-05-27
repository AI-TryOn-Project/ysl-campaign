"use client";

import { EDITORIAL_ASSETS } from "@/data/campaign";
import { BlurRevealText } from "../ui/BlurRevealText";

export function StatementSection({ active }: { active: boolean }) {
  return (
    <section
      className={`vl-statement vl-reveal in-view snap-section ${active ? "is-active" : ""}`}
      id="statement-section"
      aria-label="Unapologetic love"
    >
      <img className="vl-statement-bg" src={EDITORIAL_ASSETS.valentineStatement} alt="" />
      <div className="vl-statement-shade" />
      <div className="vl-statement-copy">
        <p className="vl-eyebrow">Qixi 2026</p>
        <BlurRevealText as="h2" className="vl-headline" text="Unapologetic Love in Every Gift" />
      </div>
    </section>
  );
}
