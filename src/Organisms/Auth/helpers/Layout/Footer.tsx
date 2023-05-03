import React from 'react';
import { Grid, Button } from '@mui/material';

const AuthFooter = ({
  backBtnText = 'Back',
  nextBtnText = 'Next',
  onClickBackbtn = () => {},
  onClickNextBtn = () => {},
  isDisabledBackBtn = false,
  isDisabledNextBtn = false,
  hideNextBtn = false,
  // maxSteps = 3,
  activeStep = 0,
}) => {
  return (
    <Grid container justifyContent="space-between">
      <Grid item>
        <Button
          variant="outlined"
          disabled={activeStep === 0 || isDisabledBackBtn}
          onClick={onClickBackbtn}
        >
          {backBtnText}
        </Button>
      </Grid>
      <Grid item>
        {!hideNextBtn && (
          <Button
            variant="outlined"
            disabled={isDisabledNextBtn}
            onClick={onClickNextBtn}
          >
            {nextBtnText}
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default AuthFooter;
