import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const FashionFilm: React.FC = () => {
  return (
    <section className="py-20 bg-red text-white relative overflow-hidden" id="fashion-film">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[52px] font-black uppercase leading-tight inline-block relative">
            Fashion Film
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow"></div>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg">
            Um mergulho sensível na imaginação infantil, onde a moda vira tela, o corpo vira pincel e os desenhos das crianças ganham vida em forma de afeto, cor e movimento.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-black/20 p-4 rounded-lg">
          <AspectRatio ratio={16 / 9}>
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/BaTKvjTwep4" 
              title="Fashion Film" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </AspectRatio>
        </div>
        
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Sobre o Fashion Film</h3>
            <p>
            Esse fashion film nasce do olhar da criança: espontâneo, sensível e criativo, e mergulha no universo da imaginação, onde a moda deixa de ser só vestimenta para se tornar uma tela viva de expressão. Cada movimento da modelo é como se ela estivesse pintando o próprio mundo, um gesto artístico que conversa com os desenhos das crianças com TEA, que foram a base para o desenvolvimento das estampas e da coleção. As pinceladas simbolizam liberdade, criação e sentimento. Aqui, o corpo vira pincel. A roupa, tela. A moda, uma extensão da alma.
            As ilustrações infantis animadas aparecem não apenas como enfeite, mas como protagonistas dessa história sensorial. São vozes visuais. São as ideias das crianças ganhando movimento e cor, sem filtros, sem regras. Um convite para olharmos o mundo com mais empatia, escuta e poesia.
            Esse filme é, acima de tudo, sobre vestir emoções. Sobre dar espaço à arte de quem m
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-white text-red hover:bg-white/80" to="/fashion-film-gallery">
            VER MAIS
          </Button>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-40 left-20 opacity-5">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="150" fill="white"/>
        </svg>
      </div>
    </section>
  );
};
