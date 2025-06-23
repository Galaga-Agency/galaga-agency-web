import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createAnimationManager } from "@/utils/animations/gsap-utils";

gsap.registerPlugin(ScrollTrigger);

export const initContactHeroAnimations = () => {
  const manager = createAnimationManager();

  // Hero title words timeline
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

  // Methods animation with stagger (analogous to stats)
  gsap.to(".contact-hero-method", {
    duration: 0.8,
    y: 0,
    opacity: 1,
    stagger: 0.2,
    ease: "back.out(1.7)",
    delay: 1.5,
  });

  // Floating scroll indicator
  const scrollIndicator = document.querySelector(".contact-hero-scroll");
  if (scrollIndicator) {
    gsap.to(scrollIndicator, {
      duration: 2,
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: 2,
    });
  }

  // Background orbs rotation
  const topOrb = document.querySelector(
    ".contact-hero-section .absolute.top-1\\/4"
  );
  if (topOrb) {
    gsap.to(topOrb, {
      duration: 8,
      rotation: 360,
      repeat: -1,
      ease: "none",
    });
  }
  const bottomOrb = document.querySelector(
    ".contact-hero-section .absolute.bottom-1\\/3"
  );
  if (bottomOrb) {
    gsap.to(bottomOrb, {
      duration: 12,
      rotation: -360,
      repeat: -1,
      ease: "none",
    });
  }

  // Return cleanup function
  return manager.cleanup;
};

export const initContactFormAnimations = () => {
  const manager = createAnimationManager();
  const S = ".contact-form-section";

  // Slide in form and info containers
  manager.addAnimation(
    `${S} .contact-form-container`,
    { x: -100, opacity: 0, duration: 1.2, ease: "power3.out" },
    { trigger: `${S} .contact-form-container` }
  );
  manager.addAnimation(
    `${S} .contact-info-container`,
    { x: 100, opacity: 0, duration: 1.2, ease: "power3.out" },
    { trigger: `${S} .contact-info-container` }
  );

  // Form title reveal
  manager.addAnimation(
    `${S} .contact-form-title`,
    { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" },
    { trigger: `${S} .contact-form-title`, start: "top 85%" }
  );

  // Stagger each field (requires each input wrapper to have class "contact-field")
  gsap.utils.toArray(`${S} .contact-field`).forEach((fieldEl: any, i) => {
    manager.addAnimation(
      fieldEl,
      { y: 30, opacity: 0, duration: 0.6, ease: "power2.out", delay: i * 0.1 },
      { trigger: `${S} .contact-form`, start: "top 80%" }
    );
  });

  // Submit button pop
  manager.addAnimation(
    `${S} .contact-form-submit`,
    {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: 0.5,
    },
    { trigger: `${S} .contact-form-submit`, start: "top 85%" }
  );

  // Info cards fade in
  manager.addAnimation(
    `${S} .contact-info-card`,
    { y: 50, opacity: 0, duration: 1, ease: "back.out(1.7)" },
    { trigger: `${S} .contact-info-card` }
  );
  // Info items stagger
  manager.addAnimation(
    `${S} .contact-info-item`,
    { x: -30, opacity: 0, duration: 0.6, ease: "power2.out", stagger: 0.2 },
    { trigger: `${S} .contact-info-card` }
  );
  // Social card & promise card
  manager.addAnimation(
    `${S} .contact-social-card`,
    { y: 50, opacity: 0, duration: 1, ease: "back.out(1.7)", delay: 0.2 },
    { trigger: `${S} .contact-social-card` }
  );
  manager.addAnimation(
    `${S} .contact-promise-card`,
    { y: 50, opacity: 0, duration: 1, ease: "back.out(1.7)", delay: 0.4 },
    { trigger: `${S} .contact-promise-card` }
  );

  return manager.cleanup;
};
