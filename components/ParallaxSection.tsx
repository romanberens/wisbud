import React from 'react';
import { Box, Typography } from '@mui/material';
import ParallaxTilt from 'react-parallax-tilt';
import { Fade, Slide } from 'react-awesome-reveal';

const ParallaxSection = () => {
  return (
    <ParallaxTilt
      style={{
        position: 'relative',
        height: '500px',
        backgroundImage: 'url("/images/ogrodzenie.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        borderRadius: '0 0 12px 12px',
        overflow: 'hidden', // Potrzebne dla efektu parallax
      }}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      transitionSpeed={2000}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: '10%',
          transform: 'translateY(-50%)',
          textAlign: 'right',
          maxWidth: '40%',
          color: 'common.white',
        }}
      >
        <Fade cascade duration={1500} damping={0.1} triggerOnce>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 2,
              textShadow: '0px 0px 10px rgba(0, 0, 0, 0.9)',
            }}
          >
            Witamy na stronie Wisbud
          </Typography>
        </Fade>

        <Slide direction="up" duration={1500} triggerOnce>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.9)',
              textShadow: '2px 2px 15px rgba(0, 0, 0, 0.6)',
            }}
          >
            Nasza specjalność to ogrodzenia.
          </Typography>
        </Slide>
      </Box>
    </ParallaxTilt>
  );
};

export default ParallaxSection;
