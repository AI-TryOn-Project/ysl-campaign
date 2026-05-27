"use client";

import { useValentine } from "../ValentineContext";
import { BlurRevealText } from "../ui/BlurRevealText";
import { Media } from "../ui/Media";

export function StyleGuideSection({ active }: { active: boolean }) {
  const { styleGuides, setSelectedGuide } = useValentine();

  return (
    <section
      className={`vl-style-guide vl-reveal in-view snap-section ${active ? "is-active" : ""}`}
      id="style-guide-section"
      aria-label="Style Guide"
    >
      <div className="vl-style-guide-head">
        <p className="vl-eyebrow">Editorial Worlds</p>
        <BlurRevealText as="h2" className="vl-headline" text="Style Guide" />
        <p className="vl-subhead vl-subhead--light">Choose the mood before the product.</p>
      </div>
      <div className="vl-style-guide-track" role="list">
        {styleGuides.map((guide) => (
          <button
            key={guide.id}
            className="vl-sg-card style-guide-card"
            type="button"
            role="listitem"
            aria-label={`Open ${guide.title} style guide`}
            onClick={() => setSelectedGuide(guide)}
          >
            <div className="vl-sg-card-media">
              <div className="vl-sg-card-parallax">
                <Media guide={guide} className="style-guide-media" />
              </div>
            </div>
            <span className="vl-sg-card-shade" aria-hidden="true" />
            <span className="vl-sg-card-glow" aria-hidden="true" />
            <span className="vl-sg-card-copy">
              <small className="vl-sg-card-kicker">Style Guide</small>
              <strong className="vl-sg-card-title">{guide.title}</strong>
              <span className="vl-sg-card-desc">{guide.tagline}</span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
