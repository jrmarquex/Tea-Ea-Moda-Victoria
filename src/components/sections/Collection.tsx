import React, { useState } from 'react';
import { ExpandableImage } from '@/components/ui/ExpandableImage';

const collectionItems = [
  {
    id: 1,
    title: "Shorts Sapiar",
    image: "/by_vic_falcao-16.webp",
    category: "Shorts"
  },
  {
    id: 2,
    title: "Conjunto Expressão",
    image: "/by_vic_falcao-43.webp",
    category: "Conjunto"
  },
  {
    id: 3,
    title: "Casaco Tramar",
    image: "/IMG_8152.webp",
    category: "Casaco"
  },
];

export const Collection: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  const scrollToCroquis = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setClicked(true);
    const croquis = document.getElementById('croquis');
    if (croquis) {
      croquis.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setTimeout(() => setClicked(false), 700); // duração igual à transição
  };

  return (
    <section className="py-20 bg-purple text-white relative overflow-hidden" id="colecao">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-[52px] font-black uppercase leading-tight max-md:text-4xl">
              A<br /><span className="text-yellow">Coleção</span>
            </h2>
            <p className="text-xl mt-6 max-w-lg">
              Peças criadas a partir dos desenhos, desejos e formas de expressão de crianças com TEA, traduzidas em roupas acolhedoras, afetivas e cheias de significado. Cada modelagem, estampa e tecido foi pensado com carinho, respeitando as experiências sensoriais e celebrando o que torna cada um único.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collectionItems.map((item) => (
            <div key={item.id} className="group relative">
              <div className="overflow-hidden aspect-[2/3] bg-white/20">
                <ExpandableImage 
                  src={item.image} 
                  alt={item.title}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#croquis" 
            onClick={scrollToCroquis}
            className={`inline-block px-6 py-3 bg-yellow text-black font-bold uppercase hover:bg-white hover:text-purple transition-colors transition-transform transition-shadow duration-700 focus:outline-none focus:ring-2 focus:ring-yellow ${clicked ? 'scale-95 shadow-lg' : ''}`}
          >
            VER CROQUIS DA COLEÇÃO
          </a>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 opacity-10">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M139.957 14.8063C223.047 -20.2467 294.09 10.1337 299.402 86.1354C304.714 162.137 297.086 241.079 213.996 276.132C130.906 311.185 16.5743 285.241 11.2621 209.24C5.94989 133.238 56.8672 49.8594 139.957 14.8063Z" fill="white"/>
        </svg>
      </div>
      
      <div className="grid grid-cols-2 grid-rows-2 absolute bottom-10 right-10 gap-2 opacity-50">
        <div className="w-6 h-6 bg-white"></div>
        <div className="w-6 h-6 bg-white"></div>
        <div className="w-6 h-6 bg-white"></div>
        <div className="w-6 h-6 bg-white"></div>
      </div>
    </section>
  );
};
