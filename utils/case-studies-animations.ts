import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Case Studies Hero Animations
export const initCaseStudiesHeroAnimations = () => {
  // Hero title animation
  const tl = gsap.timeline();
  
  tl.from(".case-studies-hero-word-1", {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power3.out"
  })
  .from(".case-studies-hero-word-2", {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power3.out"
  }, "-=0.3")
  .from(".case-studies-hero-subtitle", {
    duration: 0.8,
    y: 50,
    opacity: 0,
    ease: "power2.out"
  }, "-=0.5");

  // Stats animation with stagger
  gsap.from(".case-studies-hero-stat", {
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)",
    delay: 1.5
  });

  // Floating scroll indicator
  gsap.to(".case-studies-hero-scroll", {
    duration: 2,
    y: 10,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut",
    delay: 2
  });

  // Background elements animation
  gsap.to(".case-studies-hero-section .absolute.top-1\\/4", {
    duration: 8,
    rotation: 360,
    repeat: -1,
    ease: "none"
  });
};

// Case Studies Grid Animations
export const initCaseStudiesGridAnimations = () => {
  // Section title animation
  gsap.from(".case-studies-grid-title", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".case-studies-grid-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Case study cards staggered animation
  gsap.from(".case-study-grid-card", {
    duration: 1,
    y: 80,
    opacity: 0,
    stagger: 0.3,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".case-study-grid-card",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Individual card elements
  gsap.utils.toArray(".case-study-grid-card").forEach((card: any, index) => {
    // Category badge animation
    gsap.from(card.querySelector(".absolute.top-6.left-6"), {
      duration: 0.6,
      scale: 0,
      ease: "back.out(1.7)",
      delay: index * 0.3 + 0.5,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Metrics animation
    gsap.from(card.querySelectorAll(".grid.grid-cols-3 > div"), {
      duration: 0.6,
      y: 20,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out",
      delay: index * 0.3 + 0.7,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Title and description animation
    gsap.from(card.querySelector("h3"), {
      duration: 0.6,
      x: -30,
      opacity: 0,
      ease: "power2.out",
      delay: index * 0.3 + 0.9,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(card.querySelector("p"), {
      duration: 0.6,
      y: 20,
      opacity: 0,
      ease: "power2.out",
      delay: index * 0.3 + 1.1,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Setup hover animations
  setupCaseStudyCardHovers();
};

// Case Studies Categories Animations
export const initCaseStudiesCategoriesAnimations = () => {
  // Section title animation
  gsap.from(".case-studies-categories-title", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".case-studies-categories-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Category cards animation
  gsap.from(".category-card", {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.3,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".category-card",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Individual category elements
  gsap.utils.toArray(".category-card").forEach((card: any, index) => {
    // Icon animation
    gsap.from(card.querySelector(".w-20, .w-24"), {
      duration: 0.8,
      scale: 0,
      rotation: 360,
      ease: "back.out(1.7)",
      delay: index * 0.3 + 0.5,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Count circle animation
    gsap.from(card.querySelector(".w-8.h-8"), {
      duration: 0.6,
      scale: 0,
      ease: "back.out(1.7)",
      delay: index * 0.3 + 0.7,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // CTA section animation
  gsap.from(".case-studies-categories-cta-title", {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".case-studies-categories-cta-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });
};

// Setup hover animations for case study cards
const setupCaseStudyCardHovers = () => {
  gsap.utils.toArray(".case-study-grid-card").forEach((card: any) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        duration: 0.3,
        scale: 1.05,
        y: -10,
        ease: "power2.out"
      });

      // Glow effect
      gsap.to(card.querySelector(".absolute.inset-0"), {
        duration: 0.3,
        opacity: 1,
        ease: "power2.out"
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        duration: 0.3,
        scale: 1,
        y: 0,
        ease: "power2.out"
      });

      // Remove glow
      gsap.to(card.querySelector(".absolute.inset-0"), {
        duration: 0.3,
        opacity: 0,
        ease: "power2.out"
      });
    });
  });
};