import React, { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';

const RecommendationsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/images/ogrodzenia_mur.jpg',
    '/images/ogrodzenie-betonowe.jpg',
    '/images/ogrodzenia_panel.jpg',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Box sx={{ backgroundColor: '#f9f9f9', padding: '40px 20px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}>
      <Container maxWidth="xl">
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: '#333', textAlign: 'center' }}>
          Rekomendacje
        </Typography>

        {/* Karuzela rekomendacji */}
        <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
          <Box
            sx={{
              display: 'flex',
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {slides.map((src, index) => (
              <Box key={index} sx={{ minWidth: '100%' }}>
                <img src={src} alt={`Projekt ${index + 1}`} style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }} />
              </Box>
            ))}
          </Box>

          {/* Kontrolek nawigacji */}
          <Box sx={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}>
            <button onClick={prevSlide} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '2rem' }}>❮</button>
          </Box>
          <Box sx={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}>
            <button onClick={nextSlide} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '2rem' }}>❯</button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default RecommendationsSection;
