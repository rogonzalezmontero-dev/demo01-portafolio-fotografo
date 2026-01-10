const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                  alt="Rodrigo Montero - Fotógrafo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-serif text-lg">15+</span>
                <span className="text-accent-foreground text-xs ml-1">años</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left">
            <p className="section-title">Sobre mí</p>
            <h2 className="section-heading mb-8">La historia detrás<br />del lente</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-semibold text-foreground mb-3 uppercase tracking-wider">Biografía y trayectoria</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your biography and career highlights will be displayed here in the final version. This section will showcase your professional journey, achievements, and the unique perspective you bring to every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
