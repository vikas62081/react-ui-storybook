import React, { useState } from 'react';
import DialogContent from '@mui/material/DialogContent';
import AuthContent from '../components/AuthContent';
import AuthHeader from '../components/Header';
import AuthFooter from '../components/Footer';
import { VerifyOTP, SendOTP } from '../components';

const EMAIL_VERIFICATION_MAX_STEPS = 2;
const INITIAL_ACTIVE_STEP = 0;
const AuthForm = ({ handleExit, labels }: any) => {
  const [activeStep, setActiveStep] = useState(INITIAL_ACTIVE_STEP);
  const [disableNextButton, setDisableNextButton] = useState(true);

  const [code, setCode] = useState('');
  const [isOTPVerified, setIsOTPVerified] = useState(false);
  const [hasError, setHasError] = useState(false);

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

  const contents = [
    {
      backBtn: 'Back: Select factor',
      nextBtn: 'Next: Enter code',
      Component: SendOTP,
    },
    {
      backBtn: 'Back: Send code',
      nextBtn: 'Close',
      Component: VerifyOTP,
    },
  ];
  const { backBtn, nextBtn, Component } = contents[activeStep];
  return (
    <DialogContent>
      <AuthHeader
        activeStep={activeStep}
        totalSteps={EMAIL_VERIFICATION_MAX_STEPS}
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
      />
    </DialogContent>
  );
};

export default AuthForm;
