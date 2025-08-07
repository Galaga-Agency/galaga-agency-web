import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initHeroScrollAnimation = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  const heroSection = document.querySelector(".hero-section");
  const heroContent = document.querySelector(".hero-content");
  
  if (heroSection && heroContent) {
    ScrollTrigger.create({
      trigger: heroSection,
      start: "top -200px",
      end: "50% top",
      pin: true,
      pinSpacing: false,
    });

    const aboutSectionCards = document.querySelector(".homepage-about-section .absolute");
    if (aboutSectionCards) {
      ScrollTrigger.create({
        trigger: heroSection,
        start: "top bottom",
        end: "bottom top",
        onEnterBack: () => {
          gsap.to(aboutSectionCards, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        },
        onLeave: () => {
          gsap.to(aboutSectionCards, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      });
    }

    gsap.to(heroContent, {
      scale: 0.8,
      opacity: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: heroSection,
        start: "top top",
        end: "50% top",
        scrub: 0.5,
        onUpdate: (self) => {
          if (self.progress === 0) {
            gsap.set(heroContent, { scale: 1, opacity: 1 });
          }
        }
      }
    });
  }

  // Value cards animation
  const valueCard1 = document.querySelector(".value-card-1");
  const valueCard2 = document.querySelector(".value-card-2");
  const valueCard3 = document.querySelector(".value-card-3");

  if (valueCard1 || valueCard2 || valueCard3) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".homepage-about-section",
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none reverse"
      }
    });

    if (valueCard1) {
      tl.to(valueCard1, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, 0.1);
    }

    if (valueCard2) {
      tl.to(valueCard2, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, 0.3);
    }

    if (valueCard3) {
      tl.to(valueCard3, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, 0.5);
    }
  }

  const aboutSection = document.querySelector(".about-section");
  const aboutContent = document.querySelector(".about-content");
  
  if (aboutSection && aboutContent) {
    gsap.timeline({
      scrollTrigger: {
        trigger: aboutSection,
        start: "top top",
        end: "top 20%",
        scrub: 3,
        pin: ".about-wrapper",
        pinSpacing: true,
        anticipatePin: 1,
      }
    })
    .fromTo(aboutContent, 
      {
        y: 50, 
        opacity: 0,
        scale: 0.98
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        ease: "power2.out",
        duration: 0.8
      }
    );

    const aboutElements = aboutSection.querySelectorAll("[data-speed]");
    aboutElements.forEach((element) => {
      const speed = element.getAttribute("data-speed") || "1";
      
      gsap.to(element, {
        y: () => (parseFloat(speed) - 1) * 100,
        ease: "none",
        scrollTrigger: {
          trigger: aboutSection,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }

  const servicesSection = document.querySelector(".services-section");
  
  if (servicesSection) {
    gsap.fromTo(servicesSection,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: servicesSection,
          start: "top 80%",
          end: "top 50%",
          scrub: 1
        }
      }
    );
  }

  ScrollTrigger.refresh();
};

export const cleanupHeroScrollAnimation = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  
  const heroSection = document.querySelector(".hero-section");
  const heroContent = document.querySelector(".hero-content");
  
  if (heroSection) {
    gsap.set(heroSection, { height: "100vh", minHeight: "100vh", clearProps: "all" });
  }
  if (heroContent) {
    gsap.set(heroContent, { scale: 1, opacity: 1, clearProps: "all" });
  }

  // Reset value cards
  const valueCards = document.querySelectorAll(".value-card-1, .value-card-2, .value-card-3");
  valueCards.forEach(card => {
    gsap.set(card, { opacity: 0, clearProps: "all" });
  });
};