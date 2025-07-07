import { gsap } from "gsap";

export function initHeroTitleAnimation() {
  const transformamosEl = document.querySelector('[data-anim="transformamos"]') as HTMLElement;
  const negociosEl = document.querySelector('[data-anim="negocios"]') as HTMLElement;
  const sinComplicacionesEl = document.querySelector('[data-anim="sinComplicaciones"]') as HTMLElement;

  if (!transformamosEl || !negociosEl || !sinComplicacionesEl) return;

  const tl = gsap.timeline();

  // Set initial states for text
  gsap.set([transformamosEl, negociosEl], {
    opacity: 0,
    scale: 2,
    filter: "blur(20px)",
    y: -100
  });

  gsap.set(sinComplicacionesEl, {
    opacity: 0,
    scale: 0,
    rotation: 180,
    filter: "blur(10px)"
  });

  // Animation sequence
  tl
    // Main title appears
    .to(transformamosEl, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 1.3,
      ease: "power3.out",
    })
    
    // Second title
    .to(negociosEl, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 1.1,
      ease: "power3.out",
    }, "-=0.8")
    
    // Subtle pulse effect without glow (just scale)
    .to([transformamosEl, negociosEl], {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: 1
    }, "+=0.2")
    
    // "sin complicaciones" appears with dramatic scale
    .to(sinComplicacionesEl, {
      opacity: 1,
      scale: 1.3,
      rotation: 0,
      filter: "blur(0px)",
      duration: 1.3,
      ease: "back.out(1.5)",
    })
    
    // Final settle to normal scale (no glow)
    .to(sinComplicacionesEl, {
      scale: 1,
      duration: 0.9,
      ease: "power2.out"
    })
    .to(
      ".homepage-hero-subtitle",
      {
        duration: 0.8,
        y: 0,
        opacity: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );

  return tl;
}