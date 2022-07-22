import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ContainedButton } from '../src';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';

const meta: Meta = {
  title: 'Components/Atoms/Button',
  component: ContainedButton,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: {
        type: 'select',
        options: ['text', 'contained', 'outlined'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'neutral',
          'ghost',
          'tertiary',
          'destructive',
        ],
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
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/wDnN6FrtMTtJ6W0IworORn/myCOI-Design-System?node-id=588%3A13133',
    },
  },
};

export default meta;

const Template: Story = (args) => <ContainedButton {...args} />;

export const ButtonContainer = Template.bind({});

ButtonContainer.args = {
  children: 'Click Me',
  variant: 'contained',
  color: 'primary',
  startIcon: <VerifiedUserOutlinedIcon />,
  endIcon: <VerifiedUserOutlinedIcon />,
};
