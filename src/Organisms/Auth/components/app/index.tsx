import { DialogContent } from '@mui/material';
import React, { useState } from 'react';
import AuthHeader from '../Header';
import AuthContent from '../AuthContent';
import AuthFooter from '../Footer';
import { AUTH_MAX_STEPS, INITIAL_ACTIVE_STEP } from '../../constant';
import ListApp from './ListApp';
import AppCodeVerification from './AppCodeVetification';

const AppAuth = ({ handleExit, labels }: any) => {
  const [activeStep, setActiveStep] = useState(INITIAL_ACTIVE_STEP);
  const [disableNextButton, setDisableNextButton] = useState(false);

  const [code, setCode] = useState('');
  const [isOTPVerified, setIsOTPVerified] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [qrCode, setQrCode] = useState(123567);
  const handleOTPVerification = (e: any) => {
    e.preventDefault();
    // setIsOTPVerified(true);
    setHasError(true);
  };
  const handleDisableNextButton = () => {
    setDisableNextButton(true);
  };
  return (
    <>
      <DialogContent>
        <AuthHeader
          activeStep={activeStep}
          totalSteps={AUTH_MAX_STEPS}
          icon={<labels.header.icon fontSize="large" />}
          handleExit={handleExit}
          headersLabel={labels?.header}
        />

        <AuthContent>
          {activeStep === 0 && <ListApp />}
          {activeStep === 1 && (
            <AppCodeVerification
              qrCode={qrCode}
              labels={labels.content}
              code={code}
              setCode={setCode}
              isOTPVerified={isOTPVerified}
              hasError={hasError}
              verifyOTP={handleOTPVerification}
            />
          )}
        </AuthContent>
        <AuthFooter
          onClickNextBtn={() => {
            setActiveStep((pre) => pre + 1);
            handleDisableNextButton();
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
