import React, { useState, useEffect } from 'react';
import { Logo } from '@/components/ui/Logo';
import { IconButton } from '@/components/ui/IconButton';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';

const navItems = [
  { label: 'INÍCIO', path: '/', id: 'hero' },
  { label: 'SOBRE', path: '/sobre', id: 'sobre' },
  { label: 'SOBRE MIM', path: '/sobre-mim', id: 'sobre-mim' },
  { label: 'COLEÇÃO', path: '/colecao', id: 'colecao' },
  { label: 'ESTAMPAS', path: '/estampas', id: 'estampas' },
  { label: 'CROQUIS', path: '/croquis', id: 'croquis' },
  { label: 'ACESSÓRIOS', path: '/acessorios', id: 'acessorios' },
  { label: 'FICHAS TÉCNICAS', path: '/fichas-tecnicas', id: 'fichas-tecnicas' },
  { label: 'EDITORIAL', path: '/ensaio', id: 'ensaio' },
  { label: 'LOOKBOOK', path: '/lookbook', id: 'lookbook' },
  { label: 'FASHION FILM', path: '/fashion-film', id: 'fashion-film' },
  { label: 'PRESS KIT', path: '/press-kit', id: 'press-kit' },
  { label: 'BACKSTAGE', path: '/backstage', id: 'backstage' },
  { label: 'MARCA SOCIAL', path: '/marca-social', id: 'marca-social' },
];

export const Header: React.FC = () => {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Array<{id: string, text: string}>>([]);
  const location = useLocation();
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (searchOpen) {
      setSearchQuery('');
      setSearchResults([]);
    }
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) return;
    
    // Simple content search through all sections
    const results: Array<{id: string, text: string}> = [];
    
    document.querySelectorAll('section').forEach(section => {
      const sectionId = section.id;
      const sectionText = section.textContent || '';
      
      if (sectionText.toLowerCase().includes(searchQuery.toLowerCase())) {
        results.push({
          id: sectionId,
          text: sectionText
        });
      }
    });
    
    setSearchResults(results);
    
    // If we have results, scroll to the first one
    if (results.length > 0 && results[0].id) {
      scrollToSection(results[0].id);
      
      // Highlight the search term in that section
      highlightSearchTerms(results[0].id, searchQuery);
    }
  };
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      // Adiciona uma transição mais lenta
      const duration = 700; // 0.7 segundos
      const start = window.pageYOffset;
      const change = offsetPosition - start;
      let startTime: number | null = null;

      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Função de easing para uma transição mais suave
        const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        
        window.scrollTo(0, start + change * easeInOutCubic(progress));
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };
  
  
  const highlightSearchTerms = (sectionId: string, term: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    // Create a temporary container for the section's HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = section.innerHTML;
    
    // Find text nodes that contain the search term
    const walker = document.createTreeWalker(
      tempDiv, 
      NodeFilter.SHOW_TEXT, 
      null
    );
    
    const nodesToReplace: Array<{node: Node, text: string}> = [];
    
    // Collect all text nodes that contain the search term
    while(walker.nextNode()) {
      const node = walker.currentNode;
      if (node.textContent && node.textContent.toLowerCase().includes(term.toLowerCase())) {
        nodesToReplace.push({
          node,
          text: node.textContent
        });
      }
    }
    
    // Replace the text in those nodes with highlighted version
    nodesToReplace.forEach(item => {
      const regex = new RegExp(`(${term})`, 'gi');
      const highlightedText = item.text.replace(regex, '<span class="bg-yellow text-black px-1 highlight-search">$1</span>');
      
      const wrapper = document.createElement('span');
      wrapper.innerHTML = highlightedText;
      
      if (item.node.parentNode) {
        item.node.parentNode.replaceChild(wrapper, item.node);
      }
    });
    
    // Update the section with highlighted content
    section.innerHTML = tempDiv.innerHTML;
    
    // Remove highlights after 3 seconds
    setTimeout(() => {
      document.querySelectorAll('.highlight-search').forEach(el => {
        const parent = el.parentNode;
        if (parent) {
          const text = document.createTextNode(el.textContent || '');
          parent.replaceChild(text, el);
        }
      });
    }, 3000);
  };

  const handleNavigation = (item: typeof navItems[0]) => {
    if (location.pathname === '/') {
      scrollToSection(item.id);
    } else {
      navigate('/', { state: { scrollTo: item.id } });
    }
    setMobileMenuOpen(false);
  };

  // Adiciona transição suave ao scroll
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      html {
        scroll-behavior: smooth;
      }
      html, body {
        scroll-behavior: smooth;
        transition: all 0.7s ease-in-out;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (style.parentNode) {
        document.head.removeChild(style);
      }
    };
  }, []);

  // Handle scroll after navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    }
  }, [location]);

  // For handling section links and gallery links
  useEffect(() => {
    // For section links from other pages
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }

    // Add click handlers to section links
    const handleSectionLinkClick = (e: Event) => {
      const link = e.currentTarget as HTMLAnchorElement;
      const sectionId = link.getAttribute('data-section');
      
      if (sectionId && location.pathname === '/') {
        e.preventDefault();
        scrollToSection(sectionId);
      }
    };
    
    document.querySelectorAll('.section-link').forEach(link => {
      link.addEventListener('click', handleSectionLinkClick);
    });
    
    return () => {
      document.querySelectorAll('.section-link').forEach(link => {
        link.removeEventListener('click', handleSectionLinkClick);
      });
    };
  }, [location]);

  

  return (
    <header className="fixed w-full z-50 bg-background">
      <div className="container mx-auto flex items-center justify-between py-4">
        <IconButton
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3 6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H20C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6C21 6.26522 20.8946 6.51957 20.7071 6.70711C20.5196 6.89464 20.2652 7 20 7H4C3.73478 7 3.48043 6.89464 3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6ZM3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929C3.48043 11.1054 3.73478 11 4 11H20C20.2652 11 20.5196 11.1054 20.7071 11.2929C20.8946 11.4804 21 11.7348 21 12C21 12.2652 20.8946 12.5196 20.7071 12.7071C20.5196 12.8946 20.2652 13 20 13H4C3.73478 13 3.48043 12.8946 3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12ZM3 18C3 17.7348 3.10536 17.4804 3.29289 17.2929C3.48043 17.1054 3.73478 17 4 17H20C20.2652 17 20.5196 17.1054 20.7071 17.2929C20.8946 17.4804 21 17.7348 21 18C21 18.2652 20.8946 18.5196 20.7071 18.7071C20.5196 18.8946 20.2652 19 20 19H4C3.73478 19 3.48043 18.8946 3.29289 18.7071C3.10536 18.5196 3 18.2652 3 18Z" fill="currentColor"/>
            </svg>
          }
          onClick={toggleMenu}
          label="Menu"
          className="lg:hidden"
        />
        
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:mx-auto">
          <nav className="flex items-center space-x-6">
            {navItems.slice(0, 7).map((item) => (
              <button 
                key={item.path} 
                onClick={() => handleNavigation(item)}
                className="nav-link text-sm transition-all duration-700 hover:text-purple"
              >
                {item.label}
              </button>
            ))}
            <Logo className="mx-4" />
            {navItems.slice(7).map((item) => (
              <button 
                key={item.path} 
                onClick={() => handleNavigation(item)}
                className="nav-link text-sm transition-all duration-700 hover:text-purple"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="lg:hidden">
          <Logo />
        </div>

        <div className="flex items-center space-x-4">
          <IconButton
            icon={<Search size={24} />}
            onClick={toggleSearch}
            label="Search"
          />
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-background pt-20 z-40 lg:hidden overflow-y-auto">
          <div className="absolute top-4 right-4">
            <IconButton
              icon={<X size={24} />}
              onClick={() => setMobileMenuOpen(false)}
              label="Close"
              className="text-foreground hover:text-secondary"
            />
          </div>
          
          <nav className="flex flex-col items-center space-y-6 py-10 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <button 
                key={item.path} 
                onClick={() => handleNavigation(item)}
                className="nav-link text-xl transition-all duration-700 hover:text-purple"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
      
      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-background/95 z-50 p-4 flex flex-col items-center justify-start pt-20">
          <div className="absolute top-4 right-4">
            <IconButton
              icon={<X size={24} />}
              onClick={toggleSearch}
              label="Close"
              className="text-foreground hover:text-secondary"
            />
          </div>
          
          <div className="container max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="w-full">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Buscar no site..."
                  className="w-full px-4 py-2 text-xl border-b-2 border-purple bg-transparent focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button
                  type="submit"
                  className="p-2 bg-purple text-white rounded-md"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>
            
            {searchResults.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4">Resultados:</h3>
                <ul className="space-y-4">
                  {searchResults.map((result, index) => (
                    <li key={index}>
                      <button 
                        className="text-left hover:text-purple"
                        onClick={() => scrollToSection(result.id)}
                      >
                        {navItems.find(item => item.id === result.id)?.label || result.id}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {searchQuery && searchResults.length === 0 && (
              <div className="mt-8 text-center">
                <p>Nenhum resultado encontrado para "{searchQuery}".</p>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
