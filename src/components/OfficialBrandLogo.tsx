import React, { useId } from 'react';

interface OfficialBrandLogoProps {
  className?: string;
  showWordmark?: boolean;
  darkBackground?: boolean;
  metallic3D?: boolean;
}

/**
 * Official Brand Logo of AL-HARM TRAVEL & TOURS
 * Recreated with 1:1 precision from the official uploaded logo:
 * - Golden Orange Airplane at top-left (#EEA012 -> #D97E00)
 * - Right-side Sky Blue travel contrail arc (#0B92D6)
 * - Black calligraphic teardrop / dome outline (#0F0F0F) with top-left loop
 * - 3D Two-Tone Kaaba Chevron inside (Golden Orange upper band + Black/Charcoal lower band)
 * - Golden Orange Arabic "حرم" ribbon sweeping underneath and extending to bottom-left
 * - Exact typography: "AL-HARM" (bold geometric sans with signature bottom-right diagonal cut on M)
 *   and "TRAVEL & TOURS" below.
 */
export const OfficialBrandLogo: React.FC<OfficialBrandLogoProps> = ({
  className = 'w-48 h-auto',
  showWordmark = true,
  darkBackground = false,
  metallic3D = false,
}) => {
  const uid = useId().replace(/:/g, '');

  const blackStrokeColor = darkBackground ? '#FFFFFF' : '#0F0F0F';
  const wordmarkColor = darkBackground ? '#FFFFFF' : '#0F0F0F';

  return (
    <svg
      viewBox={showWordmark ? '0 0 600 620' : '0 0 600 445'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="AL-HARM TRAVEL & TOURS Official Logo"
    >
      <defs>
        {/* Golden Orange Gradient for Airplane, Kaaba Top Band & Arabic Ribbon */}
        <linearGradient
          id={`goldGrad-${uid}`}
          x1="150"
          y1="20"
          x2="420"
          y2="420"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFB82E" />
          <stop offset="45%" stopColor="#EEA012" />
          <stop offset="100%" stopColor="#D67900" />
        </linearGradient>

        {/* Kaaba Left & Right Golden Roof Gradients */}
        <linearGradient
          id={`kaabaGoldLeft-${uid}`}
          x1="245"
          y1="185"
          x2="318"
          y2="245"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#E68A00" />
          <stop offset="100%" stopColor="#FFB526" />
        </linearGradient>

        <linearGradient
          id={`kaabaGoldRight-${uid}`}
          x1="318"
          y1="185"
          x2="391"
          y2="245"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFAE19" />
          <stop offset="100%" stopColor="#D87A00" />
        </linearGradient>

        {/* Kaaba Lower Black / Metallic Charcoal Gradients */}
        <linearGradient
          id={`kaabaDarkLeft-${uid}`}
          x1="245"
          y1="225"
          x2="318"
          y2="300"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#0F0F0F" />
          <stop offset="100%" stopColor="#383838" />
        </linearGradient>

        <linearGradient
          id={`kaabaDarkRight-${uid}`}
          x1="318"
          y1="225"
          x2="391"
          y2="300"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#141414" />
          <stop offset="100%" stopColor="#4A4A4A" />
        </linearGradient>

        {/* Sky Blue Travel Arc Gradient */}
        <linearGradient
          id={`skyBlueGrad-${uid}`}
          x1="320"
          y1="62"
          x2="485"
          y2="412"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#19A5EC" />
          <stop offset="60%" stopColor="#0B92D6" />
          <stop offset="100%" stopColor="#0672AC" />
        </linearGradient>

        {/* Optional 3D Metallic Bevel Filter for Intro */}
        {metallic3D && (
          <filter
            id={`bevel-${uid}`}
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
          >
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="3"
              floodColor="#000000"
              floodOpacity="0.45"
            />
          </filter>
        )}
      </defs>

      <g filter={metallic3D ? `url(#bevel-${uid})` : undefined}>
        {/* 1. RIGHT-SIDE SKY BLUE TRAVEL ARC (#0B92D6) */}
        <path
          d="M 326 62 C 446 118, 514 236, 480 342 C 456 392, 402 414, 326 420 C 396 402, 444 374, 464 326 C 492 232, 430 124, 326 62 Z"
          fill={`url(#skyBlueGrad-${uid})`}
        />

        {/* 2. BLACK CALLIGRAPHIC TEARDROP / DOME ARCH & LOOP */}
        {/* Right Inner Black Arch */}
        <path
          d="M 301 92 C 402 146, 466 248, 436 336 C 414 382, 362 400, 304 404 C 358 390, 400 368, 418 324 C 444 246, 388 152, 301 92 Z"
          fill={blackStrokeColor}
        />

        {/* Left Calligraphic Loop & Lower Teardrop Curve */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 278 96 C 288 128, 294 166, 276 202 C 268 218, 258 232, 252 240 C 244 226, 234 202, 236 172 C 222 186, 198 214, 186 254 C 170 308, 196 368, 260 398 C 292 412, 326 414, 356 408 C 318 422, 274 420, 238 402 C 174 370, 150 306, 168 244 C 180 202, 208 172, 238 150 C 242 126, 256 108, 278 96 Z M 264 128 C 252 144, 250 172, 256 198 C 268 180, 272 152, 264 128 Z"
          fill={blackStrokeColor}
        />

        {/* 3. GOLDEN ORANGE AIRPLANE AT APEX (#EEA012) */}
        <path
          d="M 254 29 L 274 37 L 303 16 L 316 19 L 292 43 L 315 53 L 328 45 L 334 48 L 320 65 L 317 82 L 311 80 L 310 63 L 286 52 L 285 90 L 274 85 L 275 59 L 269 57 L 271 51 L 275 52 L 275 46 L 252 35 Z"
          fill={`url(#goldGrad-${uid})`}
        />

        {/* 4. 3D TWO-TONE KAABA CHEVRON IN CENTER */}
        {/* Upper Golden Orange Band - Left Wing */}
        <polygon
          points="318,184 268,214 268,236 318,206"
          fill={`url(#kaabaGoldLeft-${uid})`}
        />
        {/* Upper Golden Orange Band - Right Wing */}
        <polygon
          points="318,184 376,214 376,236 318,206"
          fill={`url(#kaabaGoldRight-${uid})`}
        />

        {/* Lower Black/Charcoal Band - Left Wing with Pillar Drop */}
        <polygon
          points="318,213 268,242 268,288 286,296 286,262 318,243"
          fill={
            darkBackground ? '#E8C377' : `url(#kaabaDarkLeft-${uid})`
          }
        />
        {/* Lower Black/Charcoal Band - Right Wing with Pillar Drop */}
        <polygon
          points="318,213 376,242 376,282 362,292 362,262 318,243"
          fill={
            darkBackground ? '#EEA012' : `url(#kaabaDarkRight-${uid})`
          }
        />

        {/* 5. GOLDEN ORANGE ARABIC CALLIGRAPHIC SWEEP ("حرم") */}
        <path
          d="M 114 432 C 148 408, 178 364, 206 328 C 226 304, 246 298, 266 318 C 278 330, 286 348, 298 346 C 310 344, 326 326, 342 314 C 316 312, 294 316, 282 322 C 284 304, 292 288, 304 282 C 322 274, 352 292, 396 286 L 374 314 C 366 318, 358 320, 350 322 C 330 344, 314 370, 296 382 C 280 392, 266 380, 254 358 C 242 336, 232 330, 214 352 C 188 384, 162 420, 128 434 Z"
          fill={`url(#goldGrad-${uid})`}
        />
      </g>

      {/* 6. EXACT SOURCE WORDMARK: "AL-HARM" & "TRAVEL & TOURS" */}
      {showWordmark && (
        <g>
          {/* Main Bold Title: AL-HARM */}
          <text
            x="304"
            y="524"
            textAnchor="middle"
            fill={wordmarkColor}
            fontFamily="'Montserrat', 'Arial Black', sans-serif"
            fontWeight="800"
            fontSize="82"
            letterSpacing="1"
          >
            AL-HARM
          </text>

          {/* Signature diagonal slice on bottom-right stem of 'M' matching the source logo */}
          <polygon
            points="476,528 494,480 502,480 486,528"
            fill={darkBackground ? '#0F0F0F' : '#FFFFFF'}
          />

          {/* Subtitle: TRAVEL & TOURS */}
          <text
            x="304"
            y="578"
            textAnchor="middle"
            fill={wordmarkColor}
            fontFamily="'Montserrat', Arial, sans-serif"
            fontWeight="700"
            fontSize="41"
            letterSpacing="4.5"
          >
            TRAVEL &amp; TOURS
          </text>
        </g>
      )}
    </svg>
  );
};
