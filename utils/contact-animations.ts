// /utils/contact-animations.ts

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Contact Hero Animations
export const initContactHeroAnimations = () => {
  // Hero title animation
  const tl = gsap.timeline();
  
  tl.from(".contact-hero-word-1", {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power3.out"
  })
  .from(".contact-hero-word-2", {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power3.out"
  }, "-=0.3")
  .from(".contact-hero-subtitle", {
    duration: 0.8,
    y: 50,
    opacity: 0,
    ease: "power2.out"
  }, "-=0.5");

  // Contact methods animation
  gsap.from(".contact-hero-method", {
    duration: 0.8,
    y: 80,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)",
    delay: 1.5
  });

  // Method icons animation
  gsap.utils.toArray(".contact-hero-method").forEach((method: any, index) => {
    gsap.from(method.querySelector(".w-16, .w-20"), {
      duration: 0.8,
      scale: 0,
      rotation: 360,
      ease: "back.out(1.7)",
      delay: index * 0.2 + 1.8
    });
  });

  // Floating scroll indicator
  gsap.to(".contact-hero-scroll", {
    duration: 2,
    y: 10,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut",
    delay: 2.5
  });

  // Background elements animation
  gsap.to(".contact-hero-section .absolute.top-1\\/4", {
    duration: 8,
    rotation: 360,
    repeat: -1,
    ease: "none"
  });
};

// Contact Form Section Animations
export const initContactFormAnimations = () => {
  // Form container animation
  gsap.from(".contact-form-container", {
    duration: 1.2,
    x: -100,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact-form-container",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Info container animation
  gsap.from(".contact-info-container", {
    duration: 1.2,
    x: 100,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact-info-container",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Form title animation
  gsap.from(".contact-form-title", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact-form-title",
      start: "top 85%",
      end: "bottom 15%",
      toggleActions: "play none none reverse"
    }
  });

  // Form fields staggered animation
  gsap.from(".form-field", {
    duration: 0.6,
    y: 30,
    opacity: 0,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact-form",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Submit button animation
  gsap.from(".contact-form-submit", {
    duration: 0.8,
    scale: 0.8,
    opacity: 0,
    ease: "back.out(1.7)",
    delay: 0.5,
    scrollTrigger: {
      trigger: ".contact-form-submit",
      start: "top 85%",
      end: "bottom 15%",
      toggleActions: "play none none reverse"
    }
  });

  // Info cards animation
  gsap.from(".contact-info-card", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".contact-info-card",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Info items animation
  gsap.from(".contact-info-item", {
    duration: 0.6,
    x: -30,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact-info-item",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Social card animation
  gsap.from(".contact-social-card", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "back.out(1.7)",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".contact-social-card",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Promise card animation
  gsap.from(".contact-promise-card", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "back.out(1.7)",
    delay: 0.4,
    scrollTrigger: {
      trigger: ".contact-promise-card",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Success message animation
  gsap.from(".contact-form-success", {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    ease: "back.out(1.7)"
  });
};