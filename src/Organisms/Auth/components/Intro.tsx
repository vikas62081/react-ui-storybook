import {
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import { COLORS } from '../../../colors';
import { AUTH_INTRO_TEXT, WHAT_IS_2FA } from '../constant';

const AuthIntro = () => {
  return (
    <Grid>
      <Grid container>
        <Grid sm={7} item>
          <DialogTitle id="alert-dialog-title">
            What is two-factor authentication?
          </DialogTitle>
        </Grid>
        <Grid sm={5} item>
          <DialogTitle id="alert-dialog-title">Return to 2FA setup</DialogTitle>
        </Grid>
      </Grid>

      <DialogContent>
        <Grid container spacing={3}>
          <Grid sm={6} item>
            {WHAT_IS_2FA?.map((inst) => (
              <Typography component={DialogContentText} gutterBottom>
                {inst}
              </Typography>
            ))}
          </Grid>
          <Grid
            sm={6}
            item
            style={{ background: COLORS.SLATE[100], borderRadius: 16 }}
          >
            <Typography fontWeight="500">
              Here's an example of how 2FA works:
            </Typography>
            <List>
              {AUTH_INTRO_TEXT.map((inst, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: 'subtitle2',
                      fontWeight: 400,
                    }}
                  >
                    {index + 1}. {inst}.
                  </ListItemText>
                </ListItem>
              ))}
            </List>
            <Typography component={DialogContentText}></Typography>
            <Typography fontWeight="500" gutterBottom>
              This extra step makes it much harder for someone to hack into your
              account.
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Grid>
  );
};

export default AuthIntro;
