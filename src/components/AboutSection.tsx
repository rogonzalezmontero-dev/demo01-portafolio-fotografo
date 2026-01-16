import React from 'react';
import AboutBackground from './ui/AboutBackground';

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="relative py-24 md:py-32 overflow-hidden bg-black min-h-screen"
    >
      {/* Fondo collage - ya modificado con más opacidad */}
      <div className="absolute inset-0">
        <AboutBackground />
      </div>
      
      {/* Overlay oscuro para mejorar contraste */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-1"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header con tipografía elegante */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-amber-500/70 text-sm font-light tracking-[0.3em] uppercase">
                El Fotógrafo
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
              Rodrigo <span className="font-normal">Montero</span>
            </h1>
            <div className="w-24 h-px bg-amber-500/50 mx-auto"></div>
          </div>

          {/* Content - Tarjeta elegante */}
          <div className="bg-gray-900/60 backdrop-blur-xl rounded-none md:rounded-3xl p-8 md:p-12 border border-gray-800/50 shadow-2xl">
            <div className="space-y-8">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-light text-white mb-4 italic">
                  "La historia detrás del lente"
                </h2>
                <div className="w-16 h-0.5 bg-amber-500/30 mx-auto"></div>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg md:text-xl font-light">
                <span className="text-amber-400/80 font-normal">La fotografía es mi manera de vivir más de cerca</span>, de sentir el mundo con la intensidad de un latido. He viajado por lugares que me han dejado memoria en los ojos y en la piel, kilómetros que me enseñaron a observar, a escuchar silencios, a leer gestos y miradas que cuentan historias sin decir una palabra.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg md:text-xl font-light">
                Mis imágenes buscan <span className="text-white font-normal">la elocuencia de lo invisible</span>: la ternura escondida en un gesto, la fuerza de una mirada, la vibración silenciosa de momentos que pasan y que merecen ser recordados. La luz se convierte en mi lenguaje, los contrastes me ayudan a transmitir lo que no se puede nombrar.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg md:text-xl font-light">
                He aprendido que <span className="italic text-gray-200">la belleza está en lo fugaz</span>, en lo pequeño y en lo inesperado. Que un gesto mínimo, una sonrisa, un reflejo de luz sobre una calle, puede contener una eternidad. Por eso mis imágenes buscan capturar eso que la memoria guarda.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg md:text-xl font-light">
                Fotografiar es para mí <span className="text-amber-400/80">un acto de intimidad y de libertad</span>, un diálogo silencioso con la vida y con los que comparten esos instantes conmigo. Es detenerse en la efervescencia de lo cotidiano y transformarla en algo que quede.
              </p>
            </div>
            
            {/* Separador elegante */}
            <div className="my-12 py-8 border-y border-gray-800/50">
              <div className="text-center">
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-6">
                  En números
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-light text-white mb-2">10<span className="text-amber-500">+</span></div>
                    <div className="text-gray-400 text-sm uppercase tracking-widest">Años capturando</div>
                    <div className="text-gray-500 text-xs mt-1">historias visuales</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-light text-white mb-2">500<span className="text-amber-500">+</span></div>
                    <div className="text-gray-400 text-sm uppercase tracking-widest">Eventos</div>
                    <div className="text-gray-500 text-xs mt-1">momentos únicos</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-light text-white mb-2">50<span className="text-amber-500">+</span></div>
                    <div className="text-gray-400 text-sm uppercase tracking-widest">Países</div>
                    <div className="text-gray-500 text-xs mt-1">miradas diversas</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Firma */}
            <div className="text-center pt-8 border-t border-gray-800/30">
              <p className="text-gray-500 text-sm italic">
                "Cada imagen es un susurro del tiempo, un instante que se niega a desaparecer."
              </p>
              <p className="text-gray-400 text-xs mt-4 tracking-widest">
                RODRIGO MONTERO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
