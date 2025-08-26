// utils/animations/homepage-hero-scroll-animation.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/**
 * FIX:
 * - No pin/sticky anywhere (no scroll blocking).
 * - Target ONLY the inner ".value-bubble" for transforms.
 * - Anchors ".value-bubble-anchor" keep absolute positions stable.
 */
export const initHeroScrollAnimation = () => {
  // Kill known pins/leftovers that can trap scroll
  ScrollTrigger.getAll().forEach((st) => {
    if (st.vars.pin) st.kill(true);
  });
  document.querySelectorAll(".gsap-pin-spacer").forEach((sp) => {
    const child = sp.firstElementChild;
    if (child && sp.parentNode) {
      sp.parentNode.insertBefore(child, sp);
      sp.parentNode.removeChild(sp);
    }
  });

  // Bubbles reveal (animate INNER nodes only)
  const bubbles = gsap.utils.toArray<HTMLElement>(".value-bubble");
  if (bubbles.length) {
    gsap.set(bubbles, {
      opacity: 0,
      y: 24,
      scale: 0.96,
      transform: "translate3d(0,0,0)",
      willChange: "transform,opacity",
    });

    gsap.to(bubbles, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.6)",
      stagger: 0.15,
      scrollTrigger: {
        id: "value-bubbles-reveal",
        trigger: ".homepage-about-section",
        start: "top 92%",
        end: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    // Gentle idle float — tiny amplitude, inner only (no anchor drift)
    bubbles.forEach((node, i) => {
      gsap.to(node, {
        y: "+=6",
        duration: 2 + i * 0.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(node, {
        x: "+=4",
        duration: 3 + i * 0.25,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });
  }

  // Services fade (non-blocking)
  const services = document.querySelector(".services-section");
  if (services) {
    gsap.fromTo(
      services,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          id: "services-fade",
          trigger: services,
          start: "top 80%",
          end: "top 55%",
          scrub: 1,
        },
      }
    );
  }

  ScrollTrigger.refresh();
};

export const cleanupHeroScrollAnimation = () => {
  ["value-bubbles-reveal", "services-fade"].forEach((id) =>
    ScrollTrigger.getById(id)?.kill()
  );
};
