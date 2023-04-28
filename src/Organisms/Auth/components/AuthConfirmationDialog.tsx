import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { COLORS } from '../../../colors';

const AuthConfirmationDialog = ({ handleClose, handleAuthClose }: any) => {
  return (
    <>
      <DialogContent
        style={{
          background: COLORS.FIREFLY[500],
          color: COLORS.WHITE,
          minWidth: 600,
          height: 250,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid>
          <DialogTitle>
            Two-factor authentication has not been enabled.
          </DialogTitle>
          <DialogContent>
            <Typography
              component={DialogContentText}
              gutterBottom
              color={COLORS.WHITE}
              align="center"
            >
              Do you want to set up 2FA later?
            </Typography>
          </DialogContent>
          <DialogActions style={{ justifyContent: 'center' }}>
            <Button onClick={handleAuthClose} color="secondary">
              Yes, quit
            </Button>
            <Button onClick={handleClose} variant="contained" color="secondary">
              No, continue
            </Button>
          </DialogActions>
        </Grid>
      </DialogContent>
    </>
  );
};

export default AuthConfirmationDialog;
