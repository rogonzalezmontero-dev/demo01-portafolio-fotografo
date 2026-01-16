import React from 'react';
import AboutBackground from './ui/AboutBackground';  // ← IMPORT CORRECTO

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #f8fafc 0%, #f1f5f9 100%)'
      }}
    >
      {/* === FONDO COLLAGE === */}
      <AboutBackground />
      {/* ====================== */}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="section-title text-gray-600 font-semibold text-lg mb-2">
              Sobre mí
            </p>
            <h2 className="section-heading text-3xl md:text-4xl font-bold text-gray-800">
              La historia detrás del lente
            </h2>
          </div>

          {/* Content con fondo semitransparente */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-xl border border-gray-100">
            <div className="space-y-6 text-center md:text-left">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                La fotografía es mi manera de vivir más de cerca, de sentir el mundo con la intensidad de un latido. He viajado por lugares que me han dejado memoria en los ojos y en la piel, kilómetros que me enseñaron a observar, a escuchar silencios, a leer gestos y miradas que cuentan historias sin decir una palabra. Cada persona que se cruza en mi camino, cada instante que se detiene ante mi lente, es un pedazo de vida que intento conservar en luz y sombras.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Mis imágenes buscan la elocuencia de lo invisible: la ternura escondida en un gesto, la fuerza de una mirada, la vibración silenciosa de momentos que pasan y que merecen ser recordados. La luz se convierte en mi lenguaje, las luces y los contrastes me ayudan a transmitir lo que no se puede nombrar, lo que sentimos pero a veces no entendemos. Cada fotografía es un recuerdo que respira, un instante que habla sin voz, un fragmento de mucha vida que se niega a desvanecerse.
              </p>

              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                He aprendido que la belleza está en lo fugaz, en lo pequeño y en lo inesperado. Que un gesto mínimo, una sonrisa, un reflejo de luz sobre una calle, puede contener una eternidad. Por eso mis imágenes buscan capturar eso que la memoria guarda: momentos que nos atraviesan, emociones que nos hacen sentir vivos, lugares que nos marcan y personas que nos enseñan a mirar de otra manera.
              </p>

              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Fotografiar es para mí un acto de intimidad y de libertad, un diálogo silencioso con la vida y con los que comparten esos instantes conmigo. Es detenerse en la efervescencia de lo cotidiano y transformarla en algo que quede, que conmueva, que emocione y que recuerde que la vida está hecha de gestos, de luces, de recuerdos que merecen ser eternos.
              </p>
            </div>
            
            {/* Estadísticas opcionales */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <div className="text-2xl md:text-3xl font-bold text-gray-800">10+</div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>
              <div className="p-4">
                <div className="text-2xl md:text-3xl font-bold text-gray-800">500+</div>
                <div className="text-sm text-gray-600">Eventos cubiertos</div>
              </div>
              <div className="p-4">
                <div className="text-2xl md:text-3xl font-bold text-gray-800">50+</div>
                <div className="text-sm text-gray-600">Países visitados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
