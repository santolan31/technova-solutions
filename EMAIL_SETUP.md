# Configuración del Servicio de Email

Este documento explica cómo configurar el servicio de envío de emails automático para las cotizaciones.

## Configuración de EmailJS

### 1. Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Verifica tu email

### 2. Configurar el servicio de email
1. En el dashboard de EmailJS, ve a "Email Services"
2. Agrega un nuevo servicio (recomendado: Gmail, Outlook, o SendGrid)
3. Sigue las instrucciones para conectar tu cuenta de email
4. Anota el **Service ID** generado

### 3. Crear templates de email
1. Ve a "Email Templates"
2. Crea un nuevo template llamado "Cotización Cliente"
3. Usa el siguiente template como base:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Cotización Tecnova Solutions</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); color: white; padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
            <h1 style="margin: 0; font-size: 28px;">Tecnova Solutions</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Transformación Digital Empresarial</p>
        </div>
        
        <h2 style="color: #007bff;">Estimado/a {{to_name}},</h2>
        
        <p>Gracias por solicitar una cotización de nuestros servicios. A continuación encontrará el detalle de su solicitud:</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Información del Cliente</h3>
            <p><strong>Nombre:</strong> {{client_name}}</p>
            <p><strong>Email:</strong> {{client_email}}</p>
            <p><strong>Teléfono:</strong> {{client_phone}}</p>
            <p><strong>Empresa:</strong> {{client_company}}</p>
            <p><strong>Comentarios:</strong> {{client_comments}}</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Servicios Solicitados</h3>
            <pre style="white-space: pre-wrap; font-family: Arial, sans-serif;">{{services_list}}</pre>
        </div>
        
        <div style="background: #e7f3ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #007bff;">
            <h3 style="color: #007bff; margin-top: 0;">Resumen de Cotización</h3>
            <p><strong>Subtotal:</strong> {{subtotal}}</p>
            <p><strong>Descuento:</strong> {{discount}}</p>
            <p><strong>IVA (19%):</strong> {{tax}}</p>
            <p style="font-size: 18px; font-weight: bold; color: #007bff;"><strong>Total:</strong> {{total}} {{currency}}</p>
            <p><strong>Tiempo estimado:</strong> {{estimated_delivery}}</p>
        </div>
        
        <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
            <h3 style="color: #856404; margin-top: 0;">Próximos Pasos</h3>
            <p>Nuestro equipo de ventas se pondrá en contacto con usted en las próximas 24 horas para:</p>
            <ul>
                <li>Revisar los detalles de su proyecto</li>
                <li>Proporcionar una cotización formal detallada</li>
                <li>Programar una reunión para discutir sus necesidades</li>
                <li>Responder cualquier pregunta que pueda tener</li>
            </ul>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
            <a href="https://technova.com/contact" style="background: #007bff; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">Contactar Ahora</a>
        </div>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        
        <div style="text-align: center; color: #666; font-size: 14px;">
            <p><strong>Tecnova Solutions</strong></p>
            <p>Email: info@technova.com | Tel: +57 1 234 5678</p>
            <p>Fecha de cotización: {{quote_date}}</p>
        </div>
    </div>
</body>
</html>
```

4. Anota el **Template ID** generado

### 4. Obtener la clave pública
1. Ve a "Account" en tu dashboard
2. En la sección "API Keys", copia tu **Public Key**

### 5. Configurar las variables de entorno
1. Crea un archivo `.env` en la raíz del proyecto
2. Agrega las siguientes variables:

```env
REACT_APP_EMAILJS_SERVICE_ID=tu_service_id_aqui
REACT_APP_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
REACT_APP_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
REACT_APP_COMPANY_EMAIL=ventas@technova.com
REACT_APP_COMPANY_PHONE=+57 1 234 5678
```

### 6. Template para notificación interna (opcional)
Crea un segundo template llamado "Notificación Interna" para que el equipo de ventas reciba notificaciones:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Nueva Solicitud de Cotización</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #007bff;">Nueva Solicitud de Cotización</h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Información del Cliente</h3>
            <p><strong>Nombre:</strong> {{client_name}}</p>
            <p><strong>Email:</strong> {{client_email}}</p>
            <p><strong>Teléfono:</strong> {{client_phone}}</p>
            <p><strong>Empresa:</strong> {{client_company}}</p>
            <p><strong>Comentarios:</strong> {{client_comments}}</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Servicios Solicitados</h3>
            <p>{{services_requested}}</p>
            <p><strong>Total estimado:</strong> {{total_quote}} {{currency}}</p>
        </div>
        
        <div style="background: #d4edda; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745;">
            <p><strong>Fuente:</strong> {{lead_source}}</p>
            <p><strong>Fecha:</strong> {{quote_date}}</p>
        </div>
        
        <p>Por favor, contactar al cliente en las próximas 24 horas.</p>
    </div>
</body>
</html>
```

## Verificación
1. Reinicia el servidor de desarrollo: `npm start`
2. Ve a la página de cotización
3. Completa el formulario y prueba el envío por email
4. Verifica que recibas el email en tu bandeja de entrada

## Limitaciones del plan gratuito
- EmailJS permite 200 emails por mes en el plan gratuito
- Para más volumen, considera actualizar a un plan de pago
- Los emails pueden tardar unos minutos en llegar

## Solución de problemas
- Verifica que todas las variables de entorno estén configuradas correctamente
- Asegúrate de que el template tenga todas las variables necesarias
- Revisa la consola del navegador para errores
- Verifica que el servicio de email esté conectado correctamente en EmailJS
