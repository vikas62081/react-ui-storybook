import React from 'react';
import { Grid, Divider } from '@mui/material';
const AuthContent = ({ children }: any) => {
  return (
    <Grid>
      <Divider style={{ margin: '30px 0' }} />
      {children}
      <Divider style={{ margin: '30px 0' }} />
    </Grid>
  );
};

export default AuthContent;
