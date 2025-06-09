import React, { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GalleryGrid } from '@/components/sections/GalleryGrid';
import { BackToSection } from '@/components/ui/BackToSection';

// Importações das imagens para a galeria de croquis
import croquisGalleryImg1 from '/public/IMG_8321.webp';
import croquisGalleryImg2 from '/public/IMG_8320.webp';
import croquisGalleryImg3 from '/public/IMG_8318.webp';
import croquisGalleryImg4 from '/public/IMG_8316.webp';
import croquisGalleryImg5 from '/public/IMG_8319.webp';
import croquisGalleryImg6 from '/public/IMG_8317.webp';
import croquisGalleryImg7 from '/public/IMG_8315.webp';
import croquisGalleryImg8 from '/public/IMG_8313.webp';
import croquisGalleryImg9 from '/public/IMG_8311.webp';
import croquisGalleryImg10 from '/public/IMG_8312.webp';
import croquisGalleryImg11 from '/public/IMG_8308.webp';
import croquisGalleryImg12 from '/public/IMG_8297.webp';
import croquisGalleryImg13 from '/public/IMG_8306.webp';
import croquisGalleryImg14 from '/public/IMG_8314.webp';
import croquisGalleryImg15 from '/public/IMG_8302.webp';
import croquisGalleryImg16 from '/public/IMG_8300.webp';
import croquisGalleryImg17 from '/public/IMG_8310.webp';
import croquisGalleryImg18 from '/public/IMG_8309.webp';
import croquisGalleryImg19 from '/public/IMG_8304.webp';
import croquisGalleryImg20 from '/public/IMG_8299.webp';
import croquisGalleryImg21 from '/public/IMG_8303.webp';
import croquisGalleryImg22 from '/public/IMG_8301.webp';
import croquisGalleryImg23 from '/public/IMG_8298.webp';
import croquisGalleryImg24 from '/public/IMG_8295.webp';

const croquisImages = [
  { src: croquisGalleryImg1, alt: 'Croqui 1' },
  { src: croquisGalleryImg2, alt: 'Croqui 2' },
  { src: croquisGalleryImg3, alt: 'Croqui 3' },
  { src: croquisGalleryImg4, alt: 'Croqui 4' },
  { src: croquisGalleryImg5, alt: 'Croqui 5' },
  { src: croquisGalleryImg6, alt: 'Croqui 6' },
  { src: croquisGalleryImg7, alt: 'Croqui 7' },
  { src: croquisGalleryImg8, alt: 'Croqui 8' },
  { src: croquisGalleryImg9, alt: 'Croqui 9' },
  { src: croquisGalleryImg10, alt: 'Croqui 10' },
  { src: croquisGalleryImg11, alt: 'Croqui 11' },
  { src: croquisGalleryImg12, alt: 'Croqui 12' },
  { src: croquisGalleryImg13, alt: 'Croqui 13' },
  { src: croquisGalleryImg14, alt: 'Croqui 14' },
  { src: croquisGalleryImg15, alt: 'Croqui 15' },
  { src: croquisGalleryImg16, alt: 'Croqui 16' },
  { src: croquisGalleryImg17, alt: 'Croqui 17' },
  { src: croquisGalleryImg18, alt: 'Croqui 18' },
  { src: croquisGalleryImg19, alt: 'Croqui 19' },
  { src: croquisGalleryImg20, alt: 'Croqui 20' },
  { src: croquisGalleryImg21, alt: 'Croqui 21' },
  { src: croquisGalleryImg22, alt: 'Croqui 22' },
  { src: croquisGalleryImg23, alt: 'Croqui 23' },
  { src: croquisGalleryImg24, alt: 'Croqui 24' },
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
