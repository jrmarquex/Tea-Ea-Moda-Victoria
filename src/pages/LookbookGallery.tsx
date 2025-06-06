import React, { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GalleryGrid } from '@/components/sections/GalleryGrid';
import { BackToSection } from '@/components/ui/BackToSection';

const lookbookImages = [
  { src: '/IMG_7404.webp', alt: 'Lookbook 1' },
  { src: '/IMG_7405.webp', alt: 'Lookbook 2' },
  { src: '/IMG_7407.webp', alt: 'Lookbook 3' },
  { src: '/IMG_7410.webp', alt: 'Lookbook 4' },
  { src: '/IMG_7412.webp', alt: 'Lookbook 5' },
  { src: '/IMG_7425.webp', alt: 'Lookbook 6' },
  { src: '/IMG_7427.webp', alt: 'Lookbook 7' },
  { src: '/IMG_8133.webp', alt: 'Lookbook 8' },
  { src: '/IMG_8522.webp', alt: 'Lookbook 9' },
  { src: '/IMG_8526.webp', alt: 'Lookbook 10' },
  { src: '/IMG_8532.webp', alt: 'Lookbook 11' },
  { src: '/IMG_8675.webp', alt: 'Lookbook 12' },
  { src: '/by_vic_falcao-12.webp', alt: 'Lookbook 13' },
  { src: '/by_vic_falcao-13.webp', alt: 'Lookbook 14' },
  { src: '/by_vic_falcao-26.png', alt: 'Lookbook 15' },
  { src: '/by_vic_falcao-27.webp', alt: 'Lookbook 16' },
  { src: '/by_vic_falcao-28.webp', alt: 'Lookbook 17' },
  { src: '/by_vic_falcao-33.webp', alt: 'Lookbook 18' },
  { src: '/by_vic_falcao-34.png', alt: 'Lookbook 19' },
  { src: '/by_vic_falcao-50.webp', alt: 'Lookbook 20' },
  { src: '/by_vic_falcao-53.webp', alt: 'Lookbook 21' },
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
