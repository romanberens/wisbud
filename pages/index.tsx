import React from 'react';
import Head from 'next/head';
import { Box, Grid, Typography } from '@mui/material';
import ServiceCard from '../components/ServiceCard';
import ParallaxSection from '../components/ParallaxSection';
import DrawerMenu from '../components/DrawerMenu';
import GallerySection from '../components/GallerySection';
import AboutUsSection from '../components/AboutUsSection';
import ContactSection from '../components/ContactSection';
import RecommendationsSection from '../components/RecommendationsSection';

const SERVICES = [
  {
    title: 'Ogrodzenia Betonowe',
    description: 'Wytrzymałe ogrodzenia betonowe.',
    image: '/images/ogrodzenie-betonowe.jpg',
    operatingArea: 'Kujawsko-Pomorskie: Włocławek, Lipno, Fabianki; Mazowieckie: Płock, Gostynin',
  },
  {
    title: 'Ogrodzenia Panelowe',
    description: 'Panelowe ogrodzenia dla nowoczesnych przestrzeni.',
    image: '/images/ogrodzenia_panel.jpg',
    operatingArea: 'Kujawsko-Pomorskie: Rypin, Golub-Dobrzyń; Mazowieckie: Sierpc, Sochaczew',
  },
];

const Home: React.FC = () => {
  return (
    <>
      {/* SEO and Metadata */}
      <Head>
        <title>Wisbud - Ogrodzenia w Kujawsko-Pomorskim i Mazowieckim</title>
        <meta
          name="description"
          content="Firma Wisbud oferuje budowę ogrodzeń betonowych, murowanych i panelowych na terenie województw kujawsko-pomorskiego i mazowieckiego, w miejscowościach takich jak Włocławek, Lipno, Fabianki, Płock i okolice."
        />
        <meta
          name="keywords"
          content="ogrodzenia betonowe, ogrodzenia panelowe, ogrodzenia murowane, Włocławek, Lipno, Fabianki, Płock, kujawsko-pomorskie, mazowieckie, Wisbud"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Wisbud - Ogrodzenia w Kujawsko-Pomorskim i Mazowieckim" />
        <meta property="og:description" content="Trwałe i estetyczne ogrodzenia betonowe, panelowe i murowane. Firma Wisbud - profesjonalizm i jakość." />
        <meta property="og:image" content="/images/ogrodzenie-betonowe.jpg" />
        <meta property="og:url" content="https://wisbud.onenetworks.pl" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Wisbud",
            "description": "Budowa ogrodzeń betonowych, panelowych i murowanych na terenie województw kujawsko-pomorskiego i mazowieckiego.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Włocławek",
              "addressRegion": "kujawsko-pomorskie",
              "addressCountry": "PL"
            },
            "areaServed": [
              { "@type": "Place", "name": "Kujawsko-Pomorskie" },
              { "@type": "Place", "name": "Mazowieckie" }
            ],
            "url": "https://wisbud.onenetworks.pl"
          }
          `}
        </script>

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Drawer Menu */}
      <DrawerMenu />

      {/* Parallax Section */}
      <ParallaxSection />

      {/* Home Section */}
      <Box id="home" sx={{ mt: 4 }} />

      {/* Services Section */}
      <Box id="uslugi" sx={{ mt: 4 }}>
        <Typography variant="h2" gutterBottom>
          Nasze Usługi
        </Typography>
        <Grid container spacing={4}>
          {SERVICES.map((service) => (
            <Grid key={service.title} item xs={12} sm={6} md={6}>
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
                operatingArea={service.operatingArea}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Gallery Section */}
      <Box id="galeria" sx={{ mt: 4 }}>
        <GallerySection />
      </Box>

      {/* Recommendations Section */}
      <Box id="rekomendacje" sx={{ mt: 4 }}>
        <RecommendationsSection />
      </Box>

      {/* About Us Section */}
      <Box id="onas" sx={{ mt: 4 }}>
        <AboutUsSection />
      </Box>

      {/* Contact Section */}
      <Box id="kontakt" sx={{ mt: 4 }}>
        <ContactSection />
      </Box>
    </>
  );
};

export default Home;
