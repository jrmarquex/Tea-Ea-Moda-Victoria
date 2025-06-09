import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

// Importações das imagens para a seção Hero_portfolio
import heroPortfolioImage1 from '/public/victoria-3 - ilustrada.webp';
import heroPortfolioImage2 from '/public/by_vic_falcão00001_-_ilustrada.png';

export const Hero_portfolio: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  const scrollToCollection = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setClicked(true);
    const collectionSection = document.getElementById('colecao');
    if (collectionSection) {
      collectionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setTimeout(() => setClicked(false), 700); // duração igual à transição
  };
  
  return (
    <section id="hero" className="min-h-screen bg-red pt-24 relative overflow-hidden">
      <div className="container mx-auto relative z-10 flex flex-col justify-center h-full py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[80vh]">
          <div className="relative">
            <div className="mb-4">
              <span className="inline-block bg-yellow text-purple font-bold px-12 py-12 rounded-full text-[40px] md:text-[70px] lg:text-[70] leading-none">Portfólio</span>
            </div>
            <h1 className="text-[92px] font-black uppercase leading-[0.9] text-yellow max-md:text-6xl max-sm:text-4xl">
              TEA EA MODA
            </h1>
            <p className="text-white text-xl mt-8 max-w-md ml-1 max-md:text-lg max-sm:text-base">
              Mais do que uma coleção de moda, é um abraço em forma de roupa, criada a partir dos desenhos, desejos e formas de expressão das crianças com TEA, celebrando sua singularidade com cor, escuta, empatia e representatividade. By Vic Falcão
            </p>
            <div className="mt-10">
              <Button 
                variant="outline" 
                size="lg" 
                className={`bg-white text-red hover:bg-yellow hover:text-black transition-colors transition-transform transition-shadow duration-700 focus:outline-none focus:ring-2 focus:ring-yellow ${clicked ? 'scale-95 shadow-lg' : ''}`}
                onClick={scrollToCollection}
              >
                EXPLORAR COLEÇÃO
              </Button>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 0L46.7654 33.2346L80 40L46.7654 46.7654L40 80L33.2346 46.7654L0 40L33.2346 33.2346L40 0Z" fill="#FED140"/>
              </svg>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full h-[500px] max-md:h-[400px] max-sm:h-[300px]">
              <div className="absolute w-[280px] h-[400px] bg-blue -rotate-12 top-0 left-[5%] max-md:w-[200px] max-md:h-[300px] shadow-xl">
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={heroPortfolioImage1}
                    alt="Modelo da coleção TEA E A MODA 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute w-[280px] h-[400px] bg-purple rotate-12 top-[50px] right-[5%] max-md:w-[200px] max-md:h-[300px] z-10 shadow-xl">
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={heroPortfolioImage2}
                    alt="Modelo da coleção TEA E A MODA 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Decorative text */}
            <div className="absolute top-[-20px] right-[-20px] z-20">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="58" stroke="#FFEDA7" strokeWidth="4"/>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#FFEDA7" fontFamily="Montserrat" fontWeight="900" fontSize="16">
                  NEW!
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Background decorative elements */}
      <div className="absolute bottom-10 left-10 z-0">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M75 0L95 55H150L105 90L125 145L75 110L25 145L45 90L0 55H55L75 0Z" fill="#FED140" fillOpacity="0.2"/>
        </svg>
      </div>
      <div className="absolute top-[20%] right-[5%] z-0">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="100" fill="#FFEDA7" fillOpacity="0.1"/>
        </svg>
      </div>
    </section>
  );
}; 