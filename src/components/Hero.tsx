
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="strona-główna" className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=2000&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-construction-navy/80 to-black/60"></div>
        </div>
      </div>

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Profesjonalna firma budowlana w Łodzi
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Alpinald - kompleksowe usługi budowlane w Łodzi i województwie łódzkim. Od znalezienia działki, przez budowę, aż po wykończenie. Pełna obsługa dla inwestorów i deweloperów na rynku łódzkim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <a 
              href="#usługi" 
              className="bg-construction-orange hover:bg-construction-orange/90 text-white font-medium px-8 py-3 rounded-md inline-flex items-center justify-center transition-colors"
            >
              Nasze usługi
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a 
              href="#kontakt" 
              className="bg-transparent hover:bg-white/10 text-white border border-white font-medium px-8 py-3 rounded-md inline-flex items-center justify-center transition-colors"
            >
              Skontaktuj się z nami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
