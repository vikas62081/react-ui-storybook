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

const VerifyOTP = ({
  code,
  setCode,
  isOTPVerified,
  hasError,
  verifyOTP,
  contact,
  labels,
  isReSendCodeAllowed = true,
}: any) => {
  const {
    description,
    disabled = false,
    inputLabel,
    inputType = 'number',
    placeholder,
    submitButton = 'Verify and enable 2FA',
  } = labels ?? {};

  const inputRef = useRef<any>(null);

  const handleInputChange = (e: any) => {
    const input = e.target.value;
    setCode(input);
    if (input?.length === 6) {
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
              error={code?.length !== 6}
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
                disabled={code?.length !== 6}
              >
                {submitButton}
              </Button>
            )}
            {hasError && (
              <Button
                variant="contained"
                color="error"
                startIcon={<InfoTwoToneIcon />}
                style={{ minWidth: 196 }}
              >
                Code is incorrect
              </Button>
            )}
          </Box>
          {hasError && isReSendCodeAllowed && (
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

export default VerifyOTP;
