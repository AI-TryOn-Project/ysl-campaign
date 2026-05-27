"use client";

import { type CSSProperties } from "react";

export function BlurRevealText({
  as: Tag = "span",
  text,
  className = "",
  id,
}: {
  as?: "h1" | "h2" | "h3" | "p" | "span" | "strong";
  text: string;
  className?: string;
  id?: string;
}) {
  return (
    <Tag id={id} className={`letter-reveal ${className}`} aria-label={text}>
      {Array.from(text).map((char, index) => (
        <span
          aria-hidden="true"
          className="lr-char"
          key={`${char}-${index}`}
          style={{ "--char-index": index } as CSSProperties}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Tag>
  );
}
