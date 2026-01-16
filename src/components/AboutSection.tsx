import React from 'react';
import AboutBackground from './ui/AboutBackground';

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="relative min-h-screen py-20 md:py-28 overflow-hidden bg-black"
    >
      {/* Fondo con 48 fotos - tamaño original */}
      <AboutBackground />
      
      {/* Contenedor del texto - sobre el fondo */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Solo el título "Sobre mí" - simple */}
          <div className="text-center mb-12 pt-8">
            <h1 className="text-4xl md:text-5xl font-light text-gray-200 mb-4">
              Sobre mí
            </h1>
            <div className="w-24 h-px bg-gray-600 mx-auto"></div>
          </div>

          {/* Texto limpio - sin resaltados */}
          <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-gray-800/30">
            <div className="space-y-6 md:space-y-8">
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                La fotografía es mi manera de vivir más de cerca, de sentir el mundo con la intensidad de un latido. He viajado por lugares que me han dejado memoria en los ojos y en la piel, kilómetros que me enseñaron a observar, a escuchar silencios, a leer gestos y miradas que cuentan historias sin decir una palabra. Cada persona que se cruza en mi camino, cada instante que se detiene ante mi lente, es un pedazo de vida que intento conservar en luz y sombras.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                Mis imágenes buscan la elocuencia de lo invisible: la ternura escondida en un gesto, la fuerza de una mirada, la vibración silenciosa de momentos que pasan y que merecen ser recordados. La luz se convierte en mi lenguaje, las luces y los contrastes me ayudan a transmitir lo que no se puede nombrar, lo que sentimos pero a veces no entendemos. Cada fotografía es un recuerdo que respira, un instante que habla sin voz, un fragmento de mucha vida que se niega a desvanecerse.
              </p>

              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                He aprendido que la belleza está en lo fugaz, en lo pequeño y en lo inesperado. Que un gesto mínimo, una sonrisa, un reflejo de luz sobre una calle, puede contener una eternidad. Por eso mis imágenes buscan capturar eso que la memoria guarda: momentos que nos atraviesan, emociones que nos hacen sentir vivos, lugares que nos marcan y personas que nos enseñan a mirar de otra manera.
              </p>

              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                Fotografiar es para mí un acto de intimidad y de libertad, un diálogo silencioso con la vida y con los que comparten esos instantes conmigo. Es detenerse en la efervescencia de lo cotidiano y transformarla en algo que quede, que conmueva, que emocione y que recuerde que la vida está hecha de gestos, de luces, de recuerdos que merecen ser eternos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
