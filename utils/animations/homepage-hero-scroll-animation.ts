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
  // Kill any pins / old IDs that might lock scroll (do NOT kill your video grow)
  ScrollTrigger.getAll().forEach((st) => {
    const id = (st as any).vars?.id;
    if (
      st.vars?.pin ||
      ["hero-pin", "hero-overlay-pin", "about-pin", "hero-bump"].includes(id)
    ) {
      st.kill(true);
    }
  });
  clearPinSpacers();

  // =========================
  // BUBBLES — correct trigger
  // =========================
  // We trigger on the bubbles layer itself so it always fires,
  // even if the layer is pulled upward to overlap the hero.
  const bubbles = gsap.utils.toArray<HTMLElement>(
    ".value-bubbles-layer .value-bubble"
  );
  if (bubbles.length) {
    // make sure we start hidden (also set in JSX as a fallback)
    gsap.set(bubbles, { opacity: 0, y: 24, scale: 0.96 });

    gsap.to(bubbles, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.6)",
      stagger: 0.15,
      scrollTrigger: {
        id: "value-bubbles-reveal",
        trigger: ".value-bubbles-layer",
        start: "top 85%", // when the bubbles layer enters viewport
        end: "top 60%",
        toggleActions: "play none none reverse",
        // markers: true, // uncomment to debug
      },
    });

    // subtle idle float (inner only, anchors never move)
    bubbles.forEach((el, i) => {
      gsap.to(el, {
        y: "+=6",
        duration: 2 + i * 0.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(el, {
        x: "+=4",
        duration: 3 + i * 0.25,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });
  }

  // =========================
  // Services fade (non-blocking)
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

  // IMPORTANT: refresh after images/fonts change layout
  const debouncedRefresh = () => ScrollTrigger.refresh();
  window.addEventListener("load", debouncedRefresh, { once: true });
  setTimeout(debouncedRefresh, 0);
};

export const cleanupHeroScrollAnimation = () => {
  ["value-bubbles-reveal", "services-fade"].forEach((id) =>
    ScrollTrigger.getById(id)?.kill()
  );
  clearPinSpacers();
};
