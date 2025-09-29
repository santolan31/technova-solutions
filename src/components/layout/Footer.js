import React from 'react';

const Footer = ({ onNavigate, currentPage }) => {
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
    <footer className="bg-dark text-light py-5 border-top border-primary">
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col-lg-4 col-md-6 mb-3 mb-lg-0">
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
          </div>
          
          <div className="col-lg-4 col-md-6 mb-3 mb-lg-0">
            <div className="text-center text-lg-start">
              <h6 className="text-white mb-3">Información de Contacto</h6>
              <p className="text-light mb-2">
                <i className="bi bi-envelope me-2"></i>
                info@technovasolutions.com
              </p>
              <p className="text-light mb-0">
                <i className="bi bi-phone me-2"></i>
                317 821 9112
              </p>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-12">
            <div className="d-flex justify-content-center justify-content-lg-end gap-3">
              <button className="btn btn-outline-primary btn-sm d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}} aria-label="LinkedIn" onClick={() => window.open('https://linkedin.com', '_blank')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M16 8C18.5 8 20.5 10 20.5 12.5V21H17V13C17 11.5 16 10.5 14.5 10.5C13 10.5 12 11.5 12 13V21H8.5V8H12V9.5C12.5 8.5 13.5 8 15 8H16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 8H7.5V21H4V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.75 4C6.7165 4 7.5 3.2165 7.5 2.25C7.5 1.2835 6.7165 0.5 5.75 0.5C4.7835 0.5 4 1.2835 4 2.25C4 3.2165 4.7835 4 5.75 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn btn-outline-primary btn-sm d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}} aria-label="Twitter" onClick={() => window.open('https://twitter.com', '_blank')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.28445C14.0247 3.61172 13.2884 4.19439 12.773 4.95372C12.2575 5.71305 11.9877 6.61232 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39525C5.36074 6.60469 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="text-center pt-3 border-top border-secondary">
              <p className="text-muted mb-0 small">
                © 2024 TechNova Solutions. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
