import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initProyectoDetalleAnimations = () => {
  // Hero section animations
  const heroElements = [
    { selector: ".proyecto-detalle-breadcrumb", y: 20, opacity: 0, delay: 0 },
    { selector: ".proyecto-detalle-category", y: 30, opacity: 0, delay: 0.1 },
    { selector: ".proyecto-detalle-title", y: 50, opacity: 0, delay: 0.2 },
    { selector: ".proyecto-detalle-subtitle", y: 30, opacity: 0, delay: 0.3 },
    { selector: ".proyecto-detalle-meta", y: 20, opacity: 0, delay: 0.4 },
    { selector: ".proyecto-detalle-tags", y: 20, opacity: 0, delay: 0.5 },
    { selector: ".proyecto-detalle-cta", y: 20, opacity: 0, delay: 0.6 },
  ];

  heroElements.forEach(({ selector, y, opacity, delay }) => {
    gsap.from(selector, {
      duration: 0.8,
      y,
      opacity,
      ease: "power2.out",
      delay,
    });
  });

  // Hero image animation
  gsap.from(".proyecto-detalle-image", {
    duration: 1.2,
    scale: 0.8,
    opacity: 0,
    ease: "back.out(1.7)",
    delay: 0.3,
  });

  // Background elements
  gsap.from(".proyecto-hero-bg-element-1, .proyecto-hero-bg-element-2", {
    duration: 2,
    scale: 0,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.3,
  });

  // Content section - Challenge block
  gsap.from(".challenge-icon", {
    duration: 0.6,
    scale: 0.5,
    rotation: -15,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".challenge-icon",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".proyecto-content-challenge h2", {
    duration: 0.6,
    x: -30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".challenge-icon",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".proyecto-content-challenge p", {
    duration: 0.6,
    y: 20,
    opacity: 0,
    ease: "power2.out",
    delay: 0.4,
    scrollTrigger: {
      trigger: ".challenge-icon",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Content section - Solution block
  gsap.from(".solution-icon", {
    duration: 0.6,
    scale: 0.5,
    rotation: 15,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".solution-icon",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".proyecto-content-solution h2", {
    duration: 0.6,
    x: 30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".solution-icon",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".proyecto-content-solution p", {
    duration: 0.6,
    y: 20,
    opacity: 0,
    ease: "power2.out",
    delay: 0.4,
    scrollTrigger: {
      trigger: ".solution-icon",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Technologies tags
  gsap.from(".proyecto-tech-tag", {
    duration: 0.4,
    scale: 0.8,
    opacity: 0,
    stagger: 0.1,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".proyecto-technologies",
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  // Features list
  gsap.from(".proyecto-feature-item", {
    duration: 0.5,
    x: -20,
    opacity: 0,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".proyecto-features",
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  // Results section header
  const resultsHeaderElements = [
    { selector: ".results-eyebrow", y: 30, opacity: 0, delay: 0 },
    { selector: ".results-title", y: 50, opacity: 0, delay: 0.2 },
    { selector: ".results-subtitle", y: 30, opacity: 0, delay: 0.4 },
  ];

  resultsHeaderElements.forEach(({ selector, y, opacity, delay }) => {
    gsap.from(selector, {
      duration: 0.8,
      y,
      opacity,
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
  gsap.utils.toArray(".result-card").forEach((card: any, i) => {
    gsap.from(card, {
      duration: 1,
      opacity: 0,
      y: 60,
      ease: "back.out(1.7)",
      delay: i * 0.1,
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    // Icon animation
    const icon = card.querySelector(".result-card-icon");
    if (icon) {
      gsap.from(icon, {
        duration: 0.6,
        opacity: 0,
        scale: 0.5,
        ease: "back.out(1.7)",
        delay: i * 0.1 + 0.3,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }

    // Value animation
    const value = card.querySelector(".result-card-value");
    if (value) {
      gsap.from(value, {
        duration: 0.8,
        opacity: 0,
        scale: 0.8,
        ease: "power2.out",
        delay: i * 0.1 + 0.5,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }

    // Label animation
    const label = card.querySelector(".result-card-label");
    if (label) {
      gsap.from(label, {
        duration: 0.6,
        opacity: 0,
        y: 15,
        ease: "power2.out",
        delay: i * 0.1 + 0.7,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }

    // Accent dot animation
    const accent = card.querySelector(".result-card-accent");
    if (accent) {
      gsap.from(accent, {
        duration: 0.4,
        opacity: 0,
        scale: 0,
        ease: "back.out(1.7)",
        delay: i * 0.1 + 0.9,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }
  });

  // Testimonial animation
  gsap.from(".results-testimonial", {
    duration: 1,
    opacity: 0,
    y: 40,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".results-testimonial",
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".testimonial-quote", {
    duration: 0.8,
    opacity: 0,
    y: 20,
    ease: "power2.out",
    delay: 0.3,
    scrollTrigger: {
      trigger: ".results-testimonial",
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".testimonial-author", {
    duration: 0.6,
    opacity: 0,
    scale: 0.9,
    ease: "back.out(1.7)",
    delay: 0.5,
    scrollTrigger: {
      trigger: ".results-testimonial",
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  // Background elements for results section
  gsap.from(".results-bg-element-1, .results-bg-element-2", {
    duration: 2,
    scale: 0,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".proyecto-detalle-results-section",
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  // Cleanup function
  return () => ScrollTrigger.getAll().forEach((t) => t.kill());
};