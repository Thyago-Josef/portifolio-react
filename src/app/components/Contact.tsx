"use client";

import React, { useState, FormEvent } from 'react';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, informe seu nome';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, informe seu email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor, informe um email válido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Por favor, escreva sua mensagem';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'A mensagem deve ter pelo menos 10 caracteres';
    }

    return newErrors;
  };

  const handleBlur = (field: keyof typeof touched) => {
    setTouched({ ...touched, [field]: true });
    const fieldErrors = validate();
    setErrors(fieldErrors);
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (touched[field as keyof typeof touched]) {
      const newErrors = validate();
      setErrors(newErrors);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const fieldErrors = validate();
    setErrors(fieldErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(fieldErrors).length === 0) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTouched({ name: false, email: false, message: false });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="contact-wrapper">
      {/* Links diretos */}
      <div className="contact-direct">
        <h3>Ou entre em contato diretamente</h3>
        <div className="direct-links">
          <a
            href="https://wa.me/55SEUNUMERO"
            target="_blank"
            rel="noopener noreferrer"
            className="direct-link whatsapp"
          >
            <span className="link-icon">💬</span>
            <div className="link-info">
              <span className="link-label">WhatsApp</span>
              <span className="link-value">Enviar mensagem</span>
            </div>
          </a>
          <a
            href="mailto:seu@email.com"
            className="direct-link email"
          >
            <span className="link-icon">📧</span>
            <div className="link-info">
              <span className="link-label">Email</span>
              <span className="link-value">seu@email.com</span>
            </div>
          </a>
          <a
            href="https://linkedin.com/in/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="direct-link linkedin"
          >
            <span className="link-icon">💼</span>
            <div className="link-info">
              <span className="link-label">LinkedIn</span>
              <span className="link-value">Conectar</span>
            </div>
          </a>
        </div>
      </div>

      <div className="contact-divider">
        <span>ou envie uma mensagem</span>
      </div>

      {/* Formulário */}
      <div className="contact-container">
        {submitted && (
          <div className="success-message">
            <span className="success-icon">✓</span>
            Mensagem enviada com sucesso! Retornarei em breve.
          </div>
        )}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className={`form-group ${errors.name && touched.name ? 'has-error' : ''}`}>
            <label htmlFor="name">
              Nome
              {errors.name && touched.name && (
                <span className="error-text">{errors.name}</span>
              )}
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              onBlur={() => handleBlur('name')}
              placeholder="Seu nome completo"
              className={errors.name && touched.name ? 'input-error' : ''}
            />
          </div>

          <div className={`form-group ${errors.email && touched.email ? 'has-error' : ''}`}>
            <label htmlFor="email">
              Email
              {errors.email && touched.email && (
                <span className="error-text">{errors.email}</span>
              )}
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              placeholder="seu@email.com"
              className={errors.email && touched.email ? 'input-error' : ''}
            />
          </div>

          <div className={`form-group ${errors.message && touched.message ? 'has-error' : ''}`}>
            <label htmlFor="message">
              Mensagem
              {errors.message && touched.message && (
                <span className="error-text">{errors.message}</span>
              )}
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              onBlur={() => handleBlur('message')}
              placeholder="Como posso ajudá-lo?"
              rows={5}
              className={errors.message && touched.message ? 'input-error' : ''}
            />
          </div>

          <button type="submit" className="submit-button">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}
