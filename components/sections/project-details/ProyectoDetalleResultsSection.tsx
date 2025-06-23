"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { FiTrendingUp, FiClock, FiUsers, FiDollarSign } from "react-icons/fi";

interface ProyectoDetalleResultsSectionProps {
  slug: string;
}

export default function ProyectoDetalleResultsSection({ slug }: ProyectoDetalleResultsSectionProps) {
  const { t } = useTranslation();

  const resultsData = [
    {
      icon: <FiTrendingUp />,
      value: "150%",
      label: "Aumento en eficiencia",
      color: "teal",
      accent: "turquesa"
    },
    {
      icon: <FiClock />,
      value: "60%",
      label: "Reducción en tiempo de procesos",
      color: "mandarina",
      accent: "naranja-tostado"
    },
    {
      icon: <FiUsers />,
      value: "200+",
      label: "Usuarios activos diarios",
      color: "violeta",
      accent: "azul-profundo"
    },
    {
      icon: <FiDollarSign />,
      value: "40%",
      label: "Reducción en costos operativos",
      color: "verde-azulado",
      accent: "turquesa"
    }
  ];

  const testimonial = {
    text: "La transformación digital que implementó Galaga Agency superó completamente nuestras expectativas. No solo modernizaron nuestros procesos, sino que crearon una solución que realmente entiende las necesidades de nuestro negocio.",
    author: "María González",
    position: "CEO, TechCorp Solutions",
    avatar: "/assets/img/testimonials/maria-gonzalez.jpg"
  };

  return (
    <section className="proyecto-detalle-results-section section relative bg-gradient-to-br from-azul-profundo via-teal to-negro overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="results-bg-element-1 absolute top-1/3 left-1/4 w-96 h-96 bg-turquesa/10 rounded-full blur-3xl"></div>
        <div className="results-bg-element-2 absolute bottom-1/4 right-1/3 w-80 h-80 bg-mandarina/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center pb-16 md:pb-20">
          <div className="results-eyebrow inline-flex items-center gap-3 pb-6">
            <div className="w-2 h-2 bg-turquesa rounded-full animate-pulse"></div>
            <span className="text-hielo font-semibold tracking-wider uppercase text-sm">
              {t("proyecto-detalle.results.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-mandarina rounded-full animate-pulse delay-300"></div>
          </div>

          <h2 className="results-title text-4xl md:text-5xl lg:text-6xl font-black text-blanco leading-tight tracking-tight pb-6">
            {t("proyecto-detalle.results.title")}
          </h2>

          <p className="results-subtitle text-lg md:text-xl text-hielo/90 font-light leading-relaxed px-4">
            {t("proyecto-detalle.results.subtitle")}
          </p>
        </div>

        {/* Results Grid */}
        <div className="results-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-20 md:pb-24">
          {resultsData.map((result, index) => (
            <div 
              key={index}
              className="result-card group relative bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 text-center"
              data-index={index}
            >
              {/* Icon */}
              <div className={`result-card-icon w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-${result.color} to-${result.accent} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}>
                <span className="text-2xl md:text-3xl">{result.icon}</span>
              </div>

              {/* Value */}
              <div className={`result-card-value text-4xl md:text-5xl font-black text-${result.color} pb-3 group-hover:text-hielo transition-colors duration-300`}>
                {result.value}
              </div>

              {/* Label */}
              <p className="result-card-label text-base md:text-lg text-hielo/80 font-medium leading-relaxed group-hover:text-hielo transition-colors duration-300">
                {result.label}
              </p>

              {/* Floating accent */}
              <div className={`result-card-accent absolute top-4 right-4 w-3 h-3 bg-${result.accent} rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="results-testimonial bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="text-center">
            <blockquote className="testimonial-quote text-xl md:text-2xl lg:text-3xl text-hielo font-light leading-relaxed italic pb-8">
              "{testimonial.text}"
            </blockquote>
            
            <div className="testimonial-author flex items-center justify-center gap-4">
              <div className="testimonial-avatar w-16 h-16 bg-gradient-to-br from-teal to-turquesa rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="text-left">
                <div className="testimonial-name text-hielo font-semibold text-lg">
                  {testimonial.author}
                </div>
                <div className="testimonial-position text-hielo/70 text-sm">
                  {testimonial.position}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}