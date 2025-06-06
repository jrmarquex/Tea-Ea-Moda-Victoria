import React from 'react';
import { ImageCarousel } from '@/components/ui/ImageCarousel';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ExpandableImage } from '@/components/ui/ExpandableImage';

// Croquis images from collection
const croquisImages = [
  {
    src: "/IMG_8321.webp",
    alt: "Fashion sketch 1"
  },
  {
    src: "/IMG_8320.webp",
    alt: "Fashion sketch 2"
  },
  {
    src: "/IMG_8318.webp",
    alt: "Fashion sketch 3"
  },
  {
    src: "/IMG_8316.webp",
    alt: "Fashion sketch 4"
  },
  {
    src: "/IMG_8319.webp",
    alt: "Fashion sketch 5"
  }
];

export const Croquis: React.FC = () => {
  return (
    <section className="py-20 bg-red text-white relative overflow-hidden" id="croquis">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[52px] font-black uppercase leading-tight inline-block relative">
            Croquis
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow"></div>
          </h2>
        </div>

        <p className="text-lg text-center max-w-2xl mx-auto mb-10">
          Antes de virar roupa, virou traço. E antes do traço, virou escuta.<br /><br />
          Os croquis dessa coleção nasceram do olhar atento às expressões das crianças com TEA, aos seus desenhos, rabiscos e desejos. Cada esboço é uma tentativa de traduzir em forma aquilo que elas disseram com lápis de cor, com silêncios, com sorrisos tímidos.<br /><br />
          Mais do que representações técnicas, esses croquis carregam sentimento. São os primeiros passos de uma coleção que começou sendo afetiva, antes mesmo de ser estética. É aqui que a moda começa a ganhar alma.
        </p>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {croquisImages.map((img, idx) => (
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
          <Button className="bg-yellow text-black hover:bg-white hover:text-red" to="/croquis-gallery">
            VER MAIS
          </Button>
        </div>
      </div>
      
      {/* Background decorative element */}
      <div className="absolute bottom-0 right-0 opacity-10">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M139.957 14.8063C223.047 -20.2467 394.09 10.1337 399.402 86.1354C404.714 162.137 297.086 341.079 213.996 376.132C130.906 411.185 16.5743 385.241 11.2621 309.24C5.94989 233.238 56.8672 49.8594 139.957 14.8063Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};
