"use client";

import { gsap } from "@/lib/gsapConfig";

export function initMobilePortal({ isOpen }: { isOpen: boolean }) {
  if (typeof window === "undefined") return () => {};

  const layer = document.querySelector<HTMLElement>(".portal-layer");
  const surface = document.querySelector<HTMLElement>(".portal-surface");
  const items = document.querySelectorAll<HTMLElement>(".portal-nav li");
  const extras = document.querySelectorAll<HTMLElement>(".portal-extras > *");

  if (!layer || !surface || !items.length || !extras.length) {
    return () => {};
  }

  const computeRadius = () =>
    Math.ceil(Math.hypot(window.innerWidth, window.innerHeight) * 1.2);

  // Initial state
  gsap.set([...Array.from(items), ...Array.from(extras)], {
    autoAlpha: 0,
    y: 30,
  });

  gsap.set(layer, {
    clipPath: "circle(0px at calc(100% - 60px) 60px)",
    webkitClipPath: "circle(0px at calc(100% - 60px) 60px)",
  });

  gsap.set(surface, {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transformOrigin: "center",
  });

  const tl = gsap.timeline({ paused: true });

  // Circular expansion
  tl.to(layer, {
    clipPath: `circle(${computeRadius()}px at calc(100% - 60px) 60px)`,
    webkitClipPath: `circle(${computeRadius()}px at calc(100% - 60px) 60px)`,
    duration: 0.6,
    ease: "power2.out",
  });

  // Items in
  tl.to(
    items,
    {
      y: 0,
      autoAlpha: 1,
      stagger: 0.04,
      duration: 0.4,
      ease: "power2.out",
    },
    "-=0.25"
  );

  // Extras in
  tl.to(
    extras,
    {
      y: 0,
      autoAlpha: 1,
      stagger: 0.03,
      duration: 0.4,
      ease: "power2.out",
    },
    "-=0.2"
  );

  if (isOpen) tl.play(0);
  else tl.reverse(0);

  // Keep radius correct when resizing viewport
  const onResize = () => {
    if (isOpen) {
      const r = computeRadius();
      gsap.set(layer, {
        clipPath: `circle(${r}px at calc(100% - 60px) 60px)`,
        webkitClipPath: `circle(${r}px at calc(100% - 60px) 60px)`,
      });
    }
  };
  window.addEventListener("resize", onResize);

  return () => {
    window.removeEventListener("resize", onResize);
    tl.kill();
    gsap.killTweensOf(layer);
    gsap.killTweensOf([
      ...Array.from(items),
      ...Array.from(extras),
    ]);
  };
}