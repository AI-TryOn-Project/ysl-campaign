"use client";

import { BlurRevealText } from "../ui/BlurRevealText";

export function ServicesSection({ active }: { active: boolean }) {
  return (
    <section
      className={`vl-services vl-reveal in-view snap-section ${active ? "is-active" : ""}`}
      id="services-section"
      aria-label="Exclusive services"
    >
      <div className="vl-services-inner">
        <BlurRevealText as="h2" className="vl-headline" text="Our Exclusive Services" />
        <div className="vl-service-grid">
          <article className="vl-service-card">
            <h3>Gift with Love</h3>
            <p>
              Elevate Qixi gifting with Saint Laurent luxury wrapping and a handwritten gift note, each gesture
              composed with precision.
            </p>
          </article>
          <article className="vl-service-card">
            <h3>Make It Yours</h3>
            <p>
              Personalize selected accessories with monogram-inspired detailing and engraving-style finishing for an
              unmistakably personal gift.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
