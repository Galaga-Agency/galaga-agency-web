import { gsap } from "gsap";

export function initHeroTitleAnimation() {
  const innovamosEl = document.querySelector('[data-anim="innovamos"]') as HTMLElement;
  const forYouEl = document.querySelector('[data-anim="for-you"]') as HTMLElement;
  const strikeLineEl = document.querySelector('[data-anim="strike-line"]') as HTMLElement;
  const withYouEl = document.querySelector('[data-anim="with-you"]') as HTMLElement;

  if (!innovamosEl || !forYouEl || !strikeLineEl || !withYouEl) {
    console.error('Missing animation elements');
    return;
  }

  const tl = gsap.timeline();

  // Set initial states
  gsap.set(innovamosEl, {
    opacity: 0,
    scale: 2,
    filter: "blur(20px)",
    y: -100
  });

  gsap.set(forYouEl, {
    opacity: 0,
    scale: 2,
    filter: "blur(20px)",
    y: -100
  });

  gsap.set(strikeLineEl, {
    opacity: 0,
    scaleX: 0,
    transformOrigin: "left center"
  });

  gsap.set(withYouEl, {
    opacity: 0,
    y: "100%"
  });

  // Animation sequence
  tl
    // 1. "innovamos" appears
    .to(innovamosEl, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 1.3,
      ease: "power3.out",
    })
    
    // 2. "for you" appears
    .to(forYouEl, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 1.1,
      ease: "power3.out",
    }, "-=0.6")
    
    // 3. Wait a moment to let it settle
    .to({}, { duration: 1.5 })
    
    // 4. Strike through "for you"
    .to(strikeLineEl, {
      opacity: 1,
      scaleX: 1,
      duration: 0.6,
      ease: "power2.out"
    })
    
    // 5. Wait for strike effect to be seen
    .to({}, { duration: 0.5 })
    
    // 6. Rolling transition - move "for you" up and "with you" in
    .to(forYouEl, {
      y: "-100%",
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut"
    })
    .to(withYouEl, {
      y: "0%",
      opacity: 1,
      duration: 0.8,
      ease: "power2.inOut"
    }, "-=0.5")
    
    // 7. Hide strike line after transition
    .to(strikeLineEl, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out"
    }, "-=0.3")
    
    // 8. Final settling effect
    .to([innovamosEl, withYouEl], {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: 1
    }, "+=0.3")
    
    // 9. Show subtitle
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