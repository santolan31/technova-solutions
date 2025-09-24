import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = ({ onNavigate, currentPage }) => {
  const handleNavigation = (page) => {
    if (page === 'services') {
      // First navigate to home page if not already there
      if (currentPage !== 'home') {
        onNavigate('home');
        // Wait for page to load then scroll
        setTimeout(() => {
          const servicesSection = document.getElementById('servicios');
          if (servicesSection) {
            servicesSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const servicesSection = document.getElementById('servicios');
        if (servicesSection) {
          servicesSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    } else if (page === 'home') {
      // First navigate to home page if not already there
      if (currentPage !== 'home') {
        onNavigate('home');
      } else {
        // Already on home page, scroll to top
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    } else {
      onNavigate(page);
    }
  };

  return (
    <motion.header 
      className="bg-dark border-bottom border-primary"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <div className="d-flex align-items-center justify-content-between py-3">
          <motion.div 
            className="d-flex align-items-center" 
            onClick={() => handleNavigation('home')} 
            style={{ cursor: 'pointer' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="me-3"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="#3B82F6" stroke="#60A5FA" strokeWidth="2"/>
                <circle cx="16" cy="16" r="8" fill="none" stroke="white" strokeWidth="2"/>
                <circle cx="16" cy="16" r="3" fill="white"/>
                <circle cx="10" cy="10" r="2" fill="white"/>
                <circle cx="22" cy="10" r="2" fill="white"/>
                <circle cx="10" cy="22" r="2" fill="white"/>
                <circle cx="22" cy="22" r="2" fill="white"/>
              </svg>
            </motion.div>
            <span className="h5 mb-0 text-white fw-bold">TechNova Solutions</span>
          </motion.div>
          
          <nav className="d-none d-md-flex align-items-center gap-4">
            {['home', 'services', 'about', 'contact'].map((page, index) => (
              <motion.button 
                key={page}
                className={`btn btn-link text-light text-decoration-none p-0 ${currentPage === page ? 'text-primary' : ''}`}
                onClick={() => handleNavigation(page)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {page === 'home' && 'Inicio'}
                {page === 'services' && 'Servicios'}
                {page === 'about' && 'Nosotros'}
                {page === 'contact' && 'Contacto'}
              </motion.button>
            ))}
          </nav>
          
          <motion.button 
            className="btn btn-primary"
            onClick={() => handleNavigation('contact')}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Cotización
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
