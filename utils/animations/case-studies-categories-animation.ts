import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initCaseStudiesCategoriesAnimations = () => {
  // Background elements animation
  const bgElements = [
    ".categories-bg-element-1",
    ".categories-bg-element-2", 
    ".categories-bg-element-3"
  ];

  bgElements.forEach((element, i) => {
    gsap.from(element, {
      duration: 2,
      scale: 0,
      opacity: 0,
      ease: "power2.out",
      delay: i * 0.3,
      scrollTrigger: {
        trigger: ".case-studies-categories-section",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // Header animations
  const headerElements = [
    { selector: ".categories-eyebrow", y: 30, opacity: 0, delay: 0 },
    { selector: ".case-studies-categories-title", y: 50, opacity: 0, delay: 0.2 },
    { selector: ".categories-subtitle", y: 30, opacity: 0, delay: 0.4 },
  ];

  headerElements.forEach(({ selector, y, opacity, delay }) => {
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

  // Category cards animation
  gsap.utils.toArray(".category-card").forEach((card: any, i) => {
    // Main card container
    gsap.from(card, {
      duration: 1,
      opacity: 0,
      y: 60,
      ease: "back.out(1.7)",
      delay: i * 0.2,
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    // Icon animation
    const icon = card.querySelector(".category-card-icon");
    if (icon) {
      gsap.from(icon, {
        duration: 0.8,
        opacity: 0,
        scale: 0.5,
        ease: "back.out(1.7)",
        delay: i * 0.2 + 0.3,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }

    // Title animation
    const title = card.querySelector(".category-card-title");
    if (title) {
      gsap.from(title, {
        duration: 0.6,
        opacity: 0,
        y: 20,
        ease: "power2.out",
        delay: i * 0.2 + 0.5,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }

    // Description animation
    const description = card.querySelector(".category-card-description");
    if (description) {
      gsap.from(description, {
        duration: 0.6,
        opacity: 0,
        y: 15,
        ease: "power2.out",
        delay: i * 0.2 + 0.7,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }

    // Count animation
    const count = card.querySelector(".category-card-count");
    if (count) {
      gsap.from(count, {
        duration: 0.5,
        opacity: 0,
        scale: 0.8,
        ease: "power2.out",
        delay: i * 0.2 + 0.9,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }

    // Accent dot animation
    const accent = card.querySelector(".category-card-accent");
    if (accent) {
      gsap.from(accent, {
        duration: 0.4,
        opacity: 0,
        scale: 0,
        ease: "back.out(1.7)",
        delay: i * 0.2 + 1.1,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }
  });

  // CTA section animation
  const ctaElements = [
    { selector: ".categories-cta-title", y: 30, opacity: 0, delay: 0 },
    { selector: ".categories-cta-description", y: 20, opacity: 0, delay: 0.2 },
    { selector: ".categories-cta-buttons", y: 20, opacity: 0, delay: 0.4 },
  ];

  ctaElements.forEach(({ selector, y, opacity, delay }) => {
    gsap.from(selector, {
      duration: 0.8,
      y,
      opacity,
      ease: "power2.out",
      delay,
      scrollTrigger: {
        trigger: ".categories-cta",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // Cleanup function
  return () => ScrollTrigger.getAll().forEach((t) => t.kill());
};