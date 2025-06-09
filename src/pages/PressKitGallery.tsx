import React, { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GalleryGrid } from '@/components/sections/GalleryGrid';
import { BackToSection } from '@/components/ui/BackToSection';

// Importações das imagens para a galeria do press kit
import pressKitImg1 from '/public/IMG_8281.webp';
import pressKitImg2 from '/public/IMG_8282.webp';
import pressKitImg3 from '/public/IMG_8284.webp';
import pressKitImg4 from '/public/IMG_8286.webp';
import pressKitImg5 from '/public/IMG_8288.webp';
import pressKitImg6 from '/public/IMG_8289.webp';
import pressKitImg7 from '/public/IMG_8290.webp';
import pressKitImg8 from '/public/IMG_8291.webp';
import pressKitImg9 from '/public/IMG_8293.webp';
import pressKitImg10 from '/public/IMG_8294.webp';

const pressKitImages = [
  { src: pressKitImg1, alt: 'Press Kit Image 1' },
  { src: pressKitImg2, alt: 'Press Kit Image 2' },
  { src: pressKitImg3, alt: 'Press Kit Image 3' },
  { src: pressKitImg4, alt: 'Press Kit Image 4' },
  { src: pressKitImg5, alt: 'Press Kit Image 5' },
  { src: pressKitImg6, alt: 'Press Kit Image 6' },
  { src: pressKitImg7, alt: 'Press Kit Image 7' },
  { src: pressKitImg8, alt: 'Press Kit Image 8' },
  { src: pressKitImg9, alt: 'Press Kit Image 9' },
  { src: pressKitImg10, alt: 'Press Kit Image 10' },
];

const PressKitGallery: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <BackToSection sectionId="press-kit" />
      <div className="pt-32">
        <GalleryGrid 
          title="Press Kit Completo" 
          description="Material completo para imprensa da coleção TEA E A MODA." 
          images={pressKitImages} 
          columns={3}
        />
      </div>
      <Footer />
    </main>
  );
};

export default PressKitGallery;
