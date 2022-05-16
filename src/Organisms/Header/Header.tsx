import * as React from 'react';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { COLORS } from '../../colors';
import styled from '@emotion/styled';
const StyledAppBar = styled(AppBar)({
  minHeight: 88,
  justifyContent: 'center',
  backgroundColor: COLORS.WHITE,
  color: COLORS.FIREFLY[50],
});
const ButtonAppBar = ({ children, ...props }: AppBarProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar {...props}>{children}</StyledAppBar>
    </Box>
  );
};

export default ButtonAppBar;
