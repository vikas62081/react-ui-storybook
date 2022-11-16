import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { ListProps } from '../../Organisms/Header/Header';
import {
  StyledMenu,
  useStyles,
} from '../../Organisms/NavigationSideBar/navigation.styles';
import { COLORS } from '../../colors';

export type MenuProps = {
  list?: ListProps[];
  userName?: string;
};

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.FIREFLY[100],
    },
  },
});

export const BasicMenu = ({ list, userName }: MenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <StyledMenu
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon sx={{ color: COLORS.SLATE[400] }} />}
          variant="outlined"
          color="primary"
          sx={{ color: COLORS.FIREFLY[500] }}
        >
          {userName}
        </StyledMenu>
      </ThemeProvider>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {list?.map((li: ListProps, index: number) => (
          <a href={li?.to} className={classes?.link} key={index}>
            <MenuItem onClick={handleClose} className={classes.menuItem}>
              {li?.icon && (
                <ListItemIcon style={{ minWidth: '30px' }}>
                  {li?.icon}
                </ListItemIcon>
              )}
              {li?.title}
            </MenuItem>
          </a>
        ))}
      </Menu>
    </div>
  );
};
