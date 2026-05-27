"use client";

import { SaintLaurentMark } from "@/components/SaintLaurentMark";
import { useValentine } from "../ValentineContext";

export function ConciergeReplySection({ active }: { active: boolean }) {
  const { assistantReplyText, thinkingCopy, isAwaitingAssistant, chatErrorText } = useValentine();
  const displayText = chatErrorText && !assistantReplyText
    ? "The concierge could not complete this request. Please try again."
    : thinkingCopy;

  return (
    <section
      className={`section concierge-reply-section snap-section ${active ? "is-active" : ""}`}
      id="concierge-reply-section"
      aria-label="Saint Laurent concierge reply"
    >
      <div className="concierge-reply-inner">
        <SaintLaurentMark className="concierge-reply-mark" />
        <p className="kicker">Saint Laurent Concierge</p>
        <h2>{displayText}</h2>
        {isAwaitingAssistant ? (
          <div className="concierge-pulse" aria-label="Concierge is writing">
            <span />
            <span />
            <span />
          </div>
        ) : null}
      </div>
    </section>
  );
}
