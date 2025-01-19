import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';

interface ServiceCardProps {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  price?: string;
  detailedDescription?: string;
  operatingArea?: string; // Optional field
  sx?: object;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image = '/images/placeholder.png',
  icon = <BuildIcon />,
  price = 'Cena: do ustalenia',
  detailedDescription = 'Brak dodatkowych informacji.',
  operatingArea,
  sx,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #f4f4f4, #e0e0e0)',
          width: {
            xs: '90%', // Mobile view
            sm: '300px', // Small screens
            md: '85%', // Desktop view
          },
          maxWidth: '85%',
          margin: '0 auto', // Centering
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0px 6px 30px rgba(0, 0, 0, 0.2)',
          },
          ...sx,
        }}
      >
        <div onClick={handleClickOpen} style={{ cursor: 'pointer' }}>
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              width: '100%',
              height: '180px',
              borderRadius: '12px 12px 0 0',
              objectFit: 'cover',
            }}
          />
          <CardContent>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                color: '#333',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                textAlign: 'center',
              }}
            >
              {icon}
              {title}
            </Typography>
            <Typography sx={{ color: '#666', textAlign: 'center' }}>{description}</Typography>
            <Typography sx={{ color: '#2196F3', textAlign: 'center', mt: 1 }}>{price}</Typography>
          </CardContent>
        </div>
        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          onClick={handleClickOpen}
        >
          Dowiedz się więcej
        </Button>
      </Card>

      {/* Operating Area Section Below the Card (if defined) */}
      {operatingArea && (
        <Box
          sx={{
            mt: 2,
            p: 2,
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #e0f7fa, #e0f2f1)',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#00796b' }}>
            Obszar działalności:
          </Typography>
          <Typography variant="body1" sx={{ color: '#004d40' }}>
            {operatingArea}
          </Typography>
        </Box>
      )}

      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {price}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {detailedDescription}
          </Typography>
          {operatingArea && (
            <Typography variant="body2" sx={{ mb: 2 }}>
              Obszar działalności: {operatingArea}
            </Typography>
          )}
          <Box component="img" src={image} alt={title} sx={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Zamknij
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ServiceCard;
