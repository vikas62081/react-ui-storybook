import { Card, CardActions, CardContent } from '@mui/material';
import * as React from 'react';

export type CustomizedCardProps = {
  children: React.ReactElement;
  actions: React.ReactElement;
};

export default function CustomizedCard(props: any) {
  const { children, actions = null, ...rest } = props;
  return (
    <Card {...rest}>
      <CardContent>{children}</CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
}
