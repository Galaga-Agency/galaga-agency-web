import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initAboutApproachAnimations = () => {
  // Section title animation
  gsap.from(".about-approach-title", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-approach-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Approach cards staggered animation
  gsap.from(".approach-card", {
    duration: 1,
    y: 80,
    opacity: 0,
    stagger: 0.3,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".approach-card",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Individual card elements animation
  gsap.utils.toArray(".approach-card").forEach((card: any, index) => {
    // Icon animation
    gsap.from(card.querySelector(".w-16, .w-20"), {
      duration: 0.8,
      scale: 0,
      rotation: 360,
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

    // Floating accent animation
    gsap.from(card.querySelector(".absolute.top-4.right-4"), {
      duration: 0.4,
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

  // Quote animation
  gsap.from(".about-approach-quote", {
    duration: 1.2,
    scale: 0.8,
    opacity: 0,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".about-approach-quote",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Quote decorative line animation
  const quoteLines = document.querySelectorAll(".flex.justify-center .w-12");
  gsap.from(quoteLines, {
    duration: 0.8,
    width: 0,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-approach-quote",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play none none reverse"
    }
  });

  // Setup hover animations for approach cards
  setupApproachCardHovers();
};

const setupApproachCardHovers = () => {
  gsap.utils.toArray(".approach-card").forEach((card: any) => {
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