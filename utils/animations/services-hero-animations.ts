import { gsap } from "gsap";
import { createAnimationManager } from "@/utils/animations/gsap-utils";

export const initServicesHeroAnimations = () => {
  const manager = createAnimationManager();

  // Hero title words
  const tl = gsap.timeline();
  tl.to(".services-hero-word-1", {
    duration: 1,
    y: 0,
    opacity: 1,
    ease: "power3.out",
  })
    .to(
      ".services-hero-word-2",
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power3.out",
      },
      "-=0.3"
    )
    .to(
      ".services-hero-subtitle",
      {
        duration: 0.8,
        y: 0,
        opacity: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );

  // Service areas fade‐in + stagger
  gsap.to(".services-hero-area", {
    duration: 0.8,
    y: 0,
    opacity: 1,
    stagger: 0.2,
    ease: "back.out(1.7)",
    delay: 1.5,
  });

  // Area icons pop in
  gsap.utils.toArray(".services-hero-area").forEach((area: any, i) => {
    const icon = area.querySelector(".services-hero-area-icon");
    if (icon) {
      gsap.to(icon, {
        duration: 0.8,
        scale: 1,
        rotation: 0,
        ease: "back.out(1.7)",
        delay: i * 0.2 + 1.8,
      });
    }
  });

  // Scroll indicator float
  const scroll = document.querySelector(".services-hero-scroll");
  if (scroll) {
    gsap.to(scroll, {
      duration: 2,
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: 2.5,
    });
  }

  // Background decorative orbs
  const orbTop = document.querySelector(".services-hero-bg-top");
  if (orbTop) {
    gsap.to(orbTop, {
      duration: 8,
      rotation: 360,
      repeat: -1,
      ease: "none",
    });
  }
  const orbBottom = document.querySelector(".services-hero-bg-bottom");
  if (orbBottom) {
    gsap.to(orbBottom, {
      duration: 12,
      rotation: -360,
      repeat: -1,
      ease: "none",
    });
  }

  return manager.cleanup;
};
