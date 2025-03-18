
import React from 'react';
import { Home, Wrench, Hammer, Plug, Paintbrush, Ruler, Users, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

const serviceItems = [
  {
    icon: <Home />,
    title: 'Kompleksowa budowa',
    description: 'Od fundamentów po dach - realizujemy kompletne projekty budowlane domów jednorodzinnych i budynków wielorodzinnych.'
  },
  {
    icon: <Wrench />,
    title: 'Wykończenia wnętrz',
    description: 'Pełen zakres prac wykończeniowych: gładzie, malowanie, podłogi, glazura, terakota i inne elementy wykończenia.'
  },
  {
    icon: <Plug />,
    title: 'Instalacje elektryczne',
    description: 'Profesjonalny montaż, wymiana i naprawa instalacji elektrycznych, zgodnie z aktualnymi normami.'
  },
  {
    icon: <Hammer />,
    title: 'Instalacje hydrauliczne',
    description: 'Kompleksowe usługi hydrauliczne: instalacje wodno-kanalizacyjne, centralne ogrzewanie, pompy ciepła.'
  },
  {
    icon: <Paintbrush />,
    title: 'Prace malarskie',
    description: 'Profesjonalne malowanie wnętrz i elewacji, tapetowanie, nakładanie tynków dekoracyjnych.'
  },
  {
    icon: <Ruler />,
    title: 'Prace montażowe',
    description: 'Montaż sufitów podwieszanych, ścianek działowych, zabudów i konstrukcji gipsowo-kartonowych.'
  }
];

const Services = () => {
  return (
    <section id="usługi" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-construction-navy mb-4">Nasze usługi</h2>
          <p className="text-construction-gray text-lg">
            Oferujemy szeroki zakres usług budowlanych i wykończeniowych dostosowanych do indywidualnych potrzeb inwestorów i deweloperów.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-construction-orange/10 flex items-center justify-center mb-4">
                <div className="text-construction-orange">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-construction-navy mb-3">{item.title}</h3>
              <p className="text-construction-gray">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-construction-navy rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Specjalne usługi dla deweloperów
              </h3>
              <p className="text-gray-300 mb-6">
                Oferujemy dedykowane usługi dla firm deweloperskich, zapewniając sprawną realizację projektów mieszkaniowych i komercyjnych.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: <Calendar className="h-5 w-5 text-construction-orange" />,
                    text: 'Rozliczenie etapowe zgodnie z harmonogramem'
                  },
                  {
                    icon: <Users className="h-5 w-5 text-construction-orange" />,
                    text: 'Dedykowany zespół do współpracy długoterminowej'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="mr-3">{item.icon}</div>
                    <p className="text-gray-200">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" 
                alt="Inwestycja deweloperska" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
