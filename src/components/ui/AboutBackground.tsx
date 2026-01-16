import React from 'react';

const AboutBackground: React.FC = () => {
  // 48 IMÁGENES - Mix de fotografía artística en blanco y negro/color
  const collageImages = [
    // Primera tanda: 12 originales
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1532635241-17e820acc59f?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&q=80',
    
    // Segunda tanda: 12 nuevas
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1526512340740-9217d0159da9?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop&q=80',
    
    // Tercera tanda: 12 nuevas
    'https://images.unsplash.com/photo-1492681290082-e932832938cf?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1518611507436-f9221403cca2?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1492684223066-e9e2a03c7f4e?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1492681290082-e932832938cf?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1518611507436-f9221403cca2?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1492684223066-e9e2a03c7f4e?w=500&h=500&fit=crop&q=80',
    
    // Cuarta tanda: 12 nuevas
    'https://images.unsplash.com/photo-1514830811107-0b6e89d1cce1?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1532635241-17e820acc59f?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop&q=80',
    'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=500&h=500&fit=crop&q=80',
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-[0.12]">
      {/* Dos grids superpuestos para más densidad */}
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-2 p-2">
        {collageImages.map((src, index) => (
          <div 
            key={`collage-${index}`}
            className="aspect-square overflow-hidden"
            style={{
              animation: `float ${20 + index}s ease-in-out infinite alternate`,
              animationDelay: `${index * 0.3}s`,
            }}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover grayscale-[40%] hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutBackground;
