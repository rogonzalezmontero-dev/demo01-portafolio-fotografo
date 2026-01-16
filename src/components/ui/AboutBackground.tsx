import React from 'react';

const AboutBackground: React.FC = () => {
  // 48 fotos REALES - corregido
  const collageImages = [
    // Repetir estas 12 imágenes 4 veces para tener 48
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=700&h=700&fit=crop&q=85',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=700&h=700&fit=crop&q=85',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=700&fit=crop&q=85',
    'https://images.unsplash.com/photo-1532635241-17e820acc59f?w=700&h=700&fit=crop&q=85',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&h=700&fit=crop&q=85',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&h=700&fit=crop&q=85',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=700&h=700&fit=crop&q=85',
    'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=700&h=700&fit=crop&q=85',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=700&h=700&fit=crop&q=85',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&h=700&fit=crop&q=85',
    'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=700&h=700&fit=crop&q=85',
    'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=700&h=700&fit=crop&q=85',
  ];

  // Crear 48 fotos (12 × 4)
  const allImages = [];
  for (let i = 0; i < 4; i++) {
    allImages.push(...collageImages);
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-[0.25]">
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 p-3 h-full">
        {allImages.slice(0, 48).map((src, index) => (
          <div 
            key={index}
            className="aspect-square overflow-hidden"
            style={{
              animation: `float ${15 + index}s ease-in-out infinite alternate`,
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover grayscale-[25%] brightness-90 hover:grayscale-0 hover:brightness-110 transition-all duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutBackground;
