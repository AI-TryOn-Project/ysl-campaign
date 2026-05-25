"use client";

import { useValentine } from "../ValentineContext";
import { BlurRevealText } from "../ui/BlurRevealText";

export function MembershipSection({ active }: { active: boolean }) {
  const { setModePanelOpen } = useValentine();

  return (
    <section
      className={`vl-membership vl-reveal in-view snap-section ${active ? "is-active" : ""}`}
      id="membership-cta"
      aria-label="Join the Saint Laurent experience"
    >
      <p className="vl-eyebrow">Saint Laurent Experience</p>
      <BlurRevealText as="h2" className="vl-headline" text="Join the Saint Laurent Experience" />
      <p className="vl-subhead vl-subhead--light">
        Unlock a more personal gifting journey through curated recommendations.
      </p>
      <button
        className="vl-cta vl-cta--outline"
        type="button"
        onClick={() => {
          setModePanelOpen(true);
          document.getElementById("chat-input")?.focus();
        }}
      >
        Start with the Concierge
      </button>
    </section>
  );
}
