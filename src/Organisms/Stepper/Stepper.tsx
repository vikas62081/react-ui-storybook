import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';
import { COLORS } from '../../colors';
export type StepProps = {
  label: string;
  icon: any;
};

export type CustomizedSteppersProps = {
  activeStep: number;
  steps: [StepProps];
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 20,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background: COLORS.MINT[200],
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background: COLORS.MINT[500],
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 8,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.grey[800]
        : COLORS.SLATE[300],
    borderRadius: 8,
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 48,
  height: 48,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    background: COLORS.SLATE[600],
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    background: COLORS.MINT[500],
  }),
  ...(!ownerState.completed &&
    !ownerState.active && {
      background: COLORS.WHITE,
      color: COLORS.SLATE[400],
      border: `1px ${COLORS.SLATE[300]} solid`,
    }),
}));

function ColorlibStepIcon(props: any) {
  const { active, completed, className, step } = props;

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {step.icon}
    </ColorlibStepIconRoot>
  );
}

export default function CustomizedSteppers(props: CustomizedSteppersProps) {
  const { activeStep, steps } = props;
  return (
    <Stepper
      alternativeLabel
      activeStep={activeStep}
      connector={<ColorlibConnector />}
    >
      {steps.map((step: StepProps) => (
        <Step key={step.label}>
          <StepLabel
            StepIconComponent={(props: any) => (
              <ColorlibStepIcon {...props} step={step} />
            )}
          >
            {step.label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
