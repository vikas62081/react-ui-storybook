import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import ListItem from '@mui/material/ListItem';
import { ListContainer } from '../navigation.styles';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useStyles } from '../navigation.styles';
import { ItemProps } from '../SideBar/SideBar';
import { getActiveTabState, setActiveTabState } from '../../../utility';

export const SideBarItem = (props: any) => {
  const active = getActiveTabState();
  const classes = useStyles();

  const handleChange = (index: number) => {
    setActiveTabState(index);
  };
  return (
    <>
      <ListContainer data-testid="To-be-Active">
        {props?.SideBarItems?.map((SideBarItem: ItemProps, index: number) => (
          <a
            href={SideBarItem.to}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <ListItem
              style={{ margin: '4px 0' }}
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
                  <img width={30} src={SideBarItem.icon} />
                </ListItemIcon>
              </Tooltip>
              <ListItemText primary={SideBarItem.title} />
            </ListItem>
          </a>
        ))}
      </ListContainer>
    </>
  );
};
