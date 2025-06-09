import React from 'react';

// Importação da imagem para a seção Sobre Mim
import aboutMeImage from '/public/IMG_8378.webp';

export const AboutMe: React.FC = () => {
  return (
    <section id="sobre-mim" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-2/5 relative">
            <div className="w-[280px] h-[400px] bg-purple -rotate-6 relative z-10 mx-auto">
              <img
                src={aboutMeImage}
                alt="Vic Falcão"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-[10%] left-[10%] w-[280px] h-[400px] bg-red/20 rotate-3 z-0"></div>
            <div className="absolute -bottom-4 -right-4 z-20">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L61.7557 38.2443L100 50L61.7557 61.7557L50 100L38.2443 61.7557L0 50L38.2443 38.2443L50 0Z" fill="#FED140" fillOpacity="0.5"/>
              </svg>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <div className="inline-block bg-yellow px-4 py-2 mb-4">
              <h3 className="text-xl font-bold uppercase">Sobre Mim</h3>
            </div>
            <h2 className="text-[42px] font-black uppercase leading-tight mb-8 max-md:text-3xl">
              Vic <span className="text-red">Falcão</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg">
                Sou designer de moda formada pela FAAP, e vejo a moda como muito mais do que estética, ela é linguagem, é ponte, é escuta. Me movo pela vontade de transformar sentimentos em roupas, ideias em estampas, histórias em afeto visual. Meu processo criativo é profundamente sensível e autoral, atravessado por tudo aquilo que pulsa no mundo: arte, infância, comportamento, inclusão, identidade.
              </p>
              <p className="text-lg">
                Tenho experiência em desenvolvimento de coleções, estampas e direção criativa. Acredito que vestir é um ato íntimo, e que cada peça carrega um significado, um gesto, uma intenção.
              </p>
              <p className="text-lg">
                Meu projeto de TCC mergulha no universo de crianças com TEA, onde a moda se constrói a partir da escuta, transformando desenhos, rabiscos e desejos em roupas com alma, modelagens acolhedoras e estampas com verdade.
              </p>
              <p className="text-lg font-medium">
                E foi dessa vontade de vestir afetos e levantar bandeiras que nasceu by Vic Falcão, minha marca autoral. Um espaço onde moda, arte e propósito se encontram para celebrar o que é único, vibrante e humano. Cada criação nasce com um olhar cuidadoso, uma história por trás e um desejo sincero de representar o outro com respeito, beleza e empatia.
              </p>
              <p className="text-lg italic">
                "Moda, pra mim, é o que se sente antes do que se vê. Cada peça é um abraço, uma lembrança, uma mensagem."
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple">4</div>
                <div className="text-sm mt-1">Anos de graduação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red">1</div>
                <div className="text-sm mt-1">Empresa fundada</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue">+10</div>
                <div className="text-sm mt-1">Peças super cool</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow">2</div>
                <div className="text-sm mt-1">Coleções lançadas</div>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href="https://drive.google.com/file/d/1Mm_OwLY7N-LiDxr0p09OmzewYarCAEfN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-purple text-white font-bold rounded-lg shadow hover:bg-purple/80 transition-colors"
              >
                Clique aqui e veja o book da coleção
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40">
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="80" fill="#715EB8" fillOpacity="0.1"/>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-yellow/10 skew-y-3"></div>
    </section>
  );
};
