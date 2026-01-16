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
                La fotografía es mi manera de vivir más de cerca, de sentir el mundo con la intensidad de un latido. He viajado por lugares que me han dejado memoria en los ojos y en la piel, kilómetros que me enseñaron a observar, a escuchar silencios, a leer gestos y miradas que cuentan historias sin decir una palabra. Cada persona que se cruza en mi camino, cada instante que se detiene ante mi lente, es un pedazo de vida que intento conservar en luz y sombras.
              </p>
              
              <p className="text-gray-200 leading-relaxed text-base md:text-lg lg:text-lg">
                Mis imágenes buscan la elocuencia de lo invisible: la ternura escondida en un gesto, la fuerza de una mirada, la vibración silenciosa de momentos que pasan y que merecen ser recordados. La luz se convierte en mi lenguaje, las luces y los contrastes me ayudan a transmitir lo que no se puede nombrar, lo que sentimos pero a veces no entendemos. Cada fotografía es un recuerdo que respira, un instante que habla sin voz, un fragmento de mucha vida que se niega a desvanecerse.
              </p>

              <p className="text-gray-200 leading-relaxed text-base md:text-lg lg:text-lg">
                He aprendido que la belleza está en lo fugaz, en lo pequeño y en lo inesperado. Que un gesto mínimo, una sonrisa, un reflejo de luz sobre una calle, puede contener una eternidad. Por eso mis imágenes buscan capturar eso que la memoria guarda: momentos que nos atraviesan, emociones que nos hacen sentir vivos, lugares que nos marcan y personas que nos enseñan a mirar de otra manera.
              </p>

              <p className="text-gray-200 leading-relaxed text-base md:text-lg lg:text-lg">
                Fotografiar es para mí un acto de intimidad y de libertad, un diálogo silencioso con la vida y con los que comparten esos instantes conmigo. Es detenerse en la efervescencia de lo cotidiano y transformarla en algo que quede, que conmueva, que emocione y que recuerde que la vida está hecha de gestos, de luces, de recuerdos que merecen ser eternos.
              </p>
            </div>

            {/* Línea final dentro del cuadro */}
            <div className="mt-12 pt-8 border-t border-gray-700/40 text-center">
              <p className="text-gray-300 text-sm italic">
                "La fotografía no reproduce lo visible, hace visible lo que no siempre lo es."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
