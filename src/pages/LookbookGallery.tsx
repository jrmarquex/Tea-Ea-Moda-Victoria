import React, { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GalleryGrid } from '@/components/sections/GalleryGrid';
import { BackToSection } from '@/components/ui/BackToSection';

// Importações das imagens para o lookbook
import lookbookImg1 from '/public/IMG_7404.webp';
import lookbookImg2 from '/public/IMG_7405.webp';
import lookbookImg3 from '/public/IMG_7407.webp';
import lookbookImg4 from '/public/IMG_7410.webp';
import lookbookImg5 from '/public/IMG_7412.webp';
import lookbookImg6 from '/public/IMG_7425.webp';
import lookbookImg7 from '/public/IMG_7427.webp';
import lookbookImg8 from '/public/IMG_8133.webp';
import lookbookImg9 from '/public/IMG_8522.webp';
import lookbookImg10 from '/public/IMG_8526.webp';
import lookbookImg11 from '/public/IMG_8532.webp';
import lookbookImg12 from '/public/IMG_8675.webp';
import lookbookImg13 from '/public/by_vic_falcao-12.webp';
import lookbookImg14 from '/public/by_vic_falcao-13.webp';
import lookbookImg15 from '/public/by_vic_falcao-26.png';
import lookbookImg16 from '/public/by_vic_falcao-27.webp';
import lookbookImg17 from '/public/by_vic_falcao-28.webp';
import lookbookImg18 from '/public/by_vic_falcao-33.webp';
import lookbookImg19 from '/public/by_vic_falcao-34.png';
import lookbookImg20 from '/public/by_vic_falcao-50.webp';
import lookbookImg21 from '/public/by_vic_falcao-53.webp';

const lookbookImages = [
  { src: lookbookImg1, alt: 'Lookbook 1' },
  { src: lookbookImg2, alt: 'Lookbook 2' },
  { src: lookbookImg3, alt: 'Lookbook 3' },
  { src: lookbookImg4, alt: 'Lookbook 4' },
  { src: lookbookImg5, alt: 'Lookbook 5' },
  { src: lookbookImg6, alt: 'Lookbook 6' },
  { src: lookbookImg7, alt: 'Lookbook 7' },
  { src: lookbookImg8, alt: 'Lookbook 8' },
  { src: lookbookImg9, alt: 'Lookbook 9' },
  { src: lookbookImg10, alt: 'Lookbook 10' },
  { src: lookbookImg11, alt: 'Lookbook 11' },
  { src: lookbookImg12, alt: 'Lookbook 12' },
  { src: lookbookImg13, alt: 'Lookbook 13' },
  { src: lookbookImg14, alt: 'Lookbook 14' },
  { src: lookbookImg15, alt: 'Lookbook 15' },
  { src: lookbookImg16, alt: 'Lookbook 16' },
  { src: lookbookImg17, alt: 'Lookbook 17' },
  { src: lookbookImg18, alt: 'Lookbook 18' },
  { src: lookbookImg19, alt: 'Lookbook 19' },
  { src: lookbookImg20, alt: 'Lookbook 20' },
  { src: lookbookImg21, alt: 'Lookbook 21' },
];

const LookbookGallery: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main className="min-h-screen">
      <Header />
      <BackToSection sectionId="lookbook" />
      <div className="pt-32">
        <GalleryGrid 
          title="Galeria do Lookbook" 
          description="Visualize todos os looks da coleção TEA E A MODA." 
          images={lookbookImages} 
        />
      </div>
      <Footer />
    </main>
  );
};

export default LookbookGallery;
