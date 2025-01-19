import React from 'react';
import { Button, styled } from '@mui/material';

interface CallToActionButtonProps {
  label: string;
  onClick: () => void;
  ariaLabel?: string; 
  variant?: 'text' | 'outlined' | 'contained'; 
  size?: 'small' | 'medium' | 'large'; 
}

const StyledButton = styled(Button)(({ theme }) => ({
  // Tło w odcieniach grafitu
  background: 'linear-gradient(135deg, #4a4a4a, #2f2f2f)',
  color: theme.palette.common.white,
  fontSize: '1.2rem',
  fontWeight: 'bold',
  padding: '12px 24px',
  borderRadius: '8px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.4)',
  },
}));

const CallToActionButton: React.FC<CallToActionButtonProps> = ({
  label,
  onClick,
  ariaLabel,
  variant = 'contained',
  size = 'medium',
}) => {
  return (
    <StyledButton
      onClick={onClick}
      variant={variant}
      size={size}
      aria-label={ariaLabel || label}
    >
      {label}
    </StyledButton>
  );
};

export default CallToActionButton;
