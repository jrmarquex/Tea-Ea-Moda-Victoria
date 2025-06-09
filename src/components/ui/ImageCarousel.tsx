import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ExpandableImage } from '@/components/ui/ExpandableImage';
import { cn } from '@/lib/utils';

interface ImageCarouselProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  className?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
  itemClassName?: string;
  expandMode?: 'contain' | 'cover';
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  className = '', 
  aspectRatio = 'portrait',
  itemClassName = '',
  expandMode = 'contain',
}) => {
  const aspectRatioClass = 
    aspectRatio === 'square' ? 'aspect-square' : 
    aspectRatio === 'landscape' ? 'aspect-video' :
    'aspect-[3/4]';

  return (
    <Carousel 
      className={`w-full ${className}`}
      opts={{
        align: 'start',
        loop: true,
        dragFree: true,
      }}
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {images.map((image, index) => (
          <CarouselItem key={index} className={cn(
            "pl-2 md:pl-4 md:basis-1/3 lg:basis-1/5",
            // Customized width for mobile
            "basis-4/5 sm:basis-2/5"
          )}>
            <div className={`p-2 ${aspectRatioClass} ${itemClassName}`}>
              <ExpandableImage 
                src={image.src} 
                alt={image.alt} 
                className="h-full w-full"
                expandMode={expandMode}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Only show navigation arrows on mobile */}
      <CarouselPrevious className="left-1 md:hidden h-8 w-8" />
      <CarouselNext className="right-1 md:hidden h-8 w-8" />
    </Carousel>
  );
};
