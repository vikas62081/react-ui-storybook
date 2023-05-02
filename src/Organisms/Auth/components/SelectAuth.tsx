import {
  DialogContent,
  DialogContentText,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import React from 'react';
import AuthList from './AuthList';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import SmsTwoToneIcon from '@mui/icons-material/SmsTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import AuthHeader from './Header';
import ShieldTwoToneIcon from '@mui/icons-material/ShieldTwoTone';
import { AUTH_TYPE } from '../constant';

const SelectAuth = ({ handleChange, handleClose }: any) => {
  const aut5hOptions = [
    {
      title: 'EMAIL',
      description: 'Email address',
      icon: <EmailTwoToneIcon />,
      type: AUTH_TYPE.email,
    },
    {
      title: 'SMS',
      description: 'Mobile phone',
      icon: <SmsTwoToneIcon />,
      type: AUTH_TYPE.sms,
    },
    {
      title: 'AUTHENTICATION APP',
      description: 'Time-based OTP',
      icon: <LockTwoToneIcon />,
      type: AUTH_TYPE.app,
    },
  ];
  return (
    <DialogContent>
      <AuthHeader
        icon={<ShieldTwoToneIcon fontSize="large" />}
        showSteps={false}
        handleExit={handleClose}
        headersLabel={{
          title: 'Secure your myCOI account',
          description: 'Enable two-factor authentication',
        }}
      />
      <DialogContent>
        <DialogContent>
          <DialogContentText>
            We take account security seriously and to better serve you we’re
            implementing two-factor authentication.
            <Typography
              component={Link}
              href="/"
              gutterBottom
              style={{ display: 'inline', marginLeft: 10 }}
              marginLeft={1}
            >
              Learn more
            </Typography>
          </DialogContentText>

          <Grid>
            <Typography variant="h6">
              Select one of the following factors to begin
            </Typography>
            <AuthList list={aut5hOptions} handleChange={handleChange} />
          </Grid>
        </DialogContent>
      </DialogContent>
    </DialogContent>
  );
};

export default SelectAuth;
