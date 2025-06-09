import React from 'react';

// Importação da imagem para a seção Sobre
import aboutImage from '/public/by_vic_falcao-56.png';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-yellow relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[52px] font-black uppercase leading-tight max-md:text-4xl">
              SOBRE O<br /><span className="text-red">PROJETO</span>
            </h2>
            
            <div className="mt-8 space-y-6">
              <p className="text-lg">
                ‪Um verdadeiro mergulho por dentro desse universo tão rico, cheio de singularidades, significações e muito amor das crianças com TEA e suas inúmeras maneiras de expressões e fala, sendo ela por desenhos, riscos ou rabiscos. É por meio desses traçados que nossa coleção irá caminhar e se desenvolver, aflorando em nós o nosso lado mais do que humano. Sem dúvidas é mais que uma coleção de moda; é uma celebração da singularidade. Inspirada pelas inúmeras maneiras pelas quais crianças com TEA se comunicam e interagem com o mundo, visamos destacar e valorizar suas vozes únicas e muitas vezes não ouvidas.‬
              </p>
              <p className="text-lg">
                Cada peça da coleção foi cuidadosamente desenhada para refletir as expressões autênticas dessas crianças, seja através de desenhos, rabiscos ou a escolha ousada de cores. Com um foco em conforto e sensibilidade sensorial, todos os tecidos foram selecionados para assegurar suavidade ao toque. Pensando nesse aspecto, elas se tornaram escuta ativa e participativa em nossa pesquisa  e desenvolvimento das peças, das estampas, onde cada desenho carrega consigo um significado, além da participação nas escolhas dos tecidos, assim como as modelagem, que foram extraídas dos desenhos e dos seus desejos e gostos pelas roupas perfeitas, larguinhas e que não agarrassem. Com isso, temos uma coleção que além de contemplar, ela traz também a visibilidade e representatividade para a causa, de uma forma leve, colorida, pensada e cheia de desenhos lotados de seus significados.
              </p>
              <p className="text-lg">
                A coleção também é um tributo à empatia e ao entendimento. As estampas vibrantes e os cortes inclusivos falam não só de moda, mas de uma missão maior para aumentar a visibilidade e a inclusão de indivíduos com TEA na sociedade.
              </p>
              <p className="text-lg">
                Com uma paleta de cores vibrante, inspirada diretamente pelos trabalhos artísticos das próprias crianças, esta coleção não apenas veste, ela fala. Fala de esperança, de diversidade e de reconhecimento. Mergulhe junte as nossas crianças para celebrar cada cor, cada linha e cada forma que torna cada um de nós únicos, através de uma coleção que não apenas veste o corpo, mas também abraça a alma, abraça a causa.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-[420px] h-[520px] bg-white shadow-xl rotate-3 relative z-10 mx-auto">
              <img
                src={aboutImage}
                alt="Sobre o Projeto - By Vic Falcão"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 z-20">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.7655 13.397C22.9979 23.6979 28.8008 28.7612 36.7655 27.3941C44.7301 26.0271 49.9979 20.5979 48.7655 9.39699C47.5331 -1.80401 35.7655 1.39699 26.7655 13.397Z" fill="#715EB8"/>
                <path d="M73.2345 86.603C77.0021 76.3021 71.1992 71.2388 63.2345 72.6059C55.2699 73.9729 50.0021 79.4021 51.2345 90.603C52.4669 101.804 64.2345 98.603 73.2345 86.603Z" fill="#715EB8"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Key features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-red rounded-full flex items-center justify-center mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.71 5.63C21.1 6.02 21.1 6.65 20.71 7.04L18.88 8.87L15.13 5.12L16.96 3.29C17.35 2.9 17.98 2.9 18.37 3.29L20.71 5.63ZM3 21V17.25L14.06 6.19L17.81 9.94L6.75 21H3Z" fill="white"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold uppercase mb-4">Design Original</h3>
            <p>
              Peças que traduzem sentimentos em forma de roupa, com modelagens inspiradas nos desenhos e desejos das próprias crianças com TEA, respeitando seus gostos, suas necessidades sensoriais e a liberdade dos seus traços.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-purple rounded-full flex items-center justify-center mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="white"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold uppercase mb-4">Estudo de Moda</h3>
            <p>
              Pesquisa afetiva e estética baseada no universo visual e comportamental de crianças com TEA, envolvendo visitas à escola e à clínica, escuta ativa de pais, professores e terapeutas, e uma curadoria cuidadosa de tecidos, formas e caimentos que acolhem o corpo e a alma.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z" fill="white"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold uppercase mb-4">Código Visual</h3>
            <p>
              Uma linguagem visual construída a partir dos próprios desenhos infantis, com uma paleta vibrante, manchas de tinta, traços espontâneos e elementos gráficos lúdicos que expressam, com autenticidade, a beleza da diferença.
            </p>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-red/10 -skew-y-3"></div>
    </section>
  );
};
