import React, { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GalleryGrid } from '@/components/sections/GalleryGrid';
import { BackToSection } from '@/components/ui/BackToSection';

const backstageImages = [
  { src: '/backstage_1.webp', alt: 'Bastidores 1' },
  { src: '/backstage_2.webp', alt: 'Bastidores 2' },
  { src: '/backstage_3.webp', alt: 'Bastidores 3' },
  { src: '/backstage_4.webp', alt: 'Bastidores 4' },
  { src: '/backstage_5.webp', alt: 'Bastidores 5' },
  { src: '/backstage_6.webp', alt: 'Bastidores 6' },
  { src: '/backstage_7.webp', alt: 'Bastidores 7' },
  { src: '/backstage_8.webp', alt: 'Bastidores 8' },
  { src: '/backstage_9.webp', alt: 'Bastidores 9' },
  { src: '/backstage_10.webp', alt: 'Bastidores 10' },
  { src: '/backstage_11.webp', alt: 'Bastidores 11' },
  { src: '/backstage_12.webp', alt: 'Bastidores 12' },
  { src: '/backstage_13.webp', alt: 'Bastidores 13' },
  { src: '/backstage_14.webp', alt: 'Bastidores 14' },
  { src: '/backstage_15.webp', alt: 'Bastidores 15' },
  { src: '/backstage_16.webp', alt: 'Bastidores 16' },
  { src: '/backstage_17.webp', alt: 'Bastidores 17' },
  { src: '/backstage_18.webp', alt: 'Bastidores 18' },
  { src: '/backstage_19.webp', alt: 'Bastidores 19' },
  { src: '/backstage_20.webp', alt: 'Bastidores 20' },
  { src: '/backstage_21.webp', alt: 'Bastidores 21' },
  { src: '/backstage_22.webp', alt: 'Bastidores 22' },
  { src: '/backstage_23.webp', alt: 'Bastidores 23' },
  { src: '/backstage_24.webp', alt: 'Bastidores 24' },
  { src: '/backstage_25.webp', alt: 'Bastidores 25' },
];

const BackstageGallery: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main className="min-h-screen">
      <Header />
      <BackToSection sectionId="backstage" />
      <div className="pt-32">
        <GalleryGrid 
          title="Bastidores da Coleção" 
          description="Confira todos os registros dos bastidores da criação da coleção TEA E A MODA." 
          images={backstageImages} 
          columns={3}
        />
      </div>
      <Footer />
    </main>
  );
};

export default BackstageGallery;
