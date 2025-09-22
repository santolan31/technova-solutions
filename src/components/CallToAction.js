import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            Da el Próximo Paso hacia la Digitalización
          </h2>
          <p className="cta-description">
            Descubre cómo TechNova Solutions puede transformar tu empresa. 
            Solicita una cotización hoy mismo y hablemos de tu proyecto.
          </p>
          <a href="#contacto" className="btn btn-primary cta-button">
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
