import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BasicDatePicker } from '../src';

const meta: Meta = {
  title: 'Components/Molecules/Date Picker',
  component: BasicDatePicker,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<any> = (args) => <BasicDatePicker {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: 'Select Date',
  oneTap: true,
};
