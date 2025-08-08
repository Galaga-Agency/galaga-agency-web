import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initAboutStoryAnimations = () => {
  // Section header animations
  gsap.from(".about-story-eyebrow", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-story-eyebrow",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".about-story-title", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-story-title",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".about-story-subtitle", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".about-story-subtitle",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Background decorative element
  gsap.from(".about-story-bg", {
    duration: 2,
    scale: 0.8,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-story-bg",
      start: "top 90%",
      toggleActions: "play none none none",
    },
  });

  // Story Block 1 animations
  gsap.from(".story-block-1", {
    duration: 1,
    x: -100,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".story-block-1",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".story-header-1", {
    duration: 0.8,
    y: 40,
    opacity: 0,
    ease: "power2.out",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".story-block-1",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".story-icon-1", {
    duration: 0.6,
    scale: 0,
    rotation: 180,
    ease: "back.out(1.7)",
    delay: 0.4,
    scrollTrigger: {
      trigger: ".story-block-1",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".story-year-1", {
    duration: 0.6,
    x: -20,
    opacity: 0,
    ease: "power2.out",
    delay: 0.5,
    scrollTrigger: {
      trigger: ".story-block-1",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".story-title-1", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.6,
    scrollTrigger: {
      trigger: ".story-block-1",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".story-description-1", {
    duration: 0.8,
    y: 20,
    opacity: 0,
    ease: "power2.out",
    delay: 0.7,
    scrollTrigger: {
      trigger: ".story-block-1",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".story-image-1", {
    duration: 1,
    opacity: 0,
    ease: "power2.out",
    delay: 0.3,
    scrollTrigger: {
      trigger: ".story-block-1",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  // Story Block 2 animations
  gsap.from(".story-block-2", {
    duration: 1,
    x: 100,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".story-block-2",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".story-header-2", {
    duration: 0.8,
    y: 40,
    opacity: 0,
    ease: "power2.out",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".story-block-2",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".story-icon-2", {
    duration: 0.6,
    scale: 0,
    rotation: 180,
    ease: "back.out(1.7)",
    delay: 0.4,
    scrollTrigger: {
      trigger: ".story-block-2",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".story-year-2", {
    duration: 0.6,
    x: -20,
    opacity: 0,
    ease: "power2.out",
    delay: 0.5,
    scrollTrigger: {
      trigger: ".story-block-2",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".story-title-2", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.6,
    scrollTrigger: {
      trigger: ".story-block-2",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".story-description-2", {
    duration: 0.8,
    y: 20,
    opacity: 0,
    ease: "power2.out",
    delay: 0.7,
    scrollTrigger: {
      trigger: ".story-block-2",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".story-image-2", {
    duration: 1,
    opacity: 0,
    ease: "power2.out",
    delay: 0.3,
    scrollTrigger: {
      trigger: ".story-block-2",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  // Story Block 3 animations
  gsap.from(".story-block-3", {
    duration: 1,
    x: -100,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".story-block-3",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".story-header-3", {
    duration: 0.8,
    y: 40,
    opacity: 0,
    ease: "power2.out",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".story-block-3",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".story-icon-3", {
    duration: 0.6,
    scale: 0,
    rotation: 180,
    ease: "back.out(1.7)",
    delay: 0.4,
    scrollTrigger: {
      trigger: ".story-block-3",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".story-year-3", {
    duration: 0.6,
    x: -20,
    opacity: 0,
    ease: "power2.out",
    delay: 0.5,
    scrollTrigger: {
      trigger: ".story-block-3",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".story-title-3", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.6,
    scrollTrigger: {
      trigger: ".story-block-3",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".story-description-3", {
    duration: 0.8,
    y: 20,
    opacity: 0,
    ease: "power2.out",
    delay: 0.7,
    scrollTrigger: {
      trigger: ".story-block-3",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".story-image-3", {
    duration: 1,
    opacity: 0,
    ease: "power2.out",
    delay: 0.3,
    scrollTrigger: {
      trigger: ".story-block-3",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  // Values grid animation
  gsap.from([".story-value-1", ".story-value-2", ".story-value-3"], {
    duration: 0.6,
    y: 30,
    opacity: 0,
    stagger: 0.1,
    ease: "power2.out",
    delay: 0.8,
    scrollTrigger: {
      trigger: ".story-values-grid",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from([".story-value-text-1", ".story-value-text-2", ".story-value-text-3"], {
    duration: 0.8,
    opacity: 0,
    stagger: 0.1,
    ease: "back.out(1.7)",
    delay: 1,
    scrollTrigger: {
      trigger: ".story-values-grid",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Setup hover animations
  setupStoryHovers();

  // Return cleanup function
  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
};

const setupStoryHovers = () => {
  // Icon hover animations
  [".story-icon-1", ".story-icon-2", ".story-icon-3"].forEach((selector) => {
    const element = document.querySelector(selector);
    if (!element) return;

    element.addEventListener("mouseenter", () => {
      gsap.to(selector, {
        duration: 0.3,
        rotation: 5,
        scale: 1.1,
        ease: "power2.out",
      });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(selector, {
        duration: 0.3,
        rotation: 0,
        scale: 1,
        ease: "power2.out",
      });
    });
  });

  // Value hover animations
  [".story-value-1", ".story-value-2", ".story-value-3"].forEach((selector, index) => {
    const element = document.querySelector(selector);
    const textSelector = `.story-value-text-${index + 1}`;
    
    if (!element) return;

    element.addEventListener("mouseenter", () => {
      gsap.to(selector, {
        duration: 0.3,
        scale: 1.05,
        y: -5,
        ease: "power2.out",
      });

      gsap.to(textSelector, {
        duration: 0.3,
        scale: 1.1,
        ease: "power2.out",
      });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(selector, {
        duration: 0.3,
        scale: 1,
        y: 0,
        ease: "power2.out",
      });

      gsap.to(textSelector, {
        duration: 0.3,
        scale: 1,
        ease: "power2.out",
      });
    });
  });
};