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
    <header className="bg-dark border-bottom border-primary">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between py-3">
          <div 
            className="d-flex align-items-center" 
            onClick={() => handleNavigation('home')} 
            style={{ cursor: 'pointer' }}
          >
            <div className="me-3">
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
            <span className="h5 mb-0 text-white fw-bold">TechNova Solutions</span>
          </div>
          
          <nav className="d-none d-md-flex align-items-center gap-4">
            <button 
              className={`btn btn-link text-light text-decoration-none p-0 ${currentPage === 'home' ? 'text-primary' : ''}`}
              onClick={() => handleNavigation('home')}
            >
              Inicio
            </button>
            <button 
              className={`btn btn-link text-light text-decoration-none p-0 ${currentPage === 'services' ? 'text-primary' : ''}`}
              onClick={() => handleNavigation('services')}
            >
              Servicios
            </button>
            <button 
              className={`btn btn-link text-light text-decoration-none p-0 ${currentPage === 'about' ? 'text-primary' : ''}`}
              onClick={() => handleNavigation('about')}
            >
              Nosotros
            </button>
            <button 
              className={`btn btn-link text-light text-decoration-none p-0 ${currentPage === 'contact' ? 'text-primary' : ''}`}
              onClick={() => handleNavigation('contact')}
            >
              Contacto
            </button>
          </nav>
          
          <button 
            className="btn btn-primary"
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
