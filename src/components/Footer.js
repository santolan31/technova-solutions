import React from 'react';
import './Footer.css';

const Footer = ({ onNavigate }) => {
  const handleNavigation = (page) => {
    if (page === 'services') {
      // Scroll to services section
      const servicesSection = document.getElementById('servicios');
      if (servicesSection) {
        servicesSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      onNavigate(page);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo" onClick={() => handleNavigation('home')} style={{ cursor: 'pointer' }}>
            <div className="logo">
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
          </div>
          
          <nav className="footer-nav">
            <button 
              className="footer-nav-link"
              onClick={() => handleNavigation('home')}
            >
              Inicio
            </button>
            <button 
              className="footer-nav-link"
              onClick={() => handleNavigation('services')}
            >
              Servicios
            </button>
            <button 
              className="footer-nav-link"
              onClick={() => handleNavigation('about')}
            >
              Nosotros
            </button>
            <button 
              className="footer-nav-link"
              onClick={() => handleNavigation('contact')}
            >
              Contacto
            </button>
          </nav>
          
          <div className="footer-social">
            <a href="#" className="social-link" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16 8C18.5 8 20.5 10 20.5 12.5V21H17V13C17 11.5 16 10.5 14.5 10.5C13 10.5 12 11.5 12 13V21H8.5V8H12V9.5C12.5 8.5 13.5 8 15 8H16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 8H7.5V21H4V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.75 4C6.7165 4 7.5 3.2165 7.5 2.25C7.5 1.2835 6.7165 0.5 5.75 0.5C4.7835 0.5 4 1.2835 4 2.25C4 3.2165 4.7835 4 5.75 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.28445C14.0247 3.61172 13.2884 4.19439 12.773 4.95372C12.2575 5.71305 11.9877 6.61232 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39525C5.36074 6.60469 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 TechNova Solutions. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
