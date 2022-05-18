import * as React from 'react';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { COLORS } from '../../colors';
import styled from '@emotion/styled';
import { SvgIcon, Toolbar } from '@mui/material';
import { ContainedButton } from '../../Atoms/Button/Button';
import { MycoiLogo } from '../../Atoms/IconCompoenent/MycoiLogo';

const StyledAppBar = styled(AppBar)({
  minHeight: 88,
  justifyContent: 'center',
  backgroundColor: COLORS.WHITE,
  color: COLORS.FIREFLY[50],
});
const ButtonAppBar = ({ children, ...props }: AppBarProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar {...props}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <SvgIcon component={MycoiLogo} fontSize="large" />
          </Box>

          <ContainedButton sx={{ mr: 2 }} color="secondary">
            Explore myCOI Central
          </ContainedButton>
          <ContainedButton color="secondary">Feedback</ContainedButton>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

export default ButtonAppBar;
