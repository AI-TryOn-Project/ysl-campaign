"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const TRANSITION_SWITCH = "transform 0.92s cubic-bezier(0.16, 1, 0.3, 1)";
const TRANSITION_REBOUND = "transform 0.62s cubic-bezier(0.34, 1.56, 0.64, 1)";
const TRANSITION_FAST = "transform 0.68s cubic-bezier(0.2, 0.86, 0.2, 1)";

const PAGE_THRESHOLD = 0.18;
const VELOCITY_THRESHOLD = 0.52;
const WHEEL_THRESHOLD = 116;
const WHEEL_COOLDOWN = 880;
const EDGE_RESISTANCE = 0.32;
const WHEEL_PREVIEW_RESISTANCE = 0.38;
const REBOUND_DURATION = 460;

export type SnapRebound = {
  page: number;
  direction: "next" | "prev";
} | null;

export type SnapPagerApi = {
  currentPage: number;
  pageCount: number;
  goTo: (index: number, fast?: boolean) => void;
  goNext: () => void;
  goPrev: () => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
  rebound: SnapRebound;
};

export function useSnapPager(
  pageCount: number,
  options: { onPageChange?: (index: number) => void } = {},
): SnapPagerApi {
  const [currentPage, setCurrentPage] = useState(0);
  const [rebound, setRebound] = useState<SnapRebound>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const onPageChangeRef = useRef(options.onPageChange);
  const currentPageRef = useRef(0);

  const stateRef = useRef({
    isDragging: false,
    startY: 0,
    startTranslateY: 0,
    currentTranslateY: 0,
    lastY: 0,
    lastTime: 0,
    velocity: 0,
    wheelAccumulated: 0,
    wheelTimer: 0,
    wheelLocked: false,
    wheelCooldownTimer: 0,
    reboundTimer: 0,
    animating: false,
  });

  useEffect(() => {
    onPageChangeRef.current = options.onPageChange;
  }, [options.onPageChange]);

  const getPageHeight = useCallback(() => {
    return containerRef.current?.clientHeight ?? window.innerHeight;
  }, []);

  const clampIndex = useCallback(
    (index: number) => Math.max(0, Math.min(pageCount - 1, index)),
    [pageCount],
  );

  const applyTransform = useCallback((y: number, transition: string) => {
    const el = containerRef.current;
    if (!el) return;
    el.style.transition = transition;
    el.style.transform = `translate3d(0, ${-y}px, 0)`;
  }, []);

  const cueRebound = useCallback((page: number, direction: "next" | "prev") => {
    const state = stateRef.current;
    window.clearTimeout(state.reboundTimer);
    setRebound({ page, direction });
    state.reboundTimer = window.setTimeout(() => setRebound(null), REBOUND_DURATION);
  }, []);

  const animateToPage = useCallback(
    (targetIndex: number, fast = false) => {
      const state = stateRef.current;
      const currentIndex = currentPageRef.current;
      const clamped = clampIndex(targetIndex);
      if (state.animating && !fast && clamped === currentIndex) return;

      const pageHeight = getPageHeight();
      const targetY = clamped * pageHeight;
      const samePage = clamped === currentIndex;

      state.animating = true;
      state.currentTranslateY = targetY;
      currentPageRef.current = clamped;

      applyTransform(targetY, fast ? TRANSITION_FAST : samePage ? TRANSITION_REBOUND : TRANSITION_SWITCH);
      setCurrentPage(clamped);
      onPageChangeRef.current?.(clamped);

      const el = containerRef.current;
      if (!el) {
        state.animating = false;
        return;
      }

      const onEnd = () => {
        state.animating = false;
        el.removeEventListener("transitionend", onEnd);
      };

      el.addEventListener("transitionend", onEnd, { once: true });
      window.setTimeout(() => {
        state.animating = false;
      }, fast ? 760 : 1040);
    },
    [applyTransform, clampIndex, getPageHeight],
  );

  const goTo = useCallback((index: number, fast = false) => animateToPage(index, fast), [animateToPage]);
  const goNext = useCallback(() => animateToPage(currentPageRef.current + 1), [animateToPage]);
  const goPrev = useCallback(() => animateToPage(currentPageRef.current - 1), [animateToPage]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const state = stateRef.current;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest('input, textarea, select, button, [role="dialog"], .modal-backdrop, .chat-dock')) return;

      state.isDragging = true;
      state.startY = event.clientY;
      state.lastY = event.clientY;
      state.startTranslateY = state.currentTranslateY;
      state.velocity = 0;
      state.lastTime = performance.now();

      el.style.transition = "none";
      el.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!state.isDragging) return;

      const now = performance.now();
      const deltaY = state.startY - event.clientY;
      const timeDelta = now - state.lastTime;
      const pageHeight = getPageHeight();
      const maxTranslate = (pageCount - 1) * pageHeight;
      let nextY = state.startTranslateY + deltaY;

      if (nextY < 0) {
        nextY *= EDGE_RESISTANCE;
      } else if (nextY > maxTranslate) {
        nextY = maxTranslate + (nextY - maxTranslate) * EDGE_RESISTANCE;
      }

      state.currentTranslateY = nextY;
      el.style.transform = `translate3d(0, ${-nextY}px, 0)`;

      if (timeDelta > 0) state.velocity = (state.lastY - event.clientY) / timeDelta;
      state.lastY = event.clientY;
      state.lastTime = now;
    };

    const onPointerUp = () => {
      if (!state.isDragging) return;
      state.isDragging = false;

      const pageHeight = getPageHeight();
      const currentIndex = currentPageRef.current;
      const progress = state.currentTranslateY / pageHeight - currentIndex;
      const absVelocity = Math.abs(state.velocity);
      const direction = state.velocity > 0 ? 1 : -1;
      const shouldSwitch = Math.abs(progress) > PAGE_THRESHOLD || absVelocity > VELOCITY_THRESHOLD;
      let targetIndex = currentIndex;

      if (shouldSwitch) {
        targetIndex = progress > 0 ? currentIndex + 1 : currentIndex - 1;
        if (absVelocity > VELOCITY_THRESHOLD && direction > 0 && progress > -0.05) targetIndex = currentIndex + 1;
        if (absVelocity > VELOCITY_THRESHOLD && direction < 0 && progress < 0.05) targetIndex = currentIndex - 1;
      }

      targetIndex = clampIndex(targetIndex);
      if (targetIndex === currentIndex) cueRebound(currentIndex, progress >= 0 ? "next" : "prev");
      animateToPage(targetIndex, absVelocity > 1.2);
    };

    const onPointerCancel = () => {
      if (!state.isDragging) return;
      state.isDragging = false;
      const currentIndex = currentPageRef.current;
      cueRebound(currentIndex, "next");
      animateToPage(currentIndex);
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
  }, [animateToPage, clampIndex, cueRebound, getPageHeight, pageCount]);

  useEffect(() => {
    const state = stateRef.current;

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey) return;
      if (state.isDragging) {
        event.preventDefault();
        return;
      }

      const target = event.target as HTMLElement;
      if (target.closest('input, textarea, select, [role="dialog"], .modal-backdrop')) return;

      const scrollable = target.closest("[data-scrollable]");
      if (scrollable) {
        const el = scrollable as HTMLElement;
        const atTop = el.scrollTop <= 1;
        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
        if ((event.deltaY < 0 && !atTop) || (event.deltaY > 0 && !atBottom)) return;
      }

      event.preventDefault();
      if (state.wheelLocked) return;

      const normalized = event.deltaMode === 1 ? event.deltaY * 16 : event.deltaY;
      state.wheelAccumulated += normalized;

      const direction = state.wheelAccumulated > 0 ? 1 : -1;
      const currentIndex = currentPageRef.current;
      const baseY = currentIndex * getPageHeight();
      const previewOffset =
        Math.sign(state.wheelAccumulated) *
        Math.min(46, Math.pow(Math.abs(state.wheelAccumulated), 0.82) * WHEEL_PREVIEW_RESISTANCE);

      applyTransform(baseY + previewOffset, "transform 0.12s cubic-bezier(0.2, 0.72, 0.2, 1)");
      cueRebound(currentIndex, direction > 0 ? "next" : "prev");

      window.clearTimeout(state.wheelTimer);
      state.wheelTimer = window.setTimeout(() => {
        state.wheelAccumulated = 0;
        animateToPage(currentPageRef.current);
      }, 130);

      if (Math.abs(state.wheelAccumulated) > WHEEL_THRESHOLD) {
        const targetIndex = clampIndex(currentPageRef.current + direction);
        state.wheelAccumulated = 0;
        state.wheelLocked = true;
        window.clearTimeout(state.wheelTimer);
        setRebound(null);
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
      window.clearTimeout(state.reboundTimer);
    };
  }, [animateToPage, applyTransform, clampIndex, cueRebound, getPageHeight]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown" || event.key === "PageDown") {
        event.preventDefault();
        goNext();
      } else if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        goPrev();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev]);

  useEffect(() => {
    const onResize = () => {
      const pageHeight = getPageHeight();
      stateRef.current.currentTranslateY = currentPageRef.current * pageHeight;
      applyTransform(stateRef.current.currentTranslateY, "none");
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [applyTransform, getPageHeight]);

  return {
    currentPage,
    pageCount,
    goTo,
    goNext,
    goPrev,
    containerRef,
    rebound,
  };
}
