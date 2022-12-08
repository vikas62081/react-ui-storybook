import { Card, CardActions, CardContent } from '@mui/material';
import * as React from 'react';

export type CustomizedCardProps = {
  children: React.ReactElement;
  actions: React.ReactElement;
  style?: any;
};

export default function CustomizedCard(props: any) {
  const { children, actions = null, style, ...rest } = props;
  return (
    <Card {...rest}>
      <CardContent style={style}>{children}</CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
}
