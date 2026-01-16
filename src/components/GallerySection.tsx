import { useState } from 'react';
import Modal from 'react-modal';

// Configurar modal para accesibilidad
Modal.setAppElement('#root');

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
  
  // RETRATO Y MOMENTOS (tus fotos)
  { id: 4, src: '/images/portfolio/retrato/retrato-1.jpg', category: 'portrait', title: 'Retrato 1' },
  { id: 5, src: '/images/portfolio/retrato/retrato-2.jpg', category: 'portrait', title: 'Retrato 2' },
  { id: 6, src: '/images/portfolio/retrato/retrato-3.jpg', category: 'portrait', title: 'Retrato 3' },
  
  // DOCUMENTAL CULTURAL (tus fotos)
  { id: 7, src: '/images/portfolio/documental/documental-1.jpg', category: 'documentary', title: 'Documental 1' },
  { id: 8, src: '/images/portfolio/documental/documental-2.jpg', category: 'documentary', title: 'Documental 2' },
  { id: 9, src: '/images/portfolio/documental/documental-3.jpg', category: 'documentary', title: 'Documental 3' },
];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredImages = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  const filters: { key: Category; label: string }[] = [
    { key: 'all', label: 'Todo' },
    { key: 'portrait', label: 'Retrato y Momentos' },
    { key: 'documentary', label: 'Documental Cultural' },
    { key: 'events', label: 'Cobertura y Eventos' },
  ];

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeLightbox = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const goToNext = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const goToPrev = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  // Estilos para el modal
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '90vw',
      maxHeight: '90vh',
      padding: '0',
      border: 'none',
      background: 'transparent',
      overflow: 'hidden',
      borderRadius: '8px',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      zIndex: 1000,
    },
  };

  return (
    <>
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
                onClick={() => openLightbox(image)}
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
                    <p className="text-xs text-muted-foreground mt-2">Click para ampliar</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeLightbox}
        style={customStyles}
        contentLabel="Vista ampliada de imagen"
      >
        {selectedImage && (
          <div className="relative">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center"
              aria-label="Cerrar"
            >
              ✕
            </button>
            
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center"
              aria-label="Imagen anterior"
            >
              ‹
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center"
              aria-label="Imagen siguiente"
            >
              ›
            </button>

            <div className="flex flex-col items-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[70vh] object-contain"
              />
              <div className="bg-black/80 text-white p-4 w-full text-center">
                <p className="text-sm uppercase tracking-wider mb-1">{selectedImage.category}</p>
                <p className="text-xl font-serif">{selectedImage.title}</p>
                <p className="text-sm mt-2">{selectedImage.id} de {galleryImages.length}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default GallerySection;
