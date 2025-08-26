import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// helper
const clearPinSpacers = () => {
  document.querySelectorAll(".gsap-pin-spacer").forEach((sp) => {
    const child = sp.firstElementChild;
    if (child && sp.parentNode) {
      sp.parentNode.insertBefore(child, sp);
      sp.parentNode.removeChild(sp);
    }
  });
};

export const initHeroScrollAnimation = () => {
  // Kill any pins / old IDs that might lock scroll
  ScrollTrigger.getAll().forEach((st) => {
    const id = (st as any).vars?.id;
    if (
      st.vars?.pin ||
      [
        "hero-pin",
        "hero-overlay-pin",
        "about-pin",
        "hero-bump",
        "value-bubbles-reveal",
      ].includes(id)
    ) {
      st.kill(true);
    }
  });
  clearPinSpacers();

  // =========================
  // BUBBLES — SCROLL TRIGGER WITH REVERSE (NO POSITION CONFLICTS)
  // =========================
  const bubbles = document.querySelectorAll(".value-bubble");

  if (bubbles.length > 0) {
    // ONLY animate opacity and scale - NEVER touch positioning
    gsap.set(bubbles, { opacity: 0, scale: 0.8 });

    gsap.to(bubbles, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.2,
      scrollTrigger: {
        id: "value-bubbles-reveal",
        trigger: ".value-bubbles-layer",
        start: "top 85%",
        end: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    // Subtle float WITHOUT affecting main positioning
    bubbles.forEach((el, i) => {
      gsap.to(el, {
        y: "+=6",
        duration: 3 + i * 0.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.5 + i * 0.3,
      });
    });
  }

  // =========================
  // Services fade
  // =========================
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

  setTimeout(() => ScrollTrigger.refresh(), 100);
};

export const cleanupHeroScrollAnimation = () => {
  ["value-bubbles-reveal", "services-fade"].forEach((id) =>
    ScrollTrigger.getById(id)?.kill()
  );
  clearPinSpacers();
};
