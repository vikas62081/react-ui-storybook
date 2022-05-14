import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { COLORS } from '../../colors';

const ButtonAppBar = ({ children, ...props }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{ background: COLORS.WHITE, color: COLORS.FIREFLY[50] }}
        {...props}
      >
        {children}
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
