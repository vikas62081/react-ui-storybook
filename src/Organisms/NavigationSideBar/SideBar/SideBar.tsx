import React from 'react';
import Box from '@mui/material/Box';
import { Drawer } from '../Drawer/Drawer';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightIcon from '@mui/icons-material/ChevronRightRounded';
import { SideBarItem } from '../SideBarItems/SideBarItems';
import { GridContainer, GridItem, MyIconButton } from '../navigation.styles';
import { SideBarFooter } from '../SideBarFooter/SideBarFooter';

import { Grid } from '@mui/material';
import { COLORS } from '../../../colors';
import { getSidebarState, setSidebarState } from '../../../utility';

export type ItemProps = {
  title: string;
  icon: any;
  to: string;
};
export type SideBarProps = {
  checked?: boolean;
  SideBarItems?: ItemProps[];
  company?: string;
  address?: string;
  phone?: string;
  email?: string;
  image?: string;
  activeIndex?: number;
};

export const SideBar = ({
  SideBarItems,
  activeIndex,
  company,
  address,
  phone,
  email,
  image,
}: SideBarProps) => {
  let open = getSidebarState();
  const handleDrawerClose = () => {
    open = setSidebarState();
    window.location.reload();
  };

  return (
    <Box sx={{ display: 'flex' }} data-testid="nextGen-sideBar">
      <Drawer variant="permanent" open={open}>
        <SideBarItem SideBarItems={SideBarItems} activeIndex={activeIndex} />
        <GridItem>
          <MyIconButton onClick={handleDrawerClose} data-testid="handle-click">
            {open ? (
              <ChevronRightIcon style={{ color: COLORS.WHITE }} />
            ) : (
              <ChevronLeftIcon style={{ color: COLORS.WHITE }} />
            )}
          </MyIconButton>
        </GridItem>
        <GridContainer>
          <Grid item sm={12}>
            <Divider />
            <SideBarFooter
              open={open}
              company={company}
              address={address}
              phone={phone}
              email={email}
              image={image}
            />
          </Grid>
        </GridContainer>
      </Drawer>
    </Box>
  );
};
