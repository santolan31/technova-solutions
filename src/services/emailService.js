import emailjs from '@emailjs/browser';

// Configuración de EmailJS (estos valores deben ser configurados en el archivo .env)
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_technova';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_quote';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'your_public_key';

// Inicializar EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export const sendQuoteEmail = async (contactForm, selectedServices, servicesData, currencies, selectedCurrency, quoteData) => {
  try {
    // Validar datos requeridos
    if (!contactForm.email || !contactForm.name) {
      throw new Error('Email y nombre son requeridos');
    }

    if (selectedServices.length === 0) {
      throw new Error('Debe seleccionar al menos un servicio');
    }

    // Formatear servicios para el email
    const servicesText = selectedServices.map(serviceId => {
      const service = servicesData.find(s => s.id === serviceId);
      if (service) {
        const price = getConvertedPrice(service.basePrice, currencies, selectedCurrency);
        return `• ${service.name}: ${formatPrice(price, currencies, selectedCurrency)}`;
      }
      return null;
    }).filter(Boolean).join('\n');

    // Preparar template del email
    const templateParams = {
      to_email: contactForm.email,
      to_name: contactForm.name,
      client_name: contactForm.name,
      client_email: contactForm.email,
      client_phone: contactForm.phone || 'No especificado',
      client_company: contactForm.company || 'No especificado',
      client_comments: contactForm.comments || 'Sin comentarios adicionales',
      services_list: servicesText,
      subtotal: formatPrice(quoteData.subtotal, currencies, selectedCurrency),
      discount: quoteData.discount > 0 ? formatPrice(quoteData.discount, currencies, selectedCurrency) : 'No aplica',
      tax: formatPrice(quoteData.tax, currencies, selectedCurrency),
      total: formatPrice(quoteData.total, currencies, selectedCurrency),
      currency: currencies[selectedCurrency].name,
      estimated_delivery: quoteData.estimatedDeliveryTime,
      quote_date: new Date().toLocaleDateString('es-ES'),
      company_name: 'Tecnova Solutions'
    };

    // Enviar email
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email enviado exitosamente:', response);
    return { success: true, message: 'Cotización enviada por correo exitosamente' };

  } catch (error) {
    console.error('Error enviando email:', error);
    return { 
      success: false, 
      message: 'Error al enviar la cotización por correo. Por favor intenta de nuevo.' 
    };
  }
};

// Función auxiliar para formatear precios
const formatPrice = (price, currencies, selectedCurrency) => {
  const symbol = currencies[selectedCurrency].symbol;
  if (selectedCurrency === 'COP') {
    return `${symbol}${price.toLocaleString('es-CO')}`;
  }
  return `${symbol}${price.toLocaleString()}`;
};

// Función auxiliar para obtener precio convertido
const getConvertedPrice = (basePrice, currencies, selectedCurrency) => {
  const rate = currencies[selectedCurrency].rate;
  return Math.round(basePrice * rate);
};

// Función para enviar notificación interna a la empresa
export const sendInternalNotification = async (contactForm, selectedServices, servicesData, quoteData) => {
  try {
    const servicesText = selectedServices.map(serviceId => {
      const service = servicesData.find(s => s.id === serviceId);
      return service ? service.name : null;
    }).filter(Boolean).join(', ');

    const templateParams = {
      to_email: 'ventas@technova.com', // Email interno de la empresa
      to_name: 'Equipo de Ventas',
      client_name: contactForm.name,
      client_email: contactForm.email,
      client_phone: contactForm.phone || 'No especificado',
      client_company: contactForm.company || 'No especificado',
      client_comments: contactForm.comments || 'Sin comentarios adicionales',
      services_requested: servicesText,
      total_quote: quoteData.total,
      currency: quoteData.currency,
      quote_date: new Date().toLocaleDateString('es-ES'),
      lead_source: 'Sitio Web - Formulario de Cotización'
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_internal_notification', // Template diferente para notificación interna
      templateParams
    );

    console.log('Notificación interna enviada:', response);
    return { success: true };

  } catch (error) {
    console.error('Error enviando notificación interna:', error);
    return { success: false };
  }
};

// Función para enviar cotización con PDF adjunto (simulación)
export const sendQuoteWithPDF = async (contactForm, selectedServices, servicesData, currencies, selectedCurrency, quoteData) => {
  try {
    // Primero enviar el email con la cotización
    const emailResult = await sendQuoteEmail(contactForm, selectedServices, servicesData, currencies, selectedCurrency, quoteData);
    
    if (emailResult.success) {
      // Enviar notificación interna
      await sendInternalNotification(contactForm, selectedServices, servicesData, quoteData);
      
      return {
        success: true,
        message: 'Cotización enviada por correo exitosamente. También se ha enviado una notificación a nuestro equipo de ventas.'
      };
    }
    
    return emailResult;

  } catch (error) {
    console.error('Error en envío completo:', error);
    return { 
      success: false, 
      message: 'Error al enviar la cotización. Por favor intenta de nuevo.' 
    };
  }
};
