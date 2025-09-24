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
    <section className="position-relative min-vh-100 d-flex align-items-center" style={{backgroundImage: 'url(./assets/images/background.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>
      <div className="container position-relative z-1">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold text-white mb-4">
              Impulsando la Transformación Digital de tu Empresa
            </h1>
            <p className="lead text-light mb-4">
              Especialistas en desarrollo de software, consultoría tecnológica y 
              transformación digital para empresas que buscan modernizar sus procesos 
              y mejorar su competitividad.
            </p>
            <button onClick={handleScrollToServices} className="btn btn-primary btn-lg">
              Conoce Nuestros Servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
