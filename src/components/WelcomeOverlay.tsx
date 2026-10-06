import React, { useEffect, useState, useRef } from 'react';
import { Volume2, VolumeX, SkipForward } from 'lucide-react';
import { OfficialBrandLogo } from './OfficialBrandLogo';
import { SquircleIcon } from './SquircleIcon';
import { BroadcastSoundEngine } from '../utils/broadcastSoundEngine';

interface WelcomeOverlayProps {
  onComplete: () => void;
}

/**
 * 3D NEWS CHANNEL STYLE LOGO INTRO (10-Second Broadcast Ident)
 *
 * Follows the exact 10-step animation & audio sequence:
 * 0:00 — Dark cinematic studio background + subtle world grid + atmospheric rumble
 * 0:01 — Light streak sweeps left-to-right across the studio
 * 0:02 — 3D extruded logo slowly emerges from darkness with camera push-in
 * 0:03 — Smooth horizontal 3D rotation begins
 * 0:04–0:06 — Full 360° physical 3D rotation showing extruded metallic/glass depth & edge thickness
 * 0:06 — Camera orbital tilt around the 3D logo
 * 0:07 — Logo locks front-facing with DEEP BROADCAST IMPACT & subtle lens flare
 * 0:08 — Final centered hero hold (~2s) with golden-orange & sky-blue studio glow
 * 0:09–0:10 — Smooth fade to black & transition to website
 */
export const WelcomeOverlay: React.FC<WelcomeOverlayProps> = ({ onComplete }) => {
  const [fadingOut, setFadingOut] = useState(false);
  const [muted, setMuted] = useState(false);
  const [elapsedMs, setElapsedMs] = useState(0);
  const soundEngineRef = useRef<BroadcastSoundEngine | null>(null);

  useEffect(() => {
    const engine = new BroadcastSoundEngine();
    soundEngineRef.current = engine;
    engine.start(false);

    const startTime = performance.now();
    const interval = setInterval(() => {
      const now = performance.now();
      setElapsedMs(Math.min(10000, now - startTime));
    }, 50);

    const fadeTimer = setTimeout(() => {
      setFadingOut(true);
    }, 9000);

    const finishTimer = setTimeout(() => {
      engine.stop();
      onComplete();
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
      engine.stop();
    };
  }, [onComplete]);

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextMuted = !muted;
    setMuted(nextMuted);
    if (soundEngineRef.current) {
      soundEngineRef.current.setMuted(nextMuted);
    }
  };

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (soundEngineRef.current) {
      soundEngineRef.current.stop();
    }
    onComplete();
  };

  // Generate 22 stacked 3D depth slices for realistic physical thickness during 360° rotation
  const depthLayers = Array.from({ length: 22 }, (_, idx) => idx);
  const progressPercent = Math.min(100, (elapsedMs / 10000) * 100);

  return (
    <div
      onClick={() => {
        // Clicking anywhere ensures browser audio context is unlocked if needed
        if (soundEngineRef.current && !muted) {
          soundEngineRef.current.setMuted(false);
        }
      }}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#060709] text-[#FFFFFF] select-none overflow-hidden transition-opacity duration-1000 ${
        fadingOut ? 'opacity-0' : 'opacity-100'
      }`}
      aria-label="AL-HARM TRAVEL & TOURS 3D Broadcast Intro"
    >
      {/* Scoped 3D Broadcast Keyframe Styles */}
      <style>{`
        @keyframes studioCameraRig {
          0% {
            transform: perspective(1400px) translateZ(-420px) rotateX(14deg) rotateY(-8deg);
          }
          20% {
            transform: perspective(1400px) translateZ(-220px) rotateX(10deg) rotateY(-4deg);
          }
          50% {
            transform: perspective(1400px) translateZ(-60px) rotateX(-6deg) rotateY(10deg);
          }
          65% {
            transform: perspective(1400px) translateZ(30px) rotateX(8deg) rotateY(-6deg);
          }
          72% {
            transform: perspective(1400px) translateZ(0px) rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: perspective(1400px) translateZ(0px) rotateX(0deg) rotateY(0deg);
          }
        }

        @keyframes logo360BroadcastRotation {
          0% {
            opacity: 0;
            transform: rotateY(-55deg) rotateX(12deg) scale(0.72);
            filter: brightness(0.2) blur(6px);
          }
          12% {
            opacity: 0.15;
            transform: rotateY(-40deg) rotateX(10deg) scale(0.78);
            filter: brightness(0.45) blur(3px);
          }
          26% {
            opacity: 1;
            transform: rotateY(0deg) rotateX(6deg) scale(0.92);
            filter: brightness(1.05) blur(0px);
          }
          48% {
            opacity: 1;
            transform: rotateY(185deg) rotateX(-6deg) scale(0.98);
            filter: brightness(1.15) blur(0.4px);
          }
          64% {
            opacity: 1;
            transform: rotateY(330deg) rotateX(5deg) scale(1.03);
            filter: brightness(1.2) blur(0.3px);
          }
          71% {
            opacity: 1;
            transform: rotateY(360deg) rotateX(0deg) scale(1);
            filter: brightness(1.25) blur(0px);
          }
          88% {
            opacity: 1;
            transform: rotateY(360deg) rotateX(0deg) scale(1);
            filter: brightness(1.08) blur(0px);
          }
          100% {
            opacity: 0;
            transform: rotateY(360deg) rotateX(0deg) scale(0.97);
            filter: brightness(0.5) blur(2px);
          }
        }

        @keyframes broadcastLightStreak {
          0%, 7% {
            opacity: 0;
            transform: translateX(-120%) scaleX(0.4);
          }
          14% {
            opacity: 1;
            transform: translateX(0%) scaleX(1.3);
          }
          24%, 100% {
            opacity: 0;
            transform: translateX(120%) scaleX(0.5);
          }
        }

        @keyframes broadcastImpactFlash {
          0%, 68% {
            opacity: 0;
            transform: scale(0.5);
          }
          71% {
            opacity: 0.95;
            transform: scale(1.18);
          }
          82% {
            opacity: 0.45;
            transform: scale(1.02);
          }
          100% {
            opacity: 0;
            transform: scale(0.95);
          }
        }

        @keyframes broadcastRingsSpin {
          0% {
            transform: rotateX(72deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(72deg) rotateZ(360deg);
          }
        }

        .animate-studio-camera {
          animation: studioCameraRig 10s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          transform-style: preserve-3d;
        }

        .animate-logo-3d {
          animation: logo360BroadcastRotation 10s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          transform-style: preserve-3d;
        }

        .animate-streak-1 {
          animation: broadcastLightStreak 10s ease-out forwards;
        }

        .animate-impact-glow {
          animation: broadcastImpactFlash 10s ease-out forwards;
        }

        .animate-studio-rings {
          animation: broadcastRingsSpin 24s linear infinite;
          transform-style: preserve-3d;
        }
      `}</style>

      {/* 1. SOPHISTICATED DARK BROADCAST STUDIO ENVIRONMENT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Subtle Global Network Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at center, rgba(11, 146, 214, 0.28) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />

        {/* Volumetric Studio Key & Rim Spotlights */}
        <div className="absolute -top-32 left-1/4 w-[620px] h-[620px] rounded-full bg-radial from-[#0B92D6]/18 via-[#0B92D6]/5 to-transparent blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 w-[620px] h-[620px] rounded-full bg-radial from-[#EEA012]/18 via-[#EEA012]/5 to-transparent blur-3xl" />

        {/* Circular 3D Broadcast Rings on Studio Floor */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[540px] h-[540px] sm:w-[740px] sm:h-[740px] rounded-full border border-[#0B92D6]/20 animate-studio-rings flex items-center justify-center">
            <div className="w-[400px] h-[400px] sm:w-[540px] sm:h-[540px] rounded-full border border-dashed border-[#EEA012]/25 flex items-center justify-center">
              <div className="w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] rounded-full border border-[#FFFFFF]/10" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. 0:01 — INITIAL LIGHT STREAK SWEEP */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-1.5 bg-gradient-to-r from-transparent via-[#0B92D6] to-[#EEA012] blur-[1px] animate-streak-1 z-20"
      >
        <div className="w-full h-6 -mt-2 bg-gradient-to-r from-transparent via-[#EEA012]/45 to-transparent blur-md" />
      </div>

      {/* 3. 0:07 — DEEP BROADCAST IMPACT BACKLIGHT & SUBTLE LENS FLARE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute w-[420px] h-[420px] sm:w-[560px] sm:h-[560px] rounded-full bg-radial from-[#EEA012]/35 via-[#0B92D6]/20 to-transparent blur-3xl animate-impact-glow z-10"
      />

      {/* 4. 3D CAMERA RIG & EXTRUDED METALLIC/GLASS SOURCE LOGO */}
      <div className="relative z-30 flex flex-col items-center justify-center animate-studio-camera">
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center animate-logo-3d">
          {/* Extruded 3D Depth Layers (Creates real physical thickness on 360° rotation) */}
          {depthLayers.map((layerIndex) => {
            const zOffset = (layerIndex - 11) * 1.4; // -15.4px to +14px physical extrusion
            const isFrontFace = layerIndex === depthLayers.length - 1;
            const isBackFace = layerIndex === 0;

            return (
              <div
                key={layerIndex}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{
                  transform: `translateZ(${zOffset}px)`,
                  filter: isFrontFace
                    ? 'drop-shadow(0 2px 12px rgba(238, 160, 18, 0.35))'
                    : isBackFace
                    ? 'brightness(0.45) contrast(1.4)'
                    : 'brightness(0.32) sepia(0.6) hue-rotate(-10deg) saturate(2.5)',
                }}
              >
                {/* Crisp White Studio Plinth Disc so the exact Black/Orange/Blue source logo preserves 100% identity */}
                <div
                  className={`w-64 h-64 sm:w-80 sm:h-80 rounded-[48px] flex items-center justify-center p-5 sm:p-7 ${
                    isFrontFace
                      ? 'bg-gradient-to-br from-[#FFFFFF] via-[#FDFDFD] to-[#F2F6FA] border-2 border-[#E8C377] shadow-[inset_0_2px_10px_rgba(255,255,255,1)]'
                      : 'bg-gradient-to-br from-[#D68910] via-[#4A4A4A] to-[#0B92D6]'
                  }`}
                >
                  {isFrontFace || isBackFace ? (
                    <OfficialBrandLogo
                      className="w-full h-full"
                      showWordmark={true}
                      darkBackground={false}
                      metallic3D={isFrontFace}
                    />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        {/* Realistic Studio Floor Shadow & Reflection */}
        <div
          aria-hidden="true"
          className="w-56 sm:w-72 h-7 rounded-full bg-radial from-[#0B92D6]/30 via-[#000000]/80 to-transparent blur-xl mt-6"
        />
      </div>

      {/* 5. TOP-RIGHT SOUND & SKIP CONTROLS (SQUIRCLE CONTAINERS) */}
      <div className="fixed top-5 right-5 z-50 flex items-center gap-3">
        <button
          type="button"
          onClick={handleToggleMute}
          aria-label={muted ? 'Unmute Broadcast Audio' : 'Mute Broadcast Audio'}
          className="group flex items-center gap-2 pr-3.5 rounded-2xl bg-[#0F0F0F]/80 border border-[#EEA012]/40 hover:border-[#EEA012] backdrop-blur-md transition-all cursor-pointer"
        >
          <SquircleIcon variant="dark" size="sm">
            {muted ? (
              <VolumeX className="w-4 h-4 text-[#EEA012]" />
            ) : (
              <Volume2 className="w-4 h-4 text-[#0B92D6]" />
            )}
          </SquircleIcon>
          <span className="text-xs font-extrabold text-[#FFFFFF]">
            {muted ? 'Unmute Audio' : 'Broadcast Audio On'}
          </span>
        </button>

        <button
          type="button"
          onClick={handleSkip}
          aria-label="Skip Intro"
          className="group flex items-center gap-2 pr-3.5 rounded-2xl bg-[#0F0F0F]/80 border border-[#FFFFFF]/20 hover:border-[#0B92D6] backdrop-blur-md transition-all cursor-pointer"
        >
          <SquircleIcon variant="dark" size="sm">
            <SkipForward className="w-4 h-4 text-[#EEA012]" />
          </SquircleIcon>
          <span className="text-xs font-extrabold text-[#FFFFFF]">
            Enter Website
          </span>
        </button>
      </div>

      {/* Subtle Bottom Broadcast Timeline Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-64 sm:w-80 flex flex-col items-center gap-2">
        <div className="w-full h-1 rounded-full bg-[#FFFFFF]/12 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#EEA012] via-[#E8C377] to-[#0B92D6] transition-all duration-100"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
};
