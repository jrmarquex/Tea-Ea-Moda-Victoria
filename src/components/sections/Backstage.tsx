import React from 'react';
import { ExpandableImage } from '@/components/ui/ExpandableImage';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Importações das imagens para o backstage
import backstageImg1 from '/public/backstage_1.webp';
import backstageImg2 from '/public/backstage_2.webp';
import backstageImg3 from '/public/backstage_3.webp';
import backstageImg4 from '/public/backstage_4.webp';

const backstageImages = [
  {
    src: backstageImg1,
    alt: "Backstage image 1"
  },
  {
    src: backstageImg2,
    alt: "Backstage image 2"
  },
  {
    src: backstageImg3,
    alt: "Backstage image 3"
  },
  {
    src: backstageImg4,
    alt: "Backstage image 4"
  }
];

export const Backstage: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="backstage">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[52px] font-black uppercase leading-tight inline-block relative text-purple">
            Backstage
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-red"></div>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg">
            Por trás das câmeras da coleção TEA E A MODA: momentos exclusivos do processo criativo, 
            das sessões de fotos e dos desfiles.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {backstageImages.map((image, index) => (
            <div key={index} className="aspect-square bg-gray-100 p-2">
              <ExpandableImage
                src={image.src}
                alt={image.alt}
                className="h-full"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-purple text-white hover:bg-purple/80" to="/backstage-gallery">
            VER MAIS
          </Button>
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="https://drive.google.com/file/d/1Mm_OwLY7N-LiDxr0p09OmzewYarCAEfN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-purple text-white font-bold rounded-lg shadow hover:bg-purple/80 transition-colors"
          >
            Clique aqui e veja o book da coleção
          </a>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute bottom-20 right-20 opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M197.648 68.7744C188.553 32.9136 151.151 8.73277 110.804 2.22204C70.4564 -4.28869 17.4628 15.6214 3.47527 52.8052C-10.5123 89.989 23.9736 146.735 64.3209 168.594C104.668 190.453 165.273 169.527 188.866 131.441C212.458 93.3556 206.743 104.635 197.648 68.7744Z" fill="#715EB8" fillOpacity="0.5"/>
        </svg>
      </div>
    </section>
  );
};
