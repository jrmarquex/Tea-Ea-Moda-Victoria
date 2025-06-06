import React, { useEffect, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ExpandableImage } from '@/components/ui/ExpandableImage';
import { ImageCarousel } from '@/components/ui/ImageCarousel';

const ensaioImages = [
  {
    src: "/by_vic_falcao-56.webp",
    alt: "Editorial 1"
  },
  {
    src: "/by_vic_falcao00003_-_ilustrada.webp",
    alt: "Editorial 2"
  },
  {
    src: "/by_vic_falcao00002_-_ilsutrada.webp",
    alt: "Editorial 3"
  },
  {
    src: "/by_vic_falcao-55.webp",
    alt: "Editorial 4"
  }
];

export const EnsaioFotografico: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<any>(null);
  
  useEffect(() => {
    if (carouselRef.current && apiRef.current) {
      const autoScrollInterval = setInterval(() => {
        if (apiRef.current.canScrollNext()) {
          apiRef.current.scrollNext();
        } else {
          apiRef.current.scrollTo(0);
        }
      }, 3000);
      
      return () => clearInterval(autoScrollInterval);
    }
  }, [carouselRef, apiRef]);

  return (
    <section className="py-20 bg-white text-black relative overflow-hidden" id="ensaio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[52px] font-black uppercase leading-tight inline-block relative text-purple">
            EDITORIAL
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-red"></div>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg">
            Ensaio fotográfico apresentando a coleção TEA E A MODA em diversos contextos, 
            captando a essência e o propósito das peças.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-nowrap justify-center gap-4">
            {ensaioImages.map((img, idx) => (
              <div key={idx} className="bg-white/10 p-2 rounded-lg flex flex-col items-center">
                <div className="w-[220px] h-[280px] flex items-center justify-center">
                  <ExpandableImage
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-purple text-white hover:bg-purple/80" to="/ensaio-gallery">
            VER MAIS
          </Button>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M197.648 68.7744C188.553 32.9136 151.151 8.73277 110.804 2.22204C70.4564 -4.28869 17.4628 15.6214 3.47527 52.8052C-10.5123 89.989 23.9736 146.735 64.3209 168.594C104.668 190.453 165.273 169.527 188.866 131.441C212.458 93.3556 206.743 104.635 197.648 68.7744Z" fill="#715EB8" fillOpacity="0.5"/>
        </svg>
      </div>
    </section>
  );
};
