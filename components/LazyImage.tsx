// Ścieżka: /components/LazyImage.tsx

import React, { useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  width: string | number;
  height: string | number;
  placeholder?: string; // Optional placeholder while loading
  className?: string; // Optional className for styling
  style?: React.CSSProperties; // Optional inline styles
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  placeholder,
  className,
  style,
}) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => setLoaded(true);

  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
  };

  return (
    <div
      style={{
        width,
        height,
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
      className={className}
    >
      {/* Placeholder */}
      {!loaded && placeholder && (
        <img
          src={placeholder}
          alt="placeholder"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'blur(10px)',
          }}
        />
      )}
      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        width="100%"
        height="100%"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.5s ease',
          position: 'absolute',
          objectFit: 'cover',
        }}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
    </div>
  );
};

export default LazyImage;
