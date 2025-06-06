import React from 'react';
import { ExpandableImage } from '@/components/ui/ExpandableImage';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const acessoriosItems = [
  {
    id: 1,
    title: "Acessórios em Crochê",
    image: "/IMG_8280.webp",
    category: "Acessórios"
  },
  {
    id: 2,
    title: "Acessórios Representação",
    image: "/IMG_8279.webp",
    category: "Acessórios"
  }
];

export const Acessorios: React.FC = () => {
  return (
    <section className="py-20 bg-blue text-white relative overflow-hidden" id="acessorios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[52px] font-black uppercase leading-tight inline-block relative">
            Acessórios
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow"></div>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg">
            Mais do que acessórios, são extensões da proposta da coleção: vestir com empatia, abraçar com design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {acessoriosItems.map((item) => (
            <div key={item.id} className="group relative">
              <div className="overflow-hidden aspect-square bg-white/10 p-2 md:p-6">
                <ExpandableImage 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-4">
                <div className="text-sm text-yellow">{item.category}</div>
                <h3 className="text-2xl font-bold mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">

        </div>
      </div>
      
      {/* Background decorative patterns */}
      <div className="absolute bottom-10 left-10 opacity-10">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="75" cy="75" r="75" fill="white"/>
        </svg>
      </div>
    </section>
  );
};
