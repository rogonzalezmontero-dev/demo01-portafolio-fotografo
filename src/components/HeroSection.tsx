const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]"
    >
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-6xl mx-auto">
          
          {/* COLUMNA IZQUIERDA: TU FOTO */}
          <div className="lg:w-5/12 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              <div className="overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl border border-gray-800">
                <img
                  src="/images/rodrigo-inicio.jpg"
                  alt="Rodrigo Montero - Fotógrafo trabajando"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              {/* Elemento decorativo */}
              <div className="absolute -top-3 -right-3 w-20 h-20 border-2 border-amber-500/20 rounded-full hidden lg:block"></div>
            </div>
          </div>

          {/* COLUMNA DERECHA: TEXTO ALINEADO A LA DERECHA */}
          <div className="lg:w-7/12">
            <div className="animate-fade-up text-right lg:text-right"> {/* 👈 TEXTO A LA DERECHA */}
              
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-8">
                Fotografía Profesional
              </p>
              
              {/* Texto alineado a la derecha */}
              <div className="space-y-5 text-gray-300">
                <p className="text-lg leading-relaxed text-right">
                  Fotografiar es detener la luz antes de que se vuelva olvido.
                </p>
                <p className="text-lg leading-relaxed text-right">
                  En cada imagen busco gestos mínimos, esos que sostienen la memoria cuando los recuerdos comienzan a desvanecerse.
                </p>
                <p className="text-lg leading-relaxed text-right">
                  Mi mirada se posa en lo que ocurre una sola vez: instantes de vida que aún respiran, un rostro, un encuentro, una escena cotidiana que insiste en quedarse.
                </p>
                <p className="text-lg leading-relaxed text-right">
                  La cámara se vuelve entonces un viaje silencioso, donde la luz revela lo que el tiempo intenta borrar y cada fotografía guarda la forma íntima de un recuerdo.
                </p>
              </div>

              {/* Frase destacada (alineada a la derecha) */}
              <p className="font-serif text-xl md:text-2xl italic text-gray-100 mt-8 mb-4 leading-snug text-right">
                Porque algunas imágenes no se miran: se recuerdan.
              </p>
              
              {/* Firma (alineada a la derecha) */}
              <p className="text-sm text-gray-500 tracking-wider mt-6 text-right">
                — Rodrigo
              </p>
            </div>
            
            {/* Botón (alineado a la derecha) */}
            <div className="animate-fade-up mt-10 text-right" style={{ animationDelay: '0.4s' }}>
              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block px-8 py-3 border border-gray-600 text-xs uppercase tracking-[0.2em] text-gray-300 hover:bg-gray-300 hover:text-gray-900 transition-all duration-300"
              >
                Ver trabajos
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
