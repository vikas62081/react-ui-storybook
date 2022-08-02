import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Grid } from '../src';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';

const meta: Meta = {
  title: 'Components/Organisms/Grid',
  component: Grid,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: Story = (args) => <Grid {...args} />;

export const AgGrid = Template.bind({});

AgGrid.args = {
  children: 'Click Me',
  variant: 'contained',
  color: 'primary',
  startIcon: <VerifiedUserOutlinedIcon />,
  endIcon: <VerifiedUserOutlinedIcon />,
};
