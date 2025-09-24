import React from 'react';
import { motion } from 'framer-motion';
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
          <div className="col-12 col-lg-10 col-xl-8">
            <motion.h1 
              className="display-4 display-md-3 display-lg-2 fw-bold text-white mb-3 mb-md-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Impulsando la Transformación Digital de tu Empresa
            </motion.h1>
            <motion.p 
              className="lead text-light mb-3 mb-md-4 px-2 px-md-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Especialistas en desarrollo de software, consultoría tecnológica y 
              transformación digital para empresas que buscan modernizar sus procesos 
              y mejorar su competitividad.
            </motion.p>
            <motion.button 
              onClick={handleScrollToServices} 
              className="btn btn-primary btn-lg w-100 w-md-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Conoce Nuestros Servicios
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
