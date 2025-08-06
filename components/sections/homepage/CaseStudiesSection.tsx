"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { caseStudies } from "@/data/case-studies";
import CaseStudyCarouselCard from "@/components/CaseStudyCarouselCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { useState, useEffect } from "react";

export default function CaseStudiesSection() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Assign diverse colors to avoid repetition
  const colorThemes: ('digital' | 'marketing' | 'events')[] = [
    'digital',    // teal
    'marketing',  // orange
    'events',     // purple
    'digital',    // teal
    'marketing',  // orange
    'events',     // purple
    'digital',    // teal
    'events',     // purple
    'marketing',  // orange
    'events'      // purple
  ];

  const casesWithColors = caseStudies.map((caseStudy, index) => ({
    ...caseStudy,
    theme: colorThemes[index] || 'digital'
  }));

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % casesWithColors.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, casesWithColors.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + casesWithColors.length) % casesWithColors.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % casesWithColors.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="case-studies-section section relative bg-gradient-to-br from-white via-hielo/30 to-white overflow-hidden">
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center pb-12 md:pb-16">
          <h2 className="case-studies-title section-title text-teal pb-6">
            {t("caseStudies.title")}
          </h2>
          <p className="case-studies-subtitle text-large text-grafito leading-relaxed">
            {t("caseStudies.subtitle")}
          </p>
        </div>
      </div>

      {/* Enhanced 3D Carousel - Responsive */}
      <div className="relative pb-12">
        {/* Discreet Navigation Controls - CENTERED with carousel */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-5xl flex justify-between px-4 z-30 pointer-events-none">
          <button
            onClick={goToPrevious}
            className="w-8 h-8 md:w-10 md:h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group border border-white/20 pointer-events-auto"
          >
            <svg 
              className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-white transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="w-8 h-8 md:w-10 md:h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group border border-white/20 pointer-events-auto"
          >
            <svg 
              className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-white transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Carousel Container */}
        <div
          className="carousel-3d-container flex justify-center items-center w-full"
          style={{ perspective: "1500px" }}
        >
          <div className="carousel-track relative w-full max-w-6xl h-[550px] md:h-[650px] flex justify-center items-center mx-auto">
            {casesWithColors.map((caseStudy, index) => {
              // Calculate position relative to current index
              const position = (index - currentIndex + casesWithColors.length) % casesWithColors.length;
              
              // Determine transform and z-index based on position
              let transform = '';
              let zIndex = 0;
              let opacity = 0.4;
              
              if (position === 0) {
                // Center card
                transform = 'translateX(0) scale(1) rotateY(0deg)';
                zIndex = 30;
                opacity = 1;
              } else if (position === 1 || position === casesWithColors.length - 1) {
                // Adjacent cards - closer together
                const isNext = position === 1;
                transform = `translateX(${isNext ? '25%' : '-25%'}) scale(0.95) rotateY(${isNext ? '-15deg' : '15deg'})`;
                zIndex = 20;
                opacity = 0.85;
              } else if (position === 2 || position === casesWithColors.length - 2) {
                // Far cards
                const isNext = position === 2;
                transform = `translateX(${isNext ? '65%' : '-65%'}) scale(0.75) rotateY(${isNext ? '-35deg' : '35deg'})`;
                zIndex = 10;
                opacity = 0.6;
              } else {
                // Hidden cards
                transform = 'translateX(0) scale(0.5) rotateY(0deg)';
                zIndex = 0;
                opacity = 0;
              }

              return (
                <div
                  key={index}
                  className="absolute transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transform,
                    zIndex,
                    opacity,
                  }}
                  onClick={() => goToSlide(index)}
                >
                  <CaseStudyCarouselCard
                    titleKey={caseStudy.titleKey}
                    categoryKey={caseStudy.categoryKey}
                    challengeKey={caseStudy.challengeKey}
                    metrics={caseStudy.metrics}
                    image={caseStudy.image}
                    theme={caseStudy.theme}
                    index={index}
                    slug={caseStudy.slug}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Subtle Dot Indicators */}
        <div className="flex justify-center gap-2 pt-6">
          {casesWithColors.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-teal/80 scale-125'
                  : 'bg-teal/20 hover:bg-teal/40'
              }`}
            />
          ))}
        </div>

        {/* Discreet Auto-play Control */}
        <div className="absolute bottom-2 right-4 z-20">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="w-6 h-6 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 flex items-center justify-center border border-white/10"
          >
            {isAutoPlaying ? (
              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-2.5 h-2.5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* CTA */}
      <div className="container relative z-10">
        <div className="text-center">
          <div className="inline-block">
            <h3 className="text-2xl font-bold text-teal pb-4">
              {t("caseStudies.cta.title")}
            </h3>
            <p className="text-lg text-grafito pb-6">
              {t("caseStudies.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PrimaryButton href="/casos-de-exito">
                {t("caseStudies.cta.viewAll")}
              </PrimaryButton>
              <SecondaryButton href="/contacto">
                {t("caseStudies.cta.startProject")}
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}