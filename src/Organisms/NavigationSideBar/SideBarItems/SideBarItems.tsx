import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import ListItem from '@mui/material/ListItem';
import { ListContainer } from '../navigation.styles';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';
import ListItemText from '@mui/material/ListItemText';
import { useStyles } from '../navigation.styles';
import { ItemProps } from '../SideBar/SideBar';

export const SideBarItem = (props: any) => {
  const classes = useStyles();

  const [active, setActive] = useState(-1);
  const handleChange = (index: number) => {
    setActive(index);
  };
  return (
    <ListContainer data-testid="To-be-Active">
      {props?.SideBarItems?.map((SideBarItem: ItemProps, index: number) => (
        <Link
          to={SideBarItem.to}
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <ListItem
            button
            key={SideBarItem.title}
            className={
              active === index ? classes.selected : classes.notSelected
            }
            onClick={() => handleChange(index)}
          >
            <Tooltip title={SideBarItem.title}>
              <ListItemIcon
                className={
                  active === index ? classes.activeIcon : classes.inactiveIcon
                }
              >
                {SideBarItem.icon}
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary={SideBarItem.title} />
          </ListItem>
        </Link>
      ))}
    </ListContainer>
  );
};
