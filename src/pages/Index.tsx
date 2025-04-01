
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import StructuredData from '../components/SEO/StructuredData';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on first load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>HubBud - Profesjonalna firma budowlana w Łodzi | Kompleksowe usługi budowlane</title>
        <meta name="description" content="HubBud to renomowana firma budowlana w Łodzi oferująca profesjonalne usługi budowlane, wykończenia wnętrz i instalacje. Kompleksowa obsługa budowlana dla inwestorów i deweloperów w Łodzi i województwie łódzkim." />
        <link rel="canonical" href="https://hub-bud.site/" />
      </Helmet>
      <StructuredData />
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
