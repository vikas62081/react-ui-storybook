import {
  Button,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';
import CheckCircleOutlineTwoToneIcon from '@mui/icons-material/CheckCircleOutlineTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import { replaceWithValue } from '../utils';
import '../auth.css';

export const VerifyOTP = ({
  code,
  setCode,
  isOTPVerified,
  hasError,
  verifyOTP,
  contact,
  labels,
}: any) => {
  const {
    description,
    disabled = false,
    inputLabel,
    inputType = 'number',
    placeholder,
  } = labels;
  const inputRef = useRef<any>(null); //
  const handleInputChange = (e: any) => {
    const input = e.target.value;
    setCode(input);
    if (input.length === 6) {
      inputRef?.current?.blur();
    }
  };
  return (
    <>
      <Typography gutterBottom marginBottom={5}>
        {replaceWithValue(description, contact)}
      </Typography>
      <form onSubmit={verifyOTP}>
        <Box display="flex" alignItems="center">
          <FormControl>
            <FormLabel sx={{ fontWeight: '500' }}>{inputLabel}</FormLabel>
            <TextField
              inputRef={inputRef}
              variant="outlined"
              size="small"
              placeholder={placeholder}
              type={inputType}
              value={code}
              onChange={handleInputChange}
              disabled={disabled || isOTPVerified}
              required
              error={code.length !== 6}
              style={{
                letterSpacing: code?.length === 0 ? 0 : 20,
              }}
              inputProps={{
                maxLength: 6, // set maximum input length to 6
              }}
            />
          </FormControl>
          <Box sx={{ margin: '22px 0 0 15px' }}>
            {isOTPVerified && (
              <Button
                variant="contained"
                color="primary"
                startIcon={<CheckCircleOutlineTwoToneIcon />}
              >
                2FA enabled
              </Button>
            )}

            {!hasError && !isOTPVerified && (
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={code.length !== 6}
              >
                Verify and enable 2FA
              </Button>
            )}
            {hasError && (
              <Button
                variant="contained"
                color="error"
                startIcon={<InfoTwoToneIcon />}
              >
                Code is incorrect
              </Button>
            )}
          </Box>
          {hasError && (
            <Box sx={{ margin: '20px 0 0 15px' }}>
              <Typography
                component={Button}
                variant="caption"
                style={{ textDecoration: 'underline' }}
              >
                Resend code
              </Typography>
            </Box>
          )}
        </Box>
      </form>
    </>
  );
};

export const SendOTP = ({
  handleSendOTP,
  contact,
  setContact,
  isOTPSent,
  labels,
}: any) => {
  const {
    description,
    disabled = false,
    inputLabel,
    inputType = 'text',
    placeholder,
  } = labels;

  return (
    <>
      <Typography gutterBottom marginBottom={5}>
        {description}
      </Typography>

      <form onSubmit={handleSendOTP}>
        <Box display="flex" alignItems="center">
          <FormControl>
            <FormLabel sx={{ fontWeight: '500' }}>{inputLabel}</FormLabel>
            <TextField
              variant="outlined"
              size="small"
              placeholder={placeholder}
              required
              type={inputType}
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              disabled={disabled}
            />
          </FormControl>
          <Box sx={{ margin: '22px 0 0 15px' }}>
            {isOTPSent ? (
              <Button
                startIcon={<CheckCircleOutlineTwoToneIcon />}
                variant="contained"
                color="primary"
              >
                Code sent!
              </Button>
            ) : (
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            )}
          </Box>
        </Box>
      </form>
    </>
  );
};
