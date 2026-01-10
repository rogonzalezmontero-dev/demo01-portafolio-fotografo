const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80"
          alt="Photography background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="animate-fade-up">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
            Fotografía Profesional
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
            Fotografiar es detener la luz antes de que se vuelva olvido.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
            En cada imagen busco gestos mínimos, esos que sostienen la memoria cuando los recuerdos comienzan a desvanecerse.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
            Mi mirada se posa en lo que ocurre una sola vez: instantes de vida que aún respiran, un rostro, un encuentro, una escena cotidiana que insiste en quedarse.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
            La cámara se vuelve entonces un viaje silencioso, donde la luz revela lo que el tiempo intenta borrar y cada fotografía guarda la forma íntima de un recuerdo.
          </p>
          <p className="font-serif text-lg md:text-xl italic text-foreground mt-6 mb-4">
            Porque algunas imágenes no se miran: se recuerdan.
          </p>
          <p className="text-sm text-muted-foreground tracking-wider">
            — Rodrigo
          </p>
        </div>
        <div className="animate-fade-up mt-10" style={{ animationDelay: '0.4s' }}>
          <a
            href="#gallery"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-8 py-3 border border-foreground/30 text-xs uppercase tracking-[0.2em] text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Ver trabajos
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
