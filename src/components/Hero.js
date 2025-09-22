import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('servicios');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Impulsando la Transformación Digital de tu Empresa
          </h1>
          <p className="hero-description">
            TechNova Solutions es tu aliado estratégico para la digitalización. 
            Ofrecemos soluciones innovadoras, seguras y escalables para empresas 
            que buscan crecer en la era digital.
          </p>
          <button onClick={handleScrollToServices} className="btn btn-primary hero-cta">
            Conoce Nuestros Servicios
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
