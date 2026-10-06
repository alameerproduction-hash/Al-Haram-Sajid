import React, { useState } from 'react';
import { Compass } from 'lucide-react';
import { SquircleIcon } from './SquircleIcon';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle = 'Al Haram Travels & Tours',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
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
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
