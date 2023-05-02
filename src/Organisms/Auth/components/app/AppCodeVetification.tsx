import { Alert, Divider, Grid, Link, Typography } from '@mui/material';
import React, { useState } from 'react';
import QrCode2TwoToneIcon from '@mui/icons-material/QrCode2TwoTone';
import { COLORS } from '../../../../colors';
import { VerifyOTP } from '..';

const AppCodeVerification = ({
  qrCode,
  code,
  setCode,
  isOTPVerified,
  hasError,
  verifyOTP,
  labels,
}: any) => {
  const [showCode, setShowCode] = useState(false);

  const handleCodeShowToggle = () => {
    setShowCode((pre) => !pre);
  };
  return (
    <Grid container gap={2}>
      <Grid item xs>
        <Typography variant="h6">Scan QR code</Typography>
        <Typography gutterBottom>
          Add a new account in your auth app and scan the QR code using your
          phone’s camera.
        </Typography>
        {showCode ? (
          <Grid>
            <Alert severity="warning">
              <Typography gutterBottom>Can't scan QR code?</Typography>
              <Typography gutterBottom>
                If you’re unable to scan the QR code with your camera, enter the
                following code into your authentication app to link it to your
                myCOI account.
              </Typography>
              <Typography
                style={{ background: COLORS.BUTTER[100] }}
                letterSpacing={20}
                padding={1}
                width={155}
                borderRadius={1}
              >
                {qrCode}
              </Typography>
              <Typography component={Link} onClick={handleCodeShowToggle}>
                Try to scan the QR code again
              </Typography>
            </Alert>
          </Grid>
        ) : (
          <Grid>
            <Grid item justifyContent="center" display="flex">
              <QrCode2TwoToneIcon fontSize="large" style={{ fontSize: 175 }} />
            </Grid>
            <Alert severity="warning">
              Can't scan this barcode?{' '}
              <Typography
                component={Link}
                variant="body2"
                onClick={handleCodeShowToggle}
              >
                Copy code instead
              </Typography>
              .
            </Alert>
          </Grid>
        )}
      </Grid>
      <Divider orientation="vertical" flexItem />
      <Grid item xs>
        <Typography variant="h6">Verify Code</Typography>
        <VerifyOTP
          code={code}
          setCode={setCode}
          isOTPVerified={isOTPVerified}
          hasError={hasError}
          verifyOTP={verifyOTP}
          labels={labels[0]}
          isReSendCodeAllowed={false}
        />
        {isOTPVerified && (
          <Grid paddingTop={2}>
            <Typography variant="h6">
              Two-factor auth, check! Hit close and dive into work like a boss.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default AppCodeVerification;
