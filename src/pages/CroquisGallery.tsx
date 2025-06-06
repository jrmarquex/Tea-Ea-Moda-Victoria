import React, { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GalleryGrid } from '@/components/sections/GalleryGrid';
import { BackToSection } from '@/components/ui/BackToSection';

const croquisImages = [
  { src: '/IMG_8321.webp', alt: 'Croqui 1' },
  { src: '/IMG_8320.webp', alt: 'Croqui 2' },
  { src: '/IMG_8318.webp', alt: 'Croqui 3' },
  { src: '/IMG_8316.webp', alt: 'Croqui 4' },
  { src: '/IMG_8319.webp', alt: 'Croqui 5' },
  { src: '/IMG_8317.webp', alt: 'Croqui 6' },
  { src: '/IMG_8315.webp', alt: 'Croqui 7' },
  { src: '/IMG_8313.webp', alt: 'Croqui 8' },
  { src: '/IMG_8311.webp', alt: 'Croqui 9' },
  { src: '/IMG_8312.webp', alt: 'Croqui 10' },
  { src: '/IMG_8308.webp', alt: 'Croqui 11' },
  { src: '/IMG_8297.webp', alt: 'Croqui 12' },
  { src: '/IMG_8306.webp', alt: 'Croqui 13' },
  { src: '/IMG_8314.webp', alt: 'Croqui 14' },
  { src: '/IMG_8302.webp', alt: 'Croqui 15' },
  { src: '/IMG_8300.webp', alt: 'Croqui 16' },
  { src: '/IMG_8310.webp', alt: 'Croqui 17' },
  { src: '/IMG_8309.webp', alt: 'Croqui 18' },
  { src: '/IMG_8304.webp', alt: 'Croqui 19' },
  { src: '/IMG_8299.webp', alt: 'Croqui 20' },
  { src: '/IMG_8303.webp', alt: 'Croqui 21' },
  { src: '/IMG_8301.webp', alt: 'Croqui 22' },
  { src: '/IMG_8298.webp', alt: 'Croqui 23' },
  { src: '/IMG_8295.webp', alt: 'Croqui 24' },
];

const CroquisGallery: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <BackToSection sectionId="croquis" />
      <div className="pt-32">
        <GalleryGrid 
          title="Galeria de Croquis" 
          description="Confira todos os croquis da coleção TEA E A MODA." 
          images={croquisImages} 
        />
      </div>
      <Footer />
    </main>
  );
};

export default CroquisGallery;
