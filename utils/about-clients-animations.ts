import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initAboutClientsAnimations = () => {
  // Section title animation
  gsap.from(".about-clients-title", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-clients-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Client type cards animation
  gsap.from(".client-type-card", {
    duration: 1,
    y: 60,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".client-type-card",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Individual client card elements
  gsap.utils.toArray(".client-type-card").forEach((card: any, index) => {
    // Icon container animation
    gsap.from(card.querySelector(".w-20, .w-24"), {
      duration: 0.8,
      scale: 0,
      rotation: 180,
      ease: "back.out(1.7)",
      delay: index * 0.2 + 0.3,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Floating accent dot animation
    gsap.from(card.querySelector(".absolute.-top-2.-right-2"), {
      duration: 0.4,
      scale: 0,
      ease: "back.out(1.7)",
      delay: index * 0.2 + 0.5,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Title animation
    gsap.from(card.querySelector("h3"), {
      duration: 0.6,
      x: -30,
      opacity: 0,
      ease: "power2.out",
      delay: index * 0.2 + 0.7,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Description animation
    gsap.from(card.querySelector("p"), {
      duration: 0.6,
      y: 20,
      opacity: 0,
      ease: "power2.out",
      delay: index * 0.2 + 0.9,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Corner accent animation
    gsap.from(card.querySelector(".absolute.bottom-4.right-4"), {
      duration: 0.3,
      scale: 0,
      ease: "back.out(1.7)",
      delay: index * 0.2 + 1.1,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Success stories section animation
  gsap.from(".about-clients-success-title", {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".about-clients-success-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Success metrics animation
  gsap.from(".grid.grid-cols-1.md\\:grid-cols-2 > div", {
    duration: 0.8,
    y: 40,
    opacity: 0,
    stagger: 0.3,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".grid.grid-cols-1.md\\:grid-cols-2",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Success summary animation
  gsap.from(".text-base.md\\:text-lg.text-azul-profundo", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.6,
    scrollTrigger: {
      trigger: ".text-base.md\\:text-lg.text-azul-profundo",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Setup hover animations
  setupClientCardHovers();
};

const setupClientCardHovers = () => {
  gsap.utils.toArray(".client-type-card").forEach((card: any) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        duration: 0.3,
        scale: 1.05,
        y: -10,
        ease: "power2.out"
      });

      // Background glow effect
      gsap.to(card.querySelector(".absolute.inset-0"), {
        duration: 0.3,
        opacity: 1,
        ease: "power2.out"
      });

      // Icon rotation
      gsap.to(card.querySelector(".w-20, .w-24"), {
        duration: 0.3,
        rotation: 3,
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

      // Reset icon rotation
      gsap.to(card.querySelector(".w-20, .w-24"), {
        duration: 0.3,
        rotation: 0,
        ease: "power2.out"
      });
    });
  });
};