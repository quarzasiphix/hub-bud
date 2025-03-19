
import React from 'react';
import { 
  Home, 
  Wrench, 
  Hammer, 
  Plug, 
  Paintbrush, 
  Ruler, 
  Users, 
  Calendar, 
  Droplet, 
  Grid, 
  Thermometer, 
  ShowerHead 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const serviceItems = [
  {
    icon: <Home />,
    title: 'Kompleksowa budowa',
    description: 'Od fundamentów po dach - realizujemy kompletne projekty budowlane domów jednorodzinnych i budynków wielorodzinnych.'
  },
  {
    icon: <Wrench />,
    title: 'Kompleksowe wykończenia wnętrz',
    description: 'Pełen zakres prac wykończeniowych: gładzie, malowanie, podłogi, glazura, terakota, sufity podwieszane i inne elementy wykończenia.'
  },
  {
    icon: <Plug />,
    title: 'Instalacje elektryczne',
    description: 'Profesjonalny montaż, wymiana i naprawa instalacji elektrycznych, oświetlenia, gniazd, rozdzielnic, zgodnie z aktualnymi normami.'
  },
  {
    icon: <ShowerHead />,
    title: 'Instalacje hydrauliczne',
    description: 'Kompleksowe usługi hydrauliczne: instalacje wodno-kanalizacyjne, centralne ogrzewanie, podłogówka, pompy ciepła, wymiana pionów.'
  },
  {
    icon: <Paintbrush />,
    title: 'Prace malarskie i gipsowe',
    description: 'Profesjonalne malowanie wnętrz i elewacji, tapetowanie, gładzie gipsowe, nakładanie tynków dekoracyjnych, sztablatura.'
  },
  {
    icon: <Grid />,
    title: 'Prace glazurnicze',
    description: 'Układanie płytek ściennych i podłogowych, mozaiki, gresu, kamienia naturalnego. Kompleksowe wykończenie łazienek i kuchni.'
  },
  {
    icon: <Ruler />,
    title: 'Prace montażowe',
    description: 'Montaż sufitów podwieszanych, ścianek działowych, zabudów i konstrukcji gipsowo-kartonowych, zabudowa AGD.'
  },
  {
    icon: <Droplet />,
    title: 'Prace izolacyjne',
    description: 'Wykonanie izolacji przeciwwilgociowych, termicznych i akustycznych. Hydroizolacja łazienek, tarasów i balkonów.'
  }
];

const Services = () => {
  return (
    <section id="usługi" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-construction-navy mb-4">Nasze usługi</h2>
          <p className="text-construction-gray text-lg">
            Oferujemy kompleksowy zakres usług budowlanych i wykończeniowych dostosowanych do indywidualnych potrzeb zarówno klientów prywatnych jak i deweloperów.
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

        <div className="bg-construction-orange/10 rounded-lg p-8 mt-16 border border-construction-orange/20">
          <h3 className="text-2xl font-bold text-construction-navy mb-4 text-center">
            Oferujemy pełen zakres prac budowlanych i wykończeniowych
          </h3>
          <p className="text-construction-gray text-center mb-8">
            Poza wymienionymi usługami realizujemy również wiele innych prac. Skontaktuj się z nami, aby omówić swój projekt.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-construction-navy mb-3">Dla klientów indywidualnych</h4>
              <ul className="text-construction-gray space-y-2">
                <li>• Kompleksowe remonty mieszkań i domów</li>
                <li>• Adaptacja poddaszy i piwnic</li>
                <li>• Wykończenia pod klucz</li>
                <li>• Projekty i aranżacje wnętrz</li>
                <li>• Indywidualne harmonogramy prac</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-construction-navy mb-3">Dla deweloperów</h4>
              <ul className="text-construction-gray space-y-2">
                <li>• Budowa osiedli mieszkaniowych</li>
                <li>• Wykończenia mieszkań deweloperskich</li>
                <li>• Współpraca długoterminowa</li>
                <li>• Rozliczenia etapowe</li>
                <li>• Dedykowany zespół projektowy</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-construction-navy mb-3">Specjalizacje</h4>
              <ul className="text-construction-gray space-y-2">
                <li>• Kompleksowa wykończeniówka</li>
                <li>• Łazienki i kuchnie pod klucz</li>
                <li>• Nowoczesne systemy grzewcze</li>
                <li>• Inteligentne instalacje</li>
                <li>• Zabudowy nietypowe</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-construction-navy rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Dla klientów indywidualnych i deweloperów
              </h3>
              <p className="text-gray-300 mb-6">
                Niezależnie czy jesteś osobą prywatną planującą remont mieszkania, czy firmą deweloperską realizującą duży projekt - zapewnimy Ci najwyższą jakość usług i profesjonalną obsługę.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: <Calendar className="h-5 w-5 text-construction-orange" />,
                    text: 'Terminowa realizacja zgodnie z harmonogramem'
                  },
                  {
                    icon: <Users className="h-5 w-5 text-construction-orange" />,
                    text: 'Doświadczony zespół fachowców'
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
                alt="Inwestycja budowlana" 
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
