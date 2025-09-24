import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="py-5 bg-primary">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h2 className="display-5 fw-bold text-white mb-4">
              Da el Próximo Paso hacia la Digitalización
            </h2>
            <p className="lead text-white mb-4">
              Descubre cómo TechNova Solutions puede transformar tu empresa. 
              Solicita una cotización hoy mismo y hablemos de tu proyecto.
            </p>
            <a href="#contacto" className="btn btn-light btn-lg">
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
