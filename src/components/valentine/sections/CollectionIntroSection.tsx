"use client";

import { BlurRevealText } from "../ui/BlurRevealText";

export function CollectionIntroSection({ active }: { active: boolean }) {
  return (
    <section
      className={`vl-collection vl-reveal in-view snap-section ${active ? "is-active" : ""}`}
      id="collection-intro"
      aria-label="The Qixi Gift Edit"
    >
      <p className="vl-eyebrow">The Collection</p>
      <BlurRevealText as="h2" className="vl-headline" text="The Qixi Gift Edit" />
      <p className="vl-subhead vl-subhead--light">
        A curated selection of after-dark silhouettes, iconic accessories, and unforgettable gestures.
      </p>
    </section>
  );
}
