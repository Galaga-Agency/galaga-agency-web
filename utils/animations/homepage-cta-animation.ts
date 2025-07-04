import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initCTAAnimations = () => {
  // Hero text - powerful entrance
  gsap.from(".cta-title", {
    duration: 1.2,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".cta-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".cta-subtitle", {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.3,
    scrollTrigger: {
      trigger: ".cta-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  // CTA Card - clean entrance
  gsap.from(".cta-card", {
    duration: 1.2,
    y: 60,
    opacity: 0,
    scale: 0.95,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".cta-card",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  // Card content - subtle reveal
  gsap.from([".cta-card-title", ".cta-card-description", ".cta-card-buttons"], {
    duration: 0.8,
    y: 20,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.15,
    delay: 0.4,
    scrollTrigger: {
      trigger: ".cta-card",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  // Setup hover animations
  setupCTAHoverAnimations();

  // Return cleanup function
  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
};

const setupCTAHoverAnimations = () => {
  // Primary button - subtle lift
  const primaryButton = document.querySelector(".cta-primary-button");
  if (primaryButton) {
    primaryButton.addEventListener("mouseenter", () => {
      gsap.to(primaryButton, {
        duration: 0.3,
        y: -4,
        scale: 1.02,
        ease: "power2.out",
      });
    });

    primaryButton.addEventListener("mouseleave", () => {
      gsap.to(primaryButton, {
        duration: 0.3,
        y: 0,
        scale: 1,
        ease: "power2.out",
      });
    });
  }

  // Secondary button - subtle lift
  const secondaryButton = document.querySelector(".cta-secondary-button");
  if (secondaryButton) {
    secondaryButton.addEventListener("mouseenter", () => {
      gsap.to(secondaryButton, {
        duration: 0.3,
        y: -4,
        scale: 1.02,
        ease: "power2.out",
      });
    });

    secondaryButton.addEventListener("mouseleave", () => {
      gsap.to(secondaryButton, {
        duration: 0.3,
        y: 0,
        scale: 1,
        ease: "power2.out",
      });
    });
  }

  // CTA Card - gentle lift on hover
  const ctaCard = document.querySelector(".cta-card");
  if (ctaCard) {
    ctaCard.addEventListener("mouseenter", () => {
      gsap.to(ctaCard, {
        duration: 0.4,
        y: -8,
        scale: 1.02,
        ease: "power2.out",
      });
    });

    ctaCard.addEventListener("mouseleave", () => {
      gsap.to(ctaCard, {
        duration: 0.4,
        y: 0,
        scale: 1,
        ease: "power2.out",
      });
    });
  }
};
