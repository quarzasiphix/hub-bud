
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1605276374857-68c8732b421a?auto=format&fit=crop&w=800&q=80",
    title: "Osiedle Słoneczne",
    category: "Kompleksowa budowa",
    description: "Realizacja budowy 12 domów jednorodzinnych w zabudowie szeregowej."
  },
  {
    image: "https://images.unsplash.com/photo-1555652652-62946e307471?auto=format&fit=crop&w=800&q=80",
    title: "Apartamentowiec Marina",
    category: "Budowa i wykończenie",
    description: "Budowa i kompleksowe wykończenie apartamentów o podwyższonym standardzie."
  },
  {
    image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=800&q=80",
    title: "Rezydencja Parkowa",
    category: "Wykończenie wnętrz",
    description: "Prace wykończeniowe w luksusowej rezydencji, w tym instalacje i dekoracje."
  },
  {
    image: "https://images.unsplash.com/photo-1617434108848-6a1e827124ef?auto=format&fit=crop&w=800&q=80",
    title: "Biurowiec Nowogrodzka",
    category: "Instalacje",
    description: "Wykonanie kompleksowych instalacji elektrycznych i hydraulicznych w biurowcu klasy A."
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('wszystkie');

  const filters = [
    'wszystkie', 
    'kompleksowa budowa', 
    'wykończenie wnętrz', 
    'instalacje'
  ];

  const filteredItems = activeFilter === 'wszystkie'
    ? portfolioItems
    : portfolioItems.filter(item => 
        item.category.toLowerCase().includes(activeFilter.toLowerCase())
      );

  return (
    <section id="projekty" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-construction-navy mb-4">Nasze realizacje</h2>
          <p className="text-construction-gray text-lg">
            Zapoznaj się z projektami, które zrealizowaliśmy dla naszych klientów. Jakość, terminowość i profesjonalizm to nasze priorytety.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-construction-orange text-white'
                  : 'bg-white text-construction-gray hover:bg-gray-100'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 text-white">
                    <p className="font-medium">{item.category}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-construction-navy mb-2">{item.title}</h3>
                <p className="text-construction-gray">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-transparent hover:bg-construction-orange/10 text-construction-navy border border-construction-navy font-medium px-8 py-3 rounded-md inline-flex items-center justify-center transition-colors">
            Zobacz więcej projektów
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
