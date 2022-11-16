import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import ListItem from '@mui/material/ListItem';
import { ListContainer } from '../navigation.styles';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useStyles } from '../navigation.styles';
import { ItemProps } from '../SideBar/SideBar';
import { getActiveTabState, setActiveTabState } from '../../../utility';

export type SidebarProps = {
  SideBarItems: ItemProps[] | undefined;
  activeIndex: number | undefined;
};

export const SideBarItem = (props: SidebarProps) => {
  // const active = getActiveTabState();
  const classes = useStyles();

  const getActiveState = () => {
    if (props.SideBarItems) {
      const currentIdx = props.SideBarItems.findIndex(
        (SideBarItem) => SideBarItem.To == window.location.pathname
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
            href={SideBarItem.To}
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
              <Tooltip title={SideBarItem.Title}>
                <ListItemIcon
                  sx={{ minWidth: '48px' }}
                  // className={
                  //   active === index ? classes.activeIcon : classes.inactiveIcon
                  // }
                >
                  <img
                    width={30}
                    src={SideBarItem.Icon}
                    style={{ marginLeft: '-3px' }}
                  />
                </ListItemIcon>
              </Tooltip>
              <ListItemText primary={SideBarItem.Title} />
            </ListItem>
          </a>
        ))}
      </ListContainer>
    </>
  );
};
