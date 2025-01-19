// pages/_app.tsx
import React, { useEffect } from 'react';
import '../styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DrawerMenu from '../components/DrawerMenu';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <DrawerMenu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
