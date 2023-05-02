import { Dialog } from '@mui/material';
import React, { useState } from 'react';
import AuthConfirmationDialog from './components/AuthConfirmationDialog';
import { AUTH_LABELS, AUTH_TYPE } from './constant';
import AuthIntro from './components/Intro';
import SelectAuth from './components/SelectAuth';
import AuthForm from './Form';
import AppAuth from './components/app';
import './auth.css';
export const Auth = () => {
  const [authType, setAuthType] = useState('');
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
  const [openDialog, setOpenDialog] = useState(true);

  const handleToggleDialog = () => {
    setOpenDialog((pre) => !pre);
  };
  const handleAuthSeletion = (type: string) => {
    setAuthType(type);
  };
  const handleDialogClose = () => {
    setOpenConfirmationDialog(false);
  };
  const handleDialogOpen = () => {
    setOpenConfirmationDialog(true);
  };
  const handleAuthClose = () => {
    setAuthType('');
    handleDialogClose();
  };

  return (
    <>
      <Dialog
        open={openDialog}
        onClose={handleToggleDialog}
        fullWidth
        maxWidth={'md'}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <AuthIntro /> */}
        {!authType && !openConfirmationDialog && (
          <SelectAuth
            handleChange={handleAuthSeletion}
            handleClose={() => {
              handleDialogOpen();
            }}
          />
        )}

        {openConfirmationDialog && (
          <AuthConfirmationDialog
            handleClose={handleDialogClose}
            handleAuthClose={handleAuthClose}
          />
        )}

        {[AUTH_TYPE.email, AUTH_TYPE.sms].includes(authType) &&
          !openConfirmationDialog && (
            <AuthForm
              handleExit={handleDialogOpen}
              labels={AUTH_LABELS[authType]}
            />
          )}

        {[AUTH_TYPE.app].includes(authType) && !openConfirmationDialog && (
          <AppAuth
            handleExit={handleDialogOpen}
            labels={AUTH_LABELS[authType]}
          />
        )}
      </Dialog>
    </>
  );
};
