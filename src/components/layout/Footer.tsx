import React from "react";
import { Link } from "react-router-dom";

// Importação da imagem para o rodapé
import byVfImage from '/public/by-vf.webp';

export const Footer = () => (
  <footer className="bg-white text-black py-12 border-t border-purple/10">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-wrap gap-x-8 gap-y-2">
        <Link to="/sobre-mim" className="nav-link text-sm">SOBRE MIM</Link>
        <Link to="/colecao" className="nav-link text-sm">COLEÇÃO</Link>
        <Link to="/estampas" className="nav-link text-sm">ESTAMPAS</Link>
        <Link to="/croquis" className="nav-link text-sm">CROQUIS</Link>
        <Link to="/acessorios" className="nav-link text-sm">ACESSÓRIOS</Link>
        <Link to="/fichas-tecnicas" className="nav-link text-sm">FICHAS TÉCNICAS</Link>
        <Link to="/ensaio" className="nav-link text-sm">EDITORIAL</Link>
        <Link to="/lookbook" className="nav-link text-sm">LOOKBOOK</Link>
        <Link to="/fashion-film" className="nav-link text-sm">FASHION FILM</Link>
        <Link to="/press-kit" className="nav-link text-sm">PRESS KIT</Link>
        <Link to="/marca-social" className="nav-link text-sm">MARCA SOCIAL</Link>
      </div>
      <div>
        <h3 className="text-xl font-bold uppercase mb-4">Contato</h3>
        <p className="mb-2">contato@byvicfalcao.com.br</p>
        <p className="mb-2">@byvicfalcao</p>
        <div className="flex space-x-4 mt-4 items-center">
          <a href="https://instagram.com/byvicfalcao" aria-label="Instagram" className="hover:text-purple" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://youtube.com/@byvicfalcao" aria-label="YouTube" className="hover:text-purple" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.498 6.186a2.994 2.994 0 00-2.107-2.117C19.425 3.5 12 3.5 12 3.5s-7.425 0-9.391.569A2.994 2.994 0 00.502 6.186C0 8.153 0 12 0 12s0 3.847.502 5.814a2.994 2.994 0 002.107 2.117C4.575 20.5 12 20.5 12 20.5s7.425 0 9.391-.569a2.994 2.994 0 002.107-2.117C24 15.847 24 12 24 12s0-3.847-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"/>
            </svg>
          </a>
          <img src={byVfImage} alt="By Vic Falcão" className="w-8 h-8 object-contain" />
        </div>
      </div>
    </div>
    <div className="container mx-auto mt-12 pt-6 border-t border-purple/20 text-center text-sm">
      <p>© {new Date().getFullYear()} Tea e a Moda por Vic Falcão. Todos os direitos reservados.</p>
    </div>
  </footer>
);
