import React, { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GalleryGrid } from '@/components/sections/GalleryGrid';
import { BackToSection } from '@/components/ui/BackToSection';

// Importações das imagens para o ensaio fotográfico
import ensaioImg1 from '/public/by_vic_falcao-56.webp';
import ensaioImg2 from '/public/by_vic_falcao00003_-_ilustrada.webp';
import ensaioImg3 from '/public/by_vic_falcao00002_-_ilsutrada.png';
import ensaioImg4 from '/public/by_vic_falcao-55.webp';
import ensaioImg6 from '/public/by_vic_falcão00001_-_ilustrada.png';
import ensaioImg7 from '/public/by_vic_falcão00005_-_ilustrada.webp';
import ensaioImg8 from '/public/by_vic_falcao00009_-_ilustrada.webp';
import ensaioImg9 from '/public/by_vic_falcao00006_-_ilsutrada.webp';
import ensaioImg10 from '/public/by_vic_falcao-16.webp';
import ensaioImg11 from '/public/by_vic_falcao00008_-_ilustrada.webp';
import ensaioImg12 from '/public/By_Vic_Falcão-2.webp';
import ensaioImg13 from '/public/IMG_8418_-_ilustrada.webp';
import ensaioImg14 from '/public/IMG_8152.webp';
import ensaioImg15 from '/public/by_vic_falcao-10.webp';
import ensaioImg16 from '/public/by_vic_falcao00007_-_ilustrada.webp';
import ensaioImg17 from '/public/by_vic_falcao-35.webp';
import ensaioImg18 from '/public/IMG_8490_-_ilustrada.webp';
import ensaioImg19 from '/public/by_vic_falcao-15.webp';
import ensaioImg20 from '/public/by_vic_falcao-21.webp';
import ensaioImg21 from '/public/by_vic_falcao-43.webp';
import ensaioImg22 from '/public/by_vic_falcao-42.webp';
import ensaioImg23 from '/public/by_vic_falcao-20.webp';

const ensaioImages = [
  { src: ensaioImg1, alt: 'Ensaio fotográfico 1' },
  { src: ensaioImg2, alt: 'Ensaio fotográfico 2' },
  { src: ensaioImg3, alt: 'Ensaio fotográfico 3' },
  { src: ensaioImg4, alt: 'Ensaio fotográfico 4' },
  { src: ensaioImg6, alt: 'Ensaio fotográfico 6' },
  { src: ensaioImg7, alt: 'Ensaio fotográfico 7' },
  { src: ensaioImg8, alt: 'Ensaio fotográfico 8' },
  { src: ensaioImg9, alt: 'Ensaio fotográfico 9' },
  { src: ensaioImg10, alt: 'Ensaio fotográfico 10' },
  { src: ensaioImg11, alt: 'Ensaio fotográfico 11' },
  { src: ensaioImg12, alt: 'Ensaio fotográfico 12' },
  { src: ensaioImg13, alt: 'Ensaio fotográfico 13' },
  { src: ensaioImg14, alt: 'Ensaio fotográfico 14' },
  { src: ensaioImg15, alt: 'Ensaio fotográfico 15' },
  { src: ensaioImg16, alt: 'Ensaio fotográfico 16' },
  { src: ensaioImg17, alt: 'Ensaio fotográfico 17' },
  { src: ensaioImg18, alt: 'Ensaio fotográfico 18' },
  { src: ensaioImg19, alt: 'Ensaio fotográfico 19' },
  { src: ensaioImg20, alt: 'Ensaio fotográfico 20' },
  { src: ensaioImg21, alt: 'Ensaio fotográfico 21' },
  { src: ensaioImg22, alt: 'Ensaio fotográfico 22' },
  { src: ensaioImg23, alt: 'Ensaio fotográfico 23' },
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
          title="Galeria do Ensaio Fotográfico" 
          description="Visualize todas as fotos do ensaio fotográfico da coleção TEA E A MODA." 
          images={ensaioImages} 
        />
      </div>
      <Footer />
    </main>
  );
};

export default EnsaioGallery;
