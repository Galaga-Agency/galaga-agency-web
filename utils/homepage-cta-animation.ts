import { gsap } from 'gsap';

export const initCTAAnimations = () => {
  // Set initial states
  gsap.set("[data-anim='cta-title']", { opacity: 0, y: 50 });
  gsap.set("[data-anim='cta-subtitle']", { opacity: 0, y: 30 });
  gsap.set("[data-anim='cta-card']", { opacity: 0, y: 40, scale: 0.9 });
  gsap.set("[data-anim='cta-buttons']", { opacity: 0, y: 30 });
  gsap.set("[data-anim='cta-contact']", { opacity: 0, y: 20 });

  // Create timeline
  const tl = gsap.timeline({ delay: 0.2 });

  // Animate title with glow effect
  tl.to("[data-anim='cta-title']", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out"
  })
  .to("[data-anim='cta-title']", {
    textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
  }, 0.5)
  
  // Animate subtitle
  .to("[data-anim='cta-subtitle']", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out"
  }, "-=0.4")
  
  // Animate cards with stagger
  .to("[data-anim='cta-card']", {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.7,
    stagger: 0.2,
    ease: "back.out(1.7)"
  }, "-=0.3")
  
  // Animate buttons
  .to("[data-anim='cta-buttons']", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out"
  }, "-=0.2")
  
  // Animate contact info
  .to("[data-anim='cta-contact']", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power3.out"
  }, "-=0.1");

  // Add pulsing glow to primary button
  gsap.to("[data-anim='primary-button']", {
    boxShadow: "0 0 40px rgba(247, 147, 26, 0.8)",
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
  });

  // Add hover animations for cards
  document.querySelectorAll("[data-anim='cta-card']").forEach((card) => {
    const icon = card.querySelector("[data-anim='card-icon']");
    const title = card.querySelector("[data-anim='card-title']");
    
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { scale: 1.05, y: -8, duration: 0.3, ease: "power2.out" });
      gsap.to(icon, { scale: 1.1, rotation: 12, duration: 0.3, ease: "back.out(1.7)" });
      gsap.to(title, { color: "#f97316", duration: 0.3 });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" });
      gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3, ease: "back.out(1.7)" });
      gsap.to(title, { color: "#ffffff", duration: 0.3 });
    });
  });

  // Add hover animations for buttons
  document.querySelectorAll("[data-anim='cta-button']").forEach((button) => {
    const arrow = button.querySelector("[data-anim='button-arrow']");
    
    button.addEventListener('mouseenter', () => {
      gsap.to(button, { scale: 1.05, y: -3, duration: 0.3, ease: "power2.out" });
      gsap.to(arrow, { x: 8, duration: 0.3, ease: "power2.out" });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" });
      gsap.to(arrow, { x: 0, duration: 0.3, ease: "power2.out" });
    });
  });

  // Add hover animations for contact links
  document.querySelectorAll("[data-anim='contact-link']").forEach((link) => {
    const icon = link.querySelector("[data-anim='contact-icon']");
    
    link.addEventListener('mouseenter', () => {
      gsap.to(link, { scale: 1.1, duration: 0.3, ease: "power2.out" });
      gsap.to(icon, { scale: 1.1, rotation: 12, duration: 0.3, ease: "back.out(1.7)" });
    });
    
    link.addEventListener('mouseleave', () => {
      gsap.to(link, { scale: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3, ease: "back.out(1.7)" });
    });
  });
};