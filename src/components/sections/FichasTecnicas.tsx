import React from 'react';
import { ExpandableImage } from '@/components/ui/ExpandableImage';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const fichasTecnicas = [
  {
    id: 1,
    image: "/ficha1.webp"
  },
  {
    id: 2,
    image: "/ficha2.webp"
  },
  {
    id: 3,
    image: "/ficha3.webp"
  }
];

export const FichasTecnicas: React.FC = () => {
  return (
    <section className="py-20 bg-blue text-white relative overflow-hidden" id="fichas-tecnicas">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[52px] font-black uppercase leading-tight inline-block relative">
            Fichas Técnicas
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow"></div>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg">
            Funcionalidade com propósito, afeto com precisão.<br /><br />
            Nesta seção, apresentamos o detalhamento técnico das peças da coleção, incluindo tecidos, aviamentos, modelagens, acabamentos e processos construtivos escolhidos com base em conforto, acessibilidade e cuidado sensorial.<br /><br />
            Cada ficha foi pensada para traduzir, em linguagem técnica, o que foi construído a partir de escuta ativa com as crianças com TEA, desde a escolha por tecidos suaves ao toque até o cuidado com costuras, etiquetas, forros e modelagens que não apertam, não incomodam e acolhem o corpo com leveza.<br /><br />
            Mais do que especificações, essas fichas revelam o quanto cada detalhe importa quando o vestir vai além da aparência e se torna uma forma de cuidado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-48 max-w-7xl mx-auto">
          {fichasTecnicas.map((ficha) => (
            <div key={ficha.id} className="bg-white/10 p-4 rounded-lg flex flex-col items-center">
              <div className="w-[400px] h-[480px] flex items-center justify-center">
                <ExpandableImage 
                  src={ficha.image} 
                  alt="Ficha Técnica"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-yellow text-black hover:bg-white hover:text-blue">
            <Link to="/fichas-tecnicas-gallery">
              VER MAIS
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-40 left-20 opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="200" height="200" rx="10" fill="white"/>
        </svg>
      </div>
      
      <div className="absolute bottom-40 right-20 opacity-10">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="75" cy="75" r="75" fill="white"/>
        </svg>
      </div>
    </section>
  );
};
