import { useState } from 'react';

type Category = 'all' | 'portrait' | 'documentary' | 'events';

interface GalleryImage {
  id: number;
  src: string;
  category: Exclude<Category, 'all'>;
  title: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80', category: 'portrait', title: 'Portrait 1' },
  { id: 2, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', category: 'documentary', title: 'Documentary 1' },
  { id: 3, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', category: 'events', title: 'Event 1' },
  { id: 4, src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80', category: 'portrait', title: 'Portrait 2' },
  { id: 5, src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', category: 'documentary', title: 'Documentary 2' },
  { id: 6, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80', category: 'events', title: 'Event 2' },
  { id: 7, src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80', category: 'portrait', title: 'Portrait 3' },
  { id: 8, src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80', category: 'documentary', title: 'Documentary 3' },
  { id: 9, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', category: 'events', title: 'Event 3' },
  { id: 10, src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80', category: 'portrait', title: 'Portrait 4' },
  { id: 11, src: 'https://images.unsplash.com/photo-1518173946687-a4c036bc9c8c?w=600&q=80', category: 'documentary', title: 'Documentary 4' },
  { id: 12, src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80', category: 'events', title: 'Event 4' },
];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filteredImages = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  const filters: { key: Category; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'portrait', label: 'Portrait' },
    { key: 'documentary', label: 'Documentary' },
    { key: 'events', label: 'Events' },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-title">Portfolio</p>
          <h2 className="section-heading">Work</h2>
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
