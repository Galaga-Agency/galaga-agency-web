import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initProyectoDetalleAnimations = () => {
  // Hero section animations (0 → 1 opacity, slide in)
  const heroElements = [
    { selector: ".proyecto-detalle-breadcrumb", y: 20, delay: 0 },
    { selector: ".proyecto-detalle-category",   y: 30, delay: 0.1 },
    { selector: ".proyecto-detalle-title",      y: 50, delay: 0.2 },
    { selector: ".proyecto-detalle-subtitle",   y: 30, delay: 0.3 },
    { selector: ".proyecto-detalle-metrics",    y: 20, delay: 0.4 },
  ];

  heroElements.forEach(({ selector, y, delay }) => {
    gsap.fromTo(
      selector,
      { y, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay }
    );
  });

  // Hero image animation
  gsap.fromTo(
    ".proyecto-detalle-image",
    { scale: 0.8, opacity: 0 },
    { scale: 1,   opacity: 1, duration: 1.2, ease: "back.out(1.7)", delay: 0.3 }
  );

  // Metrics items
  gsap.fromTo(
    ".proyecto-metric-item",
    { scale: 0.8, opacity: 0 },
    { scale: 1,   opacity: 1, duration: 0.6, ease: "back.out(1.7)", stagger: 0.2, delay: 0.5 }
  );

  // Background circles in hero
  gsap.fromTo(
    ".proyecto-hero-bg-element-1, .proyecto-hero-bg-element-2",
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, duration: 2, ease: "power2.out", stagger: 0.3 }
  );

  // Content section - Challenge block
  gsap.to(".challenge-icon", {
    duration: 0.6,
    opacity: 1,
    scale: 1,
    rotation: 0,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".challenge-icon",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.to(".proyecto-content-challenge-title", {
    duration: 0.6,
    x: 0,
    opacity: 1,
    ease: "power2.out",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".challenge-icon",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.to(".proyecto-content-challenge-text", {
    duration: 0.6,
    y: 0,
    opacity: 1,
    ease: "power2.out",
    delay: 0.4,
    scrollTrigger: {
      trigger: ".challenge-icon",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Content section - Solution block
  gsap.to(".solution-icon", {
    duration: 0.6,
    opacity: 1,
    scale: 1,
    rotation: 0,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".solution-icon",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.to(".proyecto-content-solution-title", {
    duration: 0.6,
    x: 0,
    opacity: 1,
    ease: "power2.out",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".solution-icon",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.to(".proyecto-content-solution-text", {
    duration: 0.6,
    y: 0,
    opacity: 1,
    ease: "power2.out",
    delay: 0.4,
    scrollTrigger: {
      trigger: ".solution-icon",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Content section - Results block
  gsap.to(".results-icon", {
    duration: 0.6,
    opacity: 1,
    scale: 1,
    rotation: 0,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".results-icon",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.to(".proyecto-content-results-title", {
    duration: 0.6,
    x: 0,
    opacity: 1,
    ease: "power2.out",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".results-icon",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.to(".proyecto-content-results-text", {
    duration: 0.6,
    y: 0,
    opacity: 1,
    ease: "power2.out",
    delay: 0.4,
    scrollTrigger: {
      trigger: ".results-icon",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Results section header
  const resultsHeaderElements = [
    { selector: ".results-eyebrow",   y: 30, delay: 0 },
    { selector: ".results-title",     y: 50, delay: 0.2 },
    { selector: ".results-subtitle",  y: 30, delay: 0.4 },
  ];

  resultsHeaderElements.forEach(({ selector, y, delay }) => {
    gsap.to(selector, {
      duration: 0.8,
      y: 0,
      opacity: 1,
      ease: "power2.out",
      delay,
      scrollTrigger: {
        trigger: selector,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // Results cards
  gsap.utils.toArray(".result-card").forEach((card: any, i: number) => {
    gsap.to(card, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "back.out(1.7)",
      delay: i * 0.2,
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    const value = card.querySelector(".result-card-value");
    if (value) {
      gsap.from(value, {
        duration: 0.8,
        opacity: 0,
        scale: 0.8,
        ease: "power2.out",
        delay: i * 0.2 + 0.3,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }

    const label = card.querySelector(".result-card-label");
    if (label) {
      gsap.from(label, {
        duration: 0.6,
        opacity: 0,
        y: 15,
        ease: "power2.out",
        delay: i * 0.2 + 0.5,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }

    const accent = card.querySelector(".result-card-accent");
    if (accent) {
      gsap.from(accent, {
        duration: 0.4,
        opacity: 0,
        scale: 0,
        ease: "back.out(1.7)",
        delay: i * 0.2 + 0.7,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }
  });

  // Background elements for results section
  gsap.to(".results-bg-element-1, .results-bg-element-2", {
    duration: 2,
    scale: 1,
    opacity: 1,
    ease: "power2.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".proyecto-detalle-results-section",
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  // Cleanup on unmount
  return () => ScrollTrigger.getAll().forEach((t) => t.kill());
};
