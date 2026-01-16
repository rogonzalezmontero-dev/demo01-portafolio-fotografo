import React from 'react';

const AboutBackground: React.FC = () => {
  // Array con las 12 imágenes del collage
  const collageImages = [
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1532635241-17e820acc59f?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=500&h=500&fit=crop',
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-[0.18]">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 p-4 md:p-8">
        {collageImages.map((src, index) => (
          <div 
            key={index}
            className="aspect-square rounded-lg overflow-hidden"
            style={{
              animation: `float ${15 + index * 3}s ease-in-out infinite alternate`,
              transform: `rotate(${index % 2 === 0 ? '-1' : '1'}deg)`,
            }}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutBackground;
