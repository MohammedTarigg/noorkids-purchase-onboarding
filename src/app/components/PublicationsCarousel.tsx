'use client';

import Image from 'next/image';
import { useRef } from 'react';

const publications = [
  { src: '/publications_carousel/hardvard.png', alt: 'Harvard' },
  { src: '/publications_carousel/NPR.png', alt: 'NPR' },
  { src: '/publications_carousel/bbc.gif', alt: 'BBC' },
  { src: '/publications_carousel/huffpost.png', alt: 'HuffPost' },
  { src: '/publications_carousel/ap.png', alt: 'Associated Press' },
  { src: '/publications_carousel/Al-Jazeera-Logo-500x281.png', alt: 'Al Jazeera' },
  { src: '/publications_carousel/trt_world.jpg', alt: 'TRT World' },
  { src: '/publications_carousel/m.jpg', alt: 'M' },
];

export default function PublicationsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate the publications array for seamless infinite scroll
  const duplicatedPublications = [...publications, ...publications];

  const handleMouseEnter = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <div className="w-full overflow-hidden" style={{ marginTop: 'var(--spacing-lg)' }}>
      {/* Label */}
      <p 
        className="text-xs font-medium text-center"
        style={{ 
          color: 'var(--color-text-light)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          marginBottom: 'var(--spacing-md)',
        }}
      >
        Featured In
      </p>
      
      {/* Carousel Container */}
      <div 
        className="relative w-full"
        style={{
          height: '60px',
          overflow: 'hidden',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Scrolling Track */}
        <div ref={trackRef} className="publications-carousel-track">
          {duplicatedPublications.map((pub, index) => (
            <div
              key={`${pub.src}-${index}`}
              className="publications-carousel-item"
            >
              <Image
                src={pub.src}
                alt={pub.alt}
                width={140}
                height={60}
                className="object-contain publications-carousel-image"
                style={{
                  maxHeight: '60px',
                  maxWidth: '140px',
                  height: 'auto',
                  width: 'auto',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

