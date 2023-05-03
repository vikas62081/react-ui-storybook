import { Dialog } from '@mui/material';
import React, { useState } from 'react';
import AuthConfirmationDialog from './helpers/AuthConfirmationDialog';
import { AUTH_LABELS, AUTH_TYPE } from './constant';
import AuthIntro from './helpers/AuthIntro';
import SelectAuth from './helpers/SelectAuth';
import AuthForm from './Form';
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

        {[AUTH_TYPE.email, AUTH_TYPE.sms, AUTH_TYPE.app].includes(authType) &&
          !openConfirmationDialog && (
            <AuthForm
              authType={authType}
              handleExit={handleDialogOpen}
              labels={AUTH_LABELS[authType]}
            />
          )}
      </Dialog>
    </>
  );
};
