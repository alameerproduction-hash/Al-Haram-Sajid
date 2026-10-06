import React from 'react';

interface SquircleIconProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'gold' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Mandatory Icon Design System (Updated to Logo Palette):
 * - Black: #0F0F0F
 * - Golden Orange: #EEA012
 * - Sky Blue: #0B92D6
 * - White: #FFFFFF
 * - Light Gold: #E8C377
 */
export const SquircleIcon: React.FC<SquircleIconProps> = ({
  children,
  variant = 'light',
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10 rounded-[14px]',
    md: 'w-12 h-12 rounded-[18px]',
    lg: 'w-14 h-14 rounded-[20px]',
  }[size];

  const variantClasses = {
    light:
      'bg-gradient-to-br from-[#FFFFFF] to-[#F4F8FB] border border-[#0F0F0F]/15 text-[#0F0F0F] shadow-[0_6px_18px_-4px_rgba(15,15,15,0.1),inset_0_1px_1px_rgba(255,255,255,1)] group-hover:border-[#EEA012] group-hover:shadow-[0_10px_24px_-4px_rgba(238,160,18,0.28),inset_0_1px_1px_rgba(255,255,255,1)]',
    dark:
      'bg-gradient-to-br from-[#1C1C1C] to-[#0F0F0F] border border-[#EEA012]/50 text-[#EEA012] shadow-[0_8px_20px_-4px_rgba(15,15,15,0.45),inset_0_1px_1px_rgba(232,195,119,0.2)] group-hover:border-[#0B92D6] group-hover:shadow-[0_12px_28px_-4px_rgba(11,146,214,0.35),inset_0_1px_1px_rgba(232,195,119,0.35)]',
    gold:
      'bg-gradient-to-br from-[#FFF9EB] to-[#E8C377]/45 border border-[#EEA012]/65 text-[#0F0F0F] shadow-[0_6px_18px_-4px_rgba(238,160,18,0.24),inset_0_1px_1px_rgba(255,255,255,0.95)] group-hover:border-[#0B92D6] group-hover:shadow-[0_10px_25px_-4px_rgba(11,146,214,0.3)]',
    glass:
      'bg-[#0F0F0F]/65 backdrop-blur-md border border-[#EEA012]/50 text-[#EEA012] shadow-[0_8px_20px_-4px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)] group-hover:border-[#0B92D6] group-hover:bg-[#0F0F0F]/85',
  }[variant];

  return (
    <div
      className={`group relative inline-flex items-center justify-center shrink-0 transition-all duration-200 ease-out hover:-translate-y-0.5 group-hover:-translate-y-0.5 ${sizeClasses} ${variantClasses} ${className}`}
    >
      {/* Top-right Sky Blue (#0B92D6) / Golden Orange (#EEA012) travel arc accent dot */}
      <span
        aria-hidden="true"
        className={`absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
          variant === 'dark' || variant === 'glass'
            ? 'bg-[#0B92D6] group-hover:bg-[#EEA012]'
            : 'bg-[#EEA012] group-hover:bg-[#0B92D6]'
        }`}
      />
      <div className="transition-transform duration-200 ease-out group-hover:scale-110 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
