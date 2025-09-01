"use client";

import { gsap } from "@/lib/gsapConfig";

export interface HamburgerAnimationConfig {
  element: HTMLElement;
  isOpen: boolean;
}

export function initHamburgerAnimation({
  element,
  isOpen,
}: HamburgerAnimationConfig) {
  const hamburgerLines =
    element.querySelectorAll<HTMLElement>(".hamburger-line");
  if (hamburgerLines.length < 3) {
    // nothing to wire; return no-op cleanup
    return () => {};
  }

  const [line1, line2, line3] = Array.from(hamburgerLines);

  // Initial positions
  gsap.set([line1, line2, line3], { y: 0, transformOrigin: "50% 50%" });

  // One-time entrance
  if (!element.dataset.initialized) {
    gsap.set(element, { scale: 0 });
    gsap.to(element, {
      scale: 1,
      duration: 0.4,
      ease: "back.out(1.7)",
      delay: 0.5,
    });
    element.dataset.initialized = "true";
  }

  // Toggle animation
  const animateHamburger = (isOpenState: boolean) => {
    if (isOpenState) {
      gsap.to(line1, {
        rotation: 45,
        y: 8,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
      gsap.to(line2, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
        overwrite: "auto",
      });
      gsap.to(line3, {
        rotation: -45,
        y: -8,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    } else {
      gsap.to(line1, {
        rotation: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
      gsap.to(line2, {
        opacity: 1,
        duration: 0.2,
        delay: 0.1,
        ease: "power2.out",
        overwrite: "auto",
      });
      gsap.to(line3, {
        rotation: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  };

  // Apply current state
  animateHamburger(isOpen);

  // Expose updater (optional convenience)
  (element as any).__animateHamburger = animateHamburger;

  // Hover effects (keep refs so we can remove later)
  const onEnter = () =>
    gsap.to(element, {
      scale: 1.05,
      duration: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  const onLeave = () =>
    gsap.to(element, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });

  element.addEventListener("mouseenter", onEnter);
  element.addEventListener("mouseleave", onLeave);

  // Cleanup: kill our tweens + listeners only
  return () => {
    gsap.killTweensOf([element, line1, line2, line3]);
    element.removeEventListener("mouseenter", onEnter);
    element.removeEventListener("mouseleave", onLeave);
    delete (element as any).__animateHamburger;
  };
}
