import React from 'react';

export const MarcaSocial: React.FC = () => {
  return (
    <section id="marca-social" className="py-20 bg-purple text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[52px] font-black uppercase leading-tight inline-block relative">
            Marca Social
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow"></div>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="mb-6 text-lg">
            A marca nasce do desejo de vestir com propósito.
Cada detalhe da coleção foi pensado com base na escuta ativa de crianças com TEA, transformando suas expressões em moda afetiva, sensorial e acessível. Acreditamos que a moda pode (e deve) ser um instrumento de inclusão — e por isso, unimos design, empatia e arte para criar uma experiência de vestir que acolhe, respeita e representa.

Nosso compromisso é coletivo: criar uma marca que abra espaço para o outro, que valorize as diferenças e que contribua para uma moda mais humana e consciente.            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 p-8 rounded-lg">
              <div className="w-16 h-16 bg-yellow mb-4 rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16C13.1046 16 14 15.1046 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14C10 15.1046 10.8954 16 12 16Z" fill="black"/>
                  <path d="M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6Z" fill="black"/>
                  <path d="M12 26C13.1046 26 14 25.1046 14 24C14 22.8954 13.1046 22 12 22C10.8954 22 10 22.8954 10 24C10 25.1046 10.8954 26 12 26Z" fill="black"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">ACESSÓRIOS</h4>
              <p>Mais do que acessórios, são extensões da proposta da coleção: vestir com empatia, abraçar com design.</p>
            </div>
            
            <div className="bg-white/10 p-8 rounded-lg">
              <div className="w-16 h-16 bg-yellow mb-4 rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Inclusão</h4>
              <p>Nossas peças são projetadas para serem acessíveis a diferentes necessidades sensoriais</p>
            </div>
            
            <div className="bg-white/10 p-8 rounded-lg">
              <div className="w-16 h-16 bg-yellow mb-4 rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9H9.01" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 9H15.01" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Representatividade</h4>
              <p>Trabalhamos com modelos neurodiversos e buscamos representar a diversidade em nossas campanhas</p>
            </div>
            
            <div className="bg-white/10 p-8 rounded-lg">
              <div className="w-16 h-16 bg-yellow mb-4 rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 8V14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 11H17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Autenticidade</h4>
              <p>Valorizamos a expressão individual e promovemos uma comunidade acolhedora, onde experiências com moda inclusiva se transformam em conexões reais, trocas genuínas e apoio mútuo.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 opacity-5">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M365.912 196.011C365.912 296.576 284.042 378.446 183.477 378.446C82.9119 378.446 1.04163 296.576 1.04163 196.011C1.04163 95.445 82.9119 13.5748 183.477 13.5748C284.042 13.5748 365.912 95.445 365.912 196.011Z" stroke="white" strokeWidth="2"/>
          <path d="M399.747 196.011C399.747 315.417 303.136 412.029 183.729 412.029C64.3223 412.029 -32.2891 315.417 -32.2891 196.011C-32.2891 76.6042 64.3223 -20.0073 183.729 -20.0073C303.136 -20.0073 399.747 76.6042 399.747 196.011Z" stroke="white" strokeWidth="2"/>
        </svg>
      </div>
    </section>
  );
};
