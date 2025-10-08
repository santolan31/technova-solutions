import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ onNavigate, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (page) => {
    setIsMobileMenuOpen(false);
    if (page === 'services') {
      if (currentPage !== 'home') {
        onNavigate('home');
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
        const servicesSection = document.getElementById('servicios');
        if (servicesSection) {
          servicesSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    } else if (page === 'home') {
      if (currentPage !== 'home') {
        onNavigate('home');
      } else {
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
              className="me-2 me-md-3"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="d-md-none">
                <circle cx="16" cy="16" r="14" fill="#3B82F6" stroke="#60A5FA" strokeWidth="2"/>
                <circle cx="16" cy="16" r="8" fill="none" stroke="white" strokeWidth="2"/>
                <circle cx="16" cy="16" r="3" fill="white"/>
                <circle cx="10" cy="10" r="2" fill="white"/>
                <circle cx="22" cy="10" r="2" fill="white"/>
                <circle cx="10" cy="22" r="2" fill="white"/>
                <circle cx="22" cy="22" r="2" fill="white"/>
              </svg>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="d-none d-md-block">
                <circle cx="16" cy="16" r="14" fill="#3B82F6" stroke="#60A5FA" strokeWidth="2"/>
                <circle cx="16" cy="16" r="8" fill="none" stroke="white" strokeWidth="2"/>
                <circle cx="16" cy="16" r="3" fill="white"/>
                <circle cx="10" cy="10" r="2" fill="white"/>
                <circle cx="22" cy="10" r="2" fill="white"/>
                <circle cx="10" cy="22" r="2" fill="white"/>
                <circle cx="22" cy="22" r="2" fill="white"/>
              </svg>
            </motion.div>
            <span className="h6 h5-md mb-0 text-white fw-bold d-none d-sm-block">TechNova Solutions</span>
            <span className="h6 mb-0 text-white fw-bold d-block d-sm-none">TechNova</span>
          </motion.div>
          
          <nav className="d-none d-lg-flex align-items-center gap-4">
            {['home', 'services', 'about', 'success-cases', 'contact'].map((page, index) => (
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
                {page === 'success-cases' && 'Casos de Éxito'}
                {page === 'contact' && 'Contacto'}
              </motion.button>
            ))}
          </nav>

          <div className="d-flex align-items-center gap-2">
            <motion.button
              className="btn btn-outline-primary d-lg-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
            
            
            <motion.button 
              className="btn btn-primary d-none d-md-block"
              onClick={() => handleNavigation('quote')}
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

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="d-lg-none mt-3 pt-3 border-top border-primary"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="d-flex flex-column gap-3">
                {['home', 'services', 'about', 'success-cases', 'contact', 'quote'].map((page, index) => (
                  <motion.button
                    key={page}
                    className={`btn btn-link text-light text-decoration-none text-start p-2 ${currentPage === page ? 'text-primary' : ''}`}
                    onClick={() => handleNavigation(page)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {page === 'home' && 'Inicio'}
                    {page === 'services' && 'Servicios'}
                    {page === 'about' && 'Nosotros'}
                    {page === 'success-cases' && 'Casos de Éxito'}
                    {page === 'contact' && 'Contacto'}
                    {page === 'quote' && 'Cotización'}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
