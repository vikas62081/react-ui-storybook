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

Default.args = {
  effectiveDate: new Date().toLocaleDateString(),
  expiresDate: new Date().toLocaleDateString(),
  title: 'Workers Compensation',
  id: 'WE227784A',
  agency: 'Adam Osborn',
  carrier: 'State Farm Insurance',
  dropdown1: 'NAIC: 7803',
  rating: 'AM Best Rating: A++',
  complaint: '100% Compliant',
  dropdown1Option: [
    {
      title: 'Hey',
    },
  ],
  ratingOption: [
    {
      title: 'Hello',
    },
    {
      title: 'Hey',
    },
  ],
};
