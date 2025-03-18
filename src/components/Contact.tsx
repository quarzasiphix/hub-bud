
import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="kontakt" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-construction-navy mb-4">Skontaktuj się z nami</h2>
          <p className="text-construction-gray text-lg">
            Jesteśmy gotowi odpowiedzieć na Twoje pytania i omówić Twój projekt. Skontaktuj się z nami telefonicznie, mailowo lub wypełnij formularz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-construction-navy mb-6">Wyślij wiadomość</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-construction-gray mb-1">Imię i nazwisko</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-construction-orange/50" 
                    placeholder="Twoje imię i nazwisko"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-construction-gray mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-construction-orange/50" 
                    placeholder="Twój adres email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-construction-gray mb-1">Temat</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-construction-orange/50" 
                  placeholder="Temat wiadomości"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-construction-gray mb-1">Wiadomość</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-construction-orange/50" 
                  placeholder="Opisz swój projekt lub pytanie"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-construction-orange hover:bg-construction-orange/90 text-white font-medium px-6 py-3 rounded-md inline-flex items-center justify-center transition-colors w-full"
              >
                Wyślij wiadomość
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-construction-navy rounded-lg p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">Informacje kontaktowe</h3>
              
              <div className="space-y-4">
                {[
                  {
                    icon: <Phone className="h-5 w-5 text-construction-orange" />,
                    title: 'Telefon',
                    content: '+48 123 456 789'
                  },
                  {
                    icon: <Mail className="h-5 w-5 text-construction-orange" />,
                    title: 'Email',
                    content: 'contact@hub-bud.site'
                  },
                  {
                    icon: <MapPin className="h-5 w-5 text-construction-orange" />,
                    title: 'Adres',
                    content: 'Łódź'
                  },
                  {
                    icon: <Clock className="h-5 w-5 text-construction-orange" />,
                    title: 'Godziny pracy',
                    content: 'Poniedziałek - Piątek: 8:00 - 17:00'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-gray-300">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden h-64 shadow-md">
              {/* This would be replaced with an actual map */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-construction-gray">Mapa z lokalizacją biura</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
