import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Mensaje enviado! Te contactaremos pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div id="contacto" className="py-5">
      <div className="container">
        <div className="row g-5">
          {/* Sección de Información de Contacto */}
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold text-white mb-4">Ponte en contacto</h1>
            <p className="lead text-light mb-5">
              ¿Necesitas una solución tecnológica para tu empresa? Contáctanos para 
              discutir tu proyecto y recibir una propuesta personalizada.
            </p>
            
            <div className="row g-4">
              <div className="col-12">
                <div className="d-flex align-items-start">
                  <div className="text-primary me-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-white mb-2">Correo Electrónico</h5>
                    <p className="text-light mb-2">Nuestro equipo de soporte responderá en 24 horas.</p>
                    <a href="mailto:info@technovasolutions.com" className="text-primary text-decoration-none">
                      info@technovasolutions.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="d-flex align-items-start">
                  <div className="text-primary me-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3768 21.9119 20.0974 21.9451 19.82 21.92H4.18C3.90347 21.9451 3.62483 21.9119 3.36162 21.8227C3.09841 21.7335 2.85649 21.5901 2.65158 21.4019C2.44668 21.2136 2.28334 20.9845 2.17179 20.7293C2.06024 20.4742 2.00326 20.1985 2.004 19.92V16.92" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 8L12 2L18 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 2V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-white mb-2">Teléfono</h5>
                    <p className="text-light mb-2">L-V de 9am a 6pm.</p>
                    <a href="tel:+573178219112" className="text-primary text-decoration-none">
                      317 821 9112
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="col-lg-6">
            <div className="card bg-dark border-primary">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label text-white">Nombre completo</label>
                    <input
                      type="text"
                      className="form-control bg-dark text-white border-secondary"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-white">Correo electrónico</label>
                    <input
                      type="email"
                      className="form-control bg-dark text-white border-secondary"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label text-white">Teléfono</label>
                    <input
                      type="tel"
                      className="form-control bg-dark text-white border-secondary"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Tu número de teléfono"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label text-white">Mensaje</label>
                    <textarea
                      className="form-control bg-dark text-white border-secondary"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="¿Cómo podemos ayudarte?"
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg w-100">
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
