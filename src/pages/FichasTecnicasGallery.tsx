import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GalleryGrid } from '@/components/sections/GalleryGrid';
import { BackToSection } from '@/components/ui/BackToSection';

// Importações das imagens para a galeria de fichas técnicas
import fichasImg1 from '/public/apf2y5lbcghtzeks2ljy.webp';
import fichasImg2 from '/public/cgcwrrfkqiwd73ivjnko.webp';
import fichasImg3 from '/public/dutxoddjr7j6oxthhuas.webp';
import fichasImg4 from '/public/j8dwz0fw5kvohfhzuxey.webp';
import fichasImg5 from '/public/qmldxrj63wbrlyglwojb.webp';
import fichasImg6 from '/public/t5teukfwsit4elbrqrtp.webp';
import fichasImg7 from '/public/uhgujufrbufsk6wwrkny.webp';
import fichasImg8 from '/public/yixsyv5mds0nxv3jamkn.webp';
import fichasImg9 from '/public/ytxfk8rnyuk1oo1ynryx.webp';

const fichasImages = [
  { src: fichasImg1, alt: 'Ficha Técnica 1' },
  { src: fichasImg2, alt: 'Ficha Técnica 2' },
  { src: fichasImg3, alt: 'Ficha Técnica 3' },
  { src: fichasImg4, alt: 'Ficha Técnica 4' },
  { src: fichasImg5, alt: 'Ficha Técnica 5' },
  { src: fichasImg6, alt: 'Ficha Técnica 6' },
  { src: fichasImg7, alt: 'Ficha Técnica 7' },
  { src: fichasImg8, alt: 'Ficha Técnica 8' },
  { src: fichasImg9, alt: 'Ficha Técnica 9' },
];

const FichasTecnicasGallery: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <BackToSection sectionId="fichas-tecnicas" />
      <div className="pt-32">
        <GalleryGrid 
          title="Fichas Técnicas Completas" 
          description="Detalhamento técnico de todas as peças da coleção." 
          images={fichasImages} 
          columns={2}
          largeImages={true}
        />
      </div>
      <Footer />
    </main>
  );
};

export default FichasTecnicasGallery;
