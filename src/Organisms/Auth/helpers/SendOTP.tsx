import {
  Button,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CheckCircleOutlineTwoToneIcon from '@mui/icons-material/CheckCircleOutlineTwoTone';

import '../auth.css';

const SendOTP = ({
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

export default SendOTP;
