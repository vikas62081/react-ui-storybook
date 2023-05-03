import React, { useEffect, useState } from 'react';
import DialogContent from '@mui/material/DialogContent';
import AuthContent from '../helpers/Layout/AuthContent';
import AuthHeader from '../helpers/Layout/Header';
import AuthFooter from '../helpers/Layout/Footer';
import {
  AUTH_MAX_STEPS,
  AUTH_TYPE,
  COMPONENTS,
  INITIAL_ACTIVE_STEP,
} from '../constant';

const AuthForm = ({ authType, handleExit, labels }: any) => {
  const [activeStep, setActiveStep] = useState(INITIAL_ACTIVE_STEP);
  const [disableNextButton, setDisableNextButton] = useState(true);

  const [code, setCode] = useState('');
  const [isOTPVerified, setIsOTPVerified] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [qrCode, setQrCode] = useState(123567);
  const [contact, setContact] = useState('abc@gmail.com');
  const [isOTPSent, setIsOTPSent] = useState(false);

  const handleOTPVerification = (e: any) => {
    e.preventDefault();
    // make an api call to verify otp
    setIsOTPVerified(true);
    enbaleNextButton();
    // setHasError(true);
  };

  const enbaleNextButton = () => {
    setDisableNextButton(false);
  };

  const handleDisableNextButton = () => {
    setDisableNextButton(true);
  };

  const handleOTPSend = (e: any) => {
    e.preventDefault();
    //make api call for sending otp email
    setIsOTPSent(true);
    enbaleNextButton();
  };

  useEffect(() => {
    if (AUTH_TYPE.app === authType) {
      enbaleNextButton();
    }
  }, []);

  const {
    backBtn,
    nextBtn,
    Component,
    hideNextBtn = false,
  } = COMPONENTS.filter((auth) => auth.authType.includes(authType))[activeStep];

  return (
    <DialogContent>
      <AuthHeader
        activeStep={activeStep}
        totalSteps={AUTH_MAX_STEPS}
        icon={<labels.header.icon fontSize="large" />}
        handleExit={handleExit}
        headersLabel={labels?.header}
      />

      <AuthContent>
        <Component
          code={code}
          setCode={setCode}
          isOTPVerified={isOTPVerified}
          hasError={hasError}
          verifyOTP={handleOTPVerification}
          contact={contact}
          handleSendOTP={handleOTPSend}
          setContact={setContact}
          isOTPSent={isOTPSent}
          labels={labels?.content[activeStep]}
          qrCode={qrCode}
        />
      </AuthContent>
      <AuthFooter
        onClickNextBtn={() => {
          setActiveStep((pre) => pre + 1);
          handleDisableNextButton();
        }}
        onClickBackbtn={() => setActiveStep((pre) => pre - 1)}
        activeStep={activeStep}
        backBtnText={backBtn}
        nextBtnText={nextBtn}
        isDisabledNextBtn={disableNextButton}
        isDisabledBackBtn={isOTPVerified}
        hideNextBtn={hideNextBtn}
      />
    </DialogContent>
  );
};

export default AuthForm;
