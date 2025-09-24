import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id="contacto" className="py-5">
      <div className="container">
        <motion.div 
          className="row g-4 g-lg-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Sección de Información de Contacto */}
          <motion.div className="col-12 col-lg-6" variants={itemVariants}>
            <motion.h1 
              className="display-4 fw-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ponte en contacto
            </motion.h1>
            <motion.p 
              className="lead text-light mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ¿Necesitas una solución tecnológica para tu empresa? Contáctanos para 
              discutir tu proyecto y recibir una propuesta personalizada.
            </motion.p>
            
            <div className="row g-4">
              <motion.div 
                className="col-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="d-flex align-items-start"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="text-primary me-3"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                  <div>
                    <h5 className="text-white mb-2">Correo Electrónico</h5>
                    <p className="text-light mb-2">Nuestro equipo de soporte responderá en 24 horas.</p>
                    <a href="mailto:info@technovasolutions.com" className="text-primary text-decoration-none">
                      info@technovasolutions.com
                    </a>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                className="col-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="d-flex align-items-start"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="text-primary me-3"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3768 21.9119 20.0974 21.9451 19.82 21.92H4.18C3.90347 21.9451 3.62483 21.9119 3.36162 21.8227C3.09841 21.7335 2.85649 21.5901 2.65158 21.4019C2.44668 21.2136 2.28334 20.9845 2.17179 20.7293C2.06024 20.4742 2.00326 20.1985 2.004 19.92V16.92" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 8L12 2L18 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 2V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                  <div>
                    <h5 className="text-white mb-2">Teléfono</h5>
                    <p className="text-light mb-2">L-V de 9am a 6pm.</p>
                    <a href="tel:+573178219112" className="text-primary text-decoration-none">
                      317 821 9112
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Formulario de Contacto */}
          <motion.div className="col-12 col-lg-6" variants={formVariants}>
            <motion.div 
              className="card bg-dark border-primary"
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <motion.div 
                    className="mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="form-label text-white">Nombre completo</label>
                    <motion.input
                      type="text"
                      className="form-control bg-dark text-white border-secondary"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>

                  <motion.div 
                    className="mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="form-label text-white">Correo electrónico</label>
                    <motion.input
                      type="email"
                      className="form-control bg-dark text-white border-secondary"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>

                  <motion.div 
                    className="mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="phone" className="form-label text-white">Teléfono</label>
                    <motion.input
                      type="tel"
                      className="form-control bg-dark text-white border-secondary"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Tu número de teléfono"
                      required
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>

                  <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="message" className="form-label text-white">Mensaje</label>
                    <motion.textarea
                      className="form-control bg-dark text-white border-secondary"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="¿Cómo podemos ayudarte?"
                      rows="5"
                      required
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    ></motion.textarea>
                  </motion.div>

                  <motion.button 
                    type="submit" 
                    className="btn btn-primary btn-lg w-100"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    viewport={{ once: true }}
                  >
                    Enviar Mensaje
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
