import React, { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToSection } from '@/components/ui/BackToSection';

const FashionFilmGallery: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main className="min-h-screen">
      <Header />
      <BackToSection sectionId="fashion-film" />
      <div className="pt-32">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-black text-center mb-12">Fashion Film</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-black/10 rounded-lg overflow-hidden">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/BaTKvjTwep4" 
                title="Fashion Film" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
            
            <div className="mt-8 bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Sobre o Fashion Film</h3>
              <p>
                Dirigido por Vic Falcão, o filme apresenta uma narrativa visual que explora a relação entre as peças da coleção 
                e as experiências sensoriais únicas de pessoas com TEA. Filmado em locações que ressaltam texturas, 
                luzes e movimentos que dialogam com a proposta da coleção.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default FashionFilmGallery;
