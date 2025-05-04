
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-construction-navy text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Alpine<span className="text-construction-orange">ald</span></h3>
            <p className="text-gray-300 mb-4">
              Profesjonalna firma budowlana w Łodzi. Kompleksowe usługi budowlane dla inwestorów i deweloperów na rynku łódzkim. Budujemy przyszłość Łodzi z pasją i profesjonalizmem.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-construction-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-orange transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-orange transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Usługi w Łodzi</h4>
            <ul className="space-y-2">
              {[
                'Kompleksowa budowa w Łodzi',
                'Wykończenia wnętrz',
                'Instalacje elektryczne',
                'Instalacje hydrauliczne',
                'Prace malarskie',
                'Prace montażowe'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-construction-orange transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Informacje</h4>
            <ul className="space-y-2">
              {[
                'O firmie w Łodzi',
                'Nasze projekty w Łodzi',
                'Dla deweloperów',
                'Kariera',
                'Blog',
                'FAQ'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-construction-orange transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Kontakt</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Hubert Baleja</p>
              <p>Łódź 91-045</p>
              <p>Tel: +48 664 946 333</p>
              <p>Email: contact@alpinald.site</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Alpinald - Firma budowlana w Łodzi. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
