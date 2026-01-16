import { useState } from 'react';

type Category = 'all' | 'portrait' | 'documentary' | 'events';

interface GalleryImage {
  id: number;
  src: string;
  category: Exclude<Category, 'all'>;
  title: string;
}

const galleryImages: GalleryImage[] = [
  // COBERTURA Y EVENTOS (tus 3 fotos)
  { id: 1, src: '/images/portfolio/events/evento-1.jpg', category: 'events', title: 'Evento 1' },
  { id: 2, src: '/images/portfolio/events/evento-2.jpg', category: 'events', title: 'Evento 2' },
  { id: 3, src: '/images/portfolio/events/evento-3.jpg', category: 'events', title: 'Evento 3' },
  
  // RETRATO Y MOMENTOS (placeholder)
  { id: 4, src: '/images/portfolio/retrato/retrato-1.jpg', category: 'portrait', title: 'Retrato 1' },
  { id: 5, src: '/images/portfolio/retrato/retrato-2.jpg', category: 'portrait', title: 'Retrato 2' },
  { id: 6, src: '/images/portfolio/retrato/retrato-3.jpg', category: 'portrait', title: 'Retrato 3' },
  
  // DOCUMENTAL CULTURAL (placeholder)
  { id: 7, src: '/images/portfolio/documental/documental-1.jpg', category: 'documentary', title: 'Documental 1' },
  { id: 8, src: '/images/portfolio/documental/documental-2.jpg', category: 'documentary', title: 'Documental 2' },
  { id: 9, src: '/images/portfolio/documental/documental-3.jpg', category: 'documentary', title: 'Documental 3' },
];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filteredImages = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  const filters: { key: Category; label: string }[] = [
    { key: 'all', label: 'Todo' },
    { key: 'portrait', label: 'Retrato y Momentos' },
    { key: 'documentary', label: 'Documental Cultural' },
    { key: 'events', label: 'Cobertura y Eventos' },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-title">Portfolio</p>
          <h2 className="section-heading">Trabajo</h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item relative aspect-square overflow-hidden cursor-pointer group"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">{image.category}</p>
                  <p className="text-foreground font-serif text-lg">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
