"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import { useState } from "react";

interface ProyectoDetalleGallerySectionProps {
  slug: string;
}

export default function ProyectoDetalleGallerySection({ slug }: ProyectoDetalleGallerySectionProps) {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock gallery data
  const galleryImages = [
    {
      src: "/assets/img/projects/gallery-1.jpg",
      alt: "Dashboard principal del CRM",
      caption: "Dashboard principal con métricas en tiempo real"
    },
    {
      src: "/assets/img/projects/gallery-2.jpg", 
      alt: "Sistema de gestión de clientes",
      caption: "Interfaz de gestión avanzada de clientes"
    },
    {
      src: "/assets/img/projects/gallery-3.jpg",
      alt: "Módulo de automatización",
      caption: "Herramientas de automatización de procesos"
    },
    {
      src: "/assets/img/projects/gallery-4.jpg",
      alt: "Analíticas y reportes",
      caption: "Sistema de analíticas y generación de reportes"
    },
    {
      src: "/assets/img/projects/gallery-5.jpg",
      alt: "Vista móvil responsive",
      caption: "Experiencia móvil optimizada"
    },
    {
      src: "/assets/img/projects/gallery-6.jpg",
      alt: "Integración ERP",
      caption: "Módulo ERP completamente integrado"
    }
  ];

  return (
    <section className="proyecto-detalle-gallery-section section relative bg-gradient-to-br from-hielo/30 to-blanco overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="gallery-bg-element-1 absolute top-1/4 left-1/4 w-80 h-80 bg-teal/5 rounded-full blur-3xl"></div>
        <div className="gallery-bg-element-2 absolute bottom-1/3 right-1/4 w-96 h-96 bg-turquesa/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center pb-16 md:pb-20">
          <h2 className="gallery-title text-4xl md:text-5xl lg:text-6xl font-black text-teal leading-tight tracking-tight pb-6">
            {t("proyecto-detalle.gallery.title")}
          </h2>
          <p className="gallery-subtitle text-lg md:text-xl text-grafito font-light leading-relaxed px-4">
            {t("proyecto-detalle.gallery.subtitle")}
          </p>
        </div>

        {/* Main Featured Image */}
        <div className="gallery-featured pb-12 md:pb-16">
          <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
            <div className="gallery-main-image relative overflow-hidden rounded-2xl">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                width={1200}
                height={700}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-negro/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="gallery-image-caption text-white text-lg md:text-xl font-medium">
                  {galleryImages[selectedImage].caption}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="gallery-thumbnails grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`gallery-thumbnail relative aspect-square rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                selectedImage === index 
                  ? 'ring-4 ring-teal shadow-xl scale-105' 
                  : 'hover:shadow-lg'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
              {selectedImage === index && (
                <div className="absolute inset-0 bg-teal/20 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="gallery-stats pt-16 md:pt-20">
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="gallery-stat-item">
                <div className="text-4xl md:text-5xl font-black text-teal pb-2">6</div>
                <p className="text-lg text-grafito font-medium">
                  {t("proyecto-detalle.gallery.modules")}
                </p>
              </div>
              <div className="gallery-stat-item">
                <div className="text-4xl md:text-5xl font-black text-teal pb-2">100%</div>
                <p className="text-lg text-grafito font-medium">
                  {t("proyecto-detalle.gallery.responsive")}
                </p>
              </div>
              <div className="gallery-stat-item">
                <div className="text-4xl md:text-5xl font-black text-teal pb-2">24/7</div>
                <p className="text-lg text-grafito font-medium">
                  {t("proyecto-detalle.gallery.availability")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}