import React from 'react';
import { Meta, Story } from '@storybook/react';
import CompliantCard from '../src/Organisms/CompliantCard/CompliantCard';
import { Button, Typography } from '@mui/material';
const meta: Meta = {
  title: 'Components/Organisms/CompliantCard',
  component: CompliantCard,
  argTypes: {},
};

export default meta;

const Template: Story<any> = (args) => (
  <CompliantCard {...args}></CompliantCard>
);

export const Default = Template.bind({});

Default.args = {};
