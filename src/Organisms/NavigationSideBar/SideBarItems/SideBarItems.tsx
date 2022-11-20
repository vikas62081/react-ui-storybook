import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import ListItem from '@mui/material/ListItem';
import { ListContainer } from '../navigation.styles';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useStyles } from '../navigation.styles';
import { getActiveTabState, setActiveTabState } from '../../../utility';
import { ItemProps, SidebarItemProps } from '../type';

export const SideBarItem = (props: SidebarItemProps) => {
  // const active = getActiveTabState();
  const classes = useStyles();

  const getActiveState = () => {
    if (props.SideBarItems) {
      const currentIdx = props.SideBarItems.findIndex(
        (SideBarItem) => SideBarItem?.to == window.location.pathname
      );
      if (currentIdx != null) {
        setActiveTabState(currentIdx);
        return currentIdx;
      } else {
        return getActiveTabState();
      }
    } else {
      return getActiveTabState();
    }
  };

  const handleChange = (index: number) => {
    setActiveTabState(index);
  };
  return (
    <>
      <ListContainer data-testid="To-be-Active">
        {props?.SideBarItems?.map((SideBarItem: ItemProps, index: number) => (
          <a
            key={index}
            href={SideBarItem?.to}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <ListItem
              style={{ margin: '4px 0' }}
              button
              key={index}
              className={
                getActiveState() === index
                  ? classes.selected
                  : classes.notSelected
              }
              onClick={() => handleChange(index)}
            >
              <Tooltip title={SideBarItem?.title}>
                <ListItemIcon
                  sx={{ minWidth: '48px' }}
                  // className={
                  //   active === index ? classes.activeIcon : classes.inactiveIcon
                  // }
                >
                  <img
                    width={30}
                    src={SideBarItem?.icon}
                    style={{ marginLeft: '-3px' }}
                  />
                </ListItemIcon>
              </Tooltip>
              <ListItemText primary={SideBarItem?.title} />
            </ListItem>
          </a>
        ))}
      </ListContainer>
    </>
  );
};
