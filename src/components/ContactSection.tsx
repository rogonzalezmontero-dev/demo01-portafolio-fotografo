import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/mvzzzzja', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nuevo mensaje de ${formData.name} - Portfolio Fotográfico`,
        }),
      });

      if (response.ok) {
        alert('¡Mensaje enviado! Te responderé pronto.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Error al enviar. Por favor intenta nuevamente.');
      }
    } catch (error) {
      alert('Error de conexión. Por favor intenta más tarde.');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-title">Contacto</p>
          <h2 className="section-heading">Dale luz al instante</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="contact-input"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Tu e-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="contact-input"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Escribe tu mensaje"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="contact-input resize-none"
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Contact Info - ADAPTADO SIN ESPACIOS VACÍOS */}
          <div className="flex flex-col justify-center">
            {/* Todo en un solo bloque compacto */}
            <div className="space-y-8">
              {/* Email */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 uppercase tracking-wider">Escríbeme</h3>
                <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg border border-border">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a 
                    href="mailto:contacto@rodrigomonterophoto.com" 
                    className="text-muted-foreground hover:text-foreground transition-colors break-all"
                  >
                    contacto@rodrigomonterophoto.com
                  </a>
                </div>
              </div>

              {/* Redes Sociales */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 uppercase tracking-wider">Conectemos</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com/r0drig.m" 
                    className="social-icon hover:bg-[#E1306C]/10 hover:border-[#E1306C]/30 hover:text-[#E1306C]" 
                    aria-label="Instagram" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="social-icon hover:bg-[#1877F2]/10 hover:border-[#1877F2]/30 hover:text-[#1877F2]" 
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
