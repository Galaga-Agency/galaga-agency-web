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

/** Create (or reuse) the overlay element with simple gradient layers */
function getOrCreateOverlay(color: string) {
  let overlay = document.querySelector<HTMLElement>(".page-transition-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "page-transition-overlay";
    overlay.style.cssText = `
      position: fixed; inset: 0;
      width: 100vw; height: 100vh;
      z-index: 99; pointer-events: none;
      will-change: clip-path; contain: layout paint style;
      background: transparent;
    `;

    for (let i = 0; i < 3; i++) {
      const layer = document.createElement("div");
      layer.className = `bubble-layer bubble-layer-${i + 1}`;

      let layerBackground: string;
      if (i === 0) {
        layerBackground = `linear-gradient(90deg, var(--color-blanco) 0%, ${color} 100%)`;
      } else if (i === 1) {
        layerBackground = `linear-gradient(45deg, ${color} 0%, color-mix(in oklch, ${color} 70%, black) 100%)`;
      } else {
        layerBackground = `linear-gradient(135deg, color-mix(in oklch, ${color} 70%, black) 0%, color-mix(in oklch, ${color} 40%, black) 100%)`;
      }

      layer.style.cssText = `
        position: absolute; inset: 0;
        background: ${layerBackground};
        will-change: clip-path, opacity;
        pointer-events: none;
      `;
      overlay.appendChild(layer);
    }
    document.body.appendChild(overlay);
  } else {
    const layers = overlay.querySelectorAll<HTMLElement>(".bubble-layer");
    const gradients = [
      `linear-gradient(135deg, 
        var(--color-blanco) 0%, 
        color-mix(in oklch, var(--color-blanco) 95%, ${color}) 30%, 
        color-mix(in oklch, var(--color-blanco) 85%, ${color}) 70%, 
        color-mix(in oklch, var(--color-blanco) 70%, ${color}) 100%
      )`,
      `linear-gradient(45deg, 
        color-mix(in oklch, ${color} 90%, white) 0%, 
        ${color} 40%, 
        color-mix(in oklch, ${color} 85%, var(--color-teal)) 70%, 
        color-mix(in oklch, ${color} 80%, black) 100%
      )`,
      `linear-gradient(90deg, 
        color-mix(in oklch, ${color} 70%, var(--color-azul-profundo)) 0%, 
        color-mix(in oklch, ${color} 60%, black) 30%, 
        color-mix(in oklch, ${color} 50%, var(--color-violeta)) 70%, 
        color-mix(in oklch, ${color} 40%, black) 100%
      )`,
    ];

    layers.forEach((layer, i) => {
      layer.style.background = gradients[i];
    });
  }

  overlay.setAttribute("aria-hidden", "true");
  overlay.style.willChange = "clip-path, opacity";
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

      gsap.set(overlay, { clearProps: "all" });
      gsap.set(overlay.querySelectorAll("*"), { clearProps: "all" });

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
  return [R, Math.round(R * 0.75), Math.round(R * 0.5)];
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
      opacity: 1,
      pointerEvents: "none",
    })
  );

  const tl = gsap.timeline({
    onComplete: () => {
      onComplete?.();
    },
  });

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
        duration: duration * 0.8,
        ease: "power2.out",
      },
      0.1
    )
    .to(
      layers[2],
      {
        clipPath: `circle(${R2}px at ${clickX}px ${clickY}px)`,
        webkitClipPath: `circle(${R2}px at ${clickX}px ${clickY}px)`,
        duration: duration * 0.6,
        ease: "power2.out",
      },
      0.2
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
export function finishPageTransition(exitDuration = 0.6) {
  if (typeof window === "undefined") return;

  const overlay =
    window.__bubbleTransition?.overlay ??
    document.querySelector<HTMLElement>(".page-transition-overlay");
  if (!overlay) return;

  const layers = overlay.querySelectorAll<HTMLElement>(".bubble-layer");

  layers.forEach((l) => gsap.killTweensOf(l));
  gsap.killTweensOf(overlay);
  window.clearTimeout(window.__bubbleTransition?.autoKillId);

  const clickX =
    Number(overlay.dataset.clickX) || Math.round(window.innerWidth / 2);
  const clickY =
    Number(overlay.dataset.clickY) || Math.round(window.innerHeight / 2);

  layers.forEach((l) =>
    gsap.set(l, {
      pointerEvents: "none",
      willChange: "clip-path, opacity",
      opacity: 1,
    })
  );

  const tl = gsap.timeline({
    onComplete: () => {
      window.__bubbleTransition?.hardCleanup();
    },
  });

  tl.to(layers[2], {
    clipPath: `circle(0px at ${clickX}px ${clickY}px)`,
    webkitClipPath: `circle(0px at ${clickX}px ${clickY}px)`,
    opacity: 0,
    duration: exitDuration * 0.5,
    ease: "power2.in",
  })
    .to(
      layers[1],
      {
        clipPath: `circle(0px at ${clickX}px ${clickY}px)`,
        webkitClipPath: `circle(0px at ${clickX}px ${clickY}px)`,
        opacity: 0,
        duration: exitDuration * 0.65,
        ease: "power2.in",
      },
      0.05
    )
    .to(
      layers[0],
      {
        clipPath: `circle(0px at ${clickX}px ${clickY}px)`,
        webkitClipPath: `circle(0px at ${clickX}px ${clickY}px)`,
        opacity: 0,
        duration: exitDuration * 0.8,
        ease: "power2.in",
      },
      0.1
    );

  if (window.__bubbleTransition) {
    window.__bubbleTransition.tl = tl;
  }
}
