import jsPDF from 'jspdf';

export const generateQuotePDF = (quoteData, contactForm, selectedServices, servicesData, currencies, selectedCurrency) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPosition = 20;

  // Función para formatear precios
  const formatPrice = (price) => {
    const symbol = currencies[selectedCurrency].symbol;
    if (selectedCurrency === 'COP') {
      return `${symbol}${price.toLocaleString('es-CO')}`;
    }
    return `${symbol}${price.toLocaleString()}`;
  };

  // Función para obtener precio convertido
  const getConvertedPrice = (basePrice) => {
    const rate = currencies[selectedCurrency].rate;
    return Math.round(basePrice * rate);
  };

  // Header
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('COTIZACIÓN TECNOVA SOLUTIONS', pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 15;

  // Logo/Company Info
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Transformación Digital Empresarial', pageWidth / 2, yPosition, { align: 'center' });
  doc.text('Email: info@technova.com | Tel: +57 1 234 5678', pageWidth / 2, yPosition + 5, { align: 'center' });
  yPosition += 20;

  // Línea separadora
  doc.setDrawColor(0, 123, 255);
  doc.setLineWidth(0.5);
  doc.line(20, yPosition, pageWidth - 20, yPosition);
  yPosition += 10;

  // Información del cliente
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('INFORMACIÓN DEL CLIENTE', 20, yPosition);
  yPosition += 10;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`Nombre: ${contactForm.name}`, 20, yPosition);
  doc.text(`Email: ${contactForm.email}`, pageWidth / 2, yPosition);
  yPosition += 6;
  
  doc.text(`Teléfono: ${contactForm.phone || 'No especificado'}`, 20, yPosition);
  doc.text(`Empresa: ${contactForm.company || 'No especificado'}`, pageWidth / 2, yPosition);
  yPosition += 10;

  if (contactForm.comments) {
    doc.text(`Comentarios: ${contactForm.comments}`, 20, yPosition);
    yPosition += 10;
  }

  // Servicios cotizados
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('SERVICIOS COTIZADOS', 20, yPosition);
  yPosition += 10;

  // Tabla de servicios
  const tableTop = yPosition;
  const colWidths = [100, 50, 40];
  const startX = 20;

  // Headers de la tabla
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('Servicio', startX, tableTop);
  doc.text('Descripción', startX + colWidths[0], tableTop);
  doc.text('Precio', startX + colWidths[0] + colWidths[1], tableTop);

  yPosition = tableTop + 8;

  // Línea de header
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.3);
  doc.line(startX, tableTop + 3, startX + colWidths[0] + colWidths[1] + colWidths[2], tableTop + 3);

  // Servicios seleccionados
  doc.setFont('helvetica', 'normal');
  let subtotal = 0;

  selectedServices.forEach(serviceId => {
    const service = servicesData.find(s => s.id === serviceId);
    if (service) {
      const price = getConvertedPrice(service.basePrice);
      subtotal += price;

      // Verificar si necesitamos nueva página
      if (yPosition > pageHeight - 30) {
        doc.addPage();
        yPosition = 20;
      }

      // Nombre del servicio (puede ser largo, así que lo truncamos)
      let serviceName = service.name;
      if (serviceName.length > 25) {
        serviceName = serviceName.substring(0, 22) + '...';
      }

      doc.text(serviceName, startX, yPosition);
      doc.text(service.description.substring(0, 30) + '...', startX + colWidths[0], yPosition);
      doc.text(formatPrice(price), startX + colWidths[0] + colWidths[1], yPosition);
      yPosition += 6;
    }
  });

  yPosition += 10;

  // Cálculos
  const discountRate = selectedServices.length >= 3 ? 0.05 : 0;
  const discount = subtotal * discountRate;
  const subtotalAfterDiscount = subtotal - discount;
  const taxRate = 0.19;
  const tax = subtotalAfterDiscount * taxRate;
  const total = subtotalAfterDiscount + tax;

  // Línea separadora antes de totales
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.3);
  doc.line(startX, yPosition - 2, startX + colWidths[0] + colWidths[1] + colWidths[2], yPosition - 2);
  yPosition += 5;

  // Subtotal
  doc.text('Subtotal:', startX + colWidths[0] + colWidths[1] - 30, yPosition);
  doc.text(formatPrice(subtotal), startX + colWidths[0] + colWidths[1], yPosition);
  yPosition += 6;

  // Descuento
  if (discount > 0) {
    doc.text('Descuento (5%):', startX + colWidths[0] + colWidths[1] - 30, yPosition);
    doc.text(`-${formatPrice(discount)}`, startX + colWidths[0] + colWidths[1], yPosition);
    yPosition += 6;
  }

  // IVA
  doc.text('IVA (19%):', startX + colWidths[0] + colWidths[1] - 30, yPosition);
  doc.text(formatPrice(tax), startX + colWidths[0] + colWidths[1], yPosition);
  yPosition += 8;

  // Total
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('TOTAL:', startX + colWidths[0] + colWidths[1] - 30, yPosition);
  doc.text(formatPrice(total), startX + colWidths[0] + colWidths[1], yPosition);

  yPosition += 20;

  // Tiempo estimado
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('TIEMPO ESTIMADO DE ENTREGA:', 20, yPosition);
  yPosition += 6;
  doc.setFont('helvetica', 'normal');
  
  if (selectedServices.length > 0) {
    const deliveryTimes = selectedServices.map(serviceId => {
      const service = servicesData.find(s => s.id === serviceId);
      return service.deliveryTime;
    });

    const maxWeeks = Math.max(...deliveryTimes.map(time => {
      const weeks = time.match(/(\d+)/g);
      return weeks ? Math.max(...weeks.map(Number)) : 0;
    }));

    doc.text(`${maxWeeks}+ semanas`, 20, yPosition);
  } else {
    doc.text('N/A', 20, yPosition);
  }

  yPosition += 15;

  // Términos y condiciones
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('TÉRMINOS Y CONDICIONES:', 20, yPosition);
  yPosition += 6;
  doc.setFont('helvetica', 'normal');
  
  const terms = [
    '• Esta cotización tiene una validez de 30 días.',
    '• Los precios están expresados en ' + currencies[selectedCurrency].name + '.',
    '• El tiempo de entrega es estimado y puede variar según la complejidad del proyecto.',
    '• Se requiere el 50% de adelanto para iniciar el proyecto.',
    '• Los términos de pago son negociables según el alcance del proyecto.'
  ];

  terms.forEach(term => {
    if (yPosition > pageHeight - 20) {
      doc.addPage();
      yPosition = 20;
    }
    doc.text(term, 20, yPosition);
    yPosition += 5;
  });

  // Footer
  const footerY = pageHeight - 15;
  doc.setFontSize(8);
  doc.setFont('helvetica', 'italic');
  doc.text('Tecnova Solutions - Transformación Digital Empresarial', pageWidth / 2, footerY, { align: 'center' });
  doc.text('Fecha de cotización: ' + new Date().toLocaleDateString('es-ES'), pageWidth / 2, footerY + 5, { align: 'center' });

  return doc;
};

export const downloadQuotePDF = (quoteData, contactForm, selectedServices, servicesData, currencies, selectedCurrency) => {
  const doc = generateQuotePDF(quoteData, contactForm, selectedServices, servicesData, currencies, selectedCurrency);
  
  // Generar nombre de archivo
  const timestamp = new Date().toISOString().split('T')[0];
  const clientName = contactForm.name.replace(/\s+/g, '_').toLowerCase();
  const filename = `cotizacion_${clientName}_${timestamp}.pdf`;
  
  // Descargar el PDF
  doc.save(filename);
};
