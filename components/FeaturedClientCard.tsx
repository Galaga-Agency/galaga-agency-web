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
    <div 
      className={`featured-client-card grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}
      data-index={index}
    >
      {/* Content */}
      <div className={`${isReversed ? 'lg:col-start-2' : ''} px-4 lg:px-0`}>
        {/* Client Logo */}
        <div className="flex items-center gap-4 pb-6">
          <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center p-3">
            <Image
              src={client.logo}
              alt={`${client.name} logo`}
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
          <div>
            <h4 className="text-xl font-bold text-negro">{client.name}</h4>
            <span className={`text-sm font-semibold text-${client.color} uppercase tracking-wider`}>
              {t(client.category)}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-grafito leading-relaxed pb-8">
          {t(client.description)}
        </p>

        {/* Results Grid */}
        <div className="grid grid-cols-2 gap-4">
          {client.results.map((result, idx) => (
            <div key={idx} className={`p-4 bg-${client.color}/5 rounded-xl border border-${client.color}/20`}>
              <div className={`text-2xl font-black text-${client.color} pb-1`}>
                {result.value}
              </div>
              <div className="text-sm text-grafito font-medium">
                {t(result.metric)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className={`${isReversed ? 'lg:col-start-1 lg:row-start-1' : ''} relative`}>
        <div className="aspect-video bg-gradient-to-br from-hielo to-white rounded-2xl overflow-hidden shadow-2xl border border-hielo/50">
          <Image
            src={client.image}
            alt={`${client.name} case study`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className={`absolute inset-0 bg-gradient-to-br from-${client.color}/20 to-transparent`}></div>
        </div>
        
        {/* Floating metric badge */}
        <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-hielo/50">
          <div className={`text-lg font-black text-${client.color}`}>
            {client.results[0].value}
          </div>
          <div className="text-xs text-grafito font-medium">
            {t(client.results[0].metric)}
          </div>
        </div>
      </div>
    </div>
  );
}