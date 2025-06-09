
import React from 'react';
import { ExpandableImage } from '@/components/ui/ExpandableImage';

interface GalleryGridProps {
  title: string;
  description?: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
  columns?: 2 | 3 | 4;
  largeImages?: boolean;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ 
  title, 
  description, 
  images, 
  columns = 3,
  largeImages = false
}) => {
  const gridClass = 
    columns === 2 ? 'grid-cols-1 sm:grid-cols-2' : 
    columns === 4 ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' :
    'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';

  return (
    <section className="py-20 px-4 bg-[#F4F4F4]">
      <div className="container mx-auto">
        <div className="flex justify-center mb-12">
          <div className="relative text-center">
            <h2 className="text-4xl font-extrabold relative z-10">{title}</h2>
            <div className="absolute left-0 bottom-0 w-full h-1 bg-yellow"></div>
          </div>
        </div>
        
        {description && (
          <p className="max-w-2xl mx-auto text-center mb-12 text-lg">{description}</p>
        )}
        
        <div className={`grid ${gridClass} gap-6`}>
          {images.map((image, index) => (
            <div key={index} className={`${largeImages ? 'aspect-auto h-auto' : 'aspect-[3/4]'} bg-white p-2`}>
              <ExpandableImage 
                src={image.src} 
                alt={image.alt} 
                className="h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
