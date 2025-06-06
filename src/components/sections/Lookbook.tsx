import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ImageCarousel } from '@/components/ui/ImageCarousel';
import { ExpandableImage } from '@/components/ui/ExpandableImage';

const lookbookImages = [
  {
    src: "/IMG_7404.webp",
    alt: "Lookbook model showcase 1"
  },
  {
    src: "/IMG_7405.webp",
    alt: "Lookbook model showcase 2"
  },
  {
    src: "/IMG_7407.webp",
    alt: "Lookbook model showcase 3"
  },
  {
    src: "/IMG_7410.webp",
    alt: "Lookbook model showcase 4"
  },
  {
    src: "/IMG_7412.webp",
    alt: "Lookbook model showcase 5"
  },
  {
    src: "/by_vic_falcao-12.webp",
    alt: "Lookbook model showcase 6"
  },
];

export const Lookbook: React.FC = () => {
  return (
    <section className="py-20 bg-yellow relative overflow-hidden" id="lookbook">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/3">
            <div className="flex items-end gap-4 mb-6">
              <h2 className="text-[52px] font-black uppercase leading-tight max-md:text-4xl">
                LOOK BOOK
              </h2>
              <div>
                <svg width="60" height="30" viewBox="0 0 112 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M95.0114 17.0455C92.8622 14.2236 90.7129 12.1068 88.5636 9.99003C84.9811 5.75649 79.9666 3.63972 74.952 1.52295C69.9375 -0.593826 64.2057 0.111359 59.9072 3.63972C53.4594 7.87326 47.7276 12.812 41.2799 16.3404C31.9668 21.9855 25.519 21.9855 16.9219 15.6352C12.6234 12.1068 8.32489 8.57966 6.89164 2.93453C6.17563 1.52294 5.45839 0.112568 3.30912 0.817757C1.15986 1.52295 0.443848 2.22934 0.443848 4.34611C0.443848 5.7577 1.15986 6.46288 1.8771 7.87447C6.89164 18.4583 15.4887 24.8087 26.9522 26.9254C31.2508 27.6306 35.5493 26.2202 39.1318 24.1035C45.5796 20.5751 52.0274 16.3416 57.7592 12.108C65.6402 5.7577 72.088 7.16928 79.2518 11.4028C80.6851 12.8144 82.1171 13.5196 83.5503 14.9312C85.6996 17.048 87.1329 18.4595 88.5649 21.2815C86.4156 21.2815 84.9823 20.5763 83.5503 20.5763C82.1171 20.5763 80.6851 20.5763 79.9678 21.2815C78.5346 21.9867 77.1025 23.3983 77.8186 24.8099C77.8186 26.2214 79.9678 26.2214 81.4011 26.9266C89.9981 28.3382 96.4459 32.5718 102.894 38.2157C105.759 41.0376 107.192 41.0376 110.058 38.2157C111.491 36.8041 112.207 35.3937 110.774 33.9821C104.326 28.337 103.61 19.8699 102.176 12.1092C102.176 10.6976 102.892 7.87568 100.027 7.87568C97.8779 7.87568 96.4447 9.28726 95.7287 11.404C95.0115 13.5173 95.7275 14.9288 95.0115 17.0455H95.0114Z" fill="#715EB8"/>
                </svg>
              </div>
            </div>
            
            <p className="text-lg mb-8 max-w-xs">
              Designed by Creative Director Vic Falcão, este lookbook apresenta a coleção completa em um ambiente editorial único.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-2 items-center">
                <span className="text-2xl">📍</span>
                <span className="font-medium">Fotografado por Robert Vieira</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-2xl">💄</span>
                <span className="font-medium">Maquiagem por Guetti Reis</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-2xl">🎨</span>
                <span className="font-medium">Design Editorial + Styling por Vic Falcão</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {lookbookImages.map((img, idx) => (
                <div key={idx} className="bg-white/10 p-2 rounded-lg flex flex-col items-center">
                  <div className="w-[220px] h-[280px] flex items-center justify-center">
                    <ExpandableImage
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button className="bg-purple text-white hover:bg-purple/80" to="/lookbook-gallery">
                VER MAIS
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Sideways text */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <div className="text-[180px] font-black text-purple -rotate-90 whitespace-nowrap">
          LOOKBOOK
        </div>
      </div>
    </section>
  );
};
