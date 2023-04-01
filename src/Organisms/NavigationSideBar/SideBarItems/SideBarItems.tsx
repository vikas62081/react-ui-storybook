import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import ListItem from '@mui/material/ListItem';
import { ListContainer } from '../navigation.styles';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { getActiveTabState, setActiveTabState } from '../../../utility';
import { IListProps, SidebarItemProps } from '../../type';

export const SideBarItem = (props: SidebarItemProps) => {
  const getActiveState = () => {
    if (props.sideBarItems) {
      const currentIdx = props.sideBarItems.findIndex(
        (sideBarItem) => sideBarItem?.to === window.location.pathname
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
        {props?.sideBarItems?.map((sideBarItem: IListProps, index: number) => (
          <a
            key={index}
            href={sideBarItem?.to}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <ListItem
              style={{ margin: '4px 0' }}
              button
              key={index}
              className={
                getActiveState() === index ? 'selected' : 'not-selected'
              }
              onClick={() => handleChange(index)}
            >
              <Tooltip title={sideBarItem?.title}>
                <ListItemIcon sx={{ minWidth: '48px' }}>
                  {typeof sideBarItem.icon === 'string' ? (
                    <img
                      width={30}
                      src={sideBarItem?.icon}
                      style={{ marginLeft: '-3px' }}
                    />
                  ) : (
                    sideBarItem?.icon
                  )}
                </ListItemIcon>
              </Tooltip>
              <ListItemText primary={sideBarItem?.title} />
            </ListItem>
          </a>
        ))}
      </ListContainer>
    </>
  );
};
