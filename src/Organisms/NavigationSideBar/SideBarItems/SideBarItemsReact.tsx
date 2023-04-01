import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import ListItem from '@mui/material/ListItem';
import { ListContainer } from '../navigation.styles';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IListProps, SidebarItemProps } from '../../type';
import { Link } from 'react-router-dom';
import { Icon, Typography } from '@mui/material';

export const SideBarItemReact = (props: SidebarItemProps) => {
  const [activeItem, setActiveItem] = useState(0);

  const handleChange = (index: number) => {
    setActiveItem(index);
  };
  const content = (sideBarItem: IListProps, index: number) => {
    const itemContent = (
      <ListItem
        style={{ margin: '4px 0' }}
        button
        key={index}
        className={activeItem === index ? 'selected' : 'not-selected'}
        onClick={() => handleChange(index)}
      >
        <Tooltip title={sideBarItem?.title}>
          <ListItemIcon sx={{ minWidth: '48px' }} color="primary">
            <Icon color="primary"> {sideBarItem?.icon}</Icon>
          </ListItemIcon>
        </Tooltip>

        <ListItemText
          primary={
            <Typography color="primary">{sideBarItem?.title}</Typography>
          }
        />
      </ListItem>
    );
    return sideBarItem?.to ? (
      <Link to={sideBarItem.to} key={index} style={{ textDecoration: 'none' }}>
        {itemContent}
      </Link>
    ) : (
      itemContent
    );
  };
  return (
    <ListContainer data-testid="To-be-Active">
      {props?.sideBarItems?.map((sideBarItem: IListProps, index: number) =>
        content(sideBarItem, index)
      )}
    </ListContainer>
  );
};
