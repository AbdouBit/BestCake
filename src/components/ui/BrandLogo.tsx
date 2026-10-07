import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'dark',
  showSubtitle = true,
  size = 'md',
}) => {
  const isLight = variant === 'light';

  // Dimension scaling
  const emblemSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-13 h-13',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* Emblème Cloche Traiteur */}
      <div
        className={`relative ${emblemSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            <linearGradient id="logoEmblemGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#F5D089" />
              <stop offset="50%" stop-color="#E5A84B" />
              <stop offset="100%" stop-color="#BA7818" />
            </linearGradient>
            <linearGradient id="logoEmblemBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color={isLight ? '#42281D' : '#331B11'} />
              <stop offset="100%" stop-color={isLight ? '#23130C' : '#1A0C06'} />
            </linearGradient>
          </defs>

          {/* Sceau circulaire */}
          <circle cx="32" cy="32" r="30" fill="url(#logoEmblemBg)" />
          <circle
            cx="32"
            cy="32"
            r="26.5"
            stroke="url(#logoEmblemGold)"
            strokeWidth="1.2"
            strokeDasharray="2.5 1.5"
          />
          <circle
            cx="32"
            cy="32"
            r="24"
            stroke="url(#logoEmblemGold)"
            strokeWidth="0.5"
            strokeOpacity="0.35"
          />

          {/* Cloche de service gastronomique */}
          <circle cx="32" cy="20" r="2.2" fill="url(#logoEmblemGold)" />
          <path d="M30.5 22 H33.5 V24 H30.5 Z" fill="url(#logoEmblemGold)" />
          <path d="M19 37.5 C19 25.5, 45 25.5, 45 37.5 Z" fill="url(#logoEmblemGold)" />

          {/* Reflet courbe de brillance */}
          <path
            d="M23.5 35.5 C24.5 28.5, 29 27, 33 27"
            stroke="#FFF6DE"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Plateau de présentation */}
          <rect x="16" y="38.5" width="32" height="3" rx="1.5" fill="url(#logoEmblemGold)" />
          <path
            d="M14 43.5 Q32 45 50 43.5"
            stroke="url(#logoEmblemGold)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Étoile de prestige */}
          <path
            d="M32 13 L32.8 15 L35 15.8 L32.8 16.6 L32 18.6 L31.2 16.6 L29 15.8 L31.2 15 Z"
            fill="#FFF6DE"
          />
        </svg>
      </div>

      {/* Typographie de marque */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.25em] ${
              isLight ? 'text-amber-400' : 'text-accent'
            }`}
          >
            Traiteur
          </span>
        </div>

        <div className="flex items-baseline gap-1">
          <span
            className={`font-serif font-bold tracking-tight ${titleSizes[size]} leading-none ${
              isLight ? 'text-[#FAF7F2]' : 'text-chocolate'
            } transition-colors group-hover:text-accent`}
          >
            Toutou
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent transition-transform group-hover:scale-125" />
        </div>

        {showSubtitle && (
          <span
            className={`text-[9px] tracking-[0.16em] uppercase font-medium mt-0.5 hidden sm:block ${
              isLight ? 'text-[#FAF7F2]/60' : 'text-muted/80'
            }`}
          >
            Maison Gastronomique
          </span>
        )}
      </div>
    </div>
  );
};
