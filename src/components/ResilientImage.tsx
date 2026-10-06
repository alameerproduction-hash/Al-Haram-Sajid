import React, { useState, useEffect } from 'react';
import { Compass } from 'lucide-react';
import { SquircleIcon } from './SquircleIcon';
import { INLINE_IMAGES } from '../data/inlineImages';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

function resolveReliableImageSrc(rawSrc: string): string {
  if (!rawSrc) return INLINE_IMAGES.heroHaram;
  if (rawSrc.startsWith('data:image/')) return rawSrc;
  if (rawSrc.includes('hero_masjid_al_haram')) return INLINE_IMAGES.heroHaram;
  if (rawSrc.includes('madinah_prophet_mosque'))
    return INLINE_IMAGES.madinahMosque;
  if (rawSrc.includes('umrah_pilgrims_sanctuary'))
    return INLINE_IMAGES.umrahSanctuary;
  if (rawSrc.includes('luxury_makkah_hospitality'))
    return INLINE_IMAGES.luxuryHospitality;
  if (rawSrc.includes('arabian_heritage_oasis'))
    return INLINE_IMAGES.arabianOasis;
  if (
    rawSrc.includes('ceo_sajid_kahloon') ||
    rawSrc.includes('fbcdn.net') ||
    rawSrc.includes('783619003')
  ) {
    return INLINE_IMAGES.ceoPortrait;
  }
  return rawSrc;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle = 'Al Haram Travels & Tours',
}) => {
  const resolvedSrc = resolveReliableImageSrc(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [resolvedSrc]);

  if (hasError || !resolvedSrc) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0F0F0F] via-[#171717] to-[#0B92D6]/30 text-[#FFFFFF] p-6 text-center bg-islamic-pattern-dark ${className}`}
        role="img"
        aria-label={alt}
      >
        <SquircleIcon variant="dark" size="md" className="mb-3">
          <Compass className="w-5 h-5 text-[#EEA012]" />
        </SquircleIcon>
        <p className="font-display text-sm font-bold text-[#EEA012] tracking-wide">
          {fallbackTitle}
        </p>
        <p className="text-xs font-semibold text-[#FFFFFF]/85 mt-1 max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      loading="eager"
      decoding="async"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
