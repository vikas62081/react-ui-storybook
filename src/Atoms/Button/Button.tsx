import React from 'react';
import Button from '@mui/material/Button';
import { ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { getButtonColors } from './buttonColors';

export const ContainedButton = ({
  children,
  color = 'primary',
  ...rest
}: ButtonProps) => {
  const style = getButtonColors(color);
  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    ...style.root,
    '&:hover': {
      ...style.hover,
    },
    '&:active': {
      ...style.active,
    },
    '&:focus': {
      ...style.focus,
    },
  });

  return (
    <BootstrapButton variant="contained" disableRipple {...rest}>
      {children}
    </BootstrapButton>
  );
};
