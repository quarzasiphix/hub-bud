
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-construction-navy text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Hub<span className="text-construction-orange">Bud</span></h3>
            <p className="text-gray-300 mb-4">
              Kompleksowe usługi budowlane dla inwestorów i deweloperów. Budujemy przyszłość z pasją i profesjonalizmem.
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
            <h4 className="font-bold text-lg mb-4">Usługi</h4>
            <ul className="space-y-2">
              {[
                'Kompleksowa budowa',
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
                'O nas',
                'Nasze projekty',
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
              <p>Łódź</p>
              <p>Tel: +48 123 456 789</p>
              <p>Email: contact@hub-bud.site</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} HubBud. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
