import React from 'react';
import { Meta, Story } from '@storybook/react';
import CustomizedSteppers, {
  CustomizedSteppersProps,
} from '../src/Organisms/Stepper/Stepper';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
const meta: Meta = {
  title: 'Components/Organisms/Stepper',
  component: CustomizedSteppers,
  argTypes: {},
};

export default meta;

const Template: Story<CustomizedSteppersProps> = (args) => (
  <CustomizedSteppers {...args} />
);

export const Default = Template.bind({});
export const Second = Template.bind({});
export const Next = Template.bind({});

const steps = [
  { label: 'Select campaign settings', icon: <SettingsIcon /> },
  { label: 'Create an ad group', icon: <GroupAddIcon /> },
  { label: 'Create an ad', icon: <VideoLabelIcon /> },
  { label: 'Create an ad', icon: <VideoLabelIcon /> },
];
Default.args = {
  activeStep: 0,
  steps,
};
Second.args = {
  activeStep: 1,
  steps,
};
Next.args = {
  activeStep: 2,
  steps,
};
