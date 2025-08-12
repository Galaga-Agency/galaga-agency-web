import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const initTechnologyStackAnimations = () => {
  // Section header animations
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".technology-stack-section",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  // Animate section header elements
  tl.fromTo(
    ".tech-stack-eyebrow",
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    }
  )
    .fromTo(
      ".tech-stack-title",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.3"
    )
    .fromTo(
      ".tech-stack-subtitle",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    );

  // CTA section animation
  gsap.fromTo(
    ".tech-cta",
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".tech-cta",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

export const cleanupTechnologyStackAnimations = () => {
  // Clean up scroll triggers
  ScrollTrigger.getAll().forEach((trigger) => {
    if (
      trigger.trigger?.classList.contains("technology-stack-section") ||
      trigger.trigger?.classList.contains("tech-category") ||
      trigger.trigger?.classList.contains("tech-cta")
    ) {
      trigger.kill();
    }
  });
};
