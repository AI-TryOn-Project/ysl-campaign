"use client";

import { useEffect, type ReactNode } from "react";
import { useSnapPager } from "./hooks/useSnapPager";

export type SnapPagerProps = {
  children: ReactNode;
  onPageChange?: (index: number) => void;
  pageIndex?: number;
  pageIndicators?: boolean;
};

export function SnapPager({ children, onPageChange, pageIndex, pageIndicators }: SnapPagerProps) {
  const pages = Array.isArray(children) ? children : children ? [children] : [];
  const pageCount = pages.length;
  const { currentPage, containerRef, goTo, rebound } = useSnapPager(pageCount, { onPageChange });

  useEffect(() => {
    if (typeof pageIndex !== "number" || pageIndex === currentPage) return;
    goTo(pageIndex);
  }, [currentPage, goTo, pageIndex]);

  const handleIndicatorClick = (index: number) => {
    goTo(index);
  };

  return (
    <div className="snap-pager">
      <div
        ref={containerRef}
        className="snap-pager-track"
        style={{ touchAction: "none", willChange: "transform" }}
      >
        {pages.map((child, index) => (
          <div
            key={index}
            className={[
              "snap-page",
              index === currentPage ? "is-active" : "",
              rebound?.page === index ? `is-rebounding rebound-${rebound.direction}` : "",
            ]
              .filter(Boolean)
              .join(" ")}
            data-page={index}
          >
            {child}
          </div>
        ))}
      </div>

      {pageIndicators && pageCount > 1 && (
        <div className="snap-pager-dots">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === currentPage ? "active" : ""}
              onClick={() => handleIndicatorClick(index)}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export { useSnapPager };
