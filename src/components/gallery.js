import React from 'react';

import ImageGallery from './image-gallery';

const images2 = [
  {
    imageName: '1-ramas-fotografia-paisaje-chile-playa-diseño-deco-contemporaryart-artwork-arte-print-finart.jpg',
    isGallery: true,
    width: 392,
    size: 1,
    gallery: [
      '1-ramas-fotografia-paisaje-chile-playa-diseno-deco-contemporaryart-artwork-arte-print-finart.jpg',
      '2-retrato-fotografia-paisaje-chile-diseno-deco-contemporaryart-artwork-arte-print-finart-dos.jpg',
      '3-retrato-autorretrato-fotografia-chile-diseno-deco-contemporaryart-artwork-cuerpo--escritura-arte-print-finart.jpg',
      '4-retrato-autorretrato-fotografia-chile-diseno-deco-contemporaryart-artwork-cuerpo--escritura-arte-print-finart.jpg',
    ],
  },
  {
    imageName: '5-5-retrato-autorretrato-fotografia-chile-diseno-deco-contemporaryart-artwork-cuerpo--escritura-arte-print-finart.jpg',
    isGallery: false,
    width: 1174,
    size: 2,
    gallery: [],
  },
  {
    imageName: '6-retrato-autorretrato-fotografia-chile-diseno-deco-contemporaryart-artwork-cuerpo--escritura-arte-print-finart.jpg',
    isGallery: false,
    width: 392,
    size: 1,
    gallery: [],
  },
  {
    imageName: '7-retrato-autorretrato-fotografia-chile-diseno-deco-contemporaryart-artwork-cuerpo--escritura-arte-print-finart.jpg',
    isGallery: false,
    width: 392,
    size: 1,
    gallery: [],
  },
  {
    imageName: '8-retrato-autorretrato-fotografia-chile-diseno-deco-contemporaryart-artwork-cuerpo--escritura-arte-print-finart.jpg',
    isGallery: true,
    width: 392,
    size: 1,
    gallery: [
      '8-retrato-autorretrato-fotografia-chile-diseno-deco-contemporaryart-artwork-cuerpo--escritura-arte-print-finart.jpg',
      '9-retrato-autorretrato-fotografia-chile-diseno-deco-contemporaryart-artwork-cuerpo--escritura-arte-print-finart.jpg',
      '10-retrato-autorretrato-fotografia-chile-diseno-deco-contemporaryart-artwork-cuerpo--escritura-arte-print-finart.jpg',
    ],
  },
  {
    imageName: '11-retrato-autorretrato-fotografia-chile-diseno-deco-contemporaryart-artwork-cuerpo--escritura-arte-print-finart.jpg',
    isGallery: false,
    width: 392,
    size: 1,
    gallery: [],
  },
  {
    imageName: '12-retrato-autorretrato-fotografia-chile-diseno-deco-contemporaryart-artwork-cuerpo--escritura-arte-print-finart.jpg',
    isGallery: false,
    width: 392,
    size: 1,
    gallery: [],
  },
  {
    imageName: '13-retrato-autorretrato-fotografia-chile-diseno-deco-contemporaryart-artwork-cuerpo--escritura-arte-print-finart.jpg',
    isGallery: true,
    width: 392,
    size: 1,
    gallery: [
      '13-retrato-autorretrato-fotografia-chile-diseno-deco-contemporaryart-artwork-cuerpo--escritura-arte-print-finart.jpg',
      '14-retrato-autorretrato-fotografia-chile-diseno-deco-contemporaryart-artwork-cuerpo--escritura-arte-print-finart.jpg',
    ],
  },
  {
    imageName: '15-retrato-autorretrato-fotografia-chile-diseno-deco-contemporaryart-artwork-cuerpo--escritura-arte-print-finart.jpg',
    isGallery: false,
    width: 392,
    size: 1,
    gallery: [],
  },
  {
    imageName: '16-retrato-autorretrato-fotografia-chile-diseno-deco-contemporaryart-artwork-cuerpo--escritura-arte-print-finart.jpg',
    isGallery: false,
    width: 392,
    size: 1,
    gallery: [],
  },
  {
    imageName: '17-retrato-autorretrato-fotografia-chile-diseno-deco-contemporaryart-artwork-cuerpo--escritura-arte-print-finart.jpg',
    isGallery: false,
    width: 392,
    size: 1,
    gallery: [],
  },
  {
    imageName: '18-retrato-autorretrato-fotografia-chile-diseno-deco-contemporaryart-artwork-cuerpo--escritura-arte-print-finart.jpg',
    isGallery: false,
    width: 392,
    size: 1,
    gallery: [],
  },
  {
    imageName: '19-retrato-lavado-autorretrato-fotografia-chile-diseno-deco-contemporaryart-artwork-cuerpo--escritura-arte-print-finart.jpg',
    isGallery: false,
    width: 392,
    size: 1,
    gallery: [],
  },
  {
    imageName: '20-retrato-fotografia-paisaje-chile-diseno-deco-contemporaryart-artwork-arte-print-finart.jpg',
    isGallery: false,
    width: 389,
    size: 4,
    gallery: [],
  },
  {
    imageName: '21-retrato-fotografia-paisaje-chile-diseno-deco-contemporaryart-artwork-arte-print-finart.jpg',
    isGallery: false,
    width: 389,
    size: 4,
    gallery: [],
  },
  {
    imageName: '22-retrato-fotografia-paisaje-chile-diseno-deco-contemporaryart-artwork-arte-print-finart.jpg',
    isGallery: false,
    width: 389,
    size: 4,
    gallery: [],
  },
  {
    imageName: '23-puente-cusco-fotografia-paisaje-chile-playa-diseno-deco-contemporaryart-artwork-arte-print-finart.jpg',
    isGallery: false,
    width: 879,
    size: 3,
    gallery: [],
  },
  {
    imageName: '24-cusco-fotografia-paisaje-chile-playa-diseno-deco-contemporaryart-artwork-arte-print-finart.jpg',
    isGallery: false,
    width: 392,
    size: 1,
    gallery: [],
  },
  {
    imageName: '25-capilano-vancouver-fotografia-paisaje-chile-rio-diseno-deco-contemporaryart-artwork-arte-print-finart.jpg',
    isGallery: false,
    width: 389,
    size: 4,
    gallery: [],
  },
  {
    imageName: '26-ramas-fotografia-paisaje-chile-playa-diseno-deco-contemporaryart-artwork-arte-print-finart',
    isGallery: false,
    width: 879,
    size: 3,
    gallery: [],
  },
  {
    imageName: '27-tajamar-fotografia-paisaje-chile-playa-diseno-deco-contemporaryart-artwork-arte-print-finart.jpg',
    isGallery: false,
    width: 879,
    size: 3,
    gallery: [],
  },
  {
    imageName: '28-playa-vancouver-fotografia-paisaje-chile-playa-diseno-deco-contemporaryart-artwork-arte-print-finart.jpg',
    isGallery: false,
    width: 389,
    size: 4,
    gallery: [],
  },
  {
    imageName: '29-punta-arenas-fotografia-paisaje-chile-playa-diseno-deco-contemporaryart-artwork-arte-print-finart.jpg',
    isGallery: false,
    width: 879,
    size: 3,
    gallery: [],
  },
  {
    imageName: '30-punta-arenas-fotografia-paisaje-chile-playa-diseno-deco-contemporaryart-artwork-arte-print-finart.jpg',
    isGallery: false,
    width: 879,
    size: 3,
    gallery: [],
  },
  {
    imageName: '31-san-pedro-de-atacama-fotografia-paisaje-chile-playa-diseno-deco-contemporaryart-artwork-arte-print-finart.jpg',
    isGallery: false,
    width: 886,
    size: 5,
    gallery: [],
  },
  {
    imageName: '32-retrato-vancouver-fotografia-paisaje-chile-diseno-deco-contemporaryart-artwork-arte-print-finart.jpg',
    isGallery: false,
    width: 389,
    size: 4,
    gallery: [],
  },
  {
    imageName: '33-retrato-vancouver-fotografia-paisaje-chile-diseno-deco-contemporaryart-artwork-arte-print-finart.jpg',
    isGallery: false,
    width: 389,
    size: 4,
    gallery: [],
  },
  {
    imageName: '34-retrato-vancouver-fotografia-paisaje-chile-diseno-deco-contemporaryart-artwork-arte-print-finart.jpg',
    isGallery: false,
    width: 389,
    size: 4,
    gallery: [],
  },
  {
    imageName: '35-retrato-vancouver-fotografia-paisaje-chile-diseno-deco-contemporaryart-artwork-arte-print-finart.jpg',
    isGallery: false,
    width: 389,
    size: 4,
    gallery: [],
  },
  {
    imageName: '36-retrato-vancouver-fotografia-paisaje-chile-diseno-deco-contemporaryart-artwork-arte-print-finart.jpg',
    isGallery: false,
    width: 389,
    size: 4,
    gallery: [],
  },
  {
    imageName: '37-brasil-sa-paulo-fotografia-paisaje-chile-playa-diseno-deco-contemporaryart-artwork-arte-print-finart.jpg',
    isGallery: false,
    width: 878,
    size: 3,
    gallery: [],
  },
  {
    imageName: '38-abandono-fotografia-paisaje-chile-santiago-diseno-deco-contemporaryart-artwork-arte-print-finart.jpg',
    isGallery: true,
    width: 389,
    size: 4,
    gallery: [
      '38-abandono-fotografia-paisaje-chile-santiago-diseno-deco-contemporaryart-artwork-arte-print-finart.jpg',
      '39-abandono-fotografia-paisaje-chile-santiago-diseno-deco-contemporaryart-artwork-arte-print-finart.jpg',
      '40-abandono-fotografia-paisaje-chile-santiago-diseno-deco-contemporaryart-artwork-arte-print-finart.jpg',
      '41-abandono-fotografia-paisaje-chile-santiago-diseno-deco-contemporaryart-artwork-arte-print-finart.jpg',
    ],
  },
];

const Gallery = () => {
  return (
    <div className="flex">
      {images2.map((item, key) => (
        <ImageGallery key={key} item={item} />
      ))}
    </div>
  );
}

export default Gallery;
