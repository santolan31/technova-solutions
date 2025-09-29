import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = ({ onNavigate }) => {
  const handleClick = () => {
    if (onNavigate) {
      onNavigate('quote');
    } else {
      // Fallback para scroll si no hay navegación
      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };
  return (
    <section className="py-5 bg-primary">
      <div className="container">
        <motion.div 
          className="row justify-content-center text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="col-lg-8">
            <motion.h2 
              className="display-5 fw-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Da el Próximo Paso hacia la Digitalización
            </motion.h2>
            <motion.p 
              className="lead text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Descubre cómo TechNova Solutions puede transformar tu empresa. 
              Solicita una cotización hoy mismo y hablemos de tu proyecto.
            </motion.p>
            <motion.button 
              onClick={handleClick}
              className="btn btn-light btn-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
            >
              <span className="d-none d-md-inline">Contáctanos</span>
              <span className="d-inline d-md-none">Solicitar Cotización</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
