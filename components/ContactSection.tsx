import React from 'react';
import { Box, Grid, Typography, Container, Button } from '@mui/material';
import { FaFacebook, FaWhatsapp, FaPhoneAlt, FaFacebookMessenger } from 'react-icons/fa'; // Dodajemy ikonki Messengera i telefonu

const ContactSection: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={4}>
        {/* Informacje kontaktowe */}
        <Grid item xs={12} sm={6}>
          <Box sx={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
              Imię Nazwisko
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              Stanowisko, właściciel
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              <FaPhoneAlt /> 123 456 789
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              Adres siedziby: Miasto 10, 11-111 Miasto
            </Typography>
          </Box>
        </Grid>

        {/* Ikony mediów społecznościowych */}
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>Skontaktuj się z nami:</Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
              {/* Ikona Facebook */}
              <Button
                variant="contained"
                sx={{ backgroundColor: '#1877f2', color: 'white', padding: '12px', borderRadius: '50%' }}
                href="https://www.facebook.com"
                target="_blank"
              >
                <FaFacebook size={30} />
              </Button>
              {/* Ikona WhatsApp */}
              <Button
                variant="contained"
                sx={{ backgroundColor: '#25D366', color: 'white', padding: '12px', borderRadius: '50%' }}
                href="https://wa.me/123456789"
                target="_blank"
              >
                <FaWhatsapp size={30} />
              </Button>
              {/* Ikona Messenger */}
              <Button
                variant="contained"
                sx={{ backgroundColor: '#0084FF', color: 'white', padding: '12px', borderRadius: '50%' }}
                href="https://m.me/yourFacebookID"  // Link do Messengera (zastąp "yourFacebookID" swoim ID)
                target="_blank"
              >
                <FaFacebookMessenger size={30} />
              </Button>
              {/* Ikona telefonu - Uruchamia aplikację telefoniczną */}
              <Button
                variant="contained"
                sx={{ backgroundColor: '#4CAF50', color: 'white', padding: '12px', borderRadius: '50%' }}
                href="tel:+123456789" // Link do telefonu
              >
                <FaPhoneAlt size={30} />
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactSection;
