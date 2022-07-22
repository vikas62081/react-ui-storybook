import * as React from 'react';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { COLORS } from '../../colors';
import styled from '@emotion/styled';
import { Toolbar } from '@mui/material';
import { ContainedButton } from '../../Atoms/Button/Button';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { BasicMenu } from '../../Atoms/BasicMenu/BasicMenu';
import { Image } from '../../Common/Iconimage';

const StyledAppBar = styled(AppBar)({
  minHeight: 78,
  justifyContent: 'center',
  backgroundColor: COLORS.WHITE,
  color: COLORS.FIREFLY[50],
});
export type ListProps = {
  title: string;
  icon: any;
  to: string;
};
export type ButtonAppBarProps = {
  title1?: string;
  title2?: string;
  userName?: string;
  image?: string;
  appBar?: AppBarProps;
  menuList?: ListProps[];
};

export const ButtonAppBar = ({
  title1,
  title2,
  image,
  userName,
  menuList,
  ...props
}: ButtonAppBarProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar {...props}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Image link={image} height={40} width={40} />
          </Box>

          <ContainedButton sx={{ mr: 2 }} color="secondary" size="small">
            {title1}
          </ContainedButton>
          <ContainedButton sx={{ mr: 2 }} color="secondary">
            {title2}
          </ContainedButton>
          <Badge sx={{ mr: 2 }} badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
          <BasicMenu list={menuList} userName={userName} />
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};
