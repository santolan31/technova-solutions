import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const values = [
    {
      title: "Innovación",
      description: "Creatividad que impulsa el futuro."
    },
    {
      title: "Integridad", 
      description: "Honestidad en cada línea de código."
    },
    {
      title: "Colaboración",
      description: "Juntos creamos valor."
    },
    {
      title: "Excelencia",
      description: "Comprometidos con la calidad superior."
    },
    {
      title: "Pasión",
      description: "El éxito del cliente es nuestro motor."
    }
  ];

  const teamMembers = [
    {
      name: "Laura Camila Hernandez Neira",
      position: "Desarrollador Líder",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Santiago Salazar Lesmes", 
      position: "Desarrollador Líder",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Niver Chilatra Mendoza",
      position: "Desarrollador Líder",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Katherine Lopez Yepes",
      position: "Desarrollador Líder",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  const teamVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-5">
      <div className="container">
        {/* Hero Section */}
        <motion.div 
          className="row justify-content-center text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold text-white mb-4">Sobre Nosotros</h1>
            <p className="lead text-light">
              Desarrollamos soluciones tecnológicas que optimizan procesos empresariales 
              y mejoran la eficiencia operativa de nuestros clientes.
            </p>
          </div>
        </motion.div>

        {/* Mission, Vision, Values Section */}
        <motion.div 
          className="row g-4 mb-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="col-lg-4" variants={cardVariants}>
            <motion.div 
              className="card h-100 bg-dark border-primary"
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="card-body text-center p-4">
                <motion.div 
                  className="text-primary mb-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
                <h3 className="card-title text-white mb-3">Misión</h3>
                <p className="card-text text-light">
                  Desarrollar software personalizado y soluciones tecnológicas que resuelvan 
                  problemas reales de nuestros clientes, mejorando su productividad y 
                  facilitando la toma de decisiones basada en datos.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="col-lg-4" variants={cardVariants}>
            <motion.div 
              className="card h-100 bg-dark border-primary"
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="card-body text-center p-4">
                <motion.div 
                  className="text-primary mb-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2L12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
                <h3 className="card-title text-white mb-3">Visión</h3>
                <p className="card-text text-light">
                  Ser reconocidos como el socio tecnológico estratégico y líder en innovación 
                  que inspire confianza y entregue resultados excepcionales. Aspiramos a ser 
                  la fuerza impulsora detrás de la transformación digital global, creando 
                  un impacto positivo y duradero en la forma en que las empresas operan y crecen.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="col-lg-4" variants={cardVariants}>
            <motion.div 
              className="card h-100 bg-dark border-primary"
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="card-body text-center p-4">
                <motion.div 
                  className="text-primary mb-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
                <h3 className="card-title text-white mb-3">Valores</h3>
                <div className="text-start">
                  {values.map((value, index) => (
                    <motion.div 
                      key={index} 
                      className="mb-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h6 className="text-primary mb-1">{value.title}</h6>
                      <p className="text-light small mb-0">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          className="row justify-content-center text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="col-lg-8">
            <h2 className="display-5 fw-bold text-white mb-3">Nuestro Equipo</h2>
            <p className="lead text-light">
              Conoce a los profesionales apasionados que hacen posible la magia en TechNova Solutions.
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
          {teamMembers.map((member, index) => (
            <motion.div key={index} className="col-lg-3 col-md-6" variants={teamVariants}>
              <motion.div 
                className="card h-100 bg-dark border-primary"
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="card-body text-center p-4">
                  <motion.div 
                    className="text-primary mb-3"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.icon}
                  </motion.div>
                  <h5 className="card-title text-white mb-2">{member.name}</h5>
                  <p className="card-text text-light small">{member.position}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
