import React, { useEffect, useState } from 'react';

const AboutBackground: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // 12 fotos base de alta calidad
  const baseImages = [
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=800&fit=crop&q=90',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=800&fit=crop&q=90',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop&q=90',
    'https://images.unsplash.com/photo-1532635241-17e820acc59f?w=800&h=800&fit=crop&q=90',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&q=90',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=800&fit=crop&q=90',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=800&fit=crop&q=90',
    'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&h=800&fit=crop&q=90',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=800&fit=crop&q=90',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=800&fit=crop&q=90',
    'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=800&h=800&fit=crop&q=90',
    'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=800&h=800&fit=crop&q=90',
  ];

  // Crear arrays según dispositivo
  const desktopImages: string[] = [];
  const mobileImages: string[] = [];
  
  // Desktop: 48 fotos (12 × 4)
  for (let i = 0; i < 4; i++) {
    desktopImages.push(...baseImages);
  }
  
  // Móvil: 36 fotos (12 × 3)
  for (let i = 0; i < 3; i++) {
    mobileImages.push(...baseImages);
  }
  
  const imagesToShow = isMobile ? mobileImages : desktopImages;

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid RESPONSIVE: menos columnas en móvil */}
      <div className={`h-full w-full grid ${
        isMobile 
          ? 'grid-cols-2 sm:grid-cols-3 gap-1 p-1' // Móvil: 2-3 columnas
          : 'grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-1.5 md:gap-2 p-2 md:p-3' // Desktop: 4-8 columnas
      }`}>
        {imagesToShow.map((src, index) => {
          // Animaciones más lentas en desktop
          const duration = isMobile ? 20 + (index % 6) : 25 + (index % 10);
          const floatHeight = isMobile ? 6 : 10;
          const rotation = (index % 5) - 2; // -2° a +2°
          
          return (
            <div 
              key={index}
              className="aspect-square overflow-hidden relative"
              style={{
                animation: `float ${duration}s ease-in-out infinite alternate`,
                animationDelay: `${index * (isMobile ? 0.12 : 0.08)}s`,
                transform: `rotate(${rotation}deg)`,
              }}
            >
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/10 z-1"></div>
              
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover grayscale-[20%] brightness-92 hover:grayscale-0 hover:brightness-105 transition-all duration-500"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
      
      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 via-transparent to-gray-900/25 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/15 via-transparent to-gray-900/15 pointer-events-none"></div>
    </div>
  );
};

export default AboutBackground;
