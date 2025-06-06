import React from 'react';
import { cn } from "@/lib/utils";

interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({ 
  icon, 
  label, 
  onClick,
  className 
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={cn(
        "p-2 rounded-full hover:bg-white/10 transition-colors",
        className
      )}
    >
      {icon}
    </button>
  );
};
