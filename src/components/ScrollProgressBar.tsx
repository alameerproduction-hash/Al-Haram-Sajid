import React, { useEffect, useState } from 'react';

/**
 * Thin, elegant golden-orange (#EEA012) scroll progress bar
 * fixed at the very top of the screen across the entire application.
 */
export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (scrollHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      const percentage = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
      setScrollProgress(percentage);
    };

    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[90] h-[3px] bg-transparent pointer-events-none"
    >
      <div
        className="h-full bg-[#EEA012] shadow-[0_0_10px_rgba(238,160,18,0.85)] transition-[width] duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
