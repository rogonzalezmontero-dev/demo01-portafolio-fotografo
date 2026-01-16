import React from 'react';

const AboutBackground: React.FC = () => {
  // 12 fotos base de alta calidad (fotografía artística)
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

  // Crear 48 fotos (12 × 4 repeticiones con variaciones)
  const allImages = [];
  for (let i = 0; i < 4; i++) {
    allImages.push(...baseImages);
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-[0.18]"> {/* Opacidad ajustada */}
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 p-3 h-full">
        {allImages.slice(0, 48).map((src, index) => {
          // Variar parámetros para hacer cada foto única
          const rotation = (index % 5) - 2; // -2° a +2°
          const delay = index * 0.12;
          const duration = 20 + (index % 10);
          
          return (
            <div 
              key={index}
              className="aspect-square overflow-hidden"
              style={{
                animation: `float ${duration}s ease-in-out infinite alternate`,
                animationDelay: `${delay}s`,
                transform: `rotate(${rotation}deg)`,
              }}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover grayscale-[30%] brightness-95 hover:grayscale-0 hover:brightness-105 transition-all duration-600"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutBackground;
