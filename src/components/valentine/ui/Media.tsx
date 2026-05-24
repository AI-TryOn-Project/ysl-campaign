"use client";

import { type StyleGuide } from "@/data/campaign";

export function Media({ guide, className = "" }: { guide: StyleGuide; className?: string }) {
  if (guide.mediaType === "video") {
    return (
      <video className={className} muted loop playsInline autoPlay poster={guide.poster}>
        <source src={guide.media} type="video/mp4" />
      </video>
    );
  }
  return <img className={className} src={guide.media || guide.image} alt={guide.title} />;
}
