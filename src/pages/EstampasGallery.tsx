import React, { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GalleryGrid } from '@/components/sections/GalleryGrid';
import { BackToSection } from '@/components/ui/BackToSection';

const estampasImages = [
  { src: '/teste estampa 10.webp', alt: 'Estampa 1' },
  { src: '/teste estampa 6.webp', alt: 'Estampa 2' },
  { src: '/teste estampa 02.png', alt: 'Estampa 3' },
  { src: '/teste estampa 08.webp', alt: 'Estampa 4' },
  { src: '/teste estampa 04.png', alt: 'Estampa 5' },
  { src: '/ESTAMPA 11 OK.webp', alt: 'Estampa 6' },
  { src: '/estampa-11-cOopiar-Recuperado.webp', alt: 'Estampa 7' },
  { src: '/teste-estampa-09.webp', alt: 'Estampa 8' },
  { src: '/teste estampa 01.png', alt: 'Estampa 9' },
  { src: '/teste estampa 7.png', alt: 'Estampa 10' },
  { src: '/teste estampa 03.png', alt: 'Estampa 11' },
  { src: '/teste estampa 5.png', alt: 'Estampa 12' },
];

const EstampasGallery: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <BackToSection sectionId="estampas" />
      <div className="pt-32">
        <GalleryGrid 
          title="Estampas da Coleção" 
          description="Conheça todas as estampas exclusivas da coleção TEA E A MODA." 
          images={estampasImages} 
          columns={3}
        />
      </div>
      <Footer />
    </main>
  );
};

export default EstampasGallery;
