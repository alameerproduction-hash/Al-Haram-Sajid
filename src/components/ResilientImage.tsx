import React, { useState, useEffect } from 'react';
import { Compass } from 'lucide-react';
import { SquircleIcon } from './SquircleIcon';
import heroHaramAsset from '../assets/images/hero_makkah_custom.jpg';
import madinahMosqueAsset from '../assets/images/madinah_prophet_mosque_1791294572353.jpg';
import umrahSanctuaryAsset from '../assets/images/umrah_pilgrims_sanctuary_1791294584413.jpg';
import luxuryHospitalityAsset from '../assets/images/luxury_makkah_hospitality_1791294596855.jpg';
import arabianOasisAsset from '../assets/images/arabian_heritage_oasis_1791294608959.jpg';
import ceoPortraitAsset from '../assets/images/ceo_sajid_kahloon.jpg';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

function normalizePrimarySrc(rawSrc: string): string {
  if (!rawSrc) {
    return 'https://noorumrahtravels.co.uk/uploads/media/2026/04/places-to-visit-in-makkah-69d50a5aa940f.jpg';
  }
  // Normalize any legacy /src/assets/images/... paths stored in localStorage
  if (rawSrc.startsWith('/src/assets/images/')) {
    if (rawSrc.includes('hero_masjid_al_haram') || rawSrc.includes('hero_makkah_custom')) {
      return 'https://noorumrahtravels.co.uk/uploads/media/2026/04/places-to-visit-in-makkah-69d50a5aa940f.jpg';
    }
    if (rawSrc.includes('madinah_prophet_mosque')) return madinahMosqueAsset;
    if (rawSrc.includes('umrah_pilgrims_sanctuary')) return umrahSanctuaryAsset;
    if (rawSrc.includes('luxury_makkah_hospitality')) return luxuryHospitalityAsset;
    if (rawSrc.includes('arabian_heritage_oasis')) return arabianOasisAsset;
    if (rawSrc.includes('ceo_sajid_kahloon')) return ceoPortraitAsset;
  }
  return rawSrc;
}

function getBackupSrc(rawSrc: string): string {
  if (
    rawSrc.includes('places-to-visit-in-makkah') ||
    rawSrc.includes('hero_masjid_al_haram') ||
    rawSrc.includes('hero_makkah_custom')
  ) {
    return heroHaramAsset;
  }
  if (rawSrc.includes('madinah_prophet_mosque')) return madinahMosqueAsset;
  if (rawSrc.includes('umrah_pilgrims_sanctuary')) return umrahSanctuaryAsset;
  if (rawSrc.includes('luxury_makkah_hospitality')) return luxuryHospitalityAsset;
  if (rawSrc.includes('arabian_heritage_oasis')) return arabianOasisAsset;
  if (
    rawSrc.includes('ceo_sajid_kahloon') ||
    rawSrc.includes('fbcdn.net') ||
    rawSrc.includes('783619003')
  ) {
    return ceoPortraitAsset;
  }
  return heroHaramAsset;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle = 'Al Harm Travels & Tours',
}) => {
  const primarySrc = normalizePrimarySrc(src);
  const backupSrc = getBackupSrc(src);
  const [currentSrc, setCurrentSrc] = useState<string>(primarySrc);
  const [triedBackup, setTriedBackup] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setCurrentSrc(normalizePrimarySrc(src));
    setTriedBackup(false);
    setHasError(false);
  }, [src]);

  const handleImageError = () => {
    if (!triedBackup && backupSrc && backupSrc !== currentSrc) {
      setTriedBackup(true);
      setCurrentSrc(backupSrc);
    } else {
      setHasError(true);
    }
  };

  if (hasError || !currentSrc) {
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
      src={currentSrc}
      alt={alt}
      loading="eager"
      decoding="async"
      onError={handleImageError}
      className={className}
    />
  );
};
