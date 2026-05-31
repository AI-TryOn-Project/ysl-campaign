"use client";

import { useEffect, useRef } from "react";
import { type StyleGuide } from "@/data/campaign";

function LazyVideo({ src, poster, className }: { src: string; poster: string; className: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video ref={ref} className={className} muted loop playsInline preload="none" poster={poster}>
      <source src={src} type="video/mp4" />
    </video>
  );
}

export function Media({ guide, className = "" }: { guide: StyleGuide; className?: string }) {
  if (guide.mediaType === "video") {
    return <LazyVideo src={guide.media} poster={guide.poster} className={className} />;
  }
  return <img className={className} src={guide.media || guide.image} alt={guide.title} />;
}
