import React from 'react';

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#31363f' }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Encabezado Centrado */}
          <div className="text-center mb-16">
            <p className="section-title">Sobre mí</p>
            <h2 className="section-heading">La historia detrás del lente</h2>
            <div className="w-24 h-px bg-gray-600 mx-auto mt-6"></div>
          </div>

          {/* CONTENIDO PRINCIPAL: Dos columnas (Texto + Retrato) */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
            
            {/* COLUMNA IZQUIERDA: EL TEXTO (Tu historia) */}
            <div className="lg:w-7/12 space-y-8">
              <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
                La fotografía es mi forma de estar presente. He viajado por distintos lugares, recorriendo kilómetros que me enseñaron a observar con atención, a leer gestos y miradas, a encontrar en la luz y en las sombras aquello que suele pasar desapercibido.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
                Trabajo desde lo humano y lo real: personas, momentos y recuerdos que merecen ser guardados. Mis imágenes buscan transmitir la elocuencia de lo simple, capturar instantes fugaces y transformar lo cotidiano en memoria visual.
              </p>

              {/* Frase final destacada */}
              <div className="pt-6 border-t border-gray-700/40">
                <p className="text-gray-100 text-2xl md:text-3xl font-serif italic leading-snug">
                  Es mirar con calma y quedarse con lo que importa.
                </p>
              </div>
            </div>

            {/* COLUMNA DERECHA: EL RETRATO REDONDO */}
            <div className="lg:w-5/12 flex justify-center">
              <div className="relative">
                {/* MARCO CIRCULAR con borde sutil y sombra */}
                <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gray-700/30 shadow-2xl">
                  <img
                    src="/images/rodrigo-retrato.jpg" // 👈 **TU FOTO AQUÍ**
                    alt="Rodrigo Montero - Fotógrafo"
                    className="w-full h-full object-cover scale-105" /* scale-105 da un pequeño zoom para mejor encuadre */
                  />
                </div>
                
                {/* Elemento decorativo opcional (puedes quitarlo) */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-amber-500/20 rounded-full"></div>
                <div className="absolute -top-3 -left-3 w-16 h-16 border border-gray-500/30 rounded-full"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
