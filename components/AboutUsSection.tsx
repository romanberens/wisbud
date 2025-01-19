import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { CheckCircle, Work, Lightbulb } from '@mui/icons-material'; // Ikony reprezentujące wartości

const AboutUsSection: React.FC = () => {
  return (
    <Box 
      sx={{
        backgroundColor: '#f1f1f1',  // Jaśniejsze tło sekcji
        padding: { xs: '20px', sm: '40px 20px' }, // Zmieniamy padding w zależności od szerokości ekranu
        borderRadius: '10px', // Zaokrąglone rogi
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Cień wokół sekcji
        background: 'linear-gradient(135deg, #ffffff, #e3f2fd)', // Jasny gradient
      }}
    >
      <Container maxWidth="xl"> {/* Zwiększamy szerokość kontenera na większych ekranach */}
        {/* Nagłówek sekcji */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 600, // Lżejszy, bardziej elegancki font
            color: '#3b3b3b', // Ciemniejszy kolor czcionki dla lepszej kontrastowości
            textAlign: 'center', 
            fontSize: { xs: '2rem', sm: '2.5rem' }, // Responsywne rozmiary czcionki
            fontFamily: '"Roboto", sans-serif', // Wybór eleganckiego fonta
          }}
        >
          O nas
        </Typography>

        {/* Wartości firmy z ikonami */}
        <Grid container spacing={4} sx={{ textAlign: 'center' }}>
          <Grid item xs={12} sm={4}>
            <Box>
              <CheckCircle sx={{ fontSize: 60, color: '#66bb6a' }} /> {/* Zmiana koloru na zielony */}
              <Typography variant="h6" sx={{ mt: 2, color: '#3b3b3b' }}>Jakość</Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>Dbamy o najwyższą jakość w każdym detalu.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <Work sx={{ fontSize: 60, color: '#42a5f5' }} /> {/* Zmiana koloru na niebieski */}
              <Typography variant="h6" sx={{ mt: 2, color: '#3b3b3b' }}>Profesjonalizm</Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>Działamy profesjonalnie, z pełnym zaangażowaniem.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <Lightbulb sx={{ fontSize: 60, color: '#ffb300' }} /> {/* Zmiana koloru na złoty */}
              <Typography variant="h6" sx={{ mt: 2, color: '#3b3b3b' }}>Innowacyjność</Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>Wdrażamy nowoczesne rozwiązania budowlane.</Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Tekst o firmie */}
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            color: '#444',  // Ciemniejszy tekst
            textAlign: 'justify',
            marginBottom: '20px',
            fontFamily: '"Roboto", sans-serif',
          }}
        >
          Nasza firma specjalizuje się w budowie ogrodzeń zarówno murowanych, betonowych, jak i panelowych. Naszym celem jest dostarczenie solidnych i estetycznych rozwiązań, które będą służyć przez lata. W ciągu wielu lat naszej działalności zrealizowaliśmy liczne prace, które spełniły oczekiwania naszych klientów, wnosząc wartość i bezpieczeństwo do ich przestrzeni.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            color: '#444',
            textAlign: 'justify',
            marginBottom: '20px',
            fontFamily: '"Roboto", sans-serif',
          }}
        >
          W naszej pracy kładziemy duży nacisk na jakość wykonania oraz indywidualne podejście do klienta. Współpracujemy z najlepszymi dostawcami materiałów budowlanych i stale podnosimy nasze umiejętności, aby dostarczać nowoczesne rozwiązania zgodne z najnowszymi trendami.
        </Typography>

        {/* Ostatni paragraf */}
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            color: '#444',
            textAlign: 'justify',
            marginBottom: '20px',
            fontFamily: '"Roboto", sans-serif',
          }}
        >
          Nasze doświadczenie, zespół profesjonalistów oraz pasja do tego, co robimy, pozwalają nam tworzyć produkty, które łączą w sobie funkcjonalność i estetykę.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutUsSection;
