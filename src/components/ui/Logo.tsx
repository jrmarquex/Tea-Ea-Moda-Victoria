
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'large';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'default' }) => {
  const baseClasses = variant === 'large' ? 'text-4xl' : 'text-2xl';
  
  return (
    <Link to="/" className={`font-black tracking-wider ${baseClasses} ${className}`}>
      <span className="text-red">TEA</span>
      <span className="mx-1">E A</span>
      <span className="text-purple">MODA</span>
    </Link>
  );
};
