import React, { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GalleryGrid } from '@/components/sections/GalleryGrid';
import { BackToSection } from '@/components/ui/BackToSection';

// Importações das imagens para a galeria de bastidores
import backstageImg1 from '/public/backstage_1.webp';
import backstageImg2 from '/public/backstage_2.webp';
import backstageImg3 from '/public/backstage_3.webp';
import backstageImg4 from '/public/backstage_4.webp';
import backstageImg5 from '/public/backstage_5.webp';
import backstageImg6 from '/public/backstage_6.webp';
import backstageImg7 from '/public/backstage_7.webp';
import backstageImg8 from '/public/backstage_8.webp';
import backstageImg9 from '/public/backstage_9.webp';
import backstageImg10 from '/public/backstage_10.webp';
import backstageImg11 from '/public/backstage_11.webp';
import backstageImg12 from '/public/backstage_12.webp';
import backstageImg13 from '/public/backstage_13.webp';
import backstageImg14 from '/public/backstage_14.webp';
import backstageImg15 from '/public/backstage_15.webp';
import backstageImg16 from '/public/backstage_16.webp';
import backstageImg17 from '/public/backstage_17.webp';
import backstageImg18 from '/public/backstage_18.webp';
import backstageImg19 from '/public/backstage_19.webp';
import backstageImg20 from '/public/backstage_20.webp';
import backstageImg21 from '/public/backstage_21.webp';
import backstageImg22 from '/public/backstage_22.webp';
import backstageImg23 from '/public/backstage_23.webp';
import backstageImg24 from '/public/backstage_24.webp';
import backstageImg25 from '/public/backstage_25.webp';

const backstageImages = [
  { src: backstageImg1, alt: 'Bastidores 1' },
  { src: backstageImg2, alt: 'Bastidores 2' },
  { src: backstageImg3, alt: 'Bastidores 3' },
  { src: backstageImg4, alt: 'Bastidores 4' },
  { src: backstageImg5, alt: 'Bastidores 5' },
  { src: backstageImg6, alt: 'Bastidores 6' },
  { src: backstageImg7, alt: 'Bastidores 7' },
  { src: backstageImg8, alt: 'Bastidores 8' },
  { src: backstageImg9, alt: 'Bastidores 9' },
  { src: backstageImg10, alt: 'Bastidores 10' },
  { src: backstageImg11, alt: 'Bastidores 11' },
  { src: backstageImg12, alt: 'Bastidores 12' },
  { src: backstageImg13, alt: 'Bastidores 13' },
  { src: backstageImg14, alt: 'Bastidores 14' },
  { src: backstageImg15, alt: 'Bastidores 15' },
  { src: backstageImg16, alt: 'Bastidores 16' },
  { src: backstageImg17, alt: 'Bastidores 17' },
  { src: backstageImg18, alt: 'Bastidores 18' },
  { src: backstageImg19, alt: 'Bastidores 19' },
  { src: backstageImg20, alt: 'Bastidores 20' },
  { src: backstageImg21, alt: 'Bastidores 21' },
  { src: backstageImg22, alt: 'Bastidores 22' },
  { src: backstageImg23, alt: 'Bastidores 23' },
  { src: backstageImg24, alt: 'Bastidores 24' },
  { src: backstageImg25, alt: 'Bastidores 25' },
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
