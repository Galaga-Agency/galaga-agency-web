import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initCTAAnimations = () => {
  // Simplified section header animations - just fade up
  gsap.from([".cta-eyebrow", ".cta-title", ".cta-subtitle"], {
    duration: 1,
    y: 40,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".cta-eyebrow",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // CTA Card - simple entrance
  gsap.from(".cta-card", {
    duration: 1.2,
    y: 60,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".cta-card",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Card content - subtle stagger
  gsap.from([".cta-card-badge", ".cta-card-title", ".cta-card-description", ".cta-card-buttons"], {
    duration: 0.8,
    y: 20,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.15,
    delay: 0.3,
    scrollTrigger: {
      trigger: ".cta-card",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Contact section - simple fade up
  gsap.from(".cta-contact-bar", {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".cta-contact-section",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Setup minimal hover animations
  setupCTAHoverAnimations();

  // Setup only essential continuous animations
  setupCTAContinuousAnimations();

  // Return cleanup function
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
};

const setupCTAHoverAnimations = () => {
  // Primary button - simple lift
  const primaryWrapper = document.querySelector(".cta-primary-wrapper");
  if (primaryWrapper) {
    primaryWrapper.addEventListener("mouseenter", () => {
      gsap.to(".cta-primary-button", {
        duration: 0.3,
        y: -3,
        ease: "power2.out",
      });
    });

    primaryWrapper.addEventListener("mouseleave", () => {
      gsap.to(".cta-primary-button", {
        duration: 0.3,
        y: 0,
        ease: "power2.out",
      });
    });
  }

  // Secondary button - simple lift
  const secondaryWrapper = document.querySelector(".cta-secondary-wrapper");
  if (secondaryWrapper) {
    secondaryWrapper.addEventListener("mouseenter", () => {
      gsap.to(".cta-secondary-button", {
        duration: 0.3,
        y: -3,
        ease: "power2.out",
      });
    });

    secondaryWrapper.addEventListener("mouseleave", () => {
      gsap.to(".cta-secondary-button", {
        duration: 0.3,
        y: 0,
        ease: "power2.out",
      });
    });
  }

  // CTA Card - subtle lift on hover
  const ctaCard = document.querySelector(".cta-card");
  if (ctaCard) {
    ctaCard.addEventListener("mouseenter", () => {
      gsap.to(".cta-card", {
        duration: 0.4,
        y: -8,
        ease: "power2.out",
      });
    });

    ctaCard.addEventListener("mouseleave", () => {
      gsap.to(".cta-card", {
        duration: 0.4,
        y: 0,
        ease: "power2.out",
      });
    });
  }
};

const setupCTAContinuousAnimations = () => {
  // Only keep the essential badge icon rotation - slower and subtler
  gsap.to(".cta-card-icon-left", {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: "none"
  });

  gsap.to(".cta-card-icon-right", {
    rotation: -360,
    duration: 25,
    repeat: -1,
    ease: "none"
  });

  // Very subtle glow pulse on the main card
  gsap.to(".cta-card-glow", {
    opacity: 0.3,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
  });
};