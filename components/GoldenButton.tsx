import React from 'react';

interface GoldenButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'filled' | 'outline-gold' | 'outline-black-gold-text';
  fullWidth?: boolean;
}

export const GoldenButton: React.FC<GoldenButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  variant = 'filled',
  fullWidth = false,
}) => {
  let baseStyle = `py-3 px-8 rounded-md text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black`;
  if (fullWidth) {
    baseStyle += ' w-full';
  }

  if (variant === 'filled') {
    // New refined golden gradient
    baseStyle += ` bg-gradient-to-r from-[#FAF0C5] via-[#E0C083] to-[#BE9B5B] text-black shadow-md hover:shadow-lg hover:from-[#EAE0B5] hover:via-[#D0B073] hover:to-[#AE8B4B]`;
  } else if (variant === 'outline-gold') {
    baseStyle += ` border-2 border-[#D1A054] text-[#D1A054] bg-transparent hover:bg-[#D1A054] hover:text-black`;
  } else if (variant === 'outline-black-gold-text') {
    baseStyle += ` border border-[#D1A054] text-[#D1A054] bg-black hover:bg-[#D1A054] hover:text-black`;
  }


  return (
    <button type={type} onClick={onClick} className={`${baseStyle} ${className}`}>
      {children}
    </button>
  );
};