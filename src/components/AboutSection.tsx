import React from 'react';
import AboutBackground from './ui/AboutBackground';

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="relative min-h-screen py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#31363f' }}
    >
      <AboutBackground />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 pt-8 md:pt-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Título sobre cuadro */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
              Sobre mí
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-white mb-8">
              La historia detrás del lente
            </h1>
            <div className="w-24 h-px bg-gray-700 mx-auto"></div>
          </div>

          {/* CUADRO TRANSPARENTE #485669 */}
          <div 
            className="rounded-xl p-6 md:p-8 lg:p-10 border border-gray-700/30 shadow-2xl"
            style={{
              backgroundColor: 'rgba(72, 86, 105, 0.82)', // #485669 con 82% opacidad
              backdropFilter: 'blur(6px)',
            }}
          >
            <div className="space-y-6 md:space-y-8">
              <p className="text-gray-200 leading-relaxed text-base md:text-lg lg:text-lg">
                La fotografía es mi forma de estar presente. He viajado por distintos lugares, recorriendo kilómetros que me enseñaron a observar con atención, a leer gestos y miradas, a encontrar en la luz y en las sombras aquello que suele pasar desapercibido.
              </p>
              
              <p className="text-gray-200 leading-relaxed text-base md:text-lg lg:text-lg">
               Trabajo desde lo humano y lo real: personas, momentos y recuerdos que merecen ser guardados. Mis imágenes buscan transmitir la elocuencia de lo simple, capturar instantes fugaces y transformar lo cotidiano en memoria visual..
              </p>

              <p className="text-gray-200 leading-relaxed text-base md:text-lg lg:text-lg">
                Fotografiar es, para mí, una manera de entender la vida y de compartirla a través de la luz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
