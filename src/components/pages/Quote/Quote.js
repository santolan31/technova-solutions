import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Quote.css';
import { downloadQuotePDF } from '../../../utils/pdfGenerator';
import { sendQuoteWithPDF } from '../../../services/emailService';

const Quote = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [isLoading, setIsLoading] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    comments: ''
  });

  const servicesData = [
    {
      id: 1,
      name: "Desarrollo de Software y Apps",
      description: "Creamos soluciones a medida para tus necesidades",
      basePrice: 1500,
      deliveryTime: "4-6 semanas",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M8 3H5C3.89543 3 3 3.89543 3 5V8M21 8V5C21 3.89543 20.1046 3 19 3H16M16 21H19C20.1046 21 21 20.1046 21 19V16M3 16V19C3 20.1046 3.89543 21 5 21H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      name: "Consultoría Digital",
      description: "Optimizamos tus procesos con tecnología de punta",
      basePrice: 2000,
      deliveryTime: "2-3 semanas",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9L12 6L16 10L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 3,
      name: "Ciberseguridad en la Nube",
      description: "Protegemos tus datos y sistemas en la nube",
      basePrice: 2500,
      deliveryTime: "3-4 semanas",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 10H16.74L16 4H8L7.26 10H6C4.9 10 4 10.9 4 12V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V12C20 10.9 19.1 10 18 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 4,
      name: "Implementación de IA",
      description: "Integramos inteligencia artificial en tu negocio",
      basePrice: 3000,
      deliveryTime: "6-8 semanas",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9.5 2A2.5 2.5 0 0 0 7 4.5V5A2.5 2.5 0 0 0 4.5 7.5H4A2.5 2.5 0 0 0 1.5 10V14A2.5 2.5 0 0 0 4 16.5H4.5A2.5 2.5 0 0 0 7 19V19.5A2.5 2.5 0 0 0 9.5 22H14.5A2.5 2.5 0 0 0 17 19.5V19A2.5 2.5 0 0 0 19.5 16.5H20A2.5 2.5 0 0 0 22.5 14V10A2.5 2.5 0 0 0 20 7.5H19.5A2.5 2.5 0 0 0 17 5V4.5A2.5 2.5 0 0 0 14.5 2H9.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 5,
      name: "Soporte Técnico",
      description: "Mantenemos tus sistemas funcionando",
      basePrice: 1200,
      deliveryTime: "1-2 semanas",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3768 21.9119 20.0974 21.9451 19.82 21.92H4.18C3.90347 21.9451 3.62483 21.9119 3.36162 21.8227C3.09841 21.7335 2.85649 21.5901 2.65158 21.4019C2.44668 21.2136 2.28334 20.9845 2.17179 20.7293C2.06024 20.4742 2.00326 20.1985 2.004 19.92V16.92" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 8L12 2L18 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 6,
      name: "Outsourcing IT",
      description: "Externalizamos tus necesidades de IT",
      basePrice: 1800,
      deliveryTime: "2-4 semanas",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const currencies = {
    USD: { symbol: '$', name: 'Dólar Estadounidense', rate: 1 },
    EUR: { symbol: '€', name: 'Euro', rate: 0.85 },
    COP: { symbol: '$', name: 'Peso Colombiano', rate: 4100 },
    MXN: { symbol: '$', name: 'Peso Mexicano', rate: 17.5 },
    GBP: { symbol: '£', name: 'Libra Esterlina', rate: 0.78 }
  };

  const getConvertedPrice = (basePrice) => {
    const rate = currencies[selectedCurrency].rate;
    return Math.round(basePrice * rate);
  };

  const formatPrice = (price) => {
    const symbol = currencies[selectedCurrency].symbol;
    if (selectedCurrency === 'COP') {
      return `${symbol}${price.toLocaleString('es-CO')}`;
    }
    return `${symbol}${price.toLocaleString()}`;
  };

  const subtotal = selectedServices.reduce((sum, serviceId) => {
    const service = servicesData.find(s => s.id === serviceId);
    return sum + getConvertedPrice(service.basePrice);
  }, 0);

  const discountRate = selectedServices.length >= 3 ? 0.05 : 0;
  const discount = subtotal * discountRate;
  const subtotalAfterDiscount = subtotal - discount;
  const taxRate = 0.19;
  const tax = subtotalAfterDiscount * taxRate;
  const total = subtotalAfterDiscount + tax;

  const getEstimatedDeliveryTime = () => {
    if (selectedServices.length === 0) return "N/A";
    
    const deliveryTimes = selectedServices.map(serviceId => {
      const service = servicesData.find(s => s.id === serviceId);
      return service.deliveryTime;
    });

    const maxWeeks = Math.max(...deliveryTimes.map(time => {
      const weeks = time.match(/(\d+)/g);
      return weeks ? Math.max(...weeks.map(Number)) : 0;
    }));

    return `${maxWeeks}+ semanas`;
  };

  const toggleService = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleFormChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitQuote = (e) => {
    e.preventDefault();
    alert('Cotización enviada exitosamente. Nos pondremos en contacto contigo pronto.');
  };

  const handleDownloadPDF = () => {
    if (selectedServices.length === 0) {
      alert('Por favor selecciona al menos un servicio antes de descargar la cotización');
      return;
    }
    
    if (!contactForm.name || !contactForm.email) {
      alert('Por favor completa tu nombre y email antes de descargar la cotización');
      return;
    }

    try {
      const quoteData = {
        selectedServices,
        total,
        subtotal,
        discount,
        tax,
        estimatedDeliveryTime: getEstimatedDeliveryTime(),
        currency: selectedCurrency
      };
      
      downloadQuotePDF(quoteData, contactForm, selectedServices, servicesData, currencies, selectedCurrency);
    } catch (error) {
      console.error('Error generando PDF:', error);
      alert('Error al generar el PDF. Por favor intenta de nuevo.');
    }
  };

  const handleSendEmail = async () => {
    if (selectedServices.length === 0) {
      alert('Por favor selecciona al menos un servicio antes de enviar la cotización');
      return;
    }
    
    if (!contactForm.name || !contactForm.email) {
      alert('Por favor completa tu nombre y email antes de enviar la cotización');
      return;
    }

    setIsLoading(true);

    try {
      const quoteData = {
        selectedServices,
        total,
        subtotal,
        discount,
        tax,
        estimatedDeliveryTime: getEstimatedDeliveryTime(),
        currency: selectedCurrency
      };

      const result = await sendQuoteWithPDF(contactForm, selectedServices, servicesData, currencies, selectedCurrency, quoteData);
      
      if (result.success) {
        alert(result.message);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error enviando email:', error);
      alert('Error al enviar la cotización por correo. Por favor intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormalRequest = () => {
    alert('Funcionalidad de solicitud formal en desarrollo');
  };

  return (
    <div className="quote-container">
      <div className="container-fluid">
        <div className="row">
          {/* Sección Principal */}
          <div className="col-lg-8">
            {/* Header */}
            <motion.div 
              className="quote-header text-center py-5"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-4 fw-bold text-white mb-3">Generar Cotización</h1>
              <p className="lead text-light">
                Selecciona los servicios que necesitas y obtén una cotización personalizada
              </p>
            </motion.div>

            {/* Paso 1: Selección de Servicios */}
            <motion.div 
              className="services-section mb-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="step-header mb-4">
                <h2 className="h3 text-white mb-2">1. Selecciona los Servicios</h2>
                <div className="step-line"></div>
              </div>
              
              <div className="row g-4">
                {servicesData.map((service, index) => (
                  <motion.div 
                    key={service.id} 
                    className="col-md-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <motion.div 
                      className={`service-card ${selectedServices.includes(service.id) ? 'selected' : ''}`}
                      onClick={() => toggleService(service.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="service-icon">
                        {service.icon}
                      </div>
                      <div className="service-content">
                        <h5 className="service-title">{service.name}</h5>
                        <p className="service-description">{service.description}</p>
                        <div className="service-price">
                          {formatPrice(getConvertedPrice(service.basePrice))}
                        </div>
                      </div>
                      <div className="service-checkbox">
                        <div className={`checkbox ${selectedServices.includes(service.id) ? 'checked' : ''}`}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Paso 2: Formulario de Contacto */}
            <motion.div 
              className="contact-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="step-header mb-4">
                <h2 className="h3 text-white mb-2">2. Envía la Cotización</h2>
                <div className="step-line"></div>
              </div>

              <form onSubmit={handleSubmitQuote} className="quote-form">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label text-light">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={contactForm.name}
                      onChange={handleFormChange}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-light">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={contactForm.email}
                      onChange={handleFormChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-light">Teléfono</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleFormChange}
                      placeholder="Tu teléfono"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-light">Empresa</label>
                    <input
                      type="text"
                      className="form-control"
                      name="company"
                      value={contactForm.company}
                      onChange={handleFormChange}
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label text-light">Comentarios</label>
                    <textarea
                      className="form-control"
                      name="comments"
                      value={contactForm.comments}
                      onChange={handleFormChange}
                      rows="4"
                      placeholder="Comentarios adicionales..."
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <motion.button 
                      type="submit"
                      className="btn btn-primary btn-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      ► Enviar Cotización
                    </motion.button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Panel de Resumen */}
          <div className="col-lg-4">
            <motion.div 
              className="quote-summary"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="summary-header">
                <h3 className="text-white mb-3">Resumen de Cotización</h3>
              </div>

              {/* Servicios Seleccionados */}
              <div className="selected-services mb-4">
                {selectedServices.map(serviceId => {
                  const service = servicesData.find(s => s.id === serviceId);
                  return (
                    <div key={serviceId} className="selected-service-item">
                      <span className="service-name">{service.name}</span>
                      <span className="service-price">{formatPrice(getConvertedPrice(service.basePrice))}</span>
                    </div>
                  );
                })}
              </div>

              {/* Cálculos */}
              <div className="calculations mb-4">
                <div className="calc-row">
                  <span>Subtotal:</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="calc-row discount">
                    <span>Descuento (5%):</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="calc-row">
                  <span>IVA (19%):</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                <div className="calc-row total">
                  <span>Total:</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              {/* Tiempo Estimado */}
              <div className="delivery-time mb-4">
                <h5 className="text-white mb-2">Estimación de Tiempo</h5>
                <p className="text-light">{getEstimatedDeliveryTime()}</p>
              </div>

              {/* Selector de Moneda */}
              <div className="currency-selector mb-4">
                <label className="form-label text-light">Moneda</label>
                <select 
                  className="form-select"
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                >
                  {Object.entries(currencies).map(([code, currency]) => (
                    <option key={code} value={code}>
                      {code} - {currency.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Botones de Acción */}
              <div className="action-buttons">
                <motion.button 
                  className="btn btn-outline-primary mb-2"
                  onClick={handleDownloadPDF}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📄 Descargar PDF
                </motion.button>
                <motion.button 
                  className="btn btn-outline-primary mb-2"
                  onClick={handleSendEmail}
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.05 }}
                  whileTap={{ scale: isLoading ? 1 : 0.95 }}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Enviando...
                    </>
                  ) : (
                    '✉️ Enviar por Correo'
                  )}
                </motion.button>
                <motion.button 
                  className="btn btn-primary"
                  onClick={handleFormalRequest}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📋 Solicitar Cotización Formal
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
