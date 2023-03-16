import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
  StyledMenu,
  useStyles,
} from '../../Organisms/NavigationSideBar/navigation.styles';
import { COLORS } from '../../colors';
import { Link } from 'react-router-dom';
import { IItemProps, IMenuProps } from '../type';

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.FIREFLY[100],
    },
  },
});

export const BasicMenuReact = ({ list, userName, onItemClick }: IMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (item: IItemProps) => {
    if (typeof onItemClick === 'function') {
      onItemClick(item);
    }
    handleClose();
  };
  const content = (item: IItemProps, index: number) => {
    const itemContent = (
      <MenuItem
        key={item.title}
        onClick={() => handleItemClick(item)}
        className={classes.menuItem}
      >
        {item?.icon && (
          <ListItemIcon key={item.title} style={{ minWidth: '30px' }}>
            {item.icon}
          </ListItemIcon>
        )}
        {item?.title}
      </MenuItem>
    );
    return item?.to ? (
      <Link to={item.to} className={classes.link} key={index}>
        {itemContent}
      </Link>
    ) : (
      itemContent
    );
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
        {list?.map((li: IItemProps, index: number) => content(li, index))}
      </Menu>
    </div>
  );
};
