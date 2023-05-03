import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import { COLORS } from '../../../colors';

const AuthList = ({ list, handleChange }: any) => {
  return (
    <List
      sx={{
        display: 'grid',
        gridTemplateColumns: '33% 33% 33%',
        columnGap: 0.5,
        color: COLORS.WHITE,
      }}
    >
      {list?.map((item: any) => (
        <ListItem
          key={item.title}
          sx={{
            background: `linear-gradient(180deg, #1F3854 0%, #0C2744 100%)`,
            borderRadius: 2,
          }}
          disablePadding
          onClick={() => handleChange(item?.type)}
        >
          <ListItemButton>
            <ListItemAvatar>{item.icon}</ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  sx={{ display: 'block' }}
                  component="span"
                  variant="caption"
                  color={COLORS.SLATE[300]}
                >
                  {item.title}
                </Typography>
              }
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  color={COLORS.SLATE[100]}
                >
                  {item.description}
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default AuthList;
