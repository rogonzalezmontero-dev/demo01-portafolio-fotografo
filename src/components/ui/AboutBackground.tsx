import React from 'react';

const AboutBackground: React.FC = () => {
  // 48 fotos - tamaño original como cuando eran 12
  const collageImages = [
    // Categoría 1: Eventos y Cobertura (16 fotos)
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1532635241-17e820acc59f?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1492684223066-e9e2a03c7f4e?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1526512340740-9217d0159da9?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1492681290082-e932832938cf?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1518611507436-f9221403cca2?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1514830811107-0b6e89d1cce1?w=600&h=600&fit=crop',
    
    // Categoría 2: Retrato y Momentos (16 fotos)
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=600&h=600&fit=crop',
    
    // Categoría 3: Documental Cultural (16 fotos)
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1492681290082-e932832938cf?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1518611507436-f9221403cca2?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=600&fit=crop',
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-[0.10]">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 p-4 h-full">
        {collageImages.map((src, index) => (
          <div 
            key={index}
            className="aspect-square overflow-hidden rounded-md"
            style={{
              animation: `float ${15 + index * 2}s ease-in-out infinite alternate`,
              transform: `rotate(${index % 3 === 0 ? '-1' : index % 3 === 1 ? '0' : '1'}deg)`,
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover grayscale-[35%] hover:grayscale-0 transition-all duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutBackground;
