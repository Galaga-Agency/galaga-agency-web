import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createAnimationManager } from "@/utils/animations/gsap-utils";

gsap.registerPlugin(ScrollTrigger);

export const initAboutClientsAnimations = () => {
  const manager = createAnimationManager();

  // Section header animations
  gsap.from(".about-clients-eyebrow", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-clients-eyebrow",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".about-clients-title", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-clients-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".about-clients-subtitle", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".about-clients-subtitle",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none"
    }
  });

  // Client category cards animation
  gsap.utils.toArray(".client-category-card").forEach((card: any, index) => {
    // Main card animation
    gsap.from(card, {
      duration: 1,
      y: 60,
      opacity: 0,
      ease: "back.out(1.7)",
      delay: index * 0.2,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });

    // Icon container animation
    gsap.from(card.querySelector(".client-category-icon-container"), {
      duration: 0.8,
      rotation: 180,
      ease: "back.out(1.7)",
      delay: index * 0.2 + 0.3,
      scrollTrigger: {
        trigger: card,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none none"
      }
    });

    // Accent dot animation
    gsap.from(card.querySelector(".client-category-accent"), {
      duration: 0.4,
      ease: "back.out(1.7)",
      delay: index * 0.2 + 0.5,
      scrollTrigger: {
        trigger: card,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none none"
      }
    });

    // Title animation
    gsap.from(card.querySelector(".client-category-title"), {
      duration: 0.6,
      x: -30,
      opacity: 0,
      ease: "power2.out",
      delay: index * 0.2 + 0.7,
      scrollTrigger: {
        trigger: card,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none none"
      }
    });

    // Description animation
    gsap.from(card.querySelector(".client-category-description"), {
      duration: 0.6,
      y: 20,
      opacity: 0,
      ease: "power2.out",
      delay: index * 0.2 + 0.9,
      scrollTrigger: {
        trigger: card,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none none"
      }
    });

    // Corner accent animation
    gsap.from(card.querySelector(".client-category-corner"), {
      duration: 0.3,
      scale: 0,
      ease: "back.out(1.7)",
      delay: index * 0.2 + 1.1,
      scrollTrigger: {
        trigger: card,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none none"
      }
    });
  });

  // Featured clients section header
  gsap.from(".about-clients-featured-title", {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".about-clients-featured-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".about-clients-featured-subtitle", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".about-clients-featured-subtitle",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none"
    }
  });

  // Featured client cards animations
  gsap.utils.toArray(".featured-client-card").forEach((card: any, index) => {
    const isnoned = index % 2 === 1;

    // Main card animation
    gsap.from(card, {
      duration: 1,
      x: isnoned ? 100 : -100,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });

    // Logo container animation
    gsap.from(card.querySelector(".featured-client-logo"), {
      duration: 0.8,
      scale: 0.8,
      opacity: 0,
      ease: "back.out(1.7)",
      delay: 0.3,
      scrollTrigger: {
        trigger: card,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none none"
      }
    });

    // Client name animation
    gsap.from(card.querySelector(".featured-client-name"), {
      duration: 0.6,
      y: 20,
      opacity: 0,
      ease: "power2.out",
      delay: 0.5,
      scrollTrigger: {
        trigger: card,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none none"
      }
    });

    // Category animation
    gsap.from(card.querySelector(".featured-client-category"), {
      duration: 0.6,
      y: 15,
      opacity: 0,
      ease: "power2.out",
      delay: 0.6,
      scrollTrigger: {
        trigger: card,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none none"
      }
    });

    // Description animation
    gsap.from(card.querySelector(".featured-client-description"), {
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: "power2.out",
      delay: 0.4,
      scrollTrigger: {
        trigger: card,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none none"
      }
    });

    // Results animation with stagger
    gsap.from(card.querySelectorAll(".featured-client-result"), {
      duration: 0.6,
      y: 40,
      opacity: 0,
      stagger: 0.1,
      ease: "back.out(1.7)",
      delay: 0.6,
      scrollTrigger: {
        trigger: card.querySelector(".featured-client-results"),
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });

    // Result values animation
    gsap.from(card.querySelectorAll(".featured-client-result-value"), {
      duration: 0.8,
      scale: 0.5,
      opacity: 0,
      stagger: 0.1,
      ease: "back.out(1.7)",
      delay: 0.8,
      scrollTrigger: {
        trigger: card.querySelector(".featured-client-results"),
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });

    // Image animation
    gsap.from(card.querySelector(".featured-client-image"), {
      duration: 1,
      scale: 0.8,
      opacity: 0,
      ease: "back.out(1.7)",
      delay: 0.3,
      scrollTrigger: {
        trigger: card.querySelector(".featured-client-image-container"),
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });

    // Floating badge animation
    gsap.from(card.querySelector(".featured-client-badge"), {
      duration: 0.8,
      scale: 0,
      rotation: 180,
      ease: "back.out(1.7)",
      delay: 0.7,
      scrollTrigger: {
        trigger: card.querySelector(".featured-client-image-container"),
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });
  });

  // Impact metrics section animations
  gsap.from(".impact-metrics-title", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".impact-metrics-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none"
    }
  });

  // Impact metrics animation with stagger
  gsap.from(".impact-metric", {
    duration: 0.8,
    y: 40,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".impact-metrics-grid",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none"
    }
  });

  // Impact metric values animation
  gsap.from(".impact-metric-value", {
    duration: 1,
    scale: 0.5,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)",
    delay: 0.3,
    scrollTrigger: {
      trigger: ".impact-metrics-grid",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none"
    }
  });

  // Impact summary animation
  gsap.from(".impact-metrics-summary", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.6,
    scrollTrigger: {
      trigger: ".impact-metrics-summary",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none"
    }
  });

  // Setup hover animations for client category cards
  setupClientCardHovers();

  // Return cleanup function
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
};

const setupClientCardHovers = () => {
  gsap.utils.toArray(".client-category-card").forEach((card: any) => {
    if (!card) return;

    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        duration: 0.3,
        scale: 1.05,
        y: -10,
        ease: "power2.out",
      });

      const glowElement = card.querySelector(".client-category-glow");
      if (glowElement) {
        gsap.to(glowElement, {
          duration: 0.3,
          opacity: 1,
          ease: "power2.out",
        });
      }

      const iconElement = card.querySelector(".client-category-icon-container");
      if (iconElement) {
        gsap.to(iconElement, {
          duration: 0.3,
          rotation: 5,
          scale: 1.1,
          ease: "power2.out",
        });
      }

      const accentElement = card.querySelector(".client-category-accent");
      if (accentElement) {
        gsap.to(accentElement, {
          duration: 0.3,
          scale: 1.2,
          ease: "power2.out",
        });
      }
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        duration: 0.3,
        scale: 1,
        y: 0,
        ease: "power2.out",
      });

      const glowElement = card.querySelector(".client-category-glow");
      if (glowElement) {
        gsap.to(glowElement, {
          duration: 0.3,
          opacity: 0,
          ease: "power2.out",
        });
      }

      const iconElement = card.querySelector(".client-category-icon-container");
      if (iconElement) {
        gsap.to(iconElement, {
          duration: 0.3,
          rotation: 0,
          scale: 1,
          ease: "power2.out",
        });
      }

      const accentElement = card.querySelector(".client-category-accent");
      if (accentElement) {
        gsap.to(accentElement, {
          duration: 0.3,
          scale: 1,
          ease: "power2.out",
        });
      }
    });
  });

  // Featured client card hover animations
  gsap.utils.toArray(".featured-client-card").forEach((card: any) => {
    if (!card) return;

    const imageContainer = card.querySelector(".featured-client-image");
    const badge = card.querySelector(".featured-client-badge");

    if (imageContainer) {
      card.addEventListener("mouseenter", () => {
        gsap.to(imageContainer, {
          duration: 0.4,
          scale: 1.05,
          ease: "power2.out",
        });

        if (badge) {
          gsap.to(badge, {
            duration: 0.3,
            scale: 1.1,
            rotation: 5,
            ease: "power2.out",
          });
        }
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(imageContainer, {
          duration: 0.4,
          scale: 1,
          ease: "power2.out",
        });

        if (badge) {
          gsap.to(badge, {
            duration: 0.3,
            scale: 1,
            rotation: 0,
            ease: "power2.out",
          });
        }
      });
    }
  });

  // Impact metrics hover animations
  gsap.utils.toArray(".impact-metric").forEach((metric: any) => {
    if (!metric) return;

    const valueElement = metric.querySelector(".impact-metric-value");

    metric.addEventListener("mouseenter", () => {
      if (valueElement) {
        gsap.to(valueElement, {
          duration: 0.3,
          scale: 1.1,
          color: "#14b8a6", // teal color
          ease: "power2.out",
        });
      }
    });

    metric.addEventListener("mouseleave", () => {
      if (valueElement) {
        gsap.to(valueElement, {
          duration: 0.3,
          scale: 1,
          color: "#14b8a6", // back to original teal
          ease: "power2.out",
        });
      }
    });
  });
};