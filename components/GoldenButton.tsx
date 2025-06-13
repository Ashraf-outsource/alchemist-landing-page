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
  let baseStyle = `py-3 px-8 rounded-md text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black`; // Added focus:ring-[#D1A054] for consistency
  if (fullWidth) {
    baseStyle += ' w-full';
  }

  if (variant === 'filled') {
    // New 5-stop golden gradient based on the image
    // Normal state: #D7AC50 10%, #FFFFCF 25%, #CEA346 48%, #FFDE7A 69%, #D7AC50 88%
    // Hover state (slightly darker): #C69B4C 10%, #EDEEC2 25%, #B8943F 48%, #ECCB6F 69%, #C69B4C 88%
    baseStyle += ` text-black shadow-md hover:shadow-lg bg-[linear-gradient(to_right,#D7AC50_10%,#FFFFCF_25%,#CEA346_48%,#FFDE7A_69%,#D7AC50_88%)] hover:bg-[linear-gradient(to_right,#C69B4C_10%,#EDEEC2_25%,#B8943F_48%,#ECCB6F_69%,#C69B4C_88%)] focus:ring-[#D1A054]`;
  } else if (variant === 'outline-gold') {
    baseStyle += ` border-2 border-[#D1A054] text-[#D1A054] bg-transparent hover:bg-[#D1A054] hover:text-black focus:ring-[#D1A054]`;
  } else if (variant === 'outline-black-gold-text') {
    baseStyle += ` border border-[#D1A054] text-[#D1A054] bg-black hover:bg-[#D1A054] hover:text-black focus:ring-[#D1A054]`;
  }


  return (
    <button type={type} onClick={onClick} className={`${baseStyle} ${className}`}>
      {children}
    </button>
  );
};