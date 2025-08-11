import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initAboutClientsAnimations = () => {
  // Section header animations
  gsap.from(".about-clients-eyebrow", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-clients-eyebrow",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".about-clients-title", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-clients-title",
      start: "top 80%",
      toggleActions: "play none none none",
    },
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
      toggleActions: "play none none none",
    },
  });

  // Client category cards animation
  gsap.utils.toArray(".client-category-card").forEach((card: any, index) => {
    gsap.from(card, {
      duration: 0.8,
      opacity: 0,
      ease: "back.out(1.2)",
      delay: index * 0.1,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(card.querySelector(".client-category-icon-container"), {
      duration: 0.6,
      scale: 0,
      ease: "back.out(1.7)",
      delay: index * 0.1 + 0.3,
      scrollTrigger: {
        trigger: card,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(card.querySelector(".client-category-title"), {
      duration: 0.6,
      y: 20,
      opacity: 0,
      ease: "power2.out",
      delay: index * 0.1 + 0.5,
      scrollTrigger: {
        trigger: card,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(card.querySelector(".client-category-description"), {
      duration: 0.6,
      y: 15,
      opacity: 0,
      ease: "power2.out",
      delay: index * 0.1 + 0.6,
      scrollTrigger: {
        trigger: card,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });
  });

  // Featured clients section header
  gsap.from(".about-clients-featured-title", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-clients-featured-title",
      start: "top 80%",
      toggleActions: "play none none none",
    },
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
      toggleActions: "play none none none",
    },
  });

  // Featured client cards animations
  gsap.utils.toArray(".featured-client-card").forEach((card: any, index) => {
    const isReversed = index % 2 === 1;

    gsap.from(card.querySelector(".featured-client-content"), {
      duration: 1,
      x: isReversed ? 50 : -50,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(card.querySelector(".featured-client-logo"), {
      duration: 0.8,
      scale: 0.8,
      opacity: 0,
      ease: "back.out(1.2)",
      delay: 0.2,
      scrollTrigger: {
        trigger: card,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(card.querySelector(".featured-client-description"), {
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: "power2.out",
      delay: 0.4,
      scrollTrigger: {
        trigger: card,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(card.querySelectorAll(".featured-client-result"), {
      duration: 0.6,
      y: 30,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.6,
      scrollTrigger: {
        trigger: card.querySelector(".featured-client-results"),
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(card.querySelector(".featured-client-image"), {
      duration: 1,
      scale: 0.9,
      opacity: 0,
      ease: "power2.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: card.querySelector(".featured-client-image-container"),
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(card.querySelector(".featured-client-badge"), {
      duration: 0.6,
      scale: 0,
      ease: "back.out(1.7)",
      delay: 0.7,
      scrollTrigger: {
        trigger: card.querySelector(".featured-client-image-container"),
        start: "top 80%",
        toggleActions: "play none none none",
      },
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
      toggleActions: "play none none none",
    },
  });

  gsap.from(".impact-metric", {
    duration: 0.6,
    scale: 0.8,
    opacity: 0,
    stagger: 0.1,
    ease: "back.out(1.2)",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".impact-metrics-grid",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".impact-metrics-summary", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.6,
    scrollTrigger: {
      trigger: ".impact-metrics-summary",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Setup hover animations
  setupClientHovers();

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
};

const setupClientHovers = () => {
  // Client category card hovers
  gsap.utils.toArray(".client-category-card").forEach((card: any) => {
    if (!card) return;

    card.addEventListener("mouseenter", () => {
      gsap.to(card.querySelector(".client-category-glow"), {
        duration: 0.3,
        opacity: 1,
        ease: "power2.out",
      });

      gsap.to(card.querySelector(".client-category-icon-container"), {
        duration: 0.3,
        scale: 1.05,
        ease: "power2.out",
      });

      gsap.to(card, {
        duration: 0.3,
        y: -5,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card.querySelector(".client-category-glow"), {
        duration: 0.3,
        opacity: 0,
        ease: "power2.out",
      });

      gsap.to(card.querySelector(".client-category-icon-container"), {
        duration: 0.3,
        scale: 1,
        ease: "power2.out",
      });

      gsap.to(card, {
        duration: 0.3,
        y: 0,
        ease: "power2.out",
      });
    });
  });

  // Featured client badge hover
  gsap.utils.toArray(".featured-client-badge").forEach((badge: any) => {
    if (!badge) return;

    badge.addEventListener("mouseenter", () => {
      gsap.to(badge, {
        duration: 0.3,
        scale: 1.05,
        ease: "power2.out",
      });
    });

    badge.addEventListener("mouseleave", () => {
      gsap.to(badge, {
        duration: 0.3,
        scale: 1,
        ease: "power2.out",
      });
    });
  });
};