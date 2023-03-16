import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ButtonAppBarReact } from '../src';
import myCOILogo from '../src/assets/myCOI.svg';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LockIcon from '@mui/icons-material/Lock';
import { IHeaderProps } from '../src/Organisms/type';

const meta: Meta = {
  title: 'Components/Organisms/HeaderReact',
  component: ButtonAppBarReact,
  argTypes: {
    onClick: { action: 'clicked' },
    title: {
      control: {
        type: 'text',
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
      url: 'https://www.figma.com/file/hwMJlFL4e49ojm5qOKZRgy/myCoi-Navigation?node-id=0%3A1',
    },
  },
};

export default meta;

const Template: Story<IHeaderProps> = (args) => <ButtonAppBarReact {...args} />;

export const Default = Template.bind({});

Default.args = {
  title1: 'Explore myCOI Central',
  title2: 'Feedback',
  clientId: 'Kim',
  userName: 'TestUser',
  image: myCOILogo,
  menuList: [
    {
      title: 'Account Settings',
      icon: <SettingsIcon fontSize="small" />,
      to: '/',
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
  optionList: [
    {
      title: 'Sign Out',
      icon: <SettingsIcon fontSize="small" />,
    },
  ],
};
