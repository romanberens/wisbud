import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const GallerySection: React.FC = () => {
  const images = [
    '/images/ogrodzenia_beton.jpg',
    '/images/ogrodzenia_panel.jpg',
    '/images/ogrodzenie.jpg',
    '/images/ogrodzenia_mur.jpg',
    '/images/ogrodzenie-betonowe.jpg'
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Zobacz nasze realizacje
      </Typography>
      <Grid container spacing={4}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box 
              component="img"
              src={image}
              alt={`Gallery Image ${index + 1}`}
              sx={{ width: '100%', cursor: 'pointer', borderRadius: '8px' }}
              onClick={() => openLightbox(index)}
            />
          </Grid>
        ))}
      </Grid>

      {isOpen && (
        <Lightbox
          mainSrc={images[currentImageIndex]}
          nextSrc={images[(currentImageIndex + 1) % images.length]}
          prevSrc={images[(currentImageIndex + images.length - 1) % images.length]}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={goToPrevious}
          onMoveNextRequest={goToNext}
        />
      )}
    </Box>
  );
};

export default GallerySection;
