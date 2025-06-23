import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initServicesProcessAnimations = () => {
  gsap.from(".services-process-eyebrow", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".services-process-eyebrow",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    },
  });
  gsap.from(".services-process-title", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".services-process-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    },
  });
  gsap.from(".services-process-subtitle", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".services-process-subtitle",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    },
  });
  ["1", "2", "3"].forEach((n, i) =>
    gsap.from(`.services-process-bg-element-${n}`, {
      duration: 2 + i * 0.3,
      scale: 0.8,
      opacity: 0,
      ease: "power2.out",
      delay: i * 0.3,
      scrollTrigger: {
        trigger: `.services-process-bg-element-${n}`,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play none none none",
      },
    })
  );
  gsap.from(".services-process-connecting-line", {
    duration: 1.5,
    scaleX: 0,
    transformOrigin: "left center",
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".services-process-steps-grid",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play none none none",
    },
  });
  gsap.from(".services-process-step-card", {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.3,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".services-process-steps-grid",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    },
  });
  gsap.utils
    .toArray(".services-process-step-card")
    .forEach((card: any, idx) => {
      gsap.from(card.querySelector(".services-process-step-number"), {
        duration: 0.8,
        scale: 0,
        rotation: 360,
        ease: "back.out(1.7)",
        delay: idx * 0.3 + 0.5,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(card.querySelector(".services-process-step-title"), {
        duration: 0.6,
        y: 30,
        opacity: 0,
        ease: "power2.out",
        delay: idx * 0.3 + 0.7,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(card.querySelector(".services-process-step-description"), {
        duration: 0.6,
        y: 20,
        opacity: 0,
        ease: "power2.out",
        delay: idx * 0.3 + 0.9,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(card.querySelector(".services-process-step-accent"), {
        duration: 0.4,
        scale: 0,
        ease: "back.out(1.7)",
        delay: idx * 0.3 + 1.1,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });
      const dot = card.querySelector(".services-process-connecting-dot");
      if (dot)
        gsap.from(dot, {
          duration: 0.3,
          scale: 0,
          ease: "back.out(1.7)",
          delay: idx * 0.3 + 1.3,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        });
    });
  const setupHoverProcess = () =>
    gsap.utils.toArray(".services-process-step-card").forEach((card: any) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { duration: 0.3, y: -10, ease: "power2.out" });
        const num = card.querySelector(".services-process-step-number");
        if (num)
          gsap.to(num, {
            duration: 0.3,
            rotation: -6,
            scale: 1.1,
            ease: "power2.out",
          });
        const acc = card.querySelector(".services-process-step-accent");
        if (acc)
          gsap.to(acc, { duration: 0.3, scale: 1.5, ease: "power2.out" });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { duration: 0.3, y: 0, ease: "power2.out" });
        const num = card.querySelector(".services-process-step-number");
        if (num)
          gsap.to(num, {
            duration: 0.3,
            rotation: 0,
            scale: 1,
            ease: "power2.out",
          });
        const acc = card.querySelector(".services-process-step-accent");
        if (acc) gsap.to(acc, { duration: 0.3, scale: 1, ease: "power2.out" });
      });
    });
  setupHoverProcess();
  return () => ScrollTrigger.getAll().forEach((t) => t.kill());
};
