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
import { SideBarReact } from '../src';
import myCOILogo from '../src/assets/myCOI.svg';
import { SideBarProps } from '../src/Organisms/NavigationSideBar/type';

const meta: Meta = {
  title: 'Components/Organisms/SideBarReact',
  component: SideBarReact,
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

const Template: Story<SideBarProps> = (args) => <SideBarReact {...args} />;

export const Default = Template.bind({});

Default.args = {
  isEnterpriseChild: true,
  company: 'Company Name',
  address: '2642 Ross Street #1138c Chicago, IL ',
  email: 'morehumanthanhuman.com',
  phone: '708-252-0235',
  activeIndex: 2,
  image: myCOILogo,
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
