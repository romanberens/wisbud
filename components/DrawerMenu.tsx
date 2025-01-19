import React, { useState } from 'react';
import { Drawer, List, ListItemButton, ListItemText, Divider, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerMenu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false); // Zarządzanie stanem otwartości szuflady

  const handleScrollTo = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo(0, 0); // Przewiń stronę na górę
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Przycisk nawigacji (hamburger) */}
      <IconButton
        onClick={toggleDrawer}
        sx={{
          position: 'fixed',
          top: 16,
          left: 16,
          zIndex: 1201,
          padding: '10px',
          backgroundColor: open ? 'rgba(255, 255, 255, 0.8)' : '#333',
          color: open ? '#333' : 'white',
          borderRadius: '50%',
          boxShadow: 2,
          transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
          '&:hover': {
            backgroundColor: open ? '#555' : '#444',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
          },
          '& .MuiSvgIcon-root': {
            fontSize: '2rem',
            transition: 'color 0.3s',
            color: open ? '#333' : 'white',
            '&:hover': {
              color: 'white',
            },
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer */}
      <Drawer
        sx={{
          width: 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
            background: '#333',
            borderRight: '2px solid #444',
            color: 'white',
            paddingTop: '60px',
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >
        <List>
          <ListItemButton onClick={() => handleScrollTo('home')}>
            <ListItemText primary="Strona Główna" />
          </ListItemButton>
          <ListItemButton onClick={() => handleScrollTo('uslugi')}>
            <ListItemText primary="Usługi" />
          </ListItemButton>
          <ListItemButton onClick={() => handleScrollTo('galeria')}>
            <ListItemText primary="Galeria" />
          </ListItemButton>
          <ListItemButton onClick={() => handleScrollTo('rekomendacje')}>
            <ListItemText primary="Rekomendacje" />
          </ListItemButton>
          <ListItemButton onClick={() => handleScrollTo('onas')}>
            <ListItemText primary="O nas" />
          </ListItemButton>
          <ListItemButton onClick={() => handleScrollTo('kontakt')}>
            <ListItemText primary="Kontakt" />
          </ListItemButton>
        </List>
        <Divider />
      </Drawer>
    </>
  );
};

export default DrawerMenu;
