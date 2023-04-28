import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import SmsTwoToneIcon from '@mui/icons-material/SmsTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
export const AUTH_TYPE = {
  email: 'EMAIL',
  sms: 'SMS',
  app: 'AUTHENTICATION_APP',
};

export const AUTH_INTRO_TEXT = [
  'You try to log in to your account',
  ' The system prompts you to enter your password',
  'After you enter your password, the system sends a code to your phone via email, text, or an authenticator app',
  'You enter the code to complete the login process',
];
export const WHAT_IS_2FA = [
  'Two-factor authentication (also known as 2FA) is an extra layer of security that helps protect your accounts from unauthorized access',
  ' It does this by requiring you to provide two different pieces of evidence, or "factors," before you can log in',
  'The first factor is something you know, like your password. The second factor is something you have, like your phone',
];

export const AUTH_LABELS = {
  [AUTH_TYPE.email]: {
    header: {
      title: 'EMAIL',
      description: 'Email address two-factor authentication',
      icon: EmailTwoToneIcon,
    },
    content: [
      {
        description:
          "We'll send a verification code to the following email address tied to your account.",
        inputLabel: 'Email Address',
        inputType: 'email',
        disabled: true,
        placeholder: 'Enter email',
      },
      {
        description: 'Enter the 6 digit code sent to <>.',
        inputLabel: 'Verification Code',
        inputType: 'text',
        disabled: false,
        placeholder: 'Enter code...',
      },
    ],
  },
  [AUTH_TYPE.sms]: {
    header: {
      title: 'SMS',
      description: 'Mobile phone two-factor authentication',
      icon: SmsTwoToneIcon,
    },
    content: [
      {
        description:
          "Enter your mobile number. We'll send a verification code.",
        inputLabel: 'Mobile Number',
        inputType: 'number',
        disabled: false,
        placeholder: 'Enter number...',
      },
      {
        description: 'Enter the 6 digit code sent to <>.',
        inputLabel: 'Verification Code',
        inputType: 'text',
        disabled: false,
        placeholder: 'Enter code...',
      },
    ],
  },
  [AUTH_TYPE.app]: {
    header: {
      title: 'AUTHENTICATION APP',
      description: 'Time-based OTP',
      icon: LockTwoToneIcon,
    },
    content: {
      description:
        "We'll send a verification code to the following email address tied to your account.",
      inputLabel: 'Email Address',
      inputType: 'email',
      disabled: true,
    },
  },
};
