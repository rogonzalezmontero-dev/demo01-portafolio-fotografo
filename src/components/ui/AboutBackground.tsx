import React, { useEffect, useState } from 'react';

const AboutBackground: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  
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

  // Desktop: 48 fotos, Móvil: 36 fotos
  const desktopImages: string[] = [];
  const mobileImages: string[] = [];
  
  for (let i = 0; i < 4; i++) desktopImages.push(...baseImages);
  for (let i = 0; i < 3; i++) mobileImages.push(...baseImages);
  
  const imagesToShow = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* FOTOS MUY OSCURECIDAS - como tu referencia */}
      <div className={`h-full w-full grid ${
        isMobile 
          ? 'grid-cols-2 sm:grid-cols-3 gap-0.5 p-0.5'
          : 'grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-1 p-1'
      }`}>
        {imagesToShow.map((src, index) => (
          <div 
            key={index}
            className="aspect-square overflow-hidden relative"
            style={{
              animation: `float ${20 + (index % 10)}s ease-in-out infinite alternate`,
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {/* CAPA OSCURA ENCIMA DE CADA FOTO */}
            <div className="absolute inset-0 bg-black/70 z-10"></div>
            
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover grayscale-[40%] brightness-75 opacity-60" // MÁS OSCURO
              loading="lazy"
            />
          </div>
        ))}
      </div>
      
      {/* OVERLAY GENERAL PARA OSCURECER MÁS */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none"></div>
    </div>
  );
};

export default AboutBackground;
