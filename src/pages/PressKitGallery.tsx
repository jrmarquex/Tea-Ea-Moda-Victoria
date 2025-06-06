import React, { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GalleryGrid } from '@/components/sections/GalleryGrid';
import { BackToSection } from '@/components/ui/BackToSection';

const pressKitImages = [
  { src: '/IMG_8281.webp', alt: 'Press Kit Image 1' },
  { src: '/IMG_8282.webp', alt: 'Press Kit Image 2' },
  { src: '/IMG_8284.webp', alt: 'Press Kit Image 3' },
  { src: '/IMG_8286.webp', alt: 'Press Kit Image 4' },
  { src: '/IMG_8288.webp', alt: 'Press Kit Image 5' },
  { src: '/IMG_8289.webp', alt: 'Press Kit Image 6' },
  { src: '/IMG_8290.webp', alt: 'Press Kit Image 7' },
  { src: '/IMG_8291.webp', alt: 'Press Kit Image 8' },
  { src: '/IMG_8293.webp', alt: 'Press Kit Image 9' },
  { src: '/IMG_8294.webp', alt: 'Press Kit Image 10' },
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
