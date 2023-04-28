import { DialogContent } from '@mui/material';
import React, { useState } from 'react';
import AuthHeader from '../Header';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import AuthContent from '../AuthContent';
import AuthFooter from '../Footer';
const EMAIL_VERIFICATION_MAX_STEPS = 2;
const INITIAL_ACTIVE_STEP = 0;

const AppAuth = ({ handleExit, labels }) => {
  const [activeStep, setActiveStep] = useState(INITIAL_ACTIVE_STEP);
  const [disableNextButton, setDisableNextButton] = useState(true);

  const [code, setCode] = useState('');
  const [isOTPVerified, setIsOTPVerified] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [contact, setContact] = useState('abc@gmail.com');
  const [isOTPSent, setIsOTPSent] = useState(false);

  return (
    <>
      <DialogContent>
        <AuthHeader
          activeStep={activeStep}
          totalSteps={EMAIL_VERIFICATION_MAX_STEPS}
          icon={<labels.header.icon fontSize="large" />}
          handleExit={handleExit}
          headersLabel={labels?.header}
        />

        <AuthContent>Hello</AuthContent>
        <AuthFooter
          onClickNextBtn={() => {
            setActiveStep((pre) => pre + 1);
          }}
          onClickBackbtn={() => setActiveStep((pre) => pre - 1)}
          activeStep={activeStep}
          //   backBtnText={backBtn}
          //   nextBtnText={nextBtn}
          isDisabledNextBtn={disableNextButton}
          isDisabledBackBtn={isOTPVerified}
        />
      </DialogContent>
    </>
  );
};

export default AppAuth;
