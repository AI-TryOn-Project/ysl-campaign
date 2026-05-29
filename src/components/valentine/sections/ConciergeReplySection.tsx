"use client";

export function ConciergeReplySection({ active }: { active: boolean }) {
  return (
    <section
      className={`section concierge-reply-section snap-section ${active ? "is-active" : ""}`}
      id="concierge-reply-section"
      aria-label="Saint Laurent concierge reply"
    />
  );
}
