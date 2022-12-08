import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { COIToggleButton, ICOIToggleButton } from '../src';

const meta: Meta = {
  title: 'Components/Atoms/Toggle Button',
  component: COIToggleButton,
  argTypes: {},
};

export default meta;

const Template: Story<ICOIToggleButton> = (args) => (
  <COIToggleButton {...args} />
);

export const Default = Template.bind({});
export const Inactive = Template.bind({});

const options = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
];
const handlePeriodTab = (value: any) => {
  console.log(value);
};
Default.args = {
  options: options,
  activeTab: options[0],
  onTabChanged: handlePeriodTab,
};
Inactive.args = {
  options: options,
  activeTab: options[1],
  onTabChanged: handlePeriodTab,
};
