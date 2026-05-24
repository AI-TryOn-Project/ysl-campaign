"use client";

import { type ReactNode } from "react";
import { useSnapPager } from "./hooks/useSnapPager";

export type SnapPagerProps = {
  children: ReactNode;
  onPageChange?: (index: number) => void;
  pageIndicators?: boolean;
};

export function SnapPager({ children, onPageChange, pageIndicators }: SnapPagerProps) {
  const pageCount = Array.isArray(children) ? children.length : children ? 1 : 0;
  const { currentPage, containerRef, goTo } = useSnapPager(pageCount);

  const handleIndicatorClick = (index: number) => {
    goTo(index);
    onPageChange?.(index);
  };

  return (
    <div className="snap-pager">
      <div
        ref={containerRef}
        className="snap-pager-track"
        style={{ touchAction: "none", willChange: "transform" }}
      >
        {Array.isArray(children)
          ? children.map((child, index) => (
              <div
                key={index}
                className={`snap-page ${index === currentPage ? "is-active" : ""}`}
                data-page={index}
              >
                {child}
              </div>
            ))
          : children}
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
