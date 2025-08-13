import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initContactFormAnimations = () => {
  // Header animations - following your pattern
  const headerElements = [
    { selector: ".contact-form-eyebrow", y: 20, opacity: 0, delay: 0 },
    { selector: ".contact-form-title", y: 30, opacity: 0, delay: 0.2 },
    { selector: ".contact-form-subtitle", y: 20, opacity: 0, delay: 0.4 },
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

  // Left side content animation - matching your about section pattern
  const leftSideElements = [
    ".contact-form-info .flex.items-center", // Icon + title block
    ".contact-form-info p", // Description
  ];

  leftSideElements.forEach((selector, i) => {
    gsap.from(selector, {
      duration: 0.6,
      y: 20,
      opacity: 0,
      ease: "power2.out",
      delay: i * 0.1,
      scrollTrigger: {
        trigger: ".contact-form-info",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // Contact info cards with stagger - like your client category cards
  gsap.utils.toArray(".contact-info-methods > div").forEach((card: any, i) => {
    gsap.from(card, {
      duration: 0.6,
      x: -20,
      opacity: 0,
      ease: "power2.out",
      delay: i * 0.1 + 0.3,
      scrollTrigger: {
        trigger: ".contact-info-methods",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // Form card animation - like your brand cards
  gsap.from(".contact-form-container .brand-card", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".contact-form-container",
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  // Form fields with gentle stagger - very subtle like your other forms
  gsap.utils.toArray(".form-field").forEach((field: any, i) => {
    gsap.from(field, {
      duration: 0.4,
      y: 10,
      opacity: 0,
      ease: "power2.out",
      delay: i * 0.03 + 0.4,
      scrollTrigger: {
        trigger: ".contact-form",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // Submit button
  gsap.from(".contact-form-submit", {
    duration: 0.6,
    y: 15,
    opacity: 0,
    ease: "power2.out",
    delay: 0.7,
    scrollTrigger: {
      trigger: ".contact-form-submit",
      start: "top 90%",
      toggleActions: "play none none none",
    },
  });

  // Success state animations - following your success pattern
  const successElement = document.querySelector(".contact-form-success");
  if (successElement) {
    gsap.from(".contact-form-success", {
      duration: 0.6,
      scale: 0.95,
      opacity: 0,
      ease: "power2.out",
    });

    gsap.from(".contact-form-success .w-20", {
      duration: 0.5,
      scale: 0.8,
      opacity: 0,
      ease: "back.out(1.7)",
      delay: 0.2,
    });

    gsap.from(".contact-form-success h3", {
      duration: 0.5,
      y: 15,
      opacity: 0,
      ease: "power2.out",
      delay: 0.3,
    });

    gsap.from(".contact-form-success p", {
      duration: 0.5,
      y: 10,
      opacity: 0,
      ease: "power2.out",
      delay: 0.4,
    });
  }

  // Cleanup function
  return () => ScrollTrigger.getAll().forEach((t) => t.kill());
};