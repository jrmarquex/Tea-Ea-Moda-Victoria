import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GalleryGrid } from '@/components/sections/GalleryGrid';
import { BackToSection } from '@/components/ui/BackToSection';

const fichasImages = [
  { src: '/apf2y5lbcghtzeks2ljy.webp', alt: 'Ficha Técnica 1' },
  { src: '/cgcwrrfkqiwd73ivjnko.webp', alt: 'Ficha Técnica 2' },
  { src: '/dutxoddjr7j6oxthhuas.webp', alt: 'Ficha Técnica 3' },
  { src: '/j8dwz0fw5kvohfhzuxey.webp', alt: 'Ficha Técnica 4' },
  { src: '/qmldxrj63wbrlyglwojb.webp', alt: 'Ficha Técnica 5' },
  { src: '/t5teukfwsit4elbrqrtp.webp', alt: 'Ficha Técnica 6' },
  { src: '/uhgujufrbufsk6wwrkny.webp', alt: 'Ficha Técnica 7' },
  { src: '/yixsyv5mds0nxv3jamkn.webp', alt: 'Ficha Técnica 8' },
  { src: '/ytxfk8rnyuk1oo1ynryx.webp', alt: 'Ficha Técnica 9' },
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
