import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initServicesProcessAnimations = () => {
  // Section title animation
  gsap.from(".services-process-title", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".services-process-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Connecting line animation
  gsap.from(".absolute.top-1\\/2.left-0.right-0", {
    duration: 1.5,
    scaleX: 0,
    transformOrigin: "left center",
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".process-step-card",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play none none reverse"
    }
  });

  // Process steps animation
  gsap.from(".process-step-card", {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.3,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".process-step-card",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Individual process step elements
  gsap.utils.toArray(".process-step-card").forEach((card: any, index) => {
    // Step number animation
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

    // Title animation
    gsap.from(card.querySelector("h3"), {
      duration: 0.6,
      y: 30,
      opacity: 0,
      ease: "power2.out",
      delay: index * 0.3 + 0.7,
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
      delay: index * 0.3 + 0.9,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Floating accent animation
    gsap.from(card.querySelector(".absolute.-top-2.-right-2"), {
      duration: 0.4,
      scale: 0,
      ease: "back.out(1.7)",
      delay: index * 0.3 + 1.1,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Connecting dot animation
    if (card.querySelector(".absolute.-right-12")) {
      gsap.from(card.querySelector(".absolute.-right-12"), {
        duration: 0.3,
        scale: 0,
        ease: "back.out(1.7)",
        delay: index * 0.3 + 1.3,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
    }
  });

  // CTA section animation
  gsap.from(".services-process-cta-title", {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".services-process-cta-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // CTA buttons animation
  const ctaTitle = document.querySelector(".services-process-cta-title");
  if (ctaTitle && ctaTitle.parentElement) {
    const ctaLinks = ctaTitle.parentElement.querySelectorAll("a");
    gsap.from(ctaLinks, {
      duration: 0.8,
      y: 30,
      opacity: 0,
      stagger: 0.2,
      ease: "back.out(1.7)",
      delay: 0.3,
      scrollTrigger: {
        trigger: ".services-process-cta-title",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  }
};