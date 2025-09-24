"use client";

import { gsap, ScrollTrigger } from "@/lib/gsapConfig";

export const initBoucingBubblesAnimation = () => {
  const bubbles = document.querySelectorAll(".bubble-1, .bubble-2, .bubble-3");

  // Set initial state - completely hidden
  gsap.set(bubbles, { y: 100, opacity: 0 });

  const triggers: ScrollTrigger[] = [];

  bubbles.forEach((bubble, index) => {
    const trigger = ScrollTrigger.create({
      trigger: ".bubble-section, .bubble-section-2",
      start: "top 85%",
      end: "bottom 15%",
      onEnter: () => {
        gsap.to(bubble, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: index * 0.3,
        });
      },
      onLeaveBack: () => {
        gsap.to(bubble, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power2.in",
          delay: (2 - index) * 0.2,
        });
      },
    });
    triggers.push(trigger);
  });

  // Cleanup: only kill what we created
  return () => {
    gsap.killTweensOf(bubbles);
    triggers.forEach((t) => t.kill());
  };
};
