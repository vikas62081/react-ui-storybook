import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Drawer } from '../Drawer/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightIcon from '@mui/icons-material/ChevronRightRounded';
import { SideBarItem } from '../SideBarItems/SideBarItems';
import { useStyles } from './SideBar.styles';
import { SideBarFooter } from '../SideBarFooter/SideBarFooter';
import { Grid } from '@mui/material';

export type ItemProps = {
  title: string;
  icon: any;
  to: string;
};
export type SideBarProps = {
  checked: boolean;
  SideBarItems: ItemProps[];
};

export const SideBar = ({ checked, SideBarItems }: SideBarProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(checked);

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }} data-testid="nextGen-sideBar">
      <Drawer variant="permanent" open={open}>
        <SideBarItem SideBarItems={SideBarItems} />
        <Grid container className={classes.footerContainer} rowSpacing={4}>
          <Grid item sm={12} className={classes.sidebarActionContainer}>
            <IconButton
              className={classes.sidebarActionIcon}
              onClick={handleDrawerClose}
              data-testid="handle-click"
            >
              {open ? (
                <ChevronRightIcon color="primary" />
              ) : (
                <ChevronLeftIcon color="primary" />
              )}
            </IconButton>

          </Grid>
          <Grid item sm={12}>
            <Divider />
            <SideBarFooter open={open} />
          </Grid>
        </Grid>

      </Drawer>
    </Box>
  );
};
