"use client";

import { type StyleGuide } from "@/data/campaign";

export function Media({ guide, className = "", active = true }: { guide: StyleGuide; className?: string; active?: boolean }) {
  if (guide.mediaType === "video") {
    if (!active) {
      return <img className={className} src={guide.poster || guide.image} alt={guide.title} />;
    }

    return (
      <video className={className} muted loop playsInline autoPlay preload="metadata" poster={guide.poster}>
        <source src={guide.media} type="video/mp4" />
      </video>
    );
  }
  return <img className={className} src={guide.media || guide.image} alt={guide.title} />;
}
