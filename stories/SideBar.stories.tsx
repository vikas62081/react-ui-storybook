import React from 'react';
import { Meta, Story } from '@storybook/react';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import { SideBar, SideBarProps } from '../src';

const meta: Meta = {
  title: 'Components/Organisms/SideBar',
  component: SideBar,
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

const Template: Story<SideBarProps> = (args) => <SideBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  checked: true,
  SideBarItems: [
    {
      title: 'Home',
      icon: <ListAltRoundedIcon />,
      to: '/',
    },
    {
      title: 'Compliance Review',
      icon: <PeopleAltRoundedIcon />,
      to: '/compliance-review',
    },
    {
      title: 'Divisions ',
      icon: <SpeedRoundedIcon />,
      to: '/divisions',
    },
    {
      title: 'Clients',
      icon: <ViewQuiltRoundedIcon />,
      to: '/clients',
    },
    {
      title: 'Home',
      icon: <LeaderboardRoundedIcon />,
      to: '/',
    },
    {
      title: 'Compliance Review',
      icon: <BookmarkRoundedIcon />,
      to: '/compliance-review',
    },
    {
      title: 'Divisions ',
      icon: <FolderRoundedIcon />,
      to: '/divisions',
    },
    {
      title: 'Clients',
      icon: <HelpRoundedIcon />,
      to: '/clients',
    },
  ],
};
