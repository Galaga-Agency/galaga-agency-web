"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { FeaturedClient } from "@/types/clients";
import Image from "next/image";

interface FeaturedClientCardProps {
  client: FeaturedClient;
  index: number;
}

export default function FeaturedClientCard({ client, index }: FeaturedClientCardProps) {
  const { t } = useTranslation();
  
  const isReversed = index % 2 === 1;

  return (
    <div className={`featured-client-card grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
      {/* Content */}
      <div className={`featured-client-content ${isReversed ? 'lg:col-start-2' : ''}`}>
        {/* Client Logo */}
        <div className="featured-client-logo-container pb-6">
          <div className="featured-client-logo inline-flex items-center gap-4 p-6 bg-blanco rounded-xl shadow-md">
            <Image
              src={client.logo}
              alt={client.name}
              width={60}
              height={60}
              className="object-contain"
            />
            <div>
              <h4 className="featured-client-name text-xl font-bold text-negro">{client.name}</h4>
              <span className="featured-client-category text-sm text-grafito">{t(client.category)}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="featured-client-description text-lg text-grafito leading-relaxed pb-8">
          {t(client.description)}
        </p>

        {/* Results Grid */}
        <div className="featured-client-results grid grid-cols-2 gap-6">
          {client.results.map((result, idx) => (
            <div key={idx} className="featured-client-result text-center p-4 bg-hielo/50 rounded-lg">
              <div className="featured-client-result-value text-2xl md:text-3xl font-black text-teal pb-2">
                {result.value}
              </div>
              <div className="featured-client-result-metric text-sm text-grafito font-medium uppercase tracking-wider">
                {t(result.metric)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image - Fixed with proper relative positioning */}
      <div className={`featured-client-image-container relative ${isReversed ? 'lg:col-start-1' : ''}`}>
        <div className="featured-client-image relative aspect-video rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={client.image}
            alt={client.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        
        {/* Floating metric badge */}
        <div className="featured-client-badge absolute -top-4 -right-4 p-4 bg-mandarina rounded-xl shadow-lg text-blanco text-center">
          <div className="featured-client-badge-value text-xl font-black">
            {client.results[0].value}
          </div>
          <div className="featured-client-badge-metric text-xs font-medium uppercase tracking-wider opacity-90">
            {t(client.results[0].metric)}
          </div>
        </div>
      </div>
    </div>
  );
}