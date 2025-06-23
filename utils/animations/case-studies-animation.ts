import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initCaseStudiesAnimations = () => {
  // Section animations
  gsap.fromTo(".case-studies-title", 
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: ".case-studies-section", start: "top 90%" }}
  );

  gsap.fromTo(".stats-item", 
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.4, stagger: 0.1, ease: "back.out", scrollTrigger: { trigger: ".stats-container", start: "top 90%" }}
  );

  // Initialize GSAP 3D carousel
  initGSAPCarousel();
};

const initGSAPCarousel = () => {
  const slides = document.querySelectorAll('.carousel-slide');
  const container = document.querySelector('.carousel-track');
  
  if (!slides.length) return;

  let currentIndex = 0;
  const totalSlides = slides.length;

  // GSAP 3D positioning for coverflow effect
  const updateCarousel = () => {
    slides.forEach((slide, index) => {
      const offset = index - currentIndex;
      
      // Normalize for circular
      let normalizedOffset = offset;
      if (normalizedOffset > totalSlides / 2) normalizedOffset -= totalSlides;
      if (normalizedOffset < -totalSlides / 2) normalizedOffset += totalSlides;
      
      // Only show 3 slides
      const isVisible = Math.abs(normalizedOffset) <= 1;
      
      let x = normalizedOffset * 320; // Less space between cards
      let z = Math.abs(normalizedOffset) * -350; // Deep depth
      let rotateY = normalizedOffset * 35; // Rotation
      let scale = normalizedOffset === 0 ? 1 : 0.75;
      let opacity = isVisible ? (normalizedOffset === 0 ? 1 : 0.7) : 0;
      let zIndex = normalizedOffset === 0 ? 100 : Math.max(1, 50 - Math.abs(normalizedOffset) * 10);

      gsap.to(slide, {
        x: x,
        z: z,
        rotateY: rotateY,
        scale: scale,
        opacity: opacity,
        zIndex: zIndex,
        display: isVisible ? 'block' : 'none',
        duration: 0.6,
        ease: "power2.out"
      });
    });
  };

  // Navigation
  const goToSlide = (index: any) => {
    currentIndex = index;
    updateCarousel();
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  };

  // Touch/mouse handling
  let startX = 0;
  let isDragging = false;

  if (container) {
    (container as HTMLElement).style.cursor = 'grab';
    
    container.addEventListener('mousedown', (e: any) => {
      startX = e.clientX;
      isDragging = true;
      (container as HTMLElement).style.cursor = 'grabbing';
    });

    container.addEventListener('mouseup', (e: any) => {
      if (!isDragging) return;
      isDragging = false;
      (container as HTMLElement).style.cursor = 'grab';
      
      const diff = startX - e.clientX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? nextSlide() : prevSlide();
      }
    });

    container.addEventListener('touchstart', (e: any) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    });

    container.addEventListener('touchend', (e: any) => {
      if (!isDragging) return;
      isDragging = false;
      
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? nextSlide() : prevSlide();
      }
    });
  }

  // Auto-advance every 3 seconds
  setInterval(nextSlide, 3000);

  // Initial setup
  updateCarousel();
};