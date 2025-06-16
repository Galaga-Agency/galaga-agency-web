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
    // Main title appears (slight reduction from 1.5s to 1.3s)
    .to(transformamosEl, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 1.3,
      ease: "power3.out",
    })
    
    // Second title (smoother easing, slight reduction)
    .to(negociosEl, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 1.1,
      ease: "power3.out",
    }, "-=0.8")
    
    // Dramatic pause with pulse (smoother pulse effect)
    .to([transformamosEl, negociosEl], {
      textShadow: "0 0 50px rgba(255,255,255,0.8)",
      duration: 0.6,
      ease: "power2.inOut",
      yoyo: true,
      repeat: 1
    }, "+=0.4")
    
    // "sin complicaciones" appears (slight reduction with smoother easing)
    .to(sinComplicacionesEl, {
      opacity: 1,
      scale: 1.3,
      rotation: 0,
      filter: "blur(0px)",
      duration: 1.3,
      ease: "back.out(1.5)",
    })
    
    // Final glow on text (smoother finish)
    .to(sinComplicacionesEl, {
      scale: 1,
      textShadow: "0 0 40px rgba(20, 184, 166, 0.9)",
      duration: 0.9,
      ease: "power2.out"
    });

  return tl;
}