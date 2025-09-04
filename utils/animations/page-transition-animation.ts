"use client";

import { gsap } from "@/lib/gsapConfig";

declare global {
  interface Window {
    __bubbleTransition?: {
      overlay: HTMLElement | null;
      tl?: gsap.core.Timeline;
      autoKillId?: number;
      active: boolean;
      hardCleanup: () => void;
    };
  }
}

export interface TransitionOptions {
  clickX: number;
  clickY: number;
  color?: string;
  duration?: number;
  onComplete?: () => void;
}

/** Create (or reuse) the overlay element */
function getOrCreateOverlay(color: string) {
  let overlay = document.querySelector<HTMLElement>(".page-transition-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "page-transition-overlay";
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      width: 100vw;
      height: 100vh;
      z-index: 9999;
      pointer-events: none; /* never block */
      background: ${color};
      will-change: clip-path;
      contain: layout paint style; /* isolate for perf */
    `;
    document.body.appendChild(overlay);
  } else {
    overlay.style.background = color;
  }
  overlay.setAttribute("aria-hidden", "true");
  overlay.style.willChange = "clip-path";
  return overlay;
}

/** One place to kill everything related to the transition */
function installSingleton(overlay: HTMLElement) {
  const hardCleanup = () => {
    try {
      // Clear any pending timeout
      if (window.__bubbleTransition?.autoKillId) {
        window.clearTimeout(window.__bubbleTransition.autoKillId);
      }
      // Kill all tweens/timelines on the overlay
      gsap.killTweensOf(overlay);
      window.__bubbleTransition?.tl?.kill();

      // Clear styles to release compositor resources
      gsap.set(overlay, {
        clearProps: "clipPath,webkitClipPath,willChange,pointerEvents",
      });

      // Remove element
      if (overlay.parentNode) overlay.remove();
    } finally {
      window.__bubbleTransition = undefined;
    }
  };

  // If an older transition is still “active”, nuke it first
  if (window.__bubbleTransition?.active) {
    window.__bubbleTransition.hardCleanup();
  }

  window.__bubbleTransition = {
    overlay,
    active: true,
    hardCleanup,
  };
}

function computeRadius() {
  return Math.ceil(Math.hypot(window.innerWidth, window.innerHeight) * 1.2);
}

/** EXPAND: call before navigation */
export function initPageTransition({
  clickX,
  clickY,
  color = "var(--color-teal)",
  duration = 0.8,
  onComplete,
}: TransitionOptions) {
  if (typeof window === "undefined") {
    return { overlay: null as HTMLElement | null, cleanup: () => {} };
  }

  const overlay = getOrCreateOverlay(color);
  installSingleton(overlay);

  // Persist for the destination page
  overlay.dataset.clickX = String(clickX);
  overlay.dataset.clickY = String(clickY);
  overlay.dataset.color = color;
  overlay.dataset.startedAt = String(performance.now());

  // Reset any existing tweens on this element before starting a new one
  gsap.killTweensOf(overlay);

  gsap.set(overlay, {
    clipPath: `circle(0px at ${clickX}px ${clickY}px)`,
    webkitClipPath: `circle(0px at ${clickX}px ${clickY}px)`,
    pointerEvents: "none",
  });

  const tl = gsap.timeline({
    onComplete: () => {
      onComplete?.();
      // keep overlay in DOM for the exit phase
    },
  });

  tl.to(overlay, {
    clipPath: `circle(${computeRadius()}px at ${clickX}px ${clickY}px)`,
    webkitClipPath: `circle(${computeRadius()}px at ${clickX}px ${clickY}px)`,
    duration,
    ease: "power2.out",
  });

  // store timeline on the singleton
  if (window.__bubbleTransition) {
    window.__bubbleTransition.tl = tl;
  }

  // Fail-safe auto cleanup (e.g., hot reloads, aborted nav)
  window.clearTimeout((window.__bubbleTransition as any)?.autoKillId);
  const autoKillId = window.setTimeout(() => {
    window.__bubbleTransition?.hardCleanup();
  }, 6000);
  if (window.__bubbleTransition) {
    window.__bubbleTransition.autoKillId = autoKillId;
  }

  return {
    overlay,
    cleanup: () => window.__bubbleTransition?.hardCleanup(),
  };
}

/** SHRINK: call once on the destination page (e.g., at the start of your page-level useGSAP). */
export function finishPageTransition(exitDuration = 0.8) {
  if (typeof window === "undefined") return;

  const overlay =
    window.__bubbleTransition?.overlay ??
    document.querySelector<HTMLElement>(".page-transition-overlay");
  if (!overlay) return;

  // Prevent double-running and kill any in-flight tweens first
  gsap.killTweensOf(overlay);
  window.clearTimeout(window.__bubbleTransition?.autoKillId);

  const clickX =
    Number(overlay.dataset.clickX) || Math.round(window.innerWidth / 2);
  const clickY =
    Number(overlay.dataset.clickY) || Math.round(window.innerHeight / 2);

  gsap.set(overlay, { pointerEvents: "none", willChange: "clip-path" });

  const tl = gsap.timeline({
    onComplete: () => {
      window.__bubbleTransition?.hardCleanup();
    },
  });

  tl.to(overlay, {
    clipPath: `circle(0px at ${clickX}px ${clickY}px)`,
    webkitClipPath: `circle(0px at ${clickX}px ${clickY}px)`,
    duration: exitDuration,
    ease: "power2.inOut",
  });

  if (window.__bubbleTransition) {
    window.__bubbleTransition.tl = tl;
  }
}
