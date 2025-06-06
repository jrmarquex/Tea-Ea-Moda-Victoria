import React, { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GalleryGrid } from '@/components/sections/GalleryGrid';
import { BackToSection } from '@/components/ui/BackToSection';

const ensaioImages = [
  { src: '/by_vic_falcao-56.webp', alt: 'Ensaio fotográfico 1' },
  { src: '/by_vic_falcao00003_-_ilustrada.webp', alt: 'Ensaio fotográfico 2' },
  { src: '/by_vic_falcao00002_-_ilsutrada.png', alt: 'Ensaio fotográfico 3' },
  { src: '/by_vic_falcao-55.webp', alt: 'Ensaio fotográfico 4' },
  { src: '/by_vic_falcao00004_-_ilustrada.png', alt: 'Ensaio fotográfico 5' },
  { src: '/by_vic_falcão00001_-_ilustrada.png', alt: 'Ensaio fotográfico 6' },
  { src: '/by_vic_falcão00005_-_ilustrada.webp', alt: 'Ensaio fotográfico 7' },
  { src: '/by_vic_falcao00009_-_ilustrada.webp', alt: 'Ensaio fotográfico 8' },
  { src: '/by_vic_falcao00006_-_ilsutrada.webp', alt: 'Ensaio fotográfico 9' },
  { src: '/by_vic_falcao-16.webp', alt: 'Ensaio fotográfico 10' },
  { src: '/by_vic_falcao00008_-_ilustrada.webp', alt: 'Ensaio fotográfico 11' },
  { src: '/By_Vic_Falcão-2.webp', alt: 'Ensaio fotográfico 12' },
  { src: '/IMG_8418_-_ilustrada.webp', alt: 'Ensaio fotográfico 13' },
  { src: '/IMG_8152.webp', alt: 'Ensaio fotográfico 14' },
  { src: '/by_vic_falcao-10.webp', alt: 'Ensaio fotográfico 15' },
  { src: '/by_vic_falcao00007_-_ilustrada.webp', alt: 'Ensaio fotográfico 16' },
  { src: '/by_vic_falcao-35.webp', alt: 'Ensaio fotográfico 17' },
  { src: '/IMG_8490_-_ilustrada.webp', alt: 'Ensaio fotográfico 18' },
  { src: '/by_vic_falcao-15.webp', alt: 'Ensaio fotográfico 19' },
  { src: '/by_vic_falcao-21.webp', alt: 'Ensaio fotográfico 20' },
  { src: '/by_vic_falcao-43.webp', alt: 'Ensaio fotográfico 21' },
  { src: '/by_vic_falcao-42.webp', alt: 'Ensaio fotográfico 22' },
  { src: '/by_vic_falcao-20.webp', alt: 'Ensaio fotográfico 23' },
  { src: '/by_vic_falcao-32.webp', alt: 'Ensaio fotográfico 24' },
];

const EnsaioGallery: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main className="min-h-screen">
      <Header />
      <BackToSection sectionId="ensaio" />
      <div className="pt-32">
        <GalleryGrid 
          title="Editorial Completo" 
          description="Todas as imagens do ensaio da coleção TEA E A MODA." 
          images={ensaioImages} 
        />
      </div>
      <Footer />
    </main>
  );
};

export default EnsaioGallery;
