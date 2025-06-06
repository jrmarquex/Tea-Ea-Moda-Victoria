import React from 'react';
import { ExpandableImage } from '@/components/ui/ExpandableImage';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const estampasItems = [
  {
    id: 1,
    title: "Estampa Sensorial",
    image: "/estampa-11-cOopiar-Recuperado.webp",
    category: "Tecidos"
  },
  {
    id: 2,
    title: "Estampa Floral",
    image: "/teste estampa 7.png",
    category: "Tecidos"
  },
  {
    id: 3,
    title: "Estampa Geométrica",
    image: "/teste estampa 08.webp",
    category: "Tecidos"
  }
];

export const Estampas: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="estampas">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[52px] font-black uppercase leading-tight inline-block relative text-purple">
            Estampas
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-red"></div>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg">
            As estampas da coleção nasceram dos desenhos e expressões das crianças com TEA, transformadas em composições que respeitam diferentes sensibilidades visuais. Cada padrão foi pensado para ser visualmente estimulante ou reconfortante, sem causar sobrecarga sensorial, unindo arte, afeto e acessibilidade estética.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {estampasItems.map((item) => (
            <div key={item.id} className="group relative">
              <div className="overflow-hidden aspect-square bg-purple/5 p-2">
                <ExpandableImage 
                  src={item.image} 
                  alt={item.title}
                />
              </div>
              <div className="mt-4">
                <div className="text-sm text-purple">{item.category}</div>
                <h3 className="text-xl font-bold mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-purple text-white hover:bg-purple/80">
            <Link to="/estampas-gallery">
              VER MAIS
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 opacity-10 rotate-45">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="200" height="200" fill="#715EB8"/>
        </svg>
      </div>
    </section>
  );
};
