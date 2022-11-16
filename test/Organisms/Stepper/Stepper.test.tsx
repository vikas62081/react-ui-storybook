import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomizedSteppers from '../../../src/Organisms/Stepper/Stepper';

import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';

const args = {
  activeStep: 2,
  steps: [
    { label: 'Create an ad group', icon: <GroupAddIcon /> },
    { label: 'Create an add', icon: <VideoLabelIcon /> },
    { label: 'Create an ad', icon: <VideoLabelIcon /> },
  ],
};

describe('< CustomizedSteppers/>', () => {
  describe('click', () => {
    test('renders CustomizedSteppers component has text', () => {
      render(<CustomizedSteppers {...args} />);
      expect(screen.getByText(`${args.steps[0].label}`)).toBeInTheDocument();
    });
    test('renders CustomizedSteppers component has text at sept 1', () => {
      render(<CustomizedSteppers {...args} />);
      expect(screen.getByText(`${args.steps[1].label}`)).toBeInTheDocument();
    });
  });
});
