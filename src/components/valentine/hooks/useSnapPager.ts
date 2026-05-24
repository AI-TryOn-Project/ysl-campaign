"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const TRANSITION_SWITCH = "transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)";
const TRANSITION_REBOUND = "transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)";
const TRANSITION_FAST = "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)";

const PAGE_THRESHOLD = 0.15; // 15% of page height to switch
const VELOCITY_THRESHOLD = 0.45; // px/ms
const WHEEL_THRESHOLD = 80; // accumulated wheel delta to switch
const WHEEL_COOLDOWN = 750; // ms
const EDGE_RESISTANCE = 0.35; // resistance when pulling past edges

export type SnapPagerApi = {
  currentPage: number;
  pageCount: number;
  goTo: (index: number) => void;
  goNext: () => void;
  goPrev: () => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
};

export function useSnapPager(pageCount: number): SnapPagerApi {
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const stateRef = useRef({
    // Drag state
    isDragging: false,
    startY: 0,
    startTranslateY: 0,
    currentTranslateY: 0,
    lastY: 0,
    lastTime: 0,
    velocity: 0,

    // Wheel state
    wheelAccumulated: 0,
    wheelTimer: 0 as ReturnType<typeof setTimeout> | 0,
    wheelLocked: false,
    wheelCooldownTimer: 0 as ReturnType<typeof setTimeout> | 0,

    // Animation state
    animating: false,
  });

  const getPageHeight = useCallback(() => {
    return containerRef.current?.clientHeight ?? window.innerHeight;
  }, []);

  const clampIndex = useCallback(
    (index: number) => Math.max(0, Math.min(pageCount - 1, index)),
    [pageCount]
  );

  const applyTransform = useCallback((y: number, transition: string) => {
    const el = containerRef.current;
    if (!el) return;
    el.style.transition = transition;
    el.style.transform = `translate3d(0, ${-y}px, 0)`;
  }, []);

  const animateToPage = useCallback(
    (targetIndex: number, fast = false) => {
      const state = stateRef.current;
      if (state.animating && !fast) return;

      const clamped = clampIndex(targetIndex);
      const pageHeight = getPageHeight();
      const targetY = clamped * pageHeight;

      state.animating = true;
      state.currentTranslateY = targetY;

      const transition =
        fast
          ? TRANSITION_FAST
          : targetIndex === currentPage
          ? TRANSITION_REBOUND
          : TRANSITION_SWITCH;

      applyTransform(targetY, transition);
      setCurrentPage(clamped);

      const onEnd = () => {
        state.animating = false;
        el.removeEventListener("transitionend", onEnd);
      };
      const el = containerRef.current;
      if (el) {
        el.addEventListener("transitionend", onEnd, { once: true });
        // Fallback in case transitionend doesn't fire
        setTimeout(() => {
          state.animating = false;
        }, 800);
      }
    },
    [clampIndex, getPageHeight, applyTransform, currentPage]
  );

  const goTo = useCallback(
    (index: number) => {
      animateToPage(index);
    },
    [animateToPage]
  );

  const goNext = useCallback(() => {
    animateToPage(currentPage + 1);
  }, [animateToPage, currentPage]);

  const goPrev = useCallback(() => {
    animateToPage(currentPage - 1);
  }, [animateToPage, currentPage]);

  // Touch / Pointer handlers
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const state = stateRef.current;

    const onPointerDown = (e: PointerEvent) => {
      // Ignore if interacting with interactive elements
      const target = e.target as HTMLElement;
      if (
        target.closest(
          'input, textarea, select, button, [role="dialog"], .modal-backdrop, .chat-dock'
        )
      ) {
        return;
      }

      state.isDragging = true;
      state.startY = e.clientY;
      state.lastY = e.clientY;
      state.startTranslateY = state.currentTranslateY;
      state.velocity = 0;
      state.lastTime = performance.now();

      el.style.transition = "none";
      el.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!state.isDragging) return;

      const now = performance.now();
      const deltaY = state.startY - e.clientY;
      const timeDelta = now - state.lastTime;

      let newTranslateY = state.startTranslateY + deltaY;

      // Edge resistance
      const pageHeight = getPageHeight();
      const maxTranslate = (pageCount - 1) * pageHeight;
      if (newTranslateY < 0) {
        newTranslateY *= EDGE_RESISTANCE;
      } else if (newTranslateY > maxTranslate) {
        const over = newTranslateY - maxTranslate;
        newTranslateY = maxTranslate + over * EDGE_RESISTANCE;
      }

      state.currentTranslateY = newTranslateY;
      el.style.transform = `translate3d(0, ${-newTranslateY}px, 0)`;

      if (timeDelta > 0) {
        state.velocity = (state.lastY - e.clientY) / timeDelta;
      }
      state.lastY = e.clientY;
      state.lastTime = now;
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!state.isDragging) return;
      state.isDragging = false;

      const pageHeight = getPageHeight();
      const currentIndex = currentPage;
      const rawProgress = state.currentTranslateY / pageHeight;
      const progress = rawProgress - currentIndex; // -1 to 1 relative to current

      const absVelocity = Math.abs(state.velocity);
      const direction = state.velocity > 0 ? 1 : -1; // positive velocity = moving up (next)

      let targetIndex = currentIndex;

      // Decide whether to switch or rebound
      const shouldSwitch =
        Math.abs(progress) > PAGE_THRESHOLD || absVelocity > VELOCITY_THRESHOLD;

      if (shouldSwitch) {
        if (progress > 0) {
          targetIndex = currentIndex + 1;
        } else {
          targetIndex = currentIndex - 1;
        }
        // Velocity overrides if strong enough
        if (absVelocity > VELOCITY_THRESHOLD && direction > 0 && progress > -0.05) {
          targetIndex = currentIndex + 1;
        } else if (absVelocity > VELOCITY_THRESHOLD && direction < 0 && progress < 0.05) {
          targetIndex = currentIndex - 1;
        }
      }

      targetIndex = clampIndex(targetIndex);
      animateToPage(targetIndex, absVelocity > 1.2);
    };

    const onPointerCancel = () => {
      if (!state.isDragging) return;
      state.isDragging = false;
      animateToPage(currentPage);
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerCancel);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerCancel);
    };
  }, [currentPage, pageCount, getPageHeight, clampIndex, animateToPage]);

  // Wheel handler
  useEffect(() => {
    const state = stateRef.current;

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return;
      if (state.isDragging || state.animating) {
        e.preventDefault();
        return;
      }

      const target = e.target as HTMLElement;
      if (
        target.closest(
          'input, textarea, select, [role="dialog"], .modal-backdrop'
        )
      ) {
        return;
      }

      // Allow scrolling inside tall sections (like product grids) unless at edge
      // For now, we handle this simply: if the section has scrollable content
      // and isn't at its scroll edge, let it scroll.
      const scrollable = target.closest("[data-scrollable]");
      if (scrollable) {
        const el = scrollable as HTMLElement;
        const atTop = el.scrollTop <= 1;
        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
        if ((e.deltaY < 0 && !atTop) || (e.deltaY > 0 && !atBottom)) {
          return; // Let inner scroll handle it
        }
      }

      e.preventDefault();

      if (state.wheelLocked) return;

      const normalized = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
      state.wheelAccumulated += normalized;

      window.clearTimeout(state.wheelTimer);
      state.wheelTimer = window.setTimeout(() => {
        state.wheelAccumulated = 0;
      }, 120);

      if (Math.abs(state.wheelAccumulated) > WHEEL_THRESHOLD) {
        const direction = state.wheelAccumulated > 0 ? 1 : -1;
        const targetIndex = clampIndex(currentPage + direction);
        state.wheelAccumulated = 0;
        state.wheelLocked = true;
        animateToPage(targetIndex);

        window.clearTimeout(state.wheelCooldownTimer);
        state.wheelCooldownTimer = window.setTimeout(() => {
          state.wheelLocked = false;
        }, WHEEL_COOLDOWN);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.clearTimeout(state.wheelTimer);
      window.clearTimeout(state.wheelCooldownTimer);
    };
  }, [currentPage, clampIndex, animateToPage]);

  // Keyboard handler
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev]);

  // Resize handler
  useEffect(() => {
    const onResize = () => {
      const pageHeight = getPageHeight();
      stateRef.current.currentTranslateY = currentPage * pageHeight;
      applyTransform(stateRef.current.currentTranslateY, "none");
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [currentPage, getPageHeight, applyTransform]);

  return {
    currentPage,
    pageCount,
    goTo,
    goNext,
    goPrev,
    containerRef,
  };
}
