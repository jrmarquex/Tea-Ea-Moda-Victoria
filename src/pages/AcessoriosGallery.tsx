
import React, { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GalleryGrid } from '@/components/sections/GalleryGrid';
import { BackToSection } from '@/components/ui/BackToSection';

const acessoriosImages = Array(9).fill(0).map((_, i) => ({
  src: `https://images.unsplash.com/photo-${1611085583191 + i}-a3b181a88401?q=80&w=2574&auto=format&fit=crop`,
  alt: `Acessório ${i + 1}`
}));

const AcessoriosGallery: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main className="min-h-screen">
      <Header />
      <BackToSection sectionId="acessorios" />
      <div className="pt-32">
        <GalleryGrid 
          title="Acessórios da Coleção" 
          description="Todos os acessórios desenvolvidos para a coleção TEA E A MODA." 
          images={acessoriosImages} 
          columns={3}
        />
      </div>
      <Footer />
    </main>
  );
};

export default AcessoriosGallery;
