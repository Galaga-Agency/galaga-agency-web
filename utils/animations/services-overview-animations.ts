import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initServicesOverviewAnimations = () => {
  // Header animations
  [
    { selector: ".services-overview-eyebrow", y: 30, opacity: 0, delay: 0 },
    { selector: ".services-overview-title", y: 50, opacity: 0, delay: 0.2 },
    { selector: ".services-overview-subtitle", y: 30, opacity: 0, delay: 0.4 },
  ].forEach(({ selector, y, opacity, delay }) => {
    gsap.from(selector, {
      duration: 0.8,
      y,
      opacity,
      ease: "power2.out",
      delay,
      scrollTrigger: {
        trigger: selector,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // Animate each card individually
  gsap.utils.toArray(".services-overview-card").forEach((card: any, i) => {
    // main card container
    gsap.from(card, {
      duration: 1,
      opacity: 0,
      ease: "back.out(1.7)",
      delay: i * 0.2,
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    // icon
    const icon = card.querySelector(".services-overview-card-icon");
    if (icon) {
      gsap.from(icon, {
        duration: 0.8,
        scale: 0,
        rotation: 180,
        ease: "back.out(1.7)",
        delay: i * 0.2 + 0.3,
        scrollTrigger: { trigger: card, start: "top 90%" },
      });
    }

    // title
    const title = card.querySelector(".services-overview-card-title");
    if (title) {
      gsap.from(title, {
        duration: 0.6,
        x: -30,
        opacity: 0,
        ease: "power2.out",
        delay: i * 0.2 + 0.5,
        scrollTrigger: { trigger: card, start: "top 90%" },
      });
    }

    // description
    const desc = card.querySelector(".services-overview-card-description");
    if (desc) {
      gsap.from(desc, {
        duration: 0.6,
        y: 20,
        opacity: 0,
        ease: "power2.out",
        delay: i * 0.2 + 0.7,
        scrollTrigger: { trigger: card, start: "top 90%" },
      });
    }

    // features
    const features = card.querySelectorAll(".services-overview-card-feature");
    if (features.length) {
      gsap.from(features, {
        duration: 0.4,
        x: -20,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out",
        delay: i * 0.2 + 0.9,
        scrollTrigger: { trigger: card, start: "top 90%" },
      });
    }

    // accent
    const accent = card.querySelector(".services-overview-card-accent");
    if (accent) {
      gsap.from(accent, {
        duration: 0.4,
        scale: 0,
        ease: "back.out(1.7)",
        delay: i * 0.2 + 1.1,
        scrollTrigger: { trigger: card, start: "top 90%" },
      });
    }
  });

  // Cleanup
  return () => ScrollTrigger.getAll().forEach((t) => t.kill());
};
