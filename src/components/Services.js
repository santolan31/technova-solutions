import React from 'react';
import './Services.css';

const Services = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const services = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M8 3H5C3.89543 3 3 3.89543 3 5V8M21 8V5C21 3.89543 20.1046 3 19 3H16M16 21H19C20.1046 21 21 20.1046 21 19V16M3 16V19C3 20.1046 3.89543 21 5 21H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Desarrollo de Software y Apps",
      description: "Creamos soluciones de software a medida, desde aplicaciones móviles hasta sistemas empresariales complejos, utilizando las últimas tecnologías."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9L12 6L16 10L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Consultoría en Transformación Digital",
      description: "Guiamos a tu empresa en el proceso de transformación digital, optimizando procesos y adoptando nuevas tecnologías."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 10H16.74L16 4H8L7.26 10H6C4.9 10 4 10.9 4 12V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V12C20 10.9 19.1 10 18 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Ciberseguridad en la Nube",
      description: "Protegemos tus datos y sistemas con soluciones de ciberseguridad avanzadas, garantizando la continuidad de tu negocio."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9.5 2A2.5 2.5 0 0 0 7 4.5V5A2.5 2.5 0 0 0 4.5 7.5H4A2.5 2.5 0 0 0 1.5 10V14A2.5 2.5 0 0 0 4 16.5H4.5A2.5 2.5 0 0 0 7 19V19.5A2.5 2.5 0 0 0 9.5 22H14.5A2.5 2.5 0 0 0 17 19.5V19A2.5 2.5 0 0 0 19.5 16.5H20A2.5 2.5 0 0 0 22.5 14V10A2.5 2.5 0 0 0 20 7.5H19.5A2.5 2.5 0 0 0 17 5V4.5A2.5 2.5 0 0 0 14.5 2H9.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Implementación de IA",
      description: "Integramos soluciones de inteligencia artificial para automatizar tareas, analizar datos y mejorar la toma de decisiones."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3768 21.9119 20.0974 21.9451 19.82 21.92H4.18C3.90347 21.9451 3.62483 21.9119 3.36162 21.8227C3.09841 21.7335 2.85649 21.5901 2.65158 21.4019C2.44668 21.2136 2.28334 20.9845 2.17179 20.7293C2.06024 20.4742 2.00326 20.1985 2.004 19.92V16.92" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 8L12 2L18 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Soporte Técnico y Outsourcing IT",
      description: "Ofrecemos soporte técnico especializado y servicios de outsourcing IT para que te enfoques en tu negocio."
    }
  ];

  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">Nuestros Servicios</h2>
          <p className="services-description">
            En TechNova Solutions, combinamos experiencia técnica con una visión estratégica 
            para ofrecerte soluciones que impulsan el crecimiento y la innovación en tu empresa.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
          
          <div className="service-card service-cta">
            <h3 className="service-title">Ver todos los servicios</h3>
            <p className="service-description">
              Explora nuestra gama completa de soluciones tecnológicas.
            </p>
            <button onClick={handleScrollToContact} className="btn btn-primary service-btn">
              Explorar Servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
