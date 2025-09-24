import React from 'react';
import { motion } from 'framer-motion';
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
      description: "Desarrollo de aplicaciones web y móviles personalizadas, sistemas empresariales y soluciones de software adaptadas a las necesidades específicas de cada cliente."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9L12 6L16 10L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Consultoría en Transformación Digital",
      description: "Asesoría especializada para modernizar procesos empresariales, implementar nuevas tecnologías y optimizar la operación digital de tu organización."
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
      description: "Implementación de medidas de seguridad robustas para proteger información crítica, sistemas en la nube y garantizar el cumplimiento normativo."
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
      description: "Desarrollo e integración de sistemas de IA para automatización de procesos, análisis predictivo y optimización de operaciones empresariales."
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
      description: "Soporte técnico 24/7, mantenimiento de infraestructura y servicios de outsourcing IT para optimizar la operación tecnológica de tu empresa."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="servicios" className="py-5">
      <div className="container">
        <motion.div 
          className="row justify-content-center text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="col-lg-8">
            <h2 className="display-5 fw-bold text-white mb-3">Nuestros Servicios</h2>
            <p className="lead text-light">
              Soluciones tecnológicas especializadas para empresas que buscan optimizar sus procesos 
              y mantenerse competitivas en el mercado digital actual.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} className="col-12 col-sm-6 col-lg-4" variants={cardVariants}>
              <motion.div 
                className="card h-100 bg-dark border-primary"
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="card-body text-center p-4">
                  <motion.div 
                    className="text-primary mb-3 d-flex justify-content-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h5 className="card-title text-white mb-3">{service.title}</h5>
                  <p className="card-text text-light">{service.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
          
          <motion.div className="col-12 col-sm-6 col-lg-4" variants={cardVariants}>
            <motion.div 
              className="card h-100 bg-primary border-primary"
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="card-body text-center p-4 d-flex flex-column justify-content-center">
                <h5 className="card-title text-white mb-3">Ver todos los servicios</h5>
                <p className="card-text text-white mb-4">
                  Conoce más sobre nuestros servicios y solicita una cotización personalizada.
                </p>
                <motion.button 
                  onClick={handleScrollToContact} 
                  className="btn btn-light btn-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Generar Cotización
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
