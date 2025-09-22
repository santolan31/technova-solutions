import React from 'react';
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

  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <div className="about-hero">
          <h1 className="about-title">Sobre Nosotros</h1>
          <p className="about-subtitle">
            Desarrollamos soluciones tecnológicas que optimizan procesos empresariales 
            y mejoran la eficiencia operativa de nuestros clientes.
          </p>
        </div>

        {/* Mission, Vision, Values Section */}
        <div className="about-cards">
          <div className="about-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="card-title">Misión</h2>
            <p className="card-description">
              Desarrollar software personalizado y soluciones tecnológicas que resuelvan 
              problemas reales de nuestros clientes, mejorando su productividad y 
              facilitando la toma de decisiones basada en datos.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2L12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="card-title">Visión</h2>
            <p className="card-description">
              Ser reconocidos como el socio tecnológico estratégico y líder en innovación 
              que inspire confianza y entregue resultados excepcionales. Aspiramos a ser 
              la fuerza impulsora detrás de la transformación digital global, creando 
              un impacto positivo y duradero en la forma en que las empresas operan y crecen.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="card-title">Valores</h2>
            <div className="values-list">
              {values.map((value, index) => (
                <div key={index} className="value-item">
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <div className="team-header">
            <h2 className="team-title">Nuestro Equipo</h2>
            <p className="team-subtitle">
              Conoce a los profesionales apasionados que hacen posible la magia en TechNova Solutions.
            </p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-icon">
                  {member.icon}
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-position">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
