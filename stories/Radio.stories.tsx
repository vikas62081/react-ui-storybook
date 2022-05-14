import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CombinedRadio, RadioProps } from '../src';

const meta: Meta = {
  title: 'Components/Atoms/Radio',
  component: CombinedRadio,
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
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<RadioProps> = (args) => <CombinedRadio {...args} />;

export const Default = Template.bind({});
export const Disabled = Template.bind({});
export const Secondary = Template.bind({});
Default.args = {
  label: 'Click Me',
  color: 'primary',
};
Secondary.args = {
  label: 'Click Me',
  color: 'secondary',
};
Disabled.args = {
  label: 'Radio',
  disabled: true,
};
