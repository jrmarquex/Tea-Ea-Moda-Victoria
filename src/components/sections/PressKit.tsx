import React from 'react';
import { ExpandableImage } from '@/components/ui/ExpandableImage';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const PressKit: React.FC = () => {
  return (
    <section className="py-20 bg-[#F4F4F4] relative overflow-hidden" id="press-kit">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[52px] font-black uppercase leading-tight inline-block relative text-purple">
            Press Kit
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-red"></div>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg">
            Um press kit feito de afeto e verdade, onde cada elemento dá forma aos desenhos das crianças, transformando traços espontâneos em memória, presença e poesia palpável.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 w-[740px] mx-auto">
            <div className="aspect-square w-full h-full bg-white flex items-stretch justify-stretch">
              <ExpandableImage 
                src="/IMG_8281.webp" 
                alt="Imagem Press Kit 1" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square w-full h-full bg-white flex items-stretch justify-stretch">
              <ExpandableImage 
                src="/IMG_8282.webp" 
                alt="Imagem Press Kit 2" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square w-full h-full bg-white flex items-stretch justify-stretch">
              <ExpandableImage 
                src="/IMG_8284.webp" 
                alt="Imagem Press Kit 3" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square w-full h-full bg-white flex items-stretch justify-stretch">
              <ExpandableImage 
                src="/IMG_8286.webp" 
                alt="Imagem Press Kit 4" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Press Release</h3>
            
            <h4 className="text-xl font-bold mb-4">TEA E A MODA: Uma coleção que celebra a neurodiversidade</h4>
            
            <p className="mb-4">
              Esse press kit nasceu do afeto. E da vontade de eternizar, em forma de memória palpável, a beleza dos traços infantis e das histórias por trás deles. A caixa que você recebe nas mãos não é só uma embalagem, ela é uma cápsula sensível de tudo que esse projeto representa.<br /><br />
              Por fora, a estampa que envolve a caixa foi criada a partir dos desenhos feitos pelas próprias crianças. Cada rabisco, cada cor, cada manchinha carrega um pedaço do mundo delas, com toda a autenticidade que só a infância tem. Ao abrir, você encontra um sketchbook com outra estampa da coleção, uma espécie de convite pra que você também desenhe o seu mundo, do seu jeito, sem medo de errar o traço.<br /><br />
              Tem um amigurumi que fecha esse livro, ele veio direto de um dos desenhos das crianças, como se tivesse pulado do papel pra ganhar forma e virar companhia. Um segundo amigurumi, em forma de chaveiro, também surgiu de um desenho feito por uma das crianças, e carrega com ele uma energia de cuidado, proteção e presença.<br /><br />
              Outros dois chaveiros foram feitos exatamente iguais aos desenhos originais. A ideia não era "reinterpretar" ou "embelezar" os traços, mas respeitá-los, do jeitinho que vieram. Porque aqui, a beleza está justamente na verdade. No espontâneo.<br /><br />
              Por fim, uma caixinha em formato de peixe, pintada à mão com todo o carinho pra se parecer com um desenho muito especial. Porque criança vê magia onde a gente vê simples papel. E esse projeto inteiro é sobre isso: olhar com outros olhos. Sentir com outras cores. Vestir com mais alma.<br /><br />
              Esse press kit é um pedaço desse universo que construímos a muitas mãos. Um lembrete de que a moda também pode (e deve) ser ponte, afeto e representação.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-purple text-white hover:bg-purple/80">
            <Link to="/press-kit-gallery">
              VER MAIS
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
