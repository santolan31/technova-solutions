import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './SuccessCases.css';

const SuccessCases = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const successCases = [
    {
      id: 1,
      title: "Sistema de Gestión Empresarial para Manufactura",
      client: "Industrias del Norte S.A.S",
      industry: "Manufactura",
      category: "desarrollo",
      duration: "6 meses",
      team: "5 desarrolladores",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
      challenge: "La empresa necesitaba digitalizar sus procesos de producción, inventario y ventas que manejaban en papel y hojas de cálculo dispersas.",
      solution: "Desarrollamos un sistema integral de gestión empresarial que integra módulos de producción, inventario, ventas, contabilidad y reportes en tiempo real.",
      results: [
        "Reducción del 70% en tiempo de procesamiento de órdenes",
        "Aumento del 45% en precisión del inventario",
        "Ahorro de $2.5M COP mensuales en costos operativos",
        "Mejora del 60% en la velocidad de reportes financieros"
      ],
      testimonial: "Tecnova transformó completamente nuestra operación. Ahora podemos tomar decisiones basadas en datos reales y nuestros procesos son mucho más eficientes.",
      testimonialAuthor: "María González, Gerente General",
      image: "/api/placeholder/600/400",
      color: "primary"
    },
    {
      id: 2,
      title: "Plataforma de E-commerce con IA",
      client: "ModaStyle Colombia",
      industry: "Retail",
      category: "ia",
      duration: "4 meses",
      team: "4 desarrolladores",
      technologies: ["React", "Python", "TensorFlow", "MongoDB", "AWS"],
      challenge: "La empresa de moda necesitaba una plataforma de venta online que personalizara las recomendaciones y optimizara la experiencia del cliente.",
      solution: "Creamos una plataforma de e-commerce con motor de recomendaciones basado en IA, análisis de comportamiento del usuario y sistema de gestión de inventario inteligente.",
      results: [
        "Incremento del 85% en conversión de visitantes a compradores",
        "Aumento del 120% en el valor promedio de carrito",
        "Reducción del 40% en tasa de abandono de carrito",
        "Mejora del 65% en satisfacción del cliente"
      ],
      testimonial: "La implementación de IA en nuestra plataforma revolucionó nuestras ventas. Los clientes encuentran exactamente lo que buscan.",
      testimonialAuthor: "Carlos Mendoza, CEO",
      image: "/api/placeholder/600/400",
      color: "success"
    },
    {
      id: 3,
      title: "Sistema de Ciberseguridad en la Nube",
      client: "Banco Regional del Pacífico",
      industry: "Financiero",
      category: "ciberseguridad",
      duration: "8 meses",
      team: "6 especialistas",
      technologies: ["Azure", "SIEM", "Python", "Machine Learning", "Kubernetes"],
      challenge: "El banco necesitaba modernizar su infraestructura de seguridad y migrar a la nube manteniendo los más altos estándares de protección.",
      solution: "Implementamos un sistema integral de ciberseguridad en la nube con monitoreo 24/7, detección de amenazas en tiempo real y respuesta automática a incidentes.",
      results: [
        "Reducción del 95% en incidentes de seguridad",
        "Detección de amenazas 10x más rápida",
        "Ahorro del 60% en costos de infraestructura",
        "Cumplimiento del 100% con regulaciones bancarias"
      ],
      testimonial: "La seguridad de nuestros clientes es nuestra prioridad. Tecnova nos ayudó a alcanzar los más altos estándares de protección.",
      testimonialAuthor: "Ana Patricia Ruiz, CISO",
      image: "/api/placeholder/600/400",
      color: "warning"
    },
    {
      id: 4,
      title: "App Móvil para Gestión de Inventario",
      client: "Supermercados Unidos",
      industry: "Retail",
      category: "desarrollo",
      duration: "3 meses",
      team: "3 desarrolladores",
      technologies: ["React Native", "Node.js", "Firebase", "QR Scanner"],
      challenge: "Los supermercados necesitaban una solución móvil para gestionar inventarios en tiempo real desde el piso de ventas.",
      solution: "Desarrollamos una app móvil con escáner de códigos QR, sincronización en tiempo real y análisis predictivo de inventario.",
      results: [
        "Reducción del 50% en tiempo de inventario",
        "Disminución del 30% en productos vencidos",
        "Aumento del 25% en rotación de inventario",
        "Mejora del 80% en precisión del stock"
      ],
      testimonial: "La app móvil cambió completamente la forma en que gestionamos nuestros inventarios. Es rápida, precisa y fácil de usar.",
      testimonialAuthor: "Roberto Silva, Gerente de Operaciones",
      image: "/api/placeholder/600/400",
      color: "info"
    },
    {
      id: 5,
      title: "Chatbot Inteligente para Atención al Cliente",
      client: "Seguros del Valle",
      industry: "Seguros",
      category: "ia",
      duration: "5 meses",
      team: "4 especialistas",
      technologies: ["Python", "NLP", "Dialogflow", "Google Cloud", "Machine Learning"],
      challenge: "La compañía de seguros necesitaba automatizar la atención al cliente para manejar el alto volumen de consultas y reducir tiempos de respuesta.",
      solution: "Implementamos un chatbot inteligente con procesamiento de lenguaje natural que puede resolver consultas complejas y escalar casos a agentes humanos cuando sea necesario.",
      results: [
        "Reducción del 70% en tiempo de respuesta a clientes",
        "Aumento del 90% en satisfacción del cliente",
        "Ahorro del 50% en costos de atención al cliente",
        "Disponibilidad 24/7 para consultas básicas"
      ],
      testimonial: "Nuestros clientes están encantados con la rapidez y precisión del chatbot. Ha transformado nuestra experiencia de servicio.",
      testimonialAuthor: "Liliana Torres, Directora de Servicio al Cliente",
      image: "/api/placeholder/600/400",
      color: "secondary"
    },
    {
      id: 6,
      title: "Migración a Cloud con Optimización de Costos",
      client: "Logística Express S.A.",
      industry: "Logística",
      category: "consultoria",
      duration: "4 meses",
      team: "5 consultores",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Monitoring"],
      challenge: "La empresa logística necesitaba migrar su infraestructura legacy a la nube optimizando costos y mejorando la escalabilidad.",
      solution: "Realizamos una migración completa a AWS con arquitectura de microservicios, optimización de costos y monitoreo avanzado.",
      results: [
        "Reducción del 40% en costos de infraestructura",
        "Mejora del 300% en escalabilidad",
        "Aumento del 99.9% en disponibilidad del sistema",
        "Tiempo de despliegue 5x más rápido"
      ],
      testimonial: "La migración a la nube superó todas nuestras expectativas. Ahora tenemos una infraestructura moderna y costos optimizados.",
      testimonialAuthor: "Miguel Ángel Herrera, CTO",
      image: "/api/placeholder/600/400",
      color: "dark"
    }
  ];

  const filters = [
    { key: 'all', label: 'Todos los Proyectos' },
    { key: 'desarrollo', label: 'Desarrollo de Software' },
    { key: 'ia', label: 'Inteligencia Artificial' },
    { key: 'ciberseguridad', label: 'Ciberseguridad' },
    { key: 'consultoria', label: 'Consultoría' }
  ];

  const filteredCases = activeFilter === 'all' 
    ? successCases 
    : successCases.filter(caseItem => caseItem.category === activeFilter);

  const getColorClass = (color) => {
    const colorMap = {
      primary: 'bg-primary',
      success: 'bg-success',
      warning: 'bg-warning',
      info: 'bg-info',
      secondary: 'bg-secondary',
      dark: 'bg-dark'
    };
    return colorMap[color] || 'bg-primary';
  };

  return (
    <div className="success-cases-container py-5">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="display-4 fw-bold text-white mb-3">Casos de Éxito</h1>
          <p className="lead text-light mb-4">
            Descubre cómo hemos transformado digitalmente empresas de diversos sectores
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div 
          className="filters-container mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {filters.map((filter, index) => (
              <motion.button
                key={filter.key}
                className={`btn ${activeFilter === filter.key ? 'btn-primary' : 'btn-outline-primary'} px-4 py-2`}
                onClick={() => setActiveFilter(filter.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Grid de Casos de Éxito */}
        <div className="row g-4">
          {filteredCases.map((caseItem, index) => (
            <motion.div 
              key={caseItem.id}
              className="col-lg-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="success-case-card h-100">
                <div className={`case-header ${getColorClass(caseItem.color)}`}>
                  <div className="case-badge">
                    <span className="badge bg-light text-dark">{caseItem.industry}</span>
                  </div>
                  <h3 className="case-title text-white">{caseItem.title}</h3>
                  <p className="case-client text-white-50">{caseItem.client}</p>
                </div>

                <div className="case-content">
                  {/* Información del proyecto */}
                  <div className="project-info mb-4">
                    <div className="row g-3">
                      <div className="col-6">
                        <div className="info-item">
                          <span className="info-label">Duración:</span>
                          <span className="info-value">{caseItem.duration}</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="info-item">
                          <span className="info-label">Equipo:</span>
                          <span className="info-value">{caseItem.team}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tecnologías */}
                  <div className="technologies mb-4">
                    <h6 className="text-white mb-2">Tecnologías:</h6>
                    <div className="d-flex flex-wrap gap-1">
                      {caseItem.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="badge bg-secondary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="challenge mb-4">
                    <h6 className="text-white mb-2">Desafío:</h6>
                    <p className="text-light small">{caseItem.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="solution mb-4">
                    <h6 className="text-white mb-2">Solución:</h6>
                    <p className="text-light small">{caseItem.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="results mb-4">
                    <h6 className="text-white mb-2">Resultados:</h6>
                    <ul className="results-list">
                      {caseItem.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-light small">
                          <span className="text-success">✓</span> {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <div className="testimonial">
                    <blockquote className="blockquote">
                      <p className="text-light small mb-2">"{caseItem.testimonial}"</p>
                      <footer className="blockquote-footer text-white-50">
                        <cite title="Source Title">{caseItem.testimonialAuthor}</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Estadísticas Generales */}
        <motion.div 
          className="stats-section mt-5 pt-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="row g-4 text-center">
            <div className="col-md-3">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-primary">50+</h3>
                <p className="text-light">Proyectos Completados</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-success">98%</h3>
                <p className="text-light">Satisfacción del Cliente</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-warning">25+</h3>
                <p className="text-light">Empresas Transformadas</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-info">3</h3>
                <p className="text-light">Años de Experiencia</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SuccessCases;
