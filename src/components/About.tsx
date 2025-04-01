
import React from 'react';
import { Check, Clock, Award, User } from 'lucide-react';

const About = () => {
  return (
    <section id="o-nas" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-construction-navy mb-4">Kim jesteśmy</h2>
          <p className="text-construction-gray text-lg">
            HubBud to doświadczona firma budowlana z Łodzi oferująca kompleksowe usługi budowlane dla inwestorów i deweloperów na rynku łódzkim.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=800&q=80" 
                alt="Polska ekipa budowlana przy pracy w Łodzi" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 hidden md:block">
                <div className="text-construction-navy font-bold text-lg">10+</div>
                <div className="text-sm text-construction-gray">Lat doświadczenia na rynku łódzkim</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-construction-navy mb-6">
              Kompleksowe rozwiązania budowlane w Łodzi na najwyższym poziomie
            </h3>
            <p className="text-construction-gray mb-8">
              Naszą misją jest zapewnienie klientom kompleksowej obsługi na każdym etapie procesu budowlanego w Łodzi i województwie łódzkim. Specjalizujemy się w realizacji projektów mieszkaniowych i komercyjnych, oferując pełen zakres usług od wyszukania działki, przez budowę, aż po wykończenie wnętrz.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: <Check className="h-5 w-5 text-construction-orange" />,
                  title: 'Doświadczeni specjaliści z Łodzi',
                  desc: 'Zatrudniamy tylko wykwalifikowanych fachowców z udokumentowanym doświadczeniem na rynku łódzkim'
                },
                {
                  icon: <Clock className="h-5 w-5 text-construction-orange" />,
                  title: 'Terminowa realizacja',
                  desc: 'Gwarantujemy dotrzymanie ustalonych terminów i etapów realizacji projektu'
                },
                {
                  icon: <Award className="h-5 w-5 text-construction-orange" />,
                  title: 'Wysoka jakość',
                  desc: 'Dbamy o najwyższą jakość wykonywanych prac i używanych materiałów'
                },
                {
                  icon: <User className="h-5 w-5 text-construction-orange" />,
                  title: 'Indywidualne podejście',
                  desc: 'Każdy projekt w Łodzi traktujemy indywidualnie, dostosowując się do potrzeb klienta'
                },
              ].map((item, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-medium text-construction-navy">{item.title}</h4>
                    <p className="text-sm text-construction-gray">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
