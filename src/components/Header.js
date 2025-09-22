import React from 'react';
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
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => handleNavigation('home')} style={{ cursor: 'pointer' }}>
            <div className="logo-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="#3B82F6" stroke="#60A5FA" strokeWidth="2"/>
                <circle cx="16" cy="16" r="8" fill="none" stroke="white" strokeWidth="2"/>
                <circle cx="16" cy="16" r="3" fill="white"/>
                <circle cx="10" cy="10" r="2" fill="white"/>
                <circle cx="22" cy="10" r="2" fill="white"/>
                <circle cx="10" cy="22" r="2" fill="white"/>
                <circle cx="22" cy="22" r="2" fill="white"/>
              </svg>
            </div>
            <span className="logo-text">TechNova Solutions</span>
          </div>
          
          <nav className="nav">
            <button 
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => handleNavigation('home')}
            >
              Inicio
            </button>
            <button 
              className={`nav-link ${currentPage === 'services' ? 'active' : ''}`}
              onClick={() => handleNavigation('services')}
            >
              Servicios
            </button>
            <button 
              className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
              onClick={() => handleNavigation('about')}
            >
              Nosotros
            </button>
            <button 
              className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavigation('contact')}
            >
              Contacto
            </button>
          </nav>
          
          <button 
            className="btn btn-primary header-cta"
            onClick={() => handleNavigation('contact')}
          >
            Solicitar Cotización
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
