import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ExpandableImageProps {
  src: string;
  alt: string;
  className?: string;
  expandMode?: 'contain' | 'cover';
}

export const ExpandableImage: React.FC<ExpandableImageProps> = ({ 
  src, 
  alt, 
  className = '',
  expandMode = 'contain',
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div 
        className={`cursor-pointer overflow-hidden ${className}`}
        onClick={toggleExpand}
      >
        <img 
          src={src} 
          alt={alt} 
          className={`w-full h-full object-${expandMode} transition-transform duration-300 hover:scale-105`}
        />
      </div>
      
      {expanded && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={toggleExpand}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img 
              src={src} 
              alt={alt} 
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button 
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70"
              onClick={(e) => {
                e.stopPropagation();
                toggleExpand();
              }}
              aria-label="Close expanded image"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
