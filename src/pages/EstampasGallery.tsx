import React, { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GalleryGrid } from '@/components/sections/GalleryGrid';
import { BackToSection } from '@/components/ui/BackToSection';

// Usando strings para referenciar as imagens diretamente da pasta /public
const estampasImages = [
  { src: '/estampas/teste estampa 3.jpg', alt: 'Estampa 3' },
  { src: '/estampas/teste estampa 5.png', alt: 'Estampa 5' },
  { src: '/estampas/teste estampa 04.png', alt: 'Estampa 04' },
  { src: '/estampas/teste estampa 09.png', alt: 'Estampa 09' },
  { src: '/estampas/teste estampa 6.png', alt: 'Estampa 6' },
  { src: '/estampas/ESTAMPA 11 OK.png', alt: 'Estampa 11 OK' },
  { src: '/estampas/teste estampa 01.png', alt: 'Estampa 01' },
  { src: '/estampas/teste estampa 08.webp', alt: 'Estampa 08' },
  { src: '/estampas/teste estampa 10.webp', alt: 'Estampa 10' },
  { src: '/estampas/teste estampa 02.png', alt: 'Estampa 02' },
  { src: '/estampas/teste estampa 7.png', alt: 'Estampa 7' },
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
