import { gsap } from "gsap";

export const init404Animations = () => {
  gsap.defaults({ overwrite: "auto" });

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  // Fade/scale in the card
  tl.fromTo(
    ".nf-card",
    { y: 16, opacity: 0, scale: 0.985 },
    { y: 0, opacity: 1, scale: 1, duration: 0.5, immediateRender: false }
  );

  // Pop in the 404 inside the bubble
  tl.fromTo(
    "#nf-404",
    { y: 8, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.35, immediateRender: false },
    "-=0.2"
  );

  // Reveal the rest
  tl.to(
    ["[data-3d-desc]", "#nf-title", "[data-3d-data]"],
    { opacity: 1, y: 0, duration: 0.35, stagger: 0.06 },
    "-=0.15"
  );
};
