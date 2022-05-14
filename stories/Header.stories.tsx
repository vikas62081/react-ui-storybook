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
import { ContainedButton, SideBar, SideBarProps } from '../src';
import ButtonAppBar from '../src/Organisms/Header/Header';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
const meta: Meta = {
  title: 'Components/Organisms/Header',
  component: ButtonAppBar,
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

const Template: Story<SideBarProps> = (args) => (
  <ButtonAppBar>
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        News
      </Typography>
      <ContainedButton color="secondary">Explore myCOI Central</ContainedButton>
      <ContainedButton color="secondary">Feedback</ContainedButton>
    </Toolbar>
  </ButtonAppBar>
);

export const Default = Template.bind({});

Default.args = {};
