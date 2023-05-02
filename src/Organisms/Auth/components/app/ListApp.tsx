import { Avatar, Grid, Typography } from '@mui/material';
import React from 'react';
import PlayStore from '../../../../assets/playStore.svg';
import Twilio from '../../../../assets/twilio.svg';
import AppStore from '../../../../assets/appStore.svg';
import QrCode2TwoToneIcon from '@mui/icons-material/QrCode2TwoTone';
import { COLORS } from '../../../../colors';
import { APP_SERVICE_PROVIDER } from '../../constant';

const ListApp = () => {
  return (
    <Grid>
      <Typography marginBottom={2}>
        First, download and install the Twilio Authy authentication app on your
        smartphone. If you already have Authy installed, you can continue to the
        next step to verify your code.
      </Typography>

      <Grid
        style={{ background: COLORS.SLATE[100] }}
        padding={2}
        borderRadius={1}
      >
        <Grid container alignItems="center" marginBottom={2}>
          <Grid item>
            <img
              alt="mud icon"
              src={Twilio}
              style={{ width: 50, marginRight: 10 }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h6">Twilio Authy</Typography>
          </Grid>
        </Grid>
        <Grid container flexWrap="inherit" gap={2}>
          {APP_SERVICE_PROVIDER?.map((app) => (
            <Grid
              item
              sm={6}
              container
              justifyContent="space-between"
              alignItems="center"
              borderRadius={2}
              style={{
                background: COLORS.WHITE,
              }}
              padding={1}
            >
              <Grid item>
                <img alt="play store" src={app.src} />
              </Grid>
              <Grid item>
                <QrCode2TwoToneIcon
                  fontSize="large"
                  style={{ fontSize: 100 }}
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ListApp;
