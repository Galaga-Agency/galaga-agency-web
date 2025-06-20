import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initServicesOverviewAnimations = () => {
  // Section title animation
  gsap.from(".services-overview-title", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".services-overview-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Service cards staggered animation
  gsap.from(".service-overview-card", {
    duration: 1,
    y: 80,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".service-overview-card",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Individual service card elements
  gsap.utils.toArray(".service-overview-card").forEach((card: any, index) => {
    // Icon animation
    gsap.from(card.querySelector(".w-16, .w-20"), {
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

    // Title animation
    gsap.from(card.querySelector("h3"), {
      duration: 0.6,
      x: -30,
      opacity: 0,
      ease: "power2.out",
      delay: index * 0.2 + 0.5,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Features list animation
    gsap.from(card.querySelectorAll("li"), {
      duration: 0.4,
      x: -20,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out",
      delay: index * 0.2 + 0.7,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // CTA link animation
    gsap.from(card.querySelector("a"), {
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
  });

  // Setup hover animations
  setupServiceCardHovers();
};

const setupServiceCardHovers = () => {
  gsap.utils.toArray(".service-overview-card").forEach((card: any) => {
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

      // Icon rotation
      gsap.to(card.querySelector(".w-16, .w-20"), {
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
      gsap.to(card.querySelector(".w-16, .w-20"), {
        duration: 0.3,
        rotation: 0,
        ease: "power2.out"
      });
    });
  });
};