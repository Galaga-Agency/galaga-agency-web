import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createAnimationManager } from "@/utils/animations/gsap-utils";

gsap.registerPlugin(ScrollTrigger);

// Case Studies Hero Animations
export const initCaseStudiesHeroAnimations = () => {
  const manager = createAnimationManager();

  // Hero title animation timeline - animate TO visible state
  const tl = gsap.timeline();

  tl.to(".case-studies-hero-word-1", {
    duration: 1,
    y: 0,
    opacity: 1,
    ease: "power3.out",
  })
    .to(
      ".case-studies-hero-word-2",
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power3.out",
      },
      "-=0.3"
    )
    .to(
      ".case-studies-hero-subtitle",
      {
        duration: 0.8,
        y: 0,
        opacity: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );

  // Stats animation with stagger - animate TO visible state
  gsap.to(".case-studies-hero-stat", {
    duration: 0.8,
    y: 0,
    opacity: 1,
    stagger: 0.2,
    ease: "back.out(1.7)",
    delay: 1.5,
  });

  // Floating scroll indicator (if it exists)
  const scrollIndicator = document.querySelector(".case-studies-hero-scroll");
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

  // Background elements animation (if they exist)
  const topElement = document.querySelector(
    ".case-studies-hero-section .absolute.top-1\\/4"
  );
  if (topElement) {
    gsap.to(topElement, {
      duration: 8,
      rotation: 360,
      repeat: -1,
      ease: "none",
    });
  }

  // Return cleanup function
  return manager.cleanup;
};

// Case Studies Grid Animations
export const initCaseStudiesGridAnimations = () => {
  const manager = createAnimationManager();

  // Section title animation
  manager.addAnimation(".case-studies-grid-title", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
  });

  // Case study cards staggered animation
  manager.addAnimation(".case-study-grid-card", {
    duration: 1,
    y: 80,
    opacity: 0,
    stagger: 0.3,
    ease: "back.out(1.7)",
  });

  // Individual card elements
  gsap.utils.toArray(".case-study-grid-card").forEach((card: any, index) => {
    if (!card) return;

    // Category badge animation
    const badgeElement = card.querySelector(".absolute.top-6.left-6");
    if (badgeElement) {
      const badgeTrigger = ScrollTrigger.create({
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        animation: gsap.from(badgeElement, {
          duration: 0.6,
          scale: 0,
          ease: "back.out(1.7)",
          delay: index * 0.3 + 0.5,
          paused: true,
        }),
      });
      manager.scrollTriggers.push(badgeTrigger);
    }

    // Metrics animation
    const metricsElements = card.querySelectorAll(".grid.grid-cols-3 > div");
    if (metricsElements.length > 0) {
      const metricsTrigger = ScrollTrigger.create({
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        animation: gsap.from(metricsElements, {
          duration: 0.6,
          y: 20,
          opacity: 0,
          stagger: 0.1,
          ease: "power2.out",
          delay: index * 0.3 + 0.7,
          paused: true,
        }),
      });
      manager.scrollTriggers.push(metricsTrigger);
    }

    // Title animation
    const titleElement = card.querySelector("h3");
    if (titleElement) {
      const titleTrigger = ScrollTrigger.create({
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        animation: gsap.from(titleElement, {
          duration: 0.6,
          x: -30,
          opacity: 0,
          ease: "power2.out",
          delay: index * 0.3 + 0.9,
          paused: true,
        }),
      });
      manager.scrollTriggers.push(titleTrigger);
    }

    // Description animation
    const descElement = card.querySelector("p");
    if (descElement) {
      const descTrigger = ScrollTrigger.create({
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        animation: gsap.from(descElement, {
          duration: 0.6,
          y: 20,
          opacity: 0,
          ease: "power2.out",
          delay: index * 0.3 + 1.1,
          paused: true,
        }),
      });
      manager.scrollTriggers.push(descTrigger);
    }
  });

  // Setup hover animations
  setupCaseStudyCardHovers();

  // Return cleanup function
  return manager.cleanup;
};

// Case Studies Categories Animations
export const initCaseStudiesCategoriesAnimations = () => {
  const manager = createAnimationManager();

  // Section title animation
  manager.addAnimation(".case-studies-categories-title", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
  });

  // Category cards animation
  manager.addAnimation(".category-card", {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.3,
    ease: "back.out(1.7)",
  });

  // Individual category elements
  gsap.utils.toArray(".category-card").forEach((card: any, index) => {
    if (!card) return;

    // Icon animation
    const iconElement = card.querySelector(".w-20, .w-24");
    if (iconElement) {
      const iconTrigger = ScrollTrigger.create({
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        animation: gsap.from(iconElement, {
          duration: 0.8,
          scale: 0,
          rotation: 360,
          ease: "back.out(1.7)",
          delay: index * 0.3 + 0.5,
          paused: true,
        }),
      });
      manager.scrollTriggers.push(iconTrigger);
    }

    // Count circle animation
    const countElement = card.querySelector(".w-8.h-8");
    if (countElement) {
      const countTrigger = ScrollTrigger.create({
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        animation: gsap.from(countElement, {
          duration: 0.6,
          scale: 0,
          ease: "back.out(1.7)",
          delay: index * 0.3 + 0.7,
          paused: true,
        }),
      });
      manager.scrollTriggers.push(countTrigger);
    }
  });

  // CTA section animation
  manager.addAnimation(".case-studies-categories-cta-title", {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    ease: "back.out(1.7)",
  });

  // Return cleanup function
  return manager.cleanup;
};

// Setup hover animations for case study cards
const setupCaseStudyCardHovers = () => {
  gsap.utils.toArray(".case-study-grid-card").forEach((card: any) => {
    if (!card) return;

    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        duration: 0.3,
        scale: 1.05,
        y: -10,
        ease: "power2.out",
      });

      // Glow effect
      const glowElement = card.querySelector(".absolute.inset-0");
      if (glowElement) {
        gsap.to(glowElement, {
          duration: 0.3,
          opacity: 1,
          ease: "power2.out",
        });
      }
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        duration: 0.3,
        scale: 1,
        y: 0,
        ease: "power2.out",
      });

      // Remove glow
      const glowElement = card.querySelector(".absolute.inset-0");
      if (glowElement) {
        gsap.to(glowElement, {
          duration: 0.3,
          opacity: 0,
          ease: "power2.out",
        });
      }
    });
  });
};
