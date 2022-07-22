import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BasicMenu, MenuProps } from '../src';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LockIcon from '@mui/icons-material/Lock';

const meta: Meta = {
  title: 'Components/Atoms/Basicmenu',
  component: BasicMenu,
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

const Template: Story<MenuProps> = (args) => <BasicMenu {...args} />;

export const SelectContainer = Template.bind({});

SelectContainer.args = {
  userName: 'TestUser',
  list: [
    {
      title: 'Account Settings',
      icon: <SettingsIcon fontSize="small" />,
    },
    {
      title: 'Change Password',
      icon: <LockIcon fontSize="small" />,
    },
    {
      title: 'Log out',
      icon: <LogoutOutlinedIcon fontSize="small" />,
    },
  ],
};
