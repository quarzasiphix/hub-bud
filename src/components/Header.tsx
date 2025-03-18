
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className={cn(
            "text-2xl font-bold font-heading",
            isScrolled ? "text-construction-navy" : "text-white"
          )}>
            Hub<span className="text-construction-orange">Bud</span>
          </span>
        </a>

        <nav className="hidden md:flex space-x-8">
          {['Strona główna', 'O nas', 'Usługi', 'Projekty', 'Kontakt'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={cn(
                "font-medium hover:text-construction-orange transition-colors",
                isScrolled ? "text-construction-gray" : "text-white"
              )}
            >
              {item}
            </a>
          ))}
        </nav>

        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={isScrolled ? "text-construction-navy" : "text-white"} size={24} />
          ) : (
            <Menu className={isScrolled ? "text-construction-navy" : "text-white"} size={24} />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4">
          <div className="container-custom flex flex-col space-y-4">
            {['Strona główna', 'O nas', 'Usługi', 'Projekty', 'Kontakt'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-construction-gray font-medium hover:text-construction-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
