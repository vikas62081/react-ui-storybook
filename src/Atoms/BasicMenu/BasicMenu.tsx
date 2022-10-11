import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { ListProps } from '../../Organisms/Header/Header';
import {
  StyledMenu,
  useStyles,
} from '../../Organisms/NavigationSideBar/navigation.styles';

export type MenuProps = {
  list?: ListProps[];
  userName?: string;
};

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
      <StyledMenu
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {userName}
      </StyledMenu>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {list?.map((li: ListProps, index: number) => (
          <MenuItem onClick={handleClose} key={index}>
            <a href={li.to} className={classes.link}>
              <ListItemIcon>{li.icon}</ListItemIcon>
              {li.title}
            </a>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
