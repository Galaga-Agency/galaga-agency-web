import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createAnimationManager } from "@/utils/animations/gsap-utils";

gsap.registerPlugin(ScrollTrigger);

// Contact Hero Animations
export const initContactHeroAnimations = () => {
  const manager = createAnimationManager();

  // Hero title animation timeline - animate TO visible state
  const tl = gsap.timeline();

  tl.to(".contact-hero-word-1", {
    duration: 1,
    y: 0,
    opacity: 1,
    ease: "power3.out",
  })
    .to(
      ".contact-hero-word-2",
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power3.out",
      },
      "-=0.3"
    )
    .to(
      ".contact-hero-subtitle",
      {
        duration: 0.8,
        y: 0,
        opacity: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );

  // Contact methods animation - animate TO visible state
  gsap.to(".contact-hero-method", {
    duration: 0.8,
    y: 0,
    opacity: 1,
    stagger: 0.2,
    ease: "back.out(1.7)",
    delay: 1.5,
  });

  // Method icons animation - animate TO visible state
  gsap.utils.toArray(".contact-hero-method").forEach((method: any, index) => {
    const iconElement = method.querySelector(".w-16, .w-20");
    if (iconElement) {
      gsap.to(iconElement, {
        duration: 0.8,
        scale: 1,
        rotation: 0,
        ease: "back.out(1.7)",
        delay: index * 0.2 + 1.8,
      });
    }
  });

  // Floating scroll indicator (if it exists)
  const scrollIndicator = document.querySelector(".contact-hero-scroll");
  if (scrollIndicator) {
    gsap.to(scrollIndicator, {
      duration: 2,
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: 2.5,
    });
  }

  // Background elements animation (if they exist)
  const topElement = document.querySelector(
    ".contact-hero-section .absolute.top-1\\/4"
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

// Contact Form Section Animations
export const initContactFormAnimations = () => {
  const manager = createAnimationManager();

  // Form container animation
  manager.addAnimation(".contact-form-container", {
    duration: 1.2,
    x: -100,
    opacity: 0,
    ease: "power3.out",
  });

  // Info container animation
  manager.addAnimation(".contact-info-container", {
    duration: 1.2,
    x: 100,
    opacity: 0,
    ease: "power3.out",
  });

  // Form title animation
  manager.addAnimation(
    ".contact-form-title",
    {
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: "power2.out",
    },
    { start: "top 85%", end: "bottom 15%" }
  );

  // Form fields staggered animation
  manager.addAnimation(
    ".form-field",
    {
      duration: 0.6,
      y: 30,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out",
    },
    { trigger: ".contact-form" }
  );

  // Submit button animation
  manager.addAnimation(
    ".contact-form-submit",
    {
      duration: 0.8,
      scale: 0.8,
      opacity: 0,
      ease: "back.out(1.7)",
      delay: 0.5,
    },
    { start: "top 85%", end: "bottom 15%" }
  );

  // Info cards animation
  manager.addAnimation(".contact-info-card", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "back.out(1.7)",
  });

  // Info items animation
  manager.addAnimation(".contact-info-item", {
    duration: 0.6,
    x: -30,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
  });

  // Social card animation
  manager.addAnimation(".contact-social-card", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "back.out(1.7)",
    delay: 0.2,
  });

  // Promise card animation
  manager.addAnimation(".contact-promise-card", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "back.out(1.7)",
    delay: 0.4,
  });

  // Success message animation
  const successElement = document.querySelector(".contact-form-success");
  if (successElement) {
    gsap.from(successElement, {
      duration: 1,
      scale: 0.8,
      opacity: 0,
      ease: "back.out(1.7)",
    });
  }

  // Return cleanup function
  return manager.cleanup;
};
