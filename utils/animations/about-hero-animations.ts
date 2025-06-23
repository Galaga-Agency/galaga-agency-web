import { gsap } from "gsap";
import { createAnimationManager } from "@/utils/animations/gsap-utils";

export const initAboutHeroAnimations = () => {
  const manager = createAnimationManager();

  const tl = gsap.timeline();

  tl.to(".about-hero-word-1", {
    duration: 1,
    y: 0,
    opacity: 1,
    ease: "power3.out",
  })
    .to(
      ".about-hero-word-2",
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power3.out",
      },
      "-=0.3"
    )
    .to(
      ".about-hero-subtitle",
      {
        duration: 0.8,
        y: 0,
        opacity: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );

  // Stats animation with stagger - animate to visible state
  gsap.to(".about-hero-stat", {
    duration: 0.8,
    y: 0,
    opacity: 1,
    stagger: 0.2,
    ease: "back.out(1.7)",
    delay: 1.5,
  });

  // Floating scroll indicator (if it exists)
  const scrollIndicator = document.querySelector(".about-hero-scroll");
  if (scrollIndicator) {
    gsap.to(scrollIndicator, {
      duration: 2,
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: 2,
    });
  }

  // Background elements subtle animation (if they exist)
  const topElement = document.querySelector(
    ".about-hero-section .absolute.top-1\\/4"
  );
  if (topElement) {
    gsap.to(topElement, {
      duration: 8,
      rotation: 360,
      repeat: -1,
      ease: "none",
    });
  }

  const bottomElement = document.querySelector(
    ".about-hero-section .absolute.bottom-1\\/3"
  );
  if (bottomElement) {
    gsap.to(bottomElement, {
      duration: 12,
      rotation: -360,
      repeat: -1,
      ease: "none",
    });
  }

  // Return cleanup function
  return manager.cleanup;
};
