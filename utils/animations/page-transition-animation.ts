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

/** Create (or reuse) the overlay element with 3 concentric layers */
function getOrCreateOverlay(color: string) {
  let overlay = document.querySelector<HTMLElement>(".page-transition-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "page-transition-overlay";
    overlay.style.cssText = `
      position: fixed; inset: 0;
      width: 100vw; height: 100vh;
      z-index: 9999; pointer-events: none;
      will-change: clip-path; contain: layout paint style;
      background: transparent;
    `;

    // Build 3 concentric layers (outer → inner)
    for (let i = 0; i < 3; i++) {
      const layer = document.createElement("div");
      layer.className = `bubble-layer bubble-layer-${i + 1}`;
      const shade = `color-mix(in oklab, ${color} ${85 - i * 15}%, black)`;
      layer.style.cssText = `
        position:absolute; inset:0;
        background:${shade};
        will-change: clip-path;
        pointer-events:none;
      `;
      overlay.appendChild(layer);
    }
    document.body.appendChild(overlay);
  } else {
    // Update colors if overlay already exists
    const layers = overlay.querySelectorAll<HTMLElement>(".bubble-layer");
    layers.forEach((layer, i) => {
      const shade = `color-mix(in oklab, ${color} ${85 - i * 15}%, black)`;
      layer.style.background = shade;
    });
  }

  overlay.setAttribute("aria-hidden", "true");
  overlay.style.willChange = "clip-path";
  return overlay;
}

/** One place to kill everything related to the transition */
function installSingleton(overlay: HTMLElement) {
  const hardCleanup = () => {
    try {
      if (window.__bubbleTransition?.autoKillId) {
        window.clearTimeout(window.__bubbleTransition.autoKillId);
      }
      gsap.killTweensOf(overlay);
      overlay.querySelectorAll("*").forEach((el) => gsap.killTweensOf(el));
      window.__bubbleTransition?.tl?.kill();

      gsap.set(overlay, {
        clearProps: "clipPath,webkitClipPath,willChange,pointerEvents",
      });

      if (overlay.parentNode) overlay.remove();
    } finally {
      window.__bubbleTransition = undefined;
    }
  };

  if (window.__bubbleTransition?.active) {
    window.__bubbleTransition.hardCleanup();
  }

  window.__bubbleTransition = {
    overlay,
    active: true,
    hardCleanup,
  };
}

function computeRadii() {
  const R = Math.ceil(Math.hypot(window.innerWidth, window.innerHeight) * 1.2);
  return [R, Math.round(R * 0.66), Math.round(R * 0.33)];
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

  overlay.dataset.clickX = String(clickX);
  overlay.dataset.clickY = String(clickY);
  overlay.dataset.color = color;
  overlay.dataset.startedAt = String(performance.now());

  const layers = overlay.querySelectorAll<HTMLElement>(".bubble-layer");
  const [R0, R1, R2] = computeRadii();

  layers.forEach((l) =>
    gsap.set(l, {
      clipPath: `circle(0px at ${clickX}px ${clickY}px)`,
      webkitClipPath: `circle(0px at ${clickX}px ${clickY}px)`,
      pointerEvents: "none",
    })
  );

  const tl = gsap.timeline({
    onComplete: () => {
      onComplete?.();
    },
  });

  // outer → mid → inner with stagger
  tl.to(layers[0], {
    clipPath: `circle(${R0}px at ${clickX}px ${clickY}px)`,
    webkitClipPath: `circle(${R0}px at ${clickX}px ${clickY}px)`,
    duration,
    ease: "power2.out",
  })
    .to(
      layers[1],
      {
        clipPath: `circle(${R1}px at ${clickX}px ${clickY}px)`,
        webkitClipPath: `circle(${R1}px at ${clickX}px ${clickY}px)`,
        duration: duration * 0.92,
        ease: "power2.out",
      },
      0.06
    )
    .to(
      layers[2],
      {
        clipPath: `circle(${R2}px at ${clickX}px ${clickY}px)`,
        webkitClipPath: `circle(${R2}px at ${clickX}px ${clickY}px)`,
        duration: duration * 0.86,
        ease: "power2.out",
      },
      0.12
    );

  if (window.__bubbleTransition) {
    window.__bubbleTransition.tl = tl;
  }

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

/** SHRINK: call once on the destination page */
export function finishPageTransition(exitDuration = 0.8) {
  if (typeof window === "undefined") return;

  const overlay =
    window.__bubbleTransition?.overlay ??
    document.querySelector<HTMLElement>(".page-transition-overlay");
  if (!overlay) return;

  const layers = overlay.querySelectorAll<HTMLElement>(".bubble-layer");
  layers.forEach((l) => gsap.killTweensOf(l));
  window.clearTimeout(window.__bubbleTransition?.autoKillId);

  const clickX =
    Number(overlay.dataset.clickX) || Math.round(window.innerWidth / 2);
  const clickY =
    Number(overlay.dataset.clickY) || Math.round(window.innerHeight / 2);

  layers.forEach((l) =>
    gsap.set(l, { pointerEvents: "none", willChange: "clip-path" })
  );

  const tl = gsap.timeline({
    onComplete: () => {
      window.__bubbleTransition?.hardCleanup();
    },
  });

  // inner → mid → outer reverse stagger
  tl.to(layers[2], {
    clipPath: `circle(0px at ${clickX}px ${clickY}px)`,
    webkitClipPath: `circle(0px at ${clickX}px ${clickY}px)`,
    duration: exitDuration * 0.85,
    ease: "power2.inOut",
  })
    .to(
      layers[1],
      {
        clipPath: `circle(0px at ${clickX}px ${clickY}px)`,
        webkitClipPath: `circle(0px at ${clickX}px ${clickY}px)`,
        duration: exitDuration * 0.9,
        ease: "power2.inOut",
      },
      0.05
    )
    .to(
      layers[0],
      {
        clipPath: `circle(0px at ${clickX}px ${clickY}px)`,
        webkitClipPath: `circle(0px at ${clickX}px ${clickY}px)`,
        duration: exitDuration,
        ease: "power2.inOut",
      },
      0.1
    );

  if (window.__bubbleTransition) {
    window.__bubbleTransition.tl = tl;
  }
}
