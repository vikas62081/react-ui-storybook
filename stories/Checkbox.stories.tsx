import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ContainedCheckbox, CheckboxProps } from '../src';

const meta: Meta = {
  title: 'Components/Atoms/Checkbox',
  component: ContainedCheckbox,
  argTypes: {
    onClick: { action: 'clicked' },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },

    disabled: {
      control: {
        type: 'boolean',
      },
    },
    defaultChecked: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<CheckboxProps> = (args) => (
  <ContainedCheckbox {...args} />
);

export const Default = Template.bind({});
export const Disabled = Template.bind({});
export const Secondary = Template.bind({});
Default.args = {
  label: 'Click Me',
  variant: 'contained',
  color: 'primary',
};
Secondary.args = {
  label: 'Click Me',
  variant: 'contained',
  color: 'success',
};
Disabled.args = {
  label: 'Label',
  disabled: true,
  size: 'small',
};
